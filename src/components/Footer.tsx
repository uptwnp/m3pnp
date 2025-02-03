import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+919518091945" className="flex items-center gap-2">
                <Phone size={20} />
                +91 9518091945
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                Sector 36, Panipat, Haryana
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-green-400">Home</Link>
              <Link to="/about" className="block hover:text-green-400">About Us</Link>
              <Link to="/privacy" className="block hover:text-green-400">Privacy Policy</Link>
              <Link to="/terms" className="block hover:text-green-400">Terms of Use</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Disclaimer</h3>
            <p className="text-sm text-gray-400">
              This website is not an official website of M3M Group. It is owned and operated by an authorized channel partner. The content is for information purposes only.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} M3M City of Dreams Panipat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};