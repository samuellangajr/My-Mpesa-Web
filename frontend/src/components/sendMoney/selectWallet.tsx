const options = [
    {
        name: "M-Pesa",
        value: "mpesa",
    },
    {
        name: "Emola",
        value: "emola",
    },
    {
        name: "M-Kesh",
        value: "mkesh",
    },
];
const SelectWallet: React.FC = () => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                Choose wallet
            </label>
            <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm  focus:outline-none sm:text-sm">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectWallet;
