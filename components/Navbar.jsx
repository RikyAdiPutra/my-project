import React from "react"
import Cart from "./Cart";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link"


export default function Navbar() {
    return (
        <div className="container wrapper bg-black-c">
            <div className="my-5 text-white">
                <div className="top  flex justify-between items-center">
                    <Link href="#"><FaArrowLeft className="text-white" /></Link>
                    <h1 className="text-white font-montserrat font-extrabold text-[32px]">Menu Book</h1>
                    <div className="pr-2">
                        <Cart />
                    </div>
                </div>
                <div className="bottom mt-4">
                    <ul className="flex justify-between px-2 py-2">
                        <li><Link href="#" className="text-[16px]">Main course</Link></li>
                        <li><Link href="#" className="text-[16px]">Beverage</Link></li>
                        <li><Link href="#" className="text-[16px]">Dessert</Link></li>
                        <li><Link href="#" className="text-[16px]">Appetizer</Link></li>
                        <li><Link href="#" className="text-[16px]">Kids Menu</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}