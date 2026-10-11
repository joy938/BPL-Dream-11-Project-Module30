import React from 'react';

const PlayersCard = ({ player }) => {
    // প্রপস থেকে প্লেয়ারের ভেতরের ডেটাগুলো বের করে নিলাম
    const { name, origin, playertype, batting_style, bowling_style, price, image } = player;

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group">
            
            {/* প্লেয়ারের ছবি */}
            <div className="w-full h-56 bg-gray-800 overflow-hidden border-b border-gray-800">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
            </div>

            {/* কার্ডের ভেতরের তথ্য */}
            <div className="p-5 flex flex-col gap-4">
                {/* প্লেয়ারের নাম */}
                <h3 className="text-xl font-bold text-white tracking-wide">{name}</h3>
                
                {/* দেশ এবং প্লেয়ার টাইপ */}
                <div className="flex justify-between items-center text-sm text-gray-400 font-medium border-b border-gray-800/60 pb-3">
                    <span>🚩 {origin}</span>
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-xs text-orange-400 font-bold uppercase tracking-wider">
                        {playertype}
                    </span>
                </div>

                {/* ব্যাটিং ও বোলিং স্টাইল */}
                <div className="text-xs text-gray-400 flex flex-col gap-2 bg-gray-950/40 p-3 rounded-xl border border-gray-800/40">
                    <p className="flex justify-between">
                        <span className="font-semibold text-gray-300">🏏 Batting Style:</span> 
                        <span>{batting_style}</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-semibold text-gray-300">⚾ Bowling Style:</span> 
                        <span>{bowling_style}</span>
                    </p>
                </div>

                {/* প্রাইস এবং বাটন */}
                <div className="flex justify-between items-center mt-2 pt-2">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Price</span>
                        <span className="text-base font-extrabold text-yellow-400">
                            \${price.toLocaleString()}
                        </span>
                    </div>
                    
                    {/* সাধারণ বাটন */}
                    <button className="btn btn-outline btn-sm border-orange-500 text-white hover:bg-orange-500 hover:border-orange-500 rounded-xl px-4 font-bold text-xs transition-all duration-200 cursor-pointer">
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayersCard;
