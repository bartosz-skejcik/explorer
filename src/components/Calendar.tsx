import React from "react";

type Props = {};

export default function Calendar({}: Props) {
    return (
        <aside className="flex flex-col items-center justify-center col-span-1 w-full px-4 py-3 h-fit border-[#212121] border-[2px] bg-black/70 rounded-xl">
            <h1 className="text-3xl font-bold">Kalendarz</h1>
        </aside>
    );
}
