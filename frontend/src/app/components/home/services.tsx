import Image from "next/image";
import Link from "next/link";
import {servicesList} from "./servicesList";
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
                {servicesList.map((service, index) => (
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
