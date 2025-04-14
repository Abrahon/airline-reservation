
const Contact= () => {
  
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-700 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          Have a question or need assistance? Our team is here to help you 24/7. Fill out the form and we'll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-600 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-700 text-white py-2 px-6 rounded-md hover:bg-red-800 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">support@flyair.com</p>
              <p className="text-gray-600">+1 (800) 123-4567</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Head Office</h3>
              <p className="text-gray-600">
                123 Jetway Blvd<br />
                SkyCity, SC 90001<br />
                United States
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sat - Sun: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
