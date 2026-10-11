import React from 'react';
import Logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <nav className=' bg-red-500 '>
            <div className=' flex justify-between container mx-auto '>
                <img src={Logo} alt=''></img> <ul className='flex gap-4 items-center '>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Players</li>
                    <li>Schedule</li>
                </ul>
            </div>
        </nav>)

        ;
}; export default Navbar;