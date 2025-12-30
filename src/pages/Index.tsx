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

      {/* Benefits Section */}
      <section className="px-5 md:px-20 py-16 md:py-24 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-center mb-12 md:mb-16 tracking-tight">
            Why People Love This
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background/10 backdrop-blur rounded-3xl p-8 md:p-10 border border-background/20 hover:bg-background/15 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-vibrant-mint rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-background/70 font-serif leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-5 md:px-20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-vibrant-yellow rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border-2 border-foreground">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-8 tracking-tight">
              What You'll Get
            </h2>

            <div className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-vibrant-yellow" />
                  </div>
                  <span className="text-lg md:text-xl font-serif">{feature}</span>
                </div>
              ))}
            </div>

            <NewsletterForm className="max-w-lg" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-5 md:px-20 py-16 md:py-24 bg-vibrant-mint">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-6 tracking-tight leading-[0.9]">
            Ready to Start<br />Earning More?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-serif mb-10 max-w-xl mx-auto">
            Don't let another week go by. Join our community and start building 
            your side income today.
          </p>
          <NewsletterForm className="max-w-xl mx-auto justify-center" />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-20 py-8 bg-foreground text-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-sans uppercase tracking-wider">
            © 2025 All Rights Reserved
          </p>
          <div className="flex items-center gap-6 text-sm font-sans uppercase tracking-wider">
            <a href="mailto:hello@example.com" className="hover:text-vibrant-mint transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-vibrant-mint transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
