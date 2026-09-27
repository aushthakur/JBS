'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SearchIcon, ArrowRightIcon } from './Icons';
import { Product } from '@/data/catalog';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products?q=${encodeURIComponent(searchTerm)}`);
        const data = await res.json();
        setResults(data.products || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <SearchIcon size={22} className="search-icon-inside" />
          <input
            type="text"
            placeholder="Search part designation (e.g. 6204, 22212, UCP 205, LGMT 2, timing belt)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            autoFocus
            className="search-field"
          />
          <button className="search-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="search-results-list">
          {loading && <div className="search-loading">Searching technical catalog...</div>}

          {!loading && results.length > 0 && (
            <div className="search-items">
              <div className="search-results-count">{results.length} designations found</div>
              {results.map(prod => (
                <div key={prod.id} className="search-item">
                  <div className="search-item-info">
                    <span className="search-item-brand">{prod.brand}</span>
                    <span className="search-item-designation">{prod.designation}</span>
                    <span className="search-item-type">{prod.type}</span>
                    <div className="search-item-dims">
                      {prod.boreDiameter && <span>d={prod.boreDiameter}mm</span>}
                      {prod.outsideDiameter && <span>D={prod.outsideDiameter}mm</span>}
                      {prod.width && <span>B={prod.width}mm</span>}
                      {prod.dynamicLoadRating && <span>C={prod.dynamicLoadRating}kN</span>}
                    </div>
                  </div>
                  <div className="search-item-actions">
                    <Link
                      href={`/products`}
                      onClick={onClose}
                      className="search-link"
                    >
                      View <ArrowRightIcon size={14} />
                    </Link>
                    <Link
                      href={`/quote?part=${encodeURIComponent(prod.designation)}`}
                      onClick={onClose}
                      className="search-quote-btn"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && searchTerm && results.length === 0 && (
            <div className="search-empty">
              <p>No exact part designation match found for &ldquo;{searchTerm}&rdquo;.</p>
              <p className="search-empty-sub">We can source any non-standard industrial bearing or equivalent specification.</p>
              <Link
                href={`/quote?part=${encodeURIComponent(searchTerm)}`}
                onClick={onClose}
                className="btn btn-primary"
                style={{ display: 'inline-block', marginTop: '1rem' }}
              >
                Submit Custom RFQ for &ldquo;{searchTerm}&rdquo;
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
