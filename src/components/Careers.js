import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaBriefcase,
  FaSeedling,
  FaMapMarkedAlt,
  FaUserTie,
  FaChartLine,
  FaUsers,
  FaGraduationCap,
  FaMotorcycle,
  FaHandshake,
  FaBullhorn,
  FaStore,
  FaRoute,
  FaBuilding,
  FaCheckCircle,
  FaTimes,
  FaPaperPlane,
  FaPhoneAlt,
  FaClipboardList,
  FaAward,
  FaChevronRight,
} from "react-icons/fa";

function Careers() {
  const GOOGLE_FORM_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLScel9n9kqUgJ2YbjxMoWTvZH3ZsMW1dzmSE_qgL5Q8gzLMWdg/viewform";

  const CAREER_IMAGE = "/images/careers.png";

  const SITE_URL = "https://www.arvisfertilizers.com";
  const PAGE_URL = `${SITE_URL}/careers`;
  const COMPANY_NAME = "Arvis Fertilizers & Chemicals Pvt. Ltd.";
  const SEO_TITLE =
    "Careers at Arvis Fertilizers | Sales, Field Marketing & Agri Jobs";
  const SEO_DESCRIPTION =
    "Apply for careers at Arvis Fertilizers. Explore sales, field marketing, market development, area sales manager and regional manager jobs in the fertilizer and agri-input industry across South India.";

  const [selectedJob, setSelectedJob] = useState(null);

  const Icon = ({ type }) => {
    const icons = {
      arrow: <FaArrowRight />,
      career: <FaBriefcase />,
      leaf: <FaSeedling />,
      map: <FaMapMarkedAlt />,
      officer: <FaUserTie />,
      growth: <FaChartLine />,
      users: <FaUsers />,
      degree: <FaGraduationCap />,
      bike: <FaMotorcycle />,
      handshake: <FaHandshake />,
      marketing: <FaBullhorn />,
      dealer: <FaStore />,
      route: <FaRoute />,
      manager: <FaBuilding />,
      check: <FaCheckCircle />,
      close: <FaTimes />,
      apply: <FaPaperPlane />,
      phone: <FaPhoneAlt />,
      list: <FaClipboardList />,
      award: <FaAward />,
      chevron: <FaChevronRight />,
    };

    return icons[type] || <FaSeedling />;
  };

  useEffect(() => {
    const items = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedJob]);

  const openApplyForm = () => {
    window.open(GOOGLE_FORM_LINK, "_blank", "noopener,noreferrer");
  };

  const handleCareerImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/images/hero.png";
  };

  const jobs = [
    {
      title: "Market Development Officer",
      shortTitle: "MDO",
      department: "Field Marketing",
      location: "Andhra Pradesh / Telangana / Karnataka / Tamil Nadu",
      experience: "0 - 2 Years",
      type: "Full Time",
      icon: "marketing",
      intro:
        "A field-level role focused on farmer meetings, product promotion, market awareness and dealer support.",
      requirements: [
        "Any Degree is required. B.Sc Agriculture, B.Com, BBA or MBA is preferred.",
        "Freshers with good communication skills can apply.",
        "Basic understanding of agriculture, fertilizers or rural markets is an advantage.",
        "Two-wheeler and willingness to travel in assigned area is preferred.",
        "Local language communication is important.",
      ],
      responsibilities: [
        "Visit farmers, dealers and local agri markets.",
        "Conduct product awareness activities and field-level promotion.",
        "Collect market feedback and report competitor activity.",
        "Support dealer sales, product display and farmer communication.",
        "Coordinate with Sales Officer and Area Sales Manager.",
      ],
      skills: [
        "Field communication",
        "Farmer interaction",
        "Market promotion",
        "Dealer coordination",
      ],
    },
    {
      title: "Sales Officer",
      shortTitle: "SO",
      department: "Sales",
      location: "Assigned District / Territory",
      experience: "1 - 4 Years",
      type: "Full Time",
      icon: "officer",
      intro:
        "A sales role focused on dealer development, sales growth, order collection and field team coordination.",
      requirements: [
        "Any Degree is required. Agriculture, Business or Marketing background is preferred.",
        "Experience in fertilizers, pesticides, seeds, FMCG or rural sales is preferred.",
        "Good communication and dealer handling skills are required.",
        "Must be ready for regular market travel.",
        "Two-wheeler or field mobility is preferred.",
      ],
      responsibilities: [
        "Develop and manage dealer network in assigned territory.",
        "Generate sales orders and support product availability.",
        "Visit markets regularly and maintain dealer relationships.",
        "Support farmer meetings, product promotion and field campaigns.",
        "Submit sales reports and coordinate with ASM.",
      ],
      skills: [
        "Dealer sales",
        "Territory handling",
        "Order collection",
        "Target achievement",
      ],
    },
    {
      title: "Area Sales Manager",
      shortTitle: "ASM",
      department: "Sales Management",
      location: "Multiple Districts",
      experience: "4 - 8 Years",
      type: "Full Time",
      icon: "manager",
      intro:
        "A leadership role responsible for sales officers, dealer expansion, area revenue and market development.",
      requirements: [
        "Any Degree is required. MBA, Agriculture or Sales Management background is preferred.",
        "Minimum 4 years of sales experience is preferred.",
        "Experience in agri inputs, fertilizers, pesticides, seeds or rural distribution is an advantage.",
        "Should be able to manage sales officers and dealer targets.",
        "Strong reporting, planning and communication skills are required.",
      ],
      responsibilities: [
        "Manage sales officers and market development officers.",
        "Plan dealer expansion and sales targets for assigned area.",
        "Monitor sales performance, collections and dealer activity.",
        "Coordinate product movement, field campaigns and market feedback.",
        "Report area performance to Regional Manager.",
      ],
      skills: [
        "Team management",
        "Area planning",
        "Dealer expansion",
        "Sales growth",
      ],
    },
    {
      title: "Regional Manager",
      shortTitle: "RM",
      department: "Regional Sales",
      location: "Regional Level",
      experience: "8+ Years",
      type: "Full Time",
      icon: "growth",
      intro:
        "A senior sales leadership role responsible for regional business growth, team performance and dealer network expansion.",
      requirements: [
        "Any Degree is required. MBA or Agriculture-related qualification is preferred.",
        "Minimum 8 years of sales experience is preferred.",
        "Strong experience in agri input industry or rural distribution is an advantage.",
        "Should be capable of handling ASM teams, sales planning and regional growth.",
        "Excellent leadership, reporting and business development skills are required.",
      ],
      responsibilities: [
        "Lead regional sales planning and dealer network expansion.",
        "Monitor ASM performance, sales targets and business growth.",
        "Develop regional strategies for product promotion and market reach.",
        "Coordinate with management for business planning and performance review.",
        "Build strong dealer, distributor and institutional relationships.",
      ],
      skills: [
        "Regional leadership",
        "Business strategy",
        "Sales planning",
        "Team performance",
      ],
    },
  ];

  const benefits = [
    {
      title: "Field Growth",
      text: "Work directly with farmers, dealers and agriculture markets.",
      icon: "route",
    },
    {
      title: "Career Path",
      text: "Grow from field role to sales leadership with performance.",
      icon: "growth",
    },
    {
      title: "Dealer Network",
      text: "Build strong business relationships across key agri regions.",
      icon: "dealer",
    },
    {
      title: "Agri Impact",
      text: "Support farmers with result-focused fertilizer solutions.",
      icon: "leaf",
    },
  ];

  const careersPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SEO_TITLE,
    url: PAGE_URL,
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
      logo: `${SITE_URL}/logo.png`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}${CAREER_IMAGE}`,
    },
    keywords: [
      "Arvis Fertilizers careers",
      "fertilizer company jobs",
      "agriculture jobs South India",
      "agri input sales jobs",
      "fertilizer sales officer jobs",
      "market development officer jobs",
      "area sales manager agriculture jobs",
      "regional manager fertilizer jobs",
      "field marketing jobs agriculture",
      "dealer development jobs agriculture",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    alternateName: "Arvis Fertilizers",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Arvis Fertilizers & Chemicals Pvt. Ltd. is a fertilizer and agri-input company focused on crop nutrition, farmer support, dealer distribution and career opportunities in field marketing and sales.",
    email: "arvisfertilizers@gmail.com",
    telephone: "+91-7893423282",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Andhra Pradesh",
      addressLocality: "Kakinada",
      streetAddress: "S.No. 282/A6, Near Port Road",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Andhra Pradesh",
      },
      {
        "@type": "AdministrativeArea",
        name: "Telangana",
      },
      {
        "@type": "AdministrativeArea",
        name: "Karnataka",
      },
      {
        "@type": "AdministrativeArea",
        name: "Tamil Nadu",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kerala",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    knowsAbout: [
      "Fertilizers",
      "Crop Nutrition",
      "Agri Inputs",
      "Agriculture Sales",
      "Field Marketing",
      "Dealer Development",
      "Market Development",
      "Farmer Support",
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
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Careers",
        item: PAGE_URL,
      },
    ],
  };

  const jobsItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Open Career Opportunities at Arvis Fertilizers",
    description:
      "Open career roles at Arvis Fertilizers for field marketing, sales, area sales management and regional sales leadership.",
    itemListElement: jobs.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: job.title,
      description: `${job.intro} Department: ${job.department}. Location: ${job.location}. Experience: ${job.experience}. Type: ${job.type}.`,
      url: `${PAGE_URL}#open-positions`,
    })),
  };

  const benefitsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Benefits of Working at Arvis Fertilizers",
    description:
      "Career benefits at Arvis Fertilizers including field growth, career path, dealer network exposure and agriculture impact.",
    itemListElement: benefits.map((benefit, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: benefit.title,
      description: benefit.text,
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
          content="Arvis Fertilizers careers, fertilizer company jobs, agriculture jobs South India, agri input sales jobs, fertilizer sales officer jobs, market development officer jobs, area sales manager agriculture jobs, regional manager fertilizer jobs, field marketing jobs agriculture, dealer development jobs agriculture, sales jobs Andhra Pradesh, sales jobs Telangana, sales jobs Karnataka, sales jobs Tamil Nadu"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={COMPANY_NAME} />
        <meta name="geo.region" content="IN" />
        <meta
          name="geo.placename"
          content="Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Kerala, South India"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arvis Fertilizers" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${CAREER_IMAGE}`} />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}${CAREER_IMAGE}`} />

        <script type="application/ld+json">
          {JSON.stringify(careersPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jobsItemListSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(benefitsSchema)}
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

        .careers-page {
          width: 100%;
          overflow: hidden;
          background: var(--arvis-bg);
          color: var(--arvis-text);
        }

        .careers-container {
          width: min(1240px, calc(100% - 96px));
          margin: 0 auto;
        }

        [data-animate] {
          opacity: 0;
          transform: translateY(38px);
          transition:
            opacity .75s cubic-bezier(.16, 1, .3, 1),
            transform .75s cubic-bezier(.16, 1, .3, 1);
        }

        [data-animate].is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        [data-delay="1"] { transition-delay: .12s; }
        [data-delay="2"] { transition-delay: .22s; }
        [data-delay="3"] { transition-delay: .32s; }

        .careers-hero {
          position: relative;
          min-height: 650px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 78% 16%, rgba(233,154,17,.18), transparent 28%),
            radial-gradient(circle at 12% 85%, rgba(69,20,44,.08), transparent 30%),
            linear-gradient(135deg, #fff3df 0%, #fff8ee 44%, #f3dfc1 100%);
        }

        .careers-hero::before {
          content: "";
          position: absolute;
          right: -160px;
          top: -160px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.22), transparent 68%);
          pointer-events: none;
          animation: careerGlow 7s ease-in-out infinite;
        }

        .careers-hero::after {
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

        @keyframes careerGlow {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: .8;
          }

          50% {
            transform: translateY(-18px) scale(1.08);
            opacity: 1;
          }
        }

        .careers-hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: .96fr 1.04fr;
          gap: 54px;
          align-items: center;
          padding: 58px 0 132px;
        }

        .hero-copy {
          max-width: 720px;
        }

        .eyebrow,
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

        .eyebrow::before,
        .section-kicker::before {
          content: "";
          width: 42px;
          height: 2px;
          border-radius: 999px;
          background: var(--arvis-gold);
        }

        .eyebrow svg,
        .section-kicker svg {
          width: 15px;
          height: 15px;
        }

        .hero-copy h1 {
          margin: 22px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          color: var(--arvis-text);
          font-size: clamp(50px, 5.6vw, 88px);
          line-height: .96;
          letter-spacing: -2.7px;
          font-weight: 950;
        }

        .hero-copy h1 span {
          display: block;
          color: var(--arvis-gold);
        }

        .hero-copy p {
          max-width: 640px;
          margin: 26px 0 0;
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

        .career-btn {
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

        .career-btn svg {
          width: 16px;
          height: 16px;
          transition: transform .24s ease;
        }

        .career-btn:hover {
          transform: translateY(-4px);
        }

        .career-btn:hover svg {
          transform: translateX(4px);
        }

        .career-btn.primary {
          color: #fff;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 18px 34px rgba(233,154,17,.25);
        }

        .career-btn.secondary {
          color: var(--arvis-plum);
          background: rgba(255, 248, 238, .62);
          border: 2px solid rgba(69, 20, 44, .65);
          backdrop-filter: blur(12px);
        }

        .career-btn.dark {
          color: #fff8ee;
          background: linear-gradient(135deg, #4a1730, #250916);
          box-shadow: 0 18px 36px rgba(69,20,44,.18);
        }

        .career-btn.light {
          color: var(--arvis-plum);
          background: #fff8ee;
          border-color: rgba(233,154,17,.24);
        }

        .hero-panel {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .career-photo-card {
          position: relative;
          width: min(100%, 620px);
          min-height: 520px;
          overflow: hidden;
          border-radius: 42px;
          border: 1px solid rgba(233,154,17,.28);
          box-shadow: 0 34px 95px rgba(69,20,44,.17);
          background: #fff8ee;
          isolation: isolate;
          animation: photoFloat 5.4s ease-in-out infinite;
        }

        @keyframes photoFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        .career-photo-card::before {
          content: "";
          position: absolute;
          inset: 16px;
          z-index: 4;
          border-radius: 32px;
          border: 1px solid rgba(255,248,238,.36);
          pointer-events: none;
        }

        .career-photo-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transform: scale(1.02);
          transition: transform .7s ease;
        }

        .career-photo-card:hover img {
          transform: scale(1.07);
        }

        .career-photo-shade {
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(
              180deg,
              rgba(45,23,35,.02) 0%,
              rgba(45,23,35,.18) 42%,
              rgba(45,23,35,.82) 100%
            ),
            linear-gradient(
              90deg,
              rgba(255,248,238,.10) 0%,
              rgba(255,248,238,0) 48%
            );
          pointer-events: none;
        }

        .career-photo-badge {
          position: absolute;
          top: 28px;
          left: 28px;
          z-index: 5;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 42px;
          padding: 0 15px;
          border-radius: 999px;
          color: var(--arvis-plum);
          background: rgba(255,248,238,.88);
          border: 1px solid rgba(233,154,17,.28);
          box-shadow: 0 16px 34px rgba(69,20,44,.12);
          backdrop-filter: blur(12px);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: .7px;
          text-transform: uppercase;
        }

        .career-photo-badge svg {
          color: var(--arvis-gold);
        }

        .career-photo-content {
          position: absolute;
          left: 30px;
          right: 30px;
          bottom: 30px;
          z-index: 5;
          color: #fff8ee;
        }

        .career-photo-content span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 32px;
          padding: 0 12px;
          border-radius: 999px;
          color: #fff8ee;
          background: rgba(233,154,17,.88);
          box-shadow: 0 14px 28px rgba(0,0,0,.16);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .career-photo-content h3 {
          margin: 16px 0 0;
          max-width: 440px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.03;
          letter-spacing: -1px;
          color: #fff8ee;
          font-weight: 950;
        }

        .career-photo-content p {
          max-width: 490px;
          margin: 12px 0 0;
          color: rgba(255,248,238,.82);
          font-size: 14.5px;
          line-height: 1.6;
          font-weight: 650;
        }

        .career-photo-stats {
          position: absolute;
          right: 26px;
          top: 90px;
          z-index: 5;
          display: grid;
          gap: 10px;
          width: 145px;
        }

        .career-photo-stat {
          padding: 13px 14px;
          border-radius: 18px;
          color: var(--arvis-text);
          background: rgba(255,248,238,.86);
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 14px 34px rgba(69,20,44,.12);
          backdrop-filter: blur(12px);
          text-align: center;
        }

        .career-photo-stat strong {
          display: block;
          color: var(--arvis-gold);
          font-size: 20px;
          font-weight: 950;
          line-height: 1;
        }

        .career-photo-stat span {
          display: block;
          margin-top: 5px;
          color: var(--arvis-muted);
          font-size: 10.8px;
          font-weight: 850;
          line-height: 1.3;
        }

        .benefits-section {
          padding: 86px 0;
          background:
            radial-gradient(circle at 8% 12%, rgba(233,154,17,.12), transparent 26%),
            radial-gradient(circle at 92% 35%, rgba(69,20,44,.08), transparent 28%),
            linear-gradient(180deg, #fff3df 0%, #fff8ee 100%);
        }

        .section-head {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 850px;
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
          max-width: 720px;
          color: rgba(45, 23, 35, .72);
          font-size: 15.5px;
          line-height: 1.7;
          font-weight: 650;
        }

        .section-head.light p {
          color: var(--arvis-muted);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .benefit-card {
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

        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 72px rgba(69,20,44,.13);
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          margin: 0 auto 16px;
          border-radius: 50%;
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 16px 32px rgba(233,154,17,.20);
          font-size: 24px;
        }

        .benefit-card h3 {
          margin: 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-weight: 950;
        }

        .benefit-card p {
          margin: 10px 0 0;
          color: var(--arvis-muted);
          font-size: 13.5px;
          line-height: 1.6;
          font-weight: 650;
        }

        .benefit-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .jobs-section {
          position: relative;
          margin-top: -1px;
          padding: 92px 0 86px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.16), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(69,20,44,.07), transparent 30%),
            linear-gradient(135deg, #fff8ee 0%, #fff3df 52%, #f3dfc1 100%);
          border-top: 1px solid rgba(233,154,17,.18);
          border-bottom: 1px solid rgba(233,154,17,.18);
        }

        .jobs-section::before {
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

        .jobs-section::after {
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

        .jobs-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .job-card {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 370px;
          padding: 25px 22px;
          border: 1px solid rgba(233,154,17,.24);
          border-radius: 30px;
          color: #fff8ee;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.15), transparent 34%),
            linear-gradient(135deg, #4a1730 0%, #351020 54%, #220915 100%);
          box-shadow: 0 24px 60px rgba(69,20,44,.18);
          text-align: center;
          cursor: pointer;
          transition: .28s ease;
        }

        .job-card::after {
          content: "";
          position: absolute;
          right: -58px;
          bottom: -58px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(233,154,17,.12);
        }

        .job-card:hover {
          transform: translateY(-9px);
          border-color: rgba(233,154,17,.42);
          box-shadow: 0 32px 76px rgba(69,20,44,.24);
        }

        .job-card > * {
          position: relative;
          z-index: 2;
        }

        .job-icon {
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

        .job-code {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          color: #fff8ee;
          background: rgba(233,154,17,.16);
          border: 1px solid rgba(233,154,17,.28);
          font-size: 12px;
          font-weight: 950;
          margin-bottom: 13px;
        }

        .job-card h3 {
          margin: 0;
          color: #fff8ee;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          line-height: 1.12;
          font-weight: 950;
          letter-spacing: -.5px;
        }

        .job-card p {
          margin: 13px auto 0;
          color: rgba(255,248,238,.72);
          font-size: 13.5px;
          line-height: 1.6;
          font-weight: 600;
        }

        .job-meta {
          display: grid;
          gap: 9px;
          margin: 20px 0 0;
        }

        .job-meta span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 36px;
          padding: 0 12px;
          border-radius: 999px;
          color: #fff8ee;
          background: rgba(255,248,238,.08);
          border: 1px solid rgba(255,248,238,.12);
          font-size: 12px;
          font-weight: 850;
        }

        .job-meta svg {
          width: 14px;
          height: 14px;
          color: var(--arvis-gold);
        }

        .view-details {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 22px;
          color: var(--arvis-gold-soft);
          font-size: 13px;
          font-weight: 950;
        }

        .view-details svg {
          width: 14px;
          height: 14px;
        }

        .process-section {
          padding: 86px 0;
          background: var(--arvis-bg);
        }

        .process-box {
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

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 34px;
        }

        .process-step {
          padding: 22px;
          border-radius: 26px;
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(233,154,17,.18);
          text-align: center;
          transition: .25s ease;
        }

        .process-step:hover {
          transform: translateY(-7px);
          background: rgba(255,255,255,.82);
        }

        .process-step svg {
          width: 30px;
          height: 30px;
          color: var(--arvis-gold);
          margin-bottom: 16px;
        }

        .process-step strong {
          display: block;
          color: var(--arvis-text);
          font-size: 17px;
          font-weight: 950;
        }

        .process-step span {
          display: block;
          margin-top: 8px;
          color: var(--arvis-muted);
          font-size: 13px;
          line-height: 1.5;
          font-weight: 650;
        }

        .final-cta {
          position: relative;
          overflow: hidden;
          margin: 0 0 86px;
          padding: 42px;
          border-radius: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.15), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.90), rgba(255,248,238,.70));
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 30px 80px rgba(69,20,44,.10);
        }

        .final-cta h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 4vw, 54px);
          line-height: 1.05;
        }

        .final-cta p {
          max-width: 720px;
          margin: 14px 0 0;
          color: var(--arvis-muted);
          font-size: 16px;
          line-height: 1.72;
          font-weight: 650;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          padding: 18px;
          display: grid;
          place-items: center;
          background: rgba(20, 7, 13, .74);
          backdrop-filter: blur(12px);
        }

        .job-modal {
          position: relative;
          width: min(980px, 100%);
          max-height: min(92vh, 900px);
          overflow: auto;
          border-radius: 34px;
          background: #fff8ee;
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 36px 120px rgba(0,0,0,.32);
        }

        .modal-head {
          position: relative;
          overflow: hidden;
          padding: 34px;
          color: #fff8ee;
          background:
            radial-gradient(circle at 15% 20%, rgba(233,154,17,.22), transparent 30%),
            linear-gradient(135deg, #4a1730, #250916);
        }

        .modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          color: #fff8ee;
          background: rgba(255,248,238,.12);
          transition: .2s ease;
        }

        .modal-close:hover {
          background: rgba(255,248,238,.20);
          transform: rotate(90deg);
        }

        .modal-title-row {
          display: flex;
          align-items: center;
          gap: 18px;
          padding-right: 46px;
        }

        .modal-job-icon {
          width: 68px;
          height: 68px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          color: var(--arvis-gold);
          border: 2px solid rgba(233,154,17,.62);
          font-size: 30px;
        }

        .modal-head h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(30px, 4vw, 50px);
          line-height: 1.05;
          letter-spacing: -1.2px;
          font-weight: 950;
        }

        .modal-head p {
          margin: 14px 0 0;
          color: rgba(255,248,238,.78);
          max-width: 760px;
          line-height: 1.65;
          font-weight: 600;
        }

        .modal-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .modal-meta span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 13px;
          border-radius: 999px;
          color: #fff8ee;
          background: rgba(255,248,238,.10);
          border: 1px solid rgba(233,154,17,.18);
          font-size: 12.5px;
          font-weight: 850;
        }

        .modal-meta svg {
          width: 14px;
          height: 14px;
          color: var(--arvis-gold);
        }

        .modal-body {
          padding: 32px;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .detail-box {
          padding: 24px;
          border-radius: 28px;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.10), transparent 32%),
            linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,248,238,.78));
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 16px 38px rgba(69,20,44,.06);
        }

        .detail-box.full {
          grid-column: 1 / -1;
        }

        .detail-box h3 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 0 0 16px;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-weight: 950;
          text-align: center;
        }

        .detail-box h3 svg {
          color: var(--arvis-gold);
          width: 20px;
          height: 20px;
        }

        .detail-list {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .detail-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: var(--arvis-muted);
          font-size: 14px;
          line-height: 1.6;
          font-weight: 650;
        }

        .detail-list svg {
          width: 15px;
          height: 15px;
          color: var(--arvis-gold);
          flex: 0 0 auto;
          margin-top: 4px;
        }

        .skills-wrap {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 38px;
          padding: 0 13px;
          border-radius: 999px;
          color: var(--arvis-plum);
          background: rgba(233,154,17,.11);
          border: 1px solid rgba(233,154,17,.18);
          font-size: 12.5px;
          font-weight: 900;
        }

        .skill-pill svg {
          color: var(--arvis-gold);
        }

        .modal-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        @media (max-width: 1180px) {
          .jobs-grid,
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .career-photo-card {
            min-height: 480px;
          }
        }

        @media (max-width: 1050px) {
          .careers-container {
            width: min(1240px, calc(100% - 44px));
          }

          .careers-hero-grid {
            grid-template-columns: 1fr;
          }

          .careers-hero {
            min-height: auto;
          }

          .hero-panel {
            min-height: auto;
          }

          .career-photo-card {
            width: min(100%, 760px);
            min-height: 500px;
            margin: 0 auto;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .final-cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 760px) {
          .careers-container {
            width: min(100% - 20px, 1240px);
          }

          [data-animate] {
            transform: translateY(24px);
          }

          .careers-hero {
            min-height: auto;
          }

          .careers-hero::after {
            bottom: -38px;
            height: 72px;
          }

          .careers-hero-grid {
            display: block;
            padding: 32px 0 78px;
          }

          .hero-panel {
            display: flex;
            margin-top: 32px;
            min-height: auto;
          }

          .career-photo-card {
            min-height: 360px;
            border-radius: 30px;
          }

          .career-photo-card::before {
            inset: 10px;
            border-radius: 24px;
          }

          .career-photo-badge {
            top: 18px;
            left: 18px;
            min-height: 36px;
            padding: 0 12px;
            font-size: 10px;
          }

          .career-photo-stats {
            right: 16px;
            top: 62px;
            width: 118px;
            gap: 8px;
          }

          .career-photo-stat {
            padding: 10px;
            border-radius: 14px;
          }

          .career-photo-stat strong {
            font-size: 16px;
          }

          .career-photo-stat span {
            font-size: 8.8px;
          }

          .career-photo-content {
            left: 18px;
            right: 18px;
            bottom: 18px;
          }

          .career-photo-content span {
            min-height: 28px;
            font-size: 9px;
          }

          .career-photo-content h3 {
            max-width: 310px;
            font-size: 27px;
          }

          .career-photo-content p {
            max-width: 320px;
            font-size: 12.2px;
            line-height: 1.5;
          }

          .eyebrow,
          .section-kicker {
            font-size: 9.5px;
            letter-spacing: 2.1px;
            gap: 8px;
          }

          .eyebrow::before,
          .section-kicker::before {
            width: 34px;
          }

          .hero-copy h1 {
            font-size: 42px;
            line-height: .98;
            letter-spacing: -1.4px;
          }

          .hero-copy p {
            margin-top: 20px;
            font-size: 14px;
            line-height: 1.68;
          }

          .hero-actions {
            align-items: stretch;
            flex-direction: column;
            margin-top: 28px;
          }

          .career-btn {
            width: 100%;
            min-height: 52px;
            font-size: 13.5px;
          }

          .benefits-section {
            padding: 62px 0;
          }

          .benefit-card {
            padding: 24px 20px;
            border-radius: 26px;
          }

          .benefit-actions {
            align-items: stretch;
            flex-direction: column;
            margin-top: 26px;
          }

          .jobs-section {
            padding: 66px 0 58px;
          }

          .jobs-section::before {
            left: -18%;
            right: -18%;
            top: -36px;
            height: 66px;
          }

          .jobs-section::after {
            top: 21px;
            height: 1.5px;
          }

          .section-head {
            width: calc(100% - 30px);
            margin-bottom: 28px;
          }

          .section-head h2 {
            font-size: 34px;
          }

          .section-head p {
            font-size: 13.5px;
            line-height: 1.62;
          }

          .jobs-grid,
          .benefits-grid,
          .process-grid,
          .modal-grid {
            grid-template-columns: 1fr;
          }

          .job-card {
            min-height: auto;
            padding: 24px 20px;
            border-radius: 26px;
          }

          .job-card h3 {
            font-size: 23px;
          }

          .process-section {
            padding: 62px 0;
          }

          .process-box,
          .final-cta {
            padding: 26px;
            border-radius: 28px;
          }

          .final-cta {
            margin-bottom: 70px;
          }

          .final-cta h2 {
            font-size: 32px;
          }

          .final-cta p {
            font-size: 13.5px;
            line-height: 1.62;
          }

          .modal-backdrop {
            padding: 10px;
          }

          .job-modal {
            border-radius: 26px;
            max-height: 94vh;
          }

          .modal-head {
            padding: 28px 22px;
          }

          .modal-title-row {
            align-items: flex-start;
            flex-direction: column;
            padding-right: 44px;
          }

          .modal-job-icon {
            width: 60px;
            height: 60px;
          }

          .modal-body {
            padding: 20px;
          }

          .detail-box {
            padding: 20px;
            border-radius: 24px;
          }
        }

        @media (max-width: 520px) {
          .careers-container {
            width: min(100% - 18px, 1240px);
          }

          .hero-copy h1 {
            font-size: 40px;
          }

          .hero-copy p {
            font-size: 14px;
          }

          .career-photo-card {
            min-height: 330px;
            border-radius: 28px;
          }

          .career-photo-card img {
            object-position: center;
          }

          .career-photo-stats {
            display: none;
          }

          .career-photo-content h3 {
            font-size: 25px;
          }

          .career-photo-content p {
            font-size: 11.8px;
          }

          .job-card,
          .benefit-card {
            padding: 22px 18px;
          }

          .process-box,
          .final-cta {
            padding: 24px;
          }

          .modal-close {
            top: 12px;
            right: 12px;
            width: 40px;
            height: 40px;
          }

          .modal-head h2 {
            font-size: 28px;
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

      <main className="careers-page">
        <section className="careers-hero">
          <div className="careers-container">
            <div className="careers-hero-grid">
              <div className="hero-copy" data-animate>
                <div className="eyebrow">
                  <Icon type="career" />
                  Careers at Arvi's Fertilizers
                </div>

                <h1>
                  Build your career in <span>Agriculture growth.</span>
                </h1>

                <p>
                  Join Arvis Fertilizers and work with farmers, dealers and
                  agriculture markets across South India. We are hiring field
                  marketing, sales and leadership roles for our growing
                  agri-input business.
                </p>

                <div className="hero-actions">
                  <button className="career-btn primary" onClick={openApplyForm}>
                    Apply Now <Icon type="apply" />
                  </button>

                  <a className="career-btn secondary" href="#open-positions">
                    View Open Positions <Icon type="arrow" />
                  </a>
                </div>
              </div>

              <div className="hero-panel" data-animate data-delay="1">
                <div className="career-photo-card">
                  <img
                    src={CAREER_IMAGE}
                    alt="Arvis field employee connecting with farmer"
                    onError={handleCareerImageError}
                  />

                  <div className="career-photo-shade"></div>

                  <div className="career-photo-badge">
                    <Icon type="leaf" />
                    Field Careers
                  </div>

                  <div className="career-photo-stats">
                    <div className="career-photo-stat">
                      <strong>4+</strong>
                      <span>Focused States</span>
                    </div>

                    <div className="career-photo-stat">
                      <strong>Field</strong>
                      <span>Growth Roles</span>
                    </div>
                  </div>

                  <div className="career-photo-content">
                    <span>Farmer Connect</span>

                    <h3>Work closely with farmers and agri markets.</h3>

                    <p>
                      Be part of a field team that supports dealers, farmers and
                      crop-focused agriculture growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="careers-container">
            <div className="section-head" data-animate>
              <div className="section-kicker">
                <Icon type="award" />
                Why Join Us
              </div>

              <h2>
                Grow with a <span>farmer-focused agri brand.</span>
              </h2>

              <p>
                Arvis offers field-level learning, dealer network exposure and
                strong career growth opportunities in the fertilizer and agri
                inputs industry.
              </p>
            </div>

            <div className="benefits-grid">
              {benefits.map((item, index) => (
                <div
                  className="benefit-card"
                  key={item.title}
                  data-animate
                  data-delay={index}
                >
                  <div className="benefit-icon">
                    <Icon type={item.icon} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="jobs-section" id="open-positions">
          <div className="careers-container">
            <div className="section-head light" data-animate>
              <div className="section-kicker">
                <Icon type="list" />
                Open Positions
              </div>

              <h2>
                Select a role to <span>view full details.</span>
              </h2>

              <p>
                Tap any job card to view role requirements, qualification,
                responsibilities and skills.
              </p>
            </div>

            <div className="jobs-grid">
              {jobs.map((job, index) => (
                <button
                  className="job-card"
                  key={job.title}
                  data-animate
                  data-delay={index}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="job-icon">
                    <Icon type={job.icon} />
                  </div>

                  <div className="job-code">{job.shortTitle}</div>

                  <h3>{job.title}</h3>

                  <p>{job.intro}</p>

                  <div className="job-meta">
                    <span>
                      <Icon type="degree" />
                      {job.experience}
                    </span>

                    <span>
                      <Icon type="map" />
                      Field Role
                    </span>
                  </div>

                  <div className="view-details">
                    View Full Details <Icon type="arrow" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="careers-container">
            <div className="process-box" data-animate>
              <div className="section-head light" style={{ marginBottom: 0 }}>
                <div className="section-kicker">
                  <Icon type="check" />
                  Application Path
                </div>

                <h2>
                  Simple application <span>process.</span>
                </h2>

                <p>
                  Submit your details through the form. Our team will review
                  your profile and contact shortlisted candidates.
                </p>
              </div>

              <div className="process-grid">
                <div className="process-step">
                  <Icon type="apply" />
                  <strong>Apply Form</strong>
                  <span>Submit your profile through Form.</span>
                </div>

                <div className="process-step">
                  <Icon type="list" />
                  <strong>Profile Review</strong>
                  <span>Team checks qualification and role fit.</span>
                </div>

                <div className="process-step">
                  <Icon type="phone" />
                  <strong>Interview Call</strong>
                  <span>Shortlisted candidates receive a call.</span>
                </div>

                <div className="process-step">
                  <Icon type="handshake" />
                  <strong>Selection</strong>
                  <span>Final role discussion and joining process.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="careers-container">
          <div className="final-cta" data-animate>
            <div>
              <h2>Ready to apply for Arvis careers?</h2>

              <p>
                Submit your application for sales, field marketing and
                management roles. Our team will contact shortlisted candidates.
              </p>
            </div>

            <button className="career-btn primary" onClick={openApplyForm}>
              Apply <Icon type="apply" />
            </button>
          </div>
        </div>

        {selectedJob && (
          <div
            className="modal-backdrop"
            onClick={() => setSelectedJob(null)}
            role="presentation"
          >
            <div
              className="job-modal"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={selectedJob.title}
            >
              <div className="modal-head">
                <button
                  className="modal-close"
                  onClick={() => setSelectedJob(null)}
                  aria-label="Close job details"
                >
                  <Icon type="close" />
                </button>

                <div className="modal-title-row">
                  <div className="modal-job-icon">
                    <Icon type={selectedJob.icon} />
                  </div>

                  <div>
                    <h2>{selectedJob.title}</h2>
                    <p>{selectedJob.intro}</p>
                  </div>
                </div>

                <div className="modal-meta">
                  <span>
                    <Icon type="career" />
                    {selectedJob.department}
                  </span>

                  <span>
                    <Icon type="map" />
                    {selectedJob.location}
                  </span>

                  <span>
                    <Icon type="degree" />
                    {selectedJob.experience}
                  </span>

                  <span>
                    <Icon type="check" />
                    {selectedJob.type}
                  </span>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-grid">
                  <div className="detail-box">
                    <h3>
                      <Icon type="degree" />
                      Role Requirements
                    </h3>

                    <ul className="detail-list">
                      {selectedJob.requirements.map((item) => (
                        <li key={item}>
                          <Icon type="check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-box">
                    <h3>
                      <Icon type="list" />
                      Responsibilities
                    </h3>

                    <ul className="detail-list">
                      {selectedJob.responsibilities.map((item) => (
                        <li key={item}>
                          <Icon type="check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-box full">
                    <h3>
                      <Icon type="award" />
                      Required Skills
                    </h3>

                    <div className="skills-wrap">
                      {selectedJob.skills.map((skill) => (
                        <span className="skill-pill" key={skill}>
                          <Icon type="check" />
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="modal-actions">
                      <button
                        className="career-btn dark"
                        onClick={openApplyForm}
                      >
                        Apply for {selectedJob.shortTitle} <Icon type="apply" />
                      </button>

                      <button
                        className="career-btn light"
                        onClick={() => setSelectedJob(null)}
                      >
                        View Other Roles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Careers;