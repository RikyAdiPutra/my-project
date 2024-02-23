import Image from "next/image";
import Navbar from "@/components/Navbar";
import CartFood from "@/components/Cartfood";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="container wrapper bg-gray-700">
            <Navbar />
            <div className="flex flex-wrap justify-around">
                <CartFood />
                <CartFood />
                <CartFood />
                <CartFood />
                <CartFood />
                <CartFood />
            </div>
            <Footer />
        </main>
    );
}
