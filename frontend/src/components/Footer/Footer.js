import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/pioneer ventures.jpeg';

const Footer = () => {
  return (
    <div className='bg-gray-800'>
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row  justify-evenly">
          {/* Logo and Description */}
          <div className="flex flex-col items-center">
            <Link to="#" className="flex items-center">
              <img src={Logo} alt='logo' className="w-24" />
            </Link>
            <p className="text-gray-300 text-sm text-center mt-4 mx-">
              Pioneer Ventures is a premier venture <br/>
              capitalist firm dedicated to empowering visionary <br/>
              entrepreneurs to build transformative brands.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="text-gray-400 hover:text-gray-50 block">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-gray-50 block">
                About
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-gray-50 block">
                Services
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-gray-50 block">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact Information */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-400">123 Main Street, Anytown USA</p>
            <p className="text-gray-400">info@acmedigital.com</p>
            <p className="text-gray-400">(555) 555-5555</p>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="bg-gray-900 border-t border-gray-700 py-6 px-4 md:px-6 text-center">
        <p className="text-xs text-gray-400">&copy; 2024 Pioneer Ventures. All rights reserved.</p>
        <nav className="mt-2 flex justify-center sm:justify-end gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:underline underline-offset-4 text-white">
            Terms of Service
          </Link>
          <Link to="#" className="text-xs hover:underline underline-offset-4 text-white">
            Privacy
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
