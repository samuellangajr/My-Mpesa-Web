import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiProhibited2Line } from "react-icons/ri";

const Notifications: React.FC = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const handleNotificationMouseEnter = () => {
        setIsNotificationOpen(true);
    };

    const handleNotificationMouseLeave = () => {
        setIsNotificationOpen(false);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleNotificationMouseEnter}
            onMouseLeave={handleNotificationMouseLeave}
        >
            <IoNotificationsOutline
                className="hidden md:flex text-white cursor-pointer"
                size={22}
            />
            {isNotificationOpen && (
                <div className="absolute right-0  flex items-center space-x-3 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg z-50 p-4">
                    <RiProhibited2Line className="text-gray-400" size={22}/>
                    <p className="text-black">No new notifications</p>
                </div>
            )}
        </div>
    );
};

export default Notifications;
