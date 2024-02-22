import React from "react"
import Link from "next/link"
import { BsCart3 } from "react-icons/bs";



export default function Cart() {
    return (
        <>
            <Link href="#" className="flex relative">
                <BsCart3 className="text-white" />
                <span className="absolute -top-3 left-2 bg-orange-c rounded-full w-[15px] h-[18px] text-[12px] flex justify-center">2</span>
            </Link>
        </>
    )
}