export default function About() {
  const milestones = [
    { year: '1979', event: 'Founded in Mumbai', description: 'Our journey began in Mumbai' },
    { year: '2018', event: 'First Texas Location', description: 'Opened in McKinney' },
    { year: '2023', event: '4 Locations', description: 'Expanded across Texas' },
    { year: '2024', event: 'Community Favorite', description: 'Serving thousands monthly' },
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'Traditional recipes passed down through generations',
      icon: '🏺',
    },
    {
      title: 'Innovation',
      description: 'Modern techniques meet classic flavors',
      icon: '✨',
    },
    {
      title: 'Quality',
      description: 'Only the freshest, finest ingredients',
      icon: '⭐',
    },
    {
      title: 'Community',
      description: 'Creating memorable experiences together',
      icon: '❤️',
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#023047] mb-4">
            Our Story
          </h1>
          <p className="font-['Poppins'] text-xl text-gray-600 max-w-3xl mx-auto">
            Where Tradition Meets Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-[#F7C6C7] to-[#FFD166] rounded-3xl h-[400px] flex items-center justify-center">
            <span className="text-9xl">🍨</span>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#023047] mb-6">
              Maya Creamery
            </h2>
            <div className="space-y-4 font-['Poppins'] text-gray-700 leading-relaxed">
              <p>
                Maya Creamery is more than just a dessert lounge – it's a celebration of heritage
                and flavor.
              </p>
              <p>
                Our story began in Mumbai in 1979, where our family crafted traditional kulfis,
                faloodas, and malai-based sweets with love. Today, we bring those authentic recipes
                to Texas, blending them with modern techniques like rolled ice cream and bubble tea
                to create a one-of-a-kind experience.
              </p>
              <p>
                Every swirl, roll, and sip at Maya Creamery is made with the freshest ingredients
                and a passion for innovation. From our signature faloodas and rabdi specials to our
                handcrafted rolled ice creams and refreshing bubble teas, each treat is designed to
                take you on a journey of taste and nostalgia.
              </p>
              <p className="font-semibold text-[#023047]">
                Our goal is simple: to share a piece of India's vibrant dessert culture in a
                modern, fun, and inviting space.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center text-[#023047] mb-12">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="absolute -top-4 left-6 bg-gradient-to-r from-[#FFB703] to-[#F7C6C7] text-white rounded-full w-16 h-16 flex items-center justify-center font-['Poppins'] font-bold text-lg">
                  {milestone.year}
                </div>
                <div className="mt-8">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#023047] mb-2">
                    {milestone.event}
                  </h3>
                  <p className="font-['Poppins'] text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center text-[#023047] mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all"
              >
                <div className="bg-gradient-to-br from-[#F7C6C7] to-[#FFD166] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                  <span className="text-5xl">{value.icon}</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#023047] mb-2">
                  {value.title}
                </h3>
                <p className="font-['Poppins'] text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#023047] to-[#FFB703] rounded-3xl p-12 text-center text-white">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-4">
            From Mumbai to Texas
          </h2>
          <p className="font-['Poppins'] text-lg max-w-3xl mx-auto mb-8">
            We're proud to bring the flavors of our heritage to the heart of Texas, creating a
            space where tradition and innovation come together in every delicious bite.
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-['Poppins'] font-semibold">
            <div className="bg-white/20 rounded-lg px-6 py-3">
              45+ Years of Tradition
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              4 Texas Locations
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              100% Fresh Ingredients
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
