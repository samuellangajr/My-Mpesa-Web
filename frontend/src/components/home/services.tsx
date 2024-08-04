import Image from "next/image";
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
    },
    {
        name: "GOTV",
        image: gotv,
    },
    {
        name: "TVCabo",
        image: tvcabo,
    },
    {
        name: "Startimes",
        image: startimes,
    },
    {
        name: "ZAP",
        image: zap,
    },
    {
        name: "Txuna",
        image: txuna,
    },
    {
        name: "Xitique",
        image: xitique,
    },
    {
        name: "TMT",
        image: tmt,
    },
    {
        name: "ISPG",
        image: ispg,
    },
    {
        name: "EDM",
        image: edm,
    },

];

const Services: React.FC = () => {
    return (
        <div className="row-span-12 bg-white p-6 rounded-xl border">
            <h1
                className="hover:underline font-bold text-lg cursor-pointer"
                style={{ color: "#0c0c0d" }}
            >
                Services
            </h1>
            <div className="grid grid-cols-4 gap-5 mt-6 ">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full text-white border ">
                            <Image
                                src={service.image}
                                alt={service.name}
                            
                                className="rounded-full"
                            />
                        </div>
                        <span className="text-xs">{service.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Services;
