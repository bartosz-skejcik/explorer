import React from "react";
import { UserInfo } from ".";

type Props = {};

export default function Navigation({}: Props) {
    return (
        <nav className="flex flex-col col-span-1 items-center justify-start w-full h-full bg-primary/90 p-5 border-[#212121] border-[2px] rounded-xl">
            <UserInfo />
        </nav>
    );
}
