import { MapPin, Phone, Clock } from 'lucide-react';
import { locations } from '../data/locationData';

export default function Locations() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#023047] mb-4">
            Visit Us
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-600 max-w-2xl mx-auto">
            Find a Maya Creamery location near you in Texas
          </p>
        </div>

        <div className="mb-12 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
          <div className="h-[500px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-[#023047] mx-auto mb-4" />
              <p className="font-['Poppins'] text-gray-600">Interactive Map</p>
              <p className="font-['Poppins'] text-sm text-gray-500">
                Google Maps integration showing all locations
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div
                className={`h-4 ${
                  index === 0
                    ? 'bg-gradient-to-r from-[#FFB703] to-[#F7C6C7]'
                    : 'bg-gradient-to-r from-[#F7C6C7] to-[#B2E7C6]'
                }`}
              />
              <div className="p-8">
                <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#023047] mb-4">
                  {location.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#FFB703] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-['Poppins'] font-semibold text-[#023047]">Address</p>
                      <p className="font-['Poppins'] text-gray-600">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-[#FFB703] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-['Poppins'] font-semibold text-[#023047]">Phone</p>
                      <a
                        href={`tel:${location.phone}`}
                        className="font-['Poppins'] text-gray-600 hover:text-[#FFB703]"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-[#FFB703] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-['Poppins'] font-semibold text-[#023047]">Hours</p>
                      <p className="font-['Poppins'] text-gray-600">{location.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-[#023047] text-white py-3 rounded-lg font-['Poppins'] font-semibold hover:bg-[#FFB703] hover:text-[#023047] transition-all">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#F7C6C7] to-[#FFD166] rounded-3xl p-12">
          <div className="text-center">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#023047] mb-4">
              Can't Find Us Nearby?
            </h2>
            <p className="font-['Poppins'] text-lg text-[#023047]/80 mb-6 max-w-2xl mx-auto">
              We're always looking to bring Maya Creamery to new communities. Interested in
              franchising opportunities?
            </p>
            <button className="bg-[#023047] text-white px-8 py-3 rounded-full font-['Poppins'] font-semibold hover:bg-white hover:text-[#023047] transition-all transform hover:scale-105">
              Franchise Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
