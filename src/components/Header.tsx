import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Menu,
  X,
  Home,
  Info,
  FileText,
  Shield,
  MapPin,
  Image,
  Building2,
  HelpCircle,
} from "lucide-react";
import {
  trackButtonClick,
  trackMenuToggle,
  trackContact,
} from "../utils/analytics";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/#overview", icon: <Info size={20} />, label: "Overview" },
    { path: "/#amenities", icon: <Building2 size={20} />, label: "Amenities" },
    { path: "/#pricing", icon: <FileText size={20} />, label: "Pricing" },
    { path: "/#gallery", icon: <Image size={20} />, label: "Gallery" },
    { path: "/#location", icon: <MapPin size={20} />, label: "Location" },
    { path: "/#faq", icon: <HelpCircle size={20} />, label: "FAQs" },
  ];

  const handleMenuToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    trackMenuToggle(newState ? "open" : "close");
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    trackButtonClick("navigation", id.replace("/#", ""));

    if (location.pathname !== "/") {
      window.location.href = id;
      return;
    }
    const element = document.querySelector(id.replace("/", ""));
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handlePhoneClick = () => {
    trackContact("phone");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-gray-800 shrink-0"
          >
            <MapPin className="text-green-600" size={32} />
            <span className="hidden sm:inline">M3M City of Dreams</span>
            <span className="sm:hidden">M3M</span>
          </Link>

          <nav className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 whitespace-nowrap"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919518091945"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors whitespace-nowrap"
              onClick={handlePhoneClick}
            >
              <Phone size={20} />
              <span className="hidden md:inline">+91 9518091945</span>
            </a>

            <button className="lg:hidden" onClick={handleMenuToggle}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="py-4 border-t">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleScroll(e, item.path)}
                  className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-gray-50"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
