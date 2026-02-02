"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12",
          scrolled || isOpen ? "bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white tracking-tight z-50 relative">
            Revan.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#portfolio">Portfolio</NavLink>
            <NavLink href="/career">Career</NavLink>
            
            <Link
              href="/#contact"
              className="px-5 py-2 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0B0F19] md:hidden pt-24 px-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-serif font-light">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/#portfolio" onClick={() => setIsOpen(false)}>Portfolio</MobileNavLink>
              <MobileNavLink href="/career" onClick={() => setIsOpen(false)}>Career</MobileNavLink>
              
              <div className="h-px bg-white/10 w-full my-4" />
              
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-xl text-brand-teal"
              >
                Contact Us
                <span className="p-2 bg-white/5 rounded-full">
                  <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
            </div>

            {/* Decorative background blobs */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-blue/10 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block py-2 text-gray-300 hover:text-white active:text-white transition-colors border-b border-transparent hover:border-white/10"
    >
      {children}
    </Link>
  );
}
