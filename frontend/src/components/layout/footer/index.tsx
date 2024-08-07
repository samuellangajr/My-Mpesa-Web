import Link from "next/link";
import Image from "next/image";
import logo from "@images/logo2.png";
import { FaGithub } from "react-icons/fa";

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
                <div className="flex space-x-2">
                    <FaGithub size={20} />
                    <Link
                        href={"https://github.com/samuellangajr/My-Mpesa-Web"}
                        className="hover:underline"
                        style={{ color: "#0c0c0d" }}
                    >
                        GitHub repository
                    </Link>
                </div>
                
                <div className="flex space-x-2 text-gray-500">
                    <span>Created by</span>
                    <Link
                        href={"https://www.linkedin.com/in/samuel-langa-92ab99287/"}
                        className="hover:underline "
                        style={{ color: "#0c0c0d" }}
                    >
                        Samuel Langa
                    </Link>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
