import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search: React.FC = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toogleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    return (
        <div className="hidden lg:flex space-x-4 items-center">
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isSearchOpen ? 'max-w-xs' : 'max-w-0'
                }`}
            >
                <input
                    type="text"
                    placeholder="Search Pay, Transfer, etc"
                    className="border border-gray-100 rounded-full px-8 py-2 w-full"
                />
            </div>
            <IoIosSearch
                className="hidden md:flex text-white cursor-pointer"
                size={22}
                onClick={toogleSearch}
            />
        </div>
    );
};
export default Search;
