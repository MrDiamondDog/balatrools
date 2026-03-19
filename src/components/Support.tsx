"use client";

import { analytics } from "@/lib/analytics";

export default function Support({ children }: { children: React.ReactNode }) {
    return (
        <a
            href="https://buymeacoffee.com/zoy33nftqp"
            target="_blank"
            onClick={() => analytics("linkClick", "Support")}
        >{children}</a>
    );
}
