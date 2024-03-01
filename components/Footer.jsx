import React from "react"
import Cart from "./Cart"

export default function Footer() {
    return (
        <div className="container wrapper flex items-center justify-around py-4 bg-black-c">
            <div>
                <Cart />
            </div>
            <div>
                <button className="font-bold text-[24px] bg-orange-c px-72 py-2 rounded-2xl">Checkout Orders</button>
            </div>
        </div>
    )
}