export default function ContactPage() {
  return (
    <div className="pt-20 px-6 max-w-5xl mx-auto pb-20">
      
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-orange-600 text-center">
        Contact Us
      </h1>
      <p className="mt-3 text-gray-700 text-center max-w-2xl mx-auto">
        We are always here to serve you fresh, tasty, and authentic Thekua.  
        Feel free to contact us for orders, bulk bookings, or any inquiries.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

        {/* Phone */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-orange-600">📞 Phone</h2>
          <p className="text-gray-700 mt-2">+91 96670 48566</p>
          <p className="text-gray-600 text-sm mt-1">
            Available 9 AM – 9 PM
          </p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-orange-600">📧 Email</h2>
          <p className="text-gray-700 mt-2">crispythekuahub@gmail.com</p>
          <p className="text-gray-600 text-sm mt-1">
            We reply within 24 hours.
          </p>
        </div>

        {/* Address */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-orange-600">📍 Address</h2>
          <p className="text-gray-700 mt-2">Parsvnath Srishti, Noida</p>
          <p className="text-gray-600 text-sm mt-1">
            Delivery available across Noida & nearby areas.
          </p>
        </div>

        {/* Business Hours */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-orange-600">⏱ Business Hours</h2>
          <p className="text-gray-700 mt-2">Monday – Sunday</p>
          <p className="text-gray-700">9:00 AM – 9:00 PM</p>
        </div>
      </div>

      {/* Map */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold text-orange-600">📍 Find Us on Google Maps</h2>
        <iframe
          className="w-full h-72 rounded-xl shadow-md mt-4"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.273!2d77.3906!3d28.5892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8a145ffabcd%3A0xd!2sNoida%20Sector%2093!5e0!3m2!1sen!2sin!4v1700000000000"
        ></iframe>
      </div>

      {/* Form */}
      <div className="mt-14 bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-orange-600">📩 Send Us a Message</h2>

        <form className="mt-6 space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded-lg p-3"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
