'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SparklesIcon, CheckIcon, ArrowRightIcon } from './Icons';
import { Product } from '@/data/catalog';

interface AiAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiAdvisorModal({ isOpen, onClose }: AiAdvisorModalProps) {
  const [query, setQuery] = useState('');
  const [shaftDiameter, setShaftDiameter] = useState<string>('');
  const [speedRpm, setSpeedRpm] = useState<string>('');
  const [loadType, setLoadType] = useState<string>('normal');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    categoryTitle: string;
    explanation: string;
    engineeringTips: string[];
    suggestedProducts: Product[];
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          shaftDiameter: shaftDiameter ? parseFloat(shaftDiameter) : undefined,
          speedRpm: speedRpm ? parseFloat(speedRpm) : undefined,
          loadType
        })
      });
      const data = await res.json();
      if (data.recommendation) {
        setResult(data.recommendation);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickPrompt = (prompt: string, dia?: string, rpm?: string, load?: string) => {
    setQuery(prompt);
    if (dia) setShaftDiameter(dia);
    if (rpm) setSpeedRpm(rpm);
    if (load) setLoadType(load);
    setTimeout(() => {
      handleSubmit();
    }, 50);
  };

  return (
    <div className="advisor-overlay" onClick={onClose}>
      <div className="advisor-modal" onClick={e => e.stopPropagation()}>
        <div className="advisor-header">
          <div className="advisor-title-box">
            <span className="advisor-badge">
              <SparklesIcon size={16} /> Engineering Assistant
            </span>
            <h2>Bearing Selection AI Advisor</h2>
            <p>Input your machine parameters or search by operating conditions.</p>
          </div>
          <button className="advisor-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="advisor-body">
          {/* Quick Prompts */}
          <div className="quick-prompts">
            <span className="quick-label">Common Engineering Inquiries:</span>
            <div className="quick-pills">
              <button
                type="button"
                className="quick-pill"
                onClick={() => handleQuickPrompt('High speed CNC milling spindle bearing', '40', '18000', 'light')}
              >
                CNC Spindle (18,000 RPM)
              </button>
              <button
                type="button"
                className="quick-pill"
                onClick={() => handleQuickPrompt('Heavy shock load vibrating screen bearing', '70', '1500', 'heavy')}
              >
                Crusher / Vibrating Screen
              </button>
              <button
                type="button"
                className="quick-pill"
                onClick={() => handleQuickPrompt('Pillow block unit for conveyor shaft', '40', '1200', 'normal')}
              >
                Conveyor Pillow Block
              </button>
              <button
                type="button"
                className="quick-pill"
                onClick={() => handleQuickPrompt('High temperature bearing grease recommendation', '', '', '')}
              >
                High Temp Lubrication
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="advisor-form">
            <div className="advisor-input-group">
              <label>Application or Operational Requirement</label>
              <input
                type="text"
                placeholder="e.g. Electric motor drive-end, 50mm shaft, high temperature, low noise"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="advisor-input"
              />
            </div>

            <div className="advisor-params-grid">
              <div>
                <label>Shaft Diameter (mm)</label>
                <input
                  type="number"
                  placeholder="e.g. 50"
                  value={shaftDiameter}
                  onChange={e => setShaftDiameter(e.target.value)}
                  className="advisor-input"
                />
              </div>
              <div>
                <label>Operating Speed (RPM)</label>
                <input
                  type="number"
                  placeholder="e.g. 3000"
                  value={speedRpm}
                  onChange={e => setSpeedRpm(e.target.value)}
                  className="advisor-input"
                />
              </div>
              <div>
                <label>Primary Load Type</label>
                <select
                  value={loadType}
                  onChange={e => setLoadType(e.target.value)}
                  className="advisor-input"
                >
                  <option value="normal">Normal Radial Load</option>
                  <option value="heavy">Heavy / Shock Load</option>
                  <option value="combined">Combined Radial + Axial</option>
                  <option value="thrust">Predominantly Axial Thrust</option>
                </select>
              </div>
            </div>

            <button type="submit" className="advisor-submit-btn" disabled={loading}>
              {loading ? (
                'Analyzing Engineering Criteria...'
              ) : (
                <>
                  <SparklesIcon size={18} /> Run Bearing Selection Analysis
                </>
              )}
            </button>
          </form>

          {/* Result view */}
          {result && (
            <div className="advisor-result">
              <div className="result-category-header">
                <span className="result-tag">Recommended Category</span>
                <h3>{result.categoryTitle}</h3>
              </div>

              <p className="result-explanation">{result.explanation}</p>

              <div className="result-tips">
                <h4>Engineering Guidelines:</h4>
                <ul>
                  {result.engineeringTips.map((tip, idx) => (
                    <li key={idx}>
                      <CheckIcon size={16} /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {result.suggestedProducts.length > 0 && (
                <div className="result-products">
                  <h4>Recommended Part Designations:</h4>
                  <div className="result-products-grid">
                    {result.suggestedProducts.map(p => (
                      <div key={p.id} className="suggested-product-card">
                        <div className="prod-badge">{p.brand}</div>
                        <h5>{p.designation}</h5>
                        <p className="prod-type">{p.type}</p>
                        <div className="prod-specs">
                          {p.boreDiameter && <span>d: {p.boreDiameter}mm</span>}
                          {p.outsideDiameter && <span>D: {p.outsideDiameter}mm</span>}
                          {p.dynamicLoadRating && <span>C: {p.dynamicLoadRating}kN</span>}
                        </div>
                        <div className="prod-actions">
                          <Link
                            href={`/products`}
                            onClick={onClose}
                            className="btn-view"
                          >
                            Explore In Catalog <ArrowRightIcon size={14} />
                          </Link>
                          <Link
                            href={`/quote?part=${encodeURIComponent(p.designation)}`}
                            onClick={onClose}
                            className="btn-rfq"
                          >
                            Add to RFQ
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
