import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Rolled Ice Cream',
      subtitle: 'Handcrafted on a frozen plate, rolled to perfection',
      bgColor: 'bg-gradient-to-br from-[#F7C6C7] to-[#FFD166]',
    },
    {
      title: 'Falooda Creations',
      subtitle: 'Traditional Indian dessert with a modern twist',
      bgColor: 'bg-gradient-to-br from-[#FFB703] to-[#B2E7C6]',
    },
    {
      title: 'Bubble Tea',
      subtitle: 'Refreshing teas with chewy tapioca pearls',
      bgColor: 'bg-gradient-to-br from-[#B2E7C6] to-[#FFD166]',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const features = [
    {
      title: 'Rolled Ice Cream',
      description: 'Watch as we create your custom ice cream rolls on a frozen plate',
      icon: '🍦',
    },
    {
      title: 'Falooda Creations',
      description: 'Traditional Indian desserts with vermicelli, kulfi, and syrups',
      icon: '🥤',
    },
    {
      title: 'Bubble Teas',
      description: 'Premium teas with tapioca pearls and fresh ingredients',
      icon: '🧋',
    },
  ];

  const popularItems = [
    { name: 'OG Rose Falooda', price: '$7.99', category: 'Falooda' },
    { name: 'Thai Milk Tea', price: '$5.49', category: 'Bubble Tea' },
    { name: 'Triple Chocolate Crêpe', price: '$7.99', category: 'Crêpes' },
    { name: 'Mango Falooda', price: '$7.99', category: 'Falooda' },
    { name: 'Lotus Crêpe', price: '$7.99', category: 'Crêpes' },
    { name: 'Matcha Milk Tea', price: '$5.49', category: 'Bubble Tea' },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            } ${slide.bgColor}`}
          >
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-[#023047] mb-4">
                {slide.title}
              </h1>
              <p className="font-['Poppins'] text-xl md:text-2xl text-[#023047]/80 mb-8">
                {slide.subtitle}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => onNavigate('menu')}
                  className="bg-[#023047] text-white px-8 py-3 rounded-full font-['Poppins'] font-semibold hover:bg-[#FFB703] hover:text-[#023047] transition-all transform hover:scale-105"
                >
                  Explore Menu
                </button>
                <button
                  onClick={() => onNavigate('locations')}
                  className="bg-white text-[#023047] px-8 py-3 rounded-full font-['Poppins'] font-semibold hover:bg-[#023047] hover:text-white transition-all transform hover:scale-105"
                >
                  Visit Us
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-[#023047]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6 text-[#023047]" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#023047] w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-center text-[#023047] mb-4">
          Where Tradition Rolls Into Indulgence
        </h2>
        <p className="font-['Poppins'] text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Experience the perfect fusion of authentic Indian desserts and modern creations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#023047] mb-3">
                {feature.title}
              </h3>
              <p className="font-['Poppins'] text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center text-[#023047] mb-12">
            Popular Items
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#F7C6C7]/20 to-[#FFD166]/20 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-['Poppins'] font-semibold text-lg text-[#023047]">
                    {item.name}
                  </h4>
                  <span className="font-['Poppins'] font-bold text-[#FFB703]">{item.price}</span>
                </div>
                <p className="font-['Poppins'] text-sm text-gray-600">{item.category}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('menu')}
              className="bg-[#FFB703] text-[#023047] px-8 py-3 rounded-full font-['Poppins'] font-semibold hover:bg-[#023047] hover:text-white transition-all transform hover:scale-105"
            >
              View Full Menu
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#F7C6C7] to-[#FFD166] rounded-3xl p-12 text-center">
          <Instagram className="h-12 w-12 text-[#023047] mx-auto mb-4" />
          <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#023047] mb-4">
            Follow Us on Instagram
          </h3>
          <p className="font-['Poppins'] text-[#023047]/80 mb-6">
            See our latest creations and special offers
          </p>
          <button className="bg-[#023047] text-white px-8 py-3 rounded-full font-['Poppins'] font-semibold hover:bg-white hover:text-[#023047] transition-all transform hover:scale-105">
            @mayacreamery
          </button>
        </div>
      </div>
    </div>
  );
}
