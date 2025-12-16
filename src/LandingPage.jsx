import React from 'react'
import { ArrowRight, Users, FileText, Calendar, Archive, Globe, Heart, Search, BookOpen, Code, Users2, CheckCircle2, Sparkles } from 'lucide-react'
import logo from './assets/logo.png'

// Decorative SVG Components
const DecorativeCircle = ({ className = "" }) => (
  <div className={`absolute rounded-full bg-gradient-to-br from-primary-200/30 to-primary-300/20 blur-3xl ${className}`}></div>
)

const DecorativePattern = () => (
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
)

const WaveDivider = ({ className = "" }) => (
  <div className={`absolute left-0 right-0 ${className}`}>
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-white"/>
    </svg>
  </div>
)

const OrnamentShape = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" className="text-primary-600"/>
      <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="1.5" className="text-primary-500"/>
      <circle cx="60" cy="60" r="10" fill="currentColor" className="text-primary-600"/>
    </svg>
  </div>
)

const GeometricShape = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-15">
      <polygon points="40,10 70,30 70,60 40,80 10,60 10,30" stroke="currentColor" strokeWidth="2" className="text-primary-600" fill="none"/>
    </svg>
  </div>
)

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased relative overflow-x-hidden">
      {/* Background Decorative Elements */}
      <DecorativeCircle className="w-96 h-96 -top-48 -right-48" />
      <DecorativeCircle className="w-80 h-80 top-1/3 -left-40" />
      <DecorativeCircle className="w-72 h-72 bottom-1/4 right-1/4" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Kultura" className="h-9" />
            <div className="hidden md:flex items-center gap-10">
              <a href="#tentang" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">Tentang</a>
              <a href="#pilar" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">Pilar</a>
              <a href="#volunteer" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">Volunteer</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 px-6 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-primary-50/30"></div>
        <DecorativePattern />
        <OrnamentShape className="top-20 right-20 hidden lg:block" />
        <GeometricShape className="bottom-32 left-10 hidden md:block" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Ruang Hidup Budaya Nusantara</span>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tight text-gray-900">
              Ruang Hidup
              <br />
              <span className="text-primary-600">Budaya Nusantara</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl font-light">
              Kultura adalah ruang bersama untuk mengenal, mendokumentasikan, dan menghidupkan praktik budaya Nusantara—melalui para pelakunya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 hover:-translate-y-0.5">
                Jelajahi Kultura
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300">
                Gabung sebagai Volunteer
              </button>
            </div>
          </div>
          
          {/* Decorative Image Placeholder Area */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-96 h-96">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl transform -rotate-6 opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl border-2 border-primary-200/50 flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-sm text-primary-700 font-medium">Visual Asset Area</p>
                  <p className="text-xs text-primary-600 mt-1">Replace with cultural imagery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masalah yang Dijawab */}
      <section id="tentang" className="relative py-32 md:py-40 px-6 sm:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <GeometricShape className="top-10 right-20 hidden lg:block" />
        <OrnamentShape className="bottom-20 left-10 hidden md:block" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
                Latar Belakang
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                Mengapa Kultura Hadir?
              </h2>
              
              {/* Decorative Image Frame */}
              <div className="mt-12 relative hidden md:block">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-primary-50 to-white rounded-xl border-2 border-primary-100 p-8 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-primary-400 mx-auto mb-3" />
                      <p className="text-sm text-primary-600 font-medium">Image Placeholder</p>
                      <p className="text-xs text-primary-500 mt-1">Cultural documentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Informasi budaya tersebar dan tidak saling terhubung
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Pelaku budaya sering tidak terdokumentasi secara berkelanjutan
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Event budaya bersifat temporer dan cepat hilang dari ingatan publik
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Minim ruang partisipasi bermakna bagi anak muda dalam ekosistem budaya
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            <p className="text-xl leading-relaxed relative z-10">
              Kultura hadir untuk menjawab kebutuhan akan <span className="font-bold">ekosistem budaya yang terhubung, hidup, dan berpusat pada pelaku</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Tentang Kultura */}
      <section className="relative py-32 md:py-40 px-6 sm:px-8 overflow-hidden">
        <DecorativePattern />
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              Tentang Kami
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gray-900 leading-tight">
              Apa itu Kultura?
            </h2>
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Kultura hadir sebagai ekosistem digital yang menempatkan pelaku budaya sebagai pusat.
              </p>
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Dari pelaku, lahir karya. Dari karya, tercipta peristiwa.
              </p>
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Semuanya saling terhubung dan terdokumentasi secara berkelanjutan.
              </p>
            </div>
          </div>
          
          {/* Decorative Visual Element */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="w-12 h-12 text-primary-600" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="w-12 h-12 text-primary-700" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary-300 to-primary-400 rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="w-12 h-12 text-primary-800" />
            </div>
          </div>
        </div>
      </section>

      {/* Ekosistem Terhubung */}
      <section className="relative py-32 md:py-40 px-6 sm:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <OrnamentShape className="top-20 left-20 hidden lg:block" />
        <GeometricShape className="bottom-32 right-10 hidden md:block" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              Ekosistem
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Terhubung & Berkelanjutan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Setiap elemen saling terhubung dalam dokumentasi yang berkelanjutan—membentuk living archive yang terus berkembang.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative p-10 bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Pelaku Budaya</h3>
                  <p className="text-gray-600 leading-relaxed">Pusat ekosistem</p>
                </div>
              </div>
              <div className="group relative p-10 bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Karya Budaya</h3>
                  <p className="text-gray-600 leading-relaxed">Hasil praktik</p>
                </div>
              </div>
              <div className="group relative p-10 bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Peristiwa Budaya</h3>
                  <p className="text-gray-600 leading-relaxed">Perjumpaan hidup</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-primary-600 flex-1"></div>
              <ArrowRight className="w-6 h-6 text-primary-500" />
              <div className="h-px bg-gradient-to-l from-transparent via-primary-300 to-primary-600 flex-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiga Pilar Kultura */}
      <section id="pilar" className="relative py-32 md:py-40 px-6 sm:px-8 overflow-hidden">
        <DecorativeCircle className="w-96 h-96 top-1/4 -right-48 opacity-30" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              Pilar Utama
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Tiga Pilar Kultura
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-10 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/30 rounded-full -mr-16 -mt-16"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg relative z-10">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">Pelaku Budaya</h3>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                Individu dan komunitas yang menjaga dan mengembangkan praktik budaya.
              </p>
            </div>
            <div className="group p-10 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/30 rounded-full -mr-16 -mt-16"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg relative z-10">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">Karya Budaya</h3>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                Hasil proses kreatif dan pengetahuan budaya.
              </p>
            </div>
            <div className="group p-10 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/30 rounded-full -mr-16 -mt-16"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg relative z-10">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">Peristiwa Budaya</h3>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                Aktivitas dan perjumpaan yang menghidupkan ekosistem budaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prinsip Produk */}
      <section className="relative py-32 md:py-40 px-6 sm:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <GeometricShape className="top-10 left-10 hidden lg:block" />
        <OrnamentShape className="bottom-20 right-20 hidden md:block" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              Prinsip
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Prinsip Kultura
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary-50 rounded-full -ml-12 -mt-12 group-hover:scale-150 transition-transform"></div>
              <h3 className="text-xl font-bold mb-3 text-primary-600 relative z-10">Pelaku-sentris</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Semua fitur berangkat dari pelaku budaya sebagai pusat ekosistem.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary-50 rounded-full -ml-12 -mt-12 group-hover:scale-150 transition-transform"></div>
              <h3 className="text-xl font-bold mb-3 text-primary-600 relative z-10">Living Archive</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Dokumentasi bersifat berkelanjutan, bukan sekadar arsip statis.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary-50 rounded-full -ml-12 -mt-12 group-hover:scale-150 transition-transform"></div>
              <h3 className="text-xl font-bold mb-3 text-primary-600 relative z-10">Low Barrier</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Mudah diakses dan digunakan oleh semua kalangan.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary-50 rounded-full -ml-12 -mt-12 group-hover:scale-150 transition-transform"></div>
              <h3 className="text-xl font-bold mb-3 text-primary-600 relative z-10">Human-first</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Narasi lebih penting dari elemen visual berlebihan.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden group md:col-span-2">
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary-50 rounded-full -ml-12 -mt-12 group-hover:scale-150 transition-transform"></div>
              <h3 className="text-xl font-bold mb-3 text-primary-600 relative z-10">Scalable Ecosystem</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Dapat tumbuh lintas wilayah dan generasi, membentuk ekosistem yang berkembang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Pengguna */}
      <section className="relative py-32 md:py-40 px-6 sm:px-8 overflow-hidden">
        <DecorativePattern />
        <DecorativeCircle className="w-80 h-80 bottom-0 left-0 opacity-20" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              Target Pengguna
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Untuk Siapa Kultura?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-10 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl border-2 border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100/20 rounded-full -mr-20 -mt-20"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg relative z-10">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 relative z-10">Pelaku Budaya</h3>
              <ul className="space-y-3 text-gray-600 relative z-10">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Individu</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Komunitas / sanggar</span>
                </li>
              </ul>
            </div>
            <div className="group p-10 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl border-2 border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100/20 rounded-full -mr-20 -mt-20"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg relative z-10">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 relative z-10">Volunteer</h3>
              <ul className="space-y-3 text-gray-600 relative z-10">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Pelajar</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Mahasiswa</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Anak muda dengan minat budaya</span>
                </li>
              </ul>
            </div>
            <div className="group p-10 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl border-2 border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100/20 rounded-full -mr-20 -mt-20"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg relative z-10">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 relative z-10">Publik</h3>
              <ul className="space-y-3 text-gray-600 relative z-10">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Penikmat budaya</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Peneliti</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Media & kreator konten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Kultura Penting */}
      <section className="relative py-32 md:py-40 px-6 sm:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <OrnamentShape className="top-20 right-20 hidden lg:block" />
        <GeometricShape className="bottom-32 left-10 hidden md:block" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              Nilai
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Mengapa Kultura Penting
            </h2>
          </div>
          <div className="space-y-8 max-w-5xl">
            <div className="pl-8 border-l-4 border-primary-600 py-4 hover:bg-primary-50/50 rounded-r-xl transition-colors relative group">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Budaya adalah praktik hidup, bukan sekadar arsip</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kultura memahami budaya sebagai sesuatu yang hidup dan terus berkembang, bukan hanya koleksi masa lalu.
              </p>
            </div>
            <div className="pl-8 border-l-4 border-primary-600 py-4 hover:bg-primary-50/50 rounded-r-xl transition-colors relative group">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Dokumentasi adalah bentuk keberlanjutan</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dengan mendokumentasikan praktik budaya, kita memastikan pengetahuan dan nilai-nilai dapat diwariskan.
              </p>
            </div>
            <div className="pl-8 border-l-4 border-primary-600 py-4 hover:bg-primary-50/50 rounded-r-xl transition-colors relative group">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Anak muda adalah penjaga relevansi budaya</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Generasi muda membawa perspektif baru yang membuat budaya tetap relevan dan bermakna di masa kini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ajakan Volunteer */}
      <section id="volunteer" className="relative py-32 md:py-40 px-6 sm:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <DecorativePattern />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              Bergabung
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Terlibat Bersama Kultura
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-16 leading-relaxed">
              Kultura membuka ruang bagi pelajar dan mahasiswa untuk terlibat sebagai volunteer.
              Bersama, kita menjaga budaya tetap hidup dan bermakna.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Search className="w-7 h-7 text-white mx-auto mb-3" />
                <p className="text-sm font-semibold text-white">Riset</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Archive className="w-7 h-7 text-white mx-auto mb-3" />
                <p className="text-sm font-semibold text-white">Dokumentasi</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <BookOpen className="w-7 h-7 text-white mx-auto mb-3" />
                <p className="text-sm font-semibold text-white">Konten</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Code className="w-7 h-7 text-white mx-auto mb-3" />
                <p className="text-sm font-semibold text-white">Teknologi</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 md:col-start-1 lg:col-start-auto">
                <Users2 className="w-7 h-7 text-white mx-auto mb-3" />
                <p className="text-sm font-semibold text-white">Komunitas</p>
              </div>
            </div>
            <button className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              Daftar Volunteer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 sm:px-8 border-t border-gray-200 bg-white overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-50 rounded-full -mr-32 -mb-32 opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Kultura" className="h-9" />
              <span className="text-gray-600 font-medium">Ruang Hidup Budaya Nusantara</span>
            </div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Kultura</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
