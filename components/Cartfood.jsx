import React from "react"
import Image from "next/image"
import CartDec from "./CartDec"

export default function CartFood() {
    return (
        <div className="bg-red-700 px-4 py-4 rounded-3xl w-[259px] h-[495px] relative my-8">
            <div><Image src="/images/item-one.png" width={259} height={277} alt="Item One" /></div>
            <div className=" mt-3 pl-2">
                <h4 className="font-medium text-[16px] text-white">Sate Ayam</h4>
                <h2 className="font-bold text-[20px] text-white">Rp. 10.000</h2>
                <p className="font-medium text-[16px] text-white">Potongan daging ayam kemudian ditusuk dan dibakar dengan bumbu kecap</p>
            </div>
            <div className="absolute -bottom-6 left-24">
                <CartDec />
            </div>
        </div>
    )
}