import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  });

  return (
    // 將 overflow-hidden 改為 overflow-x-hidden，避免切斷垂直的滾動偵測
    <div className="space-y-32 pb-16 overflow-x-hidden">
      
      {/* 01. Hero 首屏｜延遲 0 秒立刻浮現 */}
      <FadeIn delay={0}>
        <section className="pt-12 md:pt-24 flex flex-col items-start">
          <div className="text-xs font-mono text-[#B8A58A] tracking-[0.2em] mb-8 border border-[#B8A58A]/30 px-3 py-1 rounded-sm">
            PERSONAL ARCHIVE / 001
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] leading-snug mb-6 drop-shadow-sm transition-colors duration-500">
            研究探索・技術實作
          </h1>
          <p className="text-xl md:text-2xl text-[#A33D32] font-medium tracking-widest mb-8">
            以思考為刃，以實踐為證。
          </p>
          <div className="text-[#595959] dark:text-[#A0A0A0] text-base leading-loose tracking-wide max-w-2xl mb-12 transition-colors duration-500">
            <p>我是雀翎藍。</p>
            <p>在商業、科技與研究之間探索問題，透過實作驗證想法，並持續尋找更好的解法。</p>
          </div>
          <div className="flex space-x-8 text-sm tracking-widest font-medium">
            <Link href="/projects" className="text-black dark:text-[#F4F1E9] border-b border-black dark:border-[#F4F1E9] pb-1 hover:text-[#A33D32] dark:hover:text-[#A33D32] hover:border-[#A33D32] dark:hover:border-[#A33D32] transition-colors duration-300 flex items-center">
              閱覽作品集 <span className="ml-2 font-mono">↗</span>
            </Link>
            <Link href="/about" className="text-[#8C8C8C] hover:text-black dark:hover:text-[#F4F1E9] transition-colors duration-300 flex items-center">
              關於我 <span className="ml-2 font-mono">→</span>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* 02. Philosophy｜做事方式 */}
      <FadeIn delay={0.2}>
        <section className="border-t border-[#EAE5D9] dark:border-[#333333] pt-16 transition-colors duration-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-extrabold text-black dark:text-[#F4F1E9] tracking-widest mb-4 flex items-center transition-colors duration-500">
                <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>探其本質
              </h3>
              <p className="text-sm text-[#595959] dark:text-[#A0A0A0] leading-loose tracking-wide transition-colors duration-500">
                先理解問題，再選擇方法。不盲目追求最新技術，而是尋找最適合當前商業或系統邏輯的架構。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-black dark:text-[#F4F1E9] tracking-widest mb-4 flex items-center transition-colors duration-500">
                <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>以行驗知
              </h3>
              <p className="text-sm text-[#595959] dark:text-[#A0A0A0] leading-loose tracking-wide transition-colors duration-500">
                透過實作與驗證，讓想法接受檢驗。從 Docker 部署到 API 開發，讓理論落地為可運行的程式碼。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-black dark:text-[#F4F1E9] tracking-widest mb-4 flex items-center transition-colors duration-500">
                <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>反覆精進
              </h3>
              <p className="text-sm text-[#595959] dark:text-[#A0A0A0] leading-loose tracking-wide transition-colors duration-500">
                從結果與失誤中整理經驗，持續改進。將每一次的除錯與重構，化為提升系統穩定度的養分。
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 03. Selected Works｜精選作品 */}
      <FadeIn delay={0.2}>
        <section>
          <div className="flex items-end justify-between mb-12 border-b border-[#EAE5D9] dark:border-[#333333] pb-4 transition-colors duration-500">
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
                <Link href="#" className="text-xs tracking-widest text-black dark:text-[#F4F1E9] hover:text-[#A33D32] dark:hover:text-[#A33D32] flex items-center transition-colors duration-300">
                  檢視詳情 <span className="ml-1 font-mono">→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </FadeIn>

      {/* 04. Journal｜近期札記 */}
      <FadeIn delay={0.2}>
        <section>
          <div className="flex items-end justify-between mb-12 border-b border-[#EAE5D9] dark:border-[#333333] pb-4 transition-colors duration-500">
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

    </div>
  );
}