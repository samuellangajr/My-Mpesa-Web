import { Poppins, Lato } from "next/font/google";
import { Suspense } from "react";
const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["500", "600", "700"],
    variable: "--font-poppins",
});
const lato = Lato({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "400"],
    variable: "--font-lato",
});
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${lato.variable} ${poppins.variable} font-primary text-black`}
            >
                <Suspense>
                   
                </Suspense>
            </body>
        </html>
    );
}
