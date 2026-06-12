import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaAward,
  FaChartLine,
  FaFlask,
  FaHandshake,
  FaLeaf,
  FaPhoneAlt,
  FaSeedling,
  FaShieldAlt,
  FaStore,
  FaUsers,
  FaQuoteLeft,
  FaStar,
  FaChevronDown,
  FaQuestionCircle,
  FaGlobeAsia,
  FaCheckCircle,
} from "react-icons/fa";

const SITE_URL = "https://www.arvisfertilizers.com";
const COMPANY_NAME = "Arvis Fertilizers & Chemicals Pvt. Ltd.";

const SEO_TITLE =
  "Arvis Fertilizers | Crop Nutrition & Fertilizer Company in South India";

const SEO_DESCRIPTION =
  "Arvis Fertilizers provides quality fertilizers, crop nutrition and agri-input solutions for farmers, dealers and distributors across Karnataka, Andhra Pradesh, Telangana, Tamil Nadu and Kerala.";

const TARGET_STATES = [
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Tamil Nadu",
  "Kerala",
];

const heroProducts = [
  { image: "/images/pro1.png", name: "Arvis Crop Nutrition" },
  { image: "/images/pro2.png", name: "Arvis Premium Fertilizer" },
  { image: "/images/pro3.png", name: "Arvis Plant Growth Support" },
  { image: "/images/pro4.png", name: "Arvis Agri Solution" },
  { image: "/images/pro5.png", name: "Arvis Result Focused Product" },
];

function Home() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);

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
    heroProducts.forEach((product) => {
      const img = new Image();
      img.src = product.image;
    });

    const productTimer = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % heroProducts.length);
    }, 3400);

    return () => clearInterval(productTimer);
  }, []);

  const qualityCards = [
    {
      icon: <FaShieldAlt />,
      title: "Premium Quality",
      text: "Delivering fertilizers of unmatched quality.",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainable Solutions",
      text: "Eco-conscious products for a greener tomorrow.",
    },
    {
      icon: <FaFlask />,
      title: "Innovative Research",
      text: "Advanced solutions for higher productivity.",
    },
    {
      icon: <FaHandshake />,
      title: "Farmer Focused",
      text: "Empowering farmers, enriching communities.",
    },
  ];

  const standardCards = [
    {
      image: "/images/imp.png",
      icon: <FaGlobeAsia />,
      title: "Imported Inputs",
      text: "Carefully selected imported inputs that support premium fertilizer performance and consistent crop nutrition.",
    },
    {
      image: "/images/lab.png",
      icon: <FaCheckCircle />,
      title: "Lab Tested",
      text: "Quality-focused lab testing approach for reliable, safe and result-oriented agri-input solutions.",
    },
  ];

  const stats = [
    {
      icon: <FaSeedling />,
      number: "2019",
      title: "Established",
      text: "Started with a vision to support Indian agriculture.",
    },
    {
      icon: <FaStore />,
      number: "150+",
      title: "Dealers",
      text: "Growing dealer network across focused markets.",
    },
    {
      icon: <FaUsers />,
      number: "4+",
      title: "Focused States",
      text: "AP, Telangana, Karnataka and Tamil Nadu.",
    },
    {
      icon: <FaChartLine />,
      number: "₹100Cr",
      title: "Vision 2030",
      text: "Building a trusted agriculture brand.",
    },
  ];

  const testimonials = [
    {
      role: "Farmer",
      native:
        "ఆర్విస్ ఎరువులు వాడిన తర్వాత మా పంటలో మంచి ఎదుగుదల కనిపించింది.",
      english:
        "After using Arvi’s fertilizers, we noticed better growth and healthier crops.",
      name: "Ramesh",
      state: "Andhra Pradesh",
    },
    {
      role: "Dealer",
      native:
        "ಆರ್ವಿಸ್ ಉತ್ಪನ್ನಗಳ ಗುಣಮಟ್ಟ ಚೆನ್ನಾಗಿದೆ, ರೈತರಿಂದ ಉತ್ತಮ ಪ್ರತಿಕ್ರಿಯೆ ಸಿಗುತ್ತಿದೆ.",
      english:
        "Arvi’s product quality is good, and farmers are giving positive feedback.",
      name: "Manjunath",
      state: "Karnataka",
    },
    {
      role: "Distributor",
      native:
        "ஆர்விஸ் உரங்கள் தரமாக இருக்கின்றன, விவசாயிகளிடம் நம்பிக்கை அதிகரிக்கிறது.",
      english:
        "Arvi’s fertilizers are reliable, and farmer trust is growing strongly.",
      name: "Karthik",
      state: "Tamil Nadu",
    },
    {
      role: "Farmer",
      native: "మా నేల పరిస్థితికి సరిపోయే మంచి ఎరువులు అందిస్తున్నారు.",
      english:
        "They provide good fertilizer solutions suitable for our soil and crop needs.",
      name: "Srinivas",
      state: "Telangana",
    },
    {
      role: "Dealer",
      native:
        "தயாரிப்புகளும் சேவையும் நன்றாக உள்ளது, டீலர் ஆதரவு மிகவும் பயனுள்ளதாக இருக்கிறது.",
      english:
        "The products and service are good, and dealer support is very helpful.",
      name: "Murugan",
      state: "Tamil Nadu",
    },
    {
      role: "Distributor",
      native:
        "ದಕ್ಷಿಣ ಭಾರತದ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಆರ್ವಿಸ್ ಬ್ರ್ಯಾಂಡ್ ನಿಧಾನವಾಗಿ ಬಲವಾಗುತ್ತಿದೆ.",
      english:
        "Arvi’s brand is steadily becoming stronger in the South Indian market.",
      name: "Prakash",
      state: "Karnataka",
    },
  ];

  const marqueeReviews = [...testimonials, ...testimonials];

  const faqs = [
    {
      question: "What is the vision of Arvi’s Fertilizers?",
      answer:
        "Our vision is to build a trusted agriculture brand that supports farmers with quality crop nutrition, sustainable products and strong dealer reach across focused markets.",
    },
    {
      question: "What type of products does Arvi’s Fertilizers provide?",
      answer:
        "Arvi’s Fertilizers focuses on crop nutrition, fertilizer solutions and agriculture support products designed to improve crop growth, quality and productivity.",
    },
    {
      question: "Who can connect with Arvi’s Fertilizers?",
      answer:
        "Farmers, dealers, distributors, business partners and investors can connect with Arvi’s Fertilizers for products, dealership opportunities and agriculture market growth.",
    },
    {
      question: "Which states are currently focused?",
      answer:
        "Arvi’s Fertilizers is currently focused on Andhra Pradesh, Telangana, Karnataka and Tamil Nadu with a plan to expand further.",
    },
    {
      question: "How does Arvi’s support farmers?",
      answer:
        "We support farmers by delivering quality products, crop-focused solutions and a growing dealer network that helps improve availability at the local level.",
    },
  ];

  const activeHeroProduct = heroProducts[activeProduct];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    alternateName: "Arvis Fertilizers",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SEO_DESCRIPTION,
    foundingDate: "2019",
    areaServed: TARGET_STATES.map((state) => ({
      "@type": "State",
      name: state,
    })),
    knowsAbout: [
      "Fertilizers",
      "Crop Nutrition",
      "Agriculture Products",
      "Plant Growth Support",
      "Agri Inputs",
      "Fertilizer Dealers",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Arvis Fertilizers",
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      logo: `${SITE_URL}/logo.png`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const productItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arvis Fertilizers Product Categories",
    itemListElement: heroProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      image: `${SITE_URL}${product.image}`,
      url: `${SITE_URL}/products`,
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
          content="Arvis Fertilizers, fertilizer company in Karnataka, fertilizer company in Andhra Pradesh, fertilizer company in Telangana, fertilizer company in Tamil Nadu, fertilizer company in Kerala, crop nutrition, agri inputs, plant growth support, agriculture products, fertilizer dealers South India"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={COMPANY_NAME} />
        <meta name="geo.region" content="IN" />
        <meta
          name="geo.placename"
          content="Karnataka, Andhra Pradesh, Telangana, Tamil Nadu, Kerala"
        />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arvis Fertilizers" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/images/hero.png`} />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/hero.png`} />

        <link
          rel="preload"
          as="image"
          href="/images/hero.png"
          media="(min-width: 721px)"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero1.png"
          media="(max-width: 720px)"
        />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(productItemListSchema)}
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

        .home-page {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: var(--arvis-bg);
          color: var(--arvis-text);
        }

        .home-container {
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
          transform: translateX(-35px);
        }

        [data-reveal="right"] {
          transform: translateX(35px);
        }

        [data-reveal="up"] {
          transform: translateY(38px);
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        .hero-section {
          position: relative;
          min-height: calc(100vh - 90px);
          display: flex;
          align-items: stretch;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(255, 248, 238, .96) 0%,
              rgba(255, 248, 238, .88) 28%,
              rgba(255, 248, 238, .30) 55%,
              rgba(255, 248, 238, .02) 100%
            ),
            url("images/hero.png");
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(circle at 78% 22%, rgba(231,155,22,.15), transparent 25%),
            radial-gradient(circle at 16% 82%, rgba(66,23,45,.06), transparent 28%);
        }

        .hero-grid {
          position: relative;
          z-index: 2;
          width: min(1320px, calc(100% - 120px));
          margin: 0 auto;
          min-height: calc(100vh - 90px);
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          padding: 44px 0 0;
        }

        .hero-content {
          max-width: 590px;
          margin-left: clamp(35px, 4vw, 95px);
          padding: 50px 0 92px;
        }

        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 34px;
          color: var(--arvis-gold);
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 7px;
          line-height: 1.45;
          text-transform: uppercase;
        }

        .hero-kicker::before {
          content: "";
          width: 50px;
          height: 2px;
          border-radius: 99px;
          background: var(--arvis-gold);
        }

        .hero-kicker svg {
          font-size: 12px;
          flex: 0 0 auto;
        }

        .hero-title {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(62px, 5.2vw, 92px);
          line-height: .98;
          letter-spacing: -2.8px;
          color: var(--arvis-text);
          font-weight: 900;
        }

        .hero-title span {
          display: block;
          color: var(--arvis-gold);
        }

        .hero-text {
          max-width: 530px;
          margin: 30px 0 0;
          color: rgba(44, 23, 34, .84);
          font-size: 18px;
          line-height: 1.72;
          font-weight: 600;
        }

        .hero-actions {
          margin-top: 38px;
          display: grid;
          gap: 16px;
          width: 380px;
        }

        .hero-btn {
          min-height: 64px;
          padding: 0 28px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          text-decoration: none;
          font-size: 18px;
          font-weight: 850;
          transition: transform .22s ease, box-shadow .22s ease, background .22s ease;
        }

        .hero-btn.primary {
          color: #fff;
          background: linear-gradient(135deg, #f4a51c, #d68608);
          box-shadow:
            0 18px 34px rgba(231, 155, 22, .28),
            inset 0 1px 0 rgba(255,255,255,.24);
        }

        .hero-btn.light {
          color: var(--arvis-plum);
          background: rgba(255, 248, 238, .74);
          border: 2px solid rgba(66, 23, 45, .72);
          backdrop-filter: blur(12px);
        }

        .hero-btn:hover {
          transform: translateY(-4px);
        }

        .hero-btn svg {
          transition: transform .22s ease;
        }

        .hero-btn:hover svg {
          transform: translateX(5px);
        }

        .hero-visual-space {
          min-height: 620px;
        }

        .hero-product-float {
          position: absolute;
          z-index: 3;
          right: calc(clamp(85px, 13vw, 230px) + 56px);
          bottom: clamp(34px, 8vh, 96px);
          width: clamp(270px, 27vw, 430px);
          pointer-events: none;
          display: grid;
          place-items: center;
        }

        .hero-product-glow {
          position: absolute;
          width: 86%;
          height: 34%;
          bottom: 4%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(69,20,44,.30), transparent 68%);
          filter: blur(18px);
          opacity: .75;
        }

        .hero-product-stack {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          place-items: center;
        }

        .hero-product-sizer {
          position: relative;
          z-index: 1;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .hero-product-item {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: grid;
          place-items: center;
          opacity: 0;
          transform: translateX(34px) scale(.96) rotate(-3deg);
          transition:
            opacity .9s ease,
            transform 1s cubic-bezier(.16, 1, .3, 1);
          will-change: opacity, transform;
        }

        .hero-product-item.active {
          z-index: 3;
          opacity: 1;
          transform: translateX(0) scale(1) rotate(0deg);
          animation: productInSmooth 1s cubic-bezier(.16, 1, .3, 1) both;
        }

        .hero-product-img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 34px 34px rgba(69,20,44,.24));
          animation: productFloat 4.6s ease-in-out infinite;
        }

        .hero-product-badge {
          position: absolute;
          left: 4%;
          top: 10%;
          z-index: 4;
          padding: 10px 14px;
          border-radius: 999px;
          color: #fff8ee;
          background: linear-gradient(135deg, #45142c, #2b0f1e);
          border: 1px solid rgba(233,154,17,.35);
          box-shadow: 0 16px 32px rgba(69,20,44,.16);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: .6px;
          text-transform: uppercase;
        }

        .hero-product-name {
          position: absolute;
          right: 0;
          bottom: 8%;
          z-index: 4;
          max-width: 220px;
          padding: 12px 16px;
          border-radius: 18px;
          color: var(--arvis-plum);
          background: rgba(255,248,238,.84);
          border: 1px solid rgba(233,154,17,.28);
          box-shadow: 0 18px 36px rgba(69,20,44,.12);
          backdrop-filter: blur(10px);
          font-size: 13px;
          line-height: 1.28;
          font-weight: 950;
          text-align: center;
        }

        @keyframes productInSmooth {
          0% {
            opacity: 0;
            transform: translateX(38px) scale(.965) rotate(-3deg);
          }

          52% {
            opacity: 1;
            transform: translateX(-5px) scale(1.01) rotate(1deg);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0deg);
          }
        }

        @keyframes productFloat {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-2px, 6px);
          }
        }

        .stats-section {
          padding: 86px 0 0;
          background: var(--arvis-bg);
        }

        .section-head {
          max-width: 850px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--arvis-gold);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .section-title {
          margin: 14px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(36px, 4vw, 58px);
          line-height: 1.05;
          color: var(--arvis-text);
          letter-spacing: -1.4px;
        }

        .section-title span {
          color: var(--arvis-gold);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          border-radius: 30px;
          background: rgba(255, 248, 238, .78);
          border: 1px solid rgba(231, 155, 22, .16);
          box-shadow: 0 28px 66px rgba(66, 23, 45, .08);
        }

        .stat-card {
          padding: 30px 24px;
          border-right: 1px solid rgba(66, 23, 45, .08);
        }

        .stat-card:last-child {
          border-right: 0;
        }

        .stat-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--arvis-gold);
          background: rgba(231, 155, 22, .11);
          font-size: 23px;
        }

        .stat-card h3 {
          margin: 22px 0 6px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 38px;
          line-height: .95;
          color: var(--arvis-text);
        }

        .stat-card strong {
          display: block;
          color: var(--arvis-text);
          font-size: 15px;
          font-weight: 950;
        }

        .stat-card p {
          margin: 9px 0 0;
          color: var(--arvis-muted);
          font-size: 13px;
          line-height: 1.5;
          font-weight: 650;
        }

        .testimonials-section {
          position: relative;
          padding: 82px 0 78px;
          background:
            radial-gradient(circle at 14% 10%, rgba(233,154,17,.12), transparent 28%),
            radial-gradient(circle at 90% 16%, rgba(69,20,44,.08), transparent 30%),
            linear-gradient(180deg, #fff3df 0%, #fff8ee 100%);
          overflow: hidden;
        }

        .testimonial-head {
          width: min(940px, calc(100% - 40px));
          margin: 0 auto 36px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .testimonial-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--arvis-gold);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .testimonial-title {
          margin: 14px auto 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1.05;
          letter-spacing: -1.5px;
          color: var(--arvis-text);
        }

        .testimonial-title span {
          color: var(--arvis-gold);
        }

        .trusted-title {
          width: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          text-align: left;
        }

        .trusted-title .trusted-title-label {
          color: var(--arvis-text);
          white-space: nowrap;
        }

        .trusted-title-words {
          display: grid;
          gap: 0;
        }

        .trusted-title-words b {
          display: block;
          color: var(--arvis-gold);
          font: inherit;
          line-height: .98;
          font-weight: 950;
        }

        .testimonial-sub {
          max-width: 700px;
          margin: 16px auto 0;
          color: var(--arvis-muted);
          font-size: 16px;
          line-height: 1.7;
          font-weight: 650;
        }

        .testimonial-marquee {
          position: relative;
          z-index: 2;
          width: 100%;
          overflow: hidden;
          padding: 8px 0 12px;
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 8%,
            #000 92%,
            transparent 100%
          );
        }

        .testimonial-track {
          display: flex;
          align-items: stretch;
          gap: 20px;
          width: max-content;
          animation: testimonialScroll 42s linear infinite;
        }

        @keyframes testimonialScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          width: 410px;
          min-height: 292px;
          padding: 24px;
          border-radius: 28px;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.13), transparent 32%),
            linear-gradient(135deg, rgba(255,255,255,.92), rgba(255,248,238,.78));
          border: 1px solid rgba(233,154,17,.26);
          box-shadow: 0 24px 58px rgba(69, 20, 44, .10);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
        }

        .review-role {
          width: fit-content;
          margin: 0 auto 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 999px;
          color: #fff8ee;
          background: linear-gradient(135deg, #45142c, #2b0f1e);
          font-size: 12px;
          font-weight: 900;
        }

        .quote-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--arvis-gold);
          background: rgba(233,154,17,.11);
          margin: 0 auto 12px;
        }

        .native-review {
          margin: 0 auto;
          min-height: 58px;
          color: #2d1723;
          font-size: 18px;
          line-height: 1.55;
          font-weight: 900;
        }

        .english-review {
          margin: 14px auto 0;
          min-height: 52px;
          color: rgba(45, 23, 35, .76);
          font-size: 14.5px;
          line-height: 1.62;
          font-weight: 650;
        }

        .testimonial-bottom {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(69, 20, 44, .10);
          display: grid;
          place-items: center;
          gap: 8px;
        }

        .review-person strong {
          display: block;
          color: var(--arvis-text);
          font-size: 15px;
          font-weight: 950;
        }

        .review-stars {
          display: flex;
          justify-content: center;
          gap: 3px;
          margin-top: 6px;
          color: var(--arvis-gold);
          font-size: 12px;
        }

        .review-state {
          width: fit-content;
          margin: 4px auto 0;
          padding: 8px 12px;
          border-radius: 999px;
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
          font-size: 12px;
          font-weight: 950;
          white-space: nowrap;
        }

        .quality-section {
          position: relative;
          padding: 88px 0;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.18), transparent 28%),
            radial-gradient(circle at 88% 20%, rgba(69,20,44,.07), transparent 32%),
            linear-gradient(135deg, #fff8ee 0%, #fff3df 52%, #f3dfc1 100%);
          overflow: hidden;
          border-top: 1px solid rgba(233,154,17,.18);
          border-bottom: 1px solid rgba(233,154,17,.18);
        }

        .quality-section::before {
          content: "";
          position: absolute;
          left: -8%;
          right: -8%;
          top: -62px;
          height: 108px;
          background: #fff8ee;
          border-radius: 0 0 50% 50%;
          transform: rotate(-2deg);
          z-index: 1;
        }

        .quality-section::after {
          content: "";
          position: absolute;
          left: -6%;
          right: -6%;
          top: 22px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(233,154,17,.95), transparent);
          transform: rotate(-2deg);
          z-index: 2;
        }

        .quality-head {
          position: relative;
          z-index: 3;
          max-width: 860px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .quality-kicker,
        .standards-kicker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--arvis-gold);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .quality-title,
        .standards-title {
          margin: 14px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(36px, 4vw, 58px);
          line-height: 1.05;
          color: inherit;
          letter-spacing: -1.4px;
        }

        .quality-title span,
        .standards-title span {
          color: var(--arvis-gold);
        }

        .quality-sub,
        .standards-sub {
          max-width: 690px;
          margin: 16px auto 0;
          color: var(--arvis-muted);
          font-size: 15.5px;
          line-height: 1.7;
          font-weight: 650;
        }

        .quality-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .quality-card {
          position: relative;
          overflow: hidden;
          min-height: 250px;
          padding: 26px;
          border-radius: 30px;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.13), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.72), rgba(255,248,238,.48));
          border: 1px solid rgba(233,154,17,.26);
          box-shadow: 0 24px 60px rgba(69,20,44,.09);
          transition: .25s ease;
        }

        .quality-card:hover {
          transform: translateY(-8px);
          border-color: rgba(233,154,17,.44);
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.18), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,248,238,.62));
          box-shadow: 0 30px 70px rgba(69,20,44,.12);
        }

        .quality-icon {
          width: 68px;
          height: 68px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--arvis-gold);
          background: rgba(233,154,17,.10);
          border: 2px solid rgba(233,154,17,.52);
          font-size: 27px;
          margin-bottom: 22px;
        }

        .quality-card h3 {
          margin: 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          line-height: 1.05;
          font-weight: 950;
        }

        .quality-card p {
          margin: 12px 0 0;
          color: var(--arvis-muted);
          font-size: 14.5px;
          line-height: 1.62;
          font-weight: 650;
        }

        .standards-section {
          position: relative;
          padding: 88px 0 0;
          background:
            radial-gradient(circle at 10% 14%, rgba(233,154,17,.11), transparent 28%),
            radial-gradient(circle at 88% 20%, rgba(69,20,44,.08), transparent 30%),
            linear-gradient(180deg, #fff3df 0%, #fff8ee 100%);
          overflow: hidden;
        }

        .standards-head {
          width: min(880px, calc(100% - 40px));
          margin: 0 auto 34px;
          text-align: center;
        }

        .standards-title {
          color: var(--arvis-text);
        }

        .standards-sub {
          color: var(--arvis-muted);
        }

        .standards-grid {
          width: min(1120px, calc(100% - 96px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .standard-card {
          position: relative;
          overflow: hidden;
          min-height: 360px;
          border-radius: 34px;
          background: #fff8ee;
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 26px 70px rgba(69,20,44,.10);
          transition: .28s ease;
        }

        .standard-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 34px 88px rgba(69,20,44,.15);
        }

        .standard-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(
              180deg,
              rgba(45, 23, 35, 0) 0%,
              rgba(45, 23, 35, .22) 42%,
              rgba(45, 23, 35, .88) 100%
            );
          pointer-events: none;
        }

        .standard-card img {
          width: 100%;
          height: 100%;
          min-height: 360px;
          object-fit: cover;
          display: block;
          transition: transform .5s ease;
        }

        .standard-card:hover img {
          transform: scale(1.06);
        }

        .standard-content {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          z-index: 3;
          color: #fff8ee;
        }

        .standard-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          margin-bottom: 16px;
          border-radius: 50%;
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 16px 34px rgba(0,0,0,.18);
          font-size: 23px;
        }

        .standard-content h3 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          line-height: 1.02;
          letter-spacing: -1px;
        }

        .standard-content p {
          margin: 12px 0 0;
          max-width: 440px;
          color: rgba(255,248,238,.80);
          font-size: 15px;
          line-height: 1.65;
          font-weight: 650;
        }

        .faq-section {
          position: relative;
          padding: 84px 0 0;
          background: var(--arvis-bg);
          overflow: hidden;
        }

        .faq-head {
          width: min(860px, calc(100% - 40px));
          margin: 0 auto 34px;
          text-align: center;
        }

        .faq-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--arvis-gold);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .faq-head h2 {
          margin: 14px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 1.05;
          letter-spacing: -1.4px;
          color: var(--arvis-text);
        }

        .faq-head h2 span {
          color: var(--arvis-gold);
        }

        .faq-head p {
          max-width: 660px;
          margin: 16px auto 0;
          color: var(--arvis-muted);
          font-size: 15.5px;
          line-height: 1.7;
          font-weight: 650;
        }

        .faq-list {
          width: min(860px, calc(100% - 40px));
          margin: 0 auto;
          display: grid;
          gap: 14px;
        }

        .faq-item {
          border-radius: 22px;
          background: rgba(255, 248, 238, .82);
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 20px 52px rgba(69, 20, 44, .07);
          overflow: hidden;
          animation: faqComeUp .45s cubic-bezier(.16, 1, .3, 1) both;
        }

        @keyframes faqComeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-question {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--arvis-text);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          text-align: left;
          font-size: 16px;
          font-weight: 950;
        }

        .faq-question span {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .faq-number {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
          font-size: 12px;
          font-weight: 950;
        }

        .faq-arrow {
          color: var(--arvis-gold);
          transition: transform .12s ease;
          flex: 0 0 auto;
        }

        .faq-item.active .faq-arrow {
          transform: rotate(180deg);
        }

        .faq-answer {
          display: none;
        }

        .faq-item.active .faq-answer {
          display: block;
        }

        .faq-answer p {
          margin: 0;
          padding: 0 24px 22px 70px;
          color: var(--arvis-muted);
          font-size: 14.5px;
          line-height: 1.72;
          font-weight: 650;
        }

        .cta-section {
          padding: 86px 0 0;
          background: var(--arvis-bg);
        }

        .cta-card {
          margin: 0 auto;
          padding: 42px;
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: #fff8ee;
          background:
            radial-gradient(circle at 12% 0%, rgba(247,197,106,.18), transparent 34%),
            linear-gradient(135deg, #42172d, #2b0f1e);
          box-shadow: 0 30px 70px rgba(66, 23, 45, .16);
        }

        .cta-card h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 3.5vw, 50px);
          line-height: 1.05;
        }

        .cta-card p {
          max-width: 760px;
          margin: 12px 0 0;
          color: rgba(255,248,238,.78);
          font-size: 16px;
          line-height: 1.7;
          font-weight: 600;
        }

        .cta-card .hero-btn {
          min-width: 190px;
        }

        @media (max-width: 1200px) {
          .hero-grid {
            width: min(1240px, calc(100% - 70px));
          }

          .hero-content {
            margin-left: clamp(18px, 3vw, 55px);
          }

          .hero-title {
            font-size: clamp(56px, 6vw, 82px);
          }

          .hero-product-float {
            right: calc(clamp(56px, 8vw, 110px) + 46px);
            width: clamp(245px, 29vw, 380px);
          }
        }

        @media (max-width: 1100px) {
          .home-container {
            width: min(1240px, calc(100% - 44px));
          }

          .hero-grid {
            grid-template-columns: 1fr .9fr;
          }

          .hero-title {
            font-size: clamp(52px, 7vw, 78px);
          }

          .hero-text {
            font-size: 17px;
          }

          .quality-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-card {
            border-bottom: 1px solid rgba(66, 23, 45, .08);
          }

          .stat-card:nth-child(2) {
            border-right: 0;
          }
        }

        @media (max-width: 720px) {
          .home-container {
            width: 100%;
          }

          [data-reveal="left"],
          [data-reveal="right"],
          [data-reveal="up"] {
            transform: translateY(20px);
          }

          .hero-section {
            min-height: 500px;
            display: block;
            background: #fff3df;
            overflow: hidden;
          }

          .hero-section::before {
            display: block;
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background-image: url("images/hero1.png");
            background-size: 112% auto;
            background-position: center -82px;
            background-repeat: no-repeat;
          }

          .hero-section::after {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 1;
            pointer-events: none;
            background:
              linear-gradient(
                90deg,
                rgba(255, 248, 238, .72) 0%,
                rgba(255, 248, 238, .42) 33%,
                rgba(255, 248, 238, .06) 62%,
                rgba(255, 248, 238, 0) 100%
              );
          }

          .hero-grid {
            position: relative;
            z-index: 2;
            width: 100%;
            min-height: 500px;
            display: block;
            padding: 0;
            margin: 0;
          }

          .hero-content {
            position: relative;
            z-index: 4;
            width: 100%;
            max-width: none;
            margin-left: 0;
            padding: 28px 20px 0;
          }

          .hero-kicker {
            margin-bottom: 25px;
            gap: 7px;
            color: #e99a11;
            font-size: 8.5px;
            font-weight: 950;
            letter-spacing: 3.2px;
            line-height: 1.5;
          }

          .hero-kicker::before {
            width: 36px;
            height: 1.5px;
            background: #e99a11;
          }

          .hero-kicker svg {
            font-size: 8px;
          }

          .hero-title {
            max-width: 215px;
            margin: 0;
            font-size: 35px;
            line-height: .98;
            letter-spacing: -1.15px;
            color: #2d1723;
            text-shadow: 0 1px 0 rgba(255, 248, 238, .25);
          }

          .hero-title span {
            color: #e99a11;
          }

          .hero-text {
            max-width: 190px;
            margin-top: 20px;
            color: rgba(45, 23, 35, .86);
            font-size: 10.6px;
            line-height: 1.55;
            font-weight: 600;
          }

          .hero-actions {
            width: 149px;
            margin-top: 18px;
            margin-left: 0;
            display: grid;
            gap: 9px;
          }

          .hero-btn {
            min-height: 33px;
            padding: 0 10px;
            border-radius: 4px;
            gap: 8px;
            font-size: 9.5px;
            font-weight: 900;
          }

          .hero-btn.primary {
            color: #fff;
            background: linear-gradient(135deg, #f4a51c, #d98909);
            box-shadow: 0 8px 16px rgba(194, 111, 6, .18);
          }

          .hero-btn.light {
            color: #42172d;
            background: rgba(255, 248, 238, .58);
            border: 1.5px solid rgba(66, 23, 45, .78);
            backdrop-filter: blur(5px);
          }

          .hero-btn svg {
            font-size: 9px;
          }

          .hero-visual-space {
            display: none;
          }

          .hero-product-float {
            z-index: 2;
            right: 44px;
            bottom: -22px;
            width: 180px;
          }

          .hero-product-badge,
          .hero-product-name {
            display: none;
          }

          .hero-product-glow {
            width: 92%;
            height: 30%;
            bottom: 0;
            filter: blur(13px);
          }

          .hero-product-item {
            transform: translateX(24px) scale(.97) rotate(-2deg);
          }

          .hero-product-img {
            filter: drop-shadow(0 22px 24px rgba(69,20,44,.22));
          }

          .stats-section {
            padding: 64px 0 0;
          }

          .section-head {
            width: calc(100% - 32px);
            text-align: left;
            margin-bottom: 26px;
          }

          .section-title {
            font-size: clamp(34px, 11vw, 46px);
          }

          .stats-grid {
            width: calc(100% - 22px);
            margin: 0 auto;
            grid-template-columns: repeat(2, 1fr);
            border-radius: 26px;
          }

          .stat-card {
            padding: 23px 18px;
          }

          .stat-icon {
            width: 48px;
            height: 48px;
            font-size: 19px;
          }

          .stat-card h3 {
            font-size: 31px;
          }

          .stat-card strong {
            font-size: 12px;
          }

          .stat-card p {
            font-size: 11px;
          }

          .testimonials-section {
            padding: 54px 0 52px;
          }

          .testimonial-head {
            width: calc(100% - 30px);
            margin-bottom: 24px;
          }

          .testimonial-kicker {
            font-size: 9.5px;
            letter-spacing: 2px;
          }

          .testimonial-title {
            font-size: 31px;
          }

          .trusted-title {
            gap: 10px;
          }

          .testimonial-sub {
            font-size: 13px;
            line-height: 1.55;
          }

          .testimonial-marquee {
            mask-image: none;
          }

          .testimonial-track {
            gap: 12px;
            animation-duration: 34s;
          }

          .testimonial-card {
            width: calc((100vw - 46px) / 2);
            min-height: 245px;
            padding: 13px;
            border-radius: 18px;
          }

          .review-role {
            padding: 6px 9px;
            font-size: 9px;
            margin-bottom: 10px;
          }

          .quote-icon {
            width: 30px;
            height: 30px;
            font-size: 12px;
            margin-bottom: 8px;
          }

          .native-review {
            min-height: 54px;
            font-size: 11.2px;
            line-height: 1.42;
          }

          .english-review {
            min-height: 58px;
            margin-top: 9px;
            font-size: 9.6px;
            line-height: 1.46;
          }

          .testimonial-bottom {
            margin-top: 10px;
            padding-top: 10px;
            gap: 6px;
          }

          .review-person strong {
            font-size: 10.5px;
          }

          .review-stars {
            font-size: 8.5px;
            margin-top: 4px;
          }

          .review-state {
            padding: 6px 8px;
            font-size: 8.8px;
          }

          .quality-section {
            padding: 62px 0 58px;
          }

          .quality-section::before {
            left: -18%;
            right: -18%;
            top: -36px;
            height: 66px;
          }

          .quality-section::after {
            top: 21px;
            height: 1.5px;
          }

          .quality-head {
            width: calc(100% - 30px);
            margin-bottom: 26px;
          }

          .quality-kicker,
          .standards-kicker {
            font-size: 9.5px;
            letter-spacing: 2px;
          }

          .quality-title,
          .standards-title {
            font-size: 31px;
          }

          .quality-sub,
          .standards-sub {
            font-size: 13px;
            line-height: 1.55;
          }

          .quality-grid {
            width: calc(100% - 22px);
            margin: 0 auto;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .quality-card {
            min-height: 206px;
            padding: 15px;
            border-radius: 20px;
          }

          .quality-icon {
            width: 42px;
            height: 42px;
            font-size: 16px;
            border-width: 1.6px;
            margin-bottom: 13px;
          }

          .quality-card h3 {
            font-size: 15px;
          }

          .quality-card p {
            margin-top: 7px;
            font-size: 10.6px;
            line-height: 1.45;
          }

          .standards-section {
            padding: 62px 0 0;
          }

          .standards-head {
            width: calc(100% - 30px);
            margin-bottom: 24px;
          }

          .standards-grid {
            width: calc(100% - 22px);
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .standard-card {
            min-height: 260px;
            border-radius: 24px;
          }

          .standard-card img {
            min-height: 260px;
          }

          .standard-content {
            left: 20px;
            right: 20px;
            bottom: 20px;
          }

          .standard-icon {
            width: 46px;
            height: 46px;
            font-size: 18px;
            margin-bottom: 12px;
          }

          .standard-content h3 {
            font-size: 27px;
          }

          .standard-content p {
            font-size: 12.5px;
            line-height: 1.55;
          }

          .faq-section {
            padding: 62px 0 0;
          }

          .faq-head {
            width: calc(100% - 30px);
            margin-bottom: 24px;
          }

          .faq-kicker {
            font-size: 9.5px;
            letter-spacing: 2px;
          }

          .faq-head h2 {
            font-size: 31px;
          }

          .faq-head p {
            font-size: 13px;
            line-height: 1.55;
          }

          .faq-list {
            width: calc(100% - 22px);
            gap: 10px;
          }

          .faq-item {
            border-radius: 18px;
            animation-duration: .25s;
          }

          .faq-question {
            padding: 15px 14px;
            font-size: 12.8px;
            gap: 10px;
          }

          .faq-question span {
            gap: 9px;
          }

          .faq-number {
            width: 28px;
            height: 28px;
            flex-basis: 28px;
            font-size: 9.5px;
          }

          .faq-answer p {
            padding: 0 14px 16px 51px;
            font-size: 12px;
            line-height: 1.55;
          }

          .cta-section {
            padding: 64px 0 0;
          }

          .cta-card {
            width: calc(100% - 22px);
            padding: 28px;
            border-radius: 26px;
            flex-direction: column;
            align-items: flex-start;
          }

          .cta-card p {
            font-size: 14px;
          }

          .cta-card .hero-btn {
            width: 100%;
          }
        }

        @media (max-width: 430px) {
          .hero-section {
            min-height: 500px;
          }

          .hero-section::before {
            background-size: 114% auto;
            background-position: center -76px;
          }

          .hero-grid {
            min-height: 500px;
          }

          .hero-content {
            padding: 28px 20px 0;
          }

          .hero-title {
            max-width: 210px;
            font-size: 34px;
          }

          .hero-text {
            max-width: 190px;
            margin-top: 20px;
            font-size: 10.4px;
          }

          .hero-actions {
            width: 149px;
            margin-top: 18px;
          }

          .hero-product-float {
            right: 42px;
            bottom: -26px;
            width: 178px;
          }
        }

        @media (max-width: 390px) {
          .hero-section {
            min-height: 492px;
          }

          .hero-section::before {
            background-size: 118% auto;
            background-position: center -72px;
          }

          .hero-grid {
            min-height: 492px;
          }

          .hero-content {
            padding: 26px 18px 0;
          }

          .hero-kicker {
            font-size: 7.8px;
            letter-spacing: 2.9px;
            margin-bottom: 23px;
          }

          .hero-kicker::before {
            width: 32px;
          }

          .hero-title {
            max-width: 198px;
            font-size: 32px;
          }

          .hero-text {
            max-width: 178px;
            font-size: 9.8px;
            margin-top: 18px;
          }

          .hero-actions {
            width: 144px;
            margin-top: 17px;
          }

          .hero-btn {
            min-height: 32px;
            font-size: 9px;
          }

          .hero-product-float {
            right: 36px;
            bottom: -30px;
            width: 165px;
          }

          .trusted-title {
            gap: 8px;
          }

          .testimonial-title {
            font-size: 28px;
          }

          .quality-grid {
            gap: 10px;
          }

          .quality-card {
            min-height: 198px;
            padding: 13px;
          }

          .quality-card h3 {
            font-size: 13.5px;
          }

          .quality-card p {
            font-size: 9.8px;
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

      <main className="home-page">
        <section className="hero-section">
          <div className="home-container hero-grid">
            <div className="hero-content" data-reveal="left">
              <div className="hero-kicker">
                <FaLeaf />
                Nutrition Today,
                <br />
                Harvest Tomorrow
              </div>

              <h1 className="hero-title">
                Nourishing Growth.
                <span>Enriching Lives.</span>
              </h1>

              <p className="hero-text">
                Arvi’s Fertilizers is committed to delivering high-quality,
                innovative, and sustainable fertilizer solutions for a better
                tomorrow.
              </p>

              <div className="hero-actions">
                <NavLink to="/products" className="hero-btn primary">
                  Explore Our Products <FaArrowRight />
                </NavLink>

                <NavLink to="/about" className="hero-btn light">
                  Learn More About Us
                </NavLink>
              </div>
            </div>

            <div className="hero-visual-space" aria-hidden="true"></div>
          </div>

          <div className="hero-product-float" data-reveal="right">
            <span className="hero-product-badge">Featured Products</span>
            <span className="hero-product-glow"></span>

            <div className="hero-product-stack">
              <img
                className="hero-product-img hero-product-sizer"
                src={activeHeroProduct.image}
                alt=""
                aria-hidden="true"
              />

              {heroProducts.map((product, index) => (
                <div
                  className={`hero-product-item ${
                    activeProduct === index ? "active" : ""
                  }`}
                  key={product.image}
                  aria-hidden={activeProduct !== index}
                >
                  <img
                    className="hero-product-img"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
              ))}
            </div>

            <span className="hero-product-name">{activeHeroProduct.name}</span>
          </div>
        </section>

        <section className="stats-section">
          <div className="home-container">
            <div className="section-head" data-reveal="up">
              <div className="section-kicker">
                <FaAward />
                Arvis Growth
              </div>

              <h2 className="section-title">
                Building trust through <span>quality and reach.</span>
              </h2>
            </div>

            <div className="stats-grid" data-reveal="up">
              {stats.map((item) => (
                <div className="stat-card" key={item.title}>
                  <div className="stat-icon">{item.icon}</div>
                  <h3>{item.number}</h3>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="testimonial-head" data-reveal="up">
            <div className="testimonial-kicker">
              <FaStar />
              Farmer Voices
            </div>

            <h2 className="testimonial-title trusted-title">
              <span className="trusted-title-label">Trusted by</span>

              <span className="trusted-title-words">
                <b>Farmers</b>
                <b>Dealers</b>
                <b>Distributors</b>
              </span>
            </h2>

            <p className="testimonial-sub">
              Real feedback across South Indian agriculture markets from
              Farmers, Dealers and Distributors.
            </p>
          </div>

          <div className="testimonial-marquee">
            <div className="testimonial-track">
              {marqueeReviews.map((review, index) => (
                <article
                  className="testimonial-card"
                  key={`${review.name}-${index}`}
                >
                  <div>
                    <span className="review-role">{review.role}</span>

                    <div className="quote-icon">
                      <FaQuoteLeft />
                    </div>

                    <p className="native-review">{review.native}</p>
                    <p className="english-review">{review.english}</p>
                  </div>

                  <div className="testimonial-bottom">
                    <div className="review-person">
                      <strong>{review.name}</strong>
                      <div className="review-stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>

                    <span className="review-state">{review.state}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quality-section">
          <div className="home-container">
            <div className="quality-head" data-reveal="up">
              <div className="quality-kicker">
                <FaShieldAlt />
                Quality Promise
              </div>

              <h2 className="quality-title">
                Product strength with <span>trusted standards.</span>
              </h2>

              <p className="quality-sub">
                Arvis focuses on quality, research, sustainability and
                farmer-level product performance.
              </p>
            </div>

            <div className="quality-grid">
              {qualityCards.map((item, index) => (
                <article
                  className="quality-card"
                  data-reveal="up"
                  key={item.title}
                  style={{ transitionDelay: `${index * 0.06}s` }}
                >
                  <div className="quality-icon">{item.icon}</div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="standards-section">
          <div className="standards-head" data-reveal="up">
            <div className="standards-kicker">
              <FaFlask />
              Product Standards
            </div>

            <h2 className="standards-title">
              Imported support and <span>lab-tested confidence.</span>
            </h2>

            <p className="standards-sub">
              Separate quality focus for premium sourcing and testing-backed
              product reliability.
            </p>
          </div>

          <div className="standards-grid">
            {standardCards.map((item, index) => (
              <article
                className="standard-card"
                data-reveal="up"
                key={item.title}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <img src={item.image} alt={item.title} />

                <div className="standard-content">
                  <div className="standard-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <div className="faq-head" data-reveal="up">
            <div className="faq-kicker">
              <FaQuestionCircle />
              FAQ
            </div>

            <h2>
              Frequently asked <span>questions.</span>
            </h2>

            <p>
              Learn about Arvi’s Fertilizers, our vision, products, dealer
              support and focused agriculture markets.
            </p>
          </div>

          <div className="faq-list" data-reveal="up">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${activeFaq === index ? "active" : ""}`}
                key={faq.question}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                >
                  <span>
                    <b className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </b>
                    {faq.question}
                  </span>

                  <FaChevronDown className="faq-arrow" />
                </button>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="home-container">
            <div className="cta-card" data-reveal="up">
              <div>
                <h2>Grow with Arvi’s Fertilizers</h2>
                <p>
                  Connect with us for products, dealership opportunities,
                  investor relations and business growth across focused
                  agriculture markets.
                </p>
              </div>

              <NavLink to="/contact" className="hero-btn primary">
                Contact Us <FaPhoneAlt />
              </NavLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;