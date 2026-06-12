import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaAward,
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaFlask,
  FaGlobeAsia,
  FaHandshake,
  FaIndustry,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRocket,
  FaSeedling,
  FaShieldAlt,
  FaStore,
  FaTractor,
  FaUsers,
} from "react-icons/fa";

function InvestorRelations() {
  const investorPhone = "+917893423282";
  const siteUrl = "https://www.arvisfertilizers.com";
  const pageUrl = `${siteUrl}/investor-relations`;

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const enquiryMail =
    "mailto:arvisfertilizers@gmail.com?subject=Investor%20Enquiry%20-%20Arvis%20Fertilizers&body=Hello%20Arvis%20Team,%0A%0AI%20am%20interested%20in%20investment%20or%20strategic%20partnership%20opportunities.%20Please%20share%20more%20details.%0A%0ARegards,";

  const confidenceStats = [
    {
      icon: <FaSeedling />,
      value: "2019",
      label: "Established with long-term agri vision",
    },
    {
      icon: <FaStore />,
      value: "Dealer-Led",
      label: "Scalable market distribution model",
    },
    {
      icon: <FaFlask />,
      value: "R&D Focus",
      label: "Specialty crop nutrition development",
    },
    {
      icon: <FaRocket />,
      value: "₹15 Cr",
      label: "2025–26 growth milestone",
    },
  ];

  const turnoverJourney = [
    {
      year: "2020–21",
      value: "₹15K",
      model: "Foundation Stage",
      text: "Initial business setup and early market entry.",
    },
    {
      year: "2021–22",
      value: "₹30 Lakhs",
      model: "Direct B2C",
      text: "Direct farmer and customer-focused sales growth.",
    },
    {
      year: "2022–23",
      value: "₹80 Lakhs",
      model: "B2C + B2B",
      text: "Expansion into both customer and business channels.",
    },
    {
      year: "2023–24",
      value: "₹2 Cr",
      model: "Regional Growth",
      text: "Stronger market reach and dealer-led performance.",
    },
    {
      year: "2024–25",
      value: "₹8 Cr",
      model: "Rapid Expansion",
      text: "High-growth phase with stronger agri-input demand.",
    },
    {
      year: "2025–26",
      value: "₹15 Cr",
      model: "Growth Vision",
      text: "Focused expansion across products, dealers and markets.",
    },
  ];

  const highlights = [
    {
      icon: <FaSeedling />,
      title: "Strong Growth Opportunity",
      text: "India’s agri-input sector is moving towards specialty fertilizers, crop nutrition efficiency and sustainable farming products.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Global Sourcing Potential",
      text: "Opportunities to build sourcing relationships from UAE, Netherlands, Russia and other international agri-input markets.",
    },
    {
      icon: <FaChartLine />,
      title: "Scalable Revenue Model",
      text: "Dealer-driven distribution, repeat crop-season demand and product expansion create strong scale potential.",
    },
    {
      icon: <FaTractor />,
      title: "Farmer Trust Engine",
      text: "Field demonstrations, dealer support and performance-based products help build farmer confidence and recurring demand.",
    },
  ];

  const investorReasons = [
    {
      icon: <FaShieldAlt />,
      title: "High-Trust Category",
      text: "Agriculture is a necessity-driven sector. Farmers continuously require crop nutrition, plant protection and yield support solutions.",
    },
    {
      icon: <FaUsers />,
      title: "Repeat Market Demand",
      text: "Every crop cycle creates recurring demand, making agri-inputs a strong long-term business opportunity.",
    },
    {
      icon: <FaIndustry />,
      title: "Manufacturing Upside",
      text: "Investment can strengthen manufacturing capacity, product quality, private-label opportunities and operational control.",
    },
    {
      icon: <FaHandshake />,
      title: "Partnership Friendly",
      text: "Arvis is positioned for investment, strategic partnerships, joint ventures, dealer expansion and export collaborations.",
    },
  ];

  const growthDrivers = [
    "Specialty fertilizer adoption",
    "Precision farming practices",
    "Sustainable crop nutrition demand",
    "Government support for agriculture productivity",
    "Export opportunities in agricultural inputs",
    "Increasing focus on yield improvement",
  ];

  const capitalUse = [
    {
      icon: <FaIndustry />,
      title: "Manufacturing Expansion",
      text: "Strengthening production capacity for future demand and wider product availability.",
    },
    {
      icon: <FaFlask />,
      title: "Research & Development",
      text: "Developing specialty fertilizers, micronutrients and result-focused crop solutions.",
    },
    {
      icon: <FaStore />,
      title: "Distribution Growth",
      text: "Expanding dealer and distributor network across target agricultural regions.",
    },
    {
      icon: <FaRocket />,
      title: "Brand & Technology",
      text: "Improving brand visibility, marketing systems and digital agriculture initiatives.",
    },
  ];

  const products = [
    "Specialty Fertilizers",
    "Water-Soluble Nutrients",
    "Micronutrient Formulations",
    "Plant Growth Promoters",
    "Crop Protection Solutions",
    "Advanced Crop Nutrition",
  ];

  const stateFocus = [
    {
      state: "Andhra Pradesh",
      text: "Fertilizer and crop nutrition solutions for paddy, chilli, horticulture and coastal agriculture markets.",
    },
    {
      state: "Telangana",
      text: "Dealer and farmer-focused agri-input support for cotton, paddy, maize and commercial crop regions.",
    },
    {
      state: "Karnataka",
      text: "Specialty fertilizer and water-soluble nutrition opportunity across vegetable, plantation and field crops.",
    },
    {
      state: "Tamil Nadu",
      text: "Crop nutrition and agri-input expansion potential for horticulture, paddy and high-value crop markets.",
    },
  ];

  const advantages = [
    "Strong industry experience",
    "Quality-focused sourcing and manufacturing",
    "Growing dealer network",
    "Farmer engagement programs",
    "Diverse product portfolio",
    "Scalable operational model",
    "Expansion-ready business structure",
    "Strategic partnership potential",
  ];

  const flywheel = [
    {
      icon: <FaFlask />,
      title: "Product Innovation",
      text: "Specialty formulations and crop-focused solutions.",
    },
    {
      icon: <FaStore />,
      title: "Dealer Expansion",
      text: "Wider regional availability and stronger distribution.",
    },
    {
      icon: <FaTractor />,
      title: "Farmer Adoption",
      text: "Field performance builds confidence and repeat usage.",
    },
    {
      icon: <FaChartLine />,
      title: "Revenue Scale",
      text: "Network growth and product depth support long-term value.",
    },
  ];

  const visionPoints = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Pan-India Presence",
      text: "Expand across key agriculture states with a stronger sales and dealer ecosystem.",
    },
    {
      icon: <FaHandshake />,
      title: "Global Partnerships",
      text: "Build sourcing and strategic partnerships for reliable raw materials and advanced formulations.",
    },
    {
      icon: <FaBuilding />,
      title: "Advanced Capability",
      text: "Strengthen manufacturing, quality control, product development and operational systems.",
    },
    {
      icon: <FaAward />,
      title: "Sustainable Growth",
      text: "Create long-term value through quality products, farmer trust and profitable expansion.",
    },
  ];

  const seoTitle =
    "Investor Relations | Arvis Fertilizers & Chemicals Pvt. Ltd. | Fertilizer Company in India";

  const seoDescription =
    "Arvis Fertilizers & Chemicals Pvt. Ltd. is a growing fertilizer company in India focused on specialty fertilizers, crop nutrition, dealer expansion, farmer support and agriculture market growth across Andhra Pradesh, Telangana, Karnataka, Tamil Nadu and Kerala.";

  const targetStates = [
    "Andhra Pradesh",
    "Telangana",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "South India",
    "India",
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arvis Fertilizers & Chemicals Pvt. Ltd.",
    alternateName: "Arvis Fertilizers",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    foundingDate: "2019",
    description:
      "Arvis Fertilizers & Chemicals Pvt. Ltd. is a fertilizer and agri-input company in India focused on specialty fertilizers, crop nutrition, farmer support, dealer network growth and agriculture market expansion.",
    areaServed: targetStates.map((state) => ({
      "@type": "AdministrativeArea",
      name: state,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7893423282",
      contactType: "Investor Relations and Business Enquiry",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
    knowsAbout: [
      "Fertilizers",
      "Specialty Fertilizers",
      "Crop Nutrition",
      "Water-Soluble Fertilizers",
      "Micronutrient Formulations",
      "Plant Growth Promoters",
      "Agri Inputs",
      "Agriculture Products",
      "Fertilizer Dealer Network",
      "Indian Agriculture Markets",
    ],
  };

  const investorPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seoTitle,
    url: pageUrl,
    description: seoDescription,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "Arvis Fertilizers",
      url: siteUrl,
    },
    about: {
      "@type": "Organization",
      name: "Arvis Fertilizers & Chemicals Pvt. Ltd.",
      url: siteUrl,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
    keywords: [
      "Arvis Fertilizers investor relations",
      "fertilizer company in India",
      "specialty fertilizers India",
      "crop nutrition company India",
      "fertilizer company Andhra Pradesh",
      "fertilizer company Telangana",
      "fertilizer company Karnataka",
      "fertilizer company Tamil Nadu",
      "fertilizer company Kerala",
      "agri input company India",
      "fertilizer dealer network India",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Investor Relations",
        item: pageUrl,
      },
    ],
  };

  const turnoverSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arvis Fertilizers Turnover Growth Journey",
    description:
      "Turnover growth journey of Arvis Fertilizers across B2C, B2B, dealer-led and agriculture market expansion channels.",
    itemListElement: turnoverJourney.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${item.year} - ${item.value}`,
      description: `${item.model}: ${item.text}`,
    })),
  };

  const productPortfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arvis Fertilizers Product Development Portfolio",
    description:
      "Product development portfolio covering specialty fertilizers, crop nutrition, water-soluble nutrients and agri-input solutions.",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product,
      url: `${siteUrl}/products`,
    })),
  };

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta
          name="keywords"
          content="Arvis Fertilizers, Arvis Fertilizers investor relations, fertilizer company in India, best fertilizers in India, fertilizer company Andhra Pradesh, fertilizer company Telangana, fertilizer company Karnataka, fertilizer company Tamil Nadu, fertilizer company Kerala, specialty fertilizers India, water soluble fertilizers India, crop nutrition India, agri input company India, fertilizer dealer network India, agriculture investment opportunity India"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="author"
          content="Arvis Fertilizers & Chemicals Pvt. Ltd."
        />
        <meta name="geo.region" content="IN" />
        <meta
          name="geo.placename"
          content="Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Kerala, South India"
        />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arvis Fertilizers" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/logo.png`} />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${siteUrl}/logo.png`} />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(investorPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(turnoverSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productPortfolioSchema)}
        </script>
      </Helmet>

      <style>{`
        :root {
          --arvis-plum: #45142c;
          --arvis-plum-dark: #2b0f1e;
          --arvis-plum-deep: #220915;
          --arvis-gold: #e99a11;
          --arvis-gold-dark: #c77806;
          --arvis-gold-soft: #f7c56a;
          --arvis-bg: #fff3df;
          --arvis-cream: #fff8ee;
          --arvis-bisque: #f3dfc1;
          --arvis-text: #2d1723;
          --arvis-muted: rgba(45, 23, 35, .72);
          --arvis-line: rgba(233, 154, 17, .22);
        }

        * {
          box-sizing: border-box;
        }

        .investor-page {
          width: 100%;
          overflow: hidden;
          background: var(--arvis-bg);
          color: var(--arvis-text);
        }

        .investor-container {
          width: min(1240px, calc(100% - 96px));
          margin: 0 auto;
        }

        [data-reveal] {
          opacity: 0;
          transform: translateY(38px);
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

        [data-reveal].is-visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        .investor-hero {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 78% 16%, rgba(233,154,17,.18), transparent 28%),
            radial-gradient(circle at 12% 85%, rgba(69,20,44,.08), transparent 30%),
            linear-gradient(135deg, #fff3df 0%, #fff8ee 44%, #f3dfc1 100%);
        }

        .investor-hero::before {
          content: "";
          position: absolute;
          right: -160px;
          top: -160px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.22), transparent 68%);
          pointer-events: none;
          animation: investorGlow 7s ease-in-out infinite;
        }

        .investor-hero::after {
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

        @keyframes investorGlow {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: .8;
          }

          50% {
            transform: translateY(-18px) scale(1.08);
            opacity: 1;
          }
        }

        .investor-hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.04fr .96fr;
          align-items: center;
          gap: 54px;
          padding: 52px 0 126px;
        }

        .investor-kicker,
        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--arvis-gold);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .investor-kicker::before,
        .section-kicker::before {
          content: "";
          width: 42px;
          height: 2px;
          border-radius: 999px;
          background: var(--arvis-gold);
        }

        .investor-kicker svg,
        .section-kicker svg {
          width: 15px;
          height: 15px;
        }

        .investor-hero-copy h1 {
          margin: 22px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          color: var(--arvis-text);
          font-size: clamp(50px, 5.6vw, 88px);
          line-height: .96;
          letter-spacing: -2.7px;
          font-weight: 950;
        }

        .investor-hero-copy h1 span {
          display: block;
          color: var(--arvis-gold);
        }

        .investor-hero-copy p {
          max-width: 710px;
          margin: 24px 0 0;
          color: rgba(45, 23, 35, .82);
          font-size: 18px;
          line-height: 1.78;
          font-weight: 650;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .investor-btn {
          min-height: 56px;
          padding: 0 24px;
          border-radius: 12px;
          border: 1px solid transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          text-decoration: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 950;
          transition: .24s ease;
          white-space: nowrap;
        }

        .investor-btn svg {
          width: 16px;
          height: 16px;
          transition: transform .24s ease;
        }

        .investor-btn:hover {
          transform: translateY(-4px);
        }

        .investor-btn:hover svg {
          transform: translateX(4px);
        }

        .investor-btn.primary {
          color: #fff;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 18px 34px rgba(233,154,17,.25);
        }

        .investor-btn.secondary {
          color: var(--arvis-plum);
          background: rgba(255, 248, 238, .62);
          border: 2px solid rgba(69, 20, 44, .65);
          backdrop-filter: blur(12px);
        }

        .investor-hero-panel {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .valuation-card {
          position: relative;
          width: min(100%, 520px);
          padding: 34px;
          border-radius: 36px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.16), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.86), rgba(255,248,238,.64));
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 34px 90px rgba(69,20,44,.12);
          overflow: hidden;
          animation: floatInvestorCard 5.2s ease-in-out infinite;
        }

        .valuation-card::before {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 28px;
          border: 1px solid rgba(233,154,17,.22);
          pointer-events: none;
        }

        .valuation-card::after {
          content: "";
          position: absolute;
          right: -80px;
          bottom: -90px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.15), transparent 68%);
        }

        .valuation-card > * {
          position: relative;
          z-index: 2;
        }

        @keyframes floatInvestorCard {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        .valuation-top {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .valuation-icon {
          width: 70px;
          height: 70px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          color: var(--arvis-gold);
          border: 2px solid rgba(233,154,17,.62);
          font-size: 30px;
        }

        .valuation-top span {
          display: block;
          color: var(--arvis-gold);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }

        .valuation-top h3 {
          margin: 6px 0 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          line-height: 1.03;
          letter-spacing: -1px;
          font-weight: 950;
        }

        .valuation-card p {
          margin: 20px 0 0;
          color: var(--arvis-muted);
          font-size: 15px;
          line-height: 1.72;
          font-weight: 650;
        }

        .hero-metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 24px;
        }

        .hero-metric {
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(233,154,17,.20);
          transition: .25s ease;
          text-align: center;
        }

        .hero-metric:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,.82);
        }

        .hero-metric svg {
          width: 22px;
          height: 22px;
          color: var(--arvis-gold);
          margin-bottom: 12px;
        }

        .hero-metric strong {
          display: block;
          color: var(--arvis-text);
          font-size: 22px;
          font-weight: 950;
        }

        .hero-metric span {
          display: block;
          margin-top: 5px;
          color: var(--arvis-muted);
          font-size: 12px;
          line-height: 1.45;
          font-weight: 650;
        }

        .confidence-section,
        .turnover-section,
        .highlights-section,
        .state-focus-section,
        .vision2030-section {
          position: relative;
          padding: 92px 0 86px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.16), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(69,20,44,.07), transparent 30%),
            linear-gradient(135deg, #fff8ee 0%, #fff3df 52%, #f3dfc1 100%);
          border-top: 1px solid rgba(233,154,17,.18);
          border-bottom: 1px solid rgba(233,154,17,.18);
        }

        .confidence-section {
          margin-top: -1px;
        }

        .confidence-section::before {
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

        .confidence-section::after {
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

        .section-head {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 900px;
          margin: 0 auto 40px;
        }

        .section-head.light h2,
        .section-head.light p {
          color: var(--arvis-text);
        }

        .section-head h2 {
          margin: 14px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          color: var(--arvis-text);
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1.05;
          letter-spacing: -1.4px;
          font-weight: 950;
        }

        .section-head h2 span {
          color: var(--arvis-gold);
        }

        .section-head p {
          margin: 16px auto 0;
          max-width: 780px;
          color: var(--arvis-muted);
          font-size: 15.5px;
          line-height: 1.7;
          font-weight: 650;
        }

        .confidence-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .confidence-card {
          min-height: 190px;
          padding: 24px;
          border-radius: 28px;
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 24px 60px rgba(69,20,44,.08);
          text-align: center;
          transition: .28s ease;
        }

        .confidence-card:hover {
          transform: translateY(-8px);
          background: rgba(255,255,255,.82);
        }

        .confidence-card svg {
          width: 30px;
          height: 30px;
          color: var(--arvis-gold);
          margin-bottom: 14px;
        }

        .confidence-card strong {
          display: block;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          line-height: 1.05;
        }

        .confidence-card span {
          display: block;
          margin-top: 10px;
          color: var(--arvis-muted);
          font-size: 13px;
          line-height: 1.55;
          font-weight: 650;
        }

        .turnover-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
        }

        .turnover-card {
          position: relative;
          overflow: hidden;
          min-height: 230px;
          padding: 22px 18px;
          border-radius: 28px;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.13), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.86), rgba(255,248,238,.66));
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 24px 60px rgba(69,20,44,.08);
          transition: .28s ease;
        }

        .turnover-card::after {
          content: "";
          position: absolute;
          right: -55px;
          bottom: -55px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: rgba(233,154,17,.12);
        }

        .turnover-card:hover {
          transform: translateY(-8px);
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.18), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.96), rgba(255,248,238,.78));
          border-color: rgba(233,154,17,.42);
        }

        .turnover-card > * {
          position: relative;
          z-index: 2;
        }

        .turnover-year {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 32px;
          padding: 0 12px;
          border-radius: 999px;
          color: var(--arvis-plum);
          background: rgba(233,154,17,.13);
          border: 1px solid rgba(233,154,17,.26);
          font-size: 12px;
          font-weight: 950;
        }

        .turnover-value {
          margin: 18px 0 0;
          color: var(--arvis-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          line-height: 1;
          font-weight: 950;
          letter-spacing: -.8px;
        }

        .turnover-model {
          margin: 13px 0 0;
          color: var(--arvis-text);
          font-size: 15px;
          line-height: 1.25;
          font-weight: 950;
        }

        .turnover-card p {
          margin: 10px 0 0;
          color: var(--arvis-muted);
          font-size: 12.8px;
          line-height: 1.52;
          font-weight: 650;
        }

        .seo-note {
          position: relative;
          z-index: 3;
          margin-top: 26px;
          padding: 22px;
          border-radius: 26px;
          color: var(--arvis-muted);
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(233,154,17,.20);
          box-shadow: 0 18px 46px rgba(69,20,44,.06);
          font-size: 14px;
          line-height: 1.72;
          font-weight: 650;
          text-align: center;
        }

        .investor-thesis-section,
        .market-section,
        .flywheel-section {
          padding: 86px 0;
          background:
            radial-gradient(circle at 8% 12%, rgba(233,154,17,.12), transparent 26%),
            radial-gradient(circle at 92% 35%, rgba(69,20,44,.08), transparent 28%),
            linear-gradient(180deg, #fff3df 0%, #fff8ee 100%);
        }

        .thesis-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .thesis-card,
        .flywheel-card {
          position: relative;
          padding: 26px 22px;
          border-radius: 30px;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.12), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,248,238,.72));
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 22px 52px rgba(69,20,44,.08);
          text-align: center;
          transition: .28s ease;
        }

        .thesis-card:hover,
        .flywheel-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 72px rgba(69,20,44,.13);
        }

        .thesis-icon {
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          margin: 0 auto 16px;
          border-radius: 50%;
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 16px 32px rgba(233,154,17,.18);
          font-size: 24px;
        }

        .thesis-card h3,
        .flywheel-card h3 {
          margin: 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-weight: 950;
        }

        .thesis-card p,
        .flywheel-card p {
          margin: 10px 0 0;
          color: var(--arvis-muted);
          font-size: 13.5px;
          line-height: 1.6;
          font-weight: 650;
        }

        .highlight-grid,
        .vision-grid,
        .flywheel-grid,
        .state-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .highlight-card,
        .vision-item,
        .state-card {
          position: relative;
          overflow: hidden;
          min-height: 285px;
          padding: 26px 22px;
          border-radius: 30px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.13), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.72), rgba(255,248,238,.48));
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 24px 60px rgba(69,20,44,.09);
          text-align: center;
          transition: .28s ease;
        }

        .highlight-card::after,
        .state-card::after {
          content: "";
          position: absolute;
          right: -62px;
          bottom: -62px;
          width: 155px;
          height: 155px;
          border-radius: 50%;
          background: rgba(233,154,17,.12);
        }

        .highlight-card:hover,
        .vision-item:hover,
        .state-card:hover {
          transform: translateY(-9px);
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.18), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.86), rgba(255,248,238,.62));
          border-color: rgba(233,154,17,.42);
        }

        .highlight-card > *,
        .state-card > * {
          position: relative;
          z-index: 2;
        }

        .highlight-icon,
        .state-icon {
          width: 66px;
          height: 66px;
          display: grid;
          place-items: center;
          margin: 0 auto 18px;
          border-radius: 50%;
          color: var(--arvis-gold);
          border: 2px solid rgba(233,154,17,.66);
          font-size: 27px;
        }

        .highlight-card h3,
        .vision-item h3,
        .state-card h3 {
          margin: 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
          line-height: 1.12;
          font-weight: 950;
        }

        .highlight-card p,
        .vision-item p,
        .state-card p {
          margin: 13px auto 0;
          color: var(--arvis-muted);
          font-size: 13.5px;
          line-height: 1.6;
          font-weight: 650;
        }

        .market-layout {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 28px;
          align-items: stretch;
        }

        .market-card {
          position: relative;
          overflow: hidden;
          padding: 34px;
          border-radius: 34px;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.13), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.90), rgba(255,248,238,.72));
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 26px 70px rgba(69,20,44,.10);
        }

        .market-card h3 {
          margin: 14px 0 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 3.4vw, 50px);
          line-height: 1.05;
          letter-spacing: -1.2px;
          font-weight: 950;
        }

        .market-card h3 span {
          color: var(--arvis-gold);
        }

        .market-card p {
          margin: 18px 0 0;
          color: var(--arvis-muted);
          font-size: 15.5px;
          line-height: 1.72;
          font-weight: 650;
        }

        .driver-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .driver-pill {
          min-height: 74px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-radius: 22px;
          background:
            linear-gradient(135deg, rgba(255,255,255,.86), rgba(255,248,238,.66));
          border: 1px solid rgba(233,154,17,.20);
          box-shadow: 0 18px 42px rgba(69,20,44,.07);
          color: var(--arvis-text);
          font-size: 14px;
          font-weight: 900;
        }

        .driver-pill svg {
          width: 20px;
          height: 20px;
          flex: 0 0 auto;
          color: var(--arvis-gold);
        }

        .strategy-section,
        .portfolio-section,
        .advantages-section {
          padding: 0 0 86px;
          background: var(--arvis-bg);
        }

        .strategy-box,
        .advantages-card {
          position: relative;
          overflow: hidden;
          padding: 44px;
          border-radius: 38px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 12% 12%, rgba(233,154,17,.15), transparent 30%),
            linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,248,238,.66));
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 30px 80px rgba(69,20,44,.10);
        }

        .strategy-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 34px;
        }

        .strategy-step {
          padding: 22px;
          border-radius: 26px;
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(233,154,17,.18);
          text-align: center;
          transition: .25s ease;
        }

        .strategy-step:hover {
          transform: translateY(-7px);
          background: rgba(255,255,255,.82);
        }

        .strategy-step svg {
          width: 30px;
          height: 30px;
          color: var(--arvis-gold);
          margin-bottom: 16px;
        }

        .strategy-step strong {
          display: block;
          color: var(--arvis-text);
          font-size: 17px;
          font-weight: 950;
        }

        .strategy-step span {
          display: block;
          margin-top: 8px;
          color: var(--arvis-muted);
          font-size: 13px;
          line-height: 1.5;
          font-weight: 650;
        }

        .flywheel-number {
          position: absolute;
          right: 18px;
          top: 14px;
          color: rgba(69,20,44,.10);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 54px;
          font-weight: 950;
          line-height: 1;
        }

        .flywheel-card svg {
          width: 34px;
          height: 34px;
          color: var(--arvis-gold);
          margin-bottom: 16px;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .product-pill {
          min-height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          border-radius: 22px;
          color: var(--arvis-plum);
          background:
            linear-gradient(135deg, rgba(255,255,255,.90), rgba(255,248,238,.70));
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 18px 44px rgba(69,20,44,.07);
          font-size: 14px;
          font-weight: 950;
          text-align: center;
        }

        .product-pill svg {
          color: var(--arvis-gold);
          flex: 0 0 auto;
        }

        .advantages-card {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 28px;
        }

        .advantages-card h2 {
          margin: 14px 0 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1.05;
          letter-spacing: -1.4px;
        }

        .advantages-card h2 span {
          color: var(--arvis-gold);
        }

        .advantage-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          align-content: center;
        }

        .advantage-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          min-height: 58px;
          padding: 16px;
          border-radius: 20px;
          background: rgba(255,255,255,.60);
          border: 1px solid rgba(233,154,17,.18);
          color: var(--arvis-muted);
          font-size: 14px;
          line-height: 1.5;
          font-weight: 800;
        }

        .advantage-item svg {
          color: var(--arvis-gold);
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .vision-item {
          min-height: auto;
        }

        .vision-item svg {
          width: 30px;
          height: 30px;
          color: var(--arvis-gold);
          margin-bottom: 16px;
        }

        .message-section {
          padding: 86px 0;
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.14), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(247,197,106,.08), transparent 30%),
            linear-gradient(135deg, #4a1730 0%, #371124 52%, #220915 100%);
        }

        .message-card {
          position: relative;
          overflow: hidden;
          padding: 44px;
          border-radius: 38px;
          color: #fff8ee;
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.20), transparent 34%),
            linear-gradient(135deg, rgba(255,248,238,.10), rgba(255,248,238,.035));
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 30px 80px rgba(0,0,0,.18);
        }

        .quote-mark {
          position: absolute;
          right: 34px;
          top: 12px;
          color: rgba(233,154,17,.22);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 150px;
          line-height: 1;
          font-weight: 950;
        }

        .message-card h2 {
          position: relative;
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1.05;
        }

        .message-card p {
          position: relative;
          max-width: 920px;
          margin: 20px 0 0;
          color: rgba(255,248,238,.80);
          font-size: 18px;
          line-height: 1.78;
          font-weight: 600;
        }

        .message-card strong {
          position: relative;
          display: block;
          margin-top: 24px;
          color: var(--arvis-gold);
          font-size: 15px;
          font-weight: 950;
        }

        @media (max-width: 1180px) {
          .highlight-grid,
          .vision-grid,
          .confidence-grid,
          .thesis-grid,
          .flywheel-grid,
          .state-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .turnover-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .strategy-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .advantages-card,
          .market-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 1050px) {
          .investor-container {
            width: min(1240px, calc(100% - 44px));
          }

          .investor-hero-grid {
            grid-template-columns: 1fr;
          }

          .investor-hero {
            min-height: auto;
          }

          .investor-hero-panel {
            min-height: auto;
          }
        }

        @media (max-width: 760px) {
          .investor-container {
            width: min(100% - 20px, 1240px);
          }

          [data-reveal],
          [data-reveal="left"],
          [data-reveal="right"] {
            transform: translateY(24px);
          }

          .investor-hero {
            min-height: auto;
          }

          .investor-hero::after {
            bottom: -38px;
            height: 72px;
          }

          .investor-hero-grid {
            display: block;
            padding: 32px 0 78px;
          }

          .investor-hero-panel {
            display: none;
          }

          .investor-kicker,
          .section-kicker {
            font-size: 9.5px;
            letter-spacing: 2.1px;
            gap: 8px;
          }

          .investor-kicker::before,
          .section-kicker::before {
            width: 34px;
          }

          .investor-hero-copy h1 {
            font-size: 42px;
            line-height: .98;
            letter-spacing: -1.4px;
          }

          .investor-hero-copy p {
            margin-top: 20px;
            font-size: 14px;
            line-height: 1.68;
          }

          .hero-actions {
            align-items: stretch;
            flex-direction: column;
            margin-top: 28px;
          }

          .investor-btn {
            width: 100%;
            min-height: 52px;
            font-size: 13.5px;
          }

          .confidence-section,
          .turnover-section,
          .highlights-section,
          .state-focus-section {
            padding: 66px 0 58px;
          }

          .confidence-section::before {
            left: -18%;
            right: -18%;
            top: -36px;
            height: 66px;
          }

          .confidence-section::after {
            top: 21px;
            height: 1.5px;
          }

          .section-head {
            width: calc(100% - 30px);
            margin-bottom: 28px;
          }

          .section-head h2,
          .market-card h3,
          .advantages-card h2 {
            font-size: 34px;
          }

          .section-head p,
          .market-card p {
            font-size: 13.5px;
            line-height: 1.62;
          }

          .highlight-grid,
          .driver-grid,
          .strategy-grid,
          .portfolio-grid,
          .advantage-list,
          .vision-grid,
          .confidence-grid,
          .thesis-grid,
          .flywheel-grid,
          .state-grid,
          .turnover-grid {
            grid-template-columns: 1fr;
          }

          .highlight-card,
          .turnover-card,
          .state-card {
            min-height: auto;
            padding: 24px 20px;
            border-radius: 26px;
          }

          .market-section,
          .portfolio-section,
          .vision2030-section,
          .message-section,
          .investor-thesis-section,
          .flywheel-section {
            padding: 62px 0;
          }

          .strategy-section,
          .advantages-section {
            padding: 0 0 62px;
          }

          .market-card,
          .strategy-box,
          .advantages-card,
          .message-card {
            padding: 26px;
            border-radius: 28px;
          }

          .message-card p {
            font-size: 14px;
            line-height: 1.68;
          }

          .quote-mark {
            right: 20px;
            top: 10px;
            font-size: 94px;
          }
        }

        @media (max-width: 520px) {
          .investor-container {
            width: min(100% - 18px, 1240px);
          }

          .investor-hero-copy h1 {
            font-size: 40px;
          }

          .highlight-card,
          .strategy-step,
          .vision-item,
          .confidence-card,
          .thesis-card,
          .flywheel-card,
          .turnover-card,
          .state-card {
            padding: 22px 18px;
          }

          .market-card,
          .strategy-box,
          .advantages-card,
          .message-card {
            padding: 24px;
          }

          .turnover-value {
            font-size: 30px;
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

      <main className="investor-page">
        <section className="investor-hero">
          <div className="investor-container">
            <div className="investor-hero-grid">
              <div className="investor-hero-copy" data-reveal="left">
                <div className="investor-kicker">
                  <FaChartLine />
                  Investor Relations
                </div>

                <h1>
                  Invest in the future of
                  <span>Indian Agriculture.</span>
                </h1>

                <p>
                  Arvis Fertilizers & Chemicals Pvt. Ltd. is building a
                  future-ready fertilizer company in India focused on crop
                  nutrition, plant protection, specialty fertilizers, dealer
                  expansion and farmer-level product performance.
                </p>

                <p>
                  Through www.arvisfertilizers.com, Arvis is creating a scalable
                  agriculture platform where quality products, farmer trust,
                  global sourcing potential and distribution strength come
                  together to create long-term stakeholder value.
                </p>

                <div className="hero-actions">
                  <a href={enquiryMail} className="investor-btn primary">
                    Start Investor Conversation <FaArrowRight />
                  </a>

                  <a
                    href={`tel:${investorPhone}`}
                    className="investor-btn secondary"
                  >
                    Call Investor Desk <FaPhoneAlt />
                  </a>
                </div>
              </div>

              <div className="investor-hero-panel" data-reveal="right">
                <div className="valuation-card">
                  <div className="valuation-top">
                    <div className="valuation-icon">
                      <FaRocket />
                    </div>

                    <div>
                      <span>Investment Opportunity</span>
                      <h3>A scalable agri brand with growth ambition</h3>
                    </div>
                  </div>

                  <p>
                    Arvis is positioned for expansion through specialty
                    products, stronger distribution, farmer engagement,
                    manufacturing capability and strategic partnerships.
                  </p>

                  <div className="hero-metrics">
                    <div className="hero-metric">
                      <FaSeedling />
                      <strong>2019</strong>
                      <span>Established</span>
                    </div>

                    <div className="hero-metric">
                      <FaStore />
                      <strong>Dealer</strong>
                      <span>Network-led scale</span>
                    </div>

                    <div className="hero-metric">
                      <FaGlobeAsia />
                      <strong>India</strong>
                      <span>State-focused growth</span>
                    </div>

                    <div className="hero-metric">
                      <FaAward />
                      <strong>₹15 Cr</strong>
                      <span>2025–26 milestone</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="confidence-section">
          <div className="investor-container">
            <div className="section-head light" data-reveal>
              <div className="section-kicker">
                <FaShieldAlt />
                Investor Confidence
              </div>

              <h2>
                A business built on <span>necessity, trust and scale.</span>
              </h2>

              <p>
                Agriculture is a repeat-demand market. Arvis is working to
                convert field-level farmer needs into a scalable product,
                distribution and partnership-led growth opportunity.
              </p>
            </div>

            <div className="confidence-grid">
              {confidenceStats.map((item, index) => (
                <div
                  className="confidence-card"
                  data-reveal
                  key={item.value}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  {item.icon}
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="turnover-section">
          <div className="investor-container">
            <div className="section-head light" data-reveal>
              <div className="section-kicker">
                <FaChartLine />
                Turnover Growth Journey
              </div>

              <h2>
                From early sales to <span>multi-crore business growth.</span>
              </h2>

              <p>
                Arvis Fertilizers has shown a strong growth journey across B2C,
                B2B, dealer-led and agriculture market expansion channels.
              </p>
            </div>

            <div className="turnover-grid">
              {turnoverJourney.map((item, index) => (
                <div
                  className="turnover-card"
                  data-reveal
                  key={item.year}
                  style={{ transitionDelay: `${index * 0.07}s` }}
                >
                  <span className="turnover-year">{item.year}</span>
                  <div className="turnover-value">{item.value}</div>
                  <div className="turnover-model">{item.model}</div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="seo-note" data-reveal>
              Arvis Fertilizers & Chemicals Pvt. Ltd. is focused on becoming a
              trusted fertilizer company in India by serving farmers, dealers
              and agriculture businesses with specialty fertilizers, crop
              nutrition products and field-focused agri-input solutions.
            </div>
          </div>
        </section>

        <section className="investor-thesis-section">
          <div className="investor-container">
            <div className="section-head" data-reveal>
              <div className="section-kicker">
                <FaHandshake />
                Investment Thesis
              </div>

              <h2>
                Why investors should look at <span>Arvis seriously.</span>
              </h2>

              <p>
                Arvis is not only selling fertilizer products. The company is
                building an agriculture growth platform with product depth,
                farmer trust, dealer distribution and partnership opportunities.
              </p>
            </div>

            <div className="thesis-grid">
              {investorReasons.map((item, index) => (
                <div
                  className="thesis-card"
                  data-reveal
                  key={item.title}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="thesis-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="highlights-section">
          <div className="investor-container">
            <div className="section-head light" data-reveal>
              <div className="section-kicker">
                <FaShieldAlt />
                Why Invest in Arvis
              </div>

              <h2>
                Strong fundamentals with <span>scalable growth potential.</span>
              </h2>

              <p>
                Arvis combines product innovation, dealer-led distribution,
                farmer engagement and international sourcing opportunities to
                build a stronger agri-input business.
              </p>
            </div>

            <div className="highlight-grid">
              {highlights.map((item, index) => (
                <div
                  className="highlight-card"
                  data-reveal
                  key={item.title}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="highlight-icon">{item.icon}</div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="market-section">
          <div className="investor-container">
            <div className="market-layout">
              <div className="market-card" data-reveal="left">
                <div className="section-kicker">
                  <FaGlobeAsia />
                  Market Potential
                </div>

                <h3>
                  Agriculture is moving towards{" "}
                  <span>modern crop solutions.</span>
                </h3>

                <p>
                  Rising food demand, decreasing cultivable land per capita and
                  increasing awareness of crop nutrition are creating meaningful
                  opportunities for companies offering reliable agricultural
                  inputs.
                </p>

                <p>
                  Arvis aims to serve this demand through specialty fertilizers,
                  water-soluble nutrients, micronutrients, plant growth
                  solutions and crop-focused product development across Indian
                  agriculture markets.
                </p>
              </div>

              <div className="driver-grid" data-reveal="right">
                {growthDrivers.map((item) => (
                  <div className="driver-pill" key={item}>
                    <FaCheckCircle />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="state-focus-section">
          <div className="investor-container">
            <div className="section-head light" data-reveal>
              <div className="section-kicker">
                <FaMapMarkerAlt />
                State Focus
              </div>

              <h2>
                Fertilizer growth focus across <span>South Indian states.</span>
              </h2>

              <p>
                Arvis is positioning its fertilizer and crop nutrition portfolio
                for high-potential agriculture states including Andhra Pradesh,
                Telangana, Karnataka and Tamil Nadu.
              </p>
            </div>

            <div className="state-grid">
              {stateFocus.map((item, index) => (
                <div
                  className="state-card"
                  data-reveal
                  key={item.state}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="state-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <h3>{item.state}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="seo-note" data-reveal>
              Arvis Fertilizers supports dealers and farmers looking for
              premium fertilizers in India, specialty crop nutrition products,
              water-soluble fertilizers, plant growth support and reliable
              agri-input solutions for Indian farming conditions.
            </div>
          </div>
        </section>

        <section className="strategy-section">
          <div className="investor-container">
            <div className="strategy-box" data-reveal>
              <div className="section-head light" style={{ marginBottom: 0 }}>
                <div className="section-kicker">
                  <FaRocket />
                  Capital Utilization
                </div>

                <h2>
                  Investment focused on{" "}
                  <span>capacity, reach and innovation.</span>
                </h2>

                <p>
                  Investment funds can be strategically utilized to strengthen
                  manufacturing, working capital, product development, marketing,
                  technology and distribution growth.
                </p>
              </div>

              <div className="strategy-grid">
                {capitalUse.map((item) => (
                  <div className="strategy-step" key={item.title}>
                    {item.icon}
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="flywheel-section">
          <div className="investor-container">
            <div className="section-head" data-reveal>
              <div className="section-kicker">
                <FaChartLine />
                Growth Flywheel
              </div>

              <h2>
                How Arvis can create{" "}
                <span>compounding business value.</span>
              </h2>

              <p>
                Product innovation supports dealer confidence. Dealer confidence
                increases farmer availability. Farmer trust creates repeat
                demand. Repeat demand supports scalable revenue growth.
              </p>
            </div>

            <div className="flywheel-grid">
              {flywheel.map((item, index) => (
                <div
                  className="flywheel-card"
                  data-reveal
                  key={item.title}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <span className="flywheel-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.icon}
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="investor-container">
            <div className="section-head" data-reveal>
              <div className="section-kicker">
                <FaFlask />
                Product Development
              </div>

              <h2>
                Diverse portfolio for <span>crop performance.</span>
              </h2>

              <p>
                Our product roadmap is focused on farmer requirements, crop
                nutrition efficiency, quality sourcing and scalable agri-input
                solutions.
              </p>
            </div>

            <div className="portfolio-grid">
              {products.map((item) => (
                <div className="product-pill" data-reveal key={item}>
                  <FaLeaf />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="advantages-section">
          <div className="investor-container">
            <div className="advantages-card" data-reveal>
              <div>
                <div className="section-kicker">
                  <FaAward />
                  Competitive Advantages
                </div>

                <h2>
                  Built for <span>long-term value.</span>
                </h2>
              </div>

              <div className="advantage-list">
                {advantages.map((item) => (
                  <div className="advantage-item" key={item}>
                    <FaCheckCircle />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="vision2030-section">
          <div className="investor-container">
            <div className="section-head light" data-reveal>
              <div className="section-kicker">
                <FaRocket />
                Vision 2030
              </div>

              <h2>
                Building a trusted{" "}
                <span>agricultural solutions company.</span>
              </h2>

              <p>
                Arvis aims to grow with a stronger dealer ecosystem, advanced
                manufacturing capability, international partnerships and
                sustainable profitability.
              </p>
            </div>

            <div className="vision-grid">
              {visionPoints.map((item, index) => (
                <div
                  className="vision-item"
                  data-reveal
                  key={item.title}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  {item.icon}
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="message-section">
          <div className="investor-container">
            <div className="message-card" data-reveal>
              <div className="quote-mark">“</div>

              <h2>Message from Management</h2>

              <p>
                Agriculture is the foundation of every economy. At Arvis, we are
                building a future-ready agricultural solutions company focused on
                innovation, farmer success and sustainable growth. We invite
                investors and strategic partners to join us in creating
                long-term value while contributing to global food security.
              </p>

              <strong>
                — Management Team, Arvis Fertilizers & Chemicals Pvt. Ltd.
              </strong>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default InvestorRelations;