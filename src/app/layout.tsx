import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/utils/helpers/ThemeProvider";

export const metadata: Metadata = {
  title: "Prem Vispute",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
