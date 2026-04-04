'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Boxes,
  CheckCircle2,
  Clock3,
  CreditCard,
  ShieldCheck,
  Truck,
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
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Pagamento e cauzione gestiti da Gireo',
    text: 'Chi noleggia paga in piattaforma. La cauzione resta protetta e viene sbloccata a fine noleggio se tutto è regolare.',
  },
  {
    icon: Truck,
    title: 'Spedizione integrata e tracciata',
    text: 'Gireo può gestire etichetta, tracking e reso in un flusso semplice, così il noleggio è ordinato anche a distanza.',
  },
  {
    icon: BadgeCheck,
    title: 'Più fiducia per entrambe le parti',
    text: 'Richieste strutturate, utenti verificati e passaggi chiari. Molto meglio del solito scambio improvvisato in chat.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Pubblica o trova un prodotto',
    text: 'Chi ha attrezzatura inutilizzata la mette online. Chi ne ha bisogno trova quello che serve senza acquistarlo.',
  },
  {
    number: '2',
    title: 'Gireo gestisce il flusso',
    text: 'Richiesta, pagamento, cauzione e consegna vengono organizzati in modo più chiaro, sicuro e tracciato.',
  },
  {
    number: '3',
    title: 'Uno usa, l’altro guadagna',
    text: 'Chi noleggia ottiene un prodotto per il tempo che serve. Chi lo pubblica monetizza un bene che prima restava fermo.',
  },
];

const earningCards = [
  {
    title: 'Metti a reddito ciò che già possiedi',
    text: 'Molti oggetti costosi vengono usati solo in alcuni periodi: tablet, monitor, videocamere, droni, trapani, kit tecnici. Su Gireo possono iniziare a rendere.',
  },
  {
    title: 'Non devi vendere per liberarti di un bene',
    text: 'Se un prodotto ti serve ancora, ma non sempre, puoi mantenerne la proprietà e farlo lavorare nei momenti in cui resta fermo.',
  },
  {
    title: 'Più ordine, meno frizione',
    text: 'Gireo rende il noleggio più semplice da gestire perché struttura richiesta, pagamento, cauzione e consegna in un unico percorso.',
  },
];

const faqs = [
  {
    q: 'Cos’è Gireo, in concreto?',
    a: 'Gireo è una piattaforma di noleggio che aiuta due tipi di utenti: chi ha bisogno di attrezzatura per un periodo limitato e chi vuole guadagnare mettendo a noleggio beni inutilizzati, inclusi privati, professionisti e negozi.',
  },
  {
    q: 'Che tipo di prodotti si possono pubblicare?',
    a: 'Dispositivi elettronici, attrezzatura professionale, videocamere, fotocamere, droni, strumenti da lavoro, materiale per eventi e altri prodotti usati in modo saltuario, anche provenienti da negozi e attività.',
  },
  {
    q: 'Come funziona il guadagno per chi pubblica?',
    a: 'Il proprietario decide cosa mettere a noleggio e a quale prezzo. Quando il prodotto viene noleggiato, può trasformare un bene fermo in un’entrata, sia che sia un privato sia un’attività.',
  },
  {
    q: 'Come viene gestita la sicurezza?',
    a: 'Gireo non è una semplice bacheca: struttura il noleggio con pagamento in piattaforma, cauzione, tracking e un flusso progettato per diventare sempre più sicuro, anche con coperture assicurative dedicate.',
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

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: BRAND.primary }}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl" style={{ color: BRAND.text }}>
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-8 md:text-lg" style={{ color: BRAND.muted }}>
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
  const invalidSteps = steps.length !== 3;
  const invalidFaqs = faqs.length < 3;

  if (!invalidCategories && !invalidSteps && !invalidFaqs) return null;

  return (
    <div
      className="mx-auto mb-6 max-w-7xl rounded-2xl border p-4 text-sm"
      style={{ borderColor: '#F5C2C7', background: '#FFF5F5', color: '#842029' }}
    >
      <p className="font-semibold">Runtime checks failed</p>
      {invalidCategories ? <p>Le categorie sono troppo poche.</p> : null}
      {invalidSteps ? <p>I passaggi principali devono essere 3.</p> : null}
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
  });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      !formData.profileType.trim()
    ) {
      setFormSuccess('');
      setFormError('Compila nome, email, profilo e modalità di utilizzo prima di inviare la richiesta.');
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
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormSuccess('Richiesta inviata correttamente. Ti contatteremo al lancio di Gireo.');
        setFormData({
          fullName: '',
          email: '',
          useCase: '',
          profileType: '',
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
                Non vendere, fallo rendere.
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm md:flex" style={{ color: BRAND.muted }}>
            <a href="#come-funziona" className="transition hover:opacity-80">Come funziona</a>
            <a href="#guadagni" className="transition hover:opacity-80">Guadagna con Gireo</a>
            <a href="#sicurezza" className="transition hover:opacity-80">Sicurezza</a>
            <a href="#faq" className="transition hover:opacity-80">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#accesso-anteprima"
              className="rounded-2xl px-4 py-2 text-sm font-medium"
              style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
            >
              Scopri come accedere
            </a>
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

      <section className="relative overflow-hidden px-4 pb-14 pt-10 md:px-6 md:pb-20 md:pt-16">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at top left, ${BRAND.soft} 0%, transparent 35%), radial-gradient(circle at bottom right, rgba(95,196,133,0.14) 0%, transparent 30%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <Pill>Guadagno da beni inutilizzati</Pill>
              <Pill>Noleggio semplice</Pill>
              <Pill>Flusso sicuro</Pill>
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl" style={{ color: BRAND.text }}>
              La piattaforma che ti aiuta a <span style={{ color: BRAND.primary }}>guadagnare</span> da ciò che non usi e a <span style={{ color: BRAND.primary }}>noleggiare</span> ciò che ti serve.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 md:text-xl" style={{ color: BRAND.muted }}>
              Gireo nasce per dare valore a oggetti e attrezzature che spesso restano fermi, sia in casa che in negozi, uffici e magazzini. Se hai un prodotto inutilizzato, puoi metterlo a noleggio e trasformarlo in un’entrata. Se invece hai bisogno di uno strumento solo per un periodo limitato, puoi noleggiarlo senza acquistarlo.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
              <div className="rounded-3xl p-5" style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}>
                <p className="text-sm font-semibold">Per chi possiede attrezzatura (anche negozi e aziende)</p>
                <p className="mt-2 text-sm leading-7" style={{ color: BRAND.muted }}>
                  Tablet, monitor, trapani, videocamere, fotocamere, droni e device professionali possono iniziare a generare valore invece di restare inutilizzati.
                </p>
              </div>
              <div className="rounded-3xl p-5" style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}>
                <p className="text-sm font-semibold">Per chi ha bisogno di un prodotto</p>
                <p className="mt-2 text-sm leading-7" style={{ color: BRAND.muted }}>
                  Noleggi solo per il tempo che ti serve, con un flusso più chiaro rispetto ai classici accordi improvvisati tra privati.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#accesso-anteprima"
                className="rounded-2xl px-6 py-4 text-center text-sm font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${BRAND.primaryDark}, ${BRAND.primary})` }}
              >
                Ottieni accesso anticipato
              </a>
              <a
                href="#guadagni"
                className="rounded-2xl px-6 py-4 text-center text-sm font-semibold"
                style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
              >
                Scopri come funziona
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <Card className="p-6 md:p-7">
              <p className="text-sm font-medium" style={{ color: BRAND.primary }}>
                In due righe
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Gireo mette in contatto bisogno e valore inutilizzato.</h3>
              <div className="mt-6 space-y-4 text-sm leading-7" style={{ color: BRAND.muted }}>
                <p>
                  Da una parte c’è chi cerca un prodotto per pochi giorni o per un progetto specifico. Dall’altra c’è chi possiede attrezzatura che usa solo a periodi.
                </p>
                <p>
                  Gireo serve a far incontrare queste due esigenze in un flusso più semplice, più chiaro e più credibile.
                </p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl p-4" style={{ backgroundColor: BRAND.bg }}>
                  <p className="text-xs uppercase tracking-[0.18em]" style={{ color: BRAND.muted }}>
                    Chi pubblica
                  </p>
                  <p className="mt-2 text-lg font-semibold">Guadagna da beni fermi</p>
                </div>
                <div className="rounded-2xl p-4" style={{ backgroundColor: BRAND.bg }}>
                  <p className="text-xs uppercase tracking-[0.18em]" style={{ color: BRAND.muted }}>
                    Chi noleggia
                  </p>
                  <p className="mt-2 text-lg font-semibold">Usa ciò che serve, solo quando serve</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium" style={{ color: BRAND.muted }}>
                    Esempio semplice
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">Quanto può rendere un bene inutilizzato</h3>
                </div>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: BRAND.soft }}
                >
                  <Banknote className="h-6 w-6" style={{ color: BRAND.primary }} />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl p-4 min-h-[132px] flex flex-col justify-between overflow-hidden" style={{ backgroundColor: BRAND.bg }}>
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.12em] leading-tight break-words" style={{ color: BRAND.muted }}>
                    Tablet
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-none">24€/g</p>
                </div>
                <div className="rounded-2xl p-4 min-h-[132px] flex flex-col justify-between overflow-hidden" style={{ backgroundColor: BRAND.bg }}>
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.12em] leading-tight break-words" style={{ color: BRAND.muted }}>
                    Trapano
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-none">18€/g</p>
                </div>
                <div className="rounded-2xl p-4 min-h-[132px] flex flex-col justify-between overflow-hidden" style={{ backgroundColor: BRAND.bg }}>
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.08em] leading-tight break-words max-w-[140px]" style={{ color: BRAND.muted }}>
                    Videocamera
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-none">35€/g</p>
                </div>
                <div className="rounded-2xl p-4 min-h-[132px] flex flex-col justify-between overflow-hidden" style={{ backgroundColor: BRAND.bg }}>
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.08em] leading-tight break-words max-w-[140px]" style={{ color: BRAND.muted }}>
                    Drone pro
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-none">55€/g</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="come-funziona" className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Come funziona"
            title="Come funziona Gireo, in modo semplice e chiaro."
            text="Gireo è pensato per rendere il noleggio più semplice da capire e più facile da usare, sia per chi cerca un prodotto sia per chi vuole guadagnare mettendolo a disposizione."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.number} className="p-6 md:p-7">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold text-white"
                  style={{ background: `linear-gradient(135deg, ${BRAND.primaryDark}, ${BRAND.primary})` }}
                >
                  {step.number}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-base leading-7" style={{ color: BRAND.muted }}>
                  {step.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guadagni" className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Guadagna con Gireo"
            title="Su Gireo il guadagno parte da beni che oggi non ti stanno rendendo nulla."
            text="Il cuore del progetto è questo: aiutare persone, professionisti e aziende a trasformare oggetti fermi in un’opportunità concreta di guadagno, senza doverli vendere."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
            <Card className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: BRAND.soft }}
                >
                  <Boxes className="h-7 w-7" style={{ color: BRAND.primary }} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Perché conviene mettere a noleggio il proprio materiale</h3>
                  <p className="mt-4 text-base leading-8" style={{ color: BRAND.muted }}>
                    In aziende, uffici, magazzini, cantieri e case ci sono continuamente beni che vengono usati poco, a periodi o solo in alcuni progetti.
                    Gireo ti permette di <strong style={{ color: BRAND.text }}>trasformare questi oggetti in un flusso di incasso</strong>, senza venderli e senza perderne la disponibilità per sempre.
                    Questo vale anche per attrezzatura ad alto valore che spesso resta ferma per settimane, come videocamere, fotocamere professionali, droni, gimbal e kit tecnici da produzione.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {earningCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-3xl p-5"
                    style={{ backgroundColor: BRAND.bg, border: `1px solid ${BRAND.border}` }}
                  >
                    <h4 className="text-lg font-semibold">{card.title}</h4>
                    <p className="mt-2 text-sm leading-7" style={{ color: BRAND.muted }}>
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 md:p-8">
              <p className="text-sm font-medium" style={{ color: BRAND.primary }}>
                Esempi concreti
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Cosa puoi mettere a noleggio su Gireo</h3>
              <div className="mt-8 space-y-4">
                {[
                  'Tablet e dispositivi usati solo per fiere, eventi o periodi specifici',
                  'Monitor, laptop e accessori che restano fermi in ufficio o in magazzino',
                  'Videocamere, fotocamere professionali, ottiche e kit video usati solo su alcuni lavori',
                  'Droni professionali e accessori tecnici impiegati soltanto in progetti specifici',
                  'Trapani, strumenti tecnici e attrezzature professionali utilizzate solo a chiamata',
                  'Materiale da allestimento o dispositivi che servono soltanto in alcune lavorazioni',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl p-4" style={{ backgroundColor: BRAND.bg }}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5" style={{ color: BRAND.mintDark }} />
                    <span className="text-sm leading-7" style={{ color: BRAND.text }}>{item}</span>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 rounded-3xl p-6 text-white"
                style={{ background: `linear-gradient(135deg, ${BRAND.primaryDark}, ${BRAND.primary})` }}
              >
                <p className="text-sm text-white/75">Messaggio chiave</p>
                <p className="mt-2 text-2xl font-semibold">
                  Non vendere per liberarti di un bene. Mettilo a noleggio per farlo rendere.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="sicurezza" className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Sicurezza"
            title="Gireo non è una semplice bacheca: struttura il noleggio con pagamento, cauzione, tracking e un flusso progettato per diventare sempre più sicuro."
            text="L’obiettivo di Gireo è creare un sistema più ordinato e credibile per chi noleggia e per chi pubblica, anche con l’evoluzione futura verso coperture assicurative dedicate."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6 md:p-7">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: BRAND.soft }}
                  >
                    <Icon className="h-7 w-7" style={{ color: BRAND.primary }} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-base leading-7" style={{ color: BRAND.muted }}>
                    {item.text}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: CreditCard,
                title: 'Pagamento protetto',
                text: 'Il noleggio viene pagato in piattaforma e la cauzione viene gestita come garanzia separata.',
              },
              {
                icon: Truck,
                title: 'Tracking spedizione',
                text: 'Andata e ritorno possono essere monitorati senza lasciare la piattaforma.',
              },
              {
                icon: Clock3,
                title: 'Flusso più rapido',
                text: 'Richiesta, approvazione e consegna seguono passaggi chiari, senza caos da chat casuali.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-5">
                  <div className="flex items-start gap-4">
                    <Icon className="mt-1 h-5 w-5" style={{ color: BRAND.mintDark }} />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="mt-2 text-sm leading-7" style={{ color: BRAND.muted }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Le domande che contano davvero prima di usare Gireo."
            text="Queste sono le domande più naturali che una persona si farà prima di lasciare i propri dati o iniziare a usare la piattaforma."
          />

          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <Card key={faq.q} className="p-6 md:p-7">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-base leading-8" style={{ color: BRAND.muted }}>
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="accesso-anteprima" className="px-4 pb-20 pt-6 md:px-6 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden p-0">
            <div
              className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12"
              style={{ background: `linear-gradient(135deg, ${BRAND.primaryDark} 0%, ${BRAND.primary} 70%, ${BRAND.mint} 100%)` }}
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">Lancio Gireo</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Vuoi provare Gireo prima del lancio?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                  Lascia i tuoi dati se vuoi usare Gireo per noleggiare prodotti oppure per iniziare a guadagnare mettendo a noleggio attrezzatura, dispositivi e beni professionali che oggi restano fermi.
                </p>
              </div>

              <div className="rounded-[28px] bg-white/95 p-6 shadow-sm md:p-7">
                <h3 className="text-xl font-semibold" style={{ color: BRAND.text }}>
                  Accedi in anteprima a Gireo
                </h3>
                <p className="mt-2 text-sm leading-7" style={{ color: BRAND.muted }}>
                  Accesso anticipato riservato ai primi utenti.
                  <br />
                  <br />
                  Registrandoti ora potrai:
                  <br />
                  • essere tra i primi a pubblicare e guadagnare
                  <br />  
                  • testare la piattaforma prima degli altri
                  <br />  
                  • partire con un vantaggio quando Gireo sarà online per tutti
                </p>

                <form className="mt-6 space-y-3" onSubmit={handlePreviewAccess}>
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
                      style={{ backgroundColor: '#EEF8F2', color: BRAND.mintDark, border: `1px solid ${BRAND.mint}` }}
                    >
                      {formSuccess}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white disabled:opacity-70 cursor-pointer"
                    style={{ backgroundColor: BRAND.primary }}
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Ottieni accesso anticipato'}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                </form>

                <p className="mt-4 text-xs leading-6" style={{ color: BRAND.muted }}>
                  Gireo è pensato per chi vuole noleggiare meglio e per chi vuole iniziare a guadagnare da beni che oggi non rendono nulla, inclusi strumenti ad alto valore come videocamere, fotocamere e droni professionali.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}