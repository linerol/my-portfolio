import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProfileSidebar from "../components/ProfileSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linerol - Portfolio Développeur Logiciel DevOps & IoT",
  description: "Portfolio de Linerol, développeur Logiciel orienté DevOps & IoT. Spécialisé en NestJS, Flutter, BLE, Docker et Azure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light text-dark min-h-screen`}
      >
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
          {/* Colonne gauche sticky */}
          <aside className="w-full max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-xs bg-gradient-to-br from-primary/80 via-surface/70 to-primary/95 backdrop-blur-xl border-r border-surface/60 sticky top-0 h-screen flex flex-col items-center p-6 z-20 shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.015] hover:shadow-3xl">
            <ProfileSidebar />
          </aside>
          {/* Colonne droite : Bento grid ou page de détails */}
          <main className="flex-1 bg-gradient-to-br from-primary via-surface/80 to-primary p-4 md:p-8 transition-all duration-500">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
