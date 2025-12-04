import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [franchiseData, setFranchiseData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', newsletterEmail);
  };

  const handleFranchise = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Franchise inquiry:', franchiseData);
  };

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#023047] mb-4">
            Get in Touch
          </h1>
          <p className="font-['Poppins'] text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with questions, feedback, or inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#023047] mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#F7C6C7] p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#023047]" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-[#023047] mb-1">Phone</h3>
                  <p className="font-['Poppins'] text-gray-600">(972) 555-0100</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FFD166] p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#023047]" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-[#023047] mb-1">Email</h3>
                  <p className="font-['Poppins'] text-gray-600">info@mayacreamery.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#B2E7C6] p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-[#023047]" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-[#023047] mb-1">
                    Headquarters
                  </h3>
                  <p className="font-['Poppins'] text-gray-600">McKinney, Texas</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#023047] mx-auto mb-2" />
                <p className="font-['Poppins'] text-gray-600">Interactive Map</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#023047] mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-['Poppins'] text-sm font-semibold text-[#023047] block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFB703] focus:ring-2 focus:ring-[#FFB703]/20 outline-none font-['Poppins']"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="font-['Poppins'] text-sm font-semibold text-[#023047] block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFB703] focus:ring-2 focus:ring-[#FFB703]/20 outline-none font-['Poppins']"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="font-['Poppins'] text-sm font-semibold text-[#023047] block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFB703] focus:ring-2 focus:ring-[#FFB703]/20 outline-none font-['Poppins']"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="font-['Poppins'] text-sm font-semibold text-[#023047] block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFB703] focus:ring-2 focus:ring-[#FFB703]/20 outline-none font-['Poppins']"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="font-['Poppins'] text-sm font-semibold text-[#023047] block mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFB703] focus:ring-2 focus:ring-[#FFB703]/20 outline-none font-['Poppins'] resize-none"
                  placeholder="Tell us more..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#023047] text-white py-3 rounded-lg font-['Poppins'] font-semibold hover:bg-[#FFB703] hover:text-[#023047] transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#F7C6C7] to-[#FFD166] rounded-2xl p-8">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#023047] mb-4">
              Newsletter
            </h2>
            <p className="font-['Poppins'] text-[#023047]/80 mb-6">
              Subscribe to receive updates on new flavors, special offers, and events!
            </p>
            <form onSubmit={handleNewsletter} className="flex space-x-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border-none outline-none font-['Poppins']"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="bg-[#023047] text-white px-6 py-3 rounded-lg font-['Poppins'] font-semibold hover:bg-white hover:text-[#023047] transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-br from-[#B2E7C6] to-[#FFB703] rounded-2xl p-8">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#023047] mb-4">
              Franchise Opportunities
            </h2>
            <p className="font-['Poppins'] text-[#023047]/80 mb-6">
              Interested in bringing Maya Creamery to your community? Let's talk!
            </p>
            <form onSubmit={handleFranchise} className="space-y-3">
              <input
                type="text"
                value={franchiseData.name}
                onChange={(e) => setFranchiseData({ ...franchiseData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border-none outline-none font-['Poppins']"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                value={franchiseData.email}
                onChange={(e) => setFranchiseData({ ...franchiseData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border-none outline-none font-['Poppins']"
                placeholder="Your email"
                required
              />
              <input
                type="text"
                value={franchiseData.location}
                onChange={(e) => setFranchiseData({ ...franchiseData, location: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border-none outline-none font-['Poppins']"
                placeholder="Preferred location"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#023047] text-white py-3 rounded-lg font-['Poppins'] font-semibold hover:bg-white hover:text-[#023047] transition-all"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
