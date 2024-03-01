import React from "react"
import Cart from "./Cart";
import { FaArrowLeft } from "react-icons/fa";



export default function NavbarMain(props) {
    return (
        <div className="flex justify-between items-center bg-gradient-custom py-5">
            <div>{props.icon ? props.icon : null}</div>
            <h3 className="font-bold text-[32px] text-white">{props.title ? props.title : null}</h3>
            <Cart className="text-[36px]" />
        </div>
    )
}