'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckIcon, ShieldCheckIcon } from '@/app/components/Icons';

interface RfqItem {
  designation: string;
  quantity: number;
  brandPreference: string;
}

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const prefilledPart = searchParams.get('part') || '';

  const [contact, setContact] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    urgency: 'Standard'
  });

  const [items, setItems] = useState<RfqItem[]>([
    { designation: prefilledPart, quantity: 10, brandPreference: 'JBS Certified' }
  ]);

  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; rfqNumber?: string; message?: string } | null>(null);

  useEffect(() => {
    if (prefilledPart && items.length === 1 && !items[0].designation) {
      setItems([{ designation: prefilledPart, quantity: 10, brandPreference: 'JBS Certified' }]);
    }
  }, [prefilledPart]);

  const addItemRow = () => {
    setItems([...items, { designation: '', quantity: 1, brandPreference: 'JBS Certified' }]);
  };

  const removeItemRow = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const updateItem = (index: number, field: keyof RfqItem, value: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contact,
          items: items.filter(it => it.designation.trim().length > 0),
          notes
        })
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ success: true, rfqNumber: data.rfqNumber, message: data.message });
      } else {
        setResult({ success: false, message: data.error || 'Quotation request failed.' });
      }
    } catch (err) {
      setResult({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '3rem' }}>
      {result?.success ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div style={{ width: '60px', height: '60px', background: '#ECFDF5', color: '#059669', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <CheckIcon size={32} />
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Quotation Request Received</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
            {result.message}
          </p>
          <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '4px', display: 'inline-block', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Official RFQ Reference:</span>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-primary)', letterSpacing: '1px' }}>
              {result.rfqNumber}
            </div>
          </div>
          <div>
            <Link href="/products" className="btn btn-primary" style={{ marginRight: '1rem' }}>
              Continue Browsing Products
            </Link>
            <button
              onClick={() => setResult(null)}
              className="btn btn-secondary"
            >
              Submit Another RFQ
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>Direct RFQ Builder</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Submit part numbers, required quantities, and specifications. Our sales team provides commercial terms, dispatch lead times, and tax invoices.
            </p>
          </div>

          {result && !result.success && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', padding: '1rem', borderRadius: '4px', marginBottom: '2rem', color: '#991B1B' }}>
              {result.message}
            </div>
          )}

          {/* Contact Details */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.25rem' }}>1. Commercial &amp; Contact Details</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={contact.name}
                  onChange={e => setContact({ ...contact, name: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tata Steel / Jindal Power"
                  value={contact.company}
                  onChange={e => setContact({ ...contact, company: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. procurement@company.com"
                  value={contact.email}
                  onChange={e => setContact({ ...contact, email: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98300 XXXXX"
                  value={contact.phone}
                  onChange={e => setContact({ ...contact, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Delivery Destination / City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jamshedpur, Raipur, Pune"
                  value={contact.location}
                  onChange={e => setContact({ ...contact, location: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Requirement Urgency
                </label>
                <select
                  value={contact.urgency}
                  onChange={e => setContact({ ...contact, urgency: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px', background: '#FFFFFF' }}
                >
                  <option value="Standard">Standard Commercial Quote (Within 2 Hours)</option>
                  <option value="Breakdown">Critical Plant Breakdown (Express 30 Mins)</option>
                  <option value="Project">Project / Annual Rate Contract (ARC)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Part Numbers Table */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '1.1rem' }}>2. Product Line Items</h4>
              <button
                type="button"
                onClick={addItemRow}
                style={{ fontSize: '0.88rem', color: 'var(--accent-primary)', fontWeight: 600 }}
              >
                + Add Another Part
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1.5fr auto',
                    gap: '1rem',
                    alignItems: 'center',
                    background: 'var(--bg-secondary)',
                    padding: '0.75rem 1rem',
                    borderRadius: '4px'
                  }}
                >
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Part designation (e.g. 6204-2RSH, 22212 E, UCP 205)"
                      value={item.designation}
                      onChange={e => updateItem(idx, 'designation', e.target.value)}
                      style={{ width: '100%', padding: '0.6rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', background: '#FFFFFF' }}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      min={1}
                      required
                      placeholder="Qty"
                      value={item.quantity}
                      onChange={e => updateItem(idx, 'quantity', parseInt(e.target.value) || 1)}
                      style={{ width: '100%', padding: '0.6rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', background: '#FFFFFF' }}
                    />
                  </div>
                  <div>
                    <select
                      value={item.brandPreference}
                      onChange={e => updateItem(idx, 'brandPreference', e.target.value)}
                      style={{ width: '100%', padding: '0.6rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', background: '#FFFFFF' }}
                    >
                      <option value="JBS Certified">JBS Certified Stock</option>
                      <option value="JBS Heavy Duty">JBS Heavy Duty Industrial</option>
                      <option value="JBS Precision">JBS High Precision</option>
                      <option value="Tier-1 Equivalent">Tier-1 Equivalent</option>
                    </select>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeItemRow(idx)}
                      disabled={items.length === 1}
                      style={{ color: items.length === 1 ? '#D0D0D0' : '#DC2626', fontSize: '1.2rem', padding: '0.4rem' }}
                      title="Remove row"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
              Technical Specifications or Special Instructions (Optional)
            </label>
            <textarea
              rows={4}
              placeholder="e.g. Clearance class C3, Viton seals, brass cage, grease type, required delivery timeline..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px', fontFamily: 'inherit' }}
            ></textarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              <ShieldCheckIcon size={18} />
              <span>Certified Stock &bull; GST Invoices &bull; Test Reports Available</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-blue"
              style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
            >
              {loading ? 'Submitting RFQ...' : 'Submit Request for Quotation'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function QuotePage() {
  return (
    <div className="quote-page">
      <section className="bearing-hero-banner">
        <div className="container">
          <div className="hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Request a Quote</span>
          </div>
          <h1>Request a Formal Quotation</h1>
        </div>
      </section>

      <section className="sub-hero-editorial">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-left">
              <h2>Commercial Pricing &amp; Lead Times</h2>
            </div>
            <div className="editorial-right">
              <p>
                Industrial procurement requires fast, transparent pricing. Enter your part designations, quantities, and delivery targets. Our national sales desk confirms inventory availability and issues formal quotations promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '3rem' }}>Loading RFQ Form...</div>}>
          <QuoteFormContent />
        </Suspense>
      </section>
    </div>
  );
}
