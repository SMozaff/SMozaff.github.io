/**
 * Systems Ledger reconstruction — the Persian composition follows the RTL editorial spec in ideas.md.
 * Latin project names and identifiers are semantically isolated; evidence language deliberately limits claims.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  CircleDot,
  Code2,
  ExternalLink,
  FileText,
  Github,
  Layers3,
  Mail,
  Network,
  Orbit,
} from "lucide-react";
import type { ReactNode } from "react";
import { enCopy, faCopy, links, type Locale, type Project } from "@/lib/portfolio";

const storage = "https://smozaff.github.io/manus-storage";

function Ltr({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <bdi className={className} lang="en" dir="ltr">{children}</bdi>;
}

const technicalTokens = /(Soheil Mozaffari|Raven Metadata Extractor|Rezvan Mesh|Watermelon MediaPlayer|ONYX Framework|Interface-First Execution Methodology \(IFEM\)|IFEM|CLI|CI|FFI|CRDT|DOI|RTL|BLE|JNI|C2PA|EXIF|XMP|GPS|Rust|Kotlin|Python|Android|Bluetooth LE|Wi‑Fi Direct|Media3|ExoPlayer|Cloud Relay|Docker|Helm|Terraform|GitHub|ORCID|Systems Ledger)/;

function BidiText({ text, isFa }: { text: string; isFa: boolean }) {
  if (!isFa) return <>{text}</>;
  return <>{text.split(technicalTokens).map((part, index) => technicalTokens.test(part) ? <Ltr key={`${part}-${index}`}>{part}</Ltr> : part)}</>;
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function EvidenceVisual({ kind }: { kind: Project["evidenceKind"] }) {
  if (kind === "raven") {
    return <img src={`${storage}/raven-metadata-gui_e2db5b00.png`} alt="Raven Metadata Extractor interface" loading="lazy" />;
  }
  if (kind === "media") {
    return <img src={`${storage}/watermelon-mediaplayer-ui_fcb60a06.png`} alt="Watermelon MediaPlayer design-system output" loading="lazy" />;
  }
  if (kind === "vector") {
    return <img src={`${storage}/watermelon-vector-converter.png`} alt="Watermelon Vector Converter interface" loading="lazy" />;
  }
  if (kind === "ifem") {
    return <img src={`${storage}/ifem-contract-boundaries_5ce6019e.jpg`} alt="IFEM contract-boundary document visual" loading="lazy" />;
  }
  if (kind === "rezvan") {
    return <img className="rezvan-mark-visual" src="/manus-storage/rezvanmesh-coin-mark.png" alt="RezvanMesh project mark" loading="lazy" />;
  }
  return <img className="onyx-logo-visual" src="/manus-storage/onyx-logo.png" alt="ONYX Framework mark" loading="lazy" />;
}

const onyxMedia = [
  { src: "/manus-storage/onyx-sign-in.webp", alt: "ONYX secure browser access sign-in interface", label: "Secure browser access" },
  { src: "/manus-storage/onyx-operational-overview.png", alt: "ONYX operational overview interface", label: "Operational overview" },
  { src: "/manus-storage/onyx-missions.png", alt: "ONYX mission portfolio interface", label: "Mission portfolio" },
  { src: "/manus-storage/onyx-todos-targets.png", alt: "ONYX todos and targets interface", label: "Todos & targets" },
  { src: "/manus-storage/onyx-staff-loans.png", alt: "ONYX staff-loan workflow interface", label: "Staff-loan workflow" },
] as const;

function OnyxMediaGallery({ isFa }: { isFa: boolean }) {
  const copy = isFa
    ? { aria: "شواهد رابط‌های کاربری ONYX", eyebrow: "شواهد رابط کاربری", heading: "سطوح کاربری سامانهٔ عملیات مأموریت", note: "تصاویر ارائه‌شده نمایی از رابط‌های کاربری هستند و به‌تنهایی کامل بودن محصول، استقرار عملیاتی یا رفتار سامانه را اثبات نمی‌کنند.", labels: ["دسترسی امن از مرورگر", "نمای عملیاتی", "پرتفوی مأموریت", "فهرست کارها و اهداف", "گردش‌کار واگذاری موقت"] }
    : { aria: "ONYX client-surface evidence", eyebrow: "Client-surface evidence", heading: "Mission-operations interface surfaces", note: "The supplied captures document interface surfaces only; they do not by themselves establish a finished product, operational deployment, or system behavior.", labels: ["Secure browser access", "Operational overview", "Mission portfolio", "Todos & targets", "Staff-loan workflow"] };
  return (
    <section className="onyx-media-gallery" aria-label={copy.aria}>
      <div className="onyx-media-gallery__intro">
        <div><p className="evidence-label">{copy.eyebrow}</p><h4>{copy.heading}</h4></div>
      </div>
      <div className="onyx-media-grid">
        {onyxMedia.map((media, index) => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption>{copy.labels[index]}</figcaption></figure>)}
      </div>
      <p className="onyx-media-gallery__note">{copy.note}</p>
    </section>
  );
}

const rezvanMedia = [
  { src: "/manus-storage/rezvanmesh-permissions.png", alt: "RezvanMesh permissions setup interface", label: "Permission setup" },
  { src: "/manus-storage/rezvanmesh-network.png", alt: "RezvanMesh network topology interface", label: "Network topology" },
  { src: "/manus-storage/rezvanmesh-emergency.png", alt: "RezvanMesh emergency alert interface", label: "Emergency alert" },
  { src: "/manus-storage/rezvanmesh-diagnostics.png", alt: "RezvanMesh diagnostics interface", label: "Diagnostics" },
  { src: "/manus-storage/rezvanmesh-broadcast.png", alt: "RezvanMesh broadcast-message interface", label: "Broadcast message" },
] as const;

function RezvanMediaGallery({ isFa }: { isFa: boolean }) {
  const copy = isFa
    ? { aria: "شواهد رابط‌های موبایل RezvanMesh", eyebrow: "شواهد رابط کاربری", heading: "سطوح کاربردی ارتباط مش", note: "نشان‌ها و تصاویر ارائه‌شده سطوح رابط کاربریِ مجوزها، توپولوژی شبکه، هشدار، تشخیص و پیام‌رسانی را نشان می‌دهند؛ به‌تنهایی رفتار مش زنده، اعتبارسنجی چنددستگاهی یا کامل بودن محصول را اثبات نمی‌کنند.", labels: ["راه‌اندازی مجوزها", "توپولوژی شبکه", "هشدار اضطراری", "تشخیص", "ارسال پیام"] }
    : { aria: "RezvanMesh mobile-interface evidence", eyebrow: "Mobile-interface evidence", heading: "Offline-mesh communication surfaces", note: "The supplied marks and captures document the permission, topology, alert, diagnostic, and message-composition surfaces only; they do not by themselves establish live mesh behavior, multi-device validation, or a complete product.", labels: ["Permission setup", "Network topology", "Emergency alert", "Diagnostics", "Broadcast message"] };
  return (
    <section className="rezvan-media-gallery" aria-label={copy.aria}>
      <div className="rezvan-media-gallery__intro"><img src="/manus-storage/rezvanmesh-icon-mark.png" alt="" aria-hidden="true" /><div><p className="evidence-label">{copy.eyebrow}</p><h4>{copy.heading}</h4></div></div>
      <div className="rezvan-media-grid">{rezvanMedia.map((media, index) => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption>{copy.labels[index]}</figcaption></figure>)}</div>
      <p className="rezvan-media-gallery__note">{copy.note}</p>
    </section>
  );
}

function ProjectCard({ project, isFa }: { project: Project; isFa: boolean }) {
  const labels = isFa
    ? { details: "بررسی پروندهٔ پروژه", problem: "مسئله", constraints: "محدودیت‌ها", architecture: "معماری", implementation: "پیاده‌سازی", evidence: "راستی‌آزمایی و شواهد", limits: "وضعیت و حدود فعلی", caseStudy: "مطالعهٔ موردی کامل", methodology: "روش‌شناسی IFEM", code: "مشاهدهٔ کد" }
    : { details: "Open project record", problem: "Problem", constraints: "Constraints", architecture: "Architecture", implementation: "Implementation", evidence: "Verification & evidence", limits: "Current limits", caseStudy: "View full case study", methodology: "IFEM methodology", code: "View code" };
  return (
    <article className={`project-card project-${project.id}`} id={project.id} data-reveal>
      <div className="project-serial" aria-hidden="true">{project.number}</div>
      <div className="project-primary">
        <div className="project-meta"><span><BidiText text={project.category} isFa={isFa} /></span><span className="project-status"><CircleDot size={12} /><BidiText text={project.status} isFa={isFa} /></span></div>
        <h3><Ltr>{project.title}</Ltr></h3>
        {project.subtitle && <p className="project-subtitle"><BidiText text={project.subtitle} isFa={isFa} /></p>}
        <p className="project-summary"><BidiText text={project.summary} isFa={isFa} /></p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => <li key={highlight}><BidiText text={highlight} isFa={isFa} /></li>)}
        </ul>
        {project.id !== "ifem" && (
          <div className="ifem-relationship" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted, #5a6665)', fontWeight: 500 }}>
            <Orbit size={14} style={{ color: 'var(--brand, #cf3e2a)' }} />
            <span>{isFa ? "نمایانگر اصول IFEM در عمل" : "Demonstrates IFEM principles in practice"}</span>
          </div>
        )}
        <div className="project-actions">
          {project.caseStudy && <a className="text-link case-study-link" href={project.caseStudy} target="_blank" rel="noopener noreferrer">{labels.caseStudy}<ExternalLink size={15} /></a>}
          {project.primary && <a className="text-link" href={project.primary.href} target="_blank" rel="noopener noreferrer">{project.primary.label}<ArrowUpRight size={15} /></a>}
          {project.secondary && <a className="text-link" href={project.secondary.href} target="_blank" rel="noopener noreferrer">{project.secondary.label}<FileText size={15} /></a>}
          {project.id !== "ifem" && <a className="text-link" href={links.ifem} target="_blank" rel="noopener noreferrer">{labels.methodology}<Orbit size={15} /></a>}
          {project.github && <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">{labels.code}<Github size={15} /></a>}
        </div>
      </div>
      <aside className="evidence-panel" data-reveal>
        <p className="evidence-label"><BidiText text={project.evidenceLabel} isFa={isFa} /></p>
        <div className="evidence-visual"><EvidenceVisual kind={project.evidenceKind} /></div>
        <h4><BidiText text={project.proof} isFa={isFa} /></h4>
        <p><BidiText text={project.proofDetail} isFa={isFa} /></p>
      </aside>
      {project.id === "onyx" && <OnyxMediaGallery isFa={isFa} />}
      {project.id === "rezvan" && <RezvanMediaGallery isFa={isFa} />}
      <details className="project-detail">
        <summary>{labels.details}<ChevronDown size={17} aria-hidden="true" /></summary>
        <div className="detail-grid">
          {([
            [labels.problem, project.detail.problem],
            [labels.constraints, project.detail.constraints],
            [labels.architecture, project.detail.architecture],
            [labels.implementation, project.detail.implementation],
            [labels.evidence, project.detail.evidence],
          ] as const).map(([label, text]) => <section key={label}><h4>{label}</h4><p><BidiText text={text} isFa={isFa} /></p></section>)}
          <section className="detail-limit"><h4>{labels.limits}</h4><p><BidiText text={project.detail.limits} isFa={isFa} /></p></section>
        </div>
      </details>
    </article>
  );
}

export default function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = locale === "fa" ? faCopy : enCopy;
  const isFa = locale === "fa";
  const htmlDir = isFa ? "rtl" : "ltr";
  const profileCards = [
    { label: "GitHub", href: links.github, icon: Github, value: "SMozaff" },
    { label: "IFEM Doctrine", href: links.ifem, icon: BookOpen, value: "ifem-doctrine.github.io" },
    { label: "Zenodo", href: links.primaryDoi, icon: FileText, value: "10.5281/zenodo.20621561" },
    { label: "ORCID", href: links.orcid, icon: Orbit, value: "0009-0001-2428-1295" },
    { label: "LinkedIn", href: links.linkedin, icon: Network, value: "su-muzaff" },
  ];
  return (
    <div className={`portfolio-page ${isFa ? "fa-page" : "en-page"}`} dir={htmlDir} lang={locale}>
      <a className="language-bar" href={copy.languageHref}>{copy.languageLabel}<ArrowDownRight size={16} /></a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Soheil Mozaffari home"><BrandMark /><span><Ltr>Soheil Mozaffari</Ltr><small>{isFa ? "سامانه و نرم‌افزار" : "Systems & software"}</small></span></a>
        <nav aria-label={isFa ? "پیمایش اصلی" : "Main navigation"}>
          <a href="#top">{isFa ? "خانه" : "Home"}</a><a href="#about">{copy.nav.about}</a><a href="#work">{copy.nav.work}</a><a href="#methodology">{copy.nav.methodology}</a><a className="nav-ifem" href={links.ifem} target="_blank" rel="noreferrer">{isFa ? "IFEM ↗" : "IFEM Doctrine ↗"}</a><a href="#profiles">{copy.nav.profiles}</a><a href="#contact">{copy.nav.contact}</a>
        </nav>
      </header>
      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1><Ltr>Soheil Mozaffari</Ltr></h1>
            {isFa && <p className="localized-name">{copy.localizedName}</p>}
            <p className="role"><BidiText text={copy.role} isFa={isFa} /></p>
            <p className="hero-statement"><BidiText text={copy.hero} isFa={isFa} /></p>
            <div className="hero-actions"><a className="button button-dark" href="#work">{copy.heroPrimary}<ArrowDownRight size={17} /></a><a className="button button-light" href={links.ifem} target="_blank" rel="noreferrer">{copy.heroSecondary}<ArrowUpRight size={17} /></a></div>
          </div>
          <div className="hero-art" data-reveal aria-label={isFa ? "نشانهٔ تصویری مرزهای سامانه" : "System-boundary visual"}>
            <img src={`${storage}/soheil-hero-systems-ledger_7e8329be.jpg`} alt="" />
            <p><BidiText text={copy.heroCaption} isFa={isFa} /></p>
          </div>
        </section>

        <section id="about" className="about-section section-shell editorial-section" data-reveal>
          <p className="section-rail">{copy.aboutRail}</p>
          <div className="section-content"><p className="kicker">{copy.aboutKicker}</p><h2>{copy.aboutHeading}</h2><p><BidiText text={copy.aboutBody} isFa={isFa} /></p></div>
        </section>

        <section id="work" className="work-section section-shell" data-reveal>
          <div className="work-intro" data-reveal><p className="section-rail">{copy.workRail}</p><div><p className="kicker">{copy.workKicker}</p><h2>{copy.projectsHeading}</h2><p><BidiText text={copy.workIntro} isFa={isFa} /></p></div></div>
          <div className="project-list">{copy.projects.map((project) => <ProjectCard project={project} isFa={isFa} key={project.id} />)}</div>
        </section>

        <section id="methodology" className="methodology-section section-shell editorial-section" data-reveal>
          <p className="section-rail">{copy.methodologyRail}</p>
          <div className="section-content"><p className="kicker"><Ltr>IFEM</Ltr></p><h2>{copy.methodologyHeading}</h2><p><BidiText text={copy.methodologyBody} isFa={isFa} /></p><div className="methodology-actions"><a className="text-link strong-link" href={isFa ? "https://ifem-doctrine.github.io/fa/" : links.ifem} target="_blank" rel="noreferrer">{isFa ? "ورود به وب‌سایت IFEM" : "Explore IFEM Doctrine"}<ArrowUpRight size={16} /></a><a className="text-link strong-link" href={links.primaryDoi} target="_blank" rel="noreferrer">{copy.methodologyCta}<FileText size={16} /></a></div><blockquote data-reveal><BidiText text={copy.methodologyQuote} isFa={isFa} /></blockquote></div>
        </section>

        <section id="profiles" className="profiles-section section-shell editorial-section" data-reveal>
          <p className="section-rail">{copy.profilesRail}</p>
          <div className="section-content"><p className="kicker">{copy.profilesKicker}</p><h2>{copy.profilesHeading}</h2><p><BidiText text={copy.profilesBody} isFa={isFa} /></p><div className="profile-grid">{profileCards.map(({ label, href, icon: Icon, value }) => <a href={href} target="_blank" rel="noreferrer" className="profile-card" data-reveal key={label}><Icon size={20} /><span>{label}</span><Ltr>{value}</Ltr><ArrowUpRight size={16} /></a>)}</div></div>
        </section>
      </main>
      <footer id="contact" className="site-footer">
        <div><BrandMark /><strong><Ltr>Soheil Mozaffari</Ltr></strong><p>{copy.role}</p></div>
        <a className="footer-contact" href="mailto:Soheil.Mozaffari@gmail.com"><Mail size={17} /><Ltr>Soheil.Mozaffari@gmail.com</Ltr></a>
        <p className="footer-ledger">{isFa ? <><span>وب‌سایت حرفه‌ای / </span><Ltr>Systems Ledger</Ltr></> : "Professional website / Systems Ledger"}</p>
      </footer>
      <a className="back-to-top" href="#top" aria-label={isFa ? "بازگشت به بالای صفحه" : "Back to top"}>{isFa ? "↑ بالا" : "↑ Top"}</a>
    </div>
  );
}
