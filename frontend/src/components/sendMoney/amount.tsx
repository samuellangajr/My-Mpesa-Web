import React, { useState } from "react";

const Amount: React.FC = () => {
    const [amount, setAmount] = useState("");

    const amounts = ["100", "200", "500", "1000"];

    const handleButtonClick = (value: string) => {
        setAmount(value);
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                Amount
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
                {amounts.map((value) => (
                    <button
                        key={value}
                        type="button"
                        onClick={() => handleButtonClick(value)}
                        className="p-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-1 focus:ring-mpesa focus:border-mpesa hover:border-mpesa text-xs sm:text-sm"
                    >
                        {value} MT
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Amount;
