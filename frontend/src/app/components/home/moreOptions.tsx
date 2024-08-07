import { MdMoreVert } from "react-icons/md";
import React, { useState } from "react";
const MoreOptions: React.FC = () => {
    const [showMore, setShowMore] = useState(false);
    const toogleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <div className="relative">
            <div
                className={`flex items-center justify-center text-gray-500 cursor-pointer hover:bg-mpesa hover:text-white rounded-full h-8 w-8 ${
                    !showMore ? "" : "bg-mpesa text-white"
                }`}
                onClick={toogleShowMore}
            >
                <MdMoreVert size={22} />
            </div>
            {/*More options*/}
            {showMore && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg z-50 p-2">
                    <ul className="space-y-1">
                        <li className="cursor-pointer hover:border hover:border-red-500 py-2 px-3 rounded-md">
                            Go to M-pesa Balance
                        </li>
                        <li className="cursor-pointer hover:border hover:border-red-500 py-2 px-3 rounded-md">
                            Manage currencies
                        </li>
                        <li className="cursor-pointer hover:border hover:border-red-500 py-2 px-3 rounded-md">
                            Get Help
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
export default MoreOptions;
