import React from "react"
import CartFood from "@/components/Cartfood"

export default function MenuBook() {
    return (
        <>
            <div className="container wrapper bg-black-c">
                <div className="flex flex-wrap justify-around">
                    <CartFood />
                    <CartFood />
                    <CartFood />
                    <CartFood />
                    <CartFood />
                    <CartFood />
                </div>
            </div>
        </>
    )
}