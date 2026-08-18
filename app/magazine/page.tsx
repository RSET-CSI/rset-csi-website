"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaDownload } from "react-icons/fa6";

export default function MagazinePage() {
  return (
    <main className="min-h-screen text-white flex flex-col relative overflow-hidden select-none">
      {/* Premium Background Gradients matching Hero Section */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(187, 108, 230, 0.2) 0%, rgba(187, 108, 230, 0) 45%),
            radial-gradient(circle at 90% 80%, rgba(56, 72, 241, 0.2) 0%, rgba(56, 72, 241, 0) 45%),
            linear-gradient(to bottom right, #060214, #0b0521)`,
        }}
      />

      {/* Grid Overlay for subtle tech pattern */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Header Bar */}
      <header className="w-full h-20 border-b border-white/[0.08] bg-black/40 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
            <img 
              src="/images/csi_logo.png" 
              alt="CSI Logo" 
              className="h-9 w-9 md:h-11 md:w-11 object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-bold tracking-wide text-neutral-100 group-hover:text-purple-400 transition-colors">
                RSET CSI Student Branch
              </span>
              <span className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-widest">
                Official Magazine
              </span>
            </div>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link 
            href="/"
            className="flex items-center space-x-2 text-xs md:text-sm text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.03] px-3 md:px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <FaArrowLeft className="text-xs" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
          <a
            href="/Magazine.pdf"
            download="RSET_CSI_Club_Magazine.pdf"
            className="flex items-center space-x-2 text-xs md:text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-4 md:px-5 py-2 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-[1px]"
          >
            <FaDownload className="text-xs" />
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="flex-1 flex flex-col justify-center items-center relative z-10 w-full">
        {/* Desktop & Tablet PDF Embed */}
        <div className="hidden md:flex w-full h-[calc(100vh-80px)] max-w-7xl mx-auto px-6 py-6 flex-col">
          <div className="w-full flex-1 rounded-2xl overflow-hidden border border-white/[0.08] bg-black/50 shadow-2xl relative group">
            {/* Elegant Loading indicator behind the iframe */}
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
              <p className="text-sm text-neutral-400">Loading Magazine Viewer...</p>
            </div>
            
            <iframe
              src="/Magazine.pdf#toolbar=1"
              className="w-full h-full border-none"
              title="CSI Club Magazine"
            />
          </div>
        </div>

        {/* Mobile Custom Premium Layout */}
        <div className="md:hidden flex flex-col justify-center items-center px-6 py-12 text-center w-full min-h-[calc(100vh-80px)]">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] p-8 rounded-3xl max-w-md w-full shadow-2xl relative overflow-hidden flex flex-col items-center">
            {/* Visual glow element */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl -z-10" />

            {/* Book Icon Visual */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-10 h-10 text-purple-400 animate-pulse"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-neutral-100 mb-2">
              CSI Club Magazine
            </h2>
            <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-4">
              Techna XV Anniversary Edition
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              This special interactive anniversary edition contains high-resolution publication materials (119 MB). For the best interactive viewing experience, open this page on a desktop, or download the full PDF to read anytime.
            </p>

            <div className="w-full space-y-3">
              <a
                href="/Magazine.pdf"
                download="RSET_CSI_Club_Magazine.pdf"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20"
              >
                <FaDownload />
                <span>Download PDF (119 MB)</span>
              </a>
              
              <Link
                href="/"
                className="w-full flex items-center justify-center space-x-2 text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.02] py-3 px-4 rounded-xl transition-all duration-300"
              >
                <FaArrowLeft className="text-xs" />
                <span>Back to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
