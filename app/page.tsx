import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero */}
      <section className="bg-cover bg-center" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('/images/hero.jpg')" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold">Authentic & Pure — Delivered to your doorstep</h1>
            <p className="mt-4 text-gray-700 max-w-xl">Experience the true taste of tradition. High-quality, hygienic, and affordable traditional snacks made with love and purity.</p>
            <div className="mt-6 flex gap-4">
              <Link href="/products" className="px-6 py-3 bg-yellow-500 text-white rounded font-semibold hover:bg-yellow-600 transition-colors">
                Shop Now
              </Link>
              <a href="#story" className="px-6 py-3 border rounded hover:bg-gray-100 transition-colors">
                Our Story
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/hero-product.jpg" alt="Thekua" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Our Products - Single Product */}
      <section id="products" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Our Product</h2>
        <p className="text-gray-600 mt-2 text-center">Discover our authentic traditional snack</p>

        <div className="mt-8 flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-orange-200 max-w-md w-full transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe18.jpg"
              alt="Traditional Crispy Thekua"
              className="rounded-xl mb-6 w-full h-48 object-cover shadow-md"
            />
            <h4 className="font-bold text-2xl text-center text-gray-800">Traditional Crispy Thekua</h4>
            <p className="text-gray-600 mt-3 text-center leading-relaxed">
              Authentic Bihari-style crispy thekua made with whole wheat flour, jaggery, and aromatic spices. Perfect for festivals and everyday snacking.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <span className="font-bold text-2xl text-orange-600">₹100 - ₹200</span>
                <p className="text-sm text-gray-500 mt-1">Starting from 10 pieces</p>
              </div>
              <Link
                href="/products"
                className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
              >
                View All Packs
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span>4.8 (124 reviews)</span>
              </div>
              <div>•</div>
              <div>🚚 Free Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Placeholder */}
      <section className="bg-white border-t py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Customer Reviews</h3>
          <p className="text-gray-600 mt-2">What customers say about Crispy Thekua Hub.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm border">
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <div className="font-semibold mt-2">"Best thekua I've tasted!"</div>
              <div className="text-gray-600 mt-2">The texture and taste are perfect. Reminds me of my grandmother's recipe.</div>
              <div className="text-sm text-gray-500 mt-4">— Rohan Sharma</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm border">
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <div className="font-semibold mt-2">"Pure and hygienic"</div>
              <div className="text-gray-600 mt-2">I was worried about hygiene with traditional snacks, but this is perfectly packaged and fresh.</div>
              <div className="text-sm text-gray-500 mt-4">— Priya Singh</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm border">
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <div className="font-semibold mt-2">"Perfect for festivals"</div>
              <div className="text-gray-600 mt-2">Ordered for Chhath Puja, and everyone loved it. Will order again!</div>
              <div className="text-sm text-gray-500 mt-4">— Ankit Kumar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Mission */}
      <section id="story" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold">Our Story</h3>
            <p className="mt-4 text-gray-700">A journey of passion, purity, and the pursuit of an Indian dream.</p>

            <h4 className="mt-6 font-semibold text-xl">Our Mission</h4>
            <p className="text-gray-600 mt-2">To be India's finest snacks brand, delivering high-quality, hygienic, and affordable traditional snacks that you can trust and enjoy.</p>

            <h4 className="mt-6 font-semibold text-xl">The Beginning</h4>
            <p className="text-gray-600 mt-2">The journey began when a young founder noticed unhygienic traditional snacks during Chhath Puja and decided to make pure, traditional, and hygienic snacks available year-round.</p>

            <Link
              href="/about"
              className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600"
              alt="Traditional Kitchen"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center">Our Core Values</h3>
        <p className="text-gray-600 mt-2 text-center">These principles guide everything we do.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h5 className="font-semibold text-lg">Sustainability</h5>
            <p className="text-sm text-gray-600 mt-2">Responsible sourcing and eco-friendly packaging.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h5 className="font-semibold text-lg">Quality</h5>
            <p className="text-sm text-gray-600 mt-2">Only premium ingredients for exceptional snacks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <h5 className="font-semibold text-lg">Health</h5>
            <p className="text-sm text-gray-600 mt-2">Nutritious options without artificial additives.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h5 className="font-semibold text-lg">Community</h5>
            <p className="text-sm text-gray-600 mt-2">Supporting local farmers and giving back.</p>
          </div>
        </div>
      </section>

    </div>
  );
}