import React from "react";


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
              <a href="#products" className="px-6 py-3 bg-yellow-500 text-white rounded font-semibold">Shop Now</a>
              <a href="#story" className="px-6 py-3 border rounded">Our Story</a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/hero-product.jpg" alt="Thekua" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>



      {/* Reviews Placeholder */}
      <section className="bg-white border-t py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Reviews</h3>
          <p className="text-gray-600 mt-2">What customers say about Crispy Thekua Hub.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded shadow-sm">
              <div className="font-semibold">"Best thekua I've tasted"</div>
              <div className="text-sm text-gray-600 mt-2">— Happy Customer</div>
            </div>
            <div className="p-4 bg-gray-50 rounded shadow-sm">
              <div className="font-semibold">"Pure and hygienic"</div>
              <div className="text-sm text-gray-600 mt-2">— Satisfied Buyer</div>
            </div>
            <div className="p-4 bg-gray-50 rounded shadow-sm">
              <div className="font-semibold">"Perfect for festivals"</div>
              <div className="text-sm text-gray-600 mt-2">— Festival Shopper</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our product  */}




      {/* Story & Mission */}
      <section id="story" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold">


            </h3>
            <p className="mt-4 text-gray-700">A journey of passion, purity, and the pursuit of an Indian dream.</p>

            <h4 className="mt-6 font-semibold">Our Mission</h4>
            <p className="text-gray-600 mt-2">To be India’s finest snacks brand, delivering high-quality, hygienic, and affordable traditional snacks that you can trust and enjoy.</p>

            <h4 className="mt-6 font-semibold">The Beginning</h4>
            <p className="text-gray-600 mt-2">The journey began when a young founder noticed unhygienic traditional snacks during Chhath Puja and decided to make pure, traditional, and hygienic snacks available year-round.</p>
          </div>
          <div>
            <img src="factory.jpg" alt="Kitchen" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold">Our Core Values</h3>
        <p className="text-gray-600 mt-2">These principles guide everything we do.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h5 className="font-semibold">Sustainability</h5>
            <p className="text-sm text-gray-600 mt-2">Responsible sourcing and eco-friendly packaging.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h5 className="font-semibold">Quality</h5>
            <p className="text-sm text-gray-600 mt-2">Only premium ingredients for exceptional snacks.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h5 className="font-semibold">Health</h5>
            <p className="text-sm text-gray-600 mt-2">Nutritious options without artificial additives.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h5 className="font-semibold">Community</h5>
            <p className="text-sm text-gray-600 mt-2">Supporting local farmers and giving back.</p>
          </div>
        </div>
      </section>




    </div>
  );
}
