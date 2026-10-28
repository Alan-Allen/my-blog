export default function AboutPage() {
  return (
    // 加上 overflow-hidden 避免動畫過程產生橫向卷軸
    <div className="max-w-3xl pb-16 overflow-hidden">
      
      {/* 頁面標題區塊 */}
      <div>
        <header className="mb-16 border-b border-[#EAE5D9] dark:border-[#333333] pb-6 transition-colors duration-500">
          <h1 className="text-3xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] transition-colors duration-500">
            吾人
          </h1>
          <p className="text-[#8C8C8C] dark:text-[#A0A0A0] mt-4 tracking-widest text-sm leading-relaxed transition-colors duration-500">
            誰不想成為命運寵兒，出手掀翻天地，回家妻妾成群。<br className="hidden md:block" />
            但你還得活著，必須清醒。—《活俠傳》懦夫救星
          </p>
        </header>
      </div>

      {/* 內文區塊 */}
      <article className="space-y-16 text-[#595959] dark:text-[#A0A0A0] leading-loose tracking-wide transition-colors duration-500">
        
        {/* 自我介紹 */}
        <div>
          <section className="space-y-6">
            <p>
              我是雀翎藍。目前就讀於智慧商務系，專注於後端架構設計、資料庫建置與全端網頁開發。
            </p>
            <p>
              曾參與學生會網站的導覽結構重構與系統建置。我相信好的軟體架構如同優雅的武學流派，不需繁複的花招，而是以最簡潔的邏輯（Controller）與穩固的資料模型（Model），精準解決實際的商業與行政需求。
            </p>
          </section>
        </div>

        {/* 技術棧 (兵器譜) */}
        <div>
          <section>
            <h2 className="text-xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] mb-6 flex items-center transition-colors duration-500">
              <span className="w-1.5 h-5 bg-[#A33D32] mr-4 inline-block"></span>
              技術經緯
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              
              {/* 後端與基礎設施 */}
              <div>
                <h3 className="text-black dark:text-[#F4F1E9] font-extrabold mb-4 tracking-widest transition-colors duration-500">
                  後端與基建 (內功)
                </h3>
                {/* 移除錯誤的 - 符號，改用朱砂紅的小方塊作為列表前綴 */}
                <ul className="space-y-3 text-[#8C8C8C] dark:text-[#A0A0A0] transition-colors duration-500">
                  <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Python (物件導向與自動化)</li>
                  <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> PostgreSQL & SQL Schema 設計</li>
                  <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Docker & Docker Compose 容器化</li>
                  <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Debian 伺服器與 GCP/Azure 部署</li>
                </ul>
              </div>
              
              {/* 前端與互動 */}
              <div>
                <h3 className="text-black dark:text-[#F4F1E9] font-extrabold mb-4 tracking-widest transition-colors duration-500">
                  前端與架構 (招式)
                </h3>
                <ul className="space-y-3 text-[#8C8C8C] dark:text-[#A0A0A0] transition-colors duration-500">
                  <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Next.js (App Router) & React</li>
                  <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Tailwind CSS 排版美學</li>
                  <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> API 路由與前後端分離設計</li>
                  <li className="flex items-start"><span className="mr-3 text-[#A33D32]">▪</span> Godot 4 & GDScript (2D 遊戲開發)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* 案頭設備 (配劍) */}
        <div>
          <section>
            <h2 className="text-xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] mb-6 flex items-center transition-colors duration-500">
              <span className="w-1.5 h-5 bg-[#EAE5D9] dark:bg-[#333333] mr-4 inline-block transition-colors duration-500"></span>
              案頭光景
            </h2>
            <p className="text-sm text-[#8C8C8C] dark:text-[#A0A0A0] transition-colors duration-500">
              日常敲擊著 POJUN PJ05 琴紅軸鍵盤，在 Intopic 筆電架與記憶海綿手托的輔助下，於 Debian 13 環境中編織程式碼。
            </p>
          </section>
        </div>

      </article>
    </div>
  );
}