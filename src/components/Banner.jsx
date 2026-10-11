import React from 'react';
// ১. ইমেজের নাম পরিবর্তন করে BannerImg করা হলো যেন কম্পোনেন্টের নামের সাথে না মেলে
import BannerImg from '../assets/banner-main.png'; 

const Banner = () => {
    return (
        // flex-col দিয়ে সব কন্টেন্ট একটার নিচে আরেকটা আনা হলো এবং টেক্সট সেন্টারে রাখা হলো
        <div className="min-h-100 my-10 bg-linear-to-r from-gray-950 via-slate-900 to-gray-950 border border-gray-800 rounded-3xl flex flex-col justify-center items-center text-center p-8 gap-5 shadow-2xl shadow-purple-500/5">
            
            {/* আপনার ব্যানার ইমেজ */}
            <img src={BannerImg} alt="Banner Main" className="w-56 object-contain mb-2 animate-pulse" />
            
            {/* মূল শিরোনাম */}
            <h1 className="font-black text-3xl md:text-5xl max-w-3xl leading-tight bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            
            {/* সাব-টাইটেল */}
            <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide">
                Beyond Boundaries Beyond Limits
            </p>
            
            {/* আপনার Claim Free Credit বাটন */}
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-xl border-2 border-black active:scale-95 transition-all duration-200 shadow-lg shadow-yellow-400/20 cursor-pointer mt-2">
                Claim Free Credit
            </button>



            
            
        </div>
    );
};

export default Banner;
