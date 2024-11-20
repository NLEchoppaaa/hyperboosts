import { MessageCircleQuestionIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RevealAnimation from "./framer/RevealAnimation";

const FaqData = [
  {
    id: "1",
    question: "How can I get in touch with support after I bought the product?",
    answer:
      "To get in touch with support after making a purchase, you can use the built-in ticketing system. Simply visit the contact page to submit your details and we will get back to you ASAP.",
  },
  {
    id: "2",
    question: "Can I make payments using my preferred method?",
    answer:
      "Yes, we support a wide range of payment methods, including popular fiat options like Credit Cards as well as various cryptocurrencies. This enables you to make payments using the method that is most convenient for you.",
  },
  {
    id: "3",
    question: "Is it safe to make payments?",
    answer:
      "Yes, we take security very seriously. We use advanced fraud prevention measures to protect against fraudulent transactions and we securely store all payment information.",
  },
  {
    id: "4",
    question: "How do I make a purchase?",
    answer:
      "Making a purchase is easy. Simply browse the available products and add the ones you wish to purchase to your cart. When you are ready to checkout, you will be prompted to enter your payment information and complete the transaction.",
  },
  {
    id: "5",
    question: "What is the return policy for purchases?",
    answer:
      "The return policy for purchases will vary depending on the specific product being purchased. It is important to review the return policy for each product before making a purchase to ensure that you understand the terms and conditions.",
  },
];

const Faq = () => {
  return (
    <div id="faq" className="relative pt-24 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#FF59A2]/10 blur-[100px]" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#FF8DCA]/10 blur-[100px]" />
      </div>

      <div className="middle flex items-center flex-col relative">
        <RevealAnimation screenReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF59A2]/20 bg-gradient-to-r from-[#FF8DCA]/[0.05] to-[#FF59A2]/[0.05] px-6 py-3 backdrop-blur-sm">
            <MessageCircleQuestionIcon size={16} className="text-[#FF59A2]" />
            <span className="bg-gradient-to-r from-[#FF8DCA] via-[#FF59A2] to-[#FF8DCA] bg-clip-text text-transparent font-semibold">
              Got questions? We&apos;ve got answers
            </span>
          </div>
        </RevealAnimation>

        <RevealAnimation screenReveal delay={0.2}>
          <h2 className="mt-6 text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#FF8DCA] via-[#FF59A2] to-[#FF8DCA] bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
        </RevealAnimation>

        <div className="w-full max-w-7xl mt-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FaqData.map((faq, index) => (
              <RevealAnimation screenReveal delay={index * 0.2} key={faq.id}>
                <AccordionItem 
                  value={faq.id}
                  className="border border-[#FF59A2]/20 rounded-lg bg-gradient-to-r from-[#FF8DCA]/[0.05] to-[#FF59A2]/[0.05] backdrop-blur-sm transition-all duration-300 hover:border-[#FF59A2]/40"
                >
                  <AccordionTrigger 
                    className="group text-lg text-start text-white hover:bg-gradient-to-r hover:from-[#FF8DCA] hover:via-[#FF59A2] hover:to-[#FF8DCA] hover:bg-clip-text hover:text-transparent transition-all py-4 px-6 font-medium"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-white/80 text-base">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </RevealAnimation>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;