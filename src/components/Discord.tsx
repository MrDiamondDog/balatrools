"use client";

import { sendGAEvent } from "@next/third-parties/google";

export default function Discord({ children }: { children: React.ReactNode }) {
    return (
        <a
            href="https://discord.gg/cAbXMwQ4sz"
            target="_blank"
            onClick={() => sendGAEvent({ event: "linkClick", value: "Discord" })}
        >{children}</a>
    );
}
