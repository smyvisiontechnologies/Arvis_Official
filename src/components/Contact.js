import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSeedling,
  FaPaperPlane,
  FaStore,
  FaTractor,
  FaChartLine,
  FaUserAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaIndustry,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxYaqOZFEL_jKN8vjC_wudk8qS9YstFVJ6O40r00-b2WE3biyweo-b47qlQlncKIbQNYg/exec";

  const SITE_URL = "https://www.arvisfertilizers.com";
  const PAGE_URL = `${SITE_URL}/contact`;
  const COMPANY_NAME = "Arvis Fertilizers & Chemicals Pvt. Ltd.";
  const SEO_TITLE =
    "Contact Arvis Fertilizers | Dealer, Farmer & Investor Enquiries";
  const SEO_DESCRIPTION =
    "Contact Arvis Fertilizers & Chemicals Pvt. Ltd. for dealer enquiries, farmer support, investor relations, product information and agri-input business opportunities across South India.";

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
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
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    alternateName: "Arvis Fertilizers",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Arvis Fertilizers & Chemicals Pvt. Ltd. is an agri-input and fertilizer company focused on crop nutrition, dealer distribution, farmer support and agriculture market growth.",
    email: "arvisfertilizers@gmail.com",
    telephone: "+91-7893423282",
    address: {
      "@type": "PostalAddress",
      streetAddress: "S.No. 282/A6, Near Port Road",
      addressLocality: "Kakinada",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7893423282",
        email: "arvisfertilizers@gmail.com",
        contactType: "Customer Support",
        areaServed: "IN",
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-7893423282",
        email: "arvisfertilizers@gmail.com",
        contactType: "Dealer Enquiry",
        areaServed: "IN",
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-7893423282",
        email: "arvisfertilizers@gmail.com",
        contactType: "Investor Relations",
        areaServed: "IN",
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/share/1DoVPsobRw/",
      "https://www.instagram.com/arvis_fertilizers?igsh=MWF4Nzd0NTU0bmo0cA==",
      "https://youtube.com/@arvisfertilizers?si=aFMj0P4MnVsXTNrE",
      "https://www.linkedin.com/company/arvis-fertilizers/",
    ],
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
      "Dealer Enquiry",
      "Farmer Support",
      "Investor Relations",
      "Plant Growth Support",
      "Agriculture Products",
      "Fertilizer Distribution",
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
        name: "Contact",
        item: PAGE_URL,
      },
    ],
  };

  const enquirySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arvis Fertilizers Contact Enquiry Types",
    description:
      "Dealer enquiry, farmer support, investor enquiry and general business enquiry contact options for Arvis Fertilizers.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Dealer Enquiry",
        description: "Apply for dealership and distribution opportunities.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Farmer Support",
        description: "Get product guidance and crop result-focused support.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Investor Enquiry",
        description:
          "Connect for investor relations, company vision and strategic opportunities.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Other Enquiry",
        description: "General business, product or company information.",
      },
    ],
  };

  const Icon = ({ type }) => {
    const icons = {
      phone: <FaPhoneAlt />,
      mail: <FaEnvelope />,
      map: <FaMapMarkerAlt />,
      leaf: <FaSeedling />,
      send: <FaPaperPlane />,
      dealer: <FaStore />,
      farmer: <FaTractor />,
      investor: <FaChartLine />,
      user: <FaUserAlt />,
      whatsapp: <FaWhatsapp />,
      facebook: <FaFacebookF />,
      instagram: <FaInstagram />,
      youtube: <FaYoutube />,
      linkedin: <FaLinkedinIn />,
      globe: <FaGlobeAsia />,
      india: <FaMapMarkedAlt />,
      industry: <FaIndustry />,
      arrow: <FaArrowRight />,
    };

    return icons[type] || <FaSeedling />;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: onlyNumbers,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setStatus({
      loading: false,
      success: false,
      error: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const indianMobileRegex = /^[6-9]\d{9}$/;

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.enquiryType
    ) {
      setStatus({
        loading: false,
        success: false,
        error: "Please fill name, email, phone number and enquiry type.",
      });
      return;
    }

    if (!indianMobileRegex.test(formData.phone)) {
      setStatus({
        loading: false,
        success: false,
        error:
          "Please enter a valid Indian mobile number. It must be 10 digits and start with 6, 7, 8 or 9.",
      });
      return;
    }

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    const payload = {
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      EnquiryType: formData.enquiryType,
      Source: "Arvis Website Contact Page",
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setStatus({
        loading: false,
        success: true,
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Something went wrong. Please try again or contact us directly.",
      });
    }
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: "facebook",
      url: "https://www.facebook.com/share/1DoVPsobRw/",
    },
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/arvis_fertilizers?igsh=MWF4Nzd0NTU0bmo0cA==",
    },
    {
      name: "YouTube",
      icon: "youtube",
      url: "https://youtube.com/@arvisfertilizers?si=aFMj0P4MnVsXTNrE",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/company/arvis-fertilizers/",
    },
  ];

  const enquiryCards = [
    {
      title: "Dealer Enquiry",
      text: "Apply for dealership and distribution opportunities.",
      icon: "dealer",
    },
    {
      title: "Farmer Support",
      text: "Get product guidance and crop result-focused support.",
      icon: "farmer",
    },
    {
      title: "Investor Enquiry",
      text: "Connect with us for investor relations and company vision.",
      icon: "investor",
    },
    {
      title: "Other Enquiry",
      text: "For general business, product or company information.",
      icon: "user",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta
          name="keywords"
          content="Contact Arvis Fertilizers, Arvis Fertilizers contact, fertilizer dealer enquiry, farmer support fertilizers, fertilizer company contact Andhra Pradesh, fertilizer company contact Karnataka, fertilizer company contact Telangana, fertilizer company contact Tamil Nadu, fertilizer company contact Kerala, agri input company contact India, crop nutrition enquiry, investor enquiry Arvis Fertilizers"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={COMPANY_NAME} />
        <meta name="geo.region" content="IN-AP" />
        <meta
          name="geo.placename"
          content="Kakinada, Andhra Pradesh, India"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arvis Fertilizers" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}/images/map.png`} />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/map.png`} />

        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(enquirySchema)}
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

        .contact-page {
          width: 100%;
          overflow: hidden;
          background: var(--arvis-bg);
          color: var(--arvis-text);
        }

        .contact-container {
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

        .contact-hero {
          position: relative;
          min-height: 610px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 78% 16%, rgba(233,154,17,.18), transparent 28%),
            radial-gradient(circle at 12% 85%, rgba(69,20,44,.08), transparent 30%),
            linear-gradient(135deg, #fff3df 0%, #fff8ee 44%, #f3dfc1 100%);
        }

        .contact-hero::before {
          content: "";
          position: absolute;
          right: -160px;
          top: -160px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.22), transparent 68%);
          pointer-events: none;
          animation: contactGlow 7s ease-in-out infinite;
        }

        .contact-hero::after {
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

        @keyframes contactGlow {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: .8;
          }

          50% {
            transform: translateY(-18px) scale(1.08);
            opacity: 1;
          }
        }

        .contact-hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.02fr .98fr;
          gap: 54px;
          align-items: center;
          padding: 52px 0 126px;
        }

        .contact-hero-copy {
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

        .contact-hero-copy h1 {
          margin: 22px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          color: var(--arvis-text);
          font-size: clamp(50px, 5.6vw, 88px);
          line-height: .96;
          letter-spacing: -2.7px;
          font-weight: 950;
        }

        .contact-hero-copy h1 span {
          display: block;
          color: var(--arvis-gold);
        }

        .contact-hero-copy p {
          max-width: 640px;
          margin: 26px 0 0;
          color: rgba(45, 23, 35, .82);
          font-size: 18px;
          line-height: 1.78;
          font-weight: 650;
        }

        .hero-panel {
          position: relative;
          padding: 34px;
          border-radius: 36px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.16), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,248,238,.66));
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 34px 90px rgba(69,20,44,.10);
          overflow: hidden;
          animation: floatPanel 5.3s ease-in-out infinite;
        }

        .hero-panel::before {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 28px;
          border: 1px solid rgba(233,154,17,.20);
          pointer-events: none;
        }

        .hero-panel::after {
          content: "";
          position: absolute;
          right: -80px;
          bottom: -90px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.14), transparent 68%);
        }

        .hero-panel > * {
          position: relative;
          z-index: 2;
        }

        @keyframes floatPanel {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        .hero-panel-top {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .hero-panel-icon {
          width: 66px;
          height: 66px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          color: var(--arvis-gold);
          border: 2px solid rgba(233,154,17,.62);
          font-size: 28px;
          background: rgba(255,255,255,.52);
        }

        .hero-panel-top span {
          display: block;
          color: var(--arvis-gold);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }

        .hero-panel-top h3 {
          margin: 6px 0 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          line-height: 1.03;
          letter-spacing: -1px;
          font-weight: 950;
        }

        .hero-panel p {
          margin: 20px 0 0;
          color: var(--arvis-muted);
          font-size: 15px;
          line-height: 1.72;
          font-weight: 650;
        }

        .hero-links {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .hero-link {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 16px;
          border-radius: 22px;
          text-decoration: none;
          color: var(--arvis-text);
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(233,154,17,.20);
          transition: .25s ease;
        }

        .hero-link:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,.82);
        }

        .hero-link svg {
          width: 21px;
          height: 21px;
          color: var(--arvis-gold);
          flex: 0 0 auto;
        }

        .hero-link strong {
          display: block;
          font-size: 13px;
          font-weight: 950;
          color: var(--arvis-text);
        }

        .hero-link span {
          display: block;
          margin-top: 3px;
          color: var(--arvis-muted);
          font-size: 12px;
          line-height: 1.4;
          font-weight: 650;
        }

        .contact-section {
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

        .contact-section::before {
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

        .contact-section::after {
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

        .contact-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: .86fr 1.14fr;
          gap: 28px;
          align-items: start;
        }

        .info-stack {
          display: grid;
          gap: 16px;
        }

        .info-card {
          position: relative;
          overflow: hidden;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 24px;
          border-radius: 30px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.13), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,248,238,.66));
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 24px 60px rgba(69,20,44,.08);
          text-decoration: none;
          transition: .28s ease;
        }

        .info-card:hover {
          transform: translateY(-7px);
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.18), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.96), rgba(255,248,238,.76));
          box-shadow: 0 32px 76px rgba(69,20,44,.12);
        }

        .info-icon {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          color: var(--arvis-gold);
          border: 2px solid rgba(233,154,17,.62);
          font-size: 23px;
          background: rgba(255,255,255,.55);
        }

        .info-card h3 {
          margin: 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-weight: 950;
        }

        .info-card p {
          margin: 8px 0 0;
          color: var(--arvis-muted);
          font-size: 14.5px;
          line-height: 1.65;
          font-weight: 650;
        }

        .quick-box,
        .social-card {
          position: relative;
          overflow: hidden;
          padding: 28px;
          border-radius: 32px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.13), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,248,238,.66));
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 24px 70px rgba(69,20,44,.08);
        }

        .quick-box h3,
        .social-card h3 {
          margin: 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          line-height: 1.05;
          letter-spacing: -1px;
          font-weight: 950;
        }

        .quick-box p,
        .social-card p {
          margin: 14px 0 0;
          color: var(--arvis-muted);
          font-size: 14.5px;
          line-height: 1.65;
          font-weight: 650;
        }

        .quick-actions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 22px;
        }

        .quick-action {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 16px;
          border-radius: 12px;
          text-decoration: none;
          color: var(--arvis-plum);
          font-size: 13px;
          font-weight: 950;
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(233,154,17,.20);
          transition: .25s ease;
        }

        .quick-action:hover {
          transform: translateY(-4px);
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
        }

        .quick-action svg {
          width: 18px;
          height: 18px;
          color: var(--arvis-gold);
        }

        .quick-action:hover svg {
          color: #fff8ee;
        }

        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }

        .social-link {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--arvis-plum);
          text-decoration: none;
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(233,154,17,.30);
          transition: .25s ease;
        }

        .social-link:hover {
          transform: translateY(-5px) rotate(-4deg);
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
        }

        .form-card {
          position: relative;
          overflow: hidden;
          padding: 34px;
          border-radius: 36px;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.13), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.94), rgba(255,248,238,.80));
          border: 1px solid rgba(233,154,17,.26);
          box-shadow: 0 30px 80px rgba(69,20,44,.10);
        }

        .form-card::before {
          content: "";
          position: absolute;
          right: -90px;
          top: -90px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: rgba(233,154,17,.14);
        }

        .form-card::after {
          content: "";
          position: absolute;
          left: -70px;
          bottom: -80px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(69,20,44,.08);
        }

        .form-card > * {
          position: relative;
          z-index: 2;
        }

        .form-head {
          margin-bottom: 28px;
        }

        .form-head h2 {
          margin: 12px 0 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 3.6vw, 50px);
          line-height: 1.05;
          letter-spacing: -1.2px;
          font-weight: 950;
        }

        .form-head p {
          margin: 12px 0 0;
          color: var(--arvis-muted);
          font-size: 14.5px;
          line-height: 1.65;
          font-weight: 650;
          max-width: 560px;
        }

        .contact-form {
          display: grid;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .field {
          display: grid;
          gap: 8px;
        }

        .field label {
          color: var(--arvis-text);
          font-size: 13px;
          font-weight: 950;
        }

        .field input,
        .field select {
          width: 100%;
          min-height: 56px;
          border: 1px solid rgba(69,20,44,.16);
          border-radius: 18px;
          padding: 0 16px;
          outline: none;
          background: #fff8ee;
          color: var(--arvis-text);
          font-size: 15px;
          font-weight: 650;
          transition: .22s ease;
        }

        .field input:focus,
        .field select:focus {
          border-color: rgba(233,154,17,.70);
          background: white;
          box-shadow: 0 0 0 5px rgba(233,154,17,.10);
        }

        .field input::placeholder {
          color: rgba(45,23,35,.42);
        }

        .field small {
          color: var(--arvis-muted);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.45;
        }

        .submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 6px;
          flex-wrap: wrap;
        }

        .submit-btn {
          min-height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 0 26px;
          border: 0;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          font-size: 14px;
          font-weight: 950;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 18px 34px rgba(233,154,17,.25);
          transition: .25s ease;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
        }

        .submit-btn:disabled {
          cursor: not-allowed;
          opacity: .7;
          transform: none;
        }

        .status-msg {
          flex: 1;
          min-width: 240px;
          padding: 13px 15px;
          border-radius: 18px;
          font-size: 13px;
          font-weight: 850;
          line-height: 1.45;
        }

        .status-msg.success {
          color: #1d6b3b;
          background: rgba(34,197,94,.12);
          border: 1px solid rgba(34,197,94,.22);
        }

        .status-msg.error {
          color: #8b2b10;
          background: rgba(233,154,17,.12);
          border: 1px solid rgba(233,154,17,.22);
        }

        .enquiry-strip {
          padding: 86px 0;
          background:
            radial-gradient(circle at 8% 12%, rgba(233,154,17,.12), transparent 26%),
            radial-gradient(circle at 92% 35%, rgba(69,20,44,.08), transparent 28%),
            linear-gradient(180deg, #fff3df 0%, #fff8ee 100%);
        }

        .enquiry-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .enquiry-card {
          padding: 24px;
          border-radius: 28px;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.12), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,248,238,.72));
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 22px 52px rgba(69,20,44,.08);
          transition: .25s ease;
          text-align: center;
        }

        .enquiry-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 72px rgba(69,20,44,.13);
        }

        .enquiry-card svg {
          width: 30px;
          height: 30px;
          color: var(--arvis-gold);
          margin-bottom: 14px;
        }

        .enquiry-card h3 {
          margin: 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          font-weight: 950;
        }

        .enquiry-card p {
          margin: 8px 0 0;
          color: var(--arvis-muted);
          font-size: 13.5px;
          line-height: 1.55;
          font-weight: 650;
        }

        .india-section {
          padding: 0 0 86px;
          background: var(--arvis-bg);
        }

        .india-box {
          position: relative;
          overflow: hidden;
          min-height: 520px;
          border-radius: 38px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.16), transparent 34%),
            linear-gradient(135deg, #fff8ee 0%, #fff3df 52%, #f3dfc1 100%);
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 30px 80px rgba(69,20,44,.10);
        }

        .india-box::before {  
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(90deg, rgba(255,248,238,.98) 0%, rgba(255,248,238,.82) 36%, rgba(255,248,238,.38) 66%, rgba(255,248,238,.08) 100%),
            url("images/map.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 1;
        }

        .india-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: .86fr 1.14fr;
          gap: 34px;
          align-items: center;
          min-height: 520px;
          padding: 42px;
        }

        .india-copy h2 {
          margin: 12px 0 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1.03;
          letter-spacing: -1.4px;
          font-weight: 950;
        }

        .india-copy p {
          margin: 16px 0 0;
          color: var(--arvis-muted);
          max-width: 590px;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 650;
        }

        .india-address {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-top: 22px;
          padding: 18px;
          border-radius: 24px;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.13), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,248,238,.66));
          border: 1px solid rgba(233,154,17,.22);
          box-shadow: 0 18px 42px rgba(69,20,44,.08);
        }

        .india-address svg {
          width: 22px;
          height: 22px;
          color: var(--arvis-gold);
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .india-address strong {
          display: block;
          color: var(--arvis-text);
          font-size: 15px;
          font-weight: 950;
        }

        .india-address span {
          display: block;
          margin-top: 5px;
          color: var(--arvis-muted);
          font-size: 13px;
          line-height: 1.55;
          font-weight: 650;
        }

        .india-map-visual {
          position: relative;
          min-height: 390px;
          display: grid;
          place-items: center;
        }

        .india-map-picture {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 390px;
          display: block;
          overflow: hidden;
          border-radius: 34px;
          background: rgba(255,248,238,.50);
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 30px 80px rgba(69,20,44,.12);
        }

        .india-map-picture img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          padding: 0;
        }

        @media (max-width: 1050px) {
          .contact-container {
            width: min(1240px, calc(100% - 44px));
          }

          .contact-hero-grid,
          .contact-grid,
          .india-content {
            grid-template-columns: 1fr;
          }

          .contact-hero {
            min-height: auto;
          }

          .hero-panel {
            max-width: 680px;
          }

          .enquiry-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .india-content {
            min-height: auto;
          }

          .india-map-picture {
            height: 420px;
          }
        }

        @media (max-width: 760px) {
          .contact-container {
            width: min(100% - 20px, 1240px);
          }

          [data-animate] {
            transform: translateY(24px);
          }

          .contact-hero {
            min-height: auto;
          }

          .contact-hero::after {
            bottom: -38px;
            height: 72px;
          }

          .contact-hero-grid {
            display: block;
            padding: 32px 0 78px;
          }

          .hero-panel {
            display: none;
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

          .contact-hero-copy h1 {
            font-size: 42px;
            line-height: .98;
            letter-spacing: -1.4px;
          }

          .contact-hero-copy p {
            margin-top: 20px;
            font-size: 14px;
            line-height: 1.68;
          }

          .contact-section {
            padding: 66px 0 58px;
          }

          .contact-section::before {
            left: -18%;
            right: -18%;
            top: -36px;
            height: 66px;
          }

          .contact-section::after {
            top: 21px;
            height: 1.5px;
          }

          .form-card,
          .quick-box,
          .social-card {
            padding: 24px;
            border-radius: 28px;
          }

          .info-card {
            padding: 20px;
            border-radius: 26px;
          }

          .field input,
          .field select {
            min-height: 54px;
            font-size: 16px;
            border-radius: 16px;
          }

          .submit-row {
            align-items: stretch;
            flex-direction: column;
          }

          .submit-btn {
            min-height: 54px;
            width: 100%;
          }

          .status-msg {
            min-width: 0;
            width: 100%;
          }

          .quick-actions {
            grid-template-columns: 1fr;
          }

          .enquiry-strip {
            padding: 62px 0;
          }

          .enquiry-grid {
            grid-template-columns: 1fr;
          }

          .india-section {
            padding-bottom: 62px;
          }

          .india-box {
            min-height: auto;
            border-radius: 30px;
          }

          .india-box::before {
            background-image:
              linear-gradient(180deg, rgba(255,248,238,.96) 0%, rgba(255,248,238,.82) 46%, rgba(255,248,238,.28) 100%),
              url("images/map.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          .india-content {
            padding: 24px;
            gap: 24px;
          }

          .india-copy h2 {
            font-size: 34px;
          }

          .india-copy p {
            font-size: 14px;
          }

          .india-address {
            padding: 16px;
            border-radius: 20px;
          }

          .india-map-visual {
            min-height: 320px;
          }

          .india-map-picture {
            width: 100%;
            height: 320px;
            border-radius: 26px;
          }

          .india-map-picture img {
            object-fit: cover;
            object-position: center;
          }
        }

        @media (max-width: 520px) {
          .contact-container {
            width: min(100% - 18px, 1240px);
          }

          .contact-hero-copy h1 {
            font-size: 40px;
          }

          .contact-hero-copy p {
            font-size: 14px;
          }

          .form-card,
          .quick-box,
          .social-card {
            padding: 22px;
          }

          .form-head h2 {
            font-size: 30px;
          }

          .info-icon {
            width: 50px;
            height: 50px;
          }

          .social-link {
            width: 46px;
            height: 46px;
          }

          .india-content {
            padding: 20px;
          }

          .india-copy h2 {
            font-size: 30px;
          }

          .india-map-visual {
            min-height: 300px;
          }

          .india-map-picture {
            height: 300px;
            border-radius: 22px;
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

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-container">
            <div className="contact-hero-grid">
              <div className="contact-hero-copy" data-animate>
                <div className="eyebrow">
                  <Icon type="leaf" />
                  Contact Arvi's Fertilizers
                </div>

                <h1>
                  Connect with
                  <span>Arvis.</span>
                </h1>

                <p>
                  Whether you are a dealer, farmer, investor or business
                  partner, our team is ready to help you with product
                  information, dealership opportunities and investor-related
                  enquiries.
                </p>
              </div>

              <div className="hero-panel" data-animate data-delay="1">
                <div className="hero-panel-top">
                  <div className="hero-panel-icon">
                    <Icon type="phone" />
                  </div>

                  <div>
                    <span>Reach Us</span>
                    <h3>We are ready to support you</h3>
                  </div>
                </div>

                <p>
                  Submit your enquiry and our team will connect with you for the
                  right support.
                </p>

                <div className="hero-links">
                  <a className="hero-link" href="tel:+917893423282">
                    <Icon type="phone" />

                    <div>
                      <strong>Phone</strong>
                      <span>+91 7893423282</span>
                    </div>
                  </a>

                  <a
                    className="hero-link"
                    href="mailto:arvisfertilizers@gmail.com"
                  >
                    <Icon type="mail" />

                    <div>
                      <strong>Email</strong>
                      <span>arvisfertilizers@gmail.com</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="info-stack">
                <a href="tel:+917893423282" className="info-card" data-animate>
                  <div className="info-icon">
                    <Icon type="phone" />
                  </div>

                  <div>
                    <h3>Phone</h3>
                    <p>+91 7893423282</p>
                  </div>
                </a>

                <a
                  href="mailto:arvisfertilizers@gmail.com"
                  className="info-card"
                  data-animate
                  data-delay="1"
                >
                  <div className="info-icon">
                    <Icon type="mail" />
                  </div>

                  <div>
                    <h3>Email</h3>
                    <p>arvisfertilizers@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=S.No.%20282%2FA6%2C%20Near%20Port%20Road%2C%20Kakinada%2C%20Kakinada%20District%2C%20Andhra%20Pradesh%2C%20India"
                  target="_blank"
                  rel="noreferrer"
                  className="info-card"
                  data-animate
                  data-delay="2"
                >
                  <div className="info-icon">
                    <Icon type="map" />
                  </div>

                  <div>
                    <h3>Address</h3>
                    <p>
                      S.No. 282/A6, Near Port Road, Kakinada, Kakinada District,
                      Andhra Pradesh, India.
                    </p>
                  </div>
                </a>

                <div className="quick-box" data-animate>
                  <h3>Need quick support?</h3>

                  <p>
                    Call or WhatsApp our team directly for product, dealership
                    or business enquiry support.
                  </p>

                  <div className="quick-actions">
                    <a className="quick-action" href="tel:+917893423282">
                      <Icon type="phone" />
                      Call Now
                    </a>

                    <a
                      className="quick-action"
                      href="https://wa.me/917893423282"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon type="whatsapp" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="social-card" data-animate>
                  <h3>Follow Arvis</h3>

                  <p>
                    Connect with us on social platforms for product updates,
                    farmer support and company news.
                  </p>

                  <div className="social-links">
                    {socialLinks.map((item) => (
                      <a
                        className="social-link"
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.name}
                        key={item.name}
                      >
                        <Icon type={item.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-card" data-animate data-delay="1">
                <div className="form-head">
                  <div className="section-kicker">
                    <Icon type="send" />
                    Submit Enquiry
                  </div>

                  <h2>Tell us who you are</h2>

                  <p>
                    Fill this enquiry form. Your details will be saved in Google
                    Sheet and our team can follow up.
                  </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="field">
                      <label>Name *</label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="field">
                      <label>Email *</label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div className="field">
                      <label>Indian Mobile Number *</label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter 10 digit mobile number"
                        inputMode="numeric"
                        pattern="[6-9][0-9]{9}"
                        maxLength="10"
                        title="Enter valid 10 digit Indian mobile number starting with 6, 7, 8 or 9"
                        required
                      />

                      <small>Only 10 digit Indian mobile number is accepted.</small>
                    </div>

                    <div className="field">
                      <label>Enquiry Type *</label>

                      <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select who you are</option>
                        <option value="Dealer">Dealer</option>
                        <option value="Farmer">Farmer</option>
                        <option value="Investor">Investor</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="submit-row">
                    <button
                      className="submit-btn"
                      type="submit"
                      disabled={status.loading}
                    >
                      {status.loading ? "Submitting..." : "Submit Enquiry"}
                      <Icon type="send" />
                    </button>

                    {status.success && (
                      <div className="status-msg success">
                        Thank you. Your enquiry has been submitted successfully.
                      </div>
                    )}

                    {status.error && (
                      <div className="status-msg error">{status.error}</div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="enquiry-strip">
          <div className="contact-container">
            <div className="enquiry-grid">
              {enquiryCards.map((item, index) => (
                <div
                  className="enquiry-card"
                  data-animate
                  data-delay={index}
                  key={item.title}
                >
                  <Icon type={item.icon} />

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="india-section">
          <div className="contact-container">
            <div className="india-box" data-animate>
              <div className="india-content">
                <div className="india-copy">
                  <div className="section-kicker">
                    <Icon type="india" />
                    India Presence
                  </div>

                  <h2>Serving agriculture markets from India</h2>

                  <p>
                    Arvis Fertilizers is building a strong agri-input presence
                    with focus on farmer support, dealership growth and product
                    reach across key South Indian agriculture regions.
                  </p>

                  <div className="india-address">
                    <Icon type="map" />

                    <div>
                      <strong>Head Office</strong>

                      <span>
                        S.No. 282/A6, Near Port Road, Kakinada, Kakinada
                        District, Andhra Pradesh, India.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="india-map-visual">
                  <picture className="india-map-picture">
                    <img src="images/map.png" alt="Arvis India presence map" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;