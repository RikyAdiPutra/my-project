import React from "react"
import Image from "next/image"
import CartDec from "./CartDec"

export default function CartFood(props) {
    return (
        <div className="border-2 border-white bg-gradient-to-bl from-[#24292D] to-gray-600 px-4 py-4 rounded-3xl w-[297px] h-[495px] relative my-8">
            <div><Image src={`${props.src ? props.src : "/images/image-not-found.jpg"}`} width={props.width ? props.width : 173} height={props.height ? props.height : 180} alt="Item One" /></div>
            <div className=" mt-3 pl-2">
                <h4 className="font-medium text-[16px] text-white">{props.title}</h4>
                <h2 className="font-bold text-[20px] text-white">{props.price}</h2>
                <p className="font-medium text-[16px] text-white">Potongan daging ayam kemudian ditusuk dan dibakar dengan bumbu kecap</p>
            </div>
            <div className="absolute -bottom-6 left-[125px]">
                <CartDec />
            </div>
        </div>
    )
}