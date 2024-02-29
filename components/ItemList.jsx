import React from "react"
import Image from "next/image"

export default function ItemList() {
    return (
        <div className="w-[135px] h-[131px]">
            <div className="bg-orange-500 w-[135px] h-[131px] rounded-3xl flex justify-center items-center mb-4">
                <Image src="/images/list-one.png" width={75} height={75} alt="" />
            </div>
            <p className="font-medium text-[16px] text-center">Menu Book</p>
        </div>
    )
}