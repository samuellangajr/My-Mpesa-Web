"use client";
import Balance from "@components/home/balance";
import QuickActions from "@components/home/quickActions";
import Services from "@components/home/services";
export default function Home() {
    return (
        <main className="grid grid-rows-12 grid-flow-col px-28 py-10 gap-4">
            {/*Balance*/}
            <Balance />
            {/*Quick actions*/}
            <QuickActions />
            {/*Services*/}
            <Services />
        </main>
    );
}
