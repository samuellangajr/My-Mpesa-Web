"use client";
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@images/logo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className="flex justify-between bg-mpesa py-3 px-6 md:px-14">  
            <div className="flex items-center space-x-4">
            <IoIosMenu
                    className="text-white cursor-pointer md:hidden"
                    size={30}
                    onClick={toggleMenu}
                />
                <div>
                    <Link href={"/"}>
                        <Image
                            src={logo}
                            alt="Mpesa Logo"
                            width={70}
                            height={70}
                        />
                    </Link>
                </div>        
                <div className="hidden md:flex space-x-4">
                    <Link href={"/"} className="text-white rounded-full bg-red-500 py-3 px-4">Home</Link>
                    <Link href={"/"} className="text-white rounded-full  hover:border border-red-500 py-3 px-4">Move money</Link>
                    <Link href={"/"} className="text-white rounded-full hover:border border-red-500 py-3 px-4">Services</Link>
                </div>      
            </div>
            <div className="flex items-center space-x-4">
                <IoIosSearch  className="hidden md:flex text-white cursor-pointer"  size={22}/>
                <IoNotificationsOutline className="hidden md:flex text-white cursor-pointer"  size={22}/>
                <div>
                    <Link href={"/"} className="space-x-2">
                        <span className="rounded-full py-2 px-3 bg-white text-mpesa">SJ</span>
                        <span className=" text-white">Hello, Samuel</span>
                    </Link>
                </div>
            </div>
            {/*Mobile Menu*/}
            <div className={`fixed left-0 h-full w-64 bg-mpesa transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`} style={{ top: '72px' }}>
                <div className="px-4 py-8">
                    <Link href="/" className="block text-white rounded-full bg-red-500 py-2 px-4 mb-2">Home</Link>
                    <Link href="/" className="block text-white rounded-full hover:border border-red-500 py-2 px-4 mb-2">Move money</Link>
                    <Link href="/" className="block text-white rounded-full hover:border border-red-500 py-2 px-4">Services</Link>
                </div>
            </div>
        </header>
    );
};
export default Header;
