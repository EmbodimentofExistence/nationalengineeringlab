import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";

import logo from "../assets/nles-logo.jpg";
import teamPhoto from "../assets/nles-team.jpg";
import labPhoto from "../assets/nles-laboratory.jpg";
import roadPhoto from "../assets/nles-road-testing.jpg";
import fieldPhoto from "../assets/nles-field-investigation.jpg";
import concretePhoto from "../assets/nles-concrete-testing.jpg";
import compressionPhoto from "../assets/nles-compression-machine.jpg";
import kawasotiVideo from "../assets/kawasoti-branch.mp4.asset.json";
import machineVideo from "../assets/machine.mp4.asset.json";

const phone = "+977 985-1121070";

const services = [
  {
    number: "01",
    title: "Construction materials",
    description: "Laboratory testing for cement, aggregate, concrete, asphalt and bitumen.",
  },
  {
    number: "02",
    title: "Geotechnical investigation",
    description: "Soil exploration, rotary drilling, sampling and engineering assessment.",
  },
  {
    number: "03",
    title: "Mix design & optimization",
    description: "Practical concrete and asphalt mix design tailored to project requirements.",
  },
  {
    number: "04",
    title: "Field & structural testing",
    description: "RCC core cutting, field density, compaction and in-situ verification.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "National Lab & Engineering Solution | Chitwan" },
      {
        name: "description",
        content:
          "Civil engineering laboratory in Chitwan for materials testing, geotechnical investigation, mix design and field testing across Nepal.",
      },
      { property: "og:title", content: "National Lab & Engineering Solution" },
      {
        property: "og:description",
        content: "Trusted construction materials testing and geotechnical investigation across Nepal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-hero-line text-hero-foreground">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="National Lab home">
            <img src={logo} alt="National Lab and Engineering Solution logo" className="size-11 rounded-sm object-cover" />
            <span className="max-w-48 font-display text-sm font-semibold leading-tight sm:max-w-none sm:text-base">
              National Lab &amp; Engineering Solution
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Main navigation">
            <a href="#services" className="transition-opacity hover:opacity-70">Services</a>
            <a href="#about" className="transition-opacity hover:opacity-70">About</a>
            <a href="#projects" className="transition-opacity hover:opacity-70">Projects</a>
            <a href="#media" className="transition-opacity hover:opacity-70">Media</a>
            <a href="#contact" className="transition-opacity hover:opacity-70">Contact</a>
          </nav>

          <a href="tel:+9779851121070" className="hidden items-center gap-2 border border-hero-line px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-hero-soft lg:flex">
            <Phone className="size-4" /> Call the lab
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center border border-hero-line lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-hero-line bg-hero px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1">
              {[
                ["Services", "#services"],
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Media", "#media"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-3 text-base font-medium">
                  {label}<ChevronRight className="size-4" />
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-hero text-hero-foreground">
          <img src={labPhoto} alt="National Lab materials testing laboratory in Chitwan" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-32 lg:px-10 lg:pb-16">
            <div className="max-w-4xl">
              <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-hero-muted">
                <span className="h-px w-8 bg-accent" /> Bharatpur, Chitwan · Established 2019
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-8xl">
                Testing the ground Nepal builds on.
              </h1>
              <div className="mt-7 flex max-w-3xl flex-col gap-6 border-t border-hero-line pt-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-base leading-7 text-hero-muted lg:text-lg">
                  Independent construction materials testing, geotechnical investigation and engineering support for projects across Nepal.
                </p>
                <a href="#services" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold">
                  Explore services <ArrowDown className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
            {["ISO 9001:2015 certified", "Nepal Standards certified", "Laboratory & field services"].map((item) => (
              <div key={item} className="flex items-center gap-3 py-5 sm:px-6 sm:first:pl-0">
                <Check className="size-4 shrink-0 text-accent" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="section-kicker">Our services</p>
                <h2 className="mt-4 max-w-md font-display text-4xl font-semibold leading-tight lg:text-5xl">Clear answers for critical decisions.</h2>
                <p className="mt-5 max-w-md leading-7 text-muted-foreground">
                  From the laboratory to the field, our work helps engineers and contractors verify materials, understand site conditions and build with confidence.
                </p>
              </div>
              <div className="border-t border-border">
                {services.map((service) => (
                  <article key={service.number} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[3rem_1fr_1fr] sm:items-start sm:gap-6">
                    <span className="font-mono text-xs text-accent">{service.number}</span>
                    <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <img src={teamPhoto} alt="National Lab team and engineering professionals" className="h-full min-h-80 w-full object-cover" loading="lazy" />
            <div className="flex flex-col justify-center px-5 py-16 lg:px-16 lg:py-24">
              <p className="section-kicker text-ink-muted">Who we are</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight lg:text-5xl">Local expertise. National reach.</h2>
              <p className="mt-6 max-w-xl leading-7 text-ink-muted">
                National Lab and Engineering Solution Pvt. Ltd. is a civil engineering company established in November 2019. We support public agencies, contractors, consultants and development partners with dependable test results and practical engineering insight.
              </p>
              <div className="mt-8 grid gap-4 border-t border-ink-line pt-7 sm:grid-cols-2">
                <p className="text-sm leading-6 text-ink-muted">Based in Ramnagar, Bharatpur with services available throughout Nepal.</p>
                <p className="text-sm leading-6 text-ink-muted">Focused on transparent reporting, consistent methods and long-term working relationships.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-kicker">Work in practice</p>
                <h2 className="mt-4 font-display text-4xl font-semibold lg:text-5xl">Inside the lab. Out in the field.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">Real testing work carried out by the NLES team in Chitwan and at project sites.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
              <ProjectImage src={roadPhoto} alt="Road surface testing by the NLES field team" label="Road & field testing" className="md:col-span-7 md:row-span-2" />
              <ProjectImage src={fieldPhoto} alt="Geotechnical investigation at a project site" label="Site investigation" className="md:col-span-5" />
              <div className="grid grid-cols-2 gap-4 md:col-span-5">
                <ProjectImage src={concretePhoto} alt="Concrete testing in the laboratory" label="Concrete testing" />
                <ProjectImage src={compressionPhoto} alt="Compression testing machine" label="Lab equipment" />
              </div>
            </div>
          </div>
        </section>

        <section id="media" className="scroll-mt-20 border-y border-border bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="section-kicker">From our facilities</p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight lg:text-5xl">See the work in motion.</h2>
              </div>
              <p className="max-w-lg leading-7 text-muted-foreground lg:justify-self-end">
                A closer look at our Kawasoti branch and the testing equipment used in day-to-day laboratory work.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <VideoFeature src={kawasotiVideo.url} poster={labPhoto} title="Kawasoti branch" description="A walk-through of the NLES branch facility." />
              <VideoFeature src={machineVideo.url} poster={compressionPhoto} title="Testing machinery" description="Laboratory equipment in operation." />
            </div>
            <a href="https://www.youtube.com/@NationalLabandEngineeringSolut" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:underline">
              <Youtube className="size-5 text-accent" /> Visit the NLES YouTube channel <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div>
              <p className="section-kicker">Testing capability</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">A practical range of laboratory tests.</h2>
            </div>
            <div className="grid gap-x-8 border-t border-border sm:grid-cols-2">
              {["Particle size distribution", "Optimum moisture content (OMC)", "Maximum dry density (MDD)", "California bearing ratio (CBR)", "Los Angeles abrasion (LAA)", "Aggregate impact value (AIV)", "Aggregate crushing value (ACV)", "Liquid & plastic limits", "Flakiness & elongation indices", "Consolidation & direct shear", "Unconfined compression", "Point load testing"].map((test) => (
                <div key={test} className="flex items-center gap-3 border-b border-border py-4 text-sm font-medium">
                  <span className="size-1.5 shrink-0 bg-accent" />{test}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-border bg-surface">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.1fr_0.9fr]">
            <div className="px-5 py-16 lg:px-10 lg:py-24">
              <p className="section-kicker">Start a conversation</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight lg:text-6xl">Need a material test or site investigation?</h2>
              <a href={`tel:${phone.replaceAll(" ", "")}`} className="mt-8 inline-flex items-center gap-3 bg-accent px-6 py-4 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent-strong">
                <Phone className="size-4" /> Call {phone}
              </a>
            </div>
            <div className="border-t border-border px-5 py-12 lg:border-l lg:border-t-0 lg:px-12 lg:py-24">
              <ContactRow icon={<MapPin className="size-5" />} label="Visit" value="Bharatpur Metropolitan City–1, Ramnagar, Chitwan, Nepal" href="https://www.google.com/maps/place/National+Lab+and+Engineering+Solution+Pvt.+Ltd/@27.7343509,84.4469473,17z" />
              <ContactRow icon={<Phone className="size-5" />} label="Phone" value="056-599168 · 9801564422 · 9855057582" href="tel:056599168" />
              <ContactRow icon={<Mail className="size-5" />} label="Email" value="nationallab.bharatpur@gmail.com" href="mailto:nationallab.bharatpur@gmail.com" />
              <ContactRow icon={<ArrowUpRight className="size-5" />} label="Facebook" value="National Lab and Engineering Solution Pvt. Ltd." href="https://www.facebook.com/Nationallab599168" />
            </div>
          </div>
          <div className="h-80 border-t border-border lg:h-96">
            <iframe
              title="National Lab and Engineering Solution location"
              src="https://maps.google.com/maps?q=National%20Lab%20and%20Engineering%20Solution%20Pvt.%20Ltd,%20Bharatpur%2044207,%20Chitwan,%20Nepal&t=m&z=10&output=embed&iwloc=near"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 National Lab and Engineering Solution Pvt. Ltd.</p>
          <p>Bharatpur, Chitwan · Serving projects across Nepal</p>
        </div>
      </footer>
    </div>
  );
}

function VideoFeature({ src, poster, title, description }: { src: string; poster: string; title: string; description: string }) {
  return (
    <article>
      <div className="relative overflow-hidden bg-ink">
        <video controls preload="metadata" poster={poster} className="aspect-video w-full object-cover">
          <source src={src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 bg-caption px-3 py-2 text-xs font-semibold text-hero-foreground">
          <Play className="size-3.5 fill-current" /> NLES video
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </article>
  );
}

function ProjectImage({ src, alt, label, className = "" }: { src: string; alt: string; label: string; className?: string }) {
  return (
    <figure className={`group relative min-h-64 overflow-hidden bg-muted ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-caption px-4 py-3 text-xs font-semibold text-hero-foreground">
        {label}<ArrowUpRight className="size-4" />
      </figcaption>
    </figure>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group flex gap-4 border-b border-border py-6 first:pt-0">
      <span className="mt-1 text-accent">{icon}</span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
        <span className="mt-2 block break-words text-sm font-medium leading-6 group-hover:underline">{value}</span>
      </span>
    </a>
  );
}
