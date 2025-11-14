import React, { useMemo, useState } from 'react'
import { 
  Scissors, MapPin, Sparkles, Star, ShieldCheck, Timer, CreditCard, Wallet, Users, Check, Phone, Mail, Facebook, Instagram, Twitter, ArrowRight, ChevronLeft, ChevronRight, BadgePercent, Crown, Gem, Search, LineChart
} from 'lucide-react'

function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium bg-teal-50 text-teal-700 ${className}`}>
      {children}
    </span>
  )
}

function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

const heroImg =
  'https://images.unsplash.com/photo-1582092728063-5c1b1b183a09?q=80&w=1600&auto=format&fit=crop';

const testimonials = [
  { name: 'Aditi', city: 'Mumbai', rating: 5, text: 'Booking super fast! Wait nahi karna pada. Hygiene badge dekh ke confidence aaya.', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop' },
  { name: 'Rahul', city: 'Delhi', rating: 5, text: 'Transparent pricing aur reminders — bilkul tension-free.', image: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Meera', city: 'Bengaluru', rating: 4, text: 'Nearby best salons compare karke book kiya. Great experience!', image: 'https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=400&auto=format&fit=crop' },
  { name: 'Sahil', city: 'Pune', rating: 5, text: 'Membership se kaafi save hua. Cashless payment — quick!', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop' },
]

function Rating({ value }) {
  return (
    <div className="flex items-center text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < value ? 'fill-amber-400 text-amber-400' : 'text-amber-300'} />
      ))}
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('hi') // 'hi' default, 'en' fallback
  const [slide, setSlide] = useState(0)

  const t = useMemo(() => {
    const hi = {
      bookNow: 'Book Now',
      joinSalon: 'For Salons — Join TrimKart',
      heroH: 'Salon booking ab effortless — TrimKart se, bina wait ke!',
      heroS: 'Book karein trusted salons, compare prices, aur paaye membership offers.',
      trust: '500+ salons · 50k+ bookings · 4.7★ avg rating',
      howH: 'Kaise Kaam Karta Hai',
      step1: 'Search & Book — Location/Service select karein',
      step2: 'Confirm & Pay — Transparent pricing, secure payment',
      step3: 'Enjoy Service — No wait, verified professionals',
      featuresH: 'Features jo real problems solve karein',
      customersH: 'For Customers',
      customersBullets: [
        'Find nearby salons',
        'Compare styles & prices',
        'Pre-pay, cashless checkout',
        'Smart reminders',
        'Cancel/Reschedule easily',
      ],
      salonsH: 'For Salons / Partners',
      salonsP: 'More customers, lower no-shows, manage staff, analytics.' ,
      viewPlans: 'View Plans',
      joinPartner: 'Join as Partner',
      pricingH: 'Pricing & Membership',
      testimonialsH: 'Users love the TrimKart experience',
      faqH: 'FAQs',
      ctaAvailability: 'Check Availability',
      getMembership: 'Get Membership',
      micro1: 'No extra charges at billing',
      micro2: 'Hygiene badge verified',
      micro3: 'Cancel 2 hrs before — full refund'
    }
    const en = {
      ...hi,
      heroH: 'Effortless salon booking — no waiting with TrimKart!',
      heroS: 'Book trusted salons, compare prices, and get membership offers.',
    }
    return lang === 'hi' ? hi : en
  }, [lang])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Bar / Nav */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center text-white shadow-sm">
              <Scissors size={16} className="absolute left-1.5 top-1.5 rotate-[-20deg] opacity-90" />
              <MapPin size={14} className="absolute right-1.5 bottom-1.5 opacity-90" />
              <Sparkles size={12} className="absolute right-1.5 top-1.5" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight">TrimKart</div>
              <div className="text-[11px] text-gray-500">Book. Beautify. Repeat.</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo('how')} className="hover:text-teal-600">How it works</button>
            <button onClick={() => scrollTo('features')} className="hover:text-teal-600">Features</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-teal-600">Pricing</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-teal-600">FAQ</button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-gray-200 overflow-hidden">
              <button onClick={() => setLang('hi')} className={`px-3 py-1 text-xs ${lang==='hi'?'bg-gray-100 font-semibold':''}`}>हिंदी</button>
              <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs ${lang==='en'?'bg-gray-100 font-semibold':''}`}>EN</button>
            </div>
            <button onClick={() => scrollTo('booking')} className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-2 text-sm shadow hover:opacity-95">
              {t.bookNow} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="hero" className="pt-10 sm:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge>
              <ShieldCheck size={14} /> Trusted • Fast • Hygienic
            </Badge>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              {t.heroH}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              {t.heroS}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={() => scrollTo('booking')} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 text-sm font-semibold shadow">
                <Search size={18} /> {t.ctaAvailability}
              </button>
              <button onClick={() => scrollTo('partners')} className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-50 text-teal-700 px-6 py-3 text-sm font-semibold border border-teal-200">
                <Users size={18} /> {t.joinSalon}
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-500 flex items-center gap-2">
              <Star size={16} className="text-amber-400 fill-amber-400" /> {t.trust}
            </div>
            <div className="mt-3 flex gap-2 text-[11px] text-gray-500">
              <Badge className="bg-amber-50 text-amber-700">{t.micro1}</Badge>
              <Badge className="bg-emerald-50 text-emerald-700">{t.micro2}</Badge>
              <Badge className="bg-indigo-50 text-indigo-700">{t.micro3}</Badge>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-100 to-transparent blur-2xl rounded-3xl opacity-70" />
            <img src={heroImg} alt="Happy salon experience" className="relative w-full rounded-2xl shadow-lg object-cover aspect-[4/3]" />
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" className="bg-gradient-to-b from-white to-teal-50/40">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">{t.howH}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
              <MapPin />
            </div>
            <div className="font-semibold mb-1">Step 1</div>
            <div className="text-gray-700 text-sm">{t.step1}</div>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <CreditCard />
            </div>
            <div className="font-semibold mb-1">Step 2</div>
            <div className="text-gray-700 text-sm">{t.step2}</div>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Sparkles />
            </div>
            <div className="font-semibold mb-1">Step 3</div>
            <div className="text-gray-700 text-sm">{t.step3}</div>
          </div>
        </div>
      </Section>

      {/* Booking teaser */}
      <Section id="booking" className="pt-0">
        <div className="rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm bg-white">
          <div className="grid md:grid-cols-4 gap-3">
            <div className="md:col-span-2">
              <label className="text-xs text-gray-500">Location</label>
              <div className="flex items-center gap-2 rounded-xl border px-3 py-2">
                <MapPin size={16} className="text-gray-400" />
                <input className="w-full outline-none text-sm" placeholder="Enter area / city" />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500">Service</label>
              <div className="flex items-center gap-2 rounded-xl border px-3 py-2">
                <Scissors size={16} className="text-gray-400" />
                <input className="w-full outline-none text-sm" placeholder="Haircut, Facial, Manicure…" />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-3 text-sm font-semibold shadow">
                <Search size={18} /> {t.bookNow}
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="bg-gradient-to-b from-white to-blue-50/40">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">{t.featuresH}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: CalendarIcon, title: 'Online Appointment Booking', desc: 'Pick a slot that suits you with live availability.' },
            { icon: BadgePercent, title: 'Transparent Pricing & Menu', desc: 'No hidden charges. See service menu upfront.' },
            { icon: ShieldCheck, title: 'Verified Salons & Hygiene', desc: 'Hygiene badge, checks and community ratings.' },
            { icon: Timer, title: 'Live Occupancy & Wait-time', desc: 'Know the rush before you go — save time.' },
            { icon: Wallet, title: 'In-app Payments', desc: 'Pay via UPI, Cards, or Wallets securely.' },
            { icon: Crown, title: 'Loyalty & Membership', desc: 'Earn points and unlock Silver/Gold/Platinum perks.' },
            { icon: Star, title: 'Reviews & Disputes', desc: 'Fair ratings and quick dispute resolution.' },
            { icon: LineChart, title: 'Salon Dashboard', desc: 'Owners manage staff, inventory, offers & analytics.' },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-100 to-blue-100 text-teal-700 flex items-center justify-center mb-4">
                <f.icon />
              </div>
              <div className="font-semibold mb-1">{f.title}</div>
              <div className="text-sm text-gray-600">{f.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* For Customers */}
      <Section id="customers">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{t.customersH}</h3>
            <ul className="space-y-2 text-gray-700">
              {t.customersBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2"><Check className="text-teal-600 mt-0.5" size={18} /><span>{b}</span></li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 text-sm font-semibold shadow">
                {t.ctaAvailability}
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-6 py-3 text-sm font-semibold border border-teal-200">
                {t.getMembership}
              </button>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1625038032200-648fbcd800d0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWxvbiUyMHRvb2xzJTIwY2xlYW58ZW58MHwwfHx8MTc2MzEwOTM1OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Salon tools clean" className="relative w-full rounded-2xl shadow-lg object-cover aspect-[4/3]" />
          </div>
        </div>
      </Section>

      {/* For Partners */}
      <Section id="partners" className="bg-gradient-to-b from-white to-rose-50/40">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1400&auto=format&fit=crop" alt="Stylist at work" className="relative w-full rounded-2xl shadow-lg object-cover aspect-[4/3]" />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{t.salonsH}</h3>
            <p className="text-gray-700 mb-4">{t.salonsP}</p>
            <ul className="space-y-2 text-gray-700">
              {['Get more bookings with featured placement', 'Reduce no-shows via pre-pay & reminders', 'Manage staff schedules & service menu', 'Insights: revenue, occupancy, repeat rate'].map((b, i) => (
                <li key={i} className="flex items-start gap-2"><Check className="text-rose-600 mt-0.5" size={18} /><span>{b}</span></li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-6 py-3 text-sm font-semibold shadow">
                {t.joinPartner} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="bg-gradient-to-b from-white to-teal-50/40">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">{t.pricingH}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Free Listing', price: '₹0', accent: 'border-gray-200', perks: ['Appear in search', 'Basic profile', 'Standard support'] },
            { name: 'Silver', price: '₹999/mo', accent: 'border-teal-400', icon: Crown, perks: ['Priority placement', 'Promotional credit ₹500', 'Commission 10%', 'No-show protection'] },
            { name: 'Gold', price: '₹1999/mo', accent: 'border-blue-400', icon: Gem, perks: ['Top placement', 'Promotional credit ₹1500', 'Commission 8%', 'Dedicated success manager'] },
          ].map((p, i) => (
            <div key={i} className={`rounded-2xl border ${p.accent} bg-white p-6 shadow-sm flex flex-col`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Plan</div>
                  <div className="text-lg font-bold">{p.name}</div>
                </div>
                {p.icon ? (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-100 to-blue-100 text-teal-700 flex items-center justify-center">
                    <p.icon size={20} />
                  </div>
                ) : null}
              </div>
              <div className="mt-4 text-3xl font-extrabold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 flex-1">
                {p.perks.map((perk, j) => (
                  <li key={j} className="flex items-start gap-2"><Check className="text-teal-600 mt-0.5" size={18} /><span>{perk}</span></li>
                ))}
              </ul>
              <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 text-sm font-semibold shadow">
                {t.viewPlans}
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">{t.testimonialsH}</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full border" onClick={() => setSlide((s)=> (s-1+testimonials.length)%testimonials.length)}><ChevronLeft size={18} /></button>
            <button className="p-2 rounded-full border" onClick={() => setSlide((s)=> (s+1)%testimonials.length)}><ChevronRight size={18} /></button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(slide, slide+3).concat(slide>testimonials.length-3? testimonials.slice(0, (slide+3)%testimonials.length): []).map((tst, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={tst.image} alt={tst.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{tst.name}</div>
                  <div className="text-xs text-gray-500">{tst.city}</div>
                </div>
                <div className="ml-auto"><Rating value={tst.rating} /></div>
              </div>
              <p className="mt-3 text-sm text-gray-700">{tst.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-gradient-to-b from-white to-blue-50/40">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">{t.faqH}</h2>
        <div className="max-w-3xl mx-auto divide-y rounded-2xl border border-gray-100 bg-white shadow-sm">
          {[
            ['How do bookings work?', 'Select service and time, confirm and pay. You get instant confirmation with receipt.'],
            ['Can I cancel or reschedule?', 'Yes. Cancel up to 2 hours before for full refund. Reschedule in one tap.'],
            ['Is pricing final?', 'Yes. Prices are transparent — no extra charges at billing.'],
            ['How are salons verified?', 'We check hygiene, licenses and community ratings. Look for the Hygiene badge.'],
            ['What payments are supported?', 'UPI, cards and popular wallets — all secure.'],
            ['What are memberships?', 'Silver/Gold/Platinum plans with perks like priority slots and credits.'],
            ['Do I get reminders?', 'Yes, SMS and email reminders before your appointment.'],
            ['How to contact support?', 'Use in-app chat or email support@trimkart.app']
          ].map((qa, i) => (
            <details key={i} className="group p-4">
              <summary className="flex cursor-pointer items-center justify-between list-none">
                <span className="font-medium text-gray-900">{qa[0]}</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600">{qa[1]}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center text-white shadow-sm">
                  <Scissors size={16} className="absolute left-1.5 top-1.5 rotate-[-20deg] opacity-90" />
                  <MapPin size={14} className="absolute right-1.5 bottom-1.5 opacity-90" />
                  <Sparkles size={12} className="absolute right-1.5 top-1.5" />
                </div>
                <div className="text-lg font-extrabold">TrimKart</div>
              </div>
              <p className="mt-3 text-sm text-gray-600 max-w-xs">Friendly, trustworthy and time-saving salon booking & membership marketplace.</p>
              <div className="mt-4 flex items-center gap-3 text-gray-500">
                <a aria-label="Facebook" href="#" className="p-2 rounded-full border hover:text-teal-600 hover:border-teal-200"><Facebook size={16} /></a>
                <a aria-label="Instagram" href="#" className="p-2 rounded-full border hover:text-teal-600 hover:border-teal-200"><Instagram size={16} /></a>
                <a aria-label="Twitter" href="#" className="p-2 rounded-full border hover:text-teal-600 hover:border-teal-200"><Twitter size={16} /></a>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-3">Quick Links</div>
              <ul className="space-y-2 text-sm text-gray-700">
                {['Home','How it works','For Salons','Pricing','Blog','Careers'].map((l,i)=> (
                  <li key={i}><button onClick={()=> scrollTo(l==='Home'?'hero': l==='How it works'?'how': l==='For Salons'?'partners': l==='Pricing'?'pricing':'hero')} className="hover:text-teal-700">{l}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Contact</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><Phone size={16} className="text-teal-600" /> +91-00000-00000</li>
                <li className="flex items-center gap-2"><Mail size={16} className="text-teal-600" /> support@trimkart.app</li>
                <li className="text-xs text-gray-500">© {new Date().getFullYear()} TrimKart. All rights reserved.</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Legal</div>
              <p className="text-xs text-gray-500">By using TrimKart you agree to our Terms & Privacy Policy. Prices and offers are indicative and may vary by partner.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// simple calendar icon using lines to avoid extra deps
function CalendarIcon(props){
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  )
}
