'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: '首屏' },
  { id: 'about', label: '吾人' },
  { id: 'works', label: '精選' },
  { id: 'journal', label: '札記' },
  { id: 'contact', label: '聯絡' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // 新增：處理點擊事件，針對 hero 進行特殊攔截
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id === 'hero') {
      e.preventDefault(); // 阻止預設的 href="#hero" 行為
      window.scrollTo({ top: 0, behavior: 'smooth' }); // 強制平滑滾動到網頁最頂端 0 的位置
    }
  };

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-end space-y-4 z-50">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)} // 綁定點擊事件
          className="group relative flex items-center justify-end h-8 w-12"
          aria-label={label}
        >
          <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-mono tracking-widest text-[#8C8C8C] dark:text-[#A0A0A0] pointer-events-none whitespace-nowrap">
            {label}
          </span>
          
          <span 
            className={`transition-all duration-500 ease-out w-[2px] ${
              activeSection === id 
                ? 'h-12 bg-[#A33D32]' 
                : 'h-4 bg-[#D1CBC0] dark:bg-[#4A4A4A] group-hover:h-5 group-hover:bg-[#A33D32]' 
            }`}
          ></span>
        </a>
      ))}
    </div>
  );
}