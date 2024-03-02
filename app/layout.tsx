import type { Metadata } from "next";
import { Montserrat,Lusitana  } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { DarkLight } from "@/components/ui/DarkLight";

const lusitana = Lusitana({ subsets: ["latin"],weight: '700' });
const montserrat = Montserrat({ subsets: ["latin"],weight: '700' });

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
      <body className={lusitana.className}>
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
