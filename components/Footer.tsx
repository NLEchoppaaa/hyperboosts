import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, MessageCircle, Send, ShoppingCart, MessageSquare, Home, Users, HelpCircle } from "lucide-react";
import { LINKS, LandingPageLinks } from "./config";
import RevealAnimation from "./framer/RevealAnimation";

const Footer = () => {
  return (
    <footer className="relative mt-16 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-xl border-t border-white/5 overflow-visible">
      {/* Animated gradient border */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF8DCA] to-transparent animate-gradient-x" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <RevealAnimation screenReveal={true} delay={0.2}>
            <div className="text-center">
              <Link href="/" className="inline-block">
                <div className="flex items-center gap-3 group hover:scale-[1.02] transition-all duration-300">
                  <Image 
                    src="/logo.png" 
                    alt="Hyper Boosts" 
                    width={38} 
                    height={38} 
                    className="rounded-xl brightness-110"
                  />
                  <span className="text-xl text-white font-bold tracking-tight">
                    Hyper Boosts
                  </span>
                </div>
              </Link>
              
              <p className="mt-4 max-w-md mx-auto text-sm font-medium text-gray-300 leading-relaxed">
                Premium Discord boosting services with instant delivery and 24/7 dedicated support.
              </p>

              {/* Quick Action Buttons */}
              <div className="mt-6 flex justify-center flex-wrap gap-3">
                <Link href={LINKS?.DISCORD}>
                  <button className="group relative px-5 py-2.5 bg-gradient-to-r from-[#FF8DCA] to-[#FF59A2] rounded-lg text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,141,202,0.3)] hover:-translate-y-0.5">
                    <span className="relative flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Join Discord
                    </span>
                  </button>
                </Link>
                <Link href="/#products">
                  <button className="group relative px-5 py-2.5 bg-white/5 rounded-lg text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:-translate-y-0.5">
                    <span className="relative flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      View Services
                    </span>
                  </button>
                </Link>
              </div>

              {/* Navigation Links */}
              <RevealAnimation screenReveal={true} delay={0.4} className="w-full mt-8">
                <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
                  {LandingPageLinks?.map((link, index) => (
                    <Link href={link.link} key={index}>
                      <div className="group text-gray-300 hover:text-white transition-all duration-200">
                        <span className="text-sm font-medium py-1 relative flex items-center gap-2 hover:text-[#FF8DCA]">
                          {link.name}
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-[#FF8DCA] to-[#FF59A2] group-hover:w-full transition-all duration-300 ease-out" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </RevealAnimation>

              {/* Footer Bottom */}
              <RevealAnimation screenReveal={true} delay={0.6} className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-xs font-medium text-gray-400">
                  &copy; {new Date().getFullYear()} Hyper Boosts. All rights reserved.
                </p>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            {/* Brand Section */}
            <RevealAnimation screenReveal={true} delay={0.2} className="max-w-sm">
              <Link href="/">
                <div className="flex items-center gap-3 group hover:scale-[1.02] transition-all duration-300">
                  <Image 
                    src="/logo.png" 
                    alt="Hyper Boosts" 
                    width={38} 
                    height={38} 
                    className="rounded-xl brightness-110"
                  />
                  <span className="text-xl text-white font-bold tracking-tight">
                    Hyper Boosts
                  </span>
                </div>
              </Link>
              
              <p className="mt-5 text-sm font-medium text-gray-300 leading-relaxed">
                Premium Discord boosting services with instant delivery and 24/7 dedicated support. Experience the difference with Hyper Boosts.
              </p>

              {/* Disclaimer */}
              <p className="mt-4 text-xs font-medium bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-clip-text text-transparent">
                Hyper Boosts is not affiliated with Discord by any means.
              </p>

              {/* Quick Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={LINKS?.DISCORD}>
                  <button className="group relative px-5 py-2.5 bg-gradient-to-r from-[#FF8DCA] to-[#FF59A2] rounded-lg text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,141,202,0.3)] hover:-translate-y-0.5">
                    <div className="absolute inset-0 bg-white/20 translate-y-8 group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Join Discord
                    </span>
                  </button>
                </Link>
                <Link href="/#products">
                  <button className="group relative px-5 py-2.5 bg-white/5 rounded-lg text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:-translate-y-0.5">
                    <span className="relative flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      View Services
                    </span>
                  </button>
                </Link>
              </div>
            </RevealAnimation>

            {/* Navigation Links Grid */}
            <RevealAnimation screenReveal={true} delay={0.4} className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
              {/* Navigation Links */}
              <div>
                <h3 className="text-sm text-[#FF8DCA] font-semibold mb-4 flex items-center gap-2">
                  Navigation
                  <div className="h-px flex-1 bg-gradient-to-r from-[#FF8DCA]/50 to-transparent ml-2" />
                </h3>
                <div className="space-y-2">
                  {LandingPageLinks?.map((link, index) => (
                    <Link href={link.link} key={index}>
                      <div className="group flex items-center text-gray-300 hover:text-white transition-all duration-200">
                        <span className="text-sm font-medium py-1 relative flex items-center gap-2">
                          {/* Dynamic icon based on link name */}
                          {link.name === "Home" && <Home className="w-4 h-4 text-[#FF8DCA]" />}
                          {link.name === "Shop" && <ShoppingCart className="w-4 h-4 text-[#FF8DCA]" />}
                          {link.name === "About" && <Users className="w-4 h-4 text-[#FF8DCA]" />}
                          {link.name}
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-[#FF8DCA] to-[#FF59A2] group-hover:w-full transition-all duration-300 ease-out" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm text-[#FF8DCA] font-semibold mb-4 flex items-center gap-2">
                  Support
                  <div className="h-px flex-1 bg-gradient-to-r from-[#FF8DCA]/50 to-transparent ml-2" />
                </h3>
                <div className="space-y-2">
                  <Link href={LINKS?.DISCORD}>
                    <div className="group flex items-center text-gray-300 hover:text-white transition-all duration-200">
                      <span className="text-sm font-medium py-1 relative flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#FF8DCA]" />
                        Discord
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-[#FF8DCA] to-[#FF59A2] group-hover:w-full transition-all duration-300 ease-out" />
                      </span>
                    </div>
                  </Link>
                  <Link href={LINKS?.TELEGRAM}>
                    <div className="group flex items-center text-gray-300 hover:text-white transition-all duration-200">
                      <span className="text-sm font-medium py-1 relative flex items-center gap-2">
                        <Send className="w-4 h-4 text-[#FF8DCA]" />
                        Telegram
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-[#FF8DCA] to-[#FF59A2] group-hover:w-full transition-all duration-300 ease-out" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-sm text-[#FF8DCA] font-semibold mb-4 flex items-center gap-2">
                  Contact
                  <div className="h-px flex-1 bg-gradient-to-r from-[#FF8DCA]/50 to-transparent ml-2" />
                </h3>
                <div>
                  <Link href={LINKS?.DISCORD}>
                    <div className="group flex items-center text-gray-300 hover:text-white transition-all duration-200 cursor-pointer">
                      <span className="text-sm font-medium py-1 relative flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-[#FF8DCA]" />
                        24/7 Support
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-[#FF8DCA] to-[#FF59A2] group-hover:w-full transition-all duration-300 ease-out" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>

{/* Footer Bottom */}
<div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
  <p className="text-xs font-medium text-gray-400">
    &copy; {new Date().getFullYear()} Hyper Boosts. All rights reserved.
  </p>
  
  <Link href="https://fakecrime.bio/satorultc" target="_blank">
    <div className="group relative px-4 py-1.5 bg-gradient-to-r from-[#FF8DCA]/10 to-[#FF59A2]/10 hover:from-[#FF8DCA]/20 hover:to-[#FF59A2]/20 rounded-full flex items-center gap-2 transition-all duration-300">
      <Sparkles className="w-3.5 h-3.5 text-[#FF8DCA]" />
      <span className="text-xs font-medium bg-gradient-to-r from-white via-[#FF8DCA] to-white bg-clip-text text-transparent">
        Developed by Satoru
      </span>
      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#FF8DCA]" />
    </div>
  </Link>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
