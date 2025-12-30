import { Check, DollarSign, Clock, Zap } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

const benefits = [
  {
    icon: Clock,
    title: "Work When You Want",
    description: "No schedules, no bosses. Earn money on your own terms.",
  },
  {
    icon: DollarSign,
    title: "Real Income Potential",
    description: "Turn spare hours into extra cash that adds up fast.",
  },
  {
    icon: Zap,
    title: "Start Today",
    description: "No experience needed. Get started in minutes, not days.",
  },
];

const features = [
  "Flexible opportunities that fit your schedule",
  "Proven methods from real side-hustlers",
  "Weekly tips to maximize your earnings",
  "Exclusive deals and early access",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-5 md:px-20 pt-16 md:pt-24 pb-16 md:pb-20">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-vibrant-mint rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-vibrant-yellow rounded-full blur-3xl opacity-30" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-vibrant-mint/30 border-2 border-foreground rounded-full px-5 py-2 mb-8">
            <DollarSign className="w-4 h-4" />
            <span className="font-sans font-bold text-sm uppercase tracking-wider">
              Free Side Hustle Guide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-extrabold uppercase leading-[0.85] tracking-[-2px] mb-6">
            Start Earning
            <span className="block text-vibrant-mint">In Your</span>
            <span className="block">Free Time</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/80 max-w-2xl mx-auto mb-10 font-serif">
            Join thousands of people who turned their spare hours into real income. 
            Get weekly tips, proven strategies, and exclusive opportunities delivered 
            straight to your inbox.
          </p>

          {/* Newsletter CTA */}
          <div className="max-w-xl mx-auto mb-8">
            <NewsletterForm
              className="justify-center"
              inputClassName="border-b-2 text-center md:text-left"
            />
          </div>

          <p className="text-sm text-foreground/60 font-sans">
            ✓ Free forever &nbsp; ✓ Unsubscribe anytime &nbsp; ✓ No spam
          </p>
        </div>
      </section>

    </div>
  );
};

export default Index;
