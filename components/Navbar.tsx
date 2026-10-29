'use client'; // 寫在 Navbar 檔案的最頂端

import Link from 'next/link';
import ThemeToggle from "@/components/ThemeToggle"; // 匯入切換按鈕

export default function Navbar() {
  return (
    <nav className="bg-[#FCFBF9]/90 dark:bg-[#171816]/90 backdrop-blur-md border-b border-[#EAE5D9] dark:border-[#333333] sticky top-0 z-50 transition-colors duration-500">
     <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-between h-16 items-center">
         
         <div className="flex-shrink-0">
           <Link href="/" onClick={(e) => {
            if (typeof window !== 'undefined' && window.location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }}
           className="text-xl font-extrabold tracking-widest text-black dark:text-white hover:text-[#A33D32] dark:hover:text-[#A33D32] transition-colors duration-300">
             雀翎藍
           </Link>
         </div>
         
         <div className="hidden md:flex items-center space-x-10">
           <Link href="/" className="text-sm font-medium tracking-widest text-[#595959] dark:text-[#A0A0A0] hover:text-[#A33D32] dark:hover:text-[#A33D32] transition-colors duration-300">
             卷首
           </Link>
           <Link href="/about" className="text-sm font-medium tracking-widest text-[#595959] dark:text-[#A0A0A0] hover:text-[#A33D32] dark:hover:text-[#A33D32] transition-colors duration-300">
             自傳
           </Link>
           <a href="/experience" rel="noopener noreferrer" className="text-sm font-medium tracking-widest text-[#595959] dark:text-[#A0A0A0] hover:text-[#A33D32] dark:hover:text-[#A33D32] transition-colors duration-300">
             經歷
           </a>
           <a href="https://github.com/Alan-Allen" target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-widest text-[#595959] dark:text-[#A0A0A0] hover:text-[#A33D32] dark:hover:text-[#A33D32] transition-colors duration-300">
             札記
           </a>
           <a href="https://github.com/Alan-Allen" target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-widest text-[#595959] dark:text-[#A0A0A0] hover:text-[#A33D32] dark:hover:text-[#A33D32] transition-colors duration-300">
             藏經閣
           </a>
           {/* 放入深色模式切換鈕 */}
           <ThemeToggle />
         </div>
       </div>
     </div>
   </nav>
  );
}