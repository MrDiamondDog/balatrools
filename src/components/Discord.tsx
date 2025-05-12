"use client";

import { analytics } from "@/lib/analytics";

export default function Discord({ children }: { children: React.ReactNode }) {
    return (
        <a
            href="https://discord.gg/cAbXMwQ4sz"
            target="_blank"
            onClick={() => analytics("linkClick", "Discord")}
        >{children}</a>
    );
}
