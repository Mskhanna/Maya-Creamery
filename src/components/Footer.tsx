import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#023047] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#FFD166] mb-4">
              Maya Creamery
            </h3>
            <p className="font-['Poppins'] text-sm text-gray-300">
              Where Tradition Rolls Into Indulgence
            </p>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-['Poppins'] text-sm">
              <li>
                <a href="#" className="hover:text-[#FFD166] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD166] transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD166] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD166] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 font-['Poppins'] text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(972) 555-0100</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@mayacreamery.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>McKinney, TX</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#FFD166] hover:text-[#023047] transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#FFD166] hover:text-[#023047] transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center font-['Poppins'] text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maya Creamery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
