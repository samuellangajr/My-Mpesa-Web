import SendMoney from "@components/moveMoney/sendMoney";
import MakePayment from "@/components/moveMoney/makePayment";
import WithdrawCash from "@/components/moveMoney/withdrawCash";
import BankTransfers from "@/components/moveMoney/bankTransfers";
import Transactions from "@/components/moveMoney/transactions";
import RequestMoney from "@/components/moveMoney/requestMoney";

export default function MoveMoney() {
    return (
        <main className="py-10">
            <div className="bg-white p-6 shadow-sm px-10 lg:px-20 space-y-6">
                {/*Send Money*/}
                <SendMoney />
                {/*Make Payement*/}
                <MakePayment />
                {/*Withdraw Cash*/}
                <WithdrawCash />
                {/*Bank transfers*/}
                <BankTransfers />
                {/*Transactions*/}
                <Transactions />
                 {/*Request Money*/}
                 <RequestMoney />
            </div>
        </main>
    );
}
