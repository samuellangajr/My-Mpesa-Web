"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@images/logo.png";
import { IoIosMenu } from "react-icons/io";
import MobileMenu from "./mobileMenu";
import NavLinks from "./navLinks";
import Search from "./search";
import Notifications from "./notfications";

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
                            width={60}
                            height={60}
                        />
                    </Link>
                </div>
                {/*Nav Links*/}
                <NavLinks />
            </div>
            <div className="flex items-center space-x-4">
                {/*Search*/}
                <Search />
                {/*Notifcations*/}
                <Notifications />
                <div>
                    <Link
                        href="/"
                        className="flex items-center p-2 space-x-2  border border-red-500 rounded-full  hover:bg-red-500"
                    >
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-mpesa ">
                            SJ
                        </span>
                        <span className="text-white">Hello, Samuel</span>
                    </Link>
                </div>
            </div>
            {/*Menu Mobile*/}
            <MobileMenu menuOpen={menuOpen} />
        </header>
    );
};
export default Header;
