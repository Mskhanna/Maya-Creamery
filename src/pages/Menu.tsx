import { useState } from 'react';
import { menuItems, categories } from '../data/menuData';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const getGradient = (category: string) => {
    const gradients: { [key: string]: string } = {
      'Rolled Ice Creams': 'from-[#F7C6C7] to-[#FFD166]',
      'Falooda & Rabdi Specials': 'from-[#FFB703] to-[#F7C6C7]',
      'Bubble Tea': 'from-[#B2E7C6] to-[#FFD166]',
      'Lemonade Refreshers': 'from-[#FFD166] to-[#B2E7C6]',
      'Fresh Fruit Fusion Tea': 'from-[#B2E7C6] to-[#F7C6C7]',
      'Crêpes': 'from-[#F7C6C7] to-[#FFB703]',
      'Macarons': 'from-[#FFB703] to-[#B2E7C6]',
    };
    return gradients[category] || 'from-[#F7C6C7] to-[#FFD166]';
  };

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#023047] mb-4">
            Our Menu
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our delicious selection of handcrafted desserts and beverages
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-['Poppins'] font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#023047] text-white shadow-lg'
                  : 'bg-white text-[#023047] hover:bg-gray-100'
              }`}
            >
              All Items
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-['Poppins'] font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#023047] text-white shadow-lg'
                    : 'bg-white text-[#023047] hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {categories.map((category) => {
          const categoryItems = menuItems.filter((item) => item.category === category);
          if (
            selectedCategory !== 'all' &&
            selectedCategory !== category
          ) {
            return null;
          }

          return (
            <div key={category} className="mb-16">
              <div
                className={`bg-gradient-to-r ${getGradient(
                  category
                )} rounded-2xl p-8 mb-8 shadow-lg`}
              >
                <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#023047]">
                  {category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryItems.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div
                      className={`h-48 bg-gradient-to-br ${getGradient(
                        category
                      )} flex items-center justify-center`}
                    >
                      <span className="text-6xl group-hover:scale-110 transition-transform">
                        {category.includes('Falooda') && '🥤'}
                        {category.includes('Ice Cream') && '🍦'}
                        {category.includes('Bubble') && '🧋'}
                        {category.includes('Lemonade') && '🍋'}
                        {category.includes('Tea') && '🍵'}
                        {category.includes('Crêpes') && '🥞'}
                        {category.includes('Macarons') && '🍰'}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-['Poppins'] font-semibold text-lg text-[#023047] flex-1">
                          {item.name}
                        </h3>
                        <span className="font-['Poppins'] font-bold text-xl text-[#FFB703] ml-2">
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="font-['Poppins'] text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {selectedCategory !== 'all' && selectedCategory === 'Rolled Ice Creams' && (
          <div className="text-center py-12 bg-gradient-to-r from-[#F7C6C7] to-[#FFD166] rounded-2xl">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#023047] mb-4">
              Custom Rolled Ice Cream
            </h3>
            <p className="font-['Poppins'] text-lg text-[#023047]/80 max-w-2xl mx-auto">
              Choose your favorite flavors and toppings to create your perfect rolled ice cream.
              Ask our staff for today's available flavors!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
