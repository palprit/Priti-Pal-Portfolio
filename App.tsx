import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { InfiniteCarousel } from './components/InfiniteCarousel';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Toaster } from './components/ui/sonner';
import { CursorTrail } from './components/CursorTrail';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Toaster />
      <CursorTrail />
      <Navigation />
      
      <Hero />
      
      {/* Elegant separator */}
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-[#2C5AA0] w-full opacity-20"></div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="4" fill="#2C5AA0" opacity="0.3"/>
            </svg>
            <div className="h-px bg-[#2C5AA0] w-full opacity-20"></div>
          </div>
        </div>
      </div>
      
      <Skills />
      
      {/* Elegant separator */}
      <div className="pt-6 pb-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-[#2C5AA0] w-full opacity-20"></div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="4" fill="#2C5AA0" opacity="0.3"/>
            </svg>
            <div className="h-px bg-[#2C5AA0] w-full opacity-20"></div>
          </div>
        </div>
      </div>

      <InfiniteCarousel />

      {/* Elegant separator */}
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-[#2C5AA0] w-full opacity-20"></div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="4" fill="#2C5AA0" opacity="0.3"/>
            </svg>
            <div className="h-px bg-[#2C5AA0] w-full opacity-20"></div>
          </div>
        </div>
      </div>

      <About />
      
      <Contact />

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[#C4BFB4]">
        <p className="text-sm" style={{ color: '#6B6B6B' }}>
          © 2024 Priti Pal. Designed & Developed with ♥
        </p>
        <p className="text-xs mt-2 handwritten" style={{ color: '#2C5AA0' }}>
          Thanks for visiting!
        </p>
      </footer>
    </div>
  );
}
