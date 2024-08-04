import { AiOutlineMoneyCollect } from "react-icons/ai";
import { CiReceipt } from "react-icons/ci";

const requestMoney = [
    {
        name: "New request",
        icon: <AiOutlineMoneyCollect  size={27} />,
    },
    {
        name: "M-pesa requests",
        icon: <CiReceipt  size={27} />,
    },

];
const RequestMoney : React.FC = () => {
    return (
        <div>
            <h1
                className="hover:underline font-bold text-lg cursor-pointer"
                style={{ color: "#0c0c0d" }}
            >
                Request Money
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
                {requestMoney .map((requestMoney , index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200 text-mpesa">
                            {requestMoney .icon}
                        </div>
                        <span className="text-sm">{requestMoney .name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default RequestMoney ;
