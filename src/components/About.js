import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaAward,
  FaBullseye,
  FaFlask,
  FaHandshake,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRocket,
  FaSeedling,
  FaStore,
  FaTractor,
  FaUsers,
} from "react-icons/fa";

const SITE_URL = "https://www.arvisfertilizers.com";
const COMPANY_NAME = "Arvis Fertilizers & Chemicals Pvt. Ltd.";

const SEO_TITLE =
  "About Arvis Fertilizers | Fertilizer & Crop Nutrition Company in South India";

const SEO_DESCRIPTION =
  "Learn about Arvis Fertilizers, a research-driven fertilizer and crop nutrition company supporting farmers, dealers and distributors across Karnataka, Andhra Pradesh, Telangana, Tamil Nadu and Kerala.";

const TARGET_STATES = [
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Tamil Nadu",
  "Kerala",
];

function About() {
  const [activeHistory, setActiveHistory] = useState(0);

  const historyItems = useMemo(
    () => [
      {
        year: "2019",
        label: "Arvis Established",
        badge: "Started",
        icon: <FaSeedling />,
        text: "Founded by M. Keerthi Prasad with a vision to bring better agri-input technology to Indian agriculture.",
      },
      {
        year: "2020",
        label: "Field Discovery",
        badge: "Field",
        icon: <FaTractor />,
        text: "Studied fertilizer potential and began direct farmer-level and market-level understanding.",
      },
      {
        year: "2021",
        label: "Early Dealer Supply",
        badge: "5–6",
        icon: <FaStore />,
        text: "Collected dealer information and successfully supplied products to the first 5–6 dealers.",
      },
      {
        year: "2023",
        label: "Company Expansion",
        badge: "20+",
        icon: <FaUsers />,
        text: "Expanded to 10–20 dealers, completed company incorporation, and secured important business documents and licenses.",
      },
      {
        year: "2024",
        label: "Innovation Stage",
        badge: "R&D",
        icon: <FaFlask />,
        text: "Introduced special molecules, advanced fertilizers and result-focused crop solutions.",
      },
      {
        year: "2025",
        label: "Regional Growth",
        badge: "50+",
        icon: <FaAward />,
        text: "Expanded reach to 50+ dealers and created strong market presence in AP and Karnataka.",
      },
      {
        year: "2026",
        label: "B2B Sales Growth",
        badge: "150+",
        icon: <FaRocket />,
        text: "Planned expansion to 150+ dealers with stronger B2B sales and distribution growth.",
      },
    ],
    []
  );

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHistory((prev) => (prev + 1) % historyItems.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [historyItems.length]);

  const activeItem = historyItems[activeHistory];
  const pathProgress =
    1000 - (activeHistory / (historyItems.length - 1)) * 1000;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    alternateName: "Arvis Fertilizers",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: "2019",
    founder: {
      "@type": "Person",
      name: "M. Keerthi Prasad",
      jobTitle: "Managing Director",
    },
    description:
      "Arvis Fertilizers is a research-driven fertilizer and crop nutrition company focused on agri-input technology, farmer support, dealer distribution and South Indian agriculture markets.",
    areaServed: TARGET_STATES.map((state) => ({
      "@type": "State",
      name: state,
    })),
    knowsAbout: [
      "Fertilizers",
      "Crop Nutrition",
      "Agri Inputs",
      "Agriculture Products",
      "Plant Growth Support",
      "Agri Chemical Solutions",
      "Fertilizer Dealer Network",
      "South Indian Agriculture Markets",
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: SEO_TITLE,
    url: `${SITE_URL}/about`,
    description: SEO_DESCRIPTION,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "Arvis Fertilizers",
      url: SITE_URL,
    },
    about: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/map.png`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Arvis Fertilizers",
        item: `${SITE_URL}/about`,
      },
    ],
  };

  const historySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arvis Fertilizers Company Journey",
    description:
      "Timeline of Arvis Fertilizers growth from establishment to dealer and regional expansion.",
    itemListElement: historyItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${item.year} - ${item.label}`,
      description: item.text,
    })),
  };

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta
          name="keywords"
          content="About Arvis Fertilizers, Arvis Fertilizers company, fertilizer company in South India, fertilizer company in Karnataka, fertilizer company in Andhra Pradesh, fertilizer company in Telangana, fertilizer company in Tamil Nadu, fertilizer company in Kerala, crop nutrition company, agri input company, fertilizer dealer network"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={COMPANY_NAME} />
        <meta name="geo.region" content="IN" />
        <meta
          name="geo.placename"
          content="Karnataka, Andhra Pradesh, Telangana, Tamil Nadu, Kerala"
        />
        <link rel="canonical" href={`${SITE_URL}/about`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arvis Fertilizers" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:image" content={`${SITE_URL}/images/map.png`} />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/map.png`} />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(historySchema)}
        </script>
      </Helmet>

      <style>{`
        :root {
          --arvis-plum: #45142c;
          --arvis-plum-dark: #2b0f1e;
          --arvis-plum-deep: #220915;
          --arvis-gold: #e99a11;
          --arvis-gold-dark: #c77806;
          --arvis-cream: #fff5e4;
          --arvis-bg: #fff3df;
          --arvis-bisque: #f3dfc1;
          --arvis-text: #2d1723;
          --arvis-muted: rgba(45, 23, 35, .72);
        }

        * {
          box-sizing: border-box;
        }

        .about-page {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: var(--arvis-bg);
          color: var(--arvis-text);
        }

        .about-container {
          width: min(1240px, calc(100% - 96px));
          margin: 0 auto;
        }

        [data-reveal] {
          opacity: 0;
          transition:
            opacity .75s cubic-bezier(.16, 1, .3, 1),
            transform .75s cubic-bezier(.16, 1, .3, 1);
        }

        [data-reveal="left"] {
          transform: translateX(-38px);
        }

        [data-reveal="right"] {
          transform: translateX(38px);
        }

        [data-reveal="up"] {
          transform: translateY(38px);
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        .about-hero {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 78% 16%, rgba(233,154,17,.20), transparent 28%),
            radial-gradient(circle at 12% 85%, rgba(69,20,44,.12), transparent 30%),
            linear-gradient(135deg, #fff3df 0%, #fff8ee 42%, #f3dfc1 100%);
        }

        .about-hero::before {
          content: "";
          position: absolute;
          right: -160px;
          top: -160px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.22), transparent 68%);
          pointer-events: none;
        }

        .about-hero::after {
          content: "";
          position: absolute;
          left: -8%;
          right: -8%;
          bottom: -70px;
          height: 120px;
          background: var(--arvis-bg);
          border-radius: 50% 50% 0 0;
          transform: rotate(-2deg);
          pointer-events: none;
        }

        .about-hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 54px;
          padding: 52px 0 116px;
        }

        .about-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--arvis-gold);
          font-size: 13px;
          font-weight: 950;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .about-kicker::before {
          content: "";
          width: 46px;
          height: 2px;
          border-radius: 99px;
          background: var(--arvis-gold);
        }

        .about-title {
          margin: 22px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 5.2vw, 82px);
          line-height: .98;
          letter-spacing: -2.4px;
          color: var(--arvis-text);
          font-weight: 950;
        }

        .about-title span {
          display: block;
          color: var(--arvis-gold);
        }

        .about-hero-text {
          max-width: 700px;
          margin: 28px 0 0;
          color: rgba(45, 23, 35, .82);
          font-size: 18px;
          line-height: 1.8;
          font-weight: 650;
        }

        .about-founder-card {
          position: relative;
          padding: 34px;
          border-radius: 34px;
          color: #fff8ee;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.20), transparent 34%),
            linear-gradient(135deg, #4a1730 0%, #351020 54%, #220915 100%);
          box-shadow: 0 30px 80px rgba(69, 20, 44, .18);
          overflow: hidden;
        }

        .about-founder-card::before {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 26px;
          border: 1px solid rgba(233,154,17,.25);
          pointer-events: none;
        }

        .founder-icon {
          width: 70px;
          height: 70px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--arvis-gold);
          border: 2px solid rgba(233,154,17,.62);
          font-size: 28px;
          margin-bottom: 26px;
        }

        .about-founder-card h3 {
          position: relative;
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 36px;
          line-height: 1.05;
        }

        .about-founder-card p {
          position: relative;
          margin: 16px 0 0;
          color: rgba(255,248,238,.78);
          font-size: 15.5px;
          line-height: 1.75;
          font-weight: 600;
        }

        .about-founder-card strong {
          color: var(--arvis-gold);
          font-weight: 950;
        }

        .who-section {
          position: relative;
          margin-top: -1px;
          padding: 92px 0 86px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.18), transparent 28%),
            radial-gradient(circle at 88% 16%, rgba(69,20,44,.07), transparent 30%),
            linear-gradient(135deg, #fff8ee 0%, #fff3df 52%, #f3dfc1 100%);
          border-top: 1px solid rgba(233,154,17,.18);
          border-bottom: 1px solid rgba(233,154,17,.18);
        }

        .who-section::before {
          content: "";
          position: absolute;
          left: -8%;
          right: -8%;
          top: -62px;
          height: 108px;
          background: var(--arvis-bg);
          border-radius: 0 0 50% 50%;
          transform: rotate(-2deg);
          z-index: 1;
        }

        .who-section::after {
          content: "";
          position: absolute;
          left: -6%;
          right: -6%;
          top: 22px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(233,154,17,.95),
            transparent
          );
          transform: rotate(-2deg);
          z-index: 2;
        }

        .who-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 54px;
          align-items: start;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--arvis-gold);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .section-title {
          margin: 16px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1.05;
          letter-spacing: -1.4px;
          color: inherit;
        }

        .section-title span {
          color: var(--arvis-gold);
        }

        .who-copy {
          display: grid;
          gap: 18px;
          padding: 28px;
          border-radius: 30px;
          background: rgba(255,255,255,.46);
          border: 1px solid rgba(233,154,17,.20);
          box-shadow: 0 24px 60px rgba(69,20,44,.07);
        }

        .who-copy p {
          margin: 0;
          color: var(--arvis-muted);
          font-size: 17px;
          line-height: 1.78;
          font-weight: 650;
        }

        .history-section {
          padding: 90px 0 92px;
          background:
            radial-gradient(circle at 10% 8%, rgba(233,154,17,.12), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(69,20,44,.08), transparent 30%),
            linear-gradient(180deg, #fff3df 0%, #fff8ee 100%);
        }

        .history-head {
          width: min(850px, calc(100% - 40px));
          margin: 0 auto 34px;
          text-align: center;
        }

        .history-path-board {
          position: relative;
          width: 90%;
          margin: 0 auto;
          padding: 30px 50px 34px;
          border-radius: 42px;
          background:
            linear-gradient(135deg, rgba(255,255,255,.86), rgba(255,248,238,.60));
          border: 1px solid rgba(233,154,17,.25);
          box-shadow: 0 38px 98px rgba(69,20,44,.13);
          overflow: hidden;
        }

        .history-path-board::before {
          content: "";
          position: absolute;
          width: 380px;
          height: 380px;
          left: -130px;
          top: -170px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.22), transparent 68%);
          pointer-events: none;
          animation: softGlowMove 7s ease-in-out infinite;
        }

        .history-path-board::after {
          content: "";
          position: absolute;
          width: 330px;
          height: 330px;
          right: -150px;
          bottom: -160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(69,20,44,.14), transparent 68%);
          pointer-events: none;
          animation: softGlowMove 8s ease-in-out 1.2s infinite;
        }

        @keyframes softGlowMove {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: .82;
          }

          50% {
            transform: translateY(-18px) scale(1.08);
            opacity: 1;
          }
        }

        .history-path-stage {
          position: relative;
          z-index: 2;
          height: 330px;
          margin-bottom: 22px;
        }

        .history-curve-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
        }

        .history-curve-base {
          fill: none;
          stroke: rgba(69,20,44,.16);
          stroke-width: 10;
          stroke-linecap: round;
        }

        .history-curve-progress {
          fill: none;
          stroke: url(#historyGold);
          stroke-width: 10;
          stroke-linecap: round;
          stroke-dasharray: 1000;
          stroke-dashoffset: var(--path-progress);
          transition: stroke-dashoffset 1.05s cubic-bezier(.16, 1, .3, 1);
          filter: drop-shadow(0 8px 14px rgba(233,154,17,.24));
        }

        .history-moving-spark {
          offset-path: path("M35 155 C 115 45, 190 45, 250 155 S 380 265, 500 155 S 620 45, 750 155 S 885 265, 965 155");
          offset-distance: var(--spark-position);
          transition: offset-distance 1.05s cubic-bezier(.16, 1, .3, 1);
          position: absolute;
          left: 0;
          top: 0;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #fff8ee;
          border: 4px solid var(--arvis-gold);
          box-shadow:
            0 0 0 8px rgba(233,154,17,.14),
            0 12px 24px rgba(233,154,17,.26);
          z-index: 4;
          pointer-events: none;
        }

        .history-node {
          position: absolute;
          z-index: 3;
          transform: translateX(-50%);
          border: 0;
          outline: 0;
          background: transparent;
          cursor: pointer;
          display: grid;
          place-items: center;
          gap: 8px;
          min-width: 126px;
          color: var(--arvis-text);
          transition: transform .3s ease;
        }

        .history-node:hover {
          transform: translateX(-50%) translateY(-5px);
        }

        .history-node-circle {
          width: 72px;
          height: 72px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--arvis-gold);
          background:
            radial-gradient(circle at 30% 20%, rgba(255,255,255,.8), transparent 36%),
            linear-gradient(135deg, #fff8ee, #f0d7ac);
          border: 2px solid rgba(233,154,17,.40);
          box-shadow: 0 18px 34px rgba(69,20,44,.12);
          font-size: 25px;
          transition: .32s ease;
        }

        .history-node-year {
          display: block;
          color: var(--arvis-text);
          font-size: 14px;
          font-weight: 950;
        }

        .history-node-title {
          display: block;
          max-width: 124px;
          color: var(--arvis-muted);
          font-size: 10.2px;
          font-weight: 900;
          line-height: 1.25;
        }

        .history-node.active .history-node-circle {
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
          border-color: rgba(255,255,255,.46);
          transform: scale(1.13);
          box-shadow:
            0 20px 38px rgba(233,154,17,.30),
            0 0 0 10px rgba(233,154,17,.13);
          animation: activeNodePulse 1.8s ease-in-out infinite;
        }

        .history-node.active .history-node-year {
          color: var(--arvis-gold);
        }

        .history-node.active .history-node-title {
          color: var(--arvis-text);
        }

        @keyframes activeNodePulse {
          0%, 100% {
            box-shadow:
              0 20px 38px rgba(233,154,17,.30),
              0 0 0 8px rgba(233,154,17,.12);
          }

          50% {
            box-shadow:
              0 22px 42px rgba(233,154,17,.36),
              0 0 0 15px rgba(233,154,17,.06);
          }
        }

        .history-detail {
          position: relative;
          z-index: 3;
          min-height: 250px;
          padding: 38px;
          border-radius: 30px;
          color: #fff8ee;
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.20), transparent 34%),
            linear-gradient(135deg, #4a1730 0%, #351020 54%, #220915 100%);
          display: grid;
          grid-template-columns: .62fr 1.38fr;
          align-items: center;
          gap: 32px;
          overflow: hidden;
          animation: historyCardIn .7s cubic-bezier(.16, 1, .3, 1) both;
        }

        .history-detail::before {
          content: "";
          position: absolute;
          right: 30px;
          top: -18px;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.14), transparent 70%);
          pointer-events: none;
        }

        @keyframes historyCardIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .history-detail-year {
          position: relative;
          animation: historyBigYear .72s cubic-bezier(.16, 1, .3, 1) both;
        }

        .history-detail-year h3 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(76px, 7vw, 128px);
          line-height: .82;
          color: var(--arvis-gold);
          letter-spacing: -4px;
          text-shadow: 0 14px 34px rgba(0,0,0,.24);
        }

        .history-detail-year span {
          display: inline-flex;
          margin-top: 16px;
          padding: 9px 16px;
          border-radius: 999px;
          color: #fff8ee;
          background: rgba(233,154,17,.16);
          border: 1px solid rgba(233,154,17,.34);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .history-detail-copy {
          position: relative;
          animation: historyCopyIn .76s cubic-bezier(.16, 1, .3, 1) both;
        }

        .history-detail-copy h3 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 60px);
          line-height: 1.02;
          letter-spacing: -1.3px;
        }

        .history-detail-copy p {
          max-width: 660px;
          margin: 18px 0 0;
          color: rgba(255,248,238,.80);
          font-size: 17px;
          line-height: 1.72;
          font-weight: 600;
        }

        @keyframes historyBigYear {
          from {
            opacity: 0;
            transform: scale(.86) translateY(18px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes historyCopyIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .history-dots {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
        }

        .history-dot {
          width: 9px;
          height: 9px;
          border: 0;
          border-radius: 99px;
          cursor: pointer;
          background: rgba(69,20,44,.22);
          transition: .25s ease;
        }

        .history-dot.active {
          width: 34px;
          background: var(--arvis-gold);
        }

        .history-mobile-list {
          display: none;
        }

        .vision-section {
          position: relative;
          padding: 92px 0 92px;
          background: var(--arvis-bg);
          overflow: hidden;
        }

        .vision-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 46px;
          align-items: center;
        }

        .vision-card {
          position: relative;
          padding: 42px 38px;
          border-radius: 34px;
          color: #fff8ee;
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.22), transparent 34%),
            linear-gradient(135deg, #4a1730, #250916);
          box-shadow: 0 30px 80px rgba(69,20,44,.16);
          overflow: hidden;
        }

        .vision-card::before {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 26px;
          border: 1px solid rgba(233,154,17,.22);
          pointer-events: none;
        }

        .vision-number {
          position: relative;
          display: flex;
          align-items: flex-end;
          gap: 12px;
          margin: 0;
          line-height: 1;
          white-space: nowrap;
        }

        .vision-number strong {
          display: block;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(76px, 7.6vw, 118px);
          line-height: .82;
          color: var(--arvis-gold);
          letter-spacing: -5px;
          text-shadow: 0 14px 34px rgba(0,0,0,.24);
        }

        .vision-number span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          padding: 12px 16px;
          border-radius: 18px;
          color: #fff8ee;
          background: rgba(233,154,17,.16);
          border: 1px solid rgba(233,154,17,.38);
          font-size: clamp(24px, 2.4vw, 34px);
          font-weight: 950;
          letter-spacing: 1px;
        }

        .vision-card h2 {
          position: relative;
          margin: 28px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.05;
        }

        .vision-card p {
          position: relative;
          margin: 18px 0 0;
          color: rgba(255,248,238,.78);
          font-size: 16px;
          line-height: 1.75;
          font-weight: 600;
        }

        .map-card {
          position: relative;
          min-height: 470px;
          border-radius: 36px;
          overflow: hidden;
          display: grid;
          grid-template-columns: .86fr 1.14fr;
          align-items: center;
          gap: 20px;
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.17), transparent 32%),
            linear-gradient(135deg, #fff8ee 0%, #fff3df 50%, #f3dfc1 100%);
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 30px 80px rgba(69,20,44,.10);
        }

        .map-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(69,20,44,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(69,20,44,.035) 1px, transparent 1px);
          background-size: 34px 34px;
          pointer-events: none;
          opacity: .72;
        }

        .map-content {
          position: relative;
          z-index: 2;
          padding: 38px 0 38px 34px;
        }

        .map-content h3 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 38px;
          line-height: 1.05;
          color: var(--arvis-text);
        }

        .map-content p {
          margin: 14px 0 0;
          color: var(--arvis-muted);
          font-size: 15.5px;
          line-height: 1.72;
          font-weight: 650;
        }

        .map-image-box {
          position: relative;
          z-index: 2;
          min-height: 430px;
          display: grid;
          place-items: center;
          padding: 26px 26px 26px 0;
        }

        .map-image-box img {
          width: 100%;
          height: 100%;
          max-height: 430px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 26px 48px rgba(69,20,44,.12));
          border-radius: 10%;
        }

        .cta-section {
          padding: 0 0 92px;
          background: var(--arvis-bg);
        }

        .about-cta {
          padding: 42px;
          border-radius: 34px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          color: #fff8ee;
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.20), transparent 34%),
            linear-gradient(135deg, #4a1730, #250916);
          box-shadow: 0 30px 80px rgba(69,20,44,.16);
        }

        .about-cta h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 4vw, 54px);
          line-height: 1.05;
        }

        .about-cta p {
          max-width: 760px;
          margin: 14px 0 0;
          color: rgba(255,248,238,.78);
          font-size: 16px;
          line-height: 1.72;
          font-weight: 600;
        }

        .cta-actions {
          display: grid;
          gap: 14px;
          min-width: 220px;
        }

        .about-btn {
          min-height: 56px;
          padding: 0 24px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 950;
          transition: .22s ease;
        }

        .about-btn.primary {
          color: #fff;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 16px 32px rgba(233,154,17,.22);
        }

        .about-btn.light {
          color: #fff8ee;
          background: rgba(255,248,238,.08);
          border: 1px solid rgba(255,248,238,.32);
        }

        .about-btn:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 1100px) {
          .about-container {
            width: min(1240px, calc(100% - 44px));
          }

          .about-hero-grid,
          .who-grid,
          .vision-grid {
            grid-template-columns: 1fr;
          }

          .map-card {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 0;
          }

          .map-content {
            padding: 34px 34px 12px;
          }

          .map-image-box {
            min-height: 390px;
            padding: 0 28px 30px;
          }

          .history-detail {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        @media (max-width: 720px) {
          .about-container {
            width: 100%;
          }

          [data-reveal="left"],
          [data-reveal="right"],
          [data-reveal="up"] {
            transform: translateY(24px);
          }

          .about-hero {
            min-height: auto;
          }

          .about-hero::after {
            bottom: -38px;
            height: 72px;
          }

          .about-hero-grid {
            gap: 28px;
            padding: 32px 18px 78px;
          }

          .about-kicker {
            font-size: 9.5px;
            letter-spacing: 2.4px;
            gap: 8px;
          }

          .about-kicker::before {
            width: 34px;
          }

          .about-title {
            font-size: 42px;
            letter-spacing: -1.4px;
          }

          .about-hero-text {
            font-size: 14px;
            line-height: 1.68;
          }

          .about-founder-card {
            padding: 28px;
            border-radius: 28px;
          }

          .founder-icon {
            width: 54px;
            height: 54px;
            font-size: 21px;
            margin-bottom: 20px;
          }

          .about-founder-card h3 {
            font-size: 28px;
          }

          .about-founder-card p {
            font-size: 13px;
          }

          .who-section {
            padding: 66px 18px 58px;
          }

          .who-section::before {
            left: -18%;
            right: -18%;
            top: -36px;
            height: 66px;
          }

          .who-section::after {
            top: 21px;
            height: 1.5px;
          }

          .section-label {
            font-size: 9.5px;
            letter-spacing: 2.2px;
          }

          .section-title {
            font-size: 34px;
          }

          .who-grid {
            gap: 28px;
          }

          .who-copy {
            padding: 22px;
            border-radius: 24px;
          }

          .who-copy p {
            font-size: 13.5px;
            line-height: 1.68;
          }

          .history-section {
            padding: 62px 0;
          }

          .history-head {
            width: calc(100% - 30px);
            margin-bottom: 24px;
          }

          .history-path-board {
            width: calc(100% - 22px);
            padding: 16px 14px 18px;
            border-radius: 28px;
          }

          .history-path-stage,
          .history-detail,
          .history-dots {
            display: none;
          }

          .history-mobile-list {
            position: relative;
            z-index: 4;
            display: grid;
            gap: 10px;
          }

          .history-mobile-list::before {
            content: "";
            position: absolute;
            left: 34px;
            top: 14px;
            bottom: 14px;
            width: 4px;
            border-radius: 999px;
            background: linear-gradient(180deg, rgba(233,154,17,.9), rgba(69,20,44,.18));
          }

          .history-mobile-node {
            position: relative;
            z-index: 2;
            width: 100%;
            border: 0;
            outline: 0;
            cursor: pointer;
            display: grid;
            grid-template-columns: 54px 1fr;
            place-items: center start;
            gap: 12px;
            padding: 10px;
            border-radius: 18px;
            background: rgba(255,248,238,.72);
            border: 1px solid rgba(233,154,17,.18);
            text-align: left;
          }

          .history-mobile-circle {
            width: 46px;
            height: 46px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            color: var(--arvis-gold);
            background:
              radial-gradient(circle at 30% 20%, rgba(255,255,255,.8), transparent 36%),
              linear-gradient(135deg, #fff8ee, #f0d7ac);
            border: 2px solid rgba(233,154,17,.40);
            box-shadow: 0 18px 34px rgba(69,20,44,.12);
            font-size: 17px;
          }

          .history-mobile-year {
            display: block;
            color: var(--arvis-text);
            font-size: 13px;
            font-weight: 950;
          }

          .history-mobile-title {
            display: block;
            margin-top: 3px;
            color: var(--arvis-muted);
            font-size: 10.5px;
            font-weight: 900;
            line-height: 1.25;
          }

          .history-mobile-node.active .history-mobile-circle {
            color: #fff8ee;
            background: linear-gradient(135deg, #e99a11, #c77806);
            border-color: rgba(255,255,255,.46);
            transform: scale(1.05);
            box-shadow:
              0 20px 38px rgba(233,154,17,.30),
              0 0 0 8px rgba(233,154,17,.11);
          }

          .history-mobile-node.active .history-mobile-year {
            color: var(--arvis-gold);
          }

          .history-mobile-detail {
            position: relative;
            z-index: 2;
            margin: 0 0 8px 66px;
            padding: 20px;
            border-radius: 22px;
            color: #fff8ee;
            background:
              radial-gradient(circle at 12% 0%, rgba(233,154,17,.20), transparent 34%),
              linear-gradient(135deg, #4a1730 0%, #351020 54%, #220915 100%);
            box-shadow: 0 22px 55px rgba(69,20,44,.16);
            animation: mobileHistoryOpen .32s cubic-bezier(.16, 1, .3, 1) both;
          }

          @keyframes mobileHistoryOpen {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .history-mobile-detail h3 {
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 28px;
            line-height: 1.04;
            color: #fff8ee;
          }

          .history-mobile-detail p {
            margin: 12px 0 0;
            color: rgba(255,248,238,.80);
            font-size: 13px;
            line-height: 1.62;
            font-weight: 600;
          }

          .history-mobile-badge {
            display: inline-flex;
            margin-bottom: 10px;
            padding: 7px 12px;
            border-radius: 999px;
            color: #fff8ee;
            background: rgba(233,154,17,.16);
            border: 1px solid rgba(233,154,17,.34);
            font-size: 10px;
            font-weight: 950;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          .vision-section {
            padding: 62px 0;
          }

          .vision-grid {
            width: calc(100% - 22px);
            margin: 0 auto;
            gap: 20px;
          }

          .vision-card {
            padding: 30px 26px;
            border-radius: 28px;
          }

          .vision-number {
            gap: 9px;
          }

          .vision-number strong {
            font-size: 68px;
            letter-spacing: -3px;
          }

          .vision-number span {
            margin-bottom: 5px;
            padding: 9px 12px;
            border-radius: 14px;
            font-size: 22px;
          }

          .vision-card h2 {
            margin-top: 22px;
            font-size: 32px;
          }

          .vision-card p {
            font-size: 13.5px;
            line-height: 1.62;
          }

          .map-card {
            min-height: auto;
            border-radius: 28px;
          }

          .map-content {
            padding: 26px 24px 8px;
          }

          .map-content h3 {
            font-size: 30px;
          }

          .map-content p {
            font-size: 13px;
            line-height: 1.58;
          }

          .map-image-box {
            min-height: 320px;
            padding: 0 18px 24px;
          }

          .map-image-box img {
            max-height: 390px;
            border-radius: 28px;
          }

          .cta-section {
            padding: 0 0 68px;
          }

          .about-cta {
            width: calc(100% - 22px);
            margin: 0 auto;
            padding: 28px;
            border-radius: 28px;
            flex-direction: column;
            align-items: flex-start;
          }

          .about-cta h2 {
            font-size: 32px;
          }

          .about-cta p {
            font-size: 13.5px;
            line-height: 1.62;
          }

          .cta-actions {
            width: 100%;
            min-width: 0;
          }

          .about-btn {
            width: 100%;
            min-height: 52px;
            font-size: 13.5px;
          }
        }

        @media (max-width: 390px) {
          .vision-number strong {
            font-size: 58px;
          }

          .vision-number span {
            font-size: 18px;
          }

          .history-mobile-detail {
            margin-left: 58px;
            padding: 18px;
          }

          .history-mobile-detail h3 {
            font-size: 25px;
          }

          .map-image-box {
            min-height: 285px;
          }

          .map-image-box img {
            max-height: 285px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <main className="about-page">
        <section className="about-hero">
          <div className="about-container about-hero-grid">
            <div data-reveal="left">
              <div className="about-kicker">
                <FaLeaf />
                About Arvis
              </div>

              <h1 className="about-title">
                We deliver results
                <span>to Farmers.</span>
              </h1>

              <p className="about-hero-text">
                Arvis Fertilizers was established in 2019 by M. Keerthi Prasad,
                Managing Director, with a mission to bring better agri-input
                technology to Indian agriculture. We are building a strong,
                scalable fertilizer brand through product performance, dealer
                distribution and field-level farmer engagement.
              </p>
            </div>

            <div className="about-founder-card" data-reveal="right">
              <div className="founder-icon">
                <FaBullseye />
              </div>

              <h3>Research-driven agri-input company for Indian farmers</h3>

              <p>
                Founded with a clear mission by{" "}
                <strong>M. Keerthi Prasad</strong>, Arvis focuses on field
                problems, farmer needs and result-focused product thinking.
              </p>
            </div>
          </div>
        </section>

        <section className="who-section">
          <div className="about-container who-grid">
            <div data-reveal="left">
              <div className="section-label">
                <FaHandshake />
                Who We Are
              </div>

              <h2 className="section-title">
                Practical solutions for <span>real field problems.</span>
              </h2>
            </div>

            <div className="who-copy" data-reveal="right">
              <p>
                The Indian agriculture industry is growing fast, but farmers
                still face major challenges in choosing the right products to
                nourish, nurture and protect their crops. Arvis Fertilizers
                focuses on solving these field-level problems with practical
                fertilizer and agri chemical solutions.
              </p>

              <p>
                Our product thinking is built from field conditions, climate,
                crop needs and soil requirements. We communicate directly with
                farmers and dealer partners to understand real problems, collect
                feedback and improve our product approach.
              </p>

              <p>
                Arvis is not only about crop support or yield improvement. The
                larger purpose is farmer upliftment, strong dealer distribution
                and making innovative agri products accessible and affordable
                for Indian farming communities.
              </p>
            </div>
          </div>
        </section>

        <section className="history-section">
          <div className="history-head" data-reveal="up">
            <div className="section-label">
              <FaRocket />
              Our Journey
            </div>

            <h2 className="section-title">
              Growth path of <span>Arvis Fertilizers.</span>
            </h2>
          </div>

          <div
            className="history-path-board"
            data-reveal="up"
            style={{
              "--path-progress": `${pathProgress}`,
              "--spark-position": `${
                activeHistory * (100 / (historyItems.length - 1))
              }%`,
            }}
          >
            <div className="history-path-stage">
              <svg
                className="history-curve-svg"
                viewBox="0 0 1000 300"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="historyGold" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#e99a11" />
                    <stop offset="55%" stopColor="#f7c56a" />
                    <stop offset="100%" stopColor="#c77806" />
                  </linearGradient>
                </defs>

                <path
                  className="history-curve-base"
                  pathLength="1000"
                  d="M35 155 C 115 45, 190 45, 250 155 S 380 265, 500 155 S 620 45, 750 155 S 885 265, 965 155"
                />

                <path
                  className="history-curve-progress"
                  pathLength="1000"
                  d="M35 155 C 115 45, 190 45, 250 155 S 380 265, 500 155 S 620 45, 750 155 S 885 265, 965 155"
                />
              </svg>

              <span className="history-moving-spark"></span>

              {historyItems.map((item, index) => (
                <button
                  type="button"
                  className={`history-node ${
                    activeHistory === index ? "active" : ""
                  }`}
                  key={item.year}
                  onClick={() => setActiveHistory(index)}
                  style={{
                    left: `${(index / (historyItems.length - 1)) * 100}%`,
                    top: index % 2 === 0 ? "58px" : "184px",
                  }}
                >
                  <span className="history-node-circle">{item.icon}</span>
                  <span>
                    <b className="history-node-year">{item.year}</b>
                    <small className="history-node-title">{item.label}</small>
                  </span>
                </button>
              ))}
            </div>

            <div className="history-detail" key={activeItem.year}>
              <div className="history-detail-year">
                <h3>{activeItem.year}</h3>
                <span>{activeItem.badge}</span>
              </div>

              <div className="history-detail-copy">
                <h3>{activeItem.label}</h3>
                <p>{activeItem.text}</p>
              </div>
            </div>

            <div className="history-mobile-list">
              {historyItems.map((item, index) => (
                <div key={item.year}>
                  <button
                    type="button"
                    className={`history-mobile-node ${
                      activeHistory === index ? "active" : ""
                    }`}
                    onClick={() => setActiveHistory(index)}
                  >
                    <span className="history-mobile-circle">{item.icon}</span>

                    <span>
                      <b className="history-mobile-year">{item.year}</b>
                      <small className="history-mobile-title">
                        {item.label}
                      </small>
                    </span>
                  </button>

                  {activeHistory === index && (
                    <div className="history-mobile-detail">
                      <span className="history-mobile-badge">{item.badge}</span>
                      <h3>{item.label}</h3>
                      <p>{item.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="history-dots">
              {historyItems.map((item, index) => (
                <button
                  type="button"
                  className={`history-dot ${
                    activeHistory === index ? "active" : ""
                  }`}
                  key={item.year}
                  onClick={() => setActiveHistory(index)}
                  aria-label={`Go to ${item.year}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div className="about-container vision-grid">
            <div className="vision-card" data-reveal="left">
              <div className="vision-number">
                <strong>100</strong>
                <span>CR</span>
              </div>

              <h2>Vision</h2>

              <p>
                Arvis is building towards becoming a 100 CR brand by growing
                across South Indian agriculture markets with stronger dealer
                availability, farmer-level reach and product performance.
              </p>
            </div>

            <div className="map-card" data-reveal="right">
              <div className="map-content">
                <div className="section-label">
                  <FaMapMarkerAlt />
                  Regional Focus
                </div>

                <h3>Growing across South Indian agriculture markets</h3>

                <p>
                  Arvis is originally present in selected places of India and is
                  operating with a mission to extend across more regions.
                </p>
              </div>

              <div className="map-image-box">
                <img src="images/map.png" alt="Arvis regional presence map" />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="about-container">
            <div className="about-cta" data-reveal="up">
              <div>
                <h2>Join the Arvis growth journey</h2>

                <p>
                  Explore our products, connect for dealership opportunities or
                  visit investor relations to understand the company vision.
                </p>
              </div>

              <div className="cta-actions">
                <NavLink to="/products" className="about-btn primary">
                  Explore Products <FaArrowRight />
                </NavLink>

                <NavLink to="/contact" className="about-btn light">
                  Contact Us <FaPhoneAlt />
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;