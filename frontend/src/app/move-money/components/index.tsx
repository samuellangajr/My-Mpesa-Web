import React from "react";
import MoveList from "./moveList";
import { moveData } from "./moveData";

const MoveMoney: React.FC = () => {
    return (
        <div className="pb-10 pt-32">
            <div className="bg-white p-6 shadow-sm px-6 lg:px-20 space-y-6">
                {moveData.map((move, index) => (
                    <MoveList key={index} title={move.title} moves={move.moves} />
                ))}
            </div>
        </div>
    );
};

export default MoveMoney;
