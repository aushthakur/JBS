import Link from 'next/link';
import {
  WrenchIcon,
  GaugeIcon,
  ActivityIcon,
  RefreshCwIcon,
  DropletIcon,
  TruckIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from '@/app/components/Icons';

export default function ServicesPage() {
  const servicesList = [
    {
      id: 'selection',
      name: 'Bearing Selection & Application Engineering',
      icon: <WrenchIcon size={28} />,
      desc: 'Selecting the optimum bearing requires rigorous calculations of equivalent dynamic loads (P), required L10h rating life, operating viscosity ratio (κ), and shaft/housing fits. Our ISO-trained application engineers help you optimize bearing configuration, reducing premature fatigue and operating temperatures.'
    },
    {
      id: 'alignment',
      name: 'Laser Shaft Alignment & Geometry',
      icon: <GaugeIcon size={28} />,
      desc: 'Shaft misalignment is responsible for up to 50% of rotating machinery breakdowns. Using dual-detector wireless laser alignment systems, we eliminate angular and parallel offset across motor-pump and gearbox drives, reducing electrical power consumption and doubling mechanical seal life.'
    },
    {
      id: 'monitoring',
      name: 'Condition Monitoring & Vibration Diagnostics',
      icon: <ActivityIcon size={28} />,
      desc: 'Predictive maintenance using handheld vibration pens, accelerometers, and FFT spectral analyzers. We detect inner ring defect frequencies (BPFI), outer ring defects (BPFO), and cage degradation months before cataclysmic failure occurs.'
    },
    {
      id: 'remanufacturing',
      name: 'Bearing Remanufacturing & Refurbishment',
      icon: <RefreshCwIcon size={28} />,
      desc: 'For large spherical roller bearings, slewing rings, and backing bearings used in steel rolling mills, paper machines, and mining excavators, remanufacturing can extend bearing life up to 100% at up to 60% lower cost than purchasing new units, while drastically cutting carbon footprint.'
    },
    {
      id: 'lubrication',
      name: 'Automated Lubrication Audits',
      icon: <DropletIcon size={28} />,
      desc: 'Over-greasing and under-greasing both degrade bearing life. We provide automated lubrication audits, calculate relubrication intervals based on speed factor (ndm), and deploy gas-driven or electromechanical single-point automatic lubricators for continuous reliability.'
    },
    {
      id: 'logistics',
      name: 'Pan-India Express Logistics',
      icon: <TruckIcon size={28} />,
      desc: 'Strategic warehouses across Kolkata, Mumbai, Delhi, and Chennai ensure critical industrial units can be dispatched via air freight or express cargo for unscheduled plant shutdowns, minimizing costly production downtime.'
    }
  ];

  return (
    <div className="services-page">
      <section className="bearing-hero-banner">
        <div className="container">
          <div className="hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1>Industrial Engineering Services</h1>
        </div>
      </section>

      <section className="sub-hero-editorial">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-left">
              <h2>Reliability for Rotating Equipment</h2>
            </div>
            <div className="editorial-right">
              <p>
                A high-quality bearing can only achieve its theoretical calculated life when mounted properly, lubricated correctly, and aligned precisely. JBS provides comprehensive field engineering and diagnostic services to ensure maximum uptime across your industrial machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1.5fr 1fr' : '1fr 1.5fr',
                gap: '3.5rem',
                alignItems: 'center',
                padding: '3rem',
                background: index % 2 === 0 ? 'var(--bg-secondary)' : '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px'
              }}
            >
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <div style={{ width: '56px', height: '56px', background: '#FFFFFF', border: '1px solid var(--border-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', marginBottom: '1.25rem' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{service.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  {service.desc}
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link href="/contact" className="btn btn-primary">
                    Book Service Consultation
                  </Link>
                  <Link href="/quote" className="btn btn-secondary">
                    Request Pricing
                  </Link>
                </div>
              </div>

              <div
                style={{
                  order: index % 2 === 0 ? 2 : 1,
                  height: '320px',
                  background: '#0E1217',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  padding: 0,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={
                    index % 2 === 0
                      ? '/images/products/maintenance-4k.jpg'
                      : '/images/catalog/industrial-plant.jpg'
                  }
                  alt={service.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
