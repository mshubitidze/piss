import Link from "next/link";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "piss",
  description: "piss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`min-h-screen flex flex-col ${jetbrains.className}`}>
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <footer className="flex items-center justify-center py-4">
            <Link
              className="hover:bg-slate-800 px-2.5 py-1.5 rounded-md"
              href="https://github.com/mshubitidze"
            >
              @mshubitidze
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
