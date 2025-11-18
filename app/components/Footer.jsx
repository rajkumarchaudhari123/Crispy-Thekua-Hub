export default function Footer() {
    return (
        <footer className="bg-orange-50 text-gray-800 py-10 mt-10 border-t border-orange-200">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-orange-700">Crispy Thekua Hub</h2>
                    <p className="mt-3 text-sm">
                        Ghar ka bana hua asli Bihari Thekua.
                        Pure ingredients • Traditional taste • Premium quality.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-orange-700 cursor-pointer">Home</li>
                        <li className="hover:text-orange-700 cursor-pointer">Products</li>
                        <li className="hover:text-orange-700 cursor-pointer">About Us</li>
                        <li className="hover:text-orange-700 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Customer Support</h3>
                    <ul className="space-y-2">
                        <li>Call: +91 96670 48566</li>
                        <li>Email: support@raj&neeraj.com</li>
                        <li className="hover:text-orange-700 cursor-pointer">Shipping Policy</li>
                        <li className="hover:text-orange-700 cursor-pointer">Refund Policy</li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-orange-700 cursor-pointer">Instagram</li>
                        <li className="hover:text-orange-700 cursor-pointer">Facebook</li>
                        <li className="hover:text-orange-700 cursor-pointer">YouTube</li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-10 text-sm text-gray-600 border-t border-orange-200 pt-4">
                © {new Date().getFullYear()}  Crispy Thekua Hub — All Rights Reserved.
            </div>
        </footer>
    );
}
