import React from "react";
import Link from "next/link";
import { FaRegLightbulb, FaPlus } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
import { BsShop } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

const quickActions = [
    {
        name: "Send money",
        icon: <RxPerson size={27} />,
        url: "/send-money",
        bgColor: "bg-mpesa",
    },
    {
        name: "Credelec",
        icon: <FaRegLightbulb size={27} />,
        url: "/",
        bgColor: "bg-mpesa",
    },
    {
        name: "Cash out: Agent",
        icon: <BsShop size={27} />,
        url: "/cash-out",
        bgColor: "bg-mpesa",
    },
    {
        name: "Add",
        icon: <FaPlus size={20} />,
        url: "/",
        bgColor: "bg-gray-600",
    }
];

const QuickActions: React.FC = () => {
    return (
        <section className=" bg-white p-6 rounded-xl border">
            {/* Send money, Credelec, and Cashout */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {quickActions.map((action, index) => (
                    <Link
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                        href={action.url}
                    >
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${action.bgColor} text-white`}>
                            {action.icon}
                        </div>
                        <span className="text-sm">{action.name}</span>
                    </Link>
                ))}
            </div>
            {/* Statement */}
            <div className="flex items-center justify-between space-x-4 border shadow-md rounded-lg p-4 mt-6 cursor-pointer transition-transform duration-300 hover:scale-95">
                <div className="flex space-x-3 items-center">
                    <LuFileSpreadsheet size={27} />
                    <span>Mini statement</span>
                </div>
                <IoIosArrowForward size={27} />
            </div>
        </section>
    );
};

export default QuickActions;