import React from 'react';
import ProductCarousel from './components/ProductCarousel';
import ProductFeatures from './components/ProductFeatures';
import PricingPlans from './components/PricingPlans';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import type { Product } from './data';

type SearchParams = {
  q?: string | string[];
  page?: string | string[];
  pageSize?: string | string[];
  sort?: string | string[];
  minPrice?: string | string[];
  maxPrice?: string | string[];
  category?: string | string[];
  brand?: string | string[];
};

function appendParam(sp: URLSearchParams, key: string, val?: string | string[]) {
  if (val === undefined) return;
  if (Array.isArray(val)) {
    val.filter(Boolean).forEach(v => sp.append(key, v));
  } else if (val) {
    sp.set(key, val);
  }
}

async function fetchProducts(params: SearchParams) {
  const sp = new URLSearchParams();
  appendParam(sp, 'q', params.q);
  appendParam(sp, 'page', params.page);
  appendParam(sp, 'pageSize', params.pageSize);
  appendParam(sp, 'sort', params.sort);
  appendParam(sp, 'minPrice', params.minPrice);
  appendParam(sp, 'maxPrice', params.maxPrice);
  appendParam(sp, 'category', params.category);
  appendParam(sp, 'brand', params.brand);
  const url = `http://localhost:4000/api/products?${sp.toString()}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    return { items: [], featured: [], totalPages: 1, page: 1 } as { items: any[]; featured: any[]; totalPages: number; page: number };
  }
  return res.json();
}

const Products = async ({ searchParams }: { searchParams: SearchParams }) => {
  const data = await fetchProducts(searchParams);
  const featuredForCarousel: Product[] = (data.featured || []).map((p: any) => ({
    id: p._id,
    name: p.title,
    description: p.description,
    image: Array.isArray(p.images) && p.images.length > 0 ? p.images[0] : '',
    details: p.description,
    price: typeof p.price === 'number' ? `$${p.price}` : (p.price || ''),
    features: []
  }));
  const selectedCategories = new Set(
    Array.isArray(searchParams.category)
      ? searchParams.category
      : (searchParams.category ? String(searchParams.category).split(',') : [])
  );
  const selectedBrands = new Set(
    Array.isArray(searchParams.brand)
      ? searchParams.brand
      : (searchParams.brand ? String(searchParams.brand).split(',') : [])
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Shop by Category&nbsp; 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            & Deals
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover top brands and trending products across electronics, home, fashion, beauty, toys, and more—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-center">
              Shop Now
            </a>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Today’s Deals
            </button>
          </div>
        </div>
      </section>

      {/* Product Carousel Section (Featured) */}
      <ProductCarousel products={featuredForCarousel} />

      {/* Filters */}
      <section className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <form action="/products" className="grid gap-3 items-start">
            <div className="flex gap-2 items-center flex-wrap">
              <input name="q" placeholder="Search products" defaultValue={Array.isArray(searchParams.q) ? (searchParams.q[0] || '') : (searchParams.q || '')} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <label className="text-sm text-gray-600" htmlFor="minPrice">Min price</label>
              <input id="minPrice" name="minPrice" type="number" min="0" step="0.01" placeholder="0" defaultValue={Array.isArray(searchParams.minPrice) ? (searchParams.minPrice[0] || '') : (searchParams.minPrice || '')} className="w-24 px-3 py-2 border border-gray-300 rounded-lg" />
              <label className="text-sm text-gray-600" htmlFor="maxPrice">Max price</label>
              <input id="maxPrice" name="maxPrice" type="number" min="0" step="0.01" placeholder="9999" defaultValue={Array.isArray(searchParams.maxPrice) ? (searchParams.maxPrice[0] || '') : (searchParams.maxPrice || '')} className="w-24 px-3 py-2 border border-gray-300 rounded-lg" />
              <select name="sort" defaultValue={Array.isArray(searchParams.sort) ? (searchParams.sort[0] || '') : (searchParams.sort || '')} className="px-3 py-2 border border-gray-300 rounded-lg">
                <option value="">Sort</option>
                <option value="newest">Newest</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Apply</button>
            </div>
            <fieldset>
              <legend className="text-sm text-gray-700 mb-1">Categories</legend>
              <div className="flex flex-wrap gap-2">
                {(data.facet?.categories || []).filter(Boolean).map((c: string) => (
                  <label key={c} className="inline-flex items-center gap-2 text-sm border rounded px-2 py-1">
                    <input type="checkbox" name="category" value={c} defaultChecked={selectedCategories.has(c)} />
                    <span>{c}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm text-gray-700 mb-1">Brands</legend>
              <div className="flex flex-wrap gap-2">
                {(data.facet?.brands || []).filter(Boolean).map((b: string) => (
                  <label key={b} className="inline-flex items-center gap-2 text-sm border rounded px-2 py-1">
                    <input type="checkbox" name="brand" value={b} defaultChecked={selectedBrands.has(b)} />
                    <span>{b}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </form>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {(data.items || []).map((p: any) => (
              <div key={p._id} className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                <a href={`/products/${p._id}`} className="block">
                  <div className="w-full aspect-[4/3] bg-gray-100">
                    {Array.isArray(p.images) && p.images.length > 0 ? (
                      <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1">{p.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{p.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold">{typeof p.price === 'number' ? `$${p.price}` : p.price}</span>
                      <span className="text-xs text-gray-500">{p.brand || '—'}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          {/* Pager */}
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: data.totalPages || 1 }).map((_, i) => {
              const pageVal = (i + 1).toString();
              const sp = new URLSearchParams();
              appendParam(sp, 'q', searchParams.q);
              appendParam(sp, 'pageSize', searchParams.pageSize);
              appendParam(sp, 'sort', searchParams.sort);
              appendParam(sp, 'minPrice', searchParams.minPrice);
              appendParam(sp, 'maxPrice', searchParams.maxPrice);
              appendParam(sp, 'category', searchParams.category);
              appendParam(sp, 'brand', searchParams.brand);
              sp.set('page', pageVal);
              return (
                <a key={i} href={`/products?${sp.toString()}`} className={`px-3 py-1 rounded border ${String(data.page||'1') === pageVal ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>{i+1}</a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <ProductFeatures />

      {/* Pricing Plans Section */}
      <PricingPlans />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Products;