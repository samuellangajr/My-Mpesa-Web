import SendMoney from "./sendMoney";
import MakePayment from "./makePayment";
import WithdrawCash from "./withdrawCash";
import BankTransfers from "./bankTransfers";
import Transactions from "./transactions";
import RequestMoney from "./requestMoney";
const MoveMoney: React.FC = () => {
    return (
        <div className="pt-6 pb-10">
            <div className="bg-white p-6 shadow-sm px-6 lg:px-20 space-y-6">
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
        </div>
    );
};
export default MoveMoney;
