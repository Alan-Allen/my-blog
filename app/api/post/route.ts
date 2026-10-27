import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 為了測試方便，我們先使用 GET 請求來觸發寫入動作
export async function GET() {
  try {
    const newPost = await prisma.post.create({
      data: {
        title: '架站里程碑：我的第一篇測試文章',
        content: '這是透過 Next.js API 直接寫入的測試內容，代表資料庫連線與 Prisma 設定非常完美！',
        author: '雀翎藍',
        published: true,
      },
    });

    // 寫入成功後，將回傳結果以 JSON 格式顯示在網頁上
    return NextResponse.json({ success: true, data: newPost });
    
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}