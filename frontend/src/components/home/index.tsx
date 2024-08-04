"use client";
import Balance from "./balance";
import QuickActions from "./quickActions";
import Services from "./services";
const Home: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 lg:px-36 py-10">
            <div className="space-y-4">
                {/*Balance*/}
                <Balance />
                {/*Quick actions*/}
                <QuickActions />
            </div>
            {/*Services*/}
            <Services />
        </div>
    );
};
export default Home;
