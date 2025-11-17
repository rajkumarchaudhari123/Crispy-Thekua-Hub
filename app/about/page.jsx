export default function AboutPage() {
    return (
        <div className="pt-20 px-6">

            {/* Heading */}
            <h1 className="text-4xl font-bold text-orange-600">About Us</h1>
            <p className="mt-3 text-gray-700 max-w-3xl">
                Welcome to <span className="font-semibold text-orange-600">Crispy Thekua Hub</span>,
                your trusted home for authentic, handmade, traditional Bihari Thekua.
                We are on a mission to bring the real taste of Bihar to every home in India.
            </p>

            {/* Section 1 - Our Story */}
            <section className="mt-10 max-w-4xl">
                <h2 className="text-2xl font-semibold text-orange-500">Our Story</h2>
                <p className="mt-3 text-gray-700 leading-relaxed">
                    Crispy Thekua Hub started with a simple idea — to serve people with
                    pure, homemade, freshly prepared Thekua that tastes exactly like the
                    ones made during Chhath Puja in Bihar. What began as a small kitchen project
                    has now grown into a trusted brand loved by families, students, travelers,
                    and professionals across the country.
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    Thekua is not just food; it’s emotion, tradition, and a cultural identity of Bihar.
                    Humne decide kiya ki is traditional sweet ko modern packaging,
                    high hygiene standards aur pocket-friendly pricing ke saath har kisi tak pahunchaya jaye.
                </p>
            </section>

            {/* Section 2 - What We Stand For */}
            <section className="mt-12 max-w-4xl">
                <h2 className="text-2xl font-semibold text-orange-500">What We Stand For</h2>

                <ul className="mt-4 space-y-3 text-gray-700">
                    <li>
                        ✔️ <span className="font-semibold">Pure Ingredients:</span>
                        Every Thekua is made using premium wheat flour, desi ghee, jaggery/sugar,
                        and absolutely no preservatives.
                    </li>
                    <li>
                        ✔️ <span className="font-semibold">Hygienic Preparation:</span>
                        Our kitchen follows strict cleanliness and safety standards.
                    </li>
                    <li>
                        ✔️ <span className="font-semibold">Authentic Taste:</span>
                        We preserve the original Bihari recipe passed down for generations.
                    </li>
                    <li>
                        ✔️ <span className="font-semibold">Fresh Every Day:</span>
                        No storage, no old stock — every pack is freshly prepared.
                    </li>
                    <li>
                        ✔️ <span className="font-semibold">Affordable Pricing:</span>
                        High-quality taste doesn’t have to be expensive.
                    </li>
                </ul>
            </section>

            {/* Section 3 - Why Our Thekua is Special */}
            <section className="mt-12 max-w-4xl">
                <h2 className="text-2xl font-semibold text-orange-500">Why Our Thekua is Special?</h2>

                <p className="mt-3 text-gray-700 leading-relaxed">
                    Our Thekua is crunchy, fresh, perfectly sweet, and prepared in the traditional way —
                    slow-cooked in pure oil/ghee for the best texture and taste.
                    Har bite me Bihar ki mehnat, pyaar aur sanskar ka swad milta hai.
                </p>

                <p className="mt-3 text-gray-700 leading-relaxed">
                    Whether you are away from home, craving something traditional,
                    or simply love trying regional Indian snacks — Crispy Thekua Hub brings the best to you.
                </p>
            </section>

            {/* Section 4 - Our Mission */}
            <section className="mt-12 max-w-4xl">
                <h2 className="text-2xl font-semibold text-orange-500">Our Mission</h2>

                <p className="mt-3 text-gray-700 leading-relaxed">
                    Our mission is simple —
                    <span className="font-semibold text-orange-600">
                        to make Thekua the next big Indian snack.
                    </span>
                    We want every household to enjoy this healthy, homemade, preservative-free treat.
                </p>

                <p className="mt-3 text-gray-700 leading-relaxed">
                    We aim to deliver our products all over India with consistent quality,
                    excellent packaging, and fast delivery.
                </p>
            </section>

            {/* Section 5 - Our Vision */}
            <section className="mt-12 max-w-4xl">
                <h2 className="text-2xl font-semibold text-orange-500">Our Vision</h2>

                <p className="mt-3 text-gray-700 leading-relaxed">
                    We envision creating India’s most trusted Thekua brand —
                    a brand known for purity, taste, and honesty.
                    Hum chaahte hain ki jab bhi log "Thekua" ka naam lein,
                    unhe sabse pehle **Crispy Thekua Hub** yaad aaye.
                </p>
            </section>

            {/* Section 6 - Team */}
            <section className="mt-12 max-w-4xl">
                <h2 className="text-2xl font-semibold text-orange-500">Meet Our Team</h2>

                <p className="mt-3 text-gray-700 leading-relaxed">
                    Our team consists of passionate home cooks, packaging experts,
                    and quality controllers who ensure that every packet of Thekua
                    leaving our kitchen is fresh, hygienic, and delicious.
                </p>
            </section>

            {/* Section 7 - Closing */}
            <section className="mt-12 max-w-4xl pb-16">
                <p className="text-gray-700 leading-relaxed">
                    Thank you for trusting us and supporting a small, homegrown business.
                    We promise to continue delivering the authentic taste of Bihar
                    with the same love, purity, and tradition.
                </p>

                <p className="mt-4 text-orange-600 font-semibold">
                    — Team Crispy Thekua Hub
                </p>
            </section>

        </div>
    );
}
