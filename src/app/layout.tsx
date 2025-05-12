import type { Metadata } from "next";
import "./globals.css";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import GitHub from "@/components/GitHub";
import Discord from "@/components/Discord";

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
            <head>
                {/* <!-- Google tag (gtag.js) --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q6P1J19EDF"></script>
                <script>
                    {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q6P1J19EDF', { cookie_flags: 'SameSite=None;Secure' });`}
                </script>
            </head>
            <body>
                {children}

                <div
                    className="absolute top-2 right-2 flex flex-row-reverse gap-2"
                >
                    <GitHub><FaGithub size={32} /></GitHub>
                    <Discord><FaDiscord size={32} /></Discord>
                </div>
            </body>
        </html>
    );
}
