'use client'

import { useState, useEffect } from 'react'

// ─── IMAGES ───────────────────────────────────────────────────────────────────
const IMG = {
  hero:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85',
  pipe:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80',
  boiler:   'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
  radiator: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80',
  tools:    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&q=80',
  van:      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&q=80',
  leak:     'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80',
  bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80',
  kitchen:  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80',
  worker1:  'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80',
  worker2:  'https://images.unsplash.com/photo-1664575198308-3959904fa430?w=600&q=80',
  work1:    'https://images.unsplash.com/photo-1558618047-f4b2f5b0c7f8?w=700&q=80',
  work2:    'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=700&q=80',
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: '🔧', title: 'Boiler Installation & Repair',
    desc: 'Gas Safe registered engineers. New boiler installations, annual servicing, breakdowns and repairs on all major brands.',
    bullets: ['Same-day callouts available','All brands covered','10-year parts warranty'],
    price: 'From £85',
  },
  {
    icon: '🚿', title: 'Bathroom Fitting',
    desc: 'Full bathroom design and installation. From en-suite conversions to full wet rooms — supply and fit or fit only.',
    bullets: ['Free design consultation','Full project management','Tiling & plastering included'],
    price: 'From £1,200',
  },
  {
    icon: '💧', title: 'Leak Detection & Repair',
    desc: 'Trace and fix any leak fast — burst pipes, dripping taps, hidden leaks behind walls, overflows and more.',
    bullets: ['24/7 emergency response','No-damage leak detection','Fixed price, no surprises'],
    price: 'From £65',
  },
  {
    icon: '🌡️', title: 'Central Heating',
    desc: 'Complete central heating installations, power flushing, radiator replacements and full system upgrades.',
    bullets: ['System design & planning','Power flush service','Smart thermostat install'],
    price: 'From £120',
  },
  {
    icon: '🛁', title: 'Blocked Drains',
    desc: 'High-pressure jetting, CCTV drain surveys and full drain clearance for domestic and light commercial properties.',
    bullets: ['CCTV survey available','High-pressure jetting','No call-out fee'],
    price: 'From £65',
  },
  {
    icon: '🏠', title: 'General Plumbing',
    desc: 'Any job, any size. Tap repairs, toilet replacements, pipe lagging, cold water tanks, shower fittings and more.',
    bullets: ['All jobs considered','Hourly or fixed price','Tidy, respectful team'],
    price: 'From £55/hr',
  },
]

const REVIEWS = [
  { name: 'David H.',   area: 'Salford',    stars: 5, text: 'Boiler broke on a Friday evening. Swift Fix had an engineer at mine by 9am Saturday. Fixed in under 2 hours, fair price, no drama. Will use again without question.' },
  { name: 'Karen T.',   area: 'Manchester', stars: 5, text: 'Had a leak behind the bathroom wall I\'d been ignoring for months. Found it with no damage to the tiles. Professional from start to finish. Genuinely impressed.' },
  { name: 'Mark S.',    area: 'Eccles',     stars: 5, text: 'New bathroom fitted — wow. Completely transformed the space. The lads were tidy, polite, and finished a day ahead of schedule. Outstanding work.' },
  { name: 'Lena B.',    area: 'Stretford',  stars: 4, text: 'Called at 7am for a burst pipe. Someone was at the door by 8:30. Sorted quickly and the price was exactly as quoted. No hidden extras. Highly recommend.' },
]

const AREAS = ['Manchester City Centre','Salford','Eccles','Stretford','Trafford','Didsbury','Withington','Levenshulme','Stockport','Wythenshawe','Altrincham','Sale']

// ─── COLOURS ──────────────────────────────────────────────────────────────────
const C = {
  navy:    '#0c1829',
  navy2:   '#111f35',
  navy3:   '#172944',
  blue:    '#1a3a5c',
  yellow:  '#f5c518',
  yellowD: '#d4a917',
  white:   '#ffffff',
  offwhite:'#f4f6f9',
  muted:   '#8a9ab0',
  border:  'rgba(255,255,255,0.08)',
  borderL: '#dde3ec',
  ink:     '#0c1829',
  textL:   '#4a5568',
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function Stars({ n }: { n: number }) {
  return (
    <span>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i <= n ? C.yellow : 'none'} stroke={C.yellow} strokeWidth="2"
          style={{ display: 'inline', marginRight: 1 }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  )
}

// ─── EMERGENCY BANNER ─────────────────────────────────────────────────────────
function EmergencyBanner() {
  return (
    <div style={{ background: C.yellow, padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
      <span style={{ fontSize: 14, fontWeight: 800, color: C.navy, fontFamily: 'sans-serif', letterSpacing: '0.04em' }}>
        🚨 24/7 EMERGENCY PLUMBING
      </span>
      <span style={{ width: 1, height: 16, background: 'rgba(12,24,41,0.3)' }} />
      <a href="tel:01614789900"
        style={{ fontSize: 15, fontWeight: 900, color: C.navy, fontFamily: 'sans-serif', letterSpacing: '0.04em', textDecoration: 'none' }}>
        📞 0161 478 9900
      </a>
      <span style={{ width: 1, height: 16, background: 'rgba(12,24,41,0.3)' }} />
      <span style={{ fontSize: 13, fontWeight: 600, color: C.navy, fontFamily: 'sans-serif' }}>
        No call-out fee · Same-day response
      </span>
    </div>
  )
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ onQuote }: { onQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mOpen, setMOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => { setMOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  const links = [['home','Home'],['services','Services'],['about','About Us'],['areas','Areas'],['reviews','Reviews'],['contact','Contact']]

  return (
    <nav style={{
      position: 'fixed', top: 35, left: 0, right: 0, zIndex: 900,
      background: scrolled ? 'rgba(12,24,41,0.98)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.35s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <div onClick={() => go('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 42, height: 42, background: C.yellow, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🔧</div>
          <div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 17, fontWeight: 900, color: '#fff', letterSpacing: '0.01em', lineHeight: 1.1 }}>Swift Fix</div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 10, color: C.yellow, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 1 }}>Plumbing & Heating</div>
          </div>
        </div>

        {/* Desktop */}
        <div className="sf-desktop-nav" style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
          {links.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 13.5, cursor: 'pointer', letterSpacing: '0.04em', fontFamily: 'sans-serif', transition: 'color 0.2s', padding: 0 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.yellow }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
            >{label}</button>
          ))}
          <a href="tel:01614789900"
            style={{ background: 'none', border: `1.5px solid ${C.yellow}`, color: C.yellow, padding: '9px 18px', borderRadius: 4, fontSize: 13.5, fontWeight: 700, cursor: 'pointer', letterSpacing: '0.04em', fontFamily: 'sans-serif', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.yellow; el.style.color = C.navy }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'none'; el.style.color = C.yellow }}
          >📞 0161 478 9900</a>
          <button onClick={onQuote}
            style={{ background: C.yellow, border: 'none', color: C.navy, padding: '9px 20px', borderRadius: 4, fontSize: 13.5, fontWeight: 800, cursor: 'pointer', letterSpacing: '0.04em', fontFamily: 'sans-serif', transition: 'background 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.yellowD }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.yellow }}
          >Free Quote</button>
        </div>

        <button onClick={() => setMOpen(o => !o)} className="sf-hamburger"
          style={{ display: 'none', background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer' }}>
          {mOpen ? '✕' : '☰'}
        </button>
      </div>

      {mOpen && (
        <div style={{ background: C.navy2, borderTop: '1px solid rgba(255,255,255,0.07)', padding: '16px 28px 24px' }}>
          {links.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}
              style={{ display: 'block', background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)', fontSize: 16, cursor: 'pointer', padding: '11px 0', width: '100%', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)', fontFamily: 'sans-serif' }}>
              {label}
            </button>
          ))}
          <a href="tel:01614789900"
            style={{ display: 'block', marginTop: 12, width: '100%', background: 'none', border: `1.5px solid ${C.yellow}`, color: C.yellow, padding: '12px', borderRadius: 4, fontSize: 15, fontWeight: 700, textAlign: 'center', fontFamily: 'sans-serif', textDecoration: 'none', boxSizing: 'border-box' }}>
            📞 0161 478 9900
          </a>
          <button onClick={onQuote}
            style={{ marginTop: 10, width: '100%', background: C.yellow, border: 'none', color: C.navy, padding: '13px', borderRadius: 4, fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'sans-serif' }}>
            Get a Free Quote
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .sf-desktop-nav { display: none !important; }
          .sf-hamburger   { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 35 }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${IMG.hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(12,24,41,0.97) 0%, rgba(12,24,41,0.85) 50%, rgba(12,24,41,0.5) 100%)' }} />

      {/* Diagonal yellow accent bar */}
      <div style={{ position: 'absolute', top: 0, right: '28%', width: 5, height: '100%', background: C.yellow, opacity: 0.25, transform: 'skewX(-8deg)' }} />
      <div style={{ position: 'absolute', top: 0, right: '30%', width: 2, height: '100%', background: C.yellow, opacity: 0.12, transform: 'skewX(-8deg)' }} />

      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '100px 32px 80px', width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }} className="sf-hero-grid">

        {/* Left content */}
        <div style={{ maxWidth: 640 }}>
          {/* Trust badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(245,197,24,0.12)', border: `1px solid rgba(245,197,24,0.3)`, borderRadius: 4, padding: '8px 16px', marginBottom: 28 }}>
            <span style={{ fontSize: 13 }}>✅</span>
            <span style={{ fontFamily: 'sans-serif', fontSize: 12, color: C.yellow, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              Gas Safe Registered · Fully Insured · 15+ Years Experience
            </span>
          </div>

          <h1 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(36px,6vw,74px)', fontWeight: 900, color: '#fff', lineHeight: 1.0, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Manchester's<br />
            <span style={{ color: C.yellow }}>Most Trusted</span><br />
            Plumber
          </h1>

          <p style={{ fontFamily: 'sans-serif', fontSize: 'clamp(15px,1.8vw,18px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 40, maxWidth: 500, fontWeight: 300 }}>
            Boiler breakdowns, burst pipes, bathroom fits, central heating — any job, any size, any time. Available 24/7 across Greater Manchester with no call-out fee.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="tel:01614789900"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: C.yellow, border: 'none', color: C.navy, padding: '16px 32px', borderRadius: 4, fontSize: 16, fontWeight: 900, cursor: 'pointer', letterSpacing: '0.02em', fontFamily: 'sans-serif', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.yellowD }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.yellow }}
            >📞 Call Now — 24/7</a>
            <button onClick={onQuote}
              style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.3)', color: '#fff', padding: '16px 32px', borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: 'pointer', letterSpacing: '0.04em', fontFamily: 'sans-serif', transition: 'border-color 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = C.yellow; el.style.color = C.yellow }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.3)'; el.style.color = '#fff' }}
            >Get a Free Quote</button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 0, marginTop: 64, flexWrap: 'wrap' }}>
            {[['500+','Jobs this year'],['4.9★','Google rating'],['< 1hr','Emergency response'],['15yrs','In Manchester']].map(([n, l], i) => (
              <div key={l} style={{ paddingRight: 28, marginRight: 28, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none', marginBottom: 12 }}>
                <div style={{ fontFamily: 'sans-serif', fontSize: 28, fontWeight: 900, color: C.yellow, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — trust card */}
        <div className="sf-trust-card" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '28px 24px', minWidth: 220 }}>
          <div style={{ fontSize: 11, fontFamily: 'sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.yellow, marginBottom: 18 }}>Why Choose Us</div>
          {[
            ['✅', 'Gas Safe Registered'],
            ['✅', 'Fully Insured (£2M)'],
            ['✅', 'No Call-Out Fee'],
            ['✅', '24/7 Emergency'],
            ['✅', 'Fixed Price Quotes'],
            ['✅', 'DBS Checked Engineers'],
            ['✅', 'Tidy & Respectful'],
            ['✅', '1-Year Workmanship Guarantee'],
          ].map(([ic, t]) => (
            <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: 13 }}>{ic}</span>
              <span style={{ fontFamily: 'sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,0.82)', fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sf-hero-grid { grid-template-columns: 1fr !important; }
          .sf-trust-card { display: none !important; }
        }
      `}</style>
    </section>
  )
}

// ─── TRUST BAR ────────────────────────────────────────────────────────────────
function TrustBar() {
  return (
    <div style={{ background: C.navy2, borderTop: `3px solid ${C.yellow}`, padding: '22px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        {[
          ['🔒', 'Gas Safe Registered', '#202635'],
          ['🛡️', 'Fully Insured to £2M', '#202635'],
          ['⚡', 'Same-Day Response', '#202635'],
          ['💷', 'No Hidden Charges', '#202635'],
          ['⭐', '4.9 Google Rating', '#202635'],
        ].map(([ic, t]) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 20 }}>{ic}</span>
            <span style={{ fontFamily: 'sans-serif', fontSize: 13.5, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.02em' }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function Services({ onQuote }: { onQuote: () => void }) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="services" style={{ background: C.offwhite, padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start', marginBottom: 64 }} className="sf-2col">
          <div>
            <div style={{ display: 'inline-block', background: C.yellow, color: C.navy, fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 3, marginBottom: 16, fontFamily: 'sans-serif' }}>
              What We Do
            </div>
            <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: C.ink, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Every Job.<br />Done Right.
            </h2>
          </div>
          <p style={{ fontFamily: 'sans-serif', fontSize: 16, color: C.textL, lineHeight: 1.8, fontWeight: 300, alignSelf: 'end' }}>
            From a dripping tap to a full bathroom installation — we handle all domestic plumbing and heating jobs across Greater Manchester. Fully qualified, fully insured, and always on time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 2 }}>
          {SERVICES.map((s, i) => (
            <div key={s.title}
              style={{ background: C.white, padding: '32px', cursor: 'pointer', transition: 'all 0.25s', borderLeft: active === i ? `4px solid ${C.yellow}` : '4px solid transparent', position: 'relative' }}
              onMouseEnter={e => { setActive(i); (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)' }}
              onMouseLeave={e => { setActive(null); (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div style={{ fontSize: 32 }}>{s.icon}</div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 13, fontWeight: 800, color: C.navy, background: active === i ? C.yellow : C.offwhite, padding: '4px 12px', borderRadius: 3, transition: 'all 0.2s' }}>{s.price}</div>
              </div>
              <h3 style={{ fontFamily: 'sans-serif', fontSize: 19, fontWeight: 800, color: C.ink, marginBottom: 10, letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ fontFamily: 'sans-serif', fontSize: 14, color: C.textL, lineHeight: 1.7, marginBottom: 18, fontWeight: 300 }}>{s.desc}</p>
              <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'sans-serif', fontSize: 13, color: C.textL, marginBottom: 6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.yellow, flexShrink: 0, display: 'inline-block' }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, background: C.navy, borderRadius: 6, padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 20, fontWeight: 900, color: '#fff', marginBottom: 6 }}>Not sure what you need? Call us — we'll advise for free.</div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>No obligation, no pressure. We'll tell you exactly what your job needs and give you a fixed price.</div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="tel:01614789900"
              style={{ background: C.yellow, color: C.navy, padding: '13px 28px', borderRadius: 4, fontSize: 15, fontWeight: 800, textDecoration: 'none', fontFamily: 'sans-serif', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>
              📞 Call Now
            </a>
            <button onClick={onQuote}
              style={{ background: 'transparent', border: `1.5px solid rgba(255,255,255,0.25)`, color: '#fff', padding: '13px 28px', borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'sans-serif', whiteSpace: 'nowrap', transition: 'border-color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.yellow; (e.currentTarget as HTMLElement).style.color = C.yellow }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
            >Get a Free Quote</button>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .sf-2col { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
    </section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ background: C.navy, padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="sf-about-grid">

          {/* Images */}
          <div style={{ position: 'relative', height: 520 }}>
            <img src={IMG.pipe} alt="Plumber at work"
              style={{ position: 'absolute', top: 0, left: 0, width: '70%', height: '65%', objectFit: 'cover', borderRadius: 6 }} />
            <img src={IMG.tools} alt="Tools"
              style={{ position: 'absolute', bottom: 0, right: 0, width: '60%', height: '55%', objectFit: 'cover', borderRadius: 6, border: `5px solid ${C.navy}` }} />
            {/* Yellow accent block */}
            <div style={{ position: 'absolute', bottom: '25%', left: '55%', transform: 'translateX(-50%)', background: C.yellow, borderRadius: 4, padding: '16px 20px', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
              <div style={{ fontFamily: 'sans-serif', fontSize: 30, fontWeight: 900, color: C.navy, lineHeight: 1 }}>15+</div>
              <div style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 700, color: C.navy, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>Years in<br/>Manchester</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div style={{ display: 'inline-block', background: C.yellow, color: C.navy, fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 3, marginBottom: 20, fontFamily: 'sans-serif' }}>
              About Us
            </div>
            <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Local Plumbers.<br /><span style={{ color: C.yellow }}>Real Experience.</span>
            </h2>
            <p style={{ fontFamily: 'sans-serif', fontSize: 15.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: 20, fontWeight: 300 }}>
              Swift Fix was founded in 2009 by Dave Garner, a Manchester-born plumber with over 15 years on the tools. What started as a one-van operation has grown into a team of 8 Gas Safe registered engineers covering the whole of Greater Manchester.
            </p>
            <p style={{ fontFamily: 'sans-serif', fontSize: 15.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: 36, fontWeight: 300 }}>
              We've never compromised on what matters: showing up on time, doing the job properly, and leaving your home as clean as we found it. Every engineer on our team is DBS checked, fully insured, and Gas Safe registered.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[['Gas Safe','Registered engineers'],['£2M','Public liability cover'],['8','Qualified engineers'],['500+','Jobs completed 2024']].map(([n, l]) => (
                <div key={l} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '16px 18px' }}>
                  <div style={{ fontFamily: 'sans-serif', fontSize: 22, fontWeight: 900, color: C.yellow, lineHeight: 1, marginBottom: 4 }}>{n}</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .sf-about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  )
}

// ─── PROCESS ──────────────────────────────────────────────────────────────────
function Process({ onQuote }: { onQuote: () => void }) {
  const steps = [
    { n: '01', title: 'Call or Request a Quote', desc: 'Call us on 0161 478 9900 or fill in the quote form. We\'ll ask a few quick questions about the job.' },
    { n: '02', title: 'We Give You a Fixed Price', desc: 'No vague estimates. We give you a fixed price before we start — no surprises on the invoice.' },
    { n: '03', title: 'Engineer Arrives on Time', desc: 'We\'ll confirm a time slot and stick to it. Our engineers carry ID and are fully uniformed.' },
    { n: '04', title: 'Job Done. Guaranteed.', desc: 'We complete the work cleanly and efficiently, then hand you a workmanship guarantee in writing.' },
  ]

  return (
    <section style={{ background: C.offwhite, padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-block', background: C.yellow, color: C.navy, fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 3, marginBottom: 16, fontFamily: 'sans-serif' }}>How It Works</div>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Simple. Transparent. Done.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }} className="sf-steps">
          {steps.map((s, i) => (
            <div key={s.n} style={{ background: C.white, padding: '32px 24px', position: 'relative', borderTop: `3px solid ${i === 0 ? C.yellow : C.borderL}`, transition: 'border-color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderTopColor = C.yellow }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderTopColor = i === 0 ? C.yellow : C.borderL }}
            >
              <div style={{ fontFamily: 'sans-serif', fontSize: 48, fontWeight: 900, color: 'rgba(12,24,41,0.07)', lineHeight: 1, marginBottom: 16 }}>{s.n}</div>
              <h3 style={{ fontFamily: 'sans-serif', fontSize: 17, fontWeight: 800, color: C.ink, marginBottom: 12, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ fontFamily: 'sans-serif', fontSize: 13.5, color: C.textL, lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{s.desc}</p>
              {i < 3 && (
                <div style={{ position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)', zIndex: 1, background: C.yellow, width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900 }}>→</div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button onClick={onQuote}
            style={{ background: C.navy, border: 'none', color: '#fff', padding: '15px 40px', borderRadius: 4, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'sans-serif', letterSpacing: '0.04em', transition: 'background 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.blue }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.navy }}
          >Get Your Free Fixed Quote →</button>
        </div>
      </div>
      <style>{`@media (max-width: 860px) { .sf-steps { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </section>
  )
}

// ─── AREAS ────────────────────────────────────────────────────────────────────
function Areas({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="areas" style={{ background: C.navy3, padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="sf-areas-grid">
        <div>
          <div style={{ display: 'inline-block', background: C.yellow, color: C.navy, fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 3, marginBottom: 20, fontFamily: 'sans-serif' }}>Coverage</div>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}>
            We Cover All of<br /><span style={{ color: C.yellow }}>Greater Manchester</span>
          </h2>
          <p style={{ fontFamily: 'sans-serif', fontSize: 15.5, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 36, fontWeight: 300 }}>
            Our engineers are based across the city so we can always get to you fast. Most emergency callouts are attended within 60 minutes.
          </p>
          <button onClick={onQuote}
            style={{ background: C.yellow, border: 'none', color: C.navy, padding: '13px 30px', borderRadius: 4, fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: 'sans-serif', letterSpacing: '0.04em', transition: 'background 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.yellowD }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.yellow }}
          >Check If We Cover Your Area</button>
        </div>

        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {AREAS.map(area => (
              <div key={area}
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '12px 14px', fontFamily: 'sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.75)', transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(245,197,24,0.12)'; el.style.borderColor = 'rgba(245,197,24,0.3)'; el.style.color = C.yellow }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.05)'; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.color = 'rgba(255,255,255,0.75)' }}
              >
                <span style={{ marginRight: 6, fontSize: 11 }}>📍</span>{area}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, fontFamily: 'sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
            + surrounding areas. Not sure? Just call — we'll confirm instantly.
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 860px) { .sf-areas-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  )
}

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
function Reviews() {
  return (
    <section id="reviews" style={{ background: C.offwhite, padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ display: 'inline-block', background: C.yellow, color: C.navy, fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 3, marginBottom: 16, fontFamily: 'sans-serif' }}>Customer Reviews</div>
            <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Don't Take<br />Our Word For It
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <Stars n={5} />
            <div style={{ fontFamily: 'sans-serif', fontSize: 32, fontWeight: 900, color: C.ink }}>4.9/5</div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 13, color: C.textL }}>Based on 186 Google reviews</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 16 }}>
          {REVIEWS.map(r => (
            <div key={r.name}
              style={{ background: C.white, border: `1px solid ${C.borderL}`, borderRadius: 4, padding: '26px', borderTop: `3px solid transparent`, transition: 'all 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderTopColor = C.yellow; el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderTopColor = 'transparent'; el.style.boxShadow = 'none' }}
            >
              <Stars n={r.stars} />
              <p style={{ fontFamily: 'sans-serif', fontSize: 14.5, color: C.textL, lineHeight: 1.75, margin: '14px 0 20px', fontWeight: 300 }}>"{r.text}"</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.borderL}`, paddingTop: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', fontSize: 14, fontWeight: 700, color: C.yellow }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'sans-serif', fontSize: 13.5, fontWeight: 700, color: C.ink }}>{r.name}</div>
                    <div style={{ fontFamily: 'sans-serif', fontSize: 12, color: C.muted }}>{r.area}</div>
                  </div>
                </div>
                <div style={{ background: C.offwhite, borderRadius: 3, padding: '3px 10px' }}>
                  <span style={{ fontFamily: 'sans-serif', fontSize: 11, color: C.textL }}>Google ★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="contact" style={{ background: C.navy, padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="sf-contact-grid">
        <div>
          <div style={{ display: 'inline-block', background: C.yellow, color: C.navy, fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 3, marginBottom: 20, fontFamily: 'sans-serif' }}>Contact</div>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Got a Job in Mind?<br /><span style={{ color: C.yellow }}>Let's Talk.</span>
          </h2>
          <p style={{ fontFamily: 'sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
            Call for emergencies. Use the form for quotes and non-urgent bookings. We respond to all enquiries within 2 hours during business hours.
          </p>

          {/* Emergency CTA */}
          <div style={{ background: 'rgba(245,197,24,0.1)', border: `1.5px solid rgba(245,197,24,0.3)`, borderRadius: 6, padding: '20px 24px', marginBottom: 32 }}>
            <div style={{ fontFamily: 'sans-serif', fontSize: 13, fontWeight: 700, color: C.yellow, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>🚨 Emergency? Call Now</div>
            <a href="tel:01614789900" style={{ fontFamily: 'sans-serif', fontSize: 30, fontWeight: 900, color: '#fff', textDecoration: 'none', letterSpacing: '-0.01em' }}>0161 478 9900</a>
            <div style={{ fontFamily: 'sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>24/7 · No call-out fee · Usually on site within 1 hour</div>
          </div>

          {[['✉️','Email','hello@swiftfixplumbing.co.uk'],['📍','Based in','Salford, Greater Manchester'],['🕐','Office hours','Mon–Fri 7am–7pm · Sat 8am–5pm\nEmergency line 24/7']].map(([ic, l, v]) => (
            <div key={l} style={{ display: 'flex', gap: 14, marginBottom: 20, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 18, marginTop: 2 }}>{ic}</span>
              <div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, color: C.yellow, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 3 }}>{l}</div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', whiteSpace: 'pre-line', lineHeight: 1.65, fontWeight: 300 }}>{v}</div>
              </div>
            </div>
          ))}
        </div>

        <QuoteForm />
      </div>
      <style>{`@media (max-width: 900px) { .sf-contact-grid { grid-template-columns: 1fr !important; gap: 56px !important; } }`}</style>
    </section>
  )
}

function QuoteForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', postcode: '', message: '' })
  const [sent, setSent] = useState(false)
  const h = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const inputStyle = { display: 'block', width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, color: '#fff', fontSize: 14, fontFamily: 'sans-serif', fontWeight: 300, boxSizing: 'border-box' as const }

  return (
    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: '36px 32px' }}>
      <h3 style={{ fontFamily: 'sans-serif', fontSize: 22, fontWeight: 900, color: '#fff', marginBottom: 6, letterSpacing: '-0.01em' }}>Get a Free Quote</h3>
      <p style={{ fontFamily: 'sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 24, fontWeight: 300 }}>We'll reply within 2 hours with a fixed price.</p>

      {sent ? (
        <div style={{ textAlign: 'center', padding: '48px 0' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
          <div style={{ fontFamily: 'sans-serif', fontSize: 22, fontWeight: 900, color: '#fff', marginBottom: 8 }}>Quote Request Sent!</div>
          <div style={{ fontFamily: 'sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.7 }}>We'll get back to you within 2 hours<br />with a fixed price for your job.</div>
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <input name="name" value={form.name} onChange={h} placeholder="Full name" required style={inputStyle} />
            <input name="phone" value={form.phone} onChange={h} placeholder="Phone number" type="tel" style={inputStyle} />
          </div>
          <input name="email" value={form.email} onChange={h} placeholder="Email address" type="email" style={{ ...inputStyle, marginBottom: 12 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <select name="service" value={form.service} onChange={h}
              style={{ ...inputStyle, color: form.service ? '#fff' : 'rgba(255,255,255,0.35)' }}>
              <option value="" disabled>Service needed</option>
              {SERVICES.map(s => <option key={s.title} value={s.title} style={{ background: C.navy2, color: '#fff' }}>{s.title}</option>)}
            </select>
            <input name="postcode" value={form.postcode} onChange={h} placeholder="Your postcode" style={inputStyle} />
          </div>
          <textarea name="message" value={form.message} onChange={h} placeholder="Tell us about the job..." rows={4}
            style={{ ...inputStyle, resize: 'vertical', marginBottom: 20 }} />
          <button type="submit"
            style={{ width: '100%', padding: '14px', background: C.yellow, border: 'none', borderRadius: 4, color: C.navy, fontSize: 15, fontWeight: 900, cursor: 'pointer', letterSpacing: '0.04em', fontFamily: 'sans-serif', transition: 'background 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.yellowD }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.yellow }}
          >Send Quote Request →</button>
          <p style={{ fontFamily: 'sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: 12, fontWeight: 300 }}>
            No obligation · Fixed price quote · Reply within 2 hours
          </p>
        </form>
      )}
    </div>
  )
}

// ─── QUOTE MODAL ──────────────────────────────────────────────────────────────
function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false)
  if (!open) return null

  const inputStyle = { display: 'block', width: '100%', padding: '11px 13px', marginBottom: 10, background: C.offwhite, border: `1px solid ${C.borderL}`, borderRadius: 4, color: C.ink, fontSize: 14, fontFamily: 'sans-serif', boxSizing: 'border-box' as const }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, background: 'rgba(12,24,41,0.85)' }} onClick={onClose}>
      <div style={{ background: C.white, borderRadius: 6, padding: '36px 32px', maxWidth: 420, width: '100%', maxHeight: '90vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: 52, marginBottom: 14 }}>✅</div>
            <h3 style={{ fontFamily: 'sans-serif', fontSize: 22, fontWeight: 900, color: C.ink, marginBottom: 8 }}>Quote Request Sent!</h3>
            <p style={{ fontFamily: 'sans-serif', fontSize: 14, color: C.textL, fontWeight: 300, lineHeight: 1.7, marginBottom: 24 }}>We'll get back to you with a fixed price within 2 hours.</p>
            <button onClick={onClose} style={{ background: C.navy, border: 'none', color: '#fff', padding: '12px 28px', borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'sans-serif' }}>Close</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div>
                <h3 style={{ fontFamily: 'sans-serif', fontSize: 22, fontWeight: 900, color: C.ink, marginBottom: 2 }}>Get a Free Quote</h3>
                <p style={{ fontFamily: 'sans-serif', fontSize: 13, color: C.muted, fontWeight: 300 }}>Fixed price · No obligation · 2hr response</p>
              </div>
              <button onClick={onClose} style={{ background: 'none', border: 'none', color: C.muted, fontSize: 22, cursor: 'pointer', lineHeight: 1, padding: '0 0 0 12px' }}>✕</button>
            </div>
            <div style={{ background: C.yellow, borderRadius: 4, padding: '12px 16px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 18 }}>🚨</span>
              <div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 12, fontWeight: 800, color: C.navy, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Emergency? Call instead</div>
                <a href="tel:01614789900" style={{ fontFamily: 'sans-serif', fontSize: 16, fontWeight: 900, color: C.navy, textDecoration: 'none' }}>0161 478 9900 — 24/7</a>
              </div>
            </div>
            <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
              <input name="name" placeholder="Your name" required style={inputStyle} />
              <input name="phone" placeholder="Phone number" type="tel" style={inputStyle} />
              <select name="service" defaultValue="" style={{ ...inputStyle, color: C.textL }}>
                <option value="" disabled>What do you need?</option>
                {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
              <input name="postcode" placeholder="Postcode" style={inputStyle} />
              <textarea placeholder="Brief description of the job" rows={3}
                style={{ ...inputStyle, resize: 'vertical', marginBottom: 16 }} />
              <button type="submit"
                style={{ width: '100%', padding: '14px', background: C.navy, border: 'none', borderRadius: 4, color: '#fff', fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'sans-serif', transition: 'background 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.blue }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.navy }}
              >Send Quote Request →</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ onQuote }: { onQuote: () => void }) {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer style={{ background: C.navy2, borderTop: `4px solid ${C.yellow}`, padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 52, paddingBottom: 52, borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="sf-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 38, height: 38, background: C.yellow, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🔧</div>
              <div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 17, fontWeight: 900, color: '#fff' }}>Swift Fix</div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 10, color: C.yellow, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Plumbing & Heating</div>
              </div>
            </div>
            <p style={{ fontFamily: 'sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,0.38)', lineHeight: 1.8, maxWidth: 260, fontWeight: 300 }}>
              Gas Safe registered plumbers and heating engineers covering Greater Manchester since 2009.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="tel:01614789900"
                style={{ background: C.yellow, color: C.navy, padding: '10px 20px', borderRadius: 4, fontSize: 13, fontWeight: 800, textDecoration: 'none', fontFamily: 'sans-serif' }}>
                📞 Emergency Line
              </a>
              <button onClick={onQuote}
                style={{ background: 'transparent', border: `1.5px solid rgba(255,255,255,0.2)`, color: 'rgba(255,255,255,0.7)', padding: '10px 20px', borderRadius: 4, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'sans-serif', transition: 'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = C.yellow; el.style.color = C.yellow }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.2)'; el.style.color = 'rgba(255,255,255,0.7)' }}
              >Get a Quote</button>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.yellow, marginBottom: 16 }}>Services</div>
            {SERVICES.map(s => (
              <button key={s.title} onClick={() => go('services')}
                style={{ display: 'block', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 13, cursor: 'pointer', padding: '4px 0', textAlign: 'left', fontFamily: 'sans-serif', transition: 'color 0.2s', fontWeight: 300 }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = C.yellow }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)' }}
              >{s.title}</button>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.yellow, marginBottom: 16 }}>Navigate</div>
            {['Home','Services','About Us','Areas','Reviews','Contact'].map(l => (
              <button key={l} onClick={() => go(l.toLowerCase().replace(' ','-').replace(' us',''))}
                style={{ display: 'block', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 13, cursor: 'pointer', padding: '5px 0', textAlign: 'left', fontFamily: 'sans-serif', transition: 'color 0.2s', fontWeight: 300 }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = C.yellow }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)' }}
              >{l}</button>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.yellow, marginBottom: 16 }}>Contact</div>
            {[['📞','0161 478 9900','24/7 Emergency'],['✉️','hello@swiftfixplumbing.co.uk',''],['📍','Salford, Greater Manchester','Gas Safe No. 123456'],['🕐','Mon–Fri 7am–7pm','Sat 8am–5pm']].map(([ic, v, sub]) => (
              <div key={v} style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 13 }}>{ic}</span>
                <div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{v}</div>
                  {sub && <div style={{ fontFamily: 'sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontFamily: 'sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
            © 2024 Swift Fix Plumbing & Heating Ltd. Gas Safe Reg. No. 123456. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Privacy Policy','Terms','Cookie Policy'].map(l => (
              <span key={l} style={{ fontFamily: 'sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.2)', cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .sf-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 560px) { .sf-footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}

// ─── ROOT ──────────────────────────────────────────────────────────────────────
export default function SwiftFix() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <div style={{ background: C.offwhite }}>
      <EmergencyBanner />
      <Navbar onQuote={() => setQuoteOpen(true)} />
      <Hero onQuote={() => setQuoteOpen(true)} />
      <TrustBar />
      <Services onQuote={() => setQuoteOpen(true)} />
      <About />
      <Process onQuote={() => setQuoteOpen(true)} />
      <Areas onQuote={() => setQuoteOpen(true)} />
      <Reviews />
      <Contact onQuote={() => setQuoteOpen(true)} />
      <Footer onQuote={() => setQuoteOpen(true)} />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  )
}
