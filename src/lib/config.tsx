import {
  CameraIcon,
  FilmIcon,
  ImageIcon,
  MusicIcon,
  ShareIcon,
  SparklesIcon,
  TrendingUpIcon,
  ZapIcon,
  BarChartIcon,
  LayoutGridIcon,
  WandIcon,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "ReelCraft",
  description: "One-Click Reels. More Leads. More Closed Deals.",
  cta: "Request Access",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Real Estate Marketing",
    "Instagram Reels",
    "AI Video",
    "Property Marketing",
    "Listing Videos",
    "Social Media Marketing",
  ],
  links: {
    email: "support@reelcraft.app",
    twitter: "https://twitter.com/reelcraftapp",
    discord: "https://discord.gg/reelcraftapp",
    github: "https://github.com/reelcraftapp",
    instagram: "https://instagram.com/reelcraftapp",
  },
  features: [
    {
      name: "Photos to Reels in Seconds",
      description:
        "Upload your listing photos and ReelCraft instantly generates a cinematic Instagram Reel with professional camera movements, transitions, and pacing.",
      icon: <CameraIcon className="h-6 w-6" />,
    },
    {
      name: "AI Cinematic Effects",
      description:
        "Ken Burns zooms, parallax pans, and smooth transitions are applied automatically. Every Reel looks like it was shot by a professional videographer.",
      icon: <SparklesIcon className="h-6 w-6" />,
    },
    {
      name: "Auto Music Sync",
      description:
        "ReelCraft selects and synchronizes royalty-free, trending audio tracks to your property tour — timed to beat drops and transitions for maximum engagement.",
      icon: <MusicIcon className="h-6 w-6" />,
    },
    {
      name: "One-Tap Publishing",
      description:
        "Export directly to Instagram Reels, TikTok, Facebook, and YouTube Shorts. Caption, hashtag, and posting schedule are all handled for you.",
      icon: <ShareIcon className="h-6 w-6" />,
    },
    {
      name: "Lead Capture Integration",
      description:
        "Every Reel includes a customizable call-to-action that drives viewers to your landing page, booking link, or direct message — converting views into showings.",
      icon: <TrendingUpIcon className="h-6 w-6" />,
    },
    {
      name: "Brand Kit & Templates",
      description:
        "Lock in your brokerage colors, logo watermark, contact info, and font. Every Reel you create is on-brand without manual editing.",
      icon: <LayoutGridIcon className="h-6 w-6" />,
    },
  ],
  featureHighlight: [
    {
      title: "From MLS Photos to Viral Property Tours",
      description:
        "Most agents have listing photos sitting in their MLS that never see social media. ReelCraft takes those same static images and transforms them into scroll-stopping Reels with cinematic motion, professional transitions, and beat-synced music — in under 60 seconds. No videographer. No editing software. No learning curve.",
      imageSrc: "/Device-2.png",
      direction: "rtl" as const,
    },
    {
      title: "Engagement That Converts to Showings",
      description:
        "ReelCraft Reels aren't just eye candy — they're lead generation machines. Every video includes embedded CTAs that drive viewers to schedule showings, request info, or DM you directly. Agents using ReelCraft see 4x more inbound inquiries on their listings compared to static photo posts.",
      imageSrc: "/Device-3.png",
      direction: "ltr" as const,
    },
    {
      title: "Your Brand. Every Single Reel.",
      description:
        "Set up your Brand Kit once — logo, brokerage colors, contact info, preferred fonts — and ReelCraft applies it to every video automatically. Whether you post once a week or five times a day, your content is polished, professional, and unmistakably yours.",
      imageSrc: "/Device-4.png",
      direction: "rtl" as const,
    },
  ],
  bento: [
    {
      title: "Drag-and-Drop Reel Builder",
      content:
        "Upload listing photos, arrange the sequence, and let AI handle the rest. ReelCraft generates camera movements, transitions, and pacing automatically. Preview your Reel in real time before publishing.",
      imageSrc: "/Device-1.png",
      imageAlt: "Reel builder",
      fullWidth: true,
    },
    {
      title: "Trending Audio Library",
      content:
        "Access thousands of royalty-free tracks curated for real estate content. ReelCraft recommends trending audio that matches your property's vibe — luxury, cozy, modern, or family-friendly.",
      imageSrc: "/Device-2.png",
      imageAlt: "Audio library",
      fullWidth: false,
    },
    {
      title: "Performance Analytics",
      content:
        "Track views, engagement rate, saves, shares, and lead conversions for every Reel. See which listings generate the most interest and double down on what works.",
      imageSrc: "/Device-3.png",
      imageAlt: "Analytics dashboard",
      fullWidth: false,
    },
    {
      title: "Multi-Platform Publishing",
      content:
        "Publish to Instagram Reels, TikTok, YouTube Shorts, and Facebook from one dashboard. ReelCraft auto-formats aspect ratios and captions for each platform so you never have to re-edit.",
      imageSrc: "/Device-4.png",
      imageAlt: "Multi-platform publishing",
      fullWidth: true,
    },
  ],
  benefits: [
    {
      id: 1,
      text: "Turn every listing into a lead magnet. Agents using video Reels get 4x more inquiries than those posting static photos alone.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Save 5+ hours per listing on content creation. What used to require a videographer and an editor now takes under 60 seconds.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Stay top-of-feed on Instagram and TikTok. Consistent Reels keep you visible to buyers and sellers in your market every single day.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Win more listing appointments. Sellers choose agents with a strong social presence — and ReelCraft makes yours look world-class.",
      image: "/Device-1.png",
    },
  ],
  pricing: [
    {
      name: "Agent",
      href: "#",
      price: "$29",
      period: "month",
      yearlyPrice: "$249",
      features: [
        "Up to 20 Reels per month",
        "AI cinematic effects & transitions",
        "Trending audio library",
        "Brand Kit (logo, colors, contact)",
        "Direct export to Instagram & TikTok",
        "Basic engagement analytics",
      ],
      description: "For individual agents building their brand",
      buttonText: "Request Access",
      isPopular: false,
    },
    {
      name: "Team / Brokerage",
      href: "#",
      price: "$99",
      period: "month",
      yearlyPrice: "$899",
      features: [
        "Unlimited Reels",
        "All AI effects & premium templates",
        "Multi-platform auto-publishing",
        "Lead capture CTA integration",
        "Advanced analytics & conversion tracking",
        "Team seats & shared Brand Kit",
        "Priority rendering & support",
      ],
      description: "For teams and brokerages scaling content",
      buttonText: "Request Access",
      isPopular: true,
    },
  ],
  faqs: [
    {
      question: "How does ReelCraft turn photos into Reels?",
      answer: (
        <span>
          ReelCraft uses AI to apply professional camera movements — Ken Burns
          zooms, parallax pans, and cinematic transitions — to your static
          listing photos. It then syncs these movements to trending,
          royalty-free music and adds your branding automatically. The result is
          a polished, scroll-stopping Reel in under 60 seconds.
        </span>
      ),
    },
    {
      question: "Do I need any video editing experience?",
      answer: (
        <span>
          None at all. ReelCraft is built for agents, not editors. Upload your
          photos, choose a style, and the AI handles everything — camera
          movements, transitions, music, branding, and captions. If you can
          post to Instagram, you can use ReelCraft.
        </span>
      ),
    },
    {
      question: "Can I use my own branding and logo?",
      answer: (
        <span>
          Absolutely. Set up your Brand Kit once with your logo, brokerage
          colors, contact information, and preferred fonts. ReelCraft applies
          your branding to every Reel automatically — no manual editing
          required.
        </span>
      ),
    },
    {
      question: "What platforms can I publish to?",
      answer: (
        <span>
          ReelCraft supports direct export to Instagram Reels, TikTok, YouTube
          Shorts, and Facebook. The platform auto-formats your video for each
          platform&apos;s aspect ratio and character limits so you never have to
          re-edit.
        </span>
      ),
    },
    {
      question: "Is the music licensed for commercial use?",
      answer: (
        <span>
          Yes. Every track in our library is fully licensed for commercial use
          on social media. You will never receive a copyright strike or
          takedown notice for music used through ReelCraft.
        </span>
      ),
    },
    {
      question: "When is ReelCraft launching?",
      answer: (
        <span>
          ReelCraft is currently in early access. Request access to join the
          waitlist and be among the first agents to turn listing photos into
          high-converting Reels.
        </span>
      ),
    },
  ],
  footer: [
    {
      id: 1,
      menu: [
        { href: "#", text: "Features" },
        { href: "#", text: "Pricing" },
        { href: "#", text: "About Us" },
        { href: "#", text: "Blog" },
        { href: "#", text: "Contact" },
      ],
    },
  ],
  testimonials: [] as { name: string; role: string; image: string; text: string }[],
};

export type SiteConfig = typeof siteConfig;
