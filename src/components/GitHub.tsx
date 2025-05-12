"use client";

import { sendGAEvent } from "@next/third-parties/google";

export default function GitHub({ children }: { children: React.ReactNode }) {
    return (
        <a
            href="https://github.com/mrdiamonddog/balatrools"
            target="_blank"
            onClick={() => sendGAEvent({ event: "linkClick", value: "GitHub" })}
        >{children}</a>
    );
}
