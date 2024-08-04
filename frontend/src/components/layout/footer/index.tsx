import Link from "next/link";
import Image from "next/image";
import logo from "@images/logo2.png";
const Footer: React.FC = () => {
    return (
        <footer>
            <div
                className="flex flex-col md:flex-row items-center p-8 md:px-20 py-8 md:py-10 space-y-6 md:space-y-0 md:space-x-8 font-medium mb-1 bg-white drop-shadow-sm"
                style={{ color: "#0c0c0d" }}
            >
                <Link href={"/"}>
                    <Image src={logo} alt="Mpesa Logo" width={90} height={90} />
                </Link>
                <Link href={"/"} className="hover:underline">
                    Help
                </Link>
                <Link href={"/"} className="hover:underline">
                    Contact us
                </Link>
                <Link href={"/"} className="hover:underline">
                    Security
                </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center px-8 md:px-20 py-8 md:py-10 space-y-4 md:space-y-0 md:space-x-8 text-sm bg-white drop-shadow-sm">
                <p className=" text-gray-500">
                    &copy; 2013-2024, M-pesa. All rights Reserved.
                </p>
                <Link href={"/"} className="hover:underline" style={{ color: "#0c0c0d" }}>
                    Privacy
                </Link>
                <Link href={"/"} className="hover:underline" style={{ color: "#0c0c0d" }}>
                    Cookies
                </Link>
                <Link href={"/"} className="hover:underline" style={{ color: "#0c0c0d" }}>
                    Legal
                </Link>
            </div>
        </footer>
    );
};
export default Footer;
