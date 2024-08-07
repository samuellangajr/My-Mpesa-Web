import Image from "next/image";
import Link from "next/link";
import dstv from "@images/services/dstv.png";
import gotv from "@images/services/gotv.png";
import tvcabo from "@images/services/tvcabo.png";
import startimes from "@images/services/startimes.png";
import zap from "@images/services/zap.png";
import txuna from "@images/services/txuna.png";
import xitique from "@images/services/xitique.png";
import tmt from "@images/services/tmt.png";
import ispg from "@images/services/ispg.png";
import edm from "@images/services/edm.png";

const services = [
    {
        name: "DSTV",
        image: dstv,
        url: "/",
    },
    {
        name: "GOTV",
        image: gotv,
        url: "/",
    },
    {
        name: "TVCabo",
        image: tvcabo,
        url: "/",
    },
    {
        name: "Startimes",
        image: startimes,
        url: "/",
    },
    {
        name: "ZAP",
        image: zap,
        url: "/",
    },
    {
        name: "Txuna",
        image: txuna,
        url: "/",
    },
    {
        name: "Xitique",
        image: xitique,
        url: "/",
    },
    {
        name: "TMT",
        image: tmt,
        url: "/",
    },
    {
        name: "ISPG",
        image: ispg,
        url: "/",
    },
    {
        name: "EDM",
        image: edm,
        url: "/",
    },

];

const Services: React.FC = () => {
    return (
        <section className="row-span-12 bg-white p-6 rounded-xl border">
            <h1
                className="hover:underline font-bold text-lg cursor-pointer"
                style={{ color: "#0c0c0d" }}
            >
                Services
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-6 ">
                {services.map((service, index) => (
                    <Link
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                        href={service.url}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full text-white border ">
                            <Image
                                src={service.image}
                                alt={service.name}
                            
                                className="rounded-full"
                            />
                        </div>
                        <span className="text-xs">{service.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
};
export default Services;
