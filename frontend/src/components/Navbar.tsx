import React, { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    slug: "/",
  },
  {
    label: "About Us",
    slug: "/about-us",
  },
  {
    label: "Services",
    slug: "/#services",
  },
  {
    label: "FAQ's",
    slug: "/faqs",
  },
  {
    label: "Terms",
    slug: "/terms",
  },
  {
    label: "How it Works",
    slug: "/#how-it-works",
  },
  {
    label: "Contact",
    slug: "/contact-us",
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              LegalConnect
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 justify-center">
            {navItems.map((item: { label: string; slug: string }) => (
              <Link
                to={item.slug}
                className="text-gray-600 hover:text-blue-600"
                key={item.slug}
              >
                {item.label}
              </Link>
            ))}

            <Button onClick={() => navigate("/signin")}>Get Started</Button>
          </div>

          <div className="md:hidden flex items-center justify-center">
            <Button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 justify-center">
            {navItems.map((item: { label: string; slug: string }) => (
              <a
                href={item.slug}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                key={item.slug}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full" onClick={() => navigate("/signin")}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
