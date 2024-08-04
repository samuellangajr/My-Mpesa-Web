import Link from "next/link";
import { CiReceipt } from "react-icons/ci";
const transactions = [
    {
        name: "Transaction receipt",
        icon: <CiReceipt  size={27} />,
        url: "/",
    },
];
const Transactions: React.FC = () => {
    return (
        <div>
            <h1
                className="font-bold text-lg"
                style={{ color: "#0c0c0d" }}
            >
               Transactions
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
                {transactions .map((transactions, index) => (
                    <Link
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                        href={transactions.url}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200 text-mpesa">
                            {transactions.icon}
                        </div>
                        <span className="text-sm">{transactions .name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Transactions;
