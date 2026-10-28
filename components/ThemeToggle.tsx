'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 確保在客戶端載入後才渲染按鈕，避免伺服器與客戶端 HTML 不一致而報錯
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-8 h-8"></div> // 佔位符

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-sm font-medium tracking-widest text-[#8C8C8C] hover:text-[#A33D32] transition-colors duration-300 px-2 py-1 border border-transparent hover:border-[#A33D32]/30"
      aria-label="切換深淺色模式"
    >
      {theme === 'dark' ? '晝' : '夜'}
    </button>
  )
}

