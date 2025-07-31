'use client'

import React from 'react'
import { Download, Shield, Zap, Smartphone, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const handleDownload = () => {
  window.location.href = 'https://drive.google.com/uc?export=download&id=1KL3xIIu-yTNwQGQKSidoyyRsh-3SppTf';
};


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Minimal background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-main/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-main/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
      
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-green-main flex items-center justify-center">
              <Image 
                src="/mzs.jpeg" 
                alt="MZS Wallet Logo" 
                width={40} 
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gradient text-lg font-semibold">MZS</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium">기능</a>
            <a href="#download" className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium">다운로드</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-20">
            <div className="mb-12">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-8 minimal-glow bg-green-main flex items-center justify-center">
                <Image 
                  src="/mzs.jpeg" 
                  alt="MZS Wallet Logo" 
                  width={96} 
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
                <span className="text-gradient">MZS</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto font-medium">
                안전하고 빠른 암호화폐 지갑으로 디지털 자산을 관리하세요
              </p>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="minimal-button flex items-center space-x-3 mx-auto"
            >
              <Download className="w-5 h-5" />
              <span>모바일 앱 다운로드</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-text-muted text-sm mt-4 font-medium">
              Android APK • 25MB
            </p>
          </div>

          {/* Features Grid */}
          <div id="features" className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="feature-card-minimal text-center">
              <div className="w-16 h-16 bg-green-main rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">보안</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                최고 수준의 암호화 기술로 자산을 안전하게 보호합니다
              </p>
            </div>

            <div className="feature-card-minimal text-center">
              <div className="w-16 h-16 bg-green-main rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">빠른 거래</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                초고속 거래 처리로 즉시 송금과 결제가 가능합니다
              </p>
            </div>

            <div className="feature-card-minimal text-center">
              <div className="w-16 h-16 bg-green-main rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">모바일 최적화</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                모든 모바일 기기에서 완벽하게 작동하는 반응형 디자인
              </p>
            </div>
          </div>

          {/* App Preview */}
          <div className="glass-card rounded-3xl p-12 mb-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-2xl font-bold text-text-primary mb-4 font-display">
                  모던한 사용자 경험
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-main rounded-full"></div>
                    <span className="text-text-secondary font-medium">직관적인 인터페이스</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-main rounded-full"></div>
                    <span className="text-text-secondary font-medium">다중 암호화폐 지원</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-main rounded-full"></div>
                    <span className="text-text-secondary font-medium">실시간 시세 정보</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-main rounded-full"></div>
                    <span className="text-text-secondary font-medium">24/7 고객 지원</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-80 bg-green-main rounded-3xl p-1 minimal-glow">
                    <div className="w-full h-full bg-white-main/60 rounded-2xl flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-6">
                          <Image 
                            src="/mzs.jpeg" 
                            alt="MZS Wallet Logo" 
                            width={64} 
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-gradient font-semibold text-lg mb-2">MZS Wallet</p>
                        <p className="text-text-muted text-sm">모바일 앱</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div id="download" className="text-center glass-card rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl text-2xl font-bold text-text-primary mb-4 font-display">
              지금 다운로드하세요
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
              MZS Wallet 모바일 앱을 다운로드하고 암호화폐 거래를 시작하세요
            </p>
            <button
              onClick={handleDownload}
              className="minimal-button flex items-center space-x-3 mx-auto"
            >
              <Download className="w-5 h-5" />
              <span>APK 다운로드</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-text-muted text-sm mt-4">
              Android 6.0 이상 지원
            </p>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 py-8 border-t border-green-main/30 bg-green-light">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-text-muted text-sm">
            © 2024 MZS. 모든 권리 보유.
          </p>
        </div>
      </footer>
    </div>
  )
} 
