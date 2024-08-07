import React from "react";
import MoveMoneySection from "./moveMoneySection";
import { moveMoneyList } from "./moveMoneyList";

const MoveMoney: React.FC = () => {
    return (
        <div className="pb-10 pt-32">
            <div className="bg-white p-6 shadow-sm px-6 lg:px-20 space-y-6">
                {moveMoneyList.map((move, index) => (
                    <MoveMoneySection key={index} title={move.title} moves={move.moves} />
                ))}
            </div>
        </div>
    );
};

export default MoveMoney;
