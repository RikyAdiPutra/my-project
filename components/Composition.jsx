import React from "react"

export default function Composition() {
    return (
        <div className="py-8">
            <ul className="flex justify-between">
                <li className="border-r-4 pl-6 pr-8">
                    <div className="text-center">
                        <h4 className="text-[36px] text-orange-c">8,9</h4>
                        <p className="text-[15px]">Rasa</p>
                    </div>
                </li>
                <li className="border-r-4 pr-8">
                    <div className="text-center">
                        <h4 className="text-[36px] text-orange-c">50%</h4>
                        <p className="text-[15px]">Manis</p>
                    </div>
                </li>
                <li className="border-r-4 pr-8">
                    <div className="text-center">
                        <h4 className="text-[36px] text-orange-c">0%</h4>
                        <p className="text-[15px]">Pedas</p>
                    </div>
                </li>
                <li className="border-r-4 pr-8">
                    <div className="text-center">
                        <h4 className="text-[36px] text-orange-c">50%</h4>
                        <p className="text-[15px]">Gurih</p>
                    </div>
                </li>
                <li className="pr-8">
                    <div className="text-center">
                        <h4 className="text-[36px] text-orange-c">421</h4>
                        <p className="text-[15px]">Kkal</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}