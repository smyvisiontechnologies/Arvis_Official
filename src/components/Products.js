import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaAward,
  FaCheckCircle,
  FaFlask,
  FaLeaf,
  FaPhoneAlt,
  FaSeedling,
  FaShieldAlt,
  FaTimes,
  FaTint,
  FaTractor,
} from "react-icons/fa";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const SITE_URL = "https://www.arvisfertilizers.com";
  const PAGE_URL = `${SITE_URL}/products`;
  const COMPANY_NAME = "Arvis Fertilizers & Chemicals Pvt. Ltd.";
  const SEO_TITLE =
    "Arvis Fertilizers Products | Water Soluble Fertilizers & Crop Nutrition";
  const SEO_DESCRIPTION =
    "Explore Arvis Fertilizers products including water soluble fertilizers, liquid fertilizers, agro chemicals, complex fertilizers, NPK fertilizers and crop nutrition solutions for farmers and dealers across South India.";

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
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };

    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", closeOnEscape);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProduct]);

  const productCategories = [
    {
      icon: <FaTint />,
      title: "Water Soluble Fertilizers",
      link: "#products",
    },
    {
      icon: <FaFlask />,
      title: "Liquid Fertilizers",
      link: "#products",
    },
    {
      icon: <FaShieldAlt />,
      title: "Agro Chemicals",
      sub: "Pesticides",
      link: "#products",
    },
    {
      icon: <FaLeaf />,
      title: "Complex Fertilizers",
      sub: "Upcoming",
      link: "#products",
    },
  ];

  const products = [
    {
      name: "Premia Complex",
      tag: "Balanced Crop Nutrition",
      image: "/images/pro1.png",
      title: "Complete nutrition support for stronger crop growth.",
      text: "Premia Complex is designed to support balanced nutrition, healthy vegetative growth and better crop performance across important growth stages.",
      points: [
        "Supports balanced nutrient availability",
        "Helps improve crop strength and growth",
        "Suitable for dealer and farmer-focused crop programs",
      ],
    },
    {
      name: "Premia 00-00-60",
      tag: "Potassium Rich Formula",
      image: "/images/pro2.png",
      title: "High potassium support for quality-focused crops.",
      text: "Premia 00-00-60 supports potassium nutrition during fruit development, crop maturity, produce quality and stress-support stages.",
      points: [
        "Supports fruit and produce quality",
        "Useful during maturity and finishing stages",
        "Helps improve crop strength and quality",
      ],
    },
    {
      name: "Premia Magnisol",
      tag: "Magnesium Nutrition",
      image: "/images/pro3.png",
      title: "Magnesium support for greener and healthier crops.",
      text: "Premia Magnisol supports magnesium nutrition, helping plants maintain better chlorophyll activity, crop greenness and plant health.",
      points: [
        "Supports chlorophyll and greenness",
        "Helps photosynthesis support",
        "Useful in nutrition correction programs",
      ],
    },
    {
      name: "Premia 12-61-00",
      tag: "Phosphorus Support",
      image: "/images/pro4.png",
      title: "Root and early crop establishment support.",
      text: "Premia 12-61-00 is developed to support phosphorus nutrition, root activity, early crop establishment and stronger plant development.",
      points: [
        "Supports root development",
        "Useful during early crop growth",
        "Helps improve crop establishment",
      ],
    },
    {
      name: "Premia Polyphos",
      tag: "Advanced Phosphate Nutrition",
      image: "/images/pro5.png",
      title: "Efficient phosphate support for better crop response.",
      text: "Premia Polyphos is designed for advanced phosphate nutrition and crop response, supporting better nutrient movement and plant development.",
      points: [
        "Advanced phosphorus support",
        "Helps nutrient efficiency",
        "Suitable for quality crop nutrition programs",
      ],
    },
    {
      name: "Premia 00-00-50",
      tag: "Potassium Rich Fertilizer",
      image: "/images/pro6.png",
      title: "High-potassium nutrition for better crop quality and finishing.",
      text: "Premia 00-00-50 is designed to support potassium nutrition, helping improve crop strength, fruit development, colour, size and overall crop quality in quality-focused farming programs.",
      points: [
        "Supports high potassium nutrition",
        "Helps improve fruit size, colour and quality",
        "Useful during crop development and finishing stages",
      ],
    },
    {
      name: "Premia 30-10-10",
      tag: "Growth Stage Nutrition",
      image: "/images/pro7.png",
      title: "Nitrogen-rich support for active crop growth.",
      text: "Premia 30-10-10 supports active vegetative growth, leaf development and crop strength during important growth stages.",
      points: [
        "Supports active vegetative growth",
        "Useful during crop development stages",
        "Helps improve plant strength and vigor",
      ],
    },
    {
      name: "Premia Fertirise +",
      tag: "Crop Performance Booster",
      image: "/images/pro8.png",
      title: "Premium support for better crop performance.",
      text: "Premia Fertirise + is designed to support crop nutrition programs, better plant response and field-level crop performance.",
      points: [
        "Supports crop performance",
        "Useful for farmer-focused nutrition programs",
        "Helps improve plant response and growth",
      ],
    },
    {
      name: "Premia 19.19.19",
      tag: "NPK Balanced Formula",
      image: "/images/pro9.png",
      title: "Balanced NPK support for multiple crop stages.",
      text: "Premia 19.19.19 provides balanced NPK nutrition to support overall crop growth, development and nutrient availability.",
      points: [
        "Balanced nitrogen, phosphorus and potassium",
        "Useful for multiple crop stages",
        "Supports healthy crop development",
      ],
    },
    {
      name: "Premia 20.20.20",
      tag: "Complete NPK Nutrition",
      image: "/images/pro10.png",
      title: "Balanced nutrition for strong plant development.",
      text: "Premia 20.20.20 supports complete NPK nutrition for healthier crop growth, better plant vigor and balanced nutrient supply.",
      points: [
        "Complete balanced NPK support",
        "Helps improve crop vigor",
        "Suitable for regular nutrition programs",
      ],
    },
    {
      name: "Premia Calcium Nitrate",
      tag: "Calcium + Nitrogen",
      image: "/images/pro11.png",
      title: "Calcium support for strength and quality.",
      text: "Premia Calcium Nitrate supports calcium and nitrogen nutrition for crop quality, plant strength and better growth response.",
      points: [
        "Supports plant strength",
        "Useful for quality-focused crops",
        "Helps during active crop growth stages",
      ],
    },
    {
      name: "Premia KMS",
      tag: "Potassium Magnesium Sulphate",
      image: "/images/pro12.png",
      title: "Balanced potassium and magnesium nutrition for better crop performance.",
      text: "Premia KMS is designed to support potassium and magnesium nutrition, helping improve crop strength, quality, colour development and overall plant performance in quality-focused crop programs.",
      points: [
        "Supports potassium and magnesium nutrition",
        "Helps improve crop quality and colour",
        "Useful for fruit, vegetable and field crops",
      ],
    },
  ];

  const productsPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
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
      url: `${SITE_URL}/images/pro1.png`,
    },
    keywords: [
      "Arvis Fertilizers products",
      "water soluble fertilizers",
      "liquid fertilizers",
      "agro chemicals",
      "complex fertilizers",
      "NPK fertilizers",
      "crop nutrition products",
      "fertilizer products India",
      "fertilizer company South India",
      "Premia fertilizer products",
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
      "Arvis Fertilizers & Chemicals Pvt. Ltd. offers fertilizer, crop nutrition and agri-input products for farmers, dealers and agriculture markets across South India.",
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
      "Water Soluble Fertilizers",
      "Liquid Fertilizers",
      "Agro Chemicals",
      "Complex Fertilizers",
      "NPK Fertilizers",
      "Crop Nutrition",
      "Agri Inputs",
      "Plant Growth Support",
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
        name: "Products",
        item: PAGE_URL,
      },
    ],
  };

  const productCategorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arvis Fertilizers Product Categories",
    description:
      "Product categories offered by Arvis Fertilizers including water soluble fertilizers, liquid fertilizers, agro chemicals and complex fertilizers.",
    itemListElement: productCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.sub
        ? `${category.title} - ${category.sub}`
        : category.title,
      url: `${PAGE_URL}${category.link}`,
    })),
  };

  const productItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arvis Fertilizers Premium Product Portfolio",
    description:
      "Premium fertilizer and crop nutrition product portfolio from Arvis Fertilizers.",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        brand: {
          "@type": "Brand",
          name: "Premia",
        },
        manufacturer: {
          "@type": "Organization",
          name: COMPANY_NAME,
          url: SITE_URL,
        },
        image: `${SITE_URL}${product.image}`,
        description: `${product.title} ${product.text}`,
        category: product.tag,
        url: `${PAGE_URL}#products`,
        additionalProperty: product.points.map((point) => ({
          "@type": "PropertyValue",
          name: "Product Benefit",
          value: point,
        })),
      },
    })),
  };

  const tabletFertilizerSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Advanced NPK Fertilizer Tablets",
    brand: {
      "@type": "Brand",
      name: "Arvis Fertilizers",
    },
    manufacturer: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    category: "NPK Fertilizer Tablets",
    description:
      "Advanced NPK Fertilizer Tablets designed to provide balanced nitrogen, phosphorus and potassium nutrition with slow and efficient nutrient release for healthy crop growth.",
    url: PAGE_URL,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Benefit",
        value: "Balanced NPK nutrition for crops",
      },
      {
        "@type": "PropertyValue",
        name: "Benefit",
        value: "Easy and precise application",
      },
      {
        "@type": "PropertyValue",
        name: "Benefit",
        value: "Slow and efficient nutrient release",
      },
      {
        "@type": "PropertyValue",
        name: "Suitable For",
        value: "Fruit crops, vegetables, plantations and nursery plants",
      },
    ],
  };

  const getNameParts = (name) => {
    if (name.startsWith("Premia ")) {
      return {
        main: "Premia",
        rest: name.replace("Premia ", ""),
      };
    }

    return {
      main: name,
      rest: "",
    };
  };

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/images/pro1.png";
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCardKeyDown = (event, product) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedProduct(product);
    }
  };

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta
          name="keywords"
          content="Arvis Fertilizers products, Premia fertilizers, water soluble fertilizers, liquid fertilizers, agro chemicals, complex fertilizers, NPK fertilizers, crop nutrition products, fertilizer products India, fertilizer company South India, Premia 19.19.19, Premia 20.20.20, Premia 12-61-00, Premia 00-00-50, Premia 00-00-60, Premia Calcium Nitrate, Premia KMS, fertilizer dealer products"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={COMPANY_NAME} />
        <meta name="geo.region" content="IN" />
        <meta
          name="geo.placename"
          content="Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Kerala, South India"
        />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="preload" as="image" href="/images/pro1.png" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arvis Fertilizers" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}/images/pro1.png`} />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/pro1.png`} />

        <script type="application/ld+json">
          {JSON.stringify(productsPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productCategorySchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productItemListSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(tabletFertilizerSchema)}
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

        html {
          scroll-behavior: smooth;
        }

        .products-page {
          width: 100%;
          overflow: hidden;
          background: var(--arvis-bg);
          color: var(--arvis-text);
        }

        .products-container {
          width: min(1240px, calc(100% - 96px));
          margin: 0 auto;
        }

        [data-reveal] {
          opacity: 0;
          transition:
            opacity .8s cubic-bezier(.16, 1, .3, 1),
            transform .8s cubic-bezier(.16, 1, .3, 1);
        }

        [data-reveal="up"] {
          transform: translateY(40px);
        }

        [data-reveal="left"] {
          transform: translateX(-70px);
        }

        [data-reveal="right"] {
          transform: translateX(70px);
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        .products-hero {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 78% 16%, rgba(233,154,17,.18), transparent 28%),
            radial-gradient(circle at 12% 85%, rgba(69,20,44,.11), transparent 30%),
            linear-gradient(135deg, #fff3df 0%, #fff8ee 44%, #f3dfc1 100%);
        }

        .products-hero::before {
          content: "";
          position: absolute;
          right: -160px;
          top: -160px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.22), transparent 68%);
          pointer-events: none;
          animation: productsGlow 7s ease-in-out infinite;
        }

        .products-hero::after {
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

        @keyframes productsGlow {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: .8;
          }

          50% {
            transform: translateY(-18px) scale(1.08);
            opacity: 1;
          }
        }

        .products-hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.04fr .96fr;
          gap: 54px;
          align-items: center;
          padding: 52px 0 126px;
        }

        .products-kicker,
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

        .products-kicker::before,
        .section-kicker::before {
          content: "";
          width: 42px;
          height: 2px;
          border-radius: 999px;
          background: var(--arvis-gold);
        }

        .products-kicker svg,
        .section-kicker svg {
          width: 15px;
          height: 15px;
        }

        .hero-copy h1 {
          margin: 22px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(50px, 5.6vw, 88px);
          line-height: .96;
          letter-spacing: -2.7px;
          font-weight: 950;
          color: var(--arvis-text);
        }

        .hero-copy h1 span {
          display: block;
          color: var(--arvis-gold);
        }

        .hero-copy p {
          max-width: 680px;
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

        .product-btn {
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

        .product-btn svg {
          width: 16px;
          height: 16px;
          transition: transform .24s ease;
        }

        .product-btn:hover {
          transform: translateY(-4px);
        }

        .product-btn:hover svg {
          transform: translateX(4px);
        }

        .product-btn.primary {
          color: #fff;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 18px 34px rgba(233,154,17,.25);
        }

        .product-btn.secondary {
          color: var(--arvis-plum);
          background: rgba(255, 248, 238, .62);
          border: 2px solid rgba(69, 20, 44, .65);
          backdrop-filter: blur(12px);
        }

        .hero-panel {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-product-card {
          position: relative;
          width: min(100%, 520px);
          padding: 34px;
          border-radius: 36px;
          color: #fff8ee;
          background:
            radial-gradient(circle at 14% 0%, rgba(233,154,17,.22), transparent 34%),
            linear-gradient(135deg, #4a1730 0%, #351020 54%, #220915 100%);
          box-shadow: 0 34px 90px rgba(69,20,44,.20);
          overflow: hidden;
          animation: heroProductFloat 5.2s ease-in-out infinite;
        }

        .hero-product-card::before {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 28px;
          border: 1px solid rgba(233,154,17,.26);
          pointer-events: none;
        }

        .hero-product-card::after {
          content: "";
          position: absolute;
          right: -80px;
          bottom: -90px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.16), transparent 68%);
        }

        .hero-product-card > * {
          position: relative;
          z-index: 2;
        }

        @keyframes heroProductFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        .hero-card-top {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .hero-card-icon {
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

        .hero-card-top span {
          display: block;
          color: var(--arvis-gold);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }

        .hero-card-top h3 {
          margin: 6px 0 0;
          color: #fff8ee;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          line-height: 1.03;
          letter-spacing: -1px;
          font-weight: 950;
        }

        .hero-product-card p {
          margin: 20px 0 0;
          color: rgba(255,248,238,.80);
          font-size: 15px;
          line-height: 1.72;
          font-weight: 600;
        }

        .hero-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 24px;
        }

        .hero-mini {
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,248,238,.08);
          border: 1px solid rgba(233,154,17,.18);
          transition: .25s ease;
          text-align: center;
        }

        .hero-mini:hover {
          transform: translateY(-6px);
          background: rgba(255,248,238,.12);
        }

        .hero-mini svg {
          width: 22px;
          height: 22px;
          color: var(--arvis-gold);
          margin-bottom: 12px;
        }

        .hero-mini strong {
          display: block;
          color: #fff8ee;
          font-size: 20px;
          font-weight: 950;
        }

        .hero-mini span {
          display: block;
          margin-top: 5px;
          color: rgba(255,248,238,.68);
          font-size: 12px;
          line-height: 1.45;
          font-weight: 650;
        }

        .intro-section {
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

        .intro-section::before {
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

        .intro-section::after {
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
          color: rgba(45, 23, 35, .72);
          font-size: 15.5px;
          line-height: 1.7;
          font-weight: 650;
        }

        .section-head.light p {
          color: var(--arvis-muted);
        }

        .intro-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          align-items: center;
        }

        .intro-card {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 220px;
          aspect-ratio: 1 / 1;
          margin: 0 auto;
          padding: 22px;
          border-radius: 50%;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,.96), transparent 28%),
            radial-gradient(circle at 70% 82%, rgba(233,154,17,.18), transparent 36%),
            linear-gradient(135deg, #fff8ee 0%, #fff3df 54%, #f3dfc1 100%);
          border: 1px solid rgba(233,154,17,.34);
          box-shadow: 0 24px 58px rgba(69,20,44,.09);
          text-align: center;
          display: grid;
          place-items: center;
          text-decoration: none;
          transition: .28s ease;
        }

        .intro-card::before {
          content: "";
          position: absolute;
          inset: 12px;
          border-radius: 50%;
          border: 1px dashed rgba(233,154,17,.34);
          pointer-events: none;
        }

        .intro-card::after {
          content: "";
          position: absolute;
          right: -42px;
          bottom: -42px;
          width: 125px;
          height: 125px;
          border-radius: 50%;
          background: rgba(233,154,17,.11);
          pointer-events: none;
        }

        .intro-card:hover {
          transform: translateY(-8px) scale(1.025);
          border-color: rgba(233,154,17,.55);
          box-shadow: 0 32px 76px rgba(69,20,44,.14);
        }

        .intro-inner {
          position: relative;
          z-index: 2;
        }

        .intro-card svg {
          width: 34px;
          height: 34px;
          color: var(--arvis-gold);
          margin-bottom: 14px;
          filter: drop-shadow(0 8px 12px rgba(233,154,17,.18));
        }

        .intro-card strong {
          display: block;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          line-height: 1.08;
          font-weight: 950;
        }

        .intro-card small {
          display: block;
          margin-top: 7px;
          color: var(--arvis-gold-dark);
          font-size: 11px;
          line-height: 1.2;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .4px;
        }

        .products-list-section {
          padding: 92px 0;
          background:
            radial-gradient(circle at 8% 8%, rgba(233,154,17,.10), transparent 26%),
            radial-gradient(circle at 92% 35%, rgba(69,20,44,.08), transparent 28%),
            linear-gradient(180deg, #fff3df 0%, #fff8ee 100%);
          scroll-margin-top: 100px;
        }

        .product-list {
          display: grid;
          gap: 34px;
          margin-top: 44px;
        }

        .product-row {
          position: relative;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 26px;
          align-items: center;
          min-height: 460px;
          padding: 32px;
          border-radius: 42px;
          overflow: hidden;
          cursor: pointer;
          outline: 0;
          background:
            radial-gradient(circle at 18% 20%, rgba(233,154,17,.18), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(69,20,44,.07), transparent 30%),
            linear-gradient(135deg, rgba(255,255,255,.90), rgba(255,248,238,.72));
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 30px 80px rgba(69,20,44,.11);
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
        }

        .product-row::before {
          content: "";
          position: absolute;
          right: -120px;
          top: -120px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.16), transparent 70%);
          pointer-events: none;
        }

        .product-row::after {
          content: "";
          position: absolute;
          left: -120px;
          bottom: -130px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(69,20,44,.07), transparent 70%);
          pointer-events: none;
        }

        .product-row:hover {
          transform: translateY(-8px);
          border-color: rgba(233,154,17,.38);
          box-shadow: 0 38px 95px rgba(69,20,44,.15);
        }

        .product-row.reverse {
          grid-template-columns: 1.1fr .9fr;
        }

        .product-row.reverse .product-visual {
          order: 2;
        }

        .product-row.reverse .product-content {
          order: 1;
        }

        .product-visual {
          position: relative;
          z-index: 2;
          min-height: 390px;
          border-radius: 32px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 35%, rgba(233,154,17,.22), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.28), rgba(255,248,238,.12));
          border: 0;
          box-shadow: none;
          outline: 0;
          width: 100%;
          padding: 0;
        }

        .product-visual::before {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.18), transparent 70%);
          animation: productGlow 5.5s ease-in-out infinite;
        }

        .product-visual::after {
          content: "";
          position: absolute;
          width: 72%;
          height: 26%;
          bottom: 40px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(69,20,44,.20), transparent 68%);
          filter: blur(18px);
          opacity: .85;
        }

        @keyframes productGlow {
          0%, 100% {
            transform: scale(1);
            opacity: .75;
          }

          50% {
            transform: scale(1.12);
            opacity: 1;
          }
        }

        .product-bag {
          position: relative;
          z-index: 3;
          width: min(72%, 340px);
          max-height: 350px;
          object-fit: contain;
          filter: drop-shadow(0 34px 34px rgba(69,20,44,.24));
          animation: productFloat 4.4s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes productFloat {
          0%, 100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-14px) rotate(1deg);
          }
        }

        .product-content {
          position: relative;
          z-index: 2;
          padding: 20px 10px;
          border-radius: 0;
          background: transparent;
          border: 0;
          box-shadow: none;
          overflow: visible;
        }

        .product-tag {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 14px;
          border-radius: 999px;
          color: var(--arvis-plum);
          background: rgba(233,154,17,.12);
          border: 1px solid rgba(233,154,17,.25);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: .4px;
          text-transform: uppercase;
        }

        .product-tag svg {
          color: var(--arvis-gold);
        }

        .product-content h3 {
          position: relative;
          margin: 18px 0 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1.02;
          letter-spacing: -1.4px;
        }

        .product-content h3 span {
          color: var(--arvis-gold);
        }

        .product-content h4 {
          position: relative;
          margin: 16px 0 0;
          color: var(--arvis-plum);
          font-size: 18px;
          line-height: 1.35;
          font-weight: 950;
        }

        .product-content p {
          position: relative;
          margin: 14px 0 0;
          color: var(--arvis-muted);
          font-size: 15.5px;
          line-height: 1.72;
          font-weight: 650;
        }

        .product-points {
          position: relative;
          display: grid;
          gap: 10px;
          margin-top: 22px;
        }

        .product-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 13px 14px;
          border-radius: 18px;
          background: rgba(255,255,255,.62);
          border: 1px solid rgba(233,154,17,.16);
          color: var(--arvis-muted);
          font-size: 14px;
          line-height: 1.48;
          font-weight: 750;
        }

        .product-point svg {
          color: var(--arvis-gold);
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .tablet-highlight-section {
          padding: 0 0 88px;
          background:
            radial-gradient(circle at 8% 12%, rgba(233,154,17,.10), transparent 28%),
            linear-gradient(180deg, #fff8ee 0%, #fff3df 100%);
        }

        .tablet-highlight-card {
          position: relative;
          overflow: hidden;
          padding: 44px;
          border-radius: 38px;
          background:
            radial-gradient(circle at 10% 8%, rgba(233,154,17,.18), transparent 26%),
            radial-gradient(circle at 92% 16%, rgba(69,20,44,.06), transparent 28%),
            linear-gradient(135deg, rgba(255,255,255,.94), rgba(255,248,238,.74));
          border: 1px solid rgba(233,154,17,.26);
          box-shadow: 0 28px 76px rgba(69,20,44,.10);
        }

        .tablet-highlight-card::before {
          content: "";
          position: absolute;
          right: -130px;
          top: -130px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.15), transparent 70%);
          pointer-events: none;
        }

        .tablet-highlight-card::after {
          content: "";
          position: absolute;
          left: -110px;
          bottom: -120px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(69,20,44,.06), transparent 70%);
          pointer-events: none;
        }

        .tablet-content {
          position: relative;
          z-index: 2;
          max-width: 1050px;
          margin: 0 auto;
          text-align: center;
        }

        .tablet-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 10px 16px;
          border-radius: 999px;
          color: var(--arvis-plum);
          background: rgba(233,154,17,.12);
          border: 1px solid rgba(233,154,17,.26);
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .tablet-pill svg {
          color: var(--arvis-gold);
        }

        .tablet-content h2 {
          margin: 18px auto 0;
          max-width: 850px;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 1.04;
          letter-spacing: -1.35px;
          font-weight: 950;
        }

        .tablet-content h2 span {
          color: var(--arvis-gold);
        }

        .tablet-content p {
          margin: 16px auto 0;
          max-width: 920px;
          color: var(--arvis-muted);
          font-size: 15.5px;
          line-height: 1.72;
          font-weight: 650;
        }

        .tablet-benefits {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 26px;
        }

        .tablet-benefit {
          min-height: 116px;
          display: grid;
          place-items: center;
          text-align: center;
          gap: 8px;
          padding: 18px 14px;
          border-radius: 24px;
          background: rgba(255,255,255,.66);
          border: 1px solid rgba(233,154,17,.18);
          color: var(--arvis-muted);
          font-size: 13.5px;
          line-height: 1.45;
          font-weight: 850;
          transition: .24s ease;
        }

        .tablet-benefit:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,.84);
          box-shadow: 0 20px 48px rgba(69,20,44,.08);
        }

        .tablet-benefit svg {
          color: var(--arvis-gold);
          font-size: 20px;
        }

        .product-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          padding: 22px;
          display: grid;
          place-items: center;
          background: rgba(18, 6, 12, .82);
          backdrop-filter: blur(14px);
          animation: modalFade .22s ease both;
        }

        @keyframes modalFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .product-modal {
          position: relative;
          width: min(96vw, 1100px);
          height: min(90vh, 820px);
          border-radius: 34px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 38%, rgba(233,154,17,.18), transparent 34%),
            linear-gradient(135deg, rgba(255,248,238,.98), rgba(255,243,223,.92));
          border: 1px solid rgba(233,154,17,.28);
          box-shadow: 0 36px 120px rgba(0,0,0,.38);
          animation: modalZoom .28s cubic-bezier(.16, 1, .3, 1) both;
        }

        @keyframes modalZoom {
          from {
            opacity: 0;
            transform: scale(.92) translateY(18px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .product-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 5;
          width: 46px;
          height: 46px;
          border: 0;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          color: #fff8ee;
          background: linear-gradient(135deg, #4a1730, #250916);
          box-shadow: 0 14px 34px rgba(69,20,44,.18);
          transition: .22s ease;
        }

        .product-modal-close:hover {
          transform: rotate(90deg) scale(1.05);
        }

        .product-modal-title {
          position: absolute;
          left: 22px;
          top: 20px;
          z-index: 5;
          padding: 11px 16px;
          border-radius: 999px;
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
          font-size: 13px;
          font-weight: 950;
          box-shadow: 0 14px 34px rgba(233,154,17,.22);
        }

        .product-modal-img {
          width: min(76vw, 560px);
          max-height: 76vh;
          object-fit: contain;
          filter: drop-shadow(0 34px 40px rgba(69,20,44,.30));
          animation: modalProductFloat 4.2s ease-in-out infinite;
        }

        @keyframes modalProductFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        .cta-section {
          padding: 0 0 86px;
          background: var(--arvis-bg);
        }

        .products-cta {
          position: relative;
          overflow: hidden;
          padding: 42px;
          border-radius: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: #fff8ee;
          background:
            radial-gradient(circle at 12% 0%, rgba(233,154,17,.20), transparent 34%),
            linear-gradient(135deg, #4a1730, #250916);
          box-shadow: 0 30px 80px rgba(69,20,44,.16);
        }

        .products-cta h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 4vw, 54px);
          line-height: 1.05;
        }

        .products-cta p {
          max-width: 760px;
          margin: 14px 0 0;
          color: rgba(255,248,238,.78);
          font-size: 16px;
          line-height: 1.72;
          font-weight: 600;
        }

        @media (max-width: 1180px) {
          .intro-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
          }

          .intro-card {
            max-width: 190px;
          }

          .intro-card strong {
            font-size: 18px;
          }

          .product-row,
          .product-row.reverse {
            grid-template-columns: 1fr 1fr;
          }

          .tablet-benefits {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1050px) {
          .products-container {
            width: min(1240px, calc(100% - 44px));
          }

          .products-hero-grid {
            grid-template-columns: 1fr;
          }

          .products-hero {
            min-height: auto;
          }

          .hero-panel {
            min-height: auto;
          }

          .products-cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 760px) {
          .products-container {
            width: min(100% - 20px, 1240px);
          }

          [data-reveal="up"] {
            transform: translateY(24px);
          }

          [data-reveal="left"] {
            transform: translateX(-44px);
          }

          [data-reveal="right"] {
            transform: translateX(44px);
          }

          .products-hero {
            min-height: auto;
          }

          .products-hero::after {
            bottom: -38px;
            height: 72px;
          }

          .products-hero-grid {
            display: block;
            padding: 32px 0 78px;
          }

          .hero-panel {
            display: none;
          }

          .products-kicker,
          .section-kicker {
            font-size: 9.5px;
            letter-spacing: 2.1px;
            gap: 8px;
          }

          .products-kicker::before,
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

          .product-btn {
            width: 100%;
            min-height: 52px;
            font-size: 13.5px;
          }

          .intro-section {
            padding: 66px 0 58px;
          }

          .intro-section::before {
            left: -18%;
            right: -18%;
            top: -36px;
            height: 66px;
          }

          .intro-section::after {
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

          .intro-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .intro-card {
            max-width: 162px;
            padding: 16px;
          }

          .intro-card svg {
            width: 25px;
            height: 25px;
            margin-bottom: 9px;
          }

          .intro-card strong {
            font-size: 14.2px;
          }

          .intro-card small {
            font-size: 8.8px;
          }

          .products-list-section {
            padding: 62px 0;
          }

          .product-list {
            gap: 18px;
            margin-top: 28px;
          }

          .product-row,
          .product-row.reverse {
            min-height: auto;
            display: grid;
            grid-template-columns: 42% 58%;
            gap: 0;
            align-items: stretch;
            overflow: hidden;
            padding: 0;
            border-radius: 26px;
            background:
              radial-gradient(circle at 14% 0%, rgba(233,154,17,.15), transparent 34%),
              linear-gradient(135deg, rgba(255,255,255,.92), rgba(255,248,238,.72));
            border: 1px solid rgba(233,154,17,.24);
            box-shadow: 0 22px 54px rgba(69,20,44,.10);
          }

          .product-row:hover {
            transform: translateY(-4px);
          }

          .product-row.reverse {
            grid-template-columns: 58% 42%;
          }

          .product-row.reverse .product-visual {
            order: 2;
          }

          .product-row.reverse .product-content {
            order: 1;
          }

          .product-visual {
            min-height: 238px;
            height: 100%;
            border-radius: 0;
            background:
              radial-gradient(circle at 50% 42%, rgba(233,154,17,.26), transparent 42%),
              linear-gradient(135deg, rgba(255,255,255,.50), rgba(255,243,223,.26));
            border: 0;
            box-shadow: none;
            cursor: pointer;
          }

          .product-visual::before {
            width: 190px;
            height: 190px;
          }

          .product-visual::after {
            width: 84%;
            height: 18%;
            bottom: 28px;
            filter: blur(12px);
          }

          .product-bag {
            width: min(92%, 170px);
            max-height: 188px;
            filter: drop-shadow(0 22px 22px rgba(69,20,44,.22));
            animation: productFloatMobile 4.2s ease-in-out infinite;
          }

          @keyframes productFloatMobile {
            0%, 100% {
              transform: translateY(0) rotate(-.6deg);
            }

            50% {
              transform: translateY(-8px) rotate(.8deg);
            }
          }

          .product-content {
            padding: 18px 14px;
            border-radius: 0;
            background: transparent;
            border: 0;
            box-shadow: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 238px;
          }

          .product-tag {
            width: fit-content;
            max-width: 100%;
            padding: 6px 8px;
            gap: 5px;
            font-size: 7.8px;
            line-height: 1.1;
            letter-spacing: .2px;
          }

          .product-tag svg {
            width: 10px;
            height: 10px;
            flex: 0 0 auto;
          }

          .product-content h3 {
            margin-top: 10px;
            font-size: 22px;
            line-height: 1.02;
            letter-spacing: -.8px;
          }

          .product-content h4 {
            margin-top: 8px;
            font-size: 11.7px;
            line-height: 1.32;
          }

          .product-content p {
            margin-top: 7px;
            font-size: 10.7px;
            line-height: 1.48;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .product-points {
            gap: 6px;
            margin-top: 10px;
          }

          .product-point {
            padding: 8px 9px;
            border-radius: 13px;
            font-size: 9.6px;
            line-height: 1.35;
            gap: 6px;
          }

          .product-point:nth-child(n+2) {
            display: none;
          }

          .product-point svg {
            width: 11px;
            height: 11px;
            margin-top: 2px;
          }

          .tablet-highlight-section {
            padding: 0 0 62px;
          }

          .tablet-highlight-card {
            padding: 25px;
            border-radius: 28px;
          }

          .tablet-content {
            text-align: left;
          }

          .tablet-content h2 {
            font-size: 32px;
          }

          .tablet-content p {
            font-size: 13.5px;
            line-height: 1.62;
          }

          .tablet-benefits {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .tablet-benefit {
            min-height: auto;
            display: flex;
            place-items: initial;
            text-align: left;
            align-items: center;
            justify-content: flex-start;
            font-size: 12.5px;
            padding: 13px 14px;
            border-radius: 18px;
          }

          .product-modal-backdrop {
            padding: 12px;
          }

          .product-modal {
            width: 100%;
            height: 88vh;
            border-radius: 26px;
          }

          .product-modal-title {
            left: 14px;
            top: 14px;
            max-width: calc(100% - 76px);
            font-size: 11px;
            padding: 9px 12px;
          }

          .product-modal-close {
            top: 12px;
            right: 12px;
            width: 42px;
            height: 42px;
          }

          .product-modal-img {
            width: min(86vw, 420px);
            max-height: 72vh;
          }

          .cta-section {
            padding: 0 0 62px;
          }

          .products-cta {
            padding: 26px;
            border-radius: 28px;
          }

          .products-cta h2 {
            font-size: 32px;
          }

          .products-cta p {
            font-size: 13.5px;
            line-height: 1.62;
          }
        }

        @media (max-width: 520px) {
          .products-container {
            width: min(100% - 18px, 1240px);
          }

          .hero-copy h1 {
            font-size: 40px;
          }

          .intro-card {
            max-width: 148px;
            padding: 13px;
          }

          .intro-card strong {
            font-size: 12.7px;
          }

          .intro-card small {
            font-size: 7.8px;
          }

          .products-cta {
            padding: 22px 18px;
          }

          .product-row,
          .product-row.reverse {
            border-radius: 23px;
          }

          .product-visual,
          .product-content {
            min-height: 222px;
          }

          .product-bag {
            width: min(94%, 150px);
            max-height: 168px;
          }

          .product-content {
            padding: 15px 12px;
          }

          .product-content h3 {
            font-size: 19.5px;
          }

          .product-content h4 {
            font-size: 10.8px;
          }

          .product-content p {
            font-size: 9.8px;
            line-height: 1.42;
            -webkit-line-clamp: 3;
          }

          .product-point {
            font-size: 8.8px;
            padding: 7px 8px;
          }
        }

        @media (max-width: 390px) {
          .intro-grid {
            gap: 10px;
          }

          .intro-card {
            max-width: 136px;
            padding: 12px;
          }

          .intro-card strong {
            font-size: 11.4px;
          }

          .intro-card small {
            font-size: 7px;
          }

          .product-row,
          .product-row.reverse {
            grid-template-columns: 40% 60%;
          }

          .product-row.reverse {
            grid-template-columns: 60% 40%;
          }

          .product-visual,
          .product-content {
            min-height: 210px;
          }

          .product-bag {
            width: min(94%, 136px);
            max-height: 152px;
          }

          .product-content h3 {
            font-size: 18px;
          }

          .product-content h4 {
            font-size: 10.2px;
          }

          .product-content p {
            font-size: 9.2px;
            -webkit-line-clamp: 3;
          }

          .product-tag {
            font-size: 7px;
            padding: 5px 7px;
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

      <main className="products-page">
        <section className="products-hero">
          <div className="products-container">
            <div className="products-hero-grid">
              <div className="hero-copy" data-reveal="left">
                <div className="products-kicker">
                  <FaLeaf />
                  Arvis Products
                </div>

                <h1>
                  Crop nutrition for
                  <span>better field results.</span>
                </h1>

                <p>
                  Arvis Fertilizers & Chemicals Pvt. Ltd. offers premium agri
                  input solutions designed to support crop growth, nutrition,
                  quality and farmer-level performance.
                </p>

                <p>
                  Our product portfolio focuses on water soluble fertilizers,
                  liquid fertilizers, agro chemicals, complex fertilizers and
                  advanced tablet based fertilizer solutions.
                </p>

                <div className="hero-actions">
                  <a href="#products" className="product-btn primary">
                    View Products <FaArrowRight />
                  </a>

                  <NavLink to="/contact" className="product-btn secondary">
                    Get Product Enquiry <FaPhoneAlt />
                  </NavLink>
                </div>
              </div>

              <div className="hero-panel" data-reveal="right">
                <div className="hero-product-card">
                  <div className="hero-card-top">
                    <div className="hero-card-icon">
                      <FaSeedling />
                    </div>

                    <div>
                      <span>Premium Portfolio</span>
                      <h3>Specialty Fertilizer Solutions</h3>
                    </div>
                  </div>

                  <p>
                    Built for crop nutrition, farmer trust, dealer growth and
                    modern agriculture requirements.
                  </p>

                  <div className="hero-mini-grid">
                    <div className="hero-mini">
                      <FaFlask />
                      <strong>R&D</strong>
                      <span>Product focus</span>
                    </div>

                    <div className="hero-mini">
                      <FaShieldAlt />
                      <strong>Quality</strong>
                      <span>Reliable inputs</span>
                    </div>

                    <div className="hero-mini">
                      <FaTractor />
                      <strong>Field</strong>
                      <span>Crop support</span>
                    </div>

                    <div className="hero-mini">
                      <FaAward />
                      <strong>Premium</strong>
                      <span>Brand promise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <div className="products-container">
            <div className="section-head light" data-reveal="up">
              <div className="section-kicker">
                <FaShieldAlt />
                Product Categories
              </div>

              <h2>
                Premium agri-inputs with <span>field-focused value.</span>
              </h2>

              <p>
                Our product categories are designed for dealers, farmers and
                modern crop nutrition programs where quality, performance and
                trust matter.
              </p>
            </div>

            <div className="intro-grid">
              {productCategories.map((category, index) => (
                <a
                  className="intro-card"
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  key={category.title}
                  href={category.link}
                  aria-label={`View ${category.title} products`}
                >
                  <div className="intro-inner">
                    {category.icon}
                    <strong>{category.title}</strong>
                    {category.sub && <small>{category.sub}</small>}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="products-list-section" id="products">
          <div className="products-container">
            <div className="section-head" data-reveal="up">
              <div className="section-kicker">
                <FaSeedling />
                Product Range
              </div>

              <h2>
                Explore our <span>premium product portfolio.</span>
              </h2>

              <p>
                Product cards are arranged with alternating image and content
                flow for a clean product browsing experience.
              </p>
            </div>

            <div className="product-list">
              {products.map((product, index) => {
                const isReverse = index % 2 !== 0;
                const nameParts = getNameParts(product.name);

                return (
                  <article
                    className={`product-row ${isReverse ? "reverse" : ""}`}
                    key={product.name}
                    role="button"
                    tabIndex={0}
                    data-reveal={isReverse ? "right" : "left"}
                    onClick={() => openProduct(product)}
                    onKeyDown={(event) => handleCardKeyDown(event, product)}
                    aria-label={`Open ${product.name} full image`}
                  >
                    <div className="product-visual">
                      <img
                        className="product-bag"
                        src={product.image}
                        alt={product.name}
                        onError={handleImageError}
                      />
                    </div>

                    <div className="product-content">
                      <span className="product-tag">
                        <FaCheckCircle />
                        {product.tag}
                      </span>

                      <h3>
                        {nameParts.main}{" "}
                        {nameParts.rest && <span>{nameParts.rest}</span>}
                      </h3>

                      <h4>{product.title}</h4>
                      <p>{product.text}</p>

                      <div className="product-points">
                        {product.points.map((point) => (
                          <div className="product-point" key={point}>
                            <FaCheckCircle />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="tablet-highlight-section">
          <div className="products-container">
            <div className="tablet-highlight-card" data-reveal="up">
              <div className="tablet-content">
                <span className="tablet-pill">
                  <FaSeedling />
                  Tablet Based Fertilizer
                </span>

                <h2>
                  Advanced NPK <span>Fertilizer Tablets.</span>
                </h2>

                <p>
                  We are pleased to introduce our Advanced NPK Fertilizer
                  Tablets, specially designed to provide balanced nutrition for
                  healthy crop growth and higher yields.
                </p>

                <p>
                  Our NPK Tablets deliver the essential nutrients Nitrogen (N),
                  Phosphorus (P), and Potassium (K) in a convenient tablet form
                  that slowly dissolves in the soil and ensures efficient
                  nutrient absorption by plants.
                </p>

                <p>
                  This innovative formulation helps improve root development,
                  plant vigor, flowering and fruit quality while reducing
                  fertilizer wastage.
                </p>

                <div className="tablet-benefits">
                  <div className="tablet-benefit">
                    <FaCheckCircle />
                    <span>Balanced NPK nutrition for crops</span>
                  </div>

                  <div className="tablet-benefit">
                    <FaCheckCircle />
                    <span>Easy and precise application</span>
                  </div>

                  <div className="tablet-benefit">
                    <FaCheckCircle />
                    <span>Slow and efficient nutrient release</span>
                  </div>

                  <div className="tablet-benefit">
                    <FaCheckCircle />
                    <span>Improved plant growth and productivity</span>
                  </div>
                </div>

                <p>
                  Suitable for fruit crops, vegetables, plantations and nursery
                  plants.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="products-container">
            <div className="products-cta" data-reveal="up">
              <div>
                <h2>Interested in Arvis products?</h2>

                <p>
                  Connect with us for product details, dealer enquiries,
                  distribution opportunities and farmer-focused crop nutrition
                  support.
                </p>
              </div>

              <NavLink to="/contact" className="product-btn primary">
                Contact Us <FaPhoneAlt />
              </NavLink>
            </div>
          </div>
        </section>

        {selectedProduct && (
          <div
            className="product-modal-backdrop"
            onClick={() => setSelectedProduct(null)}
            role="presentation"
          >
            <div
              className="product-modal"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProduct.name} full screen image`}
            >
              <span className="product-modal-title">
                {selectedProduct.name}
              </span>

              <button
                type="button"
                className="product-modal-close"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close image"
              >
                <FaTimes />
              </button>

              <img
                className="product-modal-img"
                src={selectedProduct.image}
                alt={selectedProduct.name}
                onError={handleImageError}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Products;