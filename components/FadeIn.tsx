'use client';

import { motion } from 'framer-motion';
import React from 'react';

// 明確宣告 Props 型別，解決 TypeScript 在 Server Component 中引用的報錯
export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // 拔除 margin，改用 amount: 0.1 (只要元素有 10% 進入畫面就觸發)，這對排版最穩定
      viewport={{ once: false, amount: 0.1 }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}