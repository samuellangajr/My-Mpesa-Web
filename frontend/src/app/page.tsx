"use client";
import Balance from "@components/home/balance";
export default function Home() {
    return (
        <main className="grid grid-rows-12 grid-flow-col px-28 py-10 gap-4">
            {/*Balance*/}
            <Balance />
            <div className="row-span-4 bg-white p-6 rounded-xl border">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla odit, eum necessitatibus, dolore id nobis inventore
                    beatae, cum debitis reiciendis ipsam sunt. Modi aspernatur
                    enim, eaque exercitationem expedita delectus debitis?
                </p>
            </div>
            <div className="row-span-12 bg-white p-6 rounded-xl border">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla odit, eum necessitatibus, dolore id nobis inventore
                    beatae, cum debitis reiciendis ipsam sunt. Modi aspernatur
                    enim, eaque exercitationem expedita delectus debitis?
                </p>
            </div>
        </main>
    );
}
