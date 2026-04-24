'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Camera,
  CreditCard,
  Drill,
  Monitor,
  PackageCheck,
  Search,
  Send,
  ShieldCheck,
  Tablet,
  Truck,
  Waypoints,
} from 'lucide-react';

const BRAND = {
  primary: '#3B00FF',
  primaryDark: '#2C00C7',
  mint: '#5FC485',
  mintDark: '#49AE71',
  bg: '#F4F6FB',
  surface: '#FFFFFF',
  text: '#171A2B',
  muted: '#667085',
  border: '#D9E0F0',
  soft: '#EEF2FF',
};

const categories = [
  'Tablet e laptop',
  'Videocamere e fotocamere',
  'Droni professionali',
  'Attrezzatura da lavoro',
  'Strumenti per eventi',
  'Device aziendali',
  'Console e gaming',
  'Attrezzatura audio/video',
  'Strumenti per pulizia',
  'Outdoor e trasporto',
];

const renterSteps = [
  {
    icon: Search,
    title: 'Registrati e cerca il prodotto',
    text: 'Crea il profilo, verifica i dati, trova ciò che ti serve e invia la richiesta in piattaforma.',
  },
  {
    icon: CreditCard,
    title: 'Prenota in sicurezza',
    text: 'Pagamento, cauzione e conferma del noleggio in un flusso semplice.',
  },
  {
    icon: Truck,
    title: 'Ricevi, usa e restituisci',
    text: 'Consegna tracciata, utilizzo per il tempo necessario e reso ordinato.',
  },
];

const ownerSteps = [
  {
    icon: PackageCheck,
    title: 'Registrati e pubblica',
    text: 'Crea il profilo, verifica i dati e inserisci il prodotto da mettere a noleggio.',
  },
  {
    icon: BadgeCheck,
    title: 'Ricevi una richiesta',
    text: 'Valuti la richiesta ricevuta e confermi il noleggio direttamente in piattaforma.',
  },
  {
    icon: Send,
    title: 'Spedisci e guadagni',
    text: 'Il prodotto parte, torna indietro e tu monetizzi ciò che non usi.',
  },
];

const featuredProducts = [
  {
    icon: Camera,
    name: 'Sony A7 III',
    category: 'Videocamera',
    price: '35€/giorno',
    deposit: '200€',
    badge: 'Camilla M.',
  },
  {
    icon: Waypoints,
    name: 'DJI Mavic 3 Pro',
    category: 'Drone professionale',
    price: '55€/giorno',
    deposit: '300€',
    badge: 'Lucia F.',
  },
  {
    icon: Tablet,
    name: 'iPad Pro 12.9"',
    category: 'Tablet',
    price: '24€/giorno',
    deposit: '150€',
    badge: 'Marco D.',
  },
  {
    icon: Drill,
    name: 'Bosch Professional',
    category: 'Trapano',
    price: '18€/giorno',
    deposit: '80€',
    badge: 'Caterina D.',
  },
  {
    icon: Monitor,
    name: 'PlayStation 5',
    category: 'Gaming',
    price: '20€/giorno',
    deposit: '150€',
    badge: 'Andrea C.',
  },
  {
    icon: Monitor,
    name: 'Proiettore Full HD',
    category: 'Eventi / Casa',
    price: '25€/giorno',
    deposit: '120€',
    badge: 'Leonardo B.',
  },
  {
    icon: Drill,
    name: 'Idropulitrice',
    category: 'Pulizia',
    price: '22€/giorno',
    deposit: '100€',
    badge: 'Giacomo T.',
  },
  {
    icon: Boxes,
    name: 'Generatore portatile',
    category: 'Lavoro / Outdoor',
    price: '40€/giorno',
    deposit: '250€',
    badge: 'Angie L.',
  },
  {
    icon: Boxes,
    name: 'Kit luci LED',
    category: 'Eventi',
    price: '28€/giorno',
    deposit: '120€',
    badge: 'Barbara T.',
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Utenti verificati',
    text: 'Chi utilizza Gireo viene verificato per aumentare sicurezza e affidabilità.',
  },
  {
    icon: BadgeCheck,
    title: 'Recensioni verificate',
    text: 'Ogni noleggio genera recensioni verificate per costruire fiducia tra utenti.',
  },
  {
    icon: Truck,
    title: 'Spedizione tracciata',
    text: 'Tracking completo per consegna e reso in un flusso semplice.',
  },
  {
    icon: CreditCard,
    title: 'Pagamento e cauzione',
    text: 'Pagamento gestito in piattaforma con cauzione e soluzioni di copertura integrate.',
  },
];

const faqs = [
  {
    q: 'Cos’è Gireo?',
    a: 'Una piattaforma per noleggiare prodotti e mettere a reddito beni inutilizzati.',
  },
  {
    q: 'Cosa posso pubblicare?',
    a: 'Elettronica, attrezzatura professionale, droni, strumenti da lavoro, prodotti per eventi, gaming e molto altro.',
  },
  {
    q: 'Come funziona la sicurezza?',
    a: 'Pagamento in piattaforma, cauzione, tracking, utenti verificati, coperture integrate e recensioni verificate dopo il noleggio.',
  },
];

function GireoLogo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <img
      src="/logo-gireo.jpg"
      alt="Logo Gireo"
      className={className}
      style={{ objectFit: 'contain', display: 'block' }}
    />
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: BRAND.primary }}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl" style={{ color: BRAND.text }}>
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: BRAND.muted }}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[28px] ${className}`}
      style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full px-4 py-2 text-sm font-medium"
      style={{ backgroundColor: BRAND.surface, color: BRAND.text, border: `1px solid ${BRAND.border}` }}
    >
      {children}
    </span>
  );
}

function RuntimeTests() {
  const invalidCategories = categories.length < 3;
  const invalidRenterSteps = renterSteps.length < 3;
  const invalidOwnerSteps = ownerSteps.length < 3;
  const invalidFaqs = faqs.length < 3;

  if (!invalidCategories && !invalidRenterSteps && !invalidOwnerSteps && !invalidFaqs) return null;

  return (
    <div
      className="mx-auto mb-6 max-w-7xl rounded-2xl border p-4 text-sm"
      style={{ borderColor: '#F5C2C7', background: '#FFF5F5', color: '#842029' }}
    >
      <p className="font-semibold">Runtime checks failed</p>
      {invalidCategories ? <p>Le categorie sono troppo poche.</p> : null}
      {invalidRenterSteps ? <p>Il flusso di chi noleggia deve avere almeno 3 passaggi.</p> : null}
      {invalidOwnerSteps ? <p>Il flusso di chi pubblica deve avere almeno 3 passaggi.</p> : null}
      {invalidFaqs ? <p>Le FAQ devono essere almeno 3.</p> : null}
    </div>
  );
}

export default function GireoLandingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    useCase: '',
    profileType: '',
    productInterest: '',
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
    if (formSuccess) setFormSuccess('');
  };

  const handlePreviewAccess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.useCase.trim() ||
      !formData.profileType.trim() ||
      !formData.productInterest.trim()
    ) {
      setFormSuccess('');
      setFormError('Compila tutti i campi, incluso il prodotto di interesse.');
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailIsValid) {
      setFormSuccess('');
      setFormError('Inserisci un indirizzo email valido.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');
    setFormSuccess('');

    try {
      const response = await fetch('https://formspree.io/f/mjgpaqjk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          profileType: formData.profileType,
          useCase: formData.useCase,
          productInterest: formData.productInterest,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormSuccess('Richiesta inviata. Ti ricontatteremo per l’accesso anticipato.');
        setFormData({
          fullName: '',
          email: '',
          useCase: '',
          profileType: '',
          productInterest: '',
        });
      } else {
        if (result?.errors?.length) {
          setFormError(result.errors.map((err: { message: string }) => err.message).join(' '));
        } else {
          setFormError('Errore nell’invio. Riprova.');
        }
      }
    } catch (error) {
      setFormError('Errore di connessione. Riprova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.bg, color: BRAND.text }}>
      <header
        className="sticky top-0 z-50 backdrop-blur"
        style={{ backgroundColor: 'rgba(255,255,255,0.92)', borderBottom: `1px solid ${BRAND.border}` }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <GireoLogo className="h-11 w-11" />
            <div>
              <span className="text-xl font-semibold">Gireo</span>
              <p className="text-xs" style={{ color: BRAND.muted }}>
                Il valore che già possiedi
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm md:flex" style={{ color: BRAND.muted }}>
            <a href="#come-funziona" className="transition hover:opacity-80">
              Come funziona
            </a>
            <a href="#prodotti" className="transition hover:opacity-80">
              Prodotti
            </a>
            <a href="#sicurezza" className="transition hover:opacity-80">
              Sicurezza
            </a>
            <a href="#faq" className="transition hover:opacity-80">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#accesso-anteprima"
              className="rounded-2xl px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: `linear-gradient(135deg, ${BRAND.primaryDark}, ${BRAND.primary})` }}
            >
              Ottieni accesso anticipato
            </a>
          </div>
        </div>
      </header>

      <RuntimeTests />

      <section className="relative overflow-hidden px-4 pb-10 pt-8 md:px-6 md:pb-14 md:pt-12">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at top left, ${BRAND.soft} 0%, transparent 35%), radial-gradient(circle at bottom right, rgba(95,196,133,0.14) 0%, transparent 30%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <Pill>Utenti verificati</Pill>
              <Pill>Pagamento e cauzione integrati</Pill>
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold leading-tight md:text-4xl" style={{ color: BRAND.text }}>
              Noleggia ciò che ti serve. Guadagna da ciò che non usi.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 md:text-lg" style={{ color: BRAND.muted }}>
              Gireo collega chi cerca un prodotto per un periodo limitato e chi vuole monetizzare beni inutilizzati.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
              <div
                className="rounded-2xl p-4"
                style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
              >
                <p className="text-sm font-semibold">Hai prodotti inutilizzati?</p>
                <p className="mt-2 text-sm leading-7" style={{ color: BRAND.muted }}>
                  Mettili a noleggio.
                </p>
              </div>
              <div
                className="rounded-2xl p-4"
                style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
              >
                <p className="text-sm font-semibold">Cerchi un prodotto?</p>
                <p className="mt-2 text-sm leading-7" style={{ color: BRAND.muted }}>
                  Noleggialo solo quando serve.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#accesso-anteprima"
                className="rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${BRAND.primaryDark}, ${BRAND.primary})` }}
              >
                Ottieni accesso anticipato
              </a>
              <a
                href="#come-funziona"
                className="rounded-2xl px-5 py-3 text-center text-sm font-semibold"
                style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
              >
                Scopri come funziona
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {categories.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full flex justify-center">
              <img
                src="/mockup-gireo.png"
                alt="Mockup piattaforma Gireo"
                className="w-full max-w-[480px] rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="come-funziona" className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Come funziona"
            title="Come funziona per chi noleggia e per chi pubblica"
            text="Una panoramica semplice del flusso: ricerca, prenotazione, comunicazione, utilizzo, restituzione e guadagno."
          />

          <div className="mt-6 mx-auto max-w-6xl overflow-hidden rounded-[32px] shadow-sm">
            <img
              src="/mockup-processo-gireo-av1.png"
              alt="Processo Gireo in sei passaggi"
              className="block w-full h-auto"
            />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card className="h-full p-5 md:p-6">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: BRAND.soft }}
                >
                  <Search className="h-5 w-5" style={{ color: BRAND.primary }} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND.primary }}>
                    Per chi vuole noleggiare
                  </p>
                  <h3 className="mt-1 text-xl font-semibold" style={{ color: BRAND.text }}>
                    Trova, prenota, utilizza, risparmia
                  </h3>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {renterSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="rounded-2xl p-4"
                      style={{ backgroundColor: BRAND.bg, border: `1px solid ${BRAND.border}` }}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                          style={{ backgroundColor: BRAND.primary }}
                        >
                          {index + 1}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <Icon className="h-4 w-4" style={{ color: BRAND.primary }} />
                            <h4 className="text-base font-semibold">{step.title}</h4>
                          </div>
                          <p className="mt-2 text-sm leading-6" style={{ color: BRAND.muted }}>
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="h-full p-5 md:p-6">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: BRAND.soft }}
                >
                  <PackageCheck className="h-5 w-5" style={{ color: BRAND.primary }} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND.primary }}>
                    Per chi vuole mettere a noleggio
                  </p>
                  <h3 className="mt-1 text-xl font-semibold" style={{ color: BRAND.text }}>
                    Pubblica, conferma, guadagna
                  </h3>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {ownerSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="rounded-2xl p-4"
                      style={{ backgroundColor: BRAND.bg, border: `1px solid ${BRAND.border}` }}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                          style={{ backgroundColor: BRAND.primary }}
                        >
                          {index + 1}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <Icon className="h-4 w-4" style={{ color: BRAND.primary }} />
                            <h4 className="text-base font-semibold">{step.title}</h4>
                          </div>
                          <p className="mt-2 text-sm leading-6" style={{ color: BRAND.muted }}>
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="prodotti" className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Prodotti"
            title="Esempi di prodotti su Gireo"
            text="Alcuni beni che potranno essere noleggiati in piattaforma."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.name} className="overflow-hidden p-0">
                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: BRAND.soft }}
                      >
                        <Icon className="h-7 w-7" style={{ color: BRAND.primary }} />
                      </div>

                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: BRAND.bg,
                          color: BRAND.primary,
                          border: `1px solid ${BRAND.border}`,
                        }}
                      >
                        {product.badge}
                      </span>
                    </div>

                    <div className="mt-6">
                      <p className="text-sm" style={{ color: BRAND.muted }}>
                        {product.category}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold" style={{ color: BRAND.text }}>
                        {product.name}
                      </h3>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div
                        className="rounded-2xl p-4"
                        style={{ backgroundColor: BRAND.bg, border: `1px solid ${BRAND.border}` }}
                      >
                        <p className="text-xs uppercase tracking-[0.14em]" style={{ color: BRAND.muted }}>
                          Prezzo
                        </p>
                        <p className="mt-2 text-lg font-semibold">{product.price}</p>
                      </div>

                      <div
                        className="rounded-2xl p-4"
                        style={{ backgroundColor: BRAND.bg, border: `1px solid ${BRAND.border}` }}
                      >
                        <p className="text-xs uppercase tracking-[0.14em]" style={{ color: BRAND.muted }}>
                          Cauzione
                        </p>
                        <p className="mt-2 text-lg font-semibold">{product.deposit}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sicurezza" className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Sicurezza"
            title="Più tutela per utenti e prodotti."
            text="Pagamento in piattaforma, cauzione, utenti verificati, recensioni verificate, tracking e coperture integrate."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-5 md:p-6">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: BRAND.soft }}
                  >
                    <Icon className="h-7 w-7" style={{ color: BRAND.primary }} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: BRAND.muted }}>
                    {item.text}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="FAQ" title="Domande essenziali" />

          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <Card key={faq.q} className="p-5 md:p-6">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-base leading-8" style={{ color: BRAND.muted }}>
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="accesso-anteprima" className="px-4 pb-14 pt-4 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden p-0">
            <div
              className="grid gap-6 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8"
              style={{
                background: `linear-gradient(135deg, ${BRAND.primaryDark} 0%, ${BRAND.primary} 70%, ${BRAND.mint} 100%)`,
              }}
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">Lancio Gireo</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Accedi in anteprima a Gireo
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                  Accedi a Gireo prima del lancio ufficiale.
                  <br />
                  Gli utenti selezionati potranno:
                  <br />
                  • pubblicare per primi i propri prodotti
                  <br />
                  • testare la piattaforma in anteprima
                  <br />
                  • partire con un vantaggio quando apriremo al pubblico
                </p>
              </div>

              <div className="rounded-[32px] bg-white/95 p-6 shadow-sm md:p-7">
                <form className="mt-2 space-y-3" onSubmit={handlePreviewAccess}>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                    style={{ border: `1px solid ${BRAND.border}` }}
                    placeholder="Nome e cognome"
                  />

                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                    style={{ border: `1px solid ${BRAND.border}` }}
                    placeholder="Email"
                  />

                  <select
                    name="profileType"
                    value={formData.profileType}
                    onChange={handleChange}
                    className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                    style={{ border: `1px solid ${BRAND.border}` }}
                  >
                    <option value="" disabled>
                      Che profilo sei?
                    </option>
                    <option value="privato">Privato</option>
                    <option value="professionista-azienda-negozio">Professionista / azienda / negozio</option>
                  </select>

                  <select
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                    style={{ border: `1px solid ${BRAND.border}` }}
                  >
                    <option value="" disabled>
                      Come vuoi usare Gireo?
                    </option>
                    <option value="noleggiare">Noleggiare prodotti</option>
                    <option value="pubblicare">Mettere a noleggio i miei prodotti</option>
                    <option value="entrambi">Entrambe le cose</option>
                  </select>

                  <textarea
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                    style={{ border: `1px solid ${BRAND.border}`, resize: 'vertical' }}
                    placeholder="Cosa vorresti noleggiare o mettere a noleggio? (es. drone, videocamera, attrezzatura da lavoro...)"
                    rows={3}
                  />

                  {formError ? (
                    <div
                      className="rounded-2xl px-4 py-3 text-sm"
                      style={{ backgroundColor: '#FFF5F5', color: '#842029', border: '1px solid #F5C2C7' }}
                    >
                      {formError}
                    </div>
                  ) : null}

                  {formSuccess ? (
                    <div
                      className="rounded-2xl px-4 py-3 text-sm"
                      style={{
                        backgroundColor: '#EEF8F2',
                        color: BRAND.mintDark,
                        border: `1px solid ${BRAND.mint}`,
                      }}
                    >
                      {formSuccess}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white disabled:opacity-70"
                    style={{ backgroundColor: BRAND.primary }}
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Ottieni accesso anticipato'}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                </form>

                <p className="mt-4 text-xs leading-6" style={{ color: BRAND.muted }}>
                  Accesso anticipato per chi vuole noleggiare o pubblicare prodotti su Gireo.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}