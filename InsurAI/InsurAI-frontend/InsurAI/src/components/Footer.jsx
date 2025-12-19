import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-100 mt-16 pt-10">
      <div className="container mx-auto px-6 pb-10 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="text-2xl font-bold text-indigo-700">InsurAI</div>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            AI-powered insurance comparison & policy management.
            Get personalized quotes instantly.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-700">Company</h3>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li><Link to="/about" className="hover:text-indigo-600">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-indigo-600">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-indigo-600">Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-gray-700">Support</h3>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li><Link to="/help" className="hover:text-indigo-600">Help Center</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-600">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-indigo-600">FAQ</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-700">Quick Links</h3>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li><Link to="/plans/health" className="hover:text-indigo-600">Plans</Link></li>
            <li><Link to="/book-appointment" className="hover:text-indigo-600">Book Appointment</Link></li>
            <li><a href="/chatbot" className="hover:text-indigo-600">AI Chatbot</a></li>

          </ul>
        </div>

      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="font-medium">InsurAI</span> — All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
