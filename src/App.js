import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import InvestorRelations from "./components/InvestorRelations";
import Careers from "./components/Careers";
import Contact from "./components/Contact";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

function FloatingWhatsApp() {
  const { pathname } = useLocation();

  const whatsappNumber = "917893423282";

  const pageMessages = {
    "/":
      "Hello Arvis Fertilizers & Chemicals Pvt. Ltd., I am visiting your Home page and would like to know more about your company and fertilizer products.",
    "/about":
      "Hello Arvis Fertilizers & Chemicals Pvt. Ltd., I am visiting your About page and would like to know more about your company, vision and business presence.",
    "/products":
      "Hello Arvis Fertilizers & Chemicals Pvt. Ltd., I am viewing your Products page and would like to know more about product details, availability and dealership support.",
    "/investor-relations":
      "Hello Arvis Fertilizers & Chemicals Pvt. Ltd., I am viewing your Investor Relations page and would like to discuss business growth and investment opportunities.",
    "/careers":
      "Hello Arvis Fertilizers & Chemicals Pvt. Ltd., I am viewing your Careers page and I am looking for career opportunities. Please share current openings and application details.",
    "/contact":
      "Hello Arvis Fertilizers & Chemicals Pvt. Ltd., I am on your Contact page and would like to connect with your team.",
  };

  const message =
    pageMessages[pathname] ||
    "Hello Arvis Fertilizers & Chemicals Pvt. Ltd., I am visiting your website and would like to know more details.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <style>{`
        .arvis-whatsapp-float {
          position: fixed;
          right: 24px;
          bottom: 28px;
          z-index: 9998;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #ffffff;
          text-decoration: none;
          background:
            radial-gradient(circle at 28% 20%, rgba(255,255,255,.32), transparent 28%),
            linear-gradient(135deg, #25d366 0%, #128c4a 100%);
          box-shadow:
            0 18px 38px rgba(18, 140, 74, .34),
            0 0 0 8px rgba(37, 211, 102, .12);
          border: 1px solid rgba(255, 255, 255, .35);
          overflow: hidden;
          transition:
            transform .24s ease,
            box-shadow .24s ease,
            background .24s ease;
          animation: whatsappSoftPulse 2.8s ease-in-out infinite;
        }

        .arvis-whatsapp-float::before {
          content: "";
          position: absolute;
          inset: -40%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,.28) 45%,
            transparent 70%
          );
          transform: translateX(-80%) rotate(20deg);
          animation: whatsappShine 3.8s ease-in-out infinite;
          pointer-events: none;
        }

        .arvis-whatsapp-float:hover {
          transform: translateY(-5px) scale(1.04);
          box-shadow:
            0 24px 48px rgba(18, 140, 74, .42),
            0 0 0 10px rgba(37, 211, 102, .14);
        }

        .arvis-whatsapp-icon {
          position: relative;
          z-index: 2;
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 32px;
        }

        @keyframes whatsappSoftPulse {
          0%, 100% {
            box-shadow:
              0 18px 38px rgba(18, 140, 74, .34),
              0 0 0 8px rgba(37, 211, 102, .12);
          }

          50% {
            box-shadow:
              0 22px 46px rgba(18, 140, 74, .42),
              0 0 0 14px rgba(37, 211, 102, .08);
          }
        }

        @keyframes whatsappShine {
          0%, 45% {
            transform: translateX(-90%) rotate(20deg);
          }

          70%, 100% {
            transform: translateX(120%) rotate(20deg);
          }
        }

        @media (max-width: 720px) {
          .arvis-whatsapp-float {
            right: 16px;
            bottom: 92px;
            width: 54px;
            height: 54px;
          }

          .arvis-whatsapp-icon {
            width: 54px;
            height: 54px;
            font-size: 28px;
          }
        }

        @media (max-width: 390px) {
          .arvis-whatsapp-float {
            right: 14px;
            bottom: 88px;
            width: 52px;
            height: 52px;
          }

          .arvis-whatsapp-icon {
            width: 52px;
            height: 52px;
            font-size: 27px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .arvis-whatsapp-float,
          .arvis-whatsapp-float::before {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <a
        className="arvis-whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Arvis Fertilizers on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="arvis-whatsapp-icon">
          <FaWhatsapp />
        </span>
      </a>
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <div className="app-content">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/investor-relations"
              element={<InvestorRelations />}
            />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default App;