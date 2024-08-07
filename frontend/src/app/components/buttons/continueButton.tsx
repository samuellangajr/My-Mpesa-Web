const ContinueButton: React.FC = () => {
    return (
        <div>
            <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-mpesa focus:outline-none transition-transform duration-300 hover:scale-95"
            >
                Continue
            </button>
        </div>
    );
};

export default ContinueButton;
