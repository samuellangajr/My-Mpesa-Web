import Link from "next/link";
import { RxPerson } from "react-icons/rx";
import { GoPeople } from "react-icons/go";
import { url } from "inspector";
const sendMoney = [
    {
        name: "Send money",
        icon: <RxPerson size={27} />,
        url: "/send-money",
    },
    {
        name: "Send money to many",
        icon: <GoPeople size={27} />,
        url: "/",
    },
];
const SendMoney: React.FC = () => {
    return (
        <div>
            <h1
                className="font-bold text-lg"
                style={{ color: "#0c0c0d" }}
            >
                Send Money
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
                {sendMoney.map((sendMoney, index) => (
                    <Link
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                        href={sendMoney.url}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200 text-mpesa">
                            {sendMoney.icon}
                        </div>
                        <span className="text-sm">{sendMoney.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default SendMoney;
