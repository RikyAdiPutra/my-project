import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function CartDec() {
    return (
        <div>
            <Link href="/catalog" className="bg-orange-c w-[50px] h-[50px] flex justify-center items-center rounded-3xl"><Image src="/images/item-two.png" width={26} height={26} /></Link>
        </div>
    )
}