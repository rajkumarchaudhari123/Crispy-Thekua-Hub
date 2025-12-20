import React from "react";
import Link from "next/link";
import { FaStar, FaTruck, FaLeaf, FaHeart, FaUsers, FaShieldAlt, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { GiHandBag } from "react-icons/gi";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaLeaf className="text-green-600" />
                <span>100% Natural Ingredients</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Taste the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Authentic Tradition
                </span>
              </h1>
              
              <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
                Experience the perfect blend of traditional recipes and modern hygiene. Our crispy thekua brings memories of grandma's kitchen to your doorstep.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/products" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-300 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <GiHandBag className="text-xl" />
                  <span>Shop Now</span>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </Link>
                <Link 
                  href="#story"
                  className="px-8 py-4 border-2 border-amber-600 text-amber-700 rounded-2xl font-semibold text-lg hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Discover Our Story
                </Link>
              </div>
              
              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-700">5000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-700">4.8★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-700">15+</div>
                  <div className="text-gray-600">Cities</div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:w-1/2">
              <div className="relative z-10">
                <img 
                  src="https://st1.latestly.com/wp-content/uploads/2018/11/thekua-or-thekwa-781x441.jpg" 
                  alt="Fresh Thekua"
                  className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                  <div className="text-amber-600 font-bold text-xl">₹120 Only</div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section id="products" className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-amber-600">Signature</span> Snack
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handcrafted with love using generations-old recipes
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe18.jpg"
                  alt="Traditional Crispy Thekua"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">Best Seller</div>
                <div className="text-sm opacity-90">Since 2025</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  <FaStar />
                  <span>Most Loved Product</span>
                </div>
                <h3 className="text-3xl font-bold mt-4">Traditional Crispy Thekua</h3>
                <p className="text-gray-600 mt-2 text-lg">
                  Authentic Bihari-style crispy thekua made with organic whole wheat flour, pure jaggery, and aromatic spices. Perfect for festivals, tea time, or as a wholesome snack.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg border">
                  <div className="text-amber-600 font-bold text-xl">₹100 - ₹200</div>
                  <div className="text-sm text-gray-600">Multiple Packs Available</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-2">
                    <FaTruck className="text-green-600" />
                    <span className="font-semibold">Free Delivery</span>
                  </div>
                  <div className="text-sm text-gray-600">Above ₹300</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-green-600 text-xl" />
                  <span className="font-medium">100% Hygienic & Safe Packaging</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaLeaf className="text-green-600 text-xl" />
                  <span className="font-medium">Made with Organic Ingredients</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaHeart className="text-red-600 text-xl" />
                  <span className="font-medium">No Preservatives or Additives</span>
                </div>
              </div>
              
              <div className="pt-6">
                <Link
                  href="/products"
                  className="block w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-300 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Explore All Packs & Variants
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Loved by Foodies</h3>
            <p className="text-gray-600 text-lg">Join our community of satisfied customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rohan Sharma", role: "Food Blogger", rating: 5, comment: "The texture and taste are perfect. Reminds me of my grandmother's recipe.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan" },
              { name: "Priya Singh", role: "Homemaker", rating: 5, comment: "I was worried about hygiene with traditional snacks, but this is perfectly packaged and fresh.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
              { name: "Ankit Kumar", role: "Software Engineer", rating: 5, comment: "Ordered for Chhath Puja, and everyone loved it. Will order again!", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit" },
            ].map((review, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-amber-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 hover:border-amber-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full" />
                  <div>
                    <div className="font-bold text-lg">{review.name}</div>
                    <div className="text-gray-600 text-sm">{review.role}</div>
                  </div>
                </div>
                <div className="flex text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{review.comment}"</p>
                <div className="mt-6 pt-6 border-t border-amber-100">
                  <div className="text-sm text-gray-500">Verified Purchase • 2 days ago</div>
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1591123220262-87ed377f7c08?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Traditional Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
           
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold mb-6">
                  Our <span className="text-amber-600">Journey</span> of Passion
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  What started as a small initiative during Chhath Puja 2020 has blossomed into a mission to preserve and share authentic Indian snacks with the world.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Our Mission</h4>
                    <p className="text-gray-600">
                      To be India's most trusted traditional snacks brand, delivering authentic taste with modern hygiene standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 text-xl">👁️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Our Vision</h4>
                    <p className="text-gray-600">
                      Preserving culinary heritage while making it accessible to the modern generation across the globe.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-300 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn More About Us
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Our <span className="text-amber-600">Core Values</span></h3>
            <p className="text-gray-600 text-lg">The principles that guide every batch we make</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🌱", title: "Sustainability", desc: "Eco-friendly packaging and responsible sourcing", color: "from-green-400 to-emerald-500" },
              { icon: "⭐", title: "Quality First", desc: "Premium ingredients, traditional methods", color: "from-blue-400 to-cyan-500" },
              { icon: "❤️", title: "Health Focus", desc: "No artificial colors or preservatives", color: "from-red-400 to-pink-500" },
              { icon: "👥", title: "Community", desc: "Supporting local farmers & artisans", color: "from-purple-400 to-violet-500" },
            ].map((value, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent transform hover:-translate-y-2"
              >
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-3xl text-white shadow-lg`}>
                    {value.icon}
                  </div>
                  <h5 className="font-bold text-xl text-center mb-3">{value.title}</h5>
                  <p className="text-gray-600 text-center">{value.desc}</p>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 from-amber-200 to-orange-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Taste Tradition?</h3>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of happy customers enjoying authentic traditional snacks delivered fresh to their homes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-10 py-4 bg-white text-amber-700 rounded-2xl font-bold text-lg hover:bg-amber-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Order Now
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 border-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex justify-center gap-6">
              <a href="#" className="text-2xl hover:scale-110 transition-transform">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">
                <FaTwitter />
              </a>
            </div>
            <p className="mt-4 opacity-80">Follow us for updates, recipes, and more!</p>
          </div>
        </div>
      </section>

    </div>
  );
}