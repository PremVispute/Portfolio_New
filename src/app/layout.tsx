import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/utils/helpers/ThemeProvider";

export const metadata: Metadata = {
  title: "Prem Vispute — Portfolio",
  description:
    "Front-end · Full-stack · AI / ML — Personal portfolio of Prem Vispute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="text-slate-900 dark:text-slate-100 antialiased font-din">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="site-bg" aria-hidden="true" />
          <main className="relative">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
