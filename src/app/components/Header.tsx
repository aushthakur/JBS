'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavigationDrawer from './NavigationDrawer';
import SearchModal from './SearchModal';
import AiAdvisorModal from './AiAdvisorModal';
import { SearchIcon, SparklesIcon } from './Icons';

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isAiOpen, setAiOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container header-container">
          {/* Logo on the Far Left */}
          <div className="header-left">
            <Link href="/" className="nav-logo-link">
              <img
                src="/images/jbs-logo-transparent.png"
                alt="JBS - Jaiswal Bearing Store"
                className="nav-logo-img"
              />
            </Link>
          </div>

          {/* Everything else on the Right */}
          <div className="header-right">
            <nav className="desktop-nav">
              <Link href="/products" className="nav-link">Products</Link>
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/industries" className="nav-link">Industries</Link>
              <Link href="/about" className="nav-link">About JBS</Link>
            </nav>

            <button
              className="header-icon-btn"
              onClick={() => setSearchOpen(true)}
              title="Search part numbers"
            >
              <SearchIcon size={18} />
              <span className="desktop-only-text">Search</span>
            </button>

            <button
              className="btn-ask-ai"
              onClick={() => setAiOpen(true)}
              title="Interactive Bearing Selection AI"
            >
              <SparklesIcon size={16} />
              <span>Ask AI</span>
            </button>

            <Link href="/contact" className="nav-link desktop-only">Contact</Link>
            
            <Link href="/quote" className="btn-quote">
              <span className="desktop-only-text">Request a </span>Quote
            </Link>

            <button
              className="menu-trigger"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open Navigation Menu"
              title="Menu"
            >
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
            </button>
          </div>
        </div>
      </header>

      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
      <AiAdvisorModal isOpen={isAiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
