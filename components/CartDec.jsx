import React from "react"
import Image from "next/image"

export default function CartDec() {
    return (
        <div>
            <button className="bg-orange-c w-[50px] h-[50px] flex justify-center items-center rounded-3xl"><Image src="/images/item-two.png" width={26} height={26} /></button>
        </div>
    )
}