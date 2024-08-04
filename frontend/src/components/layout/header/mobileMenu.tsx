import React from "react";
import Link from "next/link";

interface MobileMenuProps {
    menuOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen }) => {
    return (
        <div
            className={`fixed left-0 h-full w-64 bg-mpesa transform ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
            style={{ top: "72px", zIndex: 1000 }}
        >
            <div className="px-4 py-8">
                <Link
                    href="/"
                    className="block text-white rounded-full hover:bg-red-500 py-3 px-4"
                >
                    Home
                </Link>
                <Link
                    href="/move-money"
                    className="block text-white rounded-full hover:bg-red-500 py-3 px-4"
                >
                    Move money
                </Link>
                <Link
                    href="/"
                    className="block text-white rounded-full hover:bg-red-500 py-3 px-4"
                >
                    Services
                </Link>
            </div>
        </div>
    );
};

export default MobileMenu;
