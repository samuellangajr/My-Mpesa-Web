import React from "react";
import Link from "next/link";

const NavLinks: React.FC = () => {
    return (
        <div className="hidden md:flex space-x-4">
            <Link
                href="/"
                className="text-white rounded-full hover:bg-red-500 py-3 px-4"
            >
                Home
            </Link>
            <Link
                href="/move-money"
                className="text-white rounded-full hover:bg-red-500 py-3 px-4"
            >
                Move money
            </Link>
            <Link
                href="/"
                className="text-white rounded-full hover:bg-red-500 py-3 px-4"
            >
                Services
            </Link>
        </div>
    );
};

export default NavLinks;
