import { RxPerson } from "react-icons/rx";
import { GoPeople } from "react-icons/go";
import { CiReceipt } from "react-icons/ci";
import { MdOutlinePointOfSale } from "react-icons/md";
import { GrAtm } from "react-icons/gr";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { PiBuildings } from "react-icons/pi";
import { CiBank } from "react-icons/ci";

export const moveData = [
    {
        title: "Send Money",
        moves: [
            { name: "Send money", icon: <RxPerson size={27} />, url: "/send-money" },
            { name: "Send money to many", icon: <GoPeople size={27} />, url: "/" },
        ],
    },
    {
        title: "Make Payment",
        moves: [
            { name: "Paga facíl", icon: <BsShop size={27} />, url: "/" },
            { name: "Pay POS", icon: <MdOutlinePointOfSale size={27} />, url: "/" },
            { name: "Pay business", icon: <PiBuildings size={27} />, url: "/" },
        ],
    },
    {
        title: "Withdraw Cash",
        moves: [
            { name: "Agent", icon: <BsShop size={27} />, url: "/cash-out" },
            { name: "ATM", icon: <GrAtm size={27} />, url: "/" },
        ],
    },
    {
        title: "Bank Transfers",
        moves: [
            { name: "Send money to bank", icon: <CiBank size={27} />, url: "/" },
        ],
    },
    {
        title: "Transactions",
        moves: [
            { name: "Transaction receipt", icon: <CiReceipt size={27} />, url: "/" },
        ],
    },
    {
        title: "Request Money",
        moves: [
            { name: "New request", icon: <AiOutlineMoneyCollect size={27} />, url: "/" },
            { name: "M-pesa requests", icon: <CiReceipt size={27} />, url: "/" },
        ],
    },
];
