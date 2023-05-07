import Image from "next/image";
import React from "react";

type Props = {};

export default function UserInfo({}: Props) {
    return (
        <div className="flex items-center justify-start w-full gap-3">
            <Image
                src="/images/avatar.png"
                alt="User Name"
                width={50}
                height={50}
                className="rounded-xl"
            />
            <div className="flex flex-col items-start justify-center font-medium">
                <h5 className="text-lg text-primary-light">Bartek Paczesny</h5>
                <p className="text-[#6e6e6e] text-xs -mt-1">developer</p>
            </div>
        </div>
    );
}
