'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SwordEntry() {
  // 初始狀態設為 null，代表「伺服器剛渲染，還在確認中」
  const [hasPlayed, setHasPlayed] = useState<boolean | null>(null);
  // 用來判定是否為「老訪客」，老訪客要瞬間撤除黑幕，不播淡出動畫
  const [instantHide, setInstantHide] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem('swordIntroPlayed');
    
    if (played) {
      // 老訪客：直接標記為瞬間隱藏
      setInstantHide(true);
      setHasPlayed(true);
    } else {
      // 新訪客：開始播動畫
      setHasPlayed(false);
      document.body.style.overflow = 'hidden'; 
      
      const timer = setTimeout(() => {
        setHasPlayed(true);
        sessionStorage.setItem('swordIntroPlayed', 'true');
        document.body.style.overflow = '';
      }, 1200); 
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, []);

  // 如果是老訪客，直接回傳 null，黑幕會「瞬間消失」
  if (instantHide) return null;

  return (
    <AnimatePresence>
      {/* 只要還沒播完 ( !== true )，就蓋住黑幕。初次伺服器渲染 (null) 時也會蓋住，完美防止底下的網頁閃爍 */}
      {hasPlayed !== true && (
        <motion.div
          key="sword-overlay"
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#171816] pointer-events-none"
          suppressHydrationWarning // 告訴 Next.js 這是刻意設計的初始狀態
        >
          {/* 只有在確認是「新訪客」(=== false) 的瞬間，才開始畫劍光 */}
          {hasPlayed === false && (
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none" 
            >
              {/* 1. 劍氣外暈 (Glow) */}
              <motion.line
                x1="100" y1="0"
                stroke="#ffffff"
                vectorEffect="non-scaling-stroke"
                initial={{ x2: 100, y2: 0, opacity: 0.8, strokeWidth: 12 }}
                animate={{ x2: 0, y2: 100, opacity: 0 }}
                transition={{
                  x2: { duration: 0.35, ease: "easeOut" },
                  y2: { duration: 0.35, ease: "easeOut" },
                  opacity: { duration: 0.4, delay: 0.35, ease: "easeOut" }
                }}
                style={{ filter: 'blur(10px)' }}
              />
              
              {/* 2. 劍光核心實體線 (Core) */}
              <motion.line
                x1="100" y1="0"
                stroke="#ffffff"
                vectorEffect="non-scaling-stroke"
                initial={{ x2: 100, y2: 0, opacity: 1, strokeWidth: 4 }}
                animate={{ x2: 0, y2: 100, opacity: 0, strokeWidth: 0 }}
                transition={{
                  x2: { duration: 0.35, ease: "easeOut" },
                  y2: { duration: 0.35, ease: "easeOut" },
                  opacity: { duration: 0.3, delay: 0.4, ease: "easeIn" },
                  strokeWidth: { duration: 0.3, delay: 0.4, ease: "easeIn" }
                }}
              />
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}