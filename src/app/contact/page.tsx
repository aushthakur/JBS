'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, ShieldCheckIcon, CheckIcon } from '@/app/components/Icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Technical Inquiry',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; inquiryId?: string; message?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ success: true, inquiryId: data.inquiryId, message: data.message });
        setFormData({ name: '', company: '', email: '', phone: '', subject: 'Technical Inquiry', message: '' });
      } else {
        setStatus({ success: false, message: data.error || 'Submission failed' });
      }
    } catch (err) {
      setStatus({ success: false, message: 'Network error. Please try again or reach our sales desk.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="bearing-hero-banner">
        <div className="container">
          <div className="hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1>Contact Engineering &amp; Sales</h1>
        </div>
      </section>

      <section className="sub-hero-editorial">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-left">
              <h2>Pan-India Distribution Network</h2>
            </div>
            <div className="editorial-right">
              <p>
                Headquartered in Kolkata with strategically located regional distribution centers across India, Jaiswal Bearing Store provides 24/7 technical engineering support and emergency breakdown stock fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Form */}
          <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', padding: '2.5rem', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Send Us a Message</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Our application engineers typically respond within 2 business hours.
            </p>

            {status?.success && (
              <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '1.5rem', borderRadius: '4px', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#065F46', fontWeight: 600, marginBottom: '0.25rem' }}>
                  <CheckIcon size={20} />
                  <span>Inquiry Submitted Successfully</span>
                </div>
                <p style={{ color: '#047857', fontSize: '0.9rem' }}>{status.message}</p>
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#065F46' }}>
                  Reference Tracking Number: <strong>{status.inquiryId}</strong>
                </div>
              </div>
            )}

            {status && !status.success && (
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', padding: '1rem', borderRadius: '4px', marginBottom: '2rem', color: '#991B1B', fontSize: '0.9rem' }}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px', fontSize: '0.95rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px', fontSize: '0.95rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px', fontSize: '0.95rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px', fontSize: '0.95rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px', fontSize: '0.95rem', background: '#FFFFFF' }}
                >
                  <option value="Technical Inquiry">Technical Inquiry &amp; Bearing Selection</option>
                  <option value="Price & Availability">Price &amp; Inventory Availability</option>
                  <option value="Bulk Industrial Contract">Annual Rate Contract (ARC) / Bulk Supply</option>
                  <option value="Breakdown Emergency">Plant Breakdown Emergency Dispatch</option>
                  <option value="Laser Alignment / Service">Engineering Service Request</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Requirement Details *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Specify part numbers (e.g. 6204, 22212, UCP 205), quantities, or technical application constraints..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-strong)', borderRadius: '2px', fontSize: '0.95rem', fontFamily: 'inherit' }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
              >
                {loading ? 'Submitting Inquiry...' : 'Submit Inquiry to Sales Engineering'}
              </button>
            </form>
          </div>

          {/* Contact Details & Warehouses */}
          <div>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', padding: '2rem', borderRadius: '4px', marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>National Headquarters</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <MapPinIcon size={20} className="text-muted" />
                  <div>
                    <strong>Jaiswal Bearing Store</strong>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      71A Netaji Subhas Road, Ground Floor<br />
                      Kolkata, West Bengal 700001, India
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <PhoneIcon size={20} className="text-muted" />
                  <div>
                    <strong>Sales Desk &amp; Hotline:</strong>
                    <p style={{ color: 'var(--text-secondary)' }}>+91 (033) 2242-XXXX / +91 98300 XXXXX</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <MailIcon size={20} className="text-muted" />
                  <div>
                    <strong>Direct Email:</strong>
                    <p style={{ color: 'var(--text-secondary)' }}>sales@jaiswalbearingstore.com</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <ClockIcon size={20} className="text-muted" />
                  <div>
                    <strong>Operating Hours:</strong>
                    <p style={{ color: 'var(--text-secondary)' }}>Mon &ndash; Sat: 9:30 AM &ndash; 7:30 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', padding: '2rem', borderRadius: '4px' }}>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>Regional Logistics Hubs</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <li>
                  <strong style={{ color: 'var(--text-primary)' }}>Western India (Mumbai Hub):</strong>
                  <div>Bhiwandi Logistics Park, Mumbai, Maharashtra</div>
                </li>
                <li>
                  <strong style={{ color: 'var(--text-primary)' }}>Northern India (Delhi NCR Hub):</strong>
                  <div>Okhla Industrial Area, Phase II, New Delhi</div>
                </li>
                <li>
                  <strong style={{ color: 'var(--text-primary)' }}>Southern India (Chennai Hub):</strong>
                  <div>Ambattur Industrial Estate, Chennai, Tamil Nadu</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
