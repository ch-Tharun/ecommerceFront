import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-white text-2xl font-bold">
                    <span>MyLogo</span>
                </Link>

                {/* Search Bar */}
                <div className="hidden sm:block flex-grow mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-2 rounded-lg focus:outline-none"
                            placeholder="Search products..."
                        />
                        <FaSearch className="absolute right-2 top-3 text-gray-500" />
                    </div>
                </div>

                {/* Cart Icon */}
                <div className="flex items-center">
                    <Link href="/CartPage" className="text-white">
                        {props.count > 0 &&
                            <span class="bg-red-400 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">{props.count}</span>
                        }
                        <FaShoppingCart size={24} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="sm:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="/" className="block text-white px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link href="/about" className="block text-white px-3 py-2 rounded-md text-base font-medium">
                            About
                        </Link>
                        <Link href="/CartPage" className="block text-white px-3 py-2 rounded-md text-base font-medium">
                            Cart
                        </Link>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="px-2 pb-3">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full p-2 rounded-lg focus:outline-none"
                                placeholder="Search products..."
                            />
                            <FaSearch className="absolute right-2 top-3 text-gray-500" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};




const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps)(Navbar);
