"use client";

import { cn } from "@/lib/utils";
import {
  HandCoinsIcon,
  GemIcon,
  BookCheckIcon,
  ScaleIcon,
  MessageCircleMoreIcon,
  SunMoonIcon,
  WorkflowIcon,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import RevealAnimation from "./framer/RevealAnimation";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeaturesData: Feature[] = [
  {
    icon: <HandCoinsIcon size={30} className="text-[#FF59A2]" />,
    title: "Seamless Payment",
    description:
      "Ordering from us is a breeze. We accept all major cryptocurrencies, Cash App, PayPal, Venmo, cards, and gift cards for your convenience.",
  },
  {
    icon: <GemIcon size={30} className="text-[#FF8DCA]" />,
    title: "Cheap Prices",
    description:
      "Our ultimate motto is to ensure that everyone, regardless of their location, can access high-quality services at an affordable price.",
  },
  {
    icon: <BookCheckIcon size={30} className="text-[#FF59A2]" />,
    title: "Trusted & Reputable Seller",
    description:
      "Our customers consistently provide positive feedback, praising not only our top-tier services but also our premium support.",
  },
  {
    icon: <ScaleIcon size={30} className="text-[#FF8DCA]" />,
    title: "Legal Methods",
    description:
      "Rest assured, every service we offer is acquired through entirely legal channels, ensuring you peace of mind without concerns about reversals.",
  },
  {
    icon: <MessageCircleMoreIcon size={30} className="text-[#FF59A2]" />,
    title: "24/7 Support",
    description:
      "Our unmatched chat support is available 24/7, ready to address any questions or concerns you may have, every single day.",
  },
  {
    icon: <WorkflowIcon size={30} className="text-[#FF8DCA]" />,
    title: "Automatic Delivery",
    description:
      "Your order will be delivered in just around 30 seconds after placement, thanks to our ultra-fast automatic delivery system.",
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <RevealAnimation screenReveal delay={index * 0.2}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={cn(
          "relative group flex flex-col items-start p-8 rounded-lg",
          "bg-gradient-to-r from-[#FF59A2]/[0.05] to-[#FF8DCA]/[0.05]",
          "border border-[#FF59A2]/20 hover:border-[#FF59A2]/30",
          "backdrop-blur-sm transition-all duration-300 overflow-hidden"
        )}
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF59A2] to-[#FF8DCA] rounded-lg" />
        </div>

        {/* Icon container */}
        <div
          className={cn(
            "relative p-4 rounded-lg",
            "bg-gradient-to-r from-[#FF59A2]/10 to-[#FF8DCA]/20",
            "border border-[#FF59A2]/30 group-hover:border-[#FF59A2]/40"
          )}
        >
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-semibold group-hover:bg-gradient-to-r group-hover:from-[#FF59A2] group-hover:via-[#FF8DCA] group-hover:to-[#FF59A2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground/90">
          {feature.description}
        </p>
      </motion.div>
    </RevealAnimation>
  );
};

const Features: React.FC = () => {
  return (
    <RevealAnimation screenReveal>
      <div id="features" className="relative px-4 py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#FF59A2]/10 blur-[100px]" />
          <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#FF8DCA]/10 blur-[100px]" />
        </div>

        <div className="relative container mx-auto">
          <RevealAnimation screenReveal>
            <div className="flex items-center flex-col text-center mb-16">
              <div
                className={cn(
                  "inline-flex items-center gap-2 rounded-full",
                  "border border-[#FF59A2]/20 bg-gradient-to-r from-[#FF59A2]/[0.05] to-[#FF8DCA]/[0.05]",
                  "px-6 py-3 backdrop-blur-sm"
                )}
              >
                <SunMoonIcon size={16} className="text-[#FF59A2]" />
                <span className="bg-gradient-to-r from-[#FF59A2] to-[#FF8DCA] bg-clip-text text-transparent font-semibold">
                  We have exciting features!
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-[#FF59A2] to-[#FF8DCA] bg-clip-text text-transparent">
                  Premium Features
                </span>
              </h2>
            </div>
          </RevealAnimation>

          <RevealAnimation screenReveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FeaturesData.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default Features;
