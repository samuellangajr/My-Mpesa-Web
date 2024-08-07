"use client";
import React from "react";
import PhoneNumber from "./agentID";
import Amount from "@components/sendMoney/amount";
import AgentID from "./agentID";

const CashOut: React.FC = () => {
    return (
        <div className=" flex justify-center pt-32 pb-10 px-4 md:px-10 lg:px-36">
            <div className="max-w-xl bg-white p-6 shadow-sm space-y-6 rounded-xl border">
                <h1 className="font-bold text-lg" style={{ color: "#0c0c0d" }}>
                    Cash out: Agent
                </h1>

                <form className="space-y-6">
                    {/*aAgent ID */}
                    <AgentID />
                    {/* Amount */}
                    <Amount />
                    {/* Continue Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-mpesa focus:outline-none transition-transform duration-300 hover:scale-95"
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CashOut;
