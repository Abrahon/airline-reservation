const About = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-red-700">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504198266287-1659872e6590"
              alt="Airline"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Fly with Confidence</h3>
            <p className="text-gray-600 mb-4">
              Welcome to the Airline Reservation System — a smart, seamless way to book flights online.
              We are committed to providing fast, secure, and user-friendly travel booking experiences.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're planning a business trip or a family vacation, we ensure your journey starts with comfort and convenience. Our platform allows you to browse, compare, and book flights in just a few clicks.
            </p>
            <p className="text-gray-600">
              Trusted by thousands of happy customers, we believe in the power of technology to make travel simpler and smarter.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-red-700 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-xl font-semibold mb-2">Easy Booking</h4>
              <p>Intuitive and clean design to help you book flights effortlessly.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
              <p>Your transactions are encrypted and completely secure.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
              <p>Our support team is here to help anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Let’s Take Off Together</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Book your next flight with us and experience a smooth, reliable, and enjoyable journey from takeoff to landing.
        </p>
        <a href="/flights" className="inline-block bg-red-700 hover:bg-red-800 text-white py-3 px-6 rounded-xl font-medium transition">
          Book Now
        </a>
      </section>
    </div>
  );
};

export default About;
