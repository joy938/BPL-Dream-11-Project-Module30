import React from 'react';
import Logo from '../assets/logo.png'; // আপনার ইম্পোর্ট করা লোগো পাথ

const Navbar = () => {
    return (
        <div className="navbar bg-base-100/50 backdrop-blur-md sticky top-0 z-50 px-4 md:px-12 border-b border-gray-800">
            {/* নাভবারের বাম পাশ (লোগো) */}
            <div className="flex-1">
                <a className="flex items-center gap-2 cursor-pointer">
                    <img src={Logo} alt="BPL Logo" className="w-12 h-12 object-contain" />
                    <span className="text-xl font-black tracking-wider bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent hidden sm:block">
                        BPL DREAM 11
                    </span>
                </a>
            </div>

            {/* নাভবারের ডান পাশ (মেনু এবং প্রোফাইল/কয়েন স্পেস) */}
            <div className="flex-none gap-6 items-center">
                <ul className="menu menu-horizontal px-1 font-medium text-gray-300 hidden md:flex gap-2">
                    <li><a className="hover:text-orange-400 transition-colors">Home</a></li>
                    <li><a className="hover:text-orange-400 transition-colors">Fixture</a></li>
                    <li><a className="hover:text-orange-400 transition-colors">Teams</a></li>
                    <li><a className="hover:text-orange-400 transition-colors">Schedules</a></li>
                </ul>

                {/* মডার্ন এবং স্টাইলিশ কয়েন ব্যাজ বাটন */}
                <div className="flex items-center gap-2 bg-gray-900 border border-gray-700/60 rounded-xl px-4 py-2 font-bold shadow-lg shadow-yellow-500/5 select-none">
                    <span className="text-gray-200 tracking-wide text-sm">500 Coin</span>
                    <span className="text-base text-yellow-500 animate-spin-slow">$</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;



