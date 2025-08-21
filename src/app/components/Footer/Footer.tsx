'use client';
import React from "react";
import { useRouter } from 'next/navigation';

const Footer = () => {
    const router = useRouter();
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-lg font-bold">SS</span>
                            </div>
                            <span className="text-xl font-bold text-white">ShopSphere <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Market</span></span>
                        </div>
                        <p className="text-gray-300 mb-4 max-w-md">
                            Shop millions of products from trusted sellers. Fast shipping, great deals, and secure checkout—all in one place.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={() => router.push('/twitter')}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </span>
                            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={() => router.push('/facebook')}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                                </svg>
                            </span>
                            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={() => router.push('/linkedin')}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <span className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => router.push('/')}>Home</span>
                            </li>
                            <li>
                                <span className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => router.push('/features')}>Features</span>
                            </li>
                            <li>
                                <span className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => router.push('/pricing')}>Pricing</span>
                            </li>
                            <li>
                                <span className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => router.push('/contact')}>Contact</span>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => router.push('/help')}>Help Center</span></li>
                            <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => router.push('/docs')}>Documentation</span></li>
                            <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => router.push('/support')}>Contact Support</span></li>
                            <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => router.push('/status')}>Status Page</span></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} ShopSphere Market. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer" onClick={() => router.push('/privacy')}>Privacy Policy</span>
                        <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer" onClick={() => router.push('/terms')}>Terms of Service</span>
                        <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer" onClick={() => router.push('/cookies')}>Cookie Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;