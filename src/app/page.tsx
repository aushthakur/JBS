'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { catalogData, servicesData } from '@/data/catalog';
import {
  SparklesIcon,
  ArrowRightIcon,
  WrenchIcon,
  GaugeIcon,
  ActivityIcon,
  RefreshCwIcon,
  DropletIcon,
  TruckIcon
} from './components/Icons';
import AiAdvisorModal from './components/AiAdvisorModal';

export default function Home() {
  const [isAiOpen, setAiOpen] = useState(false);
  const categories = catalogData.children || [];

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'WrenchIcon':
        return <WrenchIcon size={24} />;
      case 'GaugeIcon':
        return <GaugeIcon size={24} />;
      case 'ActivityIcon':
        return <ActivityIcon size={24} />;
      case 'RefreshCwIcon':
        return <RefreshCwIcon size={24} />;
      case 'DropletIcon':
        return <DropletIcon size={24} />;
      case 'TruckIcon':
        return <TruckIcon size={24} />;
      default:
        return <WrenchIcon size={24} />;
    }
  };

  return (
    <div className="home-page">
      {/* 1. HERO BANNER */}
      <section className="bearing-hero-banner">
        <div className="container">
          <h1>Industrial Bearings &amp; Solutions</h1>
          <p style={{ color: '#A0AAB5', fontSize: '1.15rem', marginTop: '1rem', maxWidth: '580px' }}>
            Precision bearings for every industrial application. Trusted supplier in Mayapuri, Delhi since 1986.
          </p>
        </div>
      </section>


      {/* 2. SUB-HERO EDITORIAL: Matches media_1790505967648.png */}
      <section className="sub-hero-editorial">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-left">
              <h2>Bearings &ndash; at the<br />heart of what we do</h2>
            </div>
            <div className="editorial-right">
              <p>
                Bearings have enabled the growth of industries, revolutionized transport, and enhanced overall quality of human life. Since the start in 1974, our focus has remained the same: creating an everyday life with less friction. To do this, we have developed and distributed bearings suitable for a wide variety of applications and extreme conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WANT TO KNOW MORE ABOUT SELECTING BEARINGS? ASK AI (From Screenshot) */}
      <section className="ask-ai-callout-section">
        <div className="container">
          <div className="ask-ai-callout-inner">
            <h2>Want to know more about selecting bearings?</h2>
            <button
              className="ask-ai-big-btn"
              onClick={() => setAiOpen(true)}
              aria-label="Launch AI Bearing Selection Assistant"
            >
              <SparklesIcon size={20} />
              <span>Ask AI</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS UNIVERSE: Matches media_1790504811188.png */}
      <section className="products-universe-section">
        <div className="container">
          <div className="universe-grid">
            {categories.map((cat) => (
              <div className="universe-card" key={cat.id}>
                <div className="universe-card-img-wrapper">
                  {cat.imageUrl && (
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="universe-card-body">
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                  <Link href={`/products/${cat.slug}`} className="universe-card-link">
                    <span>Explore products</span>
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. JBS PRODUCT SELECT PROMO BANNER (From Screenshot) */}
      <section className="container">
        <div className="product-select-banner">
          <h3>JBS Product Select &amp; Sizing Tool</h3>
          <p>
            The JBS Product Select tool supports you in evaluating and selecting products, including bearings, lubrication, housings and seals. You can evaluate dynamic performance, get guided engineering support, and compare technical specifications directly.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => setAiOpen(true)}
              className="btn btn-blue"
            >
              <SparklesIcon size={18} /> Open AI Sizing Tool
            </button>
            <Link href="/products" className="btn btn-secondary">
              Browse All 11 Product Divisions
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION (Zero emojis! Clean SVGs) */}
      <section className="services-section">
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h2>Industrial Engineering Services</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              We deliver end-to-end industrial rotating equipment reliability, preventative maintenance, and rapid supply chain logistics across the subcontinent.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-icon-box">
                  {getServiceIcon(service.iconName)}
                </div>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <div style={{ marginTop: '1.25rem' }}>
                  <Link
                    href={`/services#${service.id}`}
                    style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    Learn More <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HERITAGE & QUALITY GUARANTEE (Since 1974) */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="story-badge">ESTABLISHED 1974 &bull; 50+ YEARS OF INDUSTRIAL EXCELLENCE</span>
              <h2>Engineered Precision.<br />Uncompromising Authenticity.</h2>
              <p>
                Jaiswal Bearing Store (JBS) is not merely a merchant. It is a premier industrial supply enterprise with more than five decades of technical expertise servicing India’s heavy engineering, steel, cement, power, and manufacturing sectors.
              </p>
              <p>
                As a premier certified industrial distributor, JBS guarantees 100% genuine industrial components, accompanied by official test certificates and pan-India express logistics.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Link href="/about" className="btn btn-primary">
                  Read Our Heritage Story
                </Link>
                <Link href="/quote" className="btn btn-secondary">
                  Request an RFQ
                </Link>
              </div>
            </div>

            <div className="story-img-wrapper">
              <img
                src="/images/catalog/industrial-plant.jpg"
                alt="JBS Industrial Inventory and Facility"
              />
            </div>
          </div>
        </div>
      </section>

      <AiAdvisorModal isOpen={isAiOpen} onClose={() => setAiOpen(false)} />
    </div>
  );
}
