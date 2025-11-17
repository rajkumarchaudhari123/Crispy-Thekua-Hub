"use client";
import { useCart } from "../context/CartContext";

export default function ProductsPage() {
    const product = {
        id: 1,
        title: "Traditional Crispy Thekua",
        img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe18.jpg",
        variants: [
            { qty: "10 Pieces", price: 100 },
            { qty: "18 Pieces", price: 180 },
            { qty: "20 Pieces", price: 200 }
        ]
    };

    const { addToCart } = useCart();

    const handleAddToCart = (variant) => {
        addToCart(product, variant);
    };

    return (
        <div className="pt-20">
            <section className="max-w-4xl mx-auto px-6 py-16">

                {/* Title */}
                <h2 className="text-3xl font-bold text-orange-600">Our Products</h2>
                <p className="text-gray-600 mt-2">
                    Fresh & Crispy Traditional Thekua made with pure ingredients.
                </p>

                {/* Product Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 mt-10">

                    {/* Image */}
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-64 object-cover rounded-xl"
                    />

                    {/* Title */}
                    <h3 className="mt-4 text-2xl font-semibold">
                        {product.title}
                    </h3>

                    {/* Variants */}
                    <div className="mt-5 space-y-4">
                        {product.variants.map((v, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center bg-orange-50 p-4 rounded-lg border border-orange-200"
                            >
                                <span className="font-medium">{v.qty}</span>
                                <span className="text-lg font-bold text-orange-600">₹ {v.price}</span>
                                <button
                                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                                    onClick={() => handleAddToCart(v)}
                                >
                                    Add
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
}