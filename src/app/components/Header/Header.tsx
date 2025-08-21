'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';    
import { useAuth } from '../../providers/AuthProvider';

const Header = () => {
    const router = useRouter();
    const { user, loading, signOut } = useAuth();
    const [openUser, setOpenUser] = useState(false);
    const [search, setSearch] = useState('');

    const onSubmitSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const q = search.trim();
        const url = q ? `/products?q=${encodeURIComponent(q)}` : '/products';
        router.push(url);
    };
    return (
        <div className='bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50'>
            <div className='max-w-6xl mx-auto px-4'>
              <div className='flex justify-between items-center h-16'>
                {/* Logo */}
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => router.push('/')}>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">SS</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">ShopSphere</span>
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 -ml-1">Market</span>
                </div>
                {/* Navigation (decluttered) */}
                <div className="hidden md:flex items-center space-x-6">
                    <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-200 hover:underline decoration-blue-600 decoration-2" onClick={() => router.push('/')}>Home</span>
                    <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-200 hover:underline decoration-blue-600 decoration-2" onClick={() => router.push('/products')}>Products</span>
                    <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-200 hover:underline decoration-blue-600 decoration-2" onClick={() => router.push('/support')}>Support</span>
                    <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-200 hover:underline decoration-blue-600 decoration-2" onClick={() => router.push('/contact')}>Contact</span>
                </div>
                {/* Search and Actions */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar */}
                    <form className="relative flex-1 hidden sm:flex items-center gap-2" onSubmit={onSubmitSearch} role="search" aria-label="Site search">
                        <input
                            type="search"
                            placeholder="Search products"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full max-w-md px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        />
                        <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <button type="submit" className="px-4 py-2 text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700">Go</button>
                    </form>
                    {/* Actions */}
                    {user ? (
                        <div className="relative">
                            <button onClick={() => setOpenUser(v => !v)} className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer">
                                {user.email.split('@')[0]}
                            </button>
                            {openUser && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                                    <div className="px-4 py-2 text-xs text-gray-500">Signed in as</div>
                                    <div className="px-4 pb-2 text-sm text-gray-800 truncate">{user.email} ({user.role})</div>
                                    {(user.role === 'seller' || user.role === 'admin') && (
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => { setOpenUser(false); router.push('/products/add'); }}>Add Product</button>
                                    )}
                                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50" onClick={() => { setOpenUser(false); signOut(); }}>Sign out</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <button className="hidden sm:inline-flex border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer" onClick={() => router.push('/register')}>
                                Create account
                            </button>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer" onClick={() => router.push('/login')}>
                                Sign in
                            </button>
                        </div>
                    )}
                </div>
              </div>
            </div>
        </div>
    )
}

export default Header;