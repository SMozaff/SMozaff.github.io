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

const technicalTokens = /(Soheil Mozaffari|Raven Metadata Extractor|Rezvan Mesh|Watermelon MediaPlayer|ONYX Mission Operations|Interface-First Execution Methodology \(IFEM\)|IFEM|CLI|CI|FFI|CRDT|DOI|RTL|BLE|JNI|C2PA|EXIF|XMP|GPS|Rust|Kotlin|Python|Android|Bluetooth LE|Wi‑Fi Direct|Media3|ExoPlayer|Cloud Relay|Docker|Helm|Terraform|GitHub|ORCID|Systems Ledger)/;

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
  if (kind === "ifem") {
    return <img src={`${storage}/ifem-contract-boundaries_5ce6019e.jpg`} alt="IFEM contract-boundary document visual" loading="lazy" />;
  }
  if (kind === "rezvan") {
    return (
      <svg className="architecture-visual" viewBox="0 0 600 340" role="img" aria-label="Rezvan conceptual architecture diagram">
        <rect x="0" y="0" width="600" height="340" fill="#101416" />
        <path d="M70 77H238M362 77H530M70 263H238M362 263H530" stroke="#cf3e2a" strokeWidth="2" strokeDasharray="5 7" />
        <rect x="238" y="44" width="124" height="72" fill="#e8e5db" />
        <rect x="238" y="224" width="124" height="72" fill="#e8e5db" />
        <rect x="222" y="134" width="156" height="72" fill="#cf3e2a" />
        <text x="300" y="76" textAnchor="middle" fill="#101416" fontSize="18" fontFamily="IBM Plex Sans">ANDROID</text>
        <text x="300" y="100" textAnchor="middle" fill="#101416" fontSize="13" fontFamily="IBM Plex Sans">Kotlin UI</text>
        <text x="300" y="178" textAnchor="middle" fill="#fff8ea" fontSize="17" fontFamily="IBM Plex Sans">JNI BOUNDARY</text>
        <text x="300" y="256" textAnchor="middle" fill="#101416" fontSize="18" fontFamily="IBM Plex Sans">RUST CORE</text>
        <text x="300" y="280" textAnchor="middle" fill="#101416" fontSize="13" fontFamily="IBM Plex Sans">routing · crypto · session</text>
        <text x="70" y="67" fill="#e8e5db" fontSize="13" fontFamily="IBM Plex Sans">BLE</text>
        <text x="452" y="67" fill="#e8e5db" fontSize="13" fontFamily="IBM Plex Sans">WI-FI DIRECT</text>
        <text x="70" y="284" fill="#e8e5db" fontSize="13" fontFamily="IBM Plex Sans">ENCRYPTED STORE</text>
        <text x="418" y="284" fill="#e8e5db" fontSize="13" fontFamily="IBM Plex Sans">DEVICE TESTS</text>
      </svg>
    );
  }
  return (
    <svg className="architecture-visual" viewBox="0 0 600 340" role="img" aria-label="ONYX conceptual system diagram">
      <rect x="0" y="0" width="600" height="340" fill="#101416" />
      <rect x="58" y="72" width="150" height="74" fill="#e8e5db" />
      <rect x="225" y="132" width="150" height="74" fill="#cf3e2a" />
      <rect x="392" y="72" width="150" height="74" fill="#e8e5db" />
      <rect x="225" y="244" width="150" height="54" fill="#9aa4a3" />
      <path d="M208 109H225M375 169H392M300 206V244M133 146V254M467 146V254" stroke="#cf3e2a" strokeWidth="2" />
      <text x="133" y="103" textAnchor="middle" fill="#101416" fontSize="17" fontFamily="IBM Plex Sans">CORE / DOMAIN</text>
      <text x="300" y="162" textAnchor="middle" fill="#fff8ea" fontSize="17" fontFamily="IBM Plex Sans">CRDT SYNC</text>
      <text x="467" y="103" textAnchor="middle" fill="#101416" fontSize="17" fontFamily="IBM Plex Sans">INFRASTRUCTURE</text>
      <text x="300" y="276" textAnchor="middle" fill="#101416" fontSize="13" fontFamily="IBM Plex Sans">CLIENT / TRANSPORT</text>
    </svg>
  );
}

function ProjectCard({ project, isFa }: { project: Project; isFa: boolean }) {
  const labels = isFa
    ? { details: "بررسی پروندهٔ پروژه", problem: "مسئله", constraints: "محدودیت‌ها", architecture: "معماری", implementation: "پیاده‌سازی", evidence: "راستی‌آزمایی و شواهد", limits: "وضعیت و حدود فعلی", code: "مشاهدهٔ کد" }
    : { details: "Open project record", problem: "Problem", constraints: "Constraints", architecture: "Architecture", implementation: "Implementation", evidence: "Verification & evidence", limits: "Current limits", code: "View code" };
  return (
    <article className={`project-card project-${project.id}`} id={project.id}>
      <div className="project-serial" aria-hidden="true">{project.number}</div>
      <div className="project-primary">
        <div className="project-meta"><span><BidiText text={project.category} isFa={isFa} /></span><span className="project-status"><CircleDot size={12} /><BidiText text={project.status} isFa={isFa} /></span></div>
        <h3><Ltr>{project.title}</Ltr></h3>
        {project.subtitle && <p className="project-subtitle"><BidiText text={project.subtitle} isFa={isFa} /></p>}
        <p className="project-summary"><BidiText text={project.summary} isFa={isFa} /></p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => <li key={highlight}><BidiText text={highlight} isFa={isFa} /></li>)}
        </ul>
        <div className="project-actions">
          {project.primary && <a className="text-link" href={project.primary.href} target="_blank" rel="noreferrer">{project.primary.label}<ArrowUpRight size={15} /></a>}
          {project.secondary && <a className="text-link" href={project.secondary.href} target="_blank" rel="noreferrer">{project.secondary.label}<FileText size={15} /></a>}
          {project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">{labels.code}<Github size={15} /></a>}
        </div>
      </div>
      <aside className="evidence-panel">
        <p className="evidence-label"><BidiText text={project.evidenceLabel} isFa={isFa} /></p>
        <div className="evidence-visual"><EvidenceVisual kind={project.evidenceKind} /></div>
        <h4><BidiText text={project.proof} isFa={isFa} /></h4>
        <p><BidiText text={project.proofDetail} isFa={isFa} /></p>
      </aside>
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
    { label: "ORCID", href: links.orcid, icon: Orbit, value: "0009-0001-2428-1295" },
    { label: "LinkedIn", href: links.linkedin, icon: Network, value: "su-muzaff" },
  ];
  return (
    <div className={`portfolio-page ${isFa ? "fa-page" : "en-page"}`} dir={htmlDir} lang={locale}>
      <a className="language-bar" href={copy.languageHref}>{copy.languageLabel}<ArrowDownRight size={16} /></a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Soheil Mozaffari home"><BrandMark /><span><Ltr>Soheil Mozaffari</Ltr><small>{isFa ? "سامانه و نرم‌افزار" : "Systems & software"}</small></span></a>
        <nav aria-label={isFa ? "پیمایش اصلی" : "Main navigation"}>
          <a href="#about">{copy.nav.about}</a><a href="#work">{copy.nav.work}</a><a href="#methodology">{copy.nav.methodology}</a><a href="#profiles">{copy.nav.profiles}</a><a href="#contact">{copy.nav.contact}</a>
        </nav>
      </header>
      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1><Ltr>Soheil Mozaffari</Ltr></h1>
            {isFa && <p className="localized-name">{copy.localizedName}</p>}
            <p className="role"><BidiText text={copy.role} isFa={isFa} /></p>
            <p className="hero-statement"><BidiText text={copy.hero} isFa={isFa} /></p>
            <div className="hero-actions"><a className="button button-dark" href="#work">{copy.heroPrimary}<ArrowDownRight size={17} /></a><a className="button button-light" href="#methodology">{copy.heroSecondary}<ArrowDownRight size={17} /></a></div>
          </div>
          <div className="hero-art" aria-label={isFa ? "نشانهٔ تصویری مرزهای سامانه" : "System-boundary visual"}>
            <img src={`${storage}/soheil-hero-systems-ledger_7e8329be.jpg`} alt="" />
            <p><BidiText text={copy.heroCaption} isFa={isFa} /></p>
          </div>
        </section>

        <section id="about" className="about-section section-shell editorial-section">
          <p className="section-rail">{copy.aboutRail}</p>
          <div className="section-content"><p className="kicker">{copy.aboutKicker}</p><h2>{copy.aboutHeading}</h2><p><BidiText text={copy.aboutBody} isFa={isFa} /></p></div>
        </section>

        <section id="work" className="work-section section-shell">
          <div className="work-intro"><p className="section-rail">{copy.workRail}</p><div><p className="kicker">{copy.workKicker}</p><h2>{copy.workHeading}</h2><p><BidiText text={copy.workIntro} isFa={isFa} /></p></div></div>
          <div className="project-list">{copy.projects.map((project) => <ProjectCard project={project} isFa={isFa} key={project.id} />)}</div>
        </section>

        <section id="methodology" className="methodology-section section-shell editorial-section">
          <p className="section-rail">{copy.methodologyRail}</p>
          <div className="section-content"><p className="kicker"><Ltr>IFEM</Ltr></p><h2>{copy.methodologyHeading}</h2><p><BidiText text={copy.methodologyBody} isFa={isFa} /></p><a className="text-link strong-link" href={links.primaryDoi} target="_blank" rel="noreferrer">{copy.methodologyCta}<ArrowUpRight size={16} /></a><blockquote><BidiText text={copy.methodologyQuote} isFa={isFa} /></blockquote></div>
        </section>

        <section id="profiles" className="profiles-section section-shell editorial-section">
          <p className="section-rail">{copy.profilesRail}</p>
          <div className="section-content"><p className="kicker">{copy.profilesKicker}</p><h2>{copy.profilesHeading}</h2><p><BidiText text={copy.profilesBody} isFa={isFa} /></p><div className="profile-grid">{profileCards.map(({ label, href, icon: Icon, value }) => <a href={href} target="_blank" rel="noreferrer" className="profile-card" key={label}><Icon size={20} /><span>{label}</span><Ltr>{value}</Ltr><ArrowUpRight size={16} /></a>)}</div></div>
        </section>
      </main>
      <footer id="contact" className="site-footer">
        <div><BrandMark /><strong><Ltr>Soheil Mozaffari</Ltr></strong><p>{copy.role}</p></div>
        <a className="footer-contact" href="mailto:Soheil.Mozaffari@gmail.com"><Mail size={17} /><Ltr>Soheil.Mozaffari@gmail.com</Ltr></a>
        <p className="footer-ledger">{isFa ? <><span>وب‌سایت حرفه‌ای / </span><Ltr>Systems Ledger</Ltr></> : "Professional website / Systems Ledger"}</p>
      </footer>
    </div>
  );
}
