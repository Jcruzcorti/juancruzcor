import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { DarkLight } from "@/components/ui/DarkLight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Cruz Cortinas",
  description: "Portfolio of Juan Cruz Cortinas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
              <DarkLight/>
              {children}
              
          </ThemeProvider>
      </body>
    </html>
  );
}
