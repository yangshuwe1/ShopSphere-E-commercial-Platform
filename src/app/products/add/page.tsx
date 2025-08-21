"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AddProductPage: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [stock, setStock] = useState<number | string>(0);
  const [featured, setFeatured] = useState(false);
  const [images, setImages] = useState<string>("");
  const imageList = images.split(',').map(s=>s.trim()).filter(Boolean);
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [currentEmail, setCurrentEmail] = useState<string | null>(null);
  const [currentRole, setCurrentRole] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:4000/api/auth/me", { credentials: "include" });
        if (res.ok) {
          const me = await res.json();
          setCurrentEmail(me.email || null);
          setCurrentRole(me.role || null);
        }
      } catch {}
    })();
  }, []);
  const [ok, setOk] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setOk(false);
    try {
      const res = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ title, description, price: Number(price), stock: Number(stock), featured, images: imageList, category, brand })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to create product");
      }
      setOk(true);
      setTitle(""); setDescription(""); setPrice(""); setStock(0); setFeatured(false); setImages(""); setCategory(''); setBrand('');
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Failed to create product");
    }
  };

  const upgradeToSeller = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/auth/role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: currentEmail, role: "seller" })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Role update failed");
      }
      const updated = await res.json();
      setCurrentRole(updated.role || "seller");
      alert("Role updated to seller. You can now add products.");
    } catch (e: any) {
      alert(e.message || "Role update failed");
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Add a product</h1>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input value={title} onChange={(e)=>setTitle(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea value={description} onChange={(e)=>setDescription(e.target.value)} required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number" step="0.01" min="0" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
                <input value={stock} onChange={(e)=>setStock(e.target.value)} type="number" min="0" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select category</option>
                  <option>Electronics</option>
                  <option>Home & Kitchen</option>
                  <option>Beauty</option>
                  <option>Sports</option>
                  <option>Fashion</option>
                  <option>Toys</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                <select value={brand} onChange={(e)=>setBrand(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select brand</option>
                  <option>Apple</option>
                  <option>Samsung</option>
                  <option>Sony</option>
                  <option>Philips</option>
                  <option>Nike</option>
                  <option>Adidas</option>
                </select>
              </div>
            </div>
            {imageList.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {imageList.slice(0,6).map((url, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-100 border">
                    <img src={url} alt="preview" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URLs (comma separated)</label>
              <input value={images} onChange={(e)=>setImages(e.target.value)} placeholder="https://... , https://..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <label className="inline-flex items-center gap-2 mt-2">
              <input type="checkbox" checked={featured} onChange={(e)=>setFeatured(e.target.checked)} />
              <span>Mark as featured (show in carousel)</span>
            </label>
            {error && <div className="text-sm text-red-600">{error}</div>}
            {ok && <div className="text-sm text-green-600">Product created</div>}
            <div className="flex gap-3 items-center">
              <button disabled={currentRole !== 'seller' && currentRole !== 'admin'} className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 px-6 rounded-lg font-semibold">Create</button>
              <button type="button" disabled={!currentEmail || currentRole === 'seller' || currentRole === 'admin'} onClick={upgradeToSeller} className="border-2 border-blue-600 text-blue-600 disabled:border-gray-300 disabled:text-gray-400 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-lg font-semibold">Become seller</button>
              <div className="text-sm text-gray-600">{currentEmail ? `Signed in as ${currentEmail} (${currentRole || 'unknown'})` : 'Not signed in'}</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProductPage;


