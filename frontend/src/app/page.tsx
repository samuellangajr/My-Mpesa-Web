"use client";
import Balance from "@components/home/balance";
import QuickActions from "@components/home/quickActions";
export default function Home() {
    return (
        <main className="grid grid-rows-12 grid-flow-col px-28 py-10 gap-4">
            {/*Balance*/}
            <Balance />
            {/*Quick actions*/}
            <QuickActions/>
            <div className="row-span-12 bg-white p-6 rounded-xl border">
                
            </div>
        </main>
    );
}
