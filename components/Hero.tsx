"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import { LINKS } from './config';
import dynamic from 'next/dynamic';
import DiscordNitroLottieAnimation from '@/assests/LOTTIE/discord-nitro-lottie.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-background to-background/95">
      <div className="container relative mx-auto px-4">
        <div className="flex min-h-[90vh] flex-col items-center justify-center">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div className="relative z-10 flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
              {/* Premium Badge */}
              <div 
                className={`
                  relative transition-all duration-700 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  delay-100
                `}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8dca]/20 bg-gradient-to-r from-[#ff8dca]/[0.05] to-[#ff59a2]/[0.05] px-6 py-3 backdrop-blur-sm">
                  <Sparkles className="h-5 w-5 text-[#ff8dca]" />
                  <span className="bg-gradient-to-r from-[#ff8dca] to-[#ff59a2] bg-clip-text text-lg font-medium text-transparent">
                    Premium Discord Services
                  </span>
                  <div className="absolute -right-6 -top-2 h-14 w-14">
                    <Lottie 
                      animationData={DiscordNitroLottieAnimation} 
                      loop={true}
                      className="transform transition-all duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Main Heading Group */}
              <div 
                className={`
                  relative space-y-6 transition-all duration-700 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  delay-300
                `}
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  <span className="block">Automate Your</span>
                  <span className="relative">
                    <span className="bg-gradient-to-r from-[#ff8dca] to-[#ff59a2] bg-clip-text text-transparent">
                      Discord Server Boosts
                    </span>
                  </span>
                  <span className="block mt-1">at Discounted Rates!</span>
                </h1>
                
                <p className="mx-auto max-w-xl text-lg text-muted-foreground/90 lg:mx-0">
                  Experience lightning-fast delivery and unbeatable prices for Discord 
                  enhancement services. Our automated platform ensures instant delivery 
                  with 24/7 customer support.
                </p>
              </div>

              {/* Features List */}
              <div 
                className={`
                  flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground/90 lg:justify-start 
                  transition-all duration-700 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  delay-500
                `}
              >
                {[
                  'Instant Delivery',
                  '24/7 Support',
                  'Lowest Price Guarantee'
                ].map((feature) => (
                  <div 
                    key={feature} 
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-[#ff8dca]/10 to-[#ff59a2]/10">
                      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div 
                className={`
                  flex flex-col gap-4 sm:flex-row 
                  transition-all duration-700 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  delay-700
                `}
              >
                <Link href="/#products">
                  <Button 
                    size="lg"
                    className="group relative w-44 overflow-hidden bg-gradient-to-r from-[#ff8dca] to-[#ff59a2] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff8dca]/25"
                  >
                    Start Boosting
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Link href={LINKS.DISCORD}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-44 border-[#ff8dca]/20 bg-gradient-to-r from-[#ff8dca]/[0.05] to-[#ff59a2]/[0.05] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#ff8dca]/30 hover:from-[#ff8dca]/10 hover:to-[#ff59a2]/10"
                  >
                    <DiscordLogoIcon className="mr-2 h-5 w-5 text-white" />
                    Join Discord
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div 
                className={`
                  grid w-full grid-cols-3 gap-4 
                  transition-all duration-700 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  delay-1000
                `}
              >
                {[
                  { label: 'Active Users', value: '10K+' },
                  { label: 'Servers Boosted', value: '5K+' },
                  { label: 'Response Time', value: '<1m' },
                ].map((stat) => (
                  <div 
                    key={stat.label} 
                    className="rounded-lg border border-[#ff8dca]/20 bg-gradient-to-r from-[#ff8dca]/[0.05] to-[#ff59a2]/[0.05] p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#ff8dca]/30"
                  >
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground/90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div 
              className={`
                relative hidden lg:block 
                transition-all duration-700 ease-out 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                delay-500
              `}
            >
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#ff8dca]/20 via-[#ff59a2]/20 to-[#ff8dca]/20 blur-3xl" />
                
                <Image
                  className="relative mx-auto h-auto w-[80%] max-w-[500px] drop-shadow-2xl"
                  alt="Discord mobile interface"
                  src="/PNG/phone.png"
                  width={1250}
                  height={2410}
                  priority
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
