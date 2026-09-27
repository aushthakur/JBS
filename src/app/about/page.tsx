import Link from 'next/link';
import { ShieldCheckIcon, CheckIcon, GlobeIcon, TruckIcon } from '@/app/components/Icons';

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="bearing-hero-banner">
        <div className="container">
          <div className="hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1>About Jaiswal Bearing Store</h1>
        </div>
      </section>

      <section className="sub-hero-editorial">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-left">
              <h2>Five Decades of Industrial Excellence</h2>
            </div>
            <div className="editorial-right">
              <p>
                Founded in 1974, Jaiswal Bearing Store (JBS) has grown from a specialized mechanical supplier into one of India’s most trusted industrial distribution enterprises for precision bearings, power transmission assemblies, automated lubrication, and diagnostic instrumentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
              OUR PHILOSOPHY
            </span>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>Zero Compromise on Authenticity</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              In rotating machinery, a single counterfeit or substandard bearing can lead to catastrophic motor seizure, plant fires, and millions in lost production. At JBS, authenticity is not an afterthought &ndash; it is the cornerstone of our enterprise.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Every product in our inventory originates directly from authorized manufacturer supply chains. All dispatches carry verifiable manufacturer QR authenticity codes, batch test certificates (MTC), and comprehensive GST documentation.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/products" className="btn btn-primary">Browse Certified Catalog</Link>
              <Link href="/contact" className="btn btn-secondary">Contact Our Team</Link>
            </div>
          </div>

          <div style={{ height: '400px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img
              src="/images/catalog/industrial-plant.jpg"
              alt="JBS Warehouse and Inspection Facility"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', padding: '2rem', borderRadius: '4px' }}>
            <div style={{ width: '48px', height: '48px', background: '#FFFFFF', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', marginBottom: '1.25rem' }}>
              <ShieldCheckIcon size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>100% Genuine Guaranteed</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Direct factory procurement with verified serial markings, optical laser checks, and anti-counterfeiting verification protocols.
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', padding: '2rem', borderRadius: '4px' }}>
            <div style={{ width: '48px', height: '48px', background: '#FFFFFF', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', marginBottom: '1.25rem' }}>
              <GlobeIcon size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>15,000+ Active SKUs</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Exhaustive ready-stock inventory spanning miniature high-speed dental ball bearings up to 2-meter diameter rolling mill spherical assemblies.
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', padding: '2rem', borderRadius: '4px' }}>
            <div style={{ width: '48px', height: '48px', background: '#FFFFFF', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', marginBottom: '1.25rem' }}>
              <TruckIcon size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>National Logistics Reach</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Fulfillment hubs in Eastern, Western, Northern, and Southern industrial corridors delivering rapid same-day and next-day dispatches.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
