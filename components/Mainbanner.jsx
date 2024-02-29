import React from "react"
import Image from "next/image"
import ItemList from "./ItemList"

export default function Mainbanner() {
    return (
        <div>
            <h2>Selamat Datang di <span>Cafe Ambyar</span></h2>
            <div>
                <Image src="/images/item-theree.png" width={958} height={199} alt="" />
            </div>
            <div className="flex justify-between w-[958px]">
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
            </div>
        </div>
    )
}