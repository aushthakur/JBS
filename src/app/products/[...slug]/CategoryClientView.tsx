'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Category, Product } from '@/data/catalog';
import { ArrowRightIcon, DownloadIcon, SparklesIcon, CheckIcon } from '@/app/components/Icons';
import AiAdvisorModal from '@/app/components/AiAdvisorModal';

interface CategoryClientViewProps {
  category: Category;
  directProducts: Product[];
  allSubProducts: Product[];
  currentHref: string;
}

export default function CategoryClientView({
  category,
  directProducts,
  allSubProducts,
  currentHref
}: CategoryClientViewProps) {
  const [isAiOpen, setAiOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'designation' | 'od' | 'bore' | 'load'>('od');
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const displayProducts = directProducts.length > 0 ? directProducts : allSubProducts;
  const hasProducts = displayProducts.length > 0;
  const hasChildren = category.children && category.children.length > 0;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return displayProducts
      .filter((p) => {
        const matchesQuery =
          p.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.type.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = brandFilter === 'all' || p.brand.toLowerCase() === brandFilter.toLowerCase();
        return matchesQuery && matchesBrand;
      })
      .sort((a, b) => {
        if (sortBy === 'od') {
          return (a.outsideDiameter || 0) - (b.outsideDiameter || 0);
        }
        if (sortBy === 'bore') {
          return (a.boreDiameter || 0) - (b.boreDiameter || 0);
        }
        if (sortBy === 'load') {
          return (b.dynamicLoadRating || 0) - (a.dynamicLoadRating || 0);
        }
        return a.designation.localeCompare(b.designation);
      });
  }, [displayProducts, searchTerm, brandFilter, sortBy]);

  // Format dimensions based on metric/imperial
  const formatDim = (mm?: number) => {
    if (mm === undefined) return '-';
    if (unitSystem === 'imperial') {
      return (mm / 25.4).toFixed(3) + ' in';
    }
    return mm + ' mm';
  };

  return (
    <>
      {/* If Intermediate Category with Children: Show Subcategories Grid */}
      {hasChildren && (
        <section className="products-universe-section">
          <div className="container">
            <h2 style={{ fontSize: '1.85rem', marginBottom: '1.5rem' }}>
              Categories within {category.name}
            </h2>
            <div className="universe-grid">
              {category.children!.map((child) => (
                <div className="universe-card" key={child.id}>
                  <div className="universe-card-img-wrapper">
                    {child.imageUrl ? (
                      <img src={child.imageUrl} alt={child.name} loading="lazy" />
                    ) : (
                      <img src="/images/catalog/rolling-bearings.png" alt={child.name} loading="lazy" />
                    )}
                  </div>
                  <div className="universe-card-body">
                    <h3>{child.name}</h3>
                    <p>{child.description}</p>
                    <Link href={`${currentHref}/${child.slug}`} className="universe-card-link">
                      <span>Explore {child.name}</span>
                      <ArrowRightIcon size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* If Category has Products: Show Product Header, Filter Bar & Technical Table (Matches media_1790504810958.png) */}
      {hasProducts && (
        <section className="technical-catalog-section">
          <div className="container">
            {/* Header snippet with product render if this is a leaf category */}
            {directProducts.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '3rem',
                  paddingBottom: '2.5rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '2.5rem',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ flex: 1, minWidth: 'min(300px, 100%)' }}>
                  <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{category.name}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {category.description}
                  </p>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.88rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                    <span>&bull; Designs and variants</span>
                    <span>&bull; Lubrication specs</span>
                    <span>&bull; Bearing tolerances</span>
                    <span>&bull; Dynamic loads</span>
                    <span>&bull; Temperature limits</span>
                  </div>
                </div>

                <div
                  style={{
                    width: '320px',
                    height: '220px',
                    overflow: 'hidden',
                    background: '#0E1217',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={category.imageUrl || '/images/products/ball-bearing-4k.jpg'}
                    alt={category.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  />
                </div>
              </div>
            )}

            {/* Filter Bar */}
            <div className="catalog-filter-bar">
              <div className="filter-bar-header">
                <span className="filter-bar-title">Technical Specifications Filter</span>
                <button
                  type="button"
                  onClick={() => { setSearchTerm(''); setBrandFilter('all'); }}
                  style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}
                >
                  Reset all
                </button>
              </div>

              <div className="filter-controls-grid">
                <div>
                  <input
                    type="text"
                    placeholder="Search designation (e.g. 6204, YAR)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="filter-input"
                  />
                </div>
                <div>
                  <select
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">All Series (JBS Industrial, Precision, Heavy Duty)</option>
                    <option value="jbs">JBS Certified</option>
                    <option value="precision">JBS High Precision</option>
                    <option value="heavyduty">JBS Heavy Duty</option>
                  </select>
                </div>
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="filter-select"
                  >
                    <option value="od">Sort: Outside diameter (Low to High)</option>
                    <option value="bore">Sort: Bore diameter (Low to High)</option>
                    <option value="load">Sort: Dynamic load capacity (High to Low)</option>
                    <option value="designation">Sort: Designation (A to Z)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Meta bar */}
            <div className="results-meta-bar">
              <div className="results-count">
                {filteredProducts.length} results matching criteria
              </div>
              <div className="results-units-toggle">
                <span>Display in:</span>
                <label className="toggle-option">
                  <input
                    type="radio"
                    name="unitSystem"
                    value="metric"
                    checked={unitSystem === 'metric'}
                    onChange={() => setUnitSystem('metric')}
                  />
                  <span>Metric</span>
                </label>
                <label className="toggle-option">
                  <input
                    type="radio"
                    name="unitSystem"
                    value="imperial"
                    checked={unitSystem === 'imperial'}
                    onChange={() => setUnitSystem('imperial')}
                  />
                  <span>Imperial</span>
                </label>
              </div>
            </div>

            {/* Technical Data Table */}
            <div className="data-table-container">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Designation</th>
                    <th>Outside diameter</th>
                    <th>Bore diameter</th>
                    <th>Width, total</th>
                    <th>Basic dynamic load (C)</th>
                    <th>Limiting speed</th>
                    <th>Brand</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((p) => (
                    <tr key={p.id}>
                      <td className="col-designation">
                        <button
                          type="button"
                          onClick={() => setSelectedProduct(p)}
                          style={{ color: 'var(--accent-primary)', fontWeight: 600, textAlign: 'left' }}
                        >
                          {p.designation}
                        </button>
                      </td>
                      <td>{formatDim(p.outsideDiameter)}</td>
                      <td>{formatDim(p.boreDiameter)}</td>
                      <td>{formatDim(p.width)}</td>
                      <td>{p.dynamicLoadRating !== undefined ? `${p.dynamicLoadRating} kN` : '-'}</td>
                      <td>{p.limitingSpeed !== undefined ? `${p.limitingSpeed.toLocaleString()} r/min` : '-'}</td>
                      <td>
                        <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{p.brand}</span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <Link
                            href={`/quote?part=${encodeURIComponent(p.designation)}`}
                            className="table-action-btn"
                          >
                            RFQ
                          </Link>
                          <button
                            type="button"
                            onClick={() => setSelectedProduct(p)}
                            className="table-action-btn"
                            title="Inspect Technical Drawings & Data"
                          >
                            Specs
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredProducts.length === 0 && (
                    <tr>
                      <td colSpan={8} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                        No products match your specific filter criteria. Submit an RFQ and our engineering department will source it.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Features & Benefits Technical Section (Matches media_1790504810958.png) */}
            <div className="features-benefits-section">
              <h3>Features and benefits</h3>
              <div className="features-grid">
                <div className="features-list">
                  <div>
                    <div className="feature-item-title">&bull; Quick and easy to mount</div>
                    <div className="feature-item-desc">
                      The different locking methods enable quick and easy mounting of insert and rolling bearings onto the shaft without damaging precision surfaces.
                    </div>
                  </div>
                  <div>
                    <div className="feature-item-title">&bull; Accommodate initial misalignment</div>
                    <div className="feature-item-desc">
                      The spherically shaped outside surface enables initial misalignment by tilting inside the housing without causing harmful edge stresses.
                    </div>
                  </div>
                  <div>
                    <div className="feature-item-title">&bull; Extended operating service life</div>
                    <div className="feature-item-desc">
                      Specialized NBR contact sealing solutions and flingers provide a long service life for a wide variety of industrial applications with heavy dust and liquid contamination.
                    </div>
                  </div>
                  <div>
                    <div className="feature-item-title">&bull; Reduced noise and vibration levels</div>
                    <div className="feature-item-desc">
                      Optimized raceway curvature, superfinished rolling elements, and tight internal clearance ratings ensure smooth, low-vibration operation.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <img
                    src="/images/catalog/shaft-mounting.png"
                    alt="Bearing Shaft Mounting Diagram"
                    style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }}
                  />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>
                    ISO 281 Misalignment &amp; Shaft Mounting Schematic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="advisor-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="advisor-modal" style={{ width: '680px', maxWidth: 'min(680px, 95vw)' }} onClick={(e) => e.stopPropagation()}>
            <div className="advisor-header">
              <div>
                <span className="advisor-badge">{selectedProduct.brand} Precision Component</span>
                <h2>{selectedProduct.designation}</h2>
                <p>{selectedProduct.type}</p>
              </div>
              <button className="advisor-close-btn" onClick={() => setSelectedProduct(null)}>✕</button>
            </div>
            <div className="advisor-body">
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {selectedProduct.shortDescription || 'Precision engineered bearing component built according to international ISO standards.'}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  background: 'var(--bg-secondary)',
                  padding: '1.5rem',
                  borderRadius: '4px',
                  marginBottom: '1.5rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Bore Diameter (d)</span>
                  <strong style={{ fontSize: '1.1rem' }}>{selectedProduct.boreDiameter ? `${selectedProduct.boreDiameter} mm` : 'N/A'}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Outside Diameter (D)</span>
                  <strong style={{ fontSize: '1.1rem' }}>{selectedProduct.outsideDiameter ? `${selectedProduct.outsideDiameter} mm` : 'N/A'}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Total Width (B)</span>
                  <strong style={{ fontSize: '1.1rem' }}>{selectedProduct.width ? `${selectedProduct.width} mm` : 'N/A'}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Dynamic Load (C)</span>
                  <strong style={{ fontSize: '1.1rem' }}>{selectedProduct.dynamicLoadRating ? `${selectedProduct.dynamicLoadRating} kN` : 'N/A'}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Static Load (C0)</span>
                  <strong style={{ fontSize: '1.1rem' }}>{selectedProduct.staticLoadRating ? `${selectedProduct.staticLoadRating} kN` : 'N/A'}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Limiting Speed</span>
                  <strong style={{ fontSize: '1.1rem' }}>{selectedProduct.limitingSpeed ? `${selectedProduct.limitingSpeed.toLocaleString()} r/min` : 'N/A'}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <Link
                  href={`/quote?part=${encodeURIComponent(selectedProduct.designation)}`}
                  onClick={() => setSelectedProduct(null)}
                  className="btn btn-blue"
                >
                  Request Official Quotation
                </Link>
                <button
                  type="button"
                  onClick={() => { setSelectedProduct(null); setAiOpen(true); }}
                  className="btn btn-secondary"
                >
                  <SparklesIcon size={16} /> Check Application Fit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <AiAdvisorModal isOpen={isAiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
