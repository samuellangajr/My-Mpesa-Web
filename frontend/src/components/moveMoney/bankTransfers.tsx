import { CiBank } from "react-icons/ci";

const bankTransfers = [
    {
        name: "Send money to bank",
        icon: <CiBank  size={27} />,
    },
];
const BankTransfers: React.FC = () => {
    return (
        <div>
            <h1
                className="hover:underline font-bold text-lg cursor-pointer"
                style={{ color: "#0c0c0d" }}
            >
                Bank transfers
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
                {bankTransfers.map((bankTransfers, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200 text-mpesa">
                            {bankTransfers.icon}
                        </div>
                        <span className="text-sm">{bankTransfers.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default BankTransfers;
