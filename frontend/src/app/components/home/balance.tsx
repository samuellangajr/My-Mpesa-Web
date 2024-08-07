import React, { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import MoreOptions from "./moreOptions";

const Balance: React.FC = () => {
    const [showBalance, setShowBalance] = useState(false);

    const toogleShowBalance = () => {
        setShowBalance(!showBalance);
    };
    return (
        <section className="bg-white p-6 rounded-xl border space-y-4">
            <div className="flex justify-between items-center">
                <h1
                    className="hover:underline font-bold text-lg cursor-pointer"
                    style={{ color: "#0c0c0d" }}
                >
                    M-pesa account
                </h1>
                {/*Show more options*/}
                <MoreOptions />
            </div>
            <p
                className={`font-semibold text-4xl ${
                    !showBalance ? "blur-lg" : ""
                }`}
                style={{ color: "#0c0c0d" }}
            >
                10,000.00 Mzn
            </p>
            <p className="text-sm text-gray-600">Available</p>
            <div
                className="flex items-center justify-center w-32 space-x-2 p-2 rounded-full bg-mpesa text-white cursor-pointer"
                onClick={toogleShowBalance}
            >
                {showBalance ? <BiSolidHide size={15} /> : <BiShow size={15} />}
                <p className="text-xs">
                    {showBalance ? "Hide balance" : "Show balance"}
                </p>
            </div>
        </section>
    );
};
export default Balance;