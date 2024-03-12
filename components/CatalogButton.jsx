import React from "react"

export default function Button() {
    return (
        <div className="flex gap-6 py-[20px]">
            <div className="flex items-center gap-5 border-2 rounded-lg">
                <div className="px-3 py-2 text-[20px] bg-black-c-two rounded-l-lg">-</div>
                <span className="text-[34px] font-medium">4</span>
                <div className="px-3 py-2 text-[20px] bg-black-c-two rounded-r-lg">+</div>
            </div>
            <div className="bg-gradient-orange rounded-lg">
                <button className="px-10 py-2 text-[24px] font-bold">+ Add to Cart</button>
            </div>
            <div className="bg-gradient-gray rounded-lg">
                <button className="py-2 px-4 text-[24px] font-bold text-black">Bungkus</button>
            </div>
        </div>
    )
}