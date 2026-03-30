import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '炭火焼鳥 おうひ | 大阪・福島区の隠れ家的炭火焼鳥',
  description: '大阪・JR福島駅近くの細い路地に佇む、炭火にこだわった職人の焼き鳥屋。一本一本丁寧に焼き上げる串焼きと豊富な地酒で至福のひとときを。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
