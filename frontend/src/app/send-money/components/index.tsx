"use client";
import React from "react";
import SelectWallet from "./selectWallet";
import PhoneNumber from "./phoneNumber";
import Amount from "@components/fields/amount"
import ContinueButton from "@components/buttons/continueButton"

const SendMoney: React.FC = () => {
    return (
        <div className=" flex justify-center  pt-32 pb-10 px-4 md:px-10 lg:px-36">
            <div className="max-w-xl bg-white p-6 shadow-sm space-y-6 rounded-xl border">
                <h1 className="font-bold text-lg" style={{ color: "#0c0c0d" }}>
                    Send Money
                </h1>

                <form className="space-y-6">
                    {/* Select Wallet */}
                    <SelectWallet />
                    {/* Phone Number */}
                    <PhoneNumber />
                    {/* Amount */}
                    <Amount />
                    {/* Continue Button */}
                    <ContinueButton />
                </form>
            </div>
        </div>
    );
};

export default SendMoney;
