import Link from 'next/link';
import { ArrowRightIcon } from '@/app/components/Icons';

export default function IndustriesPage() {
  const industries = [
    {
      id: 'steel',
      title: 'Steel Mills & Metallurgy',
      desc: 'Extreme temperatures, heavy shock loads, and high scale contamination require sealed spherical roller bearings, multi-row cylindrical bearings, and solid grease solutions for continuous casting and hot rolling mills.',
      products: 'Spherical Roller Bearings, SNL Split Housings, Heavy Duty Seals, High Temp Greases'
    },
    {
      id: 'cement',
      title: 'Cement, Mining & Aggregates',
      desc: 'Jaw crushers, vibrating screens, vertical roller mills, and bucket elevators operate under severe abrasive particulate ingress. We supply CARB toroidal bearings, plummer blocks, and labyrinth taconite sealing arrangements.',
      products: 'Vibrating Screen Bearings (223xx series), Mudblock Seals, Induction Heaters, Jaw Couplings'
    },
    {
      id: 'railways',
      title: 'Railways & Transportation',
      desc: 'Axlebox bearing units (TBU, CTBU) engineered to meet stringent UIC and RDSO standards, ensuring maintenance intervals up to 1.5 million kilometers for passenger coaches, locomotives, and freight wagons.',
      products: 'Tapered Roller Bearing Units (TBU), Traction Motor Cylindrical Bearings, Wheelset Seals'
    },
    {
      id: 'paper',
      title: 'Pulp, Paper & Printing',
      desc: 'Paper machine dryer sections demand bearings with specialized internal clearances (C3/C4) and high-speed running accuracy to prevent moisture corrosion and thermal binding on high-speed calendar rolls.',
      products: 'Double Row Spherical Roller Bearings, Oil Circulation Lubrication, Super-Precision Cylindrical'
    },
    {
      id: 'food',
      title: 'Food, Beverage & Pharmaceuticals',
      desc: 'Washdown resistance and food safety compliance. Corrosion-resistant stainless steel and composite ball bearing units equipped with NSF H1 registered food-grade lubricants for bottling and sorting lines.',
      products: 'Stainless Steel Deep Groove Bearings, Thermoplastic Mounted Units, Food-Grade Greases'
    },
    {
      id: 'energy',
      title: 'Power Generation & Wind Energy',
      desc: 'Main shaft wind turbine slewing rings, generator insulated bearings (INSOCOAT) to prevent electrical pitting, and coal pulverized mill bearings with high dynamic capacity.',
      products: 'Slewing Bearings, Insulated Bearings, Active Magnetic Bearings, Laser Alignment Systems'
    }
  ];

  return (
    <div className="industries-page">
      <section className="bearing-hero-banner">
        <div className="container">
          <div className="hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Industries</span>
          </div>
          <h1>Industry Solutions</h1>
        </div>
      </section>

      <section className="sub-hero-editorial">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-left">
              <h2>Tailored Reliability for Heavy Sectors</h2>
            </div>
            <div className="editorial-right">
              <p>
                Every industry presents unique mechanical challenges &ndash; from the extreme temperatures of blast furnaces to the moisture washdowns of food processing lines. Explore our specialized assortments engineered for critical operational environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2.5rem' }}>
          {industries.map((ind) => (
            <div
              key={ind.id}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform var(--transition-fast)'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {ind.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                {ind.desc}
              </p>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.3rem' }}>
                  Core Components:
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {ind.products}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link
                  href="/products"
                  style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  Explore Products <ArrowRightIcon size={14} />
                </Link>
                <Link href="/quote" className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}>
                  Inquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
