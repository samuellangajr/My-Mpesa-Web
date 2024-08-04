import Link from "next/link";
import { MdOutlinePointOfSale } from "react-icons/md";
import { GrAtm } from "react-icons/gr";

const withdrawCash = [
    {
        name: "Agent",
        icon: <MdOutlinePointOfSale size={27} />,
        url: "/cash-out",
    },
    {
        name: "ATM",
        icon: <GrAtm size={27} />,
        url: "/",
    }
];
const WithdrawCash: React.FC = () => {
    return (
        <div>
            <h1
                className="font-bold text-lg"
                style={{ color: "#0c0c0d" }}
            >
                Withdraw cash
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
                {withdrawCash.map((withdrawCash, index) => (
                    <Link
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                        href={withdrawCash.url}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200 text-mpesa">
                            {withdrawCash.icon}
                        </div>
                        <span className="text-sm">{withdrawCash.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default WithdrawCash;
