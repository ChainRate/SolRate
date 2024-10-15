import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WalletProvider from "@/providers/wallet-provider";
import { Toaster } from "@/components/ui/toaster";
import { AutoConnectProvider } from "@/providers/auto-connect-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "ChainRate",
    description: "For Aptos Collision Hackathon",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <AutoConnectProvider>
                        <WalletProvider>
                            {children}
                            <Toaster />
                        </WalletProvider>
                    </AutoConnectProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
