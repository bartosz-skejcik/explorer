"use client";

import { useEffect, useState } from "react";

type Props = {};

export default function GreetingBlock({}: Props) {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString("pl-PL", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                })
            );

            setDate(
                new Date().toLocaleDateString("pl-PL", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                })
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border-[1.5px] bg-gradient-to-r from-[#141414] to-black/80 border-solid rounded-xl border-[#14141480] flex items-center justify-between px-5 py-2 w-full">
            <h2 className="text-2xl font-semibold">👋 Hej, Bartek P.</h2>
            <h4 className="space-x-3 text-xl font-semibold capitalize">
                <span className="font-bold text-pink-500">{time}</span>
                <span>{date}</span>
            </h4>
        </div>
    );
}
