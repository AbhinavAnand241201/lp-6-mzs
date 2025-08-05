import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MZS - 모바일 앱 다운로드',
  description: '안전하고 빠른 암호화폐 지갑 앱을 다운로드하세요. MZS로 디지털 자산을 관리하세요.',
  keywords: '암호화폐, 지갑, 모바일 앱, 다운로드, 블록체인, MZS',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
