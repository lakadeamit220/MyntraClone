import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-800 shadow-inner">
      <div className="footer_container max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Online Shopping */}
        <div className="footer_column">
          <h3 className="text-xl font-bold mb-6 text-gray-900">
            Online Shopping
          </h3>
          <ul className="space-y-3">
            {["Men", "Women", "Kids", "Home & Living", "Beauty"].map((item) => (
              <li key={item} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer_column">
          <h3 className="text-xl font-bold mb-6 text-gray-900">
            Customer Service
          </h3>
          <ul className="space-y-3">
            {["Contact Us", "FAQs", "Returns", "Shipping", "Track Order"].map(
              (item) => (
                <li key={item} className="text-gray-700">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="footer_column">
          <h3 className="text-xl font-bold mb-6 text-gray-900">
            Connect With Us
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaYoutube /> YouTube
            </li>
          </ul>
        </div>

        {/* App Store Links */}
        <div className="footer_column">
          <h3 className="text-xl font-bold mb-6 text-gray-900">
            Download Our App
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 bg-gray-100 py-3 rounded-lg text-gray-800">
              <FaGooglePlay className="text-xl" />
              Google Play
            </li>
            <li className="flex items-center gap-3 bg-gray-100 py-3 rounded-lg text-gray-800">
              <FaApple className="text-xl" />
              App Store
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-8" />

      <div className="copyright text-center py-6 text-sm text-gray-500">
        &copy; {currentYear} www.myntra.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
