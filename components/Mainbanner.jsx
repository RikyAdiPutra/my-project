import React from "react"
import Image from "next/image"
import ItemList from "./ItemList"
import { IoFastFoodOutline } from "react-icons/io5";
import CartFood from "./Cartfood";
import Footer from "./Footer";
import NavbarMain from "./NavbarMain";


export default function Mainbanner() {
    return (
        <div className="w-full">
            <div className="w-[958px] bg-black-c-two border-box px-6 py-6">
                <NavbarMain />
                <div className="my-6">
                    <h2 className="font-semibold text-[40px] text-white">Selamat Datang di <span className="font-extrabold text-[40px]">Cafe Ambyar</span></h2>
                </div>
                <div>
                    <Image src="/images/item-theree.png" width={958} height={199} alt="" />
                </div>
                <div className="flex justify-between my-6">
                    <ItemList image="/images/list-one.png" title="Menu Book" width={70} height={70} />
                    <ItemList image="/images/list-two.png" title="Main Course" width={70} height={70} />
                    <ItemList image="/images/list-three.png" title="Beverage" width={34} height={58} />
                    <ItemList image="/images/list-four.png" title="Dessert" width={70} height={70} />
                    <ItemList image="/images/list-five.png" title="Appetizer" width={70} height={70} />
                    <ItemList image="/images/list-six.png" title="Kids Menu" width={70} height={70} />
                </div>
                <div className="flex items-center justify-between text-white">
                    <div className="flex gap-3 items-center">
                        <h3 className="font-semibold text-[25px]">Hot Menu</h3>
                        <IoFastFoodOutline />
                    </div>
                    <p className="font-medium text-[14px]">See Details</p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <CartFood />
                    <CartFood />
                    <CartFood />
                    <CartFood />
                    <CartFood />
                    <CartFood />
                </div>
                <Footer />
            </div>
        </div>
    )
}