import { useState } from 'react';
import { Menu, X, IceCream } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Menu', page: 'menu' },
    { name: 'About', page: 'about' },
    { name: 'Locations', page: 'locations' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 group"
          >
            <IceCream className="h-8 w-8 text-[#F7C6C7] group-hover:text-[#FFB703] transition-colors" />
            <span className="text-2xl font-['Playfair_Display'] font-bold text-[#023047]">
              Maya Creamery
            </span>
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-base font-['Poppins'] transition-colors relative group ${
                  currentPage === item.page
                    ? 'text-[#FFB703] font-semibold'
                    : 'text-[#023047] hover:text-[#FFB703]'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FFB703] transform origin-left transition-transform ${
                    currentPage === item.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#023047] hover:text-[#FFB703] transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-['Poppins'] transition-colors ${
                  currentPage === item.page
                    ? 'bg-[#F7C6C7] text-[#023047] font-semibold'
                    : 'text-[#023047] hover:bg-[#F7C6C7]/30'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
