import FadeIn from '@/components/FadeIn';

// 融合最新經歷與早期學歷的完整編年史
const experienceGroups = [
  {
    year: '2026',
    items: [
      {
        id: '01',
        period: '05/01 — 至今',
        role: '圖書館工讀助理',
        organization: '高雄科技大學 圖書館',
        description: '協助館內圖書資源管理與借閱行政庶務，維持館內資訊環境的穩定運作。',
      },
      {
        id: '02',
        period: '08/01 — 至今',
        role: '行政中心 資訊組長',
        organization: '高雄科技大學 學生會',
        description: '負責學生會網站與會內資訊系統維護，協助開發對外系統；同時深度參與會內活動籌備與實際執行。',
      },
      {
        id: '03',
        period: '02/01 — 07/31',
        role: '行政中心 資訊組員',
        organization: '高雄科技大學 學生會',
        description: '學習並接手行政中心資訊組業務，同時深度參與會內活動籌備與實際執行。',
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        id: '04',
        period: '08/31 — 2026/01/31',
        role: '行政中心 實習幹部',
        organization: '高雄科技大學 學生會',
        description: '學習行政中心行政內容，同時協助活動辦理。',
      },
      {
        id: '05',
        period: '2025 — 至今',
        role: '獨立遊戲開發者 (Unity & Godot)',
        organization: '個人專案',
        description: '專注於遊戲設計，源自純粹熱愛。',
      },
      {
        id: '06',
        period: '08/01 — 至今',
        role: '智慧商務系 | 學士',
        organization: '國立高雄科技大學',
        description: '主修商務邏輯與程式設計，將所學應用於實際。專注於後端架構設計、資料庫建置與全端網頁開發。',
      },
    ],
  },
  {
    year: '2022 — 2025',
    items: [
      {
        id: '07',
        period: '2022 — 2025',
        role: '資訊科',
        organization: '臺北市立內湖高級工業職業學校',
        description: '主修電子電路與程式設計，專注於跨領域整合。',
      },
    ],
  },
  {
    year: '2019 — 2022',
    items: [
      {
        id: '08',
        period: '2019 — 2022',
        role: '基礎學科',
        organization: '臺北市立格致國民中學',
        description: '培養邏輯思考與科學基礎。',
      },
    ],
  },
  {
    year: '2016 — 2019',
    items: [
      {
        id: '09',
        period: '2016 — 2019',
        role: '一切的起點',
        organization: '臺北市泉源實驗國民小學',
        description: '對電腦的好奇，在此埋下了學習的種子。',
      },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div> 
      
      {/* 頁面標題區塊 */}
      <FadeIn delay={0}>
        <header className="mb-20 border-b border-[#EAE5D9] dark:border-[#333333] pb-6 transition-colors duration-500">
          <h1 className="text-3xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] transition-colors duration-500">
            行跡
          </h1>
          <p className="text-[#8C8C8C] dark:text-[#A0A0A0] mt-4 tracking-widest text-sm leading-relaxed transition-colors duration-500">
            誰不想成為命運寵兒，出手掀翻天地，回家妻妾成群。但你還得活著，必須清醒。
            <span className="text-xs font-mono text-[#B8A58A] tracking-widest">—《活俠傳》懦夫救星</span>
          </p>
          
        </header>
      </FadeIn>

      {/* 依年份群組渲染 */}
      <div className="space-y-20">
        {experienceGroups.map((group, groupIndex) => (
          <FadeIn delay={0.1 * (groupIndex + 1)} key={group.year}>
            
            {/* 年度大標題與裝飾線 */}
            <div className="flex items-center mb-12">
              <span className="text-2xl font-extrabold font-mono text-black dark:text-[#F4F1E9] tracking-wider mr-6 transition-colors duration-500">
                {group.year}
              </span>
              <div className="h-px bg-[#EAE5D9] dark:bg-[#333333] flex-grow transition-colors duration-500"></div>
            </div>

            {/* 該年份底下的時間軸細項 */}
            <div className="relative border-l border-[#EAE5D9] dark:border-[#333333] ml-2 md:ml-3 transition-colors duration-500">
              {group.items.map((exp) => (
                <article key={exp.id} className="group relative pl-8 md:pl-12 mb-16 last:mb-0">
                  
                  {/* 菱形節點 */}
                  <div className="absolute w-1.5 h-1.5 bg-[#D1CBC0] dark:bg-[#4A4A4A] group-hover:bg-[#A33D32] rotate-45 -left-[3.5px] top-2 transition-all duration-500 group-hover:scale-125" />
                  
                  {/* 期間與身分 */}
                  <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 mb-3">
                    <time className="text-[#A33D32] font-mono text-sm tracking-widest mb-1 md:mb-0 font-bold">
                      {exp.period}
                    </time>
                    <span className="hidden md:inline text-[#EAE5D9] dark:text-[#333333]">/</span>
                    <h3 className="text-lg font-extrabold tracking-widest text-black dark:text-[#F4F1E9] group-hover:text-[#A33D32] dark:group-hover:text-[#A33D32] transition-colors duration-300">
                      {exp.role}
                    </h3>
                  </div>
                  
                  {/* 組織單位 */}
                  <div className="text-xs font-mono text-[#B8A58A] tracking-wider mb-4">
                    {exp.organization}
                  </div>
                  
                  {/* 經歷敘述 */}
                  <p className="text-[#595959] dark:text-[#A0A0A0] text-sm leading-loose tracking-wide transition-colors duration-500 max-w-2xl">
                    {exp.description}
                  </p>

                </article>
              ))}
            </div>

          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="mt-28 pt-12 border-t border-[#EAE5D9] dark:border-[#333333] text-center transition-colors duration-500">
          <p className="text-sm text-[#595959] dark:text-[#A0A0A0] tracking-widest leading-relaxed mb-3">
            儘管未必如意，能夠坦然走到這裡，也很了不起。
          </p>
          <span className="text-xs font-mono text-[#B8A58A] tracking-widest">
            —《活俠傳》命中有數
          </span>
        </div>
      </FadeIn>

    </div>
  );
}