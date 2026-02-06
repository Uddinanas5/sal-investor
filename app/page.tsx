"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Play,
  ChevronDown,
  MessageSquare,
  Bell,
  BarChart3,
  Users,
  Calendar,
  TrendingUp,
  Clock,
  Target,
  Shield,
  Zap,
  Award,
  Globe,
  Phone,
  Mail,
  Check,
  Star,
  Brain,
  FileText,
  Megaphone,
  PhoneCall,
  AlertCircle,
  UserCheck,
  PieChart,
  Palette,
  Send,
  Mic,
} from "lucide-react";
import Image from "next/image";

// ============================================================================
// CONFIGURATION
// ============================================================================

const LOCAL_VIDEO_PATH = "/founder-video.mp4";
const YOUTUBE_VIDEO_ID: string | undefined = undefined;

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const blurIn = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

// ============================================================================
// UTILITY COMPONENTS
// ============================================================================

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
      {children}
    </h2>
  );
}

function TeamPhoto({
  src,
  initial,
  alt,
}: {
  src: string;
  initial: string;
  alt: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
        <span className="font-[family-name:var(--font-playfair)] text-4xl text-white">
          {initial}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={128}
      height={128}
      className="w-32 h-32 rounded-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}

// ============================================================================
// NAVIGATION
// ============================================================================

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-2xl text-charcoal font-semibold"
        >
          SAL
        </a>
        <a
          href="#contact"
          className="bg-gold hover:bg-gold-light text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
        >
          Schedule a Call
        </a>
      </div>
    </motion.nav>
  );
}

// ============================================================================
// HERO - THE VISION
// ============================================================================

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="inline-block bg-gold-subtle text-gold text-sm font-medium px-4 py-2 rounded-full mb-6"
        >
          Investor Preview
        </motion.div>

        <motion.h1
          variants={blurIn}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight"
        >
          An AI Employee That Runs Your Entire Business Through WhatsApp
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          SAL monitors your salon 24/7, alerts you when something needs attention,
          manages your team, analyzes your data, and handles operations —
          so you can focus on what you do best.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#features"
            className="bg-gold hover:bg-gold-light text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
          >
            See What SAL Can Do
          </a>
          <a
            href="#demo"
            className="bg-white border-2 border-charcoal/20 hover:border-gold text-charcoal px-8 py-3 rounded-full font-medium transition-all duration-200"
          >
            Watch Demo
          </a>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center">
            <p className="font-[family-name:var(--font-playfair)] text-3xl text-gold">24/7</p>
            <p className="text-warm-gray text-sm">Always Watching</p>
          </motion.div>
          <motion.div variants={fadeUp} className="text-center">
            <p className="font-[family-name:var(--font-playfair)] text-3xl text-gold">10x</p>
            <p className="text-warm-gray text-sm">Productivity Boost</p>
          </motion.div>
          <motion.div variants={fadeUp} className="text-center">
            <p className="font-[family-name:var(--font-playfair)] text-3xl text-gold">0</p>
            <p className="text-warm-gray text-sm">Apps to Learn</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-6 h-6 text-warm-gray" />
      </motion.div>
    </section>
  );
}

// ============================================================================
// PROACTIVE INTELLIGENCE
// ============================================================================

function ProactiveIntelligence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const alerts = [
    {
      icon: TrendingUp,
      alert: "Your bookings are down 20% this week. Want me to send a promo to inactive clients?",
      color: "text-terracotta",
    },
    {
      icon: Clock,
      alert: "Ahmed has been late 3 times this month. Want me to schedule a meeting?",
      color: "text-gold",
    },
    {
      icon: Users,
      alert: "Client Sarah hasn't visited in 45 days. Want me to reach out?",
      color: "text-sage",
    },
    {
      icon: Calendar,
      alert: "Tomorrow looks slow, only 60% booked. Want me to send a last-minute deals campaign?",
      color: "text-terracotta",
    },
    {
      icon: Star,
      alert: "Mohammad's birthday is in 3 days. Want me to send him something special?",
      color: "text-gold",
    },
    {
      icon: AlertCircle,
      alert: "You're running low on product X. Want me to reorder?",
      color: "text-terracotta",
    },
    {
      icon: BarChart3,
      alert: "Revenue is up 15% this month. Here's what's working.",
      color: "text-sage",
    },
  ];

  return (
    <section id="features" ref={ref} className="py-24 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Proactive Business Intelligence</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionHeading>
              SAL Spots Problems Before You Do
            </SectionHeading>
          </motion.div>
          <motion.p variants={fadeUp} className="text-charcoal-light mt-4 max-w-2xl mx-auto">
            SAL monitors your business 24/7, analyzes trends automatically, and sends you
            alerts when something needs your attention. Never miss anything important again.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4 max-w-3xl mx-auto"
        >
          {alerts.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-warm-white rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-full bg-gold-subtle flex items-center justify-center flex-shrink-0 ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-charcoal font-medium">&ldquo;{item.alert}&rdquo;</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button className="bg-gold text-white text-sm px-4 py-1.5 rounded-full hover:bg-gold-light transition-colors">
                  Yes
                </button>
                <button className="bg-cream-dark text-charcoal-light text-sm px-4 py-1.5 rounded-full hover:bg-warm-gray/20 transition-colors">
                  Later
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-charcoal-light">
            <span className="text-gold font-semibold">Never sleeps. Never misses anything.</span>
            {" "}SAL works while you rest.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// CORE FEATURES GRID
// ============================================================================

function CoreFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: FileText,
      title: "Smart Reporting",
      description: "Create reports by just asking SAL. No tech skills needed. SAL asks you questions, builds the report, saves it to Notion, and sends you the link.",
      highlight: "\"SAL, give me this week's performance report\"",
    },
    {
      icon: UserCheck,
      title: "Staff Management",
      description: "Connects to your biometrics system. Alerts you if staff is late. Automatically sends warnings. Tracks performance. Logs everything for records.",
      highlight: "Automated warnings & performance tracking",
    },
    {
      icon: PieChart,
      title: "Business Analytics",
      description: "Top clients by spend. Most profitable services. Retention rates. Clients who haven't visited in 60+ days. Peak hours. Revenue trends. All from your Fresha data.",
      highlight: "Powered by your Fresha integration",
    },
    {
      icon: Palette,
      title: "Marketing & Content",
      description: "Creates landing pages in 5 minutes. Designs campaigns based on your data. Can run ads for you. Creates social media content that actually converts.",
      highlight: "AI-powered marketing on autopilot",
    },
    {
      icon: Send,
      title: "Team Communication",
      description: "Broadcast messages to your entire team with one message. Voice messages supported. Individual follow-ups. Task assignments and reminders.",
      highlight: "No more messy WhatsApp groups",
    },
    {
      icon: Brain,
      title: "Learns Your Business",
      description: "SAL is custom-trained for your specific salon. It knows your services, staff, clients, and how you operate. Gets smarter every day.",
      highlight: "Your AI, trained on your business",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>What SAL Does</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionHeading>
              Everything a Great Operations Manager Would Do
            </SectionHeading>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="bg-warm-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-subtle flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal-light text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <p className="text-gold text-sm font-medium">
                {feature.highlight}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// COMING SOON - VOICE CALLS
// ============================================================================

function VoiceCalls() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const voiceFeatures = [
    "SAL calls you to give important updates",
    "You can ask SAL to do tasks over the phone",
    "Have a real conversation with your AI assistant",
    "Ask questions, give instructions, get things done. All by voice.",
    "SAL answers calls for the shop",
    "Makes calls on your behalf",
    "Books appointments via phone",
    "Handles customer inquiries 24/7",
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-deep-brown text-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Coming Soon
            </span>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl leading-tight flex items-center justify-center gap-4">
              <PhoneCall className="w-10 h-10 text-gold" />
              Voice Calls
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-cream/70 mt-4 max-w-xl mx-auto text-lg">
            It&apos;s like having a personal assistant who actually calls you.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {voiceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-center gap-3 bg-cream/10 rounded-xl p-4"
            >
              <Mic className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-cream/90 text-sm">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// WHY WHATSAPP
// ============================================================================

function WhyWhatsApp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    { stat: "98%", label: "WhatsApp penetration in UAE/MENA" },
    { stat: "0", label: "New apps to download or learn" },
    { stat: "24h", label: "Setup time. We do everything." },
    { stat: "Any", label: "Phone works. Android or iPhone." },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-cream-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Why WhatsApp?</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionHeading>
              Your Team Already Uses It Every Day
            </SectionHeading>
          </motion.div>
          <motion.p variants={fadeUp} className="text-charcoal-light mt-4 max-w-2xl mx-auto">
            No dashboards to learn. No apps to download. No training needed.
            SAL works where your team already is: WhatsApp.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {reasons.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="bg-warm-white rounded-2xl p-6 text-center shadow-sm"
            >
              <p className="font-[family-name:var(--font-playfair)] text-4xl text-gold mb-2">
                {item.stat}
              </p>
              <p className="text-charcoal-light text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// DEMO SECTION
// ============================================================================

function Demo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="demo" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>See It In Action</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionHeading>
              Watch SAL Handle Real Scenarios
            </SectionHeading>
          </motion.div>
        </motion.div>

        {/* iPhone Frame with Video */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center"
        >
          <div className="relative">
            {/* iPhone Frame */}
            <div className="relative bg-charcoal rounded-[3rem] p-3 shadow-2xl">
              {/* Side buttons - left */}
              <div className="absolute -left-1 top-28 w-1 h-8 bg-charcoal-light rounded-l-sm" />
              <div className="absolute -left-1 top-40 w-1 h-12 bg-charcoal-light rounded-l-sm" />
              <div className="absolute -left-1 top-56 w-1 h-12 bg-charcoal-light rounded-l-sm" />
              {/* Side button - right */}
              <div className="absolute -right-1 top-36 w-1 h-16 bg-charcoal-light rounded-r-sm" />

              {/* Inner bezel */}
              <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 w-28 h-8 bg-black rounded-full" />

                {/* Screen content - 9:16 aspect ratio to match video */}
                <div className="relative w-[270px] aspect-[9/16] sm:w-[300px] bg-black">
                  <video
                    src="/sal-demo.mp4"
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-10"
        >
          <a
            href="https://wa.me/971564333073"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#25D366]/90 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Message SAL Now to Try It Live
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// FOUNDER STORY
// ============================================================================

function FounderStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="story" ref={ref} className="py-24 px-6 bg-cream-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Our Story</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionHeading>
              Built by a Barber Who Lived the Problem
            </SectionHeading>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            {LOCAL_VIDEO_PATH ? (
              <>
                {showVideo ? (
                  <video
                    src={LOCAL_VIDEO_PATH}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 w-full h-full group cursor-pointer"
                  >
                    <video
                      src={LOCAL_VIDEO_PATH}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </button>
                )}
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-cream-dark to-gold-subtle flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <Play className="w-8 h-8 text-gold ml-1" />
                </div>
                <p className="text-warm-gray font-medium">Founder video coming soon</p>
              </div>
            )}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.blockquote variants={fadeUp} className="mb-8">
              <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-charcoal italic leading-relaxed">
                &ldquo;I spent 10 years running salons. 40+ hours a week on admin alone.
                I couldn&apos;t find a solution that worked, so I built one.&rdquo;
              </p>
            </motion.blockquote>

            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-charcoal-light">Founded Back Alive Barbershop with 2 locations in Dubai, 4.9 stars, 3,000+ reviews</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-charcoal-light">Fact Magazine &ldquo;Favourite Barbershop of the Year 2025&rdquo;</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-charcoal-light">Self-taught developer who built SAL from scratch</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-charcoal-light">SAL runs live in Back Alive. This isn&apos;t a concept, it&apos;s working.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// TEAM
// ============================================================================

function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>The Team</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionHeading>
              Domain Expertise Meets Technical Depth
            </SectionHeading>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeUp}
            className="bg-warm-white rounded-2xl p-8 shadow-sm"
          >
            <div className="flex flex-col items-center text-center mb-6">
              <TeamPhoto src="/team-anas.jpg" initial="A" alt="Anas, Founder and CEO" />
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-charcoal mt-4">Anas</h3>
              <p className="text-gold font-medium">Founder & CEO</p>
            </div>
            <ul className="space-y-3 text-charcoal-light text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                10+ years in the salon industry
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                Founded Back Alive Barbershop (2 locations)
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                Self-taught developer who built SAL from scratch
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-warm-white rounded-2xl p-8 shadow-sm"
          >
            <div className="flex flex-col items-center text-center mb-6">
              <TeamPhoto src="/team-fahim.jpg" initial="F" alt="Fahim, CTO" />
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-charcoal mt-4">Fahim</h3>
              <p className="text-gold font-medium">Technical Co-Founder & CTO</p>
            </div>
            <ul className="space-y-3 text-charcoal-light text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                Built SAL&apos;s core AI infrastructure
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                Deep expertise in AI agents and automation
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                Full-stack engineer
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// TRACTION
// ============================================================================

function Traction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const badges = [
    "Product built & working",
    "Running live in Back Alive (2 locations)",
    "Fresha integration operational",
    "WhatsApp demo ready",
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-cream-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Traction</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionHeading>This Isn&apos;t a Concept. It&apos;s Working.</SectionHeading>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge}
              variants={fadeUp}
              className="flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm"
            >
              <Check className="w-4 h-4" />
              {badge}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-gold-subtle px-6 py-3 rounded-full">
            <Award className="w-6 h-6 text-gold" />
            <span className="font-medium text-charcoal">
              Fact Magazine: Favourite Barbershop of the Year 2025
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// THE ASK
// ============================================================================

function TheAsk() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useOfFunds = [
    { category: "Marketing", percent: 36, purpose: "Customer acquisition" },
    { category: "Team", percent: 30, purpose: "Founder salaries (6 months)" },
    { category: "Technology", percent: 12, purpose: "Infrastructure & APIs" },
    { category: "Operations", percent: 22, purpose: "Legal, setup, runway" },
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>The Ask</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionHeading>We&apos;re Raising Our Pre-Seed</SectionHeading>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-charcoal-light text-lg mt-4 max-w-xl mx-auto">
              We&apos;re looking for investors who understand the beauty industry and want to back a founder who&apos;s lived the problem.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <a
            href="https://wa.me/971564333073"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full font-medium hover:bg-gold-light transition-colors text-lg"
          >
            <MessageSquare className="w-5 h-5" />
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// WHY INVEST NOW
// ============================================================================

function WhyInvest() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Clock,
      title: "Timing",
      description: "AI agents are the next wave. The window to dominate the beauty/wellness vertical is now.",
    },
    {
      icon: Users,
      title: "Team",
      description: "Founder who lived the problem for 10 years + technical co-founder who can build anything.",
    },
    {
      icon: TrendingUp,
      title: "Traction",
      description: "Already running in a real business. Not a concept, a working product.",
    },
    {
      icon: Globe,
      title: "Market",
      description: "Beauty & wellness is massive, fragmented, and completely underserved by AI.",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionHeading>Why Invest Now</SectionHeading>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              className="bg-warm-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gold-subtle flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-charcoal mb-2">
                {reason.title}
              </h3>
              <p className="text-charcoal-light text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT
// ============================================================================

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-deep-brown text-cream">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6"
          >
            Let&apos;s Talk
          </motion.h2>
          <motion.p variants={fadeUp} className="text-cream/70 mb-10">
            See SAL in action. Discuss the opportunity. We&apos;d love to share more.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="mailto:anas-uddin@hotmail.com"
              className="inline-flex items-center justify-center gap-2 bg-cream text-deep-brown px-6 py-3 rounded-full font-medium hover:bg-cream/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              anas-uddin@hotmail.com
            </a>
            <a
              href="https://wa.me/971564333073"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#25D366]/90 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              +971 52 322 8314
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="text-cream/50 text-sm">
            Message SAL on WhatsApp to see it in action
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================

function Footer() {
  return (
    <footer className="py-8 px-6 bg-deep-brown border-t border-cream/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-cream/50 text-sm">© 2026 SAL. Dubai, UAE.</p>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function InvestorPage() {
  return (
    <main className="bg-cream">
      <Nav />
      <Hero />
      <FounderStory />
      <ProactiveIntelligence />
      <CoreFeatures />
      <Demo />
      <WhyWhatsApp />
      <Team />
      <Traction />
      <TheAsk />
      <Contact />
      <Footer />
    </main>
  );
}
