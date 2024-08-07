import React from "react";
import Link from "next/link";

interface MoveMoney {
    name: string;
    icon: React.ReactNode;
    url: string;
}

interface MoveMoneyListProps {
    title: string;
    moves: MoveMoney[];
}

const MoveMoneySection: React.FC<MoveMoneyListProps> = ({ title, moves }) => {
    return (
        <section>
            <h1 className="font-bold text-lg" style={{ color: "#0c0c0d" }}>
                {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
                {moves.map((move, index) => (
                    <Link
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                        href={move.url}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200 text-mpesa">
                            {move.icon}
                        </div>
                        <span className="text-sm">{move.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default MoveMoneySection;
