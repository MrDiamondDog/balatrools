import type { Metadata } from "next";
import "./globals.css";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
    title: "Balatrools | Balatro Save Editor & Resources",
    description: "Tools and resources for Balatro, including a save editor, calculator, and more.",
    keywords: ["balatro", "tools", "resources", "save editor", "calculator", "library", "jkr", "balatro save editor", "balatrools"],
    openGraph: {
        title: "Balatrools",
        description: "Tools and resources for Balatro, including a save editor, calculator, and more.",
        url: "https://balatrools.pages.dev/",
        siteName: "Balatrools",
        images: [
            {
                url: "https://balatrools.pages.dev/jimbo.jpg",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}

                <div
                    className="absolute top-2 right-2 flex flex-row-reverse gap-2"
                >
                    <a href="https://github.com/mrdiamonddog/balatrools"><FaGithub size={32} /></a>
                    <a href="https://discord.gg/cAbXMwQ4sz"><FaDiscord size={32} /></a>
                </div>
            </body>

            <GoogleAnalytics gaId="G-Q6P1J19EDF" />
        </html>
    );
}
