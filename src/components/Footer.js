import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaLeaf,
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaChartLine,
  FaBriefcase,
  FaSeedling,
  FaFlask,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const node = footerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const mainLinks = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaInfoCircle /> },
    { path: "/products", label: "Products", icon: <FaBoxOpen /> },
    {
      path: "/investor-relations",
      label: "Investor Relations",
      icon: <FaChartLine />,
    },
    { path: "/careers", label: "Careers", icon: <FaBriefcase /> },
    { path: "/contact", label: "Contact", icon: <FaPhoneAlt /> },
  ];

  const socialLinks = [
    { label: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/share/1DoVPsobRw/" },
    { label: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/arvis_fertilizers?igsh=MWF4Nzd0NTU0bmo0cA==" },
    { label: "YouTube", icon: <FaYoutube />, url: "https://youtube.com/@arvisfertilizers?si=aFMj0P4MnVsXTNrE" },
    { label: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/arvis-fertilizers/" },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/917893423282",
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --arvis-plum: #45142c;
          --arvis-plum-dark: #2b0f1e;
          --arvis-plum-deep: #1f0712;
          --arvis-violet: #4a1730;
          --arvis-gold: #e99a11;
          --arvis-gold-dark: #c77806;
          --arvis-gold-soft: #f7c56a;
          --arvis-cream: #fff3df;
          --arvis-cream-light: #fff8ee;
          --arvis-bisque: #f3dfc1;
          --arvis-text: #2c1722;
          --arvis-muted: rgba(44, 23, 34, .68);
          --arvis-soft-text: rgba(44, 23, 34, .82);
          --arvis-light-card: rgba(255, 255, 255, .56);
        }

        * {
          box-sizing: border-box;
        }

        .arvis-footer {
          position: relative;
          overflow: hidden;
          margin-top: 0;
          color: var(--arvis-text);
          background:
            radial-gradient(circle at 10% 8%, rgba(233,154,17,.20), transparent 28%),
            radial-gradient(circle at 92% 10%, rgba(69,20,44,.08), transparent 30%),
            radial-gradient(circle at 50% 100%, rgba(233,154,17,.14), transparent 32%),
            linear-gradient(135deg, #fff8ee 0%, #fff3df 52%, #f3dfc1 100%);
          border-top: 1px solid rgba(233,154,17,.30);
        }

        .arvis-footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(69,20,44,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(69,20,44,.035) 1px, transparent 1px);
          background-size: 42px 42px;
          pointer-events: none;
          opacity: .78;
        }

        .arvis-footer::after {
          content: "";
          position: absolute;
          left: -8%;
          right: -8%;
          top: -72px;
          height: 116px;
          background: #fff3df;
          border-radius: 0 0 50% 50%;
          transform: rotate(-2deg);
          pointer-events: none;
          z-index: 1;
        }

        .footer-gold-line {
          position: absolute;
          left: -8%;
          right: -8%;
          top: 19px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(233,154,17,.22) 18%,
            rgba(233,154,17,.95) 52%,
            rgba(233,154,17,.22) 84%,
            transparent 100%
          );
          transform: rotate(-2deg);
          z-index: 2;
          pointer-events: none;
        }

        .footer-glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233,154,17,.22), transparent 68%);
          filter: blur(4px);
          animation: footerGlowMove 8s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        .footer-glow.one {
          left: -120px;
          top: 50px;
        }

        .footer-glow.two {
          right: -130px;
          bottom: -110px;
          background: radial-gradient(circle, rgba(69,20,44,.10), transparent 68%);
          animation-delay: 1.4s;
        }

        @keyframes footerGlowMove {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: .7;
          }

          50% {
            transform: translateY(-24px) scale(1.08);
            opacity: 1;
          }
        }

        .leaf-particle {
          position: absolute;
          pointer-events: none;
          z-index: 1;
          color: rgba(69,20,44,.12);
          animation: floatLeaf 12s ease-in-out infinite;
        }

        .leaf-particle svg {
          width: 100%;
          height: 100%;
        }

        .leaf-1 { width: 48px; height: 48px; bottom: 8%; left: 5%; animation-delay: 0s; }
        .leaf-2 { width: 36px; height: 36px; top: 15%; right: 8%; animation-delay: 1s; }
        .leaf-3 { width: 58px; height: 58px; bottom: 18%; right: 12%; animation-delay: 2s; }
        .leaf-4 { width: 32px; height: 32px; top: 34%; left: 9%; animation-delay: .5s; }
        .leaf-5 { width: 42px; height: 42px; bottom: 28%; left: 22%; animation-delay: 3s; }
        .leaf-6 { width: 28px; height: 28px; top: 54%; right: 16%; animation-delay: 2.5s; }

        @keyframes floatLeaf {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: .11;
          }

          50% {
            transform: translate(28px, -44px) rotate(22deg) scale(1.12);
            opacity: .24;
          }
        }

        .from-left {
          opacity: 0;
          transform: translateX(-110px);
        }

        .from-right {
          opacity: 0;
          transform: translateX(110px);
        }

        .footer-visible .from-left {
          animation: comeFromLeft 1.2s cubic-bezier(.16, 1, .3, 1) forwards;
        }

        .footer-visible .from-right {
          animation: comeFromRight 1.2s cubic-bezier(.16, 1, .3, 1) forwards;
        }

        .delay-1 { animation-delay: .15s !important; }
        .delay-2 { animation-delay: .30s !important; }
        .delay-3 { animation-delay: .45s !important; }
        .delay-4 { animation-delay: .60s !important; }

        @keyframes comeFromLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes comeFromRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .footer-inner {
          position: relative;
          z-index: 3;
          max-width: 1280px;
          margin: 0 auto;
          padding: 88px 32px 42px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.25fr .9fr 1fr;
          gap: 52px;
          align-items: start;
        }

        .footer-brand-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 26px;
          width: 100%;
        }

        .footer-logo-stage {
          position: relative;
          width: 96px;
          height: 96px;
          flex: 0 0 96px;
          display: grid;
          place-items: center;
        }

        .footer-logo-orbit {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background:
            conic-gradient(
              from 0deg,
              rgba(233,154,17,0),
              rgba(233,154,17,.95),
              rgba(247,197,106,.98),
              rgba(233,154,17,0)
            );
          opacity: 0;
          filter: drop-shadow(0 14px 24px rgba(233,154,17,.24));
        }

        .footer-visible .footer-logo-orbit {
          animation: logoOrbitSpin 1.8s linear infinite, logoOrbitShow .7s ease forwards;
        }

        .footer-logo-orbit::before {
          content: "";
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          background: #fff8ee;
        }

        @keyframes logoOrbitSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes logoOrbitShow {
          to {
            opacity: 1;
          }
        }

        .footer-logo-box {
          position: relative;
          z-index: 2;
          width: 78px;
          height: 78px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background:
            radial-gradient(circle at 30% 18%, rgba(255,255,255,1), transparent 38%),
            linear-gradient(135deg, #ffffff 0%, #fff8ee 48%, #ffe2b2 100%);
          border: 2px solid rgba(233,154,17,.48);
          box-shadow:
            0 20px 38px rgba(69,20,44,.13),
            0 0 0 8px rgba(255,255,255,.42),
            inset 0 1px 0 rgba(255,255,255,1);
          transform: scale(.45) rotate(-18deg);
          opacity: 0;
          overflow: hidden;
        }

        .footer-visible .footer-logo-box {
          animation: logoPopIn .95s cubic-bezier(.16, 1, .3, 1) .18s forwards,
                     logoSoftFloat 4.6s ease-in-out 1.25s infinite;
        }

        @keyframes logoPopIn {
          0% {
            opacity: 0;
            transform: scale(.45) rotate(-18deg);
          }

          72% {
            opacity: 1;
            transform: scale(1.08) rotate(3deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes logoSoftFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-7px) scale(1.02);
          }
        }

        .footer-logo-img {
          width: 62px;
          height: 62px;
          object-fit: contain;
          display: block;
          filter:
            saturate(1.24)
            contrast(1.12)
            brightness(1.08)
            drop-shadow(0 7px 10px rgba(45,23,35,.20));
        }

        .logo-spark {
          position: absolute;
          z-index: 4;
          width: 26px;
          height: 26px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 12px 24px rgba(233,154,17,.24);
          opacity: 0;
        }

        .spark-one {
          right: -1px;
          top: 8px;
        }

        .spark-two {
          left: -2px;
          bottom: 12px;
        }

        .footer-visible .spark-one {
          animation: sparkFloatOne 2.6s ease-in-out .75s infinite;
          opacity: 1;
        }

        .footer-visible .spark-two {
          animation: sparkFloatTwo 2.8s ease-in-out 1s infinite;
          opacity: 1;
        }

        @keyframes sparkFloatOne {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-10px) rotate(14deg);
          }
        }

        @keyframes sparkFloatTwo {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }

          50% {
            transform: translate(-6px, 8px) rotate(-12deg);
          }
        }

        .footer-brand-text {
          min-width: 0;
          flex: 1;
        }

        .footer-brand-text h3 {
          margin: 0;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(22px, 2.15vw, 30px);
          line-height: 1.03;
          font-weight: 950;
          letter-spacing: -.9px;
          white-space: nowrap;
        }

        .footer-brand-copy {
          max-width: 470px;
          margin: 0;
          color: var(--arvis-muted);
          font-size: 14.5px;
          line-height: 1.72;
          font-weight: 650;
        }

        .footer-brand-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 38px;
          padding: 0 13px;
          border-radius: 999px;
          color: var(--arvis-text);
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(233,154,17,.26);
          box-shadow: 0 12px 28px rgba(69,20,44,.06);
          font-size: 12px;
          font-weight: 850;
        }

        .footer-badge svg {
          color: var(--arvis-gold);
        }

        .footer-title {
          position: relative;
          margin: 0 0 22px;
          padding-bottom: 13px;
          color: var(--arvis-text);
          font-size: 14px;
          font-weight: 950;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .footer-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 46px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--arvis-gold), var(--arvis-gold-soft));
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .footer-links a {
          position: relative;
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--arvis-soft-text);
          text-decoration: none;
          font-size: 14.5px;
          font-weight: 750;
          padding: 5px 0;
          transition: .22s ease;
        }

        .footer-links a svg {
          width: 15px;
          height: 15px;
          color: var(--arvis-gold);
          transition: .22s ease;
        }

        .footer-links a::before {
          content: "";
          position: absolute;
          left: 25px;
          bottom: 2px;
          width: 0;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--arvis-gold), var(--arvis-gold-soft));
          transition: width .28s ease;
        }

        .footer-links a:hover,
        .footer-links a.active {
          color: var(--arvis-gold-dark);
          transform: translateX(8px);
        }

        .footer-links a:hover svg,
        .footer-links a.active svg {
          color: var(--arvis-gold-dark);
          transform: scale(1.1);
        }

        .footer-links a:hover::before,
        .footer-links a.active::before {
          width: calc(100% - 25px);
        }

        .footer-contact {
          display: grid;
          gap: 14px;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px 16px;
          border-radius: 20px;
          color: var(--arvis-soft-text);
          text-decoration: none;
          background:
            linear-gradient(135deg, rgba(255,255,255,.62), rgba(255,248,238,.38));
          border: 1px solid rgba(233,154,17,.24);
          box-shadow: 0 14px 34px rgba(69,20,44,.07);
          transition: .24s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          color: var(--arvis-gold-dark);
          background:
            linear-gradient(135deg, rgba(255,255,255,.82), rgba(255,248,238,.58));
          box-shadow: 0 18px 38px rgba(69,20,44,.10);
        }

        .contact-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          color: #fff8ee;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 14px 28px rgba(233,154,17,.22);
        }

        .contact-card small {
          display: block;
          color: rgba(44,23,34,.55);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .contact-card strong {
          display: block;
          color: inherit;
          font-size: 14px;
          font-weight: 850;
          line-height: 1.35;
        }

        .footer-enquiry {
          margin-top: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 14px;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 950;
          background: linear-gradient(135deg, #e99a11, #c77806);
          box-shadow: 0 18px 34px rgba(233,154,17,.24);
          transition: .24s ease;
        }

        .footer-enquiry:hover {
          transform: translateY(-5px);
        }

        .footer-enquiry svg {
          transition: .24s ease;
        }

        .footer-enquiry:hover svg {
          transform: translateX(4px);
        }

        .social-row {
          display: flex;
          align-items: center;
          gap: 13px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .social-row a {
          position: relative;
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--arvis-plum);
          background:
            linear-gradient(135deg, rgba(255,255,255,.72), rgba(255,248,238,.42));
          border: 1px solid rgba(233,154,17,.42);
          text-decoration: none;
          box-shadow: 0 12px 28px rgba(69,20,44,.10);
          overflow: hidden;
          transition: .25s ease;
        }

        .social-row a::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--arvis-gold), #c87807);
          opacity: 0;
          transition: .25s ease;
        }

        .social-row a svg {
          position: relative;
          z-index: 2;
          width: 18px;
          height: 18px;
        }

        .social-row a:hover {
          color: #fff;
          transform: translateY(-5px) rotate(-6deg);
          box-shadow: 0 16px 34px rgba(69,20,44,.16);
        }

        .social-row a:hover::before {
          opacity: 1;
        }

        .footer-bottom {
          position: relative;
          z-index: 3;
          max-width: 1280px;
          margin: 0 auto;
          padding: 24px 32px 28px;
          border-top: 1px solid rgba(233,154,17,.24);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          color: rgba(44,23,34,.72);
          font-size: 13px;
          font-weight: 650;
          background: rgba(255,255,255,.28);
        }

        .developer-credit a {
          color: var(--arvis-gold-dark);
          text-decoration: none;
          font-weight: 950;
          transition: .2s ease;
        }

        .developer-credit a:hover {
          color: var(--arvis-plum);
          text-decoration: underline;
        }

        @media (max-width: 950px) {
          .footer-inner {
            padding: 76px 28px 34px;
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-links {
            display: grid;
            grid-template-columns: repeat(2, minmax(140px, 1fr));
            gap: 8px;
          }

          .from-left {
            transform: translateX(-70px);
          }

          .from-right {
            transform: translateX(70px);
          }

          .leaf-particle {
            display: none;
          }
        }

        @media (max-width: 650px) {
          .arvis-footer::after {
            left: -18%;
            right: -18%;
            top: -38px;
            height: 72px;
          }

          .footer-gold-line {
            top: 22px;
            height: 1.5px;
          }

          .footer-inner {
            padding: 64px 20px 28px;
          }

          .footer-brand-row {
            gap: 12px;
            align-items: center;
          }

          .footer-logo-stage {
            width: 76px;
            height: 76px;
            flex-basis: 76px;
          }

          .footer-logo-box {
            width: 62px;
            height: 62px;
          }

          .footer-logo-img {
            width: 50px;
            height: 50px;
          }

          .logo-spark {
            width: 22px;
            height: 22px;
            font-size: 11px;
          }

          .footer-brand-text h3 {
            font-size: clamp(15px, 4.2vw, 20px);
            letter-spacing: -.9px;
            white-space: nowrap;
          }

          .footer-title {
            font-size: 13px;
          }

          .footer-brand-copy,
          .footer-links a {
            font-size: 13.5px;
          }

          .footer-brand-badges {
            gap: 8px;
          }

          .footer-badge {
            min-height: 36px;
            font-size: 11.5px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .social-row {
            margin-top: 24px;
          }

          .footer-bottom {
            padding: 22px 20px 20px;
            flex-direction: column;
            text-align: center;
            gap: 14px;
          }
        }

        @media (max-width: 420px) {
          .footer-brand-row {
            align-items: center;
            gap: 9px;
          }

          .footer-logo-stage {
            width: 64px;
            height: 64px;
            flex-basis: 64px;
          }

          .footer-logo-box {
            width: 52px;
            height: 52px;
          }

          .footer-logo-img {
            width: 42px;
            height: 42px;
          }

          .footer-brand-text h3 {
            font-size: 13.2px;
            letter-spacing: -.35px;
            white-space: nowrap;
          }

          .from-left {
            transform: translateX(-54px);
          }

          .from-right {
            transform: translateX(54px);
          }

          .social-row {
            justify-content: center;
          }

          .footer-enquiry {
            width: 100%;
          }
        }

        @media (max-width: 360px) {
          .footer-brand-text h3 {
            font-size: 12px;
          }

          .footer-logo-stage {
            width: 58px;
            height: 58px;
            flex-basis: 58px;
          }

          .footer-logo-box {
            width: 48px;
            height: 48px;
          }

          .footer-logo-img {
            width: 39px;
            height: 39px;
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

      <footer
        ref={footerRef}
        className={`arvis-footer ${footerVisible ? "footer-visible" : ""}`}
      >
        <div className="footer-gold-line" />

        <div className="footer-glow one" />
        <div className="footer-glow two" />

        <FaLeaf className="leaf-particle leaf-1" />
        <FaLeaf className="leaf-particle leaf-2" />
        <FaLeaf className="leaf-particle leaf-3" />
        <FaLeaf className="leaf-particle leaf-4" />
        <FaLeaf className="leaf-particle leaf-5" />
        <FaLeaf className="leaf-particle leaf-6" />

        <div className="footer-inner">
          <div className="footer-top">
            <div className="from-left delay-1">
              <div className="footer-brand-row">
                <div className="footer-logo-stage">
                  <span className="footer-logo-orbit"></span>

                  <div className="footer-logo-box">
                    <img
                      className="footer-logo-img"
                      src="/logo.png"
                      alt="Arvis Fertilizers"
                    />
                  </div>

                  <span className="logo-spark spark-one">
                    <FaLeaf />
                  </span>

                  <span className="logo-spark spark-two">
                    <FaSeedling />
                  </span>
                </div>

                <div className="footer-brand-text">
                  <h3>Arvis Fertilizers & Chemicals Pvt. Ltd.</h3>
                </div>
              </div>

              <p className="footer-brand-copy">
                Premium fertilizer and crop nutrition solutions built with a
                farmer-first vision, dealer support and quality-focused agri
                innovation.
              </p>

              <div className="footer-brand-badges">
                <span className="footer-badge">
                  <FaLeaf /> Crop Nutrition
                </span>

                <span className="footer-badge">
                  <FaFlask /> Quality Inputs
                </span>

                <span className="footer-badge">
                  <FaHandshake /> Dealer Growth
                </span>
              </div>

              <div className="social-row">
                {socialLinks.map((item) => (
                  <a
                    href={item.url}
                    aria-label={item.label}
                    target="_blank"
                    rel="noreferrer"
                    key={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="from-left delay-2">
              <h4 className="footer-title">Quick Links</h4>

              <div className="footer-links">
                {mainLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="from-right delay-2">
              <h4 className="footer-title">Connect With Us</h4>

              <div className="footer-contact">
                <a className="contact-card" href="tel:+917893423282">
                  <span className="contact-icon">
                    <FaPhoneAlt />
                  </span>

                  <span>
                    <small>Call Us</small>
                    <strong>+91 7893423282</strong>
                  </span>
                </a>

                <a
                  className="contact-card"
                  href="mailto:arvisfertilizers@gmail.com"
                >
                  <span className="contact-icon">
                    <FaEnvelope />
                  </span>

                  <span>
                    <small>Email Us</small>
                    <strong>arvisfertilizers@gmail.com</strong>
                  </span>
                </a>

                <a
                  className="footer-enquiry"
                  href="https://wa.me/917893423282"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Enquiry <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="from-left delay-4">
            © 2022 - {currentYear} Arvis Fertilizers & Chemicals Pvt. Ltd. All
            Rights Reserved.
          </div>

          <div className="developer-credit from-right delay-4">
            Developed by{" "}
            <a
              href="https://smyvisiontechnologies.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              SMYVISION TECHNOLOGIES
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;