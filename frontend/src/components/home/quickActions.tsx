import { FaRegLightbulb } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
import { BsShop } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const QuickActions: React.FC = () => {
    return (
        <div className="row-span-4 bg-white p-6 rounded-xl border">
            {/*Send money, Credelec and Cashout*/}
            <div className="flex items-center justify-center space-x-6 ">
                <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mpesa text-white ">
                        <RxPerson size={27} />
                    </div>
                    <span className="text-sm">Send money</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mpesa text-white">
                        <FaRegLightbulb size={27} />
                    </div>
                    <span className="text-sm">Credelec</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mpesa text-white">
                        <BsShop size={27} />
                    </div>
                    <span className="text-sm">Cash out: Agent</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 text-white">
                        <FaPlus size={20} />
                    </div>
                    <span className="text-sm">Add</span>
                </div>
            </div>
            {/*Statement*/}
            <div className="flex items-center justify-between space-x-4 border shadow-md rounded-lg p-4 mt-6 cursor-pointer transition-transform duration-300 hover:scale-90">
                <div className="flex space-x-3 items-center">
                    <LuFileSpreadsheet size={27} />
                    <span>Mini statement</span>
                </div>
                <IoIosArrowForward size={27} />
            </div>
        </div>
    );
};
export default QuickActions;
