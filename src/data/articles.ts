export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  colorClass: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  content?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "CRYPTO 2024: THE INDIA GUIDE",
    excerpt: "Navigating the volatile world of cryptocurrency in India. Top exchanges, safety protocols, and how to avoid getting liquidated.",
    date: "March 20, 2025",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=800&fit=crop",
    slug: "crypto-india-guide-2024",
    colorClass: "bg-vibrant-purple",
    author: {
      name: "Maverick",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
    },
    readTime: "8 min",
    content: `
      <p>Cryptocurrency in India is a high-G maneuver. The regulatory landscape shifts fast, but the potential for gains remains massive. Here is your flight plan for 2024.</p>
      
      <h2>THE TOP EXCHANGES</h2>
      <p>Not all decks are safe to land on. We recommend sticking to compliant exchanges with robust liquidity.</p>
      <ul>
        <li><strong>CoinDCX:</strong> Good for beginners, compliant with local laws.</li>
        <li><strong>WazirX:</strong> High volume, but watch the withdrawal fees.</li>
        <li><strong>Binance (P2P):</strong> The heavy hitter, but navigate the P2P market with caution.</li>
      </ul>

      <h2>RISK MANAGEMENT</h2>
      <p>Never fly without a parachute. In crypto, that means stop-losses and cold storage.</p>
      <p><strong>Hardware Wallets:</strong> If you hold more than ₹50,000 in crypto, get a Ledger or Trezor. Not your keys, not your coins.</p>

      <h2>TAXATION (THE FLAK)</h2>
      <p>Remember the 30% flat tax on gains and the 1% TDS on transactions. Factor this into your flight path or you'll burn fuel fast.</p>
    `
  },
  {
    id: "2",
    title: "WORK FROM HOME: NO SCAMS",
    excerpt: "Legitimate remote work opportunities in India that pay in actual currency, not 'exposure' or points. Verified platforms only.",
    date: "March 18, 2025",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop",
    slug: "work-from-home-legit",
    colorClass: "bg-vibrant-blue",
    author: {
      name: "Iceman",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
    },
    readTime: "6 min"
  },
  {
    id: "3",
    title: "GOLD VS SGB: EMERGENCY FUNDS",
    excerpt: "Where to park your safety net. Physical gold has emotion, but Sovereign Gold Bonds pay you interest to hold them.",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1610375460993-441e97f8d6fc?w=800&h=800&fit=crop",
    slug: "gold-vs-sgb-investment",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Maverick",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
    },
    readTime: "5 min"
  },
  {
    id: "4",
    title: "TRADING DESK UNDER ₹50K",
    excerpt: "You don't need a Bloomberg terminal. A solid laptop, a reliable monitor, and a distraction-free environment are your weapons.",
    date: "March 10, 2025",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=800&fit=crop",
    slug: "trading-desk-setup-budget",
    colorClass: "bg-vibrant-mint",
    author: {
      name: "Iceman",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
    },
    readTime: "7 min"
  },
  {
    id: "5",
    title: "CRACKING THE FAANG INTERVIEW",
    excerpt: "The cheat sheet for landing high-paying tech jobs. Data structures, system design, and the soft skills that close the deal.",
    date: "March 05, 2025",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
    slug: "faang-interview-guide",
    colorClass: "bg-vibrant-coral",
    author: {
      name: "Maverick",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
    },
    readTime: "10 min"
  }
];
