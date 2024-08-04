import { CiReceipt } from "react-icons/ci";
const transactions = [
    {
        name: "Transaction receipt",
        icon: <CiReceipt  size={27} />,
    },
];
const Transactions: React.FC = () => {
    return (
        <div>
            <h1
                className="hover:underline font-bold text-lg cursor-pointer"
                style={{ color: "#0c0c0d" }}
            >
               Transactions
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
                {transactions .map((transactions, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200 text-mpesa">
                            {transactions.icon}
                        </div>
                        <span className="text-sm">{transactions .name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Transactions;