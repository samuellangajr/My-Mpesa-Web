import Link from "next/link";
import { BsShop } from "react-icons/bs";
import { MdOutlinePointOfSale } from "react-icons/md";
import { PiBuildings } from "react-icons/pi";

const makePayment = [
    {
        name: "Paga facíl",
        icon: <BsShop size={27} />,
        url:"/",
    },
    {
        name: "Pay POS",
        icon: <MdOutlinePointOfSale size={27} />,
        url:"/",
    },
    {
        name: "Pay business",
        icon: <PiBuildings size={27} />,
        url:"/",
    }
];
const MakePayment: React.FC = () => {
    return (
        <div>
            <h1
                className="font-bold text-lg"
                style={{ color: "#0c0c0d" }}
            >
                Make payment
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
                {makePayment.map((makePayment, index) => (
                    <Link
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                        href={makePayment.url}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200 text-mpesa">
                            {makePayment.icon}
                        </div>
                        <span className="text-sm">{makePayment.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default MakePayment;
