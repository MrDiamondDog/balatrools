"use client";

import { analytics } from "@/lib/analytics";

export default function GitHub({ children }: { children: React.ReactNode }) {
    return (
        <a
            href="https://github.com/mrdiamonddog/balatrools"
            target="_blank"
            onClick={() => analytics("linkClick", "GitHub")}
        >{children}</a>
    );
}
