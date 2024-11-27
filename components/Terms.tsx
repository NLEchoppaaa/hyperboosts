import React, { ReactNode } from "react";
import RevealAnimation from "./framer/RevealAnimation";

interface SectionProps {
  children: ReactNode;
}

interface SectionTitleProps {
  children: ReactNode;
}

interface ListProps {
  children: ReactNode;
}

interface ListItemProps {
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="space-y-6">
      {children}
    </div>
  );
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <RevealAnimation delay={0.2}>
    <h2 className="text-2xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-[#FF8DCA] via-[#FF59A2] to-[#FF8DCA] bg-clip-text text-transparent">
      {children}
    </h2>
  </RevealAnimation>
);

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <div className="space-y-4">
      {React.Children.map(children, (child, index) => (
        <RevealAnimation key={index} delay={0.3 + index * 0.1}>
          {child}
        </RevealAnimation>
      ))}
    </div>
  );
};

const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <div className="flex gap-4 items-start">
    <div className="mt-2">
      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FF8DCA] via-[#FF59A2] to-[#FF8DCA]" />
    </div>
    <div className="text-muted-foreground/90 leading-relaxed flex-1">
      {children}
    </div>
  </div>
);

const Terms: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <RevealAnimation delay={0.1}>
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#FF59A2]/10 blur-[100px]" />
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#FF8DCA]/10 blur-[100px]" />
        </RevealAnimation>
      </div>

      {/* Hero Section */}
      <div className="py-20 space-y-8 relative">  
        <div className="space-y-3">
          <RevealAnimation delay={0.1}>
            <div className="text-sm font-semibold tracking-[0.2em] text-[#FF59A2] uppercase">
              Terms of Service
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#FF8DCA] via-[#FF59A2] to-[#FF8DCA] bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
          </RevealAnimation>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FF8DCA]/20 via-[#FF59A2]/20 to-transparent" />
          <RevealAnimation delay={0.3}>
            <span className="text-sm font-medium text-muted-foreground/90 whitespace-nowrap">
              Last Updated: April 5, 2024
            </span>
          </RevealAnimation>
          <div className="h-[1px] w-12 bg-[#FF8DCA]/20" />
        </div>
      </div>

      <div className="space-y-16 relative">
        {/* Introduction */}
        <Section>
          <RevealAnimation delay={0.4}>
            <p className="text-lg text-muted-foreground/90 leading-relaxed">
              By utilizing our services or products, you agree to comply with these Terms of Service. 
              We recommend reviewing these terms thoroughly to ensure complete understanding.
            </p>
          </RevealAnimation>
        </Section>

        {/* Commitments */}
        <Section>
          <SectionTitle>Our Commitments</SectionTitle>
          <List>
            <ListItem>
              Delivery completion within 1-48 hours, subject to technical feasibility
            </ListItem>
            <ListItem>
              Strict adherence to legal data retention policies
            </ListItem>
            <ListItem>
              Guaranteed compliance with platform standards, ensuring safe usage without risk of sanctions
            </ListItem>
          </List>
        </Section>

        {/* Server Boosting */}
        <Section>
          <SectionTitle>Server Boosting</SectionTitle>
          <List>
            <ListItem>
              3-Month boosts duration: 85-91 days<br />
              1-Month boosts duration: 25-31 days
            </ListItem>
            <ListItem>
              Disable anti-raid systems and bots before boost application
            </ListItem>
            <ListItem>
              No refunds for account removals due to server security measures
            </ListItem>
            <ListItem>
              Boosts cannot be transferred between servers
            </ListItem>
            <ListItem>
              Service interruptions due to platform actions are beyond our control
            </ListItem>
          </List>
        </Section>

        {/* Nitro Tokens */}
        <Section>
          <SectionTitle>Nitro Tokens</SectionTitle>
          <List>
            <ListItem>
              All tokens pre-validated; no warranty for post-purchase invalidation
            </ListItem>
            <ListItem>
              CAPTCHA-free status cannot be guaranteed
            </ListItem>
            <ListItem>
              Tokens intended for server boosting only; not for personal account use
            </ListItem>
            <ListItem>
              Platform-initiated terminations are not eligible for compensation
            </ListItem>
            <ListItem>
              1-Month tokens valid for 25-31 days
            </ListItem>
          </List>
        </Section>

        {/* Tools & Bots */}
        <Section>
          <SectionTitle>Tools & Bots</SectionTitle>
          <List>
            <ListItem>
              Updates provided when possible; no guarantees for patched services
            </ListItem>
            <ListItem>
              No compensation for security compromises
            </ListItem>
            <ListItem>
              We reserve the right to terminate services; "lifetime" refers to active platform duration
            </ListItem>
            <ListItem>
              License resale requires explicit authorization
            </ListItem>
          </List>
        </Section>

        {/* Privacy */}
        <Section>
          <SectionTitle>Privacy Policy</SectionTitle>
          <List>
            <ListItem>
              Data collection limited to essential platform requirements
            </ListItem>
          </List>
        </Section>

        {/* Refunds */}
        <Section>
          <SectionTitle>Refund & Replacement Policy</SectionTitle>
          <List>
            <ListItem>
              Refunds limited to service errors or delivery failures
            </ListItem>
            <ListItem>
              Delayed orders eligible for refund
            </ListItem>
            <ListItem>
              Unauthorized payment reversals result in permanent service restriction
            </ListItem>
          </List>
        </Section>

        {/* Disclaimer */}
        <Section>
          <RevealAnimation delay={0.8}>
            <p className="text-sm text-muted-foreground/60 italic">
              Disclaimer: This website is not affiliated with, authorized, maintained, sponsored or endorsed by Discord Inc. (discord.com) or any of its affiliates or subsidiaries.
            </p>
          </RevealAnimation>
        </Section>
      </div>
    </div>
  );
};

export default Terms;
