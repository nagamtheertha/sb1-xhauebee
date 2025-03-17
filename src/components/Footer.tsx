import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">WesternEduConnect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in international education consulting, helping students achieve their dreams of studying abroad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">Our Services</Link>
              </li>
              <li>
                <Link to="/study-destinations" className="text-gray-400 hover:text-white transition">Study Destinations</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-400 hover:text-white transition">Success Stories</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Study Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/study-destinations/usa" className="text-gray-400 hover:text-white transition">USA</Link>
              </li>
              <li>
                <Link to="/study-destinations/uk" className="text-gray-400 hover:text-white transition">UK</Link>
              </li>
              <li>
                <Link to="/study-destinations/canada" className="text-gray-400 hover:text-white transition">Canada</Link>
              </li>
              <li>
                <Link to="/study-destinations/australia" className="text-gray-400 hover:text-white transition">Australia</Link>
              </li>
              <li>
                <Link to="/study-destinations/new-zealand" className="text-gray-400 hover:text-white transition">New Zealand</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">westerneduconnect@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">+91 72073 70326<br />
                                                +91 99660 48788</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <span className="text-gray-400">
                  Mahanadu Road Opp NTR Health University,<br />
                  Vijayawada, Andhra Pardesh,<br />
                  520004,<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} WesternEduConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;