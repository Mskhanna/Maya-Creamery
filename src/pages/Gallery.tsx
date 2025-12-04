import { useState } from 'react';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    'all',
    'Rolled Ice Cream',
    'Falooda',
    'Teas',
    'Events',
  ];

  const galleryImages = [
    { id: 1, category: 'Rolled Ice Cream', color: 'bg-gradient-to-br from-[#F7C6C7] to-[#FFD166]' },
    { id: 2, category: 'Falooda', color: 'bg-gradient-to-br from-[#FFB703] to-[#B2E7C6]' },
    { id: 3, category: 'Teas', color: 'bg-gradient-to-br from-[#B2E7C6] to-[#FFD166]' },
    { id: 4, category: 'Rolled Ice Cream', color: 'bg-gradient-to-br from-[#FFD166] to-[#F7C6C7]' },
    { id: 5, category: 'Events', color: 'bg-gradient-to-br from-[#FFB703] to-[#F7C6C7]' },
    { id: 6, category: 'Falooda', color: 'bg-gradient-to-br from-[#F7C6C7] to-[#B2E7C6]' },
    { id: 7, category: 'Teas', color: 'bg-gradient-to-br from-[#B2E7C6] to-[#FFB703]' },
    { id: 8, category: 'Rolled Ice Cream', color: 'bg-gradient-to-br from-[#FFD166] to-[#B2E7C6]' },
    { id: 9, category: 'Events', color: 'bg-gradient-to-br from-[#F7C6C7] to-[#FFD166]' },
    { id: 10, category: 'Falooda', color: 'bg-gradient-to-br from-[#FFB703] to-[#FFD166]' },
    { id: 11, category: 'Teas', color: 'bg-gradient-to-br from-[#B2E7C6] to-[#F7C6C7]' },
    { id: 12, category: 'Rolled Ice Cream', color: 'bg-gradient-to-br from-[#F7C6C7] to-[#FFB703]' },
  ];

  const filteredImages =
    selectedFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedFilter);

  const getIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Rolled Ice Cream': '🍦',
      'Falooda': '🥤',
      'Teas': '🧋',
      'Events': '🎉',
    };
    return icons[category] || '🍰';
  };

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#023047] mb-4">
            Gallery
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our delicious creations and memorable moments
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-['Poppins'] font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#023047] text-white shadow-lg'
                    : 'bg-white text-[#023047] hover:bg-gray-100'
                }`}
              >
                {filter === 'all' ? 'All Photos' : filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
            >
              <div
                className={`absolute inset-0 ${image.color} flex items-center justify-center`}
              >
                <span className="text-8xl group-hover:scale-110 transition-transform">
                  {getIcon(image.category)}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-['Poppins'] font-semibold text-white text-lg">
                    {image.category}
                  </p>
                  <p className="font-['Poppins'] text-white/80 text-sm">High-quality image</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#FFB703] to-[#F7C6C7] rounded-3xl p-12 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#023047] mb-4">
            Share Your Experience
          </h2>
          <p className="font-['Poppins'] text-lg text-[#023047]/80 mb-6 max-w-2xl mx-auto">
            Tag us on Instagram @mayacreamery to be featured in our gallery!
          </p>
          <button className="bg-[#023047] text-white px-8 py-3 rounded-full font-['Poppins'] font-semibold hover:bg-white hover:text-[#023047] transition-all transform hover:scale-105">
            Follow on Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
