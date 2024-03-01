import Image from "next/image";
import Navbar from "@/components/Navbar";
import CartFood from "@/components/Cartfood";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Mainbanner from "@/components/Mainbanner";

export default function Home() {
    return (
        <main className="container wrapper bg-black-c-two flex justify-center">
            <Mainbanner />
        </main>
    );
}
