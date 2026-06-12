import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaChartLine,
  FaBriefcase,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [hideTop, setHideTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const logo = new Image();
    logo.src = "/logo.png";

    const handleScroll = () => {
      setHideTop(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { path: "/", label: "Home", short: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", short: "About", icon: <FaInfoCircle /> },
    {
      path: "/investor-relations",
      label: "Investors",
      short: "Investors",
      icon: <FaChartLine />,
    },
    { path: "/careers", label: "Careers", short: "Careers", icon: <FaBriefcase /> },
    { path: "/products", label: "Products", short: "Products", icon: <FaBoxOpen /> },
    { path: "/contact", label: "Contact", short: "Contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <>
      <style>{`
        :root {
          --arvis-plum: #42172d;
          --arvis-plum-dark: #2b0f1e;
          --arvis-gold: #e79b16;
          --arvis-gold-soft: #f7c56a;
          --arvis-cream: #fff8ee;
          --arvis-text: #2c1722;
          --arvis-muted: rgba(44, 23, 34, .68);
        }

        * {
          box-sizing: border-box;
        }

        body {
          padding-bottom: 0;
        }

        .arvis-navbar-space {
          height: 146px;
          transition: height .35s ease;
        }

        .arvis-navbar-space.is-small {
          height: 96px;
        }

        .arvis-top-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, .94);
          border-bottom: 1px solid rgba(66, 23, 45, .08);
          backdrop-filter: blur(16px);
          box-shadow: 0 8px 24px rgba(43, 15, 30, .06);
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .arvis-top-header.is-small {
          box-shadow: 0 12px 30px rgba(43, 15, 30, .08);
        }

        .arvis-head-inner {
          width: min(1240px, calc(100% - 48px));
          min-height: 96px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .arvis-brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          min-width: 230px;
        }

        .arvis-brand img {
          width: 180px;
          height: 76px;
          object-fit: contain;
          display: block;
          filter:
            brightness(1.06)
            contrast(1.06)
            saturate(1.12)
            drop-shadow(0 8px 12px rgba(66, 23, 45, .08));
        }

        .arvis-menu-circle {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border: 0;
          display: none;
          place-items: center;
          color: white;
          background:
            radial-gradient(circle at 35% 22%, rgba(255,255,255,.24), transparent 34%),
            linear-gradient(135deg, #5c2041, #2b0f1e);
          box-shadow:
            0 14px 28px rgba(66, 23, 45, .22),
            inset 0 1px 0 rgba(255,255,255,.18);
          font-size: 24px;
          cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .arvis-menu-circle:hover,
        .arvis-menu-circle.active {
          transform: translateY(-3px);
          box-shadow:
            0 18px 34px rgba(66, 23, 45, .28),
            inset 0 1px 0 rgba(255,255,255,.18);
        }

        .arvis-menu-circle svg {
          transition: transform .25s ease;
        }

        .arvis-menu-circle.active svg {
          transform: rotate(90deg);
        }

        .arvis-desktop-nav-wrap {
          position: fixed;
          top: 96px;
          left: 0;
          right: 0;
          z-index: 1001;
          background: rgba(255, 255, 255, .96);
          border-bottom: 1px solid rgba(66, 23, 45, .08);
          backdrop-filter: blur(16px);
          transition:
            top .35s ease,
            background .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .arvis-desktop-nav-wrap.is-small {
          top: 23px;
          background: transparent;
          border-bottom-color: transparent;
          backdrop-filter: none;
          box-shadow: none;
        }

        .arvis-desktop-nav {
          width: min(980px, calc(100% - 48px));
          min-height: 50px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 46px;
        }

        .arvis-desktop-nav a {
          position: relative;
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--arvis-text);
          text-decoration: none;
          font-size: 15px;
          font-weight: 750;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(26px);
          animation: navLinkComeRight .82s cubic-bezier(.16, 1, .3, 1) forwards;
          animation-delay: var(--nav-delay);
          transition: color .25s ease, transform .25s ease;
        }

        .arvis-desktop-nav a svg {
          width: 15px;
          height: 15px;
          color: var(--arvis-gold);
          flex: 0 0 auto;
          transition: .25s ease;
        }

        @keyframes navLinkComeRight {
          0% {
            opacity: 0;
            transform: translateX(26px);
          }

          70% {
            opacity: 1;
            transform: translateX(-3px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .arvis-desktop-nav a::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 8px;
          width: 0;
          height: 3px;
          border-radius: 999px;
          transform: translateX(-50%);
          background: var(--arvis-gold);
          box-shadow: 0 0 12px rgba(231, 155, 22, .5);
          transition: width .25s ease;
        }

        .arvis-desktop-nav a:hover,
        .arvis-desktop-nav a.active {
          color: var(--arvis-gold);
          transform: translateY(-1px);
        }

        .arvis-desktop-nav a:hover svg,
        .arvis-desktop-nav a.active svg {
          color: var(--arvis-gold);
        }

        .arvis-desktop-nav a:hover::after,
        .arvis-desktop-nav a.active::after {
          width: 100%;
        }

        .arvis-menu-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1002;
          background: rgba(255, 243, 223, .62);
          backdrop-filter: blur(8px);
          opacity: 0;
          visibility: hidden;
          transition: opacity .32s ease, visibility .32s ease;
        }

        .arvis-menu-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        .arvis-menu-panel {
          position: fixed;
          top: 112px;
          right: 24px;
          z-index: 1003;
          width: min(390px, calc(100% - 34px));
          padding: 22px;
          border-radius: 30px;
          background:
            radial-gradient(circle at 15% 0%, rgba(233,154,17,.18), transparent 34%),
            linear-gradient(135deg, #fff8ee 0%, #fff3df 52%, #f3dfc1 100%);
          border: 1px solid rgba(233,154,17,.28);
          box-shadow:
            0 30px 70px rgba(69,20,44,.18),
            inset 0 1px 0 rgba(255,255,255,.72);
          transform: translateX(34px) scale(.96);
          opacity: 0;
          visibility: hidden;
          transition:
            opacity .32s cubic-bezier(.16, 1, .3, 1),
            transform .32s cubic-bezier(.16, 1, .3, 1),
            visibility .32s ease;
        }

        .arvis-menu-panel.open {
          opacity: 1;
          visibility: visible;
          transform: translateX(0) scale(1);
        }

        .arvis-menu-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 4px 4px 16px;
          border-bottom: 1px solid rgba(69,20,44,.12);
          margin-bottom: 14px;
        }

        .arvis-menu-title span {
          color: var(--arvis-gold);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .arvis-menu-title strong {
          display: block;
          margin-top: 4px;
          color: var(--arvis-text);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          line-height: 1;
          letter-spacing: -.6px;
        }

        .arvis-menu-close {
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #fff8ee;
          background:
            radial-gradient(circle at 35% 22%, rgba(255,255,255,.24), transparent 34%),
            linear-gradient(135deg, #e79b16, #b46b11);
          box-shadow:
            0 14px 28px rgba(231,155,22,.20),
            inset 0 1px 0 rgba(255,255,255,.20);
          cursor: pointer;
          font-size: 18px;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .arvis-menu-close:hover {
          transform: rotate(90deg) scale(1.06);
          box-shadow:
            0 18px 34px rgba(231,155,22,.26),
            inset 0 1px 0 rgba(255,255,255,.20);
        }

        .arvis-menu-list {
          display: grid;
          gap: 9px;
        }

        .arvis-menu-list a {
          min-height: 58px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 14px;
          border-radius: 20px;
          color: var(--arvis-text);
          text-decoration: none;
          font-size: 14.5px;
          font-weight: 850;
          background: rgba(255,255,255,.52);
          border: 1px solid rgba(233,154,17,.18);
          opacity: 0;
          transform: translateX(44px);
        }

        .arvis-menu-panel.open .arvis-menu-list a {
          animation: menuLinkComeRight .72s cubic-bezier(.16, 1, .3, 1) forwards;
          animation-delay: var(--menu-delay);
        }

        @keyframes menuLinkComeRight {
          0% {
            opacity: 0;
            transform: translateX(44px);
          }

          72% {
            opacity: 1;
            transform: translateX(-5px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .arvis-menu-list a svg {
          width: 18px;
          height: 18px;
          color: var(--arvis-gold);
          flex: 0 0 auto;
        }

        .arvis-menu-list a:hover,
        .arvis-menu-list a.active {
          color: white;
          background: linear-gradient(135deg, #f1a21c, #b46b11);
          border-color: rgba(247,197,106,.45);
          box-shadow:
            0 12px 24px rgba(231,155,22,.22),
            inset 0 1px 0 rgba(255,255,255,.22);
        }

        .arvis-menu-list a:hover svg,
        .arvis-menu-list a.active svg {
          color: white;
        }

        .arvis-mobile-bottom-nav {
          display: none;
        }

        @media (max-width: 980px) {
          body {
            padding-bottom: 96px;
          }

          .arvis-navbar-space,
          .arvis-navbar-space.is-small {
            height: 86px;
          }

          .arvis-top-header {
            border-bottom: 1px solid rgba(66, 23, 45, .08);
          }

          .arvis-head-inner {
            width: calc(100% - 24px);
            min-height: 86px;
          }

          .arvis-brand {
            min-width: 0;
          }

          .arvis-brand img {
            width: 158px;
            height: 66px;
            object-fit: contain;
          }

          .arvis-menu-circle {
            width: 54px;
            height: 54px;
            font-size: 22px;
            display: grid;
          }

          .arvis-desktop-nav-wrap {
            display: none;
          }

          .arvis-menu-panel {
            top: 98px;
            right: 12px;
            left: 12px;
            width: auto;
          }

          .arvis-mobile-bottom-nav {
            position: fixed;
            left: 10px;
            right: 10px;
            bottom: 10px;
            z-index: 1001;
            min-height: 72px;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 4px;
            border-radius: 24px;
            background:
              radial-gradient(circle at 15% 0%, rgba(247,197,106,.18), transparent 34%),
              linear-gradient(135deg, rgba(66,23,45,.98), rgba(43,15,30,.98));
            border: 1px solid rgba(247,197,106,.2);
            box-shadow:
              0 18px 38px rgba(43,15,30,.28),
              inset 0 1px 0 rgba(255,255,255,.1);
            backdrop-filter: blur(18px);
          }

          .arvis-mobile-bottom-nav a {
            flex: 1;
            min-height: 56px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
            border-radius: 18px;
            color: rgba(255,248,238,.72);
            text-decoration: none;
            font-size: 8px;
            font-weight: 850;
            opacity: 0;
            transform: translateX(22px);
            animation: navLinkComeRight .82s cubic-bezier(.16, 1, .3, 1) forwards;
            animation-delay: var(--nav-delay);
            transition: all .25s ease;
          }

          .arvis-mobile-bottom-nav a svg {
            width: 16px;
            height: 16px;
          }

          .arvis-mobile-bottom-nav a.active {
            color: white;
            background: linear-gradient(135deg, #f1a21c, #b46b11);
            box-shadow:
              0 10px 20px rgba(231,155,22,.28),
              inset 0 1px 0 rgba(255,255,255,.22);
            transform: translateY(-2px);
          }
        }

        @media (max-width: 560px) {
          body {
            padding-bottom: 92px;
          }

          .arvis-navbar-space,
          .arvis-navbar-space.is-small {
            height: 78px;
          }

          .arvis-head-inner {
            width: calc(100% - 20px);
            min-height: 78px;
          }

          .arvis-brand img {
            width: 142px;
            height: 58px;
          }

          .arvis-menu-circle {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .arvis-menu-panel {
            top: 88px;
            padding: 18px;
            border-radius: 26px;
          }

          .arvis-menu-title strong {
            font-size: 22px;
          }

          .arvis-menu-close {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }

          .arvis-menu-list a {
            min-height: 54px;
            border-radius: 18px;
            font-size: 13.5px;
          }

          .arvis-mobile-bottom-nav {
            left: 8px;
            right: 8px;
            bottom: 8px;
            min-height: 68px;
            padding: 7px;
            border-radius: 22px;
          }

          .arvis-mobile-bottom-nav a {
            min-height: 52px;
            border-radius: 16px;
            font-size: 7.1px;
          }

          .arvis-mobile-bottom-nav a svg {
            width: 14px;
            height: 14px;
          }
        }

        @media (max-width: 390px) {
          .arvis-brand img {
            width: 132px;
            height: 54px;
          }

          .arvis-menu-circle {
            width: 44px;
            height: 44px;
            font-size: 18px;
          }

          .arvis-mobile-bottom-nav a {
            font-size: 6.6px;
          }

          .arvis-mobile-bottom-nav a svg {
            width: 13px;
            height: 13px;
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

      <div className={`arvis-navbar-space ${hideTop ? "is-small" : ""}`}></div>

      <header className={`arvis-top-header ${hideTop ? "is-small" : ""}`}>
        <div className="arvis-head-inner">
          <NavLink to="/" className="arvis-brand">
            <img
              src="/logo.png"
              alt="Arvi's Fertilizers"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </NavLink>

          <button
            className={`arvis-menu-circle ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      <div className={`arvis-desktop-nav-wrap ${hideTop ? "is-small" : ""}`}>
        <nav
          key={`desktop-${location.pathname}`}
          className="arvis-desktop-nav"
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => (
            <NavLink
              key={`${location.pathname}-${item.path}`}
              to={item.path}
              end={item.path === "/"}
              style={{ "--nav-delay": `${0.12 + index * 0.14}s` }}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div
        className={`arvis-menu-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        role="presentation"
      ></div>

      <div className={`arvis-menu-panel ${menuOpen ? "open" : ""}`}>
        <div className="arvis-menu-title">
          <div>
            <strong>Explore Arvis</strong>
          </div>

          <button
            type="button"
            className="arvis-menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="arvis-menu-list" aria-label="Menu navigation">
          {navItems.map((item, index) => (
            <NavLink
              key={`menu-${item.path}`}
              to={item.path}
              end={item.path === "/"}
              style={{ "--menu-delay": `${0.08 + index * 0.11}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <nav
        key={`mobile-${location.pathname}`}
        className="arvis-mobile-bottom-nav"
        aria-label="Mobile navigation"
      >
        {navItems.map((item, index) => (
          <NavLink
            key={`${location.pathname}-${item.path}`}
            to={item.path}
            end={item.path === "/"}
            style={{ "--nav-delay": `${0.12 + index * 0.10}s` }}
          >
            {item.icon}
            <span>{item.short}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Navbar;