"use client";
import Balance from "@components/home/balance";
import QuickActions from "@components/home/quickActions";
import Services from "@components/home/services";
export default function Home() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 lg:px-36 py-10">
            <div className="space-y-4">
                {/*Balance*/}
                <Balance />
                {/*Quick actions*/}
                <QuickActions />
            </div>
            {/*Services*/}
            <Services />
        </main>
    );
}
