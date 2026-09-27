'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, PhoneIcon, MapPinIcon } from './Icons';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const [level, setLevel] = useState<'root' | 'products' | 'rolling-bearings'>('root');

  if (!isOpen) return null;

  const handleClose = () => {
    setLevel('root');
    onClose();
  };

  return (
    <>
      <div className="drawer-overlay" onClick={handleClose}></div>
      <div className="drawer">
        <div className="drawer-top-bar">
          <div className="drawer-brand">
            <img src="/images/jbs-logo-transparent.png" alt="JBS Logo" style={{ height: '28px', width: 'auto' }} />
          </div>
          <button className="drawer-close" onClick={handleClose} aria-label="Close menu">✕</button>
        </div>

        <div className="drawer-content">
          {/* LEVEL 1: ROOT */}
          {level === 'root' && (
            <div className="drawer-level-view">
              <ul className="drawer-nav-list primary-list">
                <li onClick={() => setLevel('products')} className="drawer-item-clickable">
                  <span>Products</span>
                  <ChevronRightIcon size={18} />
                </li>
                <li>
                  <Link href="/services" onClick={handleClose}>Services & Technical Support</Link>
                </li>
                <li>
                  <Link href="/industries" onClick={handleClose}>Industries & Applications</Link>
                </li>
                <li>
                  <Link href="/about" onClick={handleClose}>About JBS (Since 1974)</Link>
                </li>
                <li>
                  <Link href="/contact" onClick={handleClose}>Contact & Distribution Centers</Link>
                </li>
              </ul>

              <div className="drawer-secondary-section">
                <span className="drawer-subhead">ENGINEERING RESOURCES</span>
                <ul className="drawer-nav-list secondary-list">
                  <li><Link href="/quote" onClick={handleClose}>Instant RFQ Quotation</Link></li>
                  <li><Link href="/products/bearings/mounted-bearings" onClick={handleClose}>Mounted Units & Housings</Link></li>
                  <li><Link href="/products/lubrication" onClick={handleClose}>Lubricants & Grease Dispensing</Link></li>
                  <li><Link href="/products/maintenance-tools" onClick={handleClose}>Condition Monitoring & Pullers</Link></li>
                </ul>
              </div>

              <div className="drawer-footer-info">
                <div className="info-row">
                  <PhoneIcon size={16} />
                  <span>Pan-India Inquiry: +91 98300 00000</span>
                </div>
                <div className="info-row">
                  <MapPinIcon size={16} />
                  <span>Kolkata • Mumbai • Delhi • Chennai</span>
                </div>
              </div>
            </div>
          )}

          {/* LEVEL 2: PRODUCTS */}
          {level === 'products' && (
            <div className="drawer-level-view">
              <button className="drawer-back-btn" onClick={() => setLevel('root')}>
                ← Back to Main Menu
              </button>
              <h3 className="drawer-level-title">Products Universe</h3>
              <ul className="drawer-nav-list primary-list">
                <li>
                  <Link href="/products" onClick={handleClose} className="drawer-link-overview">
                    Full Products Overview →
                  </Link>
                </li>
                <li onClick={() => setLevel('rolling-bearings')} className="drawer-item-clickable">
                  <span>Rolling Bearings (Ball & Roller)</span>
                  <ChevronRightIcon size={18} />
                </li>
                <li>
                  <Link href="/products/bearings/mounted-bearings" onClick={handleClose}>
                    Mounted Bearings & Housings
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/super-precision" onClick={handleClose}>
                    Super-Precision Spindle Bearings
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/slewing-bearings" onClick={handleClose}>
                    Slewing Bearings & Turntables
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/plain-bearings" onClick={handleClose}>
                    Plain Bearings & Rod Ends
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/magnetic-bearings" onClick={handleClose}>
                    Active Magnetic Bearings
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/thin-section" onClick={handleClose}>
                    Thin Section Precision Bearings
                  </Link>
                </li>
                <li>
                  <Link href="/products/seals" onClick={handleClose}>
                    Industrial Seals (Radial & Cassette)
                  </Link>
                </li>
                <li>
                  <Link href="/products/lubrication" onClick={handleClose}>
                    Lubrication Solutions & Greases
                  </Link>
                </li>
                <li>
                  <Link href="/products/power-transmission" onClick={handleClose}>
                    Power Transmission (Belts, Chains, Couplings)
                  </Link>
                </li>
                <li>
                  <Link href="/products/maintenance-tools" onClick={handleClose}>
                    Maintenance & Alignment Tools
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* LEVEL 3: ROLLING BEARINGS */}
          {level === 'rolling-bearings' && (
            <div className="drawer-level-view">
              <button className="drawer-back-btn" onClick={() => setLevel('products')}>
                ← Back to Products
              </button>
              <h3 className="drawer-level-title">Rolling Bearings</h3>
              <ul className="drawer-nav-list primary-list">
                <li>
                  <Link href="/products/bearings/rolling-bearings" onClick={handleClose} className="drawer-link-overview">
                    All Rolling Bearings →
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/rolling-bearings/ball-bearings/deep-groove-ball-bearings" onClick={handleClose}>
                    Deep Groove Ball Bearings
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/rolling-bearings/ball-bearings/angular-contact-ball-bearings" onClick={handleClose}>
                    Angular Contact Ball Bearings
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/rolling-bearings/ball-bearings/insert-bearings" onClick={handleClose}>
                    Insert Bearings (Y-Bearings)
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/rolling-bearings/ball-bearings/self-aligning-ball-bearings" onClick={handleClose}>
                    Self-Aligning Ball Bearings
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/rolling-bearings/roller-bearings/spherical-roller-bearings" onClick={handleClose}>
                    Spherical Roller Bearings
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/rolling-bearings/roller-bearings/tapered-roller-bearings" onClick={handleClose}>
                    Tapered Roller Bearings
                  </Link>
                </li>
                <li>
                  <Link href="/products/bearings/rolling-bearings/roller-bearings/cylindrical-roller-bearings" onClick={handleClose}>
                    Cylindrical Roller Bearings
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
