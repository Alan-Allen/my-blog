import FadeIn from '@/components/FadeIn';

export default function ProfilePage() {
  return (
    <div>
      
      {/* 頁面標題區塊 */}
      <FadeIn delay={0}>
        <header className="mb-20 border-b border-[#EAE5D9] dark:border-[#333333] pb-8 transition-colors duration-500">
          <div className="text-xs font-mono text-[#B8A58A] tracking-[0.2em] mb-4">
            BIOGRAPHY / 004
          </div>
          <h1 className="text-3xl font-extrabold tracking-widest text-black dark:text-[#F4F1E9] transition-colors duration-500 mb-4">
            自傳
          </h1>
          <p className="text-[#8C8C8C] dark:text-[#A0A0A0] tracking-widest text-sm leading-loose transition-colors duration-500 max-w-2xl">
            你不是沒有人愛的，起碼你愛你自己，你表現得很好。
            <span className="block mt-2 font-mono text-xs text-[#B8A58A] tracking-widest">—《活俠傳》自戀</span>
          </p>
        </header>
      </FadeIn>

      {/* 自傳內文區塊 */}
      <div className="space-y-16 text-[#595959] dark:text-[#A0A0A0] text-sm leading-loose tracking-wide transition-colors duration-500">
        
        {/* 第一章：序言 */}
        <FadeIn delay={0.1}>
          <section className="space-y-6">
            <h2 className="text-lg font-extrabold tracking-widest text-black dark:text-[#F4F1E9] flex items-center transition-colors duration-500">
              <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>01 / 序言
            </h2>
            <p>
              我不喜歡老舊古板的自傳，老闆和老師總是喜歡叫人想出新的東西，同時又叫你用老舊古板的方式學習。等等也許可以寫我的學習過程，但我認為自傳給AI寫那根本就不是我，不如像現在這樣想到甚麼寫什麼。
              雖然會寫的亂七八糟，但那又如何，這就是我。
              <br />
              各位大俠、女俠好，在下雀翎藍，有個江湖夢，夢想為俠。
              說實話，我沒那麼好的文筆，寫不出像《活俠傳》那樣優秀的文本，認真看的話應該有注意到，我有引用活俠傳的文句在各個地方。
              那是因為我真的很喜歡活俠傳，他喚起我心中的江湖夢。誰不想當大俠，逍遙灑脫，行俠正義。不過大家(包括我)通常都是那個路人而已。
              <br />
              不過雖然這個頁面是自傳，但我也不知道寫甚麼，主要是我不想把這寫得很像什麼拿來推甄或是什麼用的。
              不過這樣想到什麼就寫什麼的感覺也很不錯，我本身就是這麼隨便的人(總覺得這樣形容自己怪怪的)。
            </p>
          </section>
        </FadeIn>

        {/* 第二章：根基 */}
        <FadeIn delay={0.2}>
          <section className="space-y-6">
            <h2 className="text-lg font-extrabold tracking-widest text-black dark:text-[#F4F1E9] flex items-center transition-colors duration-500">
              <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>02 / 
            </h2>
            <p>
              
            </p>
          </section>
        </FadeIn>

        {/* 第三章：實踐 */}
        <FadeIn delay={0.3}>
          <section className="space-y-6">
            <h2 className="text-lg font-extrabold tracking-widest text-black dark:text-[#F4F1E9] flex items-center transition-colors duration-500">
              <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>03 / 
            </h2>
            <p>
              
            </p>
          </section>
        </FadeIn>

        {/* 第四章：結語 */}
        <FadeIn delay={0.4}>
          <section className="space-y-6 pt-8 border-t border-[#EAE5D9] dark:border-[#333333] transition-colors duration-500">
            <h2 className="text-lg font-extrabold tracking-widest text-black dark:text-[#F4F1E9] flex items-center transition-colors duration-500">
              <span className="w-1.5 h-1.5 bg-[#A33D32] mr-3 rotate-45"></span>04 / 
            </h2>
            <p>
              
            </p>
          </section>
        </FadeIn>

      </div>

    </div>
  );
}