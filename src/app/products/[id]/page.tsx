import React from 'react';

async function fetchProduct(id: string) {
  const res = await fetch(`http://localhost:4000/api/products/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const p = await fetchProduct(params.id);
  if (!p) return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-gray-600">Product not found.</div>
    </section>
  );

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden">
            {Array.isArray(p.images) && p.images.length > 0 ? (
              <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600" />
            )}
          </div>
          {Array.isArray(p.images) && p.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3 mt-4">
              {p.images.slice(0,8).map((url: string, i: number) => (
                <div key={i} className="h-20 bg-gray-100 rounded-lg overflow-hidden">
                  <img src={url} alt="thumb" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{p.title}</h1>
          <div className="flex items-center gap-3 mb-3">
            {p.category && <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-100">{p.category}</span>}
            {p.brand && <span className="text-xs px-2 py-1 rounded bg-purple-50 text-purple-700 border border-purple-100">{p.brand}</span>}
            {typeof p.rating === 'number' && (
              <span className="text-xs text-yellow-600 flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.175 0L6.714 16.28c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.363-1.118L3.08 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.0-3.292z"/></svg>
                {p.rating?.toFixed(1)}{p.reviewsCount ? ` (${p.reviewsCount})` : ''}
              </span>
            )}
          </div>
          <div className="text-2xl text-blue-600 font-semibold mb-4">{typeof p.price === 'number' ? `$${p.price}` : p.price}</div>
          <p className="text-gray-700 leading-relaxed mb-6">{p.description}</p>
          <div className="flex items-center gap-3 mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Add to Cart</button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold">Buy Now</button>
          </div>
          <div className="text-sm text-gray-500">Stock: {p.stock ?? 0}</div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;


