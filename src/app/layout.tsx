import "~/styles/globals.css";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { Toaster } from "~/ui/toaster";
import { Providers } from "~/components/Providers";
import { cn } from "~/lib/utils";

import type { Metadata } from "next";
import { Recursive } from "next/font/google";

const font = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "grainy-light")}>
        <Navbar />
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
