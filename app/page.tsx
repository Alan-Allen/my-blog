import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import SideNav from '@/components/SideNav'; // /* 新增：引入導覽列 */
import { unstable_noStore as noStore } from 'next/cache';

export const dynamic = 'force-dynamic';

export default async function Home() {
  noStore();
  
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  });

  return (
    // 1. 拔除 snap-y 與 h-screen，解決雙重滾動條，回歸乾淨的排版
    <div className="space-y-24 pb-16 overflow-x-hidden scroll-smooth">
      <SideNav />
      
      {/* 01. Hero 首屏 */}
      <FadeIn delay={0}>
        {/* 2. 保留 min-h-[85vh] 與 justify-center，讓每個區塊自然佔滿整個畫面 */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-start scroll-mt-24 pt-16 pb-24 items-start w-full pb-20">
          <div className="text-xs font-mono text-[#B8A58A] tracking-[0.2em] mb-8 border border-[#B8A58A]/30 px-3 py-1 rounded-sm">
            PERSONAL ARCHIVE / 001
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] leading-snug mb-6 drop-shadow-sm transition-colors duration-500">
            縱使前路未明，也要走出自己的路。
          </h1>
          
          <p className="text-xl md:text-2xl text-[#A33D32] font-medium tracking-widest mb-8">
            以思考為刃，以實踐為證。
          </p>
          
          <div className="text-[#595959] dark:text-[#A0A0A0] text-base leading-loose tracking-wide max-w-2xl mb-12 transition-colors duration-500 space-y-4">
            <p>我是雀翎藍。</p>
            <p>
              對許多事情，我還沒有答案。於是讀一點、想一點，也親手做一點。從科技到研究，我想試著把腦中的想法落到實處，也看看自己究竟能走到哪一步。
            </p>
          </div>
          
          <div className="flex space-x-8 text-base tracking-widest font-medium">
            <Link href="https://github.com/Alan-Allen" className="text-black dark:text-[#F4F1E9] border-b border-black dark:border-[#F4F1E9] pb-1 hover:text-[#A33D32] dark:hover:text-[#A33D32] hover:border-[#A33D32] dark:hover:border-[#A33D32] transition-colors duration-300 flex items-center">
              藏經閣 <span className="ml-2 font-mono">↗</span>
            </Link>
          </div>

          <div className="flex justify-center space-x-8 text-2xl tracking-widest font-medium w-full mt-32" >
            <a href="#about" className="animate-bounce-slow text-[#8C8C8C] hover:text-black dark:hover:text-[#F4F1E9] transition-colors duration-500 flex items-center">
              吾人 <span className="ml-2 font-mono">↓</span>
            </a>
          </div>
        </section>
      </FadeIn>

      {/* 02. About｜吾人 (本我、心法與武裝合併) */}
      <section id="about" className="snap-start min-h-[50dvh] flex flex-col justify-start scroll-mt-24 pt-16 pb-24 border-t border-[#EAE5D9] dark:border-[#333333] transition-colors duration-500 w-full py-24">
        <FadeIn delay={0.2} className="w-full">
          <div className="flex items-end justify-between mb-16 pb-4">
            <h2 className="text-2xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] transition-colors duration-500">吾人</h2>
            <span className="text-[#B8A58A] text-xs font-mono tracking-widest">ABOUT</span>
          </div>
          
          <div className="space-y-24">
            
            {/* 01. 本我 (Profile) - 生日、專長、興趣、證照 */}
            <div>
              <div className="flex items-center mb-8">
                <span className="text-xs font-mono text-[#B8A58A] tracking-[0.2em] mr-4">01 / PROFILE</span>
                <div className="h-px bg-[#EAE5D9] dark:bg-[#333333] flex-grow transition-colors duration-500"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-sm">
                
                <div>
                  <h3 className="text-black dark:text-[#F4F1E9] font-extrabold mb-4 tracking-widest transition-colors duration-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>生辰
                  </h3>
                  <p className="text-[#8C8C8C] dark:text-[#A0A0A0] leading-loose transition-colors duration-500 tracking-widest flex items-baseline">
                    丁亥年・盛夏
                    <span className="font-mono text-xs ml-3 opacity-60 tracking-[0.1em]">2007.08.11</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-black dark:text-[#F4F1E9] font-extrabold mb-4 tracking-widest transition-colors duration-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>興趣
                  </h3>
                  <ul className="space-y-3 text-[#8C8C8C] dark:text-[#A0A0A0] transition-colors duration-500">
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> 閱讀</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> 電腦遊戲</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> 遊戲策畫、設計</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-black dark:text-[#F4F1E9] font-extrabold mb-4 tracking-widest transition-colors duration-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>專長
                  </h3>
                  <ul className="space-y-3 text-[#8C8C8C] dark:text-[#A0A0A0] transition-colors duration-500">
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> 資料庫設計</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> 現代全端網頁開發</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> 伺服器與基礎設施部署</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-black dark:text-[#F4F1E9] font-extrabold mb-4 tracking-widest transition-colors duration-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>證照
                  </h3>
                  <ul className="space-y-3 text-[#8C8C8C] dark:text-[#A0A0A0] transition-colors duration-500">
                    {/* 請替換為您的實際證照 */}
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> 工業電子丙級</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> 數位電子乙級</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> 遙控無人機 普通操作證</li>
                  </ul>
                </div>
                
              </div>
            </div>

            {/* 03. 經緯 (Arsenal) */}
            <div>
              <div className="flex items-center mb-8">
                <span className="text-xs font-mono text-[#B8A58A] tracking-[0.2em] mr-4">02 / ARSENAL</span>
                <div className="h-px bg-[#EAE5D9] dark:bg-[#333333] flex-grow transition-colors duration-500"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
                <div>
                  <h3 className="text-black dark:text-[#F4F1E9] font-extrabold mb-4 tracking-widest transition-colors duration-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>內功 (後端與基建)
                  </h3>
                  <ul className="space-y-3 text-[#8C8C8C] dark:text-[#A0A0A0] transition-colors duration-500">
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Python (物件導向與自動化)</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> PostgreSQL & SQL Schema</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Docker & Docker Compose</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Debian 伺服器與雲端部署</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-black dark:text-[#F4F1E9] font-extrabold mb-4 tracking-widest transition-colors duration-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>招式 (前端與架構)
                  </h3>
                  <ul className="space-y-3 text-[#8C8C8C] dark:text-[#A0A0A0] transition-colors duration-500">
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Next.js & React</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Tailwind CSS 排版美學</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> API 路由與分離設計</li>
                    <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Godot 4 & GDScript</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-black dark:text-[#F4F1E9] font-extrabold mb-4 tracking-widest transition-colors duration-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#EAE5D9] dark:bg-[#333333] mr-3 rotate-45 transition-colors duration-500"></span>配劍 (開發設備)
                  </h3>
                  <ul className="space-y-3 text-[#8C8C8C] dark:text-[#A0A0A0] transition-colors duration-500">
                    <li className="flex items-start">
                      <span className="mr-3 text-[#A33D32]">▪</span> 
                      <span className="font-mono mr-2 text-black dark:text-[#F4F1E9]">CPU:</span> i5-13450HX、i5-4590
                    </li>  
                    <li className="flex items-start">
                      <span className="mr-3 text-[#A33D32]">▪</span> 
                      <span className="font-mono mr-2 text-black dark:text-[#F4F1E9]">GPU:</span> RTX 5050 Laptop
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-[#A33D32]">▪</span> 
                      <span className="font-mono mr-2 text-black dark:text-[#F4F1E9]">RAM:</span> 32GB、16GB
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-[#A33D32]">▪</span> 
                      <span className="font-mono mr-2 text-black dark:text-[#F4F1E9]">SYSTEM:</span> Windows 11、Debian 13
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-[#A33D32]">▪</span> 
                      <span className="font-mono mr-2 text-black dark:text-[#F4F1E9]">KEYBOARD:</span>
                      POJUN PJ05 琴紅軸<br></br>子午計畫聯名-澪Rei
                      {/* 如果你看到這個，我會說: 哈哈我就是要炫耀我有POJUN子午計畫聯名-澪Rei的鍵盤哇哈哈哈好爽喔 */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </FadeIn>
      </section>

      {/* 04. Selected Works｜精選作品 */}
      <FadeIn delay={0.2}>
        <section id="works" className="min-h-[50vh] flex flex-col justify-start scroll-mt-24 pt-16 pb-24 w-full border-t border-[#EAE5D9] dark:border-[#333333] pt-16">
          <div className="flex items-end justify-between mb-12 pb-4 transition-colors duration-500">
            <h2 className="text-2xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] transition-colors duration-500">精選作品</h2>
            <span className="text-[#B8A58A] text-xs font-mono tracking-widest">SELECTED WORKS</span>
          </div>
          <div className="space-y-16">
            <article className="grid grid-cols-1 md:grid-cols-4 gap-8 group hover:-translate-y-1 transition-transform duration-500">
              <div className="col-span-1 text-sm font-mono text-[#B8A58A] pt-1">
                01 / WEB ARCHITECTURE
              </div>
              <div className="col-span-1 md:col-span-3">
                <h3 className="text-xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] group-hover:text-[#A33D32] dark:group-hover:text-[#A33D32] transition-colors duration-300 mb-3">
                  全端技術部落格建置
                </h3>
                <div className="flex flex-wrap gap-3 text-xs font-mono text-[#8C8C8C] mb-4">
                  <span className="bg-[#EAE5D9]/50 dark:bg-[#333333]/50 px-2 py-1 transition-colors duration-500">Next.js</span>
                  <span className="bg-[#EAE5D9]/50 dark:bg-[#333333]/50 px-2 py-1 transition-colors duration-500">Prisma</span>
                  <span className="bg-[#EAE5D9]/50 dark:bg-[#333333]/50 px-2 py-1 transition-colors duration-500">Docker</span>
                </div>
                <p className="text-[#595959] dark:text-[#A0A0A0] leading-loose tracking-wide text-sm mb-4 transition-colors duration-500">
                  從零建構基於現代 MVC 架構的全端平台。涵蓋 PostgreSQL 資料庫設計、API 路由實作，以及符合現代水墨極簡美學的前端介面開發。
                </p>
                <Link href="/projects" className="text-xs tracking-widest text-black dark:text-[#F4F1E9] hover:text-[#A33D32] dark:hover:text-[#A33D32] flex items-center transition-colors duration-300">
                  檢視詳情 <span className="ml-1 font-mono">→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </FadeIn>

      {/* 05. Journal｜近期札記 */}
      <FadeIn delay={0.2}>
        <section id="journal" className="min-h-[50vh] flex flex-col justify-start scroll-mt-24 pt-16 pb-24 w-full border-t border-[#EAE5D9] dark:border-[#333333] pt-16">
          <div className="flex items-end justify-between mb-12 pb-4 transition-colors duration-500">
            <h2 className="text-2xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] transition-colors duration-500">近期札記</h2>
            <Link href="/journal" className="text-[#8C8C8C] hover:text-[#A33D32] dark:hover:text-[#A33D32] text-xs tracking-widest transition-colors duration-300">
              全部札記 →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length === 0 ? (
              <p className="text-[#8C8C8C] tracking-widest text-sm col-span-full">尚無卷宗，靜待墨落。</p>
            ) : (
              posts.map((post) => (
                <Link href={`/post/${post.id}`} key={post.id} className="group block border border-[#EAE5D9] dark:border-[#333333] p-6 hover:border-[#B8A58A] dark:hover:border-[#B8A58A] hover:-translate-y-1 transition-all duration-500 bg-white/30 dark:bg-transparent">
                  <div className="text-xs font-mono text-[#B8A58A] mb-4">
                    {post.createdAt.toLocaleDateString('zh-TW')}
                  </div>
                  <h3 className="text-lg font-extrabold tracking-wide text-black dark:text-[#F4F1E9] group-hover:text-[#A33D32] dark:group-hover:text-[#A33D32] transition-colors duration-300 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-[#595959] dark:text-[#A0A0A0] text-sm leading-relaxed tracking-wide line-clamp-3 transition-colors duration-500">
                    {post.content}
                  </p>
                </Link>
              ))
            )}
          </div>
        </section>
      </FadeIn>

      {/* 06. Contact｜聯絡我 (飛鴿傳書) */}
      <section id="contact" className="snap-start min-h-[50dvh] flex flex-col justify-start scroll-mt-24 pt-16 pb-24 w-full border-t border-[#EAE5D9] dark:border-[#333333]">
        <FadeIn delay={0.2} className="w-full">
          <div className="flex items-end justify-between mb-12 pb-4 transition-colors duration-500">
            <h2 className="text-2xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] transition-colors duration-500">飛鴿傳書</h2>
            <span className="text-[#B8A58A] text-xs font-mono tracking-widest">CONTACT</span>
          </div>

          <div className="max-w-2xl">
            <p className="text-[#595959] dark:text-[#A0A0A0] leading-loose tracking-wide text-sm mb-12 transition-colors duration-500">
              若有系統開發、合作提案，或僅是技術交流切磋，皆歡迎留下隻字片語。縱使江湖路遠，亦能循跡相見。
            </p>

            <div className="space-y-6">
              {/* 信箱 */}
              <div className="flex items-center group">
                <span className="w-1.5 h-1.5 bg-[#A33D32] mr-5 rotate-45 transition-transform group-hover:scale-125 duration-300"></span>
                <span className="font-mono text-xs text-[#B8A58A] tracking-[0.1em] w-24">MAIL</span>
                {/* 請換成您的 Email */}
                <a href="mailto:xxiecneg@gmail.com" className="text-black dark:text-[#F4F1E9] group-hover:text-[#A33D32] dark:group-hover:text-[#A33D32] tracking-wider transition-colors duration-300">
                  xxiecneg@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center group">
                <span className="w-1.5 h-1.5 bg-[#A33D32] mr-5 rotate-45 transition-transform group-hover:scale-125 duration-300"></span>
                <span className="font-mono text-xs text-[#B8A58A] tracking-[0.1em] w-24">GITHUB</span>
                {/* 請換成您的 GitHub 網址 */}
                <a href="https://github.com/Alan-Allen" target="_blank" rel="noopener noreferrer" className="text-black dark:text-[#F4F1E9] group-hover:text-[#A33D32] dark:group-hover:text-[#A33D32] tracking-wider transition-colors duration-300 flex items-center">
                  @Alan-Allen
                  <span className="ml-2 font-mono opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <FadeIn delay={0.5}>
        <div className="mt-28 pt-12 border-t border-[#EAE5D9] dark:border-[#333333] text-center transition-colors duration-500">
          <p className="text-sm text-[#595959] dark:text-[#A0A0A0] tracking-widest leading-relaxed mb-3">
            他固有他的機緣，但若無你，飛俠歸來便遙遙無期。
          </p>
          <span className="text-xs font-mono text-[#B8A58A] tracking-widest">
            —《活俠傳》飛俠歸來
          </span>
        </div>
      </FadeIn>

    </div>
  );
}