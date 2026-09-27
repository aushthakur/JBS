import Link from 'next/link';
import { catalogData } from '@/data/catalog';
import { ArrowRightIcon } from '@/app/components/Icons';

export default function ProductsPage() {
  const topCategories = catalogData.children || [];

  return (
    <div className="products-index-page">
      <section className="bearing-hero-banner">
        <div className="container">
          <div className="hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </div>
          <h1>Products Universe</h1>
        </div>
      </section>

      <section className="sub-hero-editorial">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-left">
              <h2>Engineered Solutions for Rotating Equipment</h2>
            </div>
            <div className="editorial-right">
              <p>
                From standard deep groove ball bearings and rugged spherical roller assemblies to state-of-the-art active magnetic levitation and laser alignment instruments, explore India’s most comprehensive industrial catalog backed by genuine manufacturer certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-universe-section">
        <div className="container">
          <div className="universe-grid">
            {topCategories.map(cat => (
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

                  {cat.children && cat.children.length > 0 && (
                    <div style={{ marginBottom: '1.25rem' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
                        Includes:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {cat.children.slice(0, 4).map(sub => (
                          <span
                            key={sub.id}
                            style={{
                              fontSize: '0.78rem',
                              background: 'var(--bg-secondary)',
                              padding: '0.2rem 0.5rem',
                              borderRadius: '2px',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href={`/products/${cat.slug}`} className="universe-card-link">
                    <span>Explore {cat.name}</span>
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
