"use client";

import { analytics } from "@/lib/analytics";

export default function Discord({ children }: { children: React.ReactNode }) {
    return (
        <a
            href="https://discord.gg/rVp5BR8K96"
            target="_blank"
            onClick={() => analytics("linkClick", "Discord")}
        >{children}</a>
    );
}
