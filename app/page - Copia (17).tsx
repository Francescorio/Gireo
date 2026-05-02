'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Aperture,
  BadgeCheck,
  CalendarCheck,
  Camera,
  CheckCircle2,
  CreditCard,
  Euro,
  Film,
  Lightbulb,
  LockKeyhole,
  MapPin,
  Mic,
  PackageCheck,
  Plane,
  PlusCircle,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  UserCheck,
  Users,
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
  'Mirrorless full-frame',
  'Reflex professionali',
  'Cinepresa & cinema',
  'Ottiche e zoom',
  'Droni',
  'Gimbal e stabilizzatori',
  'Luci e flash',
  'Audio e microfoni',
  'Action cam',
  'Accessori e supporti',
];

const launchCities = ['Milano', 'Roma', 'Torino', 'Bologna', 'Firenze', 'Napoli'];

const heroVerbs = [
  { label: 'Noleggia', sub: 'gear pro vicino a te', icon: Search },
  { label: 'Connettiti', sub: 'con creator italiani', icon: Users },
  { label: 'Guadagna', sub: 'dal tuo gear fermo', icon: Euro },
];

const renterSteps = [
  {
    icon: Search,
    title: 'Trova il gear',
    text: 'Cerca tra camere, ottiche, droni e accessori. Filtra per modello, città e date.',
  },
  {
    icon: CalendarCheck,
    title: 'Prenota e paga',
    text: 'Scegli le date, conferma in pochi clic. Pagamento e assicurazione gestiti in piattaforma.',
  },
  {
    icon: Truck,
    title: 'Ricevi e gira',
    text: 'Spedizione express assicurata o pickup diretto. Imballaggio professionale per ogni noleggio.',
  },
];

const ownerSteps = [
  {
    icon: PlusCircle,
    title: 'Pubblica il tuo gear',
    text: 'Aggiungi foto, descrizione e disponibilità. Ti suggeriamo il prezzo di mercato.',
  },
  {
    icon: PackageCheck,
    title: 'Conferma e consegna',
    text: 'Accetti la richiesta e prepari l’attrezzatura. Spedizione o pickup, come preferisci.',
  },
  {
    icon: Euro,
    title: 'Vieni pagato',
    text: 'Pagamento garantito a noleggio concluso. Mediamente 200-600€/mese per gear pro.',
  },
];

const popularGear = [
  {
    name: 'Sony FX3',
    category: 'Cinepresa full-frame',
    price: '120-180€',
    period: '/giorno',
    image: '/categoria-fotocamera.png',
  },
  {
    name: 'DJI Mavic 3 Pro',
    category: 'Drone cinema',
    price: '90-140€',
    period: '/giorno',
    image: '/categoria-drone.png',
  },
  {
    name: 'Sony A7 IV',
    category: 'Mirrorless full-frame',
    price: '60-90€',
    period: '/giorno',
    image: '/categoria-fotocamera.png',
  },
  {
    name: 'Aputure 600d Pro',
    category: 'Set illuminazione',
    price: '50-80€',
    period: '/giorno',
    image: '/categoria-luci-set.png',
  },
  {
    name: 'Sony 24-70 GM II',
    category: 'Ottica zoom pro',
    price: '40-65€',
    period: '/giorno',
    image: '/categoria-fotocamera.png',
  },
  {
    name: 'DJI Ronin 4D',
    category: 'Gimbal & camera',
    price: '180-250€',
    period: '/giorno',
    image: '/categoria-drone.png',
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Assicurazione inclusa',
    text: 'Ogni noleggio è coperto contro danni accidentali, furto e malfunzionamenti. Copertura attivata automaticamente.',
  },
  {
    icon: BadgeCheck,
    title: 'Solo creator verificati',
    text: 'Identità verificata con SPID o documento. Profili legati a portfolio reali, recensioni e storico noleggi.',
  },
  {
    icon: Truck,
    title: 'Spedizione assicurata',
    text: 'Corriere espresso assicurato in 24-48h in tutta Italia, oppure pickup diretto tra le parti.',
  },
  {
    icon: CreditCard,
    title: 'Pagamento garantito',
    text: 'Il noleggiatore paga in anticipo. Tu ricevi il pagamento solo a noleggio concluso, senza rischi.',
  },
];

const coverageHighlights = [
  {
    icon: ShieldCheck,
    title: 'Coperto fino al valore di sostituzione',
    text: 'In caso di danno grave o furto, l’attrezzatura viene rimborsata al valore di mercato corrente.',
  },
  {
    icon: CheckCircle2,
    title: 'Attivazione automatica',
    text: 'Niente moduli, niente preventivi: la copertura si attiva al momento della prenotazione.',
  },
  {
    icon: UserCheck,
    title: 'Gestione sinistri in italiano',
    text: 'Assistenza dedicata, nessuna burocrazia complicata, tempi di risposta rapidi.',
  },
];

const lenderBenefits = [
  {
    icon: Euro,
    title: 'Trasforma il fermo in reddito',
    text: 'Una mirrorless full-frame può rendere 200-400€/mese. Un drone cinema può superare i 600€/mese.',
  },
  {
    icon: Sparkles,
    title: 'Pricing intelligente',
    text: 'Ti suggeriamo il prezzo giusto sulla base di marca, modello, condizioni e domanda nella tua zona.',
  },
  {
    icon: LockKeyhole,
    title: 'Zero pensieri sui danni',
    text: 'Assicurazione integrata, identità del noleggiatore verificata, deposito cauzionale gestito da noi.',
  },
];

const lenderPromises = [
  'Decidi tu il prezzo del tuo gear',
  'Decidi tu le date di disponibilità',
  'Accetti o rifiuti ogni richiesta',
  'Decidi tu se spedire o solo pickup locale',
];

const testimonials = [
  {
    name: 'Marco T.',
    role: 'Wedding videographer',
    city: 'Milano',
    text: 'Tra un matrimonio e l’altro la mia FX3 sta ferma settimane. Poterla mettere a reddito senza pensieri è esattamente quello che cercavo.',
  },
  {
    name: 'Elena R.',
    role: 'Fotografa freelance',
    city: 'Roma',
    text: 'Per uno shooting mi serviva un’ottica specifica solo per due giorni. Comprarla non aveva senso, noleggiarla da un collega sì.',
  },
  {
    name: 'Studio Nord.',
    role: 'Casa di produzione',
    city: 'Torino',
    text: 'Avere accesso a gear extra senza dover comprare tutto è un cambio di passo. La community italiana ne aveva bisogno.',
  },
];

const earningsTable = [
  { gear: 'Mirrorless full-frame (es. Sony A7 IV)', range: '200-400€/mese', icon: Camera },
  { gear: 'Drone cinema (es. DJI Mavic 3 Pro)', range: '350-650€/mese', icon: Plane },
  { gear: 'Ottica fissa pro (es. 24-70 f/2.8)', range: '120-250€/mese', icon: Aperture },
  { gear: 'Cinepresa (es. RED, BMPCC 6K)', range: '600-1.200€/mese', icon: Film },
  { gear: 'Set luci pro (es. Aputure 600d)', range: '150-300€/mese', icon: Lightbulb },
  { gear: 'Audio pro (es. lavalier, shotgun)', range: '80-180€/mese', icon: Mic },
];

const faqs = [
  {
    q: 'Cos’è Gireo?',
    a: 'Gireo è il marketplace italiano dedicato al noleggio di attrezzatura foto e video tra professionisti e appassionati. Camere, ottiche, droni, luci, audio: tutto da creator verificati, con assicurazione e pagamento sicuro.',
  },
  {
    q: 'Che attrezzatura posso noleggiare?',
    a: 'Tutto il gear foto e video pro: mirrorless e reflex full-frame, cinepresa, ottiche, droni, gimbal, luci, microfoni, monitor da campo, accessori. Solo gear professionale o semi-professionale, niente attrezzatura consumer di basso valore.',
  },
  {
    q: 'Sono coperto se l’attrezzatura si rompe?',
    a: 'Sì. Ogni noleggio include automaticamente una copertura assicurativa contro danni accidentali, furto e malfunzionamenti. La gestione del sinistro è in italiano e segue procedure semplificate, senza scartoffie e senza tempi infiniti.',
  },
  {
    q: 'Come funziona la spedizione?',
    a: 'Per noleggi fuori città, spedizione assicurata con corriere espresso in 24-48h. Per noleggi locali, pickup diretto tra le parti. Forniamo guide e materiali per imballare correttamente l’attrezzatura.',
  },
  {
    q: 'Quanto posso guadagnare mettendo a noleggio la mia attrezzatura?',
    a: 'Dipende dal gear. Una mirrorless full-frame può rendere 200-400€ al mese se noleggiata 5-8 giorni. Un drone cinema può superare i 600€/mese. Imposti tu il prezzo, noi suggeriamo una fascia di mercato sulla base dei dati della piattaforma.',
  },
  {
    q: 'Chi sono gli altri utenti?',
    a: 'Videomaker freelance, fotografi matrimonialisti, content creator, producer, piccoli studi e agenzie. Tutti verificati con identità reale, portfolio pubblico e storico dei noleggi.',
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
  centered = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
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
      setFormError('Compila tutti i campi, incluso il gear di interesse.');
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
                Il marketplace italiano del foto/video
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm md:flex" style={{ color: BRAND.muted }}>
            <a href="#come-funziona" className="transition hover:opacity-80">
              Come funziona
            </a>
            <a href="#gear" className="transition hover:opacity-80">
              Cosa noleggiare
            </a>
            <a href="#per-chi-pubblica" className="transition hover:opacity-80">
              Per chi pubblica
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

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-10 pt-8 md:px-6 md:pb-14 md:pt-12">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at top left, ${BRAND.soft} 0%, transparent 35%), radial-gradient(circle at bottom right, rgba(95,196,133,0.14) 0%, transparent 30%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ backgroundColor: BRAND.soft, color: BRAND.primary }}
              >
                <MapPin className="h-3.5 w-3.5" />
                In arrivo nelle principali città italiane
              </span>
            </div>

            <h1
              className="max-w-5xl text-4xl font-semibold leading-tight md:text-5xl"
              style={{ color: BRAND.text }}
            >
              La community italiana del noleggio foto e video.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 md:text-lg" style={{ color: BRAND.muted }}>
              Noleggia camere, ottiche, droni e luci da altri creator italiani. O metti a reddito il
              tuo gear quando non lo usi. Pagamento sicuro, assicurazione inclusa, identità verificata.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:max-w-3xl">
              {heroVerbs.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.label}
                    className="rounded-2xl p-4"
                    style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ backgroundColor: BRAND.soft }}
                      >
                        <Icon className="h-4 w-4" style={{ color: BRAND.primary }} />
                      </div>
                      <p className="text-base font-semibold" style={{ color: BRAND.text }}>
                        {v.label}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-6" style={{ color: BRAND.muted }}>
                      {v.sub}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

          <div className="flex items-center lg:justify-end">
            <div className="w-full max-w-[620px]">
              <img
                src="/gireo-platform-mockup.png"
                alt="Mockup piattaforma Gireo"
                className="w-full rounded-[32px] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CITY STRIP — alla ShareGrid */}
      <section className="px-4 py-6 md:px-6 md:py-8">
        <div className="mx-auto max-w-7xl">
          <Card className="p-5 md:p-6">
            <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-center">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: BRAND.soft }}
                >
                  <MapPin className="h-5 w-5" style={{ color: BRAND.primary }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: BRAND.primary }}
                  >
                    Lancio in Italia
                  </p>
                  <p className="mt-1 text-base font-semibold" style={{ color: BRAND.text }}>
                    Stiamo costruendo la community città per città
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {launchCities.map((c) => (
                  <span
                    key={c}
                    className="rounded-full px-3 py-1.5 text-sm font-medium"
                    style={{
                      backgroundColor: BRAND.bg,
                      color: BRAND.text,
                      border: `1px solid ${BRAND.border}`,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SOCIAL PROOF / COMMUNITY BANNER */}
      <section className="px-4 py-6 md:px-6 md:py-8">
        <div className="mx-auto max-w-7xl">
          <Card className="p-5 md:p-6">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: BRAND.soft }}
                >
                  <Sparkles className="h-6 w-6" style={{ color: BRAND.primary }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: BRAND.primary }}
                  >
                    Costruito con creator italiani
                  </p>
                  <p className="mt-2 text-sm leading-7 md:text-base" style={{ color: BRAND.text }}>
                    Stiamo lavorando con fotografi, videomaker e studi italiani per costruire la prima
                    community di noleggio gear in Italia. Pagamenti sicuri, assicurazione integrata,
                    supporto in italiano.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                <Pill>SPID / CIE</Pill>
                <Pill>Pagamenti sicuri</Pill>
                <Pill>Assicurazione integrata</Pill>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section id="come-funziona" className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Come funziona"
            title="Noleggia quando ti serve. Guadagna quando il gear è fermo."
            text="Due percorsi chiari: chi cerca attrezzatura la prenota in pochi clic, chi la possiede la mette a reddito tra un progetto e l’altro."
            centered
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.25fr_1.25fr_0.9fr] lg:items-stretch">
            <div className="hidden items-center justify-center lg:flex">
              <img
                src="/persona-noleggia.png"
                alt="Persona che noleggia un prodotto su Gireo"
                className="h-48 w-48 rounded-full object-cover shadow-sm"
              />
            </div>

            <Card className="h-full p-5 md:p-6">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: BRAND.soft }}
                >
                  <Search className="h-5 w-5" style={{ color: BRAND.primary }} />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.14em]"
                    style={{ color: BRAND.primary }}
                  >
                    Per chi cerca gear
                  </p>
                  <h3 className="mt-1 text-xl font-semibold" style={{ color: BRAND.text }}>
                    Trova, prenota, gira
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
                  style={{ backgroundColor: 'rgba(95,196,133,0.14)' }}
                >
                  <PackageCheck className="h-5 w-5" style={{ color: BRAND.mintDark }} />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.14em]"
                    style={{ color: BRAND.mintDark }}
                  >
                    Per chi possiede gear
                  </p>
                  <h3 className="mt-1 text-xl font-semibold" style={{ color: BRAND.text }}>
                    Pubblica, consegna, guadagna
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
                          style={{ backgroundColor: BRAND.mintDark }}
                        >
                          {index + 1}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <Icon className="h-4 w-4" style={{ color: BRAND.mintDark }} />
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

            <div className="hidden items-center justify-center lg:flex">
              <img
                src="/persona-pubblica.png"
                alt="Persona che pubblica un prodotto su Gireo"
                className="h-48 w-48 rounded-full object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GEAR PIÙ RICHIESTO — sezione "most rented" stile ShareGrid */}
      <section id="gear" className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Gear più richiesto"
            title="Il gear che gli altri creator stanno cercando."
            text="Solo attrezzatura pro, prezzi medi di mercato. Niente attrezzatura consumer di basso valore."
            centered
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularGear.map((item) => (
              <Card key={item.name} className="overflow-hidden p-0">
                <div className="aspect-[4/3] bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <div className="border-t p-5" style={{ borderColor: BRAND.border }}>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.16em]"
                    style={{ color: BRAND.primary }}
                  >
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold" style={{ color: BRAND.text }}>
                    {item.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-base font-semibold" style={{ color: BRAND.mintDark }}>
                      {item.price}
                    </span>
                    <span className="text-sm" style={{ color: BRAND.muted }}>
                      {item.period}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#accesso-anteprima"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold"
              style={{
                color: BRAND.primary,
                backgroundColor: BRAND.surface,
                border: `1px solid ${BRAND.border}`,
              }}
            >
              Vedi tutto il catalogo al lancio
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SICUREZZA / TRUST */}
      <section id="sicurezza" className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <Card className="p-5 md:p-8">
            <SectionTitle
              eyebrow="Sicurezza e fiducia"
              title="Il tuo gear, in mani sicure."
              text="Ogni noleggio è protetto da misure pensate per chi mette in gioco attrezzatura di valore. Niente improvvisazione."
              centered
            />

            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {trustPoints.map((item) => {
                const Icon = item.icon;
                const isMint =
                  item.title.includes('verificati') || item.title.includes('Spedizione');
                return (
                  <div
                    key={item.title}
                    className="relative rounded-3xl p-5"
                    style={{ border: `1px solid ${BRAND.border}`, backgroundColor: '#FFFFFF' }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: isMint ? 'rgba(95,196,133,0.14)' : BRAND.soft }}
                      >
                        <Icon
                          className="h-7 w-7"
                          style={{ color: isMint ? BRAND.mintDark : BRAND.primary }}
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6" style={{ color: BRAND.muted }}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="mt-6 flex flex-col gap-3 rounded-2xl px-5 py-4 text-sm md:flex-row md:items-center md:justify-between"
              style={{ backgroundColor: '#F7FBF8' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ backgroundColor: BRAND.mintDark }}
                >
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <p>
                  <span className="font-semibold">Il tuo noleggio, coperto in ogni fase.</span>{' '}
                  <span style={{ color: BRAND.muted }}>
                    Supporto e gestione sinistri in italiano.
                  </span>
                </p>
              </div>
              <a
                href="#accesso-anteprima"
                className="inline-flex items-center gap-2 font-semibold"
                style={{ color: BRAND.primary }}
              >
                Scopri di più <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* COVERAGE / ASSICURAZIONE */}
      <section className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden p-0">
            <div
              className="grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-10"
              style={{
                background: `linear-gradient(160deg, ${BRAND.soft} 0%, rgba(95,196,133,0.10) 100%)`,
              }}
            >
              <div>
                <SectionTitle
                  eyebrow="Coverage"
                  title="Assicurazione inclusa, senza pensieri."
                  text="Il deposito enorme e la trafila assicurativa con i noleggiatori tradizionali è una cosa del passato. Su Gireo la copertura è integrata, automatica e gestita in italiano."
                />

                <div className="mt-7 space-y-4">
                  {coverageHighlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 rounded-2xl bg-white p-4"
                        style={{ border: `1px solid ${BRAND.border}` }}
                      >
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: BRAND.soft }}
                        >
                          <Icon className="h-5 w-5" style={{ color: BRAND.primary }} />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold">{item.title}</h3>
                          <p className="mt-1 text-sm leading-6" style={{ color: BRAND.muted }}>
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className="rounded-3xl bg-white p-6 md:p-8"
                style={{ border: `1px solid ${BRAND.border}` }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: BRAND.primary }}
                >
                  Cosa è incluso
                </p>
                <h3 className="mt-3 text-2xl font-semibold" style={{ color: BRAND.text }}>
                  Coperture pensate per chi gira davvero.
                </h3>

                <ul className="mt-6 space-y-4">
                  {[
                    'Danni accidentali durante l’uso normale',
                    'Furto e smarrimento durante il noleggio',
                    'Malfunzionamenti non imputabili al noleggiatore',
                    'Spedizione assicurata da/per il proprietario',
                    'Identità del noleggiatore verificata prima della consegna',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: BRAND.mintDark }}
                      />
                      <span className="text-sm leading-6" style={{ color: BRAND.text }}>
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs leading-6" style={{ color: BRAND.muted }}>
                  Termini e massimali specifici verranno comunicati al lancio. Stiamo finalizzando le
                  partnership con uno dei principali player assicurativi italiani.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* PER CHI PUBBLICA — empowerment del lender stile ShareGrid */}
      <section id="per-chi-pubblica" className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden p-0">
            <div
              className="grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-10"
              style={{ backgroundColor: BRAND.surface }}
            >
              <div>
                <SectionTitle
                  eyebrow="Per chi pubblica"
                  title="Le regole le decidi tu."
                  text="La tua attrezzatura, le tue condizioni. Su Gireo non sei un negozio, sei un creator che presta gear ad altri creator."
                />

                <div
                  className="mt-7 rounded-2xl p-5"
                  style={{ backgroundColor: BRAND.bg, border: `1px solid ${BRAND.border}` }}
                >
                  <ul className="space-y-3">
                    {lenderPromises.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0"
                          style={{ color: BRAND.mintDark }}
                        />
                        <span className="text-sm leading-6 font-medium" style={{ color: BRAND.text }}>
                          {line}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-4">
                  {lenderBenefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={benefit.title}
                        className="flex items-start gap-4 rounded-2xl p-4"
                        style={{ backgroundColor: BRAND.bg, border: `1px solid ${BRAND.border}` }}
                      >
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: 'rgba(95,196,133,0.14)' }}
                        >
                          <Icon className="h-5 w-5" style={{ color: BRAND.mintDark }} />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold">{benefit.title}</h3>
                          <p className="mt-1 text-sm leading-6" style={{ color: BRAND.muted }}>
                            {benefit.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <a
                  href="#accesso-anteprima"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white"
                  style={{ background: `linear-gradient(135deg, ${BRAND.mintDark}, ${BRAND.mint})` }}
                >
                  Inizia a guadagnare con il tuo gear
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div
                className="rounded-3xl p-6 md:p-8"
                style={{
                  background: `linear-gradient(160deg, ${BRAND.soft} 0%, rgba(95,196,133,0.10) 100%)`,
                  border: `1px solid ${BRAND.border}`,
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: BRAND.primary }}
                >
                  Esempi di rendita mensile
                </p>
                <p className="mt-3 text-sm" style={{ color: BRAND.muted }}>
                  Stime indicative basate su 5-8 giorni di noleggio al mese, prezzo di mercato medio.
                </p>

                <div className="mt-6 space-y-3">
                  {earningsTable.map((row) => {
                    const Icon = row.icon;
                    return (
                      <div
                        key={row.gear}
                        className="flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3"
                        style={{ border: `1px solid ${BRAND.border}` }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-9 w-9 items-center justify-center rounded-xl"
                            style={{ backgroundColor: BRAND.soft }}
                          >
                            <Icon className="h-4 w-4" style={{ color: BRAND.primary }} />
                          </div>
                          <p className="text-sm font-medium">{row.gear}</p>
                        </div>
                        <span
                          className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            backgroundColor: 'rgba(95,196,133,0.18)',
                            color: BRAND.mintDark,
                          }}
                        >
                          {row.range}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-5 text-xs leading-6" style={{ color: BRAND.muted }}>
                  Le rendite reali variano in base a marca, modello, condizioni, città e stagionalità.
                  Su Gireo trovi un sistema di pricing suggerito per evitare di sotto- o sovra-prezzare.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* TESTIMONIAL — community quotes stile ShareGrid */}
      <section className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Voci dalla community"
            title="Costruita insieme a chi gira ogni giorno."
            text="Stiamo lavorando con creator italiani per definire ogni dettaglio. Ecco cosa ci stanno dicendo."
            centered
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-6">
                <Quote className="h-6 w-6" style={{ color: BRAND.primary }} />
                <p className="mt-4 text-sm leading-7" style={{ color: BRAND.text }}>
                  “{t.text}”
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND.text }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: BRAND.muted }}>
                      {t.role} · {t.city}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        style={{ color: BRAND.mintDark, fill: BRAND.mintDark }}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-center text-xs" style={{ color: BRAND.muted }}>
            Testimonianze raccolte durante la fase di costruzione di Gireo. Identità complete disponibili al lancio.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-8 md:px-6 md:py-12">
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

      {/* ACCESSO ANTEPRIMA — INTATTO COME APPROVATO */}
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
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                  Lancio Gireo
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Sii tra i primi creator italiani su Gireo
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                  Stiamo selezionando un gruppo ristretto di fotografi, videomaker e creator per
                  testare la piattaforma prima del lancio.
                  <br />
                  Gli utenti selezionati potranno:
                  <br />
                  • pubblicare per primi la propria attrezzatura
                  <br />
                  • accedere al gear di altri creator pre-lancio
                  <br />
                  • zero commissioni sui primi 3 noleggi
                  <br />
                  • priorità nel matching nei primi mesi
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
                      Cosa fai?
                    </option>
                    <option value="fotografo">Fotografo professionista</option>
                    <option value="videomaker">Videomaker / videografo</option>
                    <option value="creator">Content creator</option>
                    <option value="studio">Studio / agenzia</option>
                    <option value="appassionato">Appassionato / pro-am</option>
                    <option value="altro">Altro</option>
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
                    <option value="noleggiare">Noleggiare attrezzatura</option>
                    <option value="pubblicare">Mettere a noleggio il mio gear</option>
                    <option value="entrambi">Entrambe le cose</option>
                  </select>

                  <textarea
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                    style={{ border: `1px solid ${BRAND.border}`, resize: 'vertical' }}
                    placeholder="Quale gear ti interessa noleggiare o mettere a noleggio? (es. Sony A7 IV, ottica 24-70 f/2.8, DJI Mavic 3 Pro, set luci Aputure...)"
                    rows={3}
                  />

                  {formError ? (
                    <div
                      className="rounded-2xl px-4 py-3 text-sm"
                      style={{
                        backgroundColor: '#FFF5F5',
                        color: '#842029',
                        border: '1px solid #F5C2C7',
                      }}
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
                  Accesso riservato a creator italiani. Risposta entro pochi giorni.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
