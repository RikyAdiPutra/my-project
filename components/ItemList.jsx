import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function ItemList(props) {
    return (
        <Link href="/menubook">
            <div className="bg-black-c-two hover:bg-orange-c hover:border-transparent border-white border-2 w-[135px] h-[131px] rounded-3xl flex justify-center items-center">
                <Image src={`${props.image ? props.image : "/images/image-not-found.jpg"}`} width={props.width} height={props.height} alt="" />
            </div>
            <p className="font-medium text-[16px] text-center mt-4 text-white">{props.title ? props.title : "Title Not Found"}</p>
        </Link>
    )
}