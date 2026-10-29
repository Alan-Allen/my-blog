import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";       // 匯入 Providers
import SwordEntry from "@/components/SwordEntry"; // 引入劍光動畫元件
import Navbar from "@/components/Navbar";

const serif = Noto_Serif_TC({ 
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "雀翎藍",
  description: "智慧商務・研究探索・技術實作",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning 是 next-themes 官方要求加上的，防止第一秒閃爍
    <html lang="zh-TW" suppressHydrationWarning className="scroll-smooth scrollbar-hide">
      {/* 加上 dark:bg-[#171816] (墨黑) 與 dark:text-[#F4F1E9] (宣紙白) */}
      <body className={`${serif.className} bg-[#FCFBF9] text-[#2C2C2C] dark:bg-[#171816] dark:text-[#F4F1E9] flex flex-col min-h-screen selection:bg-[#A33D32] selection:text-white transition-colors duration-500`}>
        
        <SwordEntry />

        <Providers>
          <Navbar />

          <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            {children}
          </main>

          {/* 頁尾 */}
          <footer className="bg-[#FCFBF9] dark:bg-[#171816] border-t border-[#EAE5D9] dark:border-[#333333] mt-auto transition-colors duration-500">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#8C8C8C] dark:text-[#666666]">
              <div className="tracking-widest">
                &copy; 2026 雀翎藍. 留步.
              </div>
              <div className="mt-4 md:mt-0 text-xs tracking-widest opacity-70">
                不可防禦，無法迴避，直憾心靈。
              </div>
            </div>
          </footer>
        </Providers>

      </body>
    </html>
  );
}