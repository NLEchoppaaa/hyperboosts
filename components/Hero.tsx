"use client";

import React from 'react';
import { ArrowRight, Sparkles, ShoppingBag} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import { LINKS } from './config';
import dynamic from 'next/dynamic';
import DiscordNitroLottieAnimation from '@/assests/LOTTIE/discord-nitro-lottie.json';
import RevealAnimation from './framer/RevealAnimation';   

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const BeamEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[30%] left-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-[120px] w-full rotate-[-8deg] bg-gradient-to-r from-transparent via-[#FF8DCA]/20 to-transparent blur-2xl" />
        <div className="absolute h-[60px] w-full rotate-[-8deg] bg-gradient-to-r from-transparent via-[#FF8DCA]/10 to-transparent blur-xl" />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0f0f0f]">
      <BeamEffect />
      <div className="container relative mx-auto px-4">
        <div className="flex min-h-[90vh] flex-col items-center justify-center">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative z-10 flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
              <RevealAnimation delay={0.1}>
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
              </RevealAnimation>


              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  <div className="block">
                    <RevealAnimation delay={0.3} className="inline-block mr-2">
                      <span>Boost</span>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4} className="inline-block mr-2">
                      <span>Your</span>
                    </RevealAnimation>
                  </div>
                  <div className="block">
                    <RevealAnimation delay={0.5} className="inline-block mr-2">
                      <span>Server</span>
                    </RevealAnimation>
                    <RevealAnimation delay={0.6} className="inline-block mr-2">
                      <span>The</span>
                    </RevealAnimation>
                    <RevealAnimation delay={0.7} className="inline-block mr-2">
                      <span className="bg-gradient-to-r from-[#ff8dca] to-[#ff59a2] bg-clip-text text-transparent">Right</span>
                    </RevealAnimation>
                    <RevealAnimation delay={0.8} className="inline-block mr-2">
                      <span className="bg-gradient-to-r from-[#ff8dca] to-[#ff59a2] bg-clip-text text-transparent">Way</span>
                    </RevealAnimation>
                  </div>
                  <div className="block mt-1">
                    <RevealAnimation delay={0.9} className="inline-block mr-2">
                      <span>at</span>
                    </RevealAnimation>
                    <RevealAnimation delay={1.0} className="inline-block mr-2">
                      <span>Discounted</span>
                    </RevealAnimation>
                    <RevealAnimation delay={1.1} className="inline-block">
                      <span>Rates!</span>
                    </RevealAnimation>
                  </div>
                </h1>
              
                <RevealAnimation delay={0.6}>
                  <p className="mx-auto max-w-xl text-lg text-muted-foreground/90 lg:mx-0">
                    Welcome to Hyper Boosts, your ultimate destination for unleashing the full 
                    potential of your Discord server! Introducing our cutting-edge Nitro Tokens 
                    and Server Boosting service, designed to elevate your Discord experience to 
                    new heights.
                  </p>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.7}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/#products">
                    <Button 
                      size="lg"
                      className="group relative w-44 overflow-hidden bg-gradient-to-r from-[#ff8dca] to-[#ff59a2] text-white flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform-gpu hover:scale-105 hover:shadow-lg hover:shadow-[#ff8dca]/25"
                    >
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        Shop Now
                        <ArrowRight 
                          className="h-4 w-4 transform-gpu transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                        />
                      </div>
                    </Button>
                  </Link>
                  
                  <Link href={LINKS.DISCORD}>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="group relative w-44 border-[#ff8dca]/20 bg-gradient-to-r from-[#ff8dca]/[0.05] to-[#ff59a2]/[0.05] backdrop-blur-sm flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform-gpu hover:scale-105 hover:border-[#ff8dca]/30 hover:from-[#ff8dca]/10 hover:to-[#ff59a2]/10"
                    >
                      <div className="flex items-center gap-2">
                        <DiscordLogoIcon className="h-5 w-5 text-white" />
                        Join Discord
                      </div>
                    </Button>
                  </Link>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={1.0}>
                <div className="grid w-full grid-cols-3 gap-4">
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
              </RevealAnimation>
              </div>

<RevealAnimation delay={0.5}>
  <div className="relative hidden lg:block">
    <div className="absolute left-1/2 top-[55%] h-[550px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#ff8dca]/20 via-[#ff59a2]/20 to-[#ff8dca]/20 blur-3xl" />
    <Image
      className="relative mx-auto h-auto w-[75%] max-w-[400px] drop-shadow-2xl"
      alt="Discord mobile interface"
      src="/PNG/phone.png"
      width={1000}
      height={1935}
      priority
      draggable={false}
    />
  </div>
</RevealAnimation>
</div>
</div>
</div>
</section>
);
};

export default Hero;
