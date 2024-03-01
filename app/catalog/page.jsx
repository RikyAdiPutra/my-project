import React from "react"
import NavbarMain from "@/components/NavbarMain"
import Image from "next/image"
import Composition from "@/components/Composition"

export default function CatalogMenu() {
    return (
        <div className="container wrapper bg-gradient-to-r from-[#24292D] to-[#151A1E]">
            <Image src="/images/catalog-item.png" width={1024} height={686} alt="" />
            <div className="w-[887px] container text-white">
                <div>
                    <h1>Mi Ayam</h1>
                    <h2>Rp. 10.000</h2>
                    <p>Potongan daging ayam kemudian ditusuk dan dibakar dengan bumbu kecap</p>
                </div>
                <Composition />
            </div>
        </div>
    )
}