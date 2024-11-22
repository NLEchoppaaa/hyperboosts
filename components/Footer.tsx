"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Home,
  ShoppingCart,
  HelpCircle,
  Info,
  MessageCircle,
  TrendingUp,
  LucideIcon,
  ArrowRight,
  HomeIcon,
  ShoppingBag
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "@/assests/svgs";
import { LINKS, LandingPageLinks } from "./config";

type IconComponent = LucideIcon | React.FC<{ className?: string }>;

interface IconButtonProps {
  href?: string;
  icon: IconComponent;
  label: string;
}

const Footer: React.FC = () => {
  const getIcon = (name: string): IconComponent => {
    switch (name.toLowerCase()) {
      case 'home':
        return Home;
      case 'pricing':
        return TrendingUp;
      case 'services':
        return ShoppingCart;
      case 'about':
        return Info;
      case 'support':
        return HelpCircle;
      case 'contact':
        return MessageCircle;
      default:
        return ShoppingCart;
    }
  };

  return (
    <footer className="relative mt-20">
      {/* Animated Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF8DCA]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF8DCA] to-transparent animate-shimmer" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 xl:px-6 py-16">
        <div className="flex flex-col gap-16">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <Image 
                      src="/logo.png" 
                      alt="Hyper Boosts" 
                      width={45} 
                      height={45} 
                      className="rounded-xl"
                    />
                  </motion.div>
                  <motion.span 
                    className="text-2xl font-bold PoseidonFont bg-gradient-to-r from-[#FF8DCA] to-[#FF59A2] bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Hyper Boosts
                  </motion.span>
                </div>
              </Link>
              
              <p className="text-brandGray/90 leading-relaxed">
                Hyper Boosts is a Discord shop that sells high-quality Discord boosts, tools, and more. 
                We offer a wide range of services to help you grow your community.
              </p>
              
              <p className="text-sm font-medium bg-gradient-to-r from-[#FF8DCA] to-[#FF59A2] bg-clip-text text-transparent">
                Hyper Boosts is not affiliated or endorsed by Discord in any way.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <Link href={LINKS?.DISCORD} target="_blank">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full"
                  >
                    <DiscordIcon className="w-6 h-6 text-white/70 hover:text-white" />
                  </motion.div>
                </Link>
                <Link href={LINKS?.TWITTER} target="_blank">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full"
                  >
                    <TwitterIcon className="w-6 h-6 text-white/70 hover:text-white" />
                  </motion.div>
                </Link>
                <Link href={LINKS?.TELEGRAM} target="_blank">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full"
                  >
                    <TelegramIcon className="w-6 h-6 text-white/70 hover:text-white" />
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white">Get in Touch</h3>
              <div className="space-y-4">
                <Link href={LINKS?.DISCORD}>
                  <div className="flex items-center gap-3 p-3 rounded-lg group">
                    <div className="p-2 rounded-lg">
                      <DiscordIcon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white group-hover:text-[#FF8DCA] transition-colors duration-200">
                        Join our Discord
                      </span>
                      <span className="text-xs text-brandGray/60">24/7 Customer Support</span>
                    </div>
                  </div>
                </Link>

                <Link href={LINKS?.TELEGRAM}>
                  <div className="flex items-center gap-3 p-3 rounded-lg group">
                    <div className="p-2 rounded-lg">
                      <TelegramIcon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white group-hover:text-[#FF8DCA] transition-colors duration-200">
                        Telegram Channel
                      </span>
                      <span className="text-xs text-brandGray/60">Updates & Announcements</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white">Quick Links</h3>
              <nav className="grid grid-cols-1 gap-3 pl-2">
                {LandingPageLinks?.map((link: { name: string, link: string }, index: number) => {
                  const Icon = getIcon(link.name);
                  
                  return (
                    <Link 
                      href={link.link} 
                      key={index}
                      className="w-full"
                    >
                      <motion.div 
                        className="group flex items-center gap-3 text-brandGray hover:text-white transition-colors duration-200 w-full"
                        whileHover={{ 
                          x: 10,
                          transition: { duration: 0.2, ease: "easeOut" }
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            initial={{ opacity: 0.7 }}
                            animate={{ opacity: 0.7 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <Icon className="w-4 h-4 group-hover:text-[#FF8DCA] transition-colors duration-200" />
                          </motion.div>
                          <span className="text-sm">{link.name}</span>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-auto"
                        >
                          <ArrowRight className="w-4 h-4 text-[#FF8DCA]" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
            <p className="text-sm text-brandGray/60">
              &copy; {new Date().getFullYear()} Hyper Boosts. All rights reserved.
            </p>
            
            <Link 
              href="https://fakecrime.bio/satorultc" 
              target="_blank"
              className="group"
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 8px rgb(255, 141, 202)"
                }}
                className="relative px-4 py-2 rounded-lg overflow-hidden"
              >
                <motion.div 
                  className="relative flex items-center gap-2"
                  whileHover={{
                    color: "#FF8DCA",
                    transition: { duration: 0.3 }
                  }}
                >
                  <span className="text-sm text-brandGray/60">Edited by</span>
                  <motion.span 
                    className="text-sm font-medium bg-gradient-to-r from-[#FF8DCA] to-[#FF59A2] bg-clip-text text-transparent"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    Satoru
                  </motion.span>
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
