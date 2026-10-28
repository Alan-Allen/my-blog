import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";       // 匯入 Providers
import ThemeToggle from "@/components/ThemeToggle"; // 匯入切換按鈕
import SwordEntry from "@/components/SwordEntry"; // 引入劍光動畫元件

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
    <html lang="zh-TW" suppressHydrationWarning>
      {/* 加上 dark:bg-[#171816] (墨黑) 與 dark:text-[#F4F1E9] (宣紙白) */}
      <body className={`${serif.className} bg-[#FCFBF9] text-[#2C2C2C] dark:bg-[#171816] dark:text-[#F4F1E9] flex flex-col min-h-screen selection:bg-[#A33D32] selection:text-white transition-colors duration-500`}>
        
        <SwordEntry />

        <Providers>
          {/* 導覽列：加上深色模式的背景與邊框設定 */}
          <nav className="bg-[#FCFBF9]/90 dark:bg-[#171816]/90 backdrop-blur-md border-b border-[#EAE5D9] dark:border-[#333333] sticky top-0 z-50 transition-colors duration-500">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                
                <div className="flex-shrink-0">
                  <Link href="/" className="text-xl font-extrabold tracking-widest text-black dark:text-white hover:text-[#A33D32] dark:hover:text-[#A33D32] transition-colors duration-300">
                    雀翎藍
                  </Link>
                </div>
                
                <div className="hidden md:flex items-center space-x-10">
                  <Link href="/" className="text-sm font-medium tracking-widest text-[#595959] dark:text-[#A0A0A0] hover:text-[#A33D32] dark:hover:text-[#A33D32] transition-colors duration-300">
                    卷首
                  </Link>
                  <Link href="/about" className="text-sm font-medium tracking-widest text-[#595959] dark:text-[#A0A0A0] hover:text-[#A33D32] dark:hover:text-[#A33D32] transition-colors duration-300">
                    吾人
                  </Link>
                  <a href="https://github.com/Alan-Allen" target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-widest text-[#595959] dark:text-[#A0A0A0] hover:text-[#A33D32] dark:hover:text-[#A33D32] transition-colors duration-300">
                    藏經閣
                  </a>
                  {/* 放入深色模式切換鈕 */}
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            {children}
          </main>

          {/* 頁尾 */}
          <footer className="bg-[#FCFBF9] dark:bg-[#171816] border-t border-[#EAE5D9] dark:border-[#333333] mt-auto transition-colors duration-500">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#8C8C8C] dark:text-[#666666]">
              <div className="tracking-widest">
                &copy; {new Date().getFullYear()} 雀翎藍. 留步.
              </div>
              <div className="mt-4 md:mt-0 text-xs tracking-widest opacity-70">
                鑄造於 Next.js 爐心，以 Prisma 銘刻
              </div>
            </div>
          </footer>
        </Providers>

      </body>
    </html>
  );
}