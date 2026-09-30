"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Office', path: '/office' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          
          {/* Logo */}
          <Link href="/" className="logo">
            <Image src="/logo_transparent.png" alt="SS Law Firm Logo" width={100} height={70} priority style={{ objectFit: 'contain' }} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`nav-link ${pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="header-actions">
            <a href="https://wa.me/916381528329?text=Hello%20Mr.%20Saravanan%2C%20I%20would%20like%20to%20schedule%20a%20legal%20consultation.%20I%20would%20like%20to%20discuss%20my%20legal%20matter%20with%20you." target="_blank" rel="noopener noreferrer" className="btn-primary desktop-cta">
              Consultation
            </a>
            
            <button 
              className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`mobile-nav-link ${pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/916381528329?text=Hello%20Mr.%20Saravanan%2C%20I%20would%20like%20to%20schedule%20a%20legal%20consultation.%20I%20would%20like%20to%20discuss%20my%20legal%20matter%20with%20you." target="_blank" rel="noopener noreferrer" className="mobile-nav-link" style={{ color: 'var(--gold-primary)' }}>
              Consultation
            </a>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background-color: var(--bg-dark);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid transparent;
          padding: var(--space-6) 0;
        }
        
        .header.scrolled {
          padding: var(--space-4) 0;
          background-color: rgba(8, 9, 11, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-dark);
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 var(--space-8);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-playfair), serif;
          font-size: var(--text-2xl);
          color: var(--gold-primary);
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .desktop-nav {
          display: flex;
          gap: var(--space-8);
          align-items: center;
        }

        .nav-link {
          font-size: var(--text-xs);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-light-muted);
          position: relative;
          padding-bottom: 4px;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--white-warm);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--gold-primary);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover::after, .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .header-actions {
          display: flex;
          align-items: center;
        }

        /* Mobile Toggle (Hamburger) */
        .mobile-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 101;
        }

        .mobile-toggle span {
          width: 100%;
          height: 2px;
          background-color: var(--gold-primary);
          transition: all 0.3s ease;
          transform-origin: left;
        }

        .mobile-toggle.open span:nth-child(1) { transform: rotate(45deg); }
        .mobile-toggle.open span:nth-child(2) { opacity: 0; }
        .mobile-toggle.open span:nth-child(3) { transform: rotate(-45deg); }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100dvh;
          background-color: var(--bg-secondary);
          z-index: 99;
          transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-inner {
          width: 100%;
          padding: var(--space-8);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-8);
        }

        .mobile-nav-link {
          font-family: var(--font-playfair), serif;
          font-size: var(--text-2xl);
          color: var(--white-warm);
          text-decoration: none;
          letter-spacing: 0.05em;
        }

        .mobile-nav-link.active {
          color: var(--gold-primary);
        }

        @media (max-width: 1024px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex; }
        }
        
        @media (max-width: 768px) {
          .header-container { padding: 0 var(--space-4); }
        }
      `}</style>
    </>
  );
}
