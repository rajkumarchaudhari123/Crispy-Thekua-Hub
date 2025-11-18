"use client";
import { useCart } from "../context/CartContext";
import { Star, Shield, Truck, Clock, Heart, Award, Users, ShoppingCart } from "lucide-react";

export default function ProductsPage() {
    const traditionalThekuaVariants = [
        {
            id: 1,
            title: "Traditional Crispy Thekua - Classic Pack",
            img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe18.jpg",
            description: "Our signature traditional thekua with perfect crispiness and authentic flavor. Made using grandma's secret recipe.",
            variants: [
                { qty: "10 Pieces", price: 100, popular: false, saving: "" },
                { qty: "18 Pieces", price: 180, popular: true, saving: "Save ₹20" },
                { qty: "20 Pieces", price: 200, popular: false, saving: "" }
            ],
            rating: 4.8,
            reviews: 124,
            badge: "Best Seller"
        },
        {
            id: 2,
            title: "Traditional Crispy Thekua - Family Pack",
            img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg",
            description: "Perfect for family gatherings and festivals. Extra crispy with enhanced ghee aroma and traditional spices.",
            variants: [
                { qty: "25 Pieces", price: 240, popular: false, saving: "Save ₹10" },
                { qty: "50 Pieces", price: 450, popular: true, saving: "Save ₹50" },
                { qty: "100 Pieces", price: 850, popular: false, saving: "Save ₹150" }
            ],
            rating: 4.9,
            reviews: 89,
            badge: "Family Favorite"
        },
        {
            id: 3,
            title: "Traditional Crispy Thekua - Festival Special",
            img: "https://tse1.mm.bing.net/th/id/OIP.rt1BgKLB7XWSJTuzL4WftQHaEK?pid=Api&P=0&h=180",
            description: "Special edition thekua made with extra love for festivals. Perfect for Chhath Puja, Diwali, and special occasions.",
            variants: [
                { qty: "30 Pieces", price: 280, popular: false, saving: "" },
                { qty: "51 Pieces", price: 450, popular: true, saving: "Save ₹30" },
                { qty: "108 Pieces", price: 900, popular: false, saving: "Save ₹108" }
            ],
            rating: 4.7,
            reviews: 156,
            badge: "Festival Special"
        }
    ];

    const { addToCart, getTotalItems, setIsCartOpen } = useCart();

    const handleAddToCart = (product, variant) => {
        addToCart(product, variant);
    };

    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                ))}
                <span className="text-sm text-gray-600 ml-1">({rating})</span>
            </div>
        );
    };

    const getBadgeColor = (badge) => {
        switch (badge) {
            case "Best Seller": return "bg-red-500";
            case "Family Favorite": return "bg-blue-500";
            case "Festival Special": return "bg-purple-500";
            default: return "bg-orange-500";
        }
    };

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Traditional Crispy Thekua</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Experience the authentic taste of Bihar with our handcrafted crispy thekua
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            <span>Authentic Recipe</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5" />
                            <span>Made with Love</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            <span>500+ Happy Customers</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Cart Access Button - Floating */}
            {getTotalItems() > 0 && (
                <div className="fixed top-24 right-6 z-40">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="flex items-center gap-2 bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        <span className="font-semibold">View Cart ({getTotalItems()})</span>
                    </button>
                </div>
            )}

            {/* Features Section */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <Shield className="w-10 h-10 text-green-600 mx-auto mb-3" />
                        <h3 className="font-bold text-lg mb-2">100% Hygienic</h3>
                        <p className="text-sm text-gray-600">Made in FSSAI certified kitchen</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <Truck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                        <h3 className="font-bold text-lg mb-2">Free Delivery</h3>
                        <p className="text-sm text-gray-600">On orders above ₹300</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <Clock className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                        <h3 className="font-bold text-lg mb-2">Fresh Daily</h3>
                        <p className="text-sm text-gray-600">Made fresh every morning</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <Star className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                        <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
                        <p className="text-sm text-gray-600">Best ingredients used</p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="max-w-6xl mx-auto px-6 py-8">
                {/* Cart Access Button - Inside Section */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Choose Your Pack</h2>
                    {getTotalItems() > 0 && (
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition-colors shadow-md"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            <span>View Cart ({getTotalItems()} items)</span>
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {traditionalThekuaVariants.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100">
                            {/* Product Image */}
                            <div className="relative">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                                    {product.badge}
                                </div>
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                                    {renderStars(product.rating)}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{product.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Reviews */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        {renderStars(product.rating)}
                                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                                    </div>
                                </div>

                                {/* Variants */}
                                <div className="space-y-3">
                                    {product.variants.map((variant, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex justify-between items-center p-4 rounded-lg border-2 transition-all ${variant.popular
                                                ? 'border-orange-400 bg-orange-50 shadow-md'
                                                : 'border-gray-200 hover:border-orange-300'
                                                }`}
                                        >
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-gray-800">{variant.qty}</span>
                                                    {variant.popular && (
                                                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                                            Popular
                                                        </span>
                                                    )}
                                                </div>
                                                {variant.saving && (
                                                    <span className="text-green-600 text-xs font-semibold block mt-1">
                                                        {variant.saving}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-lg font-bold text-orange-600">₹{variant.price}</span>
                                                <button
                                                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm shadow-md hover:shadow-lg"
                                                    onClick={() => handleAddToCart(product, variant)}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Order Section */}
            <section className="max-w-6xl mx-auto px-6 py-8">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Quick Order Access</h3>
                    <p className="text-lg mb-6 opacity-90">
                        Added items to cart? Review your order and proceed to checkout
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="flex items-center gap-3 bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <span>View Cart & Checkout</span>
                        </button>
                        <div className="text-sm opacity-80">
                            {getTotalItems() > 0 ? (
                                <span>{getTotalItems()} items in cart • Ready to order</span>
                            ) : (
                                <span>Add items to cart to proceed</span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Traditional Recipe Story */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-lg p-8 border border-orange-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Art of Traditional Thekua Making</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Our Traditional Crispy Thekua is made using a century-old family recipe that has been passed down through generations. Each piece is carefully handcrafted to ensure perfect texture and flavor.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-orange-600 font-bold">1</span>
                                    </div>
                                    <span className="text-gray-700">Made with organic whole wheat flour</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-orange-600 font-bold">2</span>
                                    </div>
                                    <span className="text-gray-700">Sweetened with natural jaggery</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-orange-600 font-bold">3</span>
                                    </div>
                                    <span className="text-gray-700">Cooked in pure desi ghee</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-orange-600 font-bold">4</span>
                                    </div>
                                    <span className="text-gray-700">Infused with traditional spices</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://tse4.mm.bing.net/th/id/OIP.0o0nNYpiO-h7Q7ms1ExPaAHaEK?pid=Api&P=0&h=180"
                                alt="Traditional Thekua Making"
                                className="rounded-lg shadow-lg max-w-md w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-orange-400 to-yellow-400 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Taste Authentic Tradition?</h2>
                    <p className="text-xl mb-6 opacity-90">
                        Order now and experience the real taste of Bihari thekua made with love and tradition
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-orange-600 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <span>View Cart & Order</span>
                        </button>
                        <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors">
                            Call: 9667048566
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}