import { RxPerson } from "react-icons/rx";
const PhoneNumber: React.FC = () => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                Phone number
            </label>
            <div className="mt-1 flex items-center space-x-2 relative rounded-md ">
                <input
                    type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
                <div className="flex items-center justify-center w-12 h-10 bg-gray-600 text-white rounded-md cursor-pointer">
                     <RxPerson size={27} />
                </div>
               
            </div>
        </div>
    );
};

export default PhoneNumber;