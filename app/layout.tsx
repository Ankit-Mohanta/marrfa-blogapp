import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/wrappers/ThemeProvider";

export const metadata: Metadata = {
  title: "Bloging app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="px-[5%] lg:px-[10%]">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
