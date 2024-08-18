import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="min-h-screen bg-gray-800 text-white py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">MyCompany</h3>
          <p>123 Street Name, City, State, 12345</p>
          <p>Email: contact@mycompany.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li className="mb-2">
              <Link href="/services" className="hover:underline">Services</Link>
            </li>
            <li className="mb-2">
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>© 2024 MyCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
