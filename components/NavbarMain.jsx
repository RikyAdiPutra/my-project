import React from "react"
import { CiSearch } from "react-icons/ci";
import Cart from "./Cart";


export default function NavbarMain() {
    return (
        <div className="flex justify-between items-center bg-black-c ">
            <CiSearch className="text-white text-[25px]" />
            <h3 className="font-bold text-[32px] text-white">Menuku.id</h3>
            <Cart />
        </div>
    )
}