'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SparklesIcon, PhoneIcon, MailIcon, MapPinIcon, ShieldCheckIcon } from './Icons';
import AiAdvisorModal from './AiAdvisorModal';

export default function Footer() {
  const [isAiOpen, setAiOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top-grid">
            {/* Column 1: About */}
            <div className="footer-col">
              <div className="footer-brand" style={{ marginBottom: '1.25rem' }}>
                <img
                  src="/images/jbs-logo-transparent.png"
                  alt="Jaiswal Bearing Store"
                  style={{ height: '36px', width: 'auto', display: 'block', objectFit: 'contain' }}
                />
              </div>
              <p className="footer-desc">
                Established in 1974. A premier industrial distribution enterprise specializing in genuine precision bearings, power transmission assemblies, automated lubrication systems, and condition monitoring instrumentation across India.
              </p>
              <div className="footer-badge">
                <ShieldCheckIcon size={18} />
                <span>100% Genuine Certified Industrial Stock</span>
              </div>
            </div>

            {/* Column 2: Products */}
            <div className="footer-col">
              <h4>Products</h4>
              <ul className="footer-links">
                <li><Link href="/products/bearings/rolling-bearings">Rolling Bearings (Ball & Roller)</Link></li>
                <li><Link href="/products/bearings/mounted-bearings">Mounted Units & Housings</Link></li>
                <li><Link href="/products/bearings/super-precision">Super-Precision Machine Tool Bearings</Link></li>
                <li><Link href="/products/bearings/slewing-bearings">Slewing Bearings & Turntables</Link></li>
                <li><Link href="/products/bearings/plain-bearings">Plain Bearings & Rod Ends</Link></li>
                <li><Link href="/products/seals">Radial Shaft & Hydraulic Seals</Link></li>
                <li><Link href="/products/lubrication">Industrial Bearing Greases & Dispensers</Link></li>
                <li><Link href="/products/power-transmission">Belts, Chains & Couplings</Link></li>
                <li><Link href="/products/maintenance-tools">Condition Monitoring & Induction Heaters</Link></li>
              </ul>
            </div>

            {/* Column 3: Support & Engineering */}
            <div className="footer-col">
              <h4>Engineering & Support</h4>
              <ul className="footer-links">
                <li><Link href="/quote">Request Quick RFQ Quotation</Link></li>
                <li><Link href="/services">Laser Shaft Alignment Services</Link></li>
                <li><Link href="/services">Vibration Diagnostics & Audits</Link></li>
                <li><Link href="/services">Bearing Refurbishment Program</Link></li>
                <li><Link href="/industries">Steel, Cement & Mining Solutions</Link></li>
                <li><Link href="/about">Authorized Sourcing Guarantees</Link></li>
                <li><button onClick={() => setAiOpen(true)} className="footer-link-btn">Launch AI Bearing Advisor</button></li>
              </ul>
            </div>

            {/* Column 4: Contact & Locations */}
            <div className="footer-col">
              <h4>Contact & Logistics</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <MapPinIcon size={18} />
                  <div>
                    <strong>National Distribution Center:</strong>
                    <p>71A Netaji Subhas Road, Kolkata, WB 700001</p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <PhoneIcon size={18} />
                  <div>
                    <strong>Sales & Breakdown Hotline:</strong>
                    <p>+91 (033) 2242-XXXX / +91 98300 XXXXX</p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <MailIcon size={18} />
                  <div>
                    <strong>Direct Email:</strong>
                    <p>sales@jaiswalbearingstore.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div className="footer-bottom-left">
              <span>© {new Date().getFullYear()} Jaiswal Bearing Store. All rights reserved.</span>
              <span className="footer-divider">•</span>
              <span>ISO 9001:2015 Certified Inventory Management</span>
            </div>
            <div className="footer-bottom-right">
              <Link href="/about">Quality Policy</Link>
              <Link href="/contact">Warehouse Locations</Link>
              <Link href="/quote">Rapid Dispatch</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Ask AI Button in bottom right corner (from SKF screenshot) */}
      <button
        className="floating-ai-button"
        onClick={() => setAiOpen(true)}
        aria-label="Open AI Bearing Assistant"
      >
        <SparklesIcon size={18} />
        <span>Ask AI</span>
      </button>

      <AiAdvisorModal isOpen={isAiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
