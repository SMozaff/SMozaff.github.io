import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, Command, Pause, Play, SkipForward, X } from "lucide-react";
import { enCopy, faCopy, links, type Locale } from "@/lib/portfolio";

type InteractiveSystemsProps = { locale: Locale };

type TerminalLine = { tone: "prompt" | "output" | "accent" | "error"; text: string };

const bootLines = [
  "initialising visual shell",
  "loading accessible interaction layer",
  "registering content-safe commands",
  "ready: continue to portfolio",
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

function BootSequence({ isFa, reduced }: { isFa: boolean; reduced: boolean }) {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(reduced ? bootLines.length : 0);
  useEffect(() => {
    if (reduced || !visible) return;
    const timer = window.setInterval(() => setIndex((current) => Math.min(current + 1, bootLines.length)), 180);
    return () => window.clearInterval(timer);
  }, [reduced, visible]);
  useEffect(() => {
    if (index >= bootLines.length && !reduced) {
      const timer = window.setTimeout(() => setVisible(false), 420);
      return () => window.clearTimeout(timer);
    }
  }, [index, reduced]);
  if (!visible) return null;
  return (
    <div className="interactive-boot" role="status" aria-live="polite">
      <div className="interactive-boot__panel">
        <div className="interactive-kicker">/ visual shell / safe startup</div>
        <div className="interactive-boot__log">
          {bootLines.slice(0, index).map((line) => <div key={line}><span>[ok]</span> {line}</div>)}
        </div>
        <div className="interactive-boot__actions">
          <button type="button" autoFocus className="interactive-button" onClick={() => setVisible(false)}><SkipForward size={14} />{isFa ? "ادامه" : "Continue"}</button>
          <span>{isFa ? "محتوا بدون جاوااسکریپت نیز قابل دسترسی است." : "Content remains available if scripting is unavailable."}</span>
        </div>
      </div>
    </div>
  );
}

function StatusBar({ isFa, onPalette }: { isFa: boolean; onPalette: () => void }) {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })), 30000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div className="interactive-status" aria-label={isFa ? "نوار وضعیت نمایشی" : "Decorative visual status bar"}>
      <span className="interactive-status__brand">SM<span>::</span>VISUAL SHELL</span>
      <span className="interactive-status__time">{time}</span>
      <span className="interactive-status__note">{isFa ? "دادهٔ واقعی سامانه نیست" : "fictional visual telemetry"}</span>
      <button type="button" className="interactive-status__command" onClick={onPalette}><Command size={12} /> <kbd>⌘</kbd><kbd>K</kbd></button>
    </div>
  );
}

function useTerminal(isFa: boolean) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { tone: "accent", text: isFa ? "ترمینال نمایشی آماده است. برای راهنما help را وارد کنید." : "Visual terminal ready. Type help for available commands." },
  ]);
  const commands: Record<string, TerminalLine[]> = {
    help: [
      { tone: "accent", text: "available: help, about, projects, skills, contact, neofetch, clear" },
      { tone: "output", text: "commands expose verified portfolio facts only" },
    ],
    about: [
      { tone: "output", text: "Soheil Mozaffari" },
      { tone: "output", text: "Software engineer and systems architect" },
      { tone: "output", text: "Boundaries, responsibilities, and verification paths made explicit." },
    ],
    projects: [
      { tone: "accent", text: "01 Raven Metadata Extractor — Active project" },
      { tone: "output", text: "02 Rezvan Mesh — Beta / validation in progress" },
      { tone: "output", text: "03 Watermelon Vector Graphics Converter — Active project" },
      { tone: "output", text: "04 Watermelon MediaPlayer — Active development" },
      { tone: "output", text: "05 ONYX Framework — Architecture case study / in progress" },
      { tone: "output", text: "06 Interface-First Execution Methodology (IFEM) — Methodology / publication" },
    ],
    skills: [
      { tone: "accent", text: "verified focus areas" },
      { tone: "output", text: "Software architecture · Complex systems" },
      { tone: "output", text: "AI-assisted engineering · Technical-method design" },
      { tone: "output", text: "Boundaries · Contracts · Independent verification" },
    ],
    contact: [
      { tone: "output", text: `GitHub: ${links.github}` },
      { tone: "output", text: `ORCID: ${links.orcid}` },
      { tone: "output", text: `LinkedIn: ${links.linkedin}` },
      { tone: "output", text: `IFEM Doctrine: ${links.ifem}` },
      { tone: "output", text: `Zenodo: ${links.primaryDoi}` },
      { tone: "output", text: "Email: Soheil.Mozaffari@gmail.com" },
    ],
    neofetch: [
      { tone: "accent", text: "SOHEIL MOZAFARI / SYSTEMS LEDGER" },
      { tone: "output", text: "Role: Software engineer and systems architect" },
      { tone: "output", text: "Records: 6 (five engineering records plus IFEM methodology/publication)" },
      { tone: "output", text: "Route set: English and Persian" },
      { tone: "output", text: "Host: smozaff.github.io" },
    ],
  };
  const execute = (raw: string) => {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") return setLines([]);
    setLines((current) => [...current, { tone: "prompt", text: `> ${raw}` }, ...(commands[command] ?? [{ tone: "error", text: `command not found: ${command}` }])]);
  };
  return { lines, execute };
}

function Terminal({ isFa }: { isFa: boolean }) {
  const [value, setValue] = useState("");
  const { lines, execute } = useTerminal(isFa);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <section className="interactive-terminal" aria-labelledby="interactive-terminal-title">
      <div className="interactive-windowbar"><span className="interactive-lights"><i /><i /><i /></span><span id="interactive-terminal-title">smozaff@portfolio:~ / safe terminal</span><span className="interactive-windowbar__hint">{isFa ? "فقط داده‌های تأییدشده" : "verified facts only"}</span></div>
      <div className="interactive-terminal__body" role="log" aria-live="polite">
        {lines.map((line, index) => <div className={`interactive-line interactive-line--${line.tone}`} key={`${line.text}-${index}`}>{line.text}</div>)}
      </div>
      <form className="interactive-terminal__form" onSubmit={(event) => { event.preventDefault(); execute(value); setValue(""); }}>
        <label htmlFor="interactive-terminal-input">{isFa ? "دستور" : "Command"}</label><span aria-hidden="true">›</span><input id="interactive-terminal-input" ref={inputRef} value={value} onChange={(event) => setValue(event.target.value)} placeholder="help" autoComplete="off" />
      </form>
    </section>
  );
}

function CommandPalette({ isFa, open, close }: { isFa: boolean; open: boolean; close: () => void }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);
  if (!open) return null;
  const goto = (target: string) => { close(); document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const options = [
    ["about", isFa ? "دربارهٔ من" : "About"], ["work", isFa ? "نمونه‌کارها" : "Case Studies"], ["methodology", isFa ? "روش‌شناسی" : "Methodology"], ["profiles", isFa ? "پروفایل‌ها" : "Profiles"],
  ] as const;
  const filtered = options.filter(([, label]) => label.toLowerCase().includes(value.toLowerCase()));
  return (
    <div className="interactive-palette" role="dialog" aria-modal="true" aria-labelledby="interactive-palette-title">
      <button type="button" className="interactive-palette__scrim" aria-label={isFa ? "بستن" : "Close command palette"} onClick={close} />
      <div className="interactive-palette__panel">
        <div className="interactive-palette__heading"><span id="interactive-palette-title"><Command size={14} /> {isFa ? "پیمایش" : "Navigate"}</span><button type="button" onClick={close} aria-label={isFa ? "بستن" : "Close"}><X size={16} /></button></div>
        <input autoFocus value={value} onChange={(event) => setValue(event.target.value)} placeholder={isFa ? "جست‌وجوی بخش..." : "Search a section..."} />
        <div className="interactive-palette__options">{filtered.map(([id, label]) => <button type="button" key={id} onClick={() => goto(id)}>{label}<ArrowRight size={14} /></button>)}{filtered.length === 0 && <p>{isFa ? "نتیجه‌ای نیست" : "No matching section"}</p>}</div>
        <small>Esc {isFa ? "برای بستن" : "to close"}</small>
      </div>
    </div>
  );
}

function HeroCanvas({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let raf = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr)); canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;
      context.clearRect(0, 0, width, height);
      const cx = width / 2, cy = height / 2, t = reduced ? 0 : frame * .012;
      context.strokeStyle = "rgba(39,211,238,.48)"; context.lineWidth = 1;
      for (let i = 0; i < 7; i += 1) {
        const radius = Math.min(width, height) * (.12 + i * .055);
        context.beginPath(); context.arc(cx, cy, radius, t * (i % 2 ? -1 : 1), Math.PI * 1.75 + t * (i % 2 ? -1 : 1)); context.stroke();
      }
      context.fillStyle = "rgba(167,139,250,.75)"; context.beginPath(); context.arc(cx, cy, 5, 0, Math.PI * 2); context.fill();
      if (!reduced) { frame += 1; raf = requestAnimationFrame(draw); }
    };
    resize(); draw();
    window.addEventListener("resize", resize);
    if (!reduced) raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [reduced]);
  return <canvas className="interactive-hero-canvas" ref={ref} aria-label="Animated abstract systems-boundary visualization" role="img" />;
}

function InteractiveLab({ isFa, reduced }: { isFa: boolean; reduced: boolean }) {
  const [tab, setTab] = useState<"signal" | "logic">("signal");
  const [frequency, setFrequency] = useState(2);
  const [gate, setGate] = useState<[boolean, boolean]>([false, true]);
  const logicResult = gate[0] && gate[1] ? "1" : "0";
  return (
    <section className="interactive-lab" aria-labelledby="interactive-lab-title">
      <div className="interactive-lab__heading"><div><div className="interactive-kicker">/ small experiments / no professional claims</div><h2 id="interactive-lab-title">{isFa ? "آزمایشگاه تعاملی" : "Interactive lab"}</h2></div><div className="interactive-tabs" role="tablist" aria-label={isFa ? "آزمایش‌ها" : "Experiments"}>{(["signal", "logic"] as const).map((item) => <button type="button" role="tab" aria-selected={tab === item} className={tab === item ? "is-active" : ""} onClick={() => setTab(item)} key={item}>{item === "signal" ? (isFa ? "سیگنال" : "Signal") : (isFa ? "منطق" : "Logic")}</button>)}</div></div>
      {tab === "signal" ? <div className="interactive-lab__signal"><div className={`interactive-wave ${reduced ? "is-static" : ""}`} style={{ "--frequency": frequency } as CSSProperties}><span /></div><label htmlFor="signal-frequency">{isFa ? "فرکانس نمایشی" : "Display frequency"}<input id="signal-frequency" type="range" min="1" max="5" value={frequency} onChange={(event) => setFrequency(Number(event.target.value))} /></label><output>{frequency.toFixed(1)} Hz</output></div> : <div className="interactive-lab__logic"><p>{isFa ? "یک گیت AND ساده؛ صرفاً برای نمایش تعامل." : "A small AND gate; interaction demo only."}</p><div className="logic-controls">{gate.map((active, index) => <button type="button" key={index} aria-pressed={active} className={active ? "is-on" : ""} onClick={() => setGate((current) => current.map((item, itemIndex) => itemIndex === index ? !item : item) as [boolean, boolean])}>IN {index + 1}: {active ? "1" : "0"}</button>)}<strong>OUT: {logicResult}</strong></div></div>}
    </section>
  );
}

export default function InteractiveSystems({ locale }: InteractiveSystemsProps) {
  const isFa = locale === "fa";
  const reduced = useReducedMotion();
  const [palette, setPalette] = useState(false);
  const [paused, setPaused] = useState(reduced);
  useEffect(() => setPaused(reduced), [reduced]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k" && !(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) { event.preventDefault(); setPalette(true); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return <>
    <BootSequence isFa={isFa} reduced={reduced} />
    <StatusBar isFa={isFa} onPalette={() => setPalette(true)} />
    <CommandPalette isFa={isFa} open={palette} close={() => setPalette(false)} />
    <section className={`interactive-dock section-shell ${paused ? "is-paused" : ""}`} aria-label={isFa ? "سیستم‌های تعاملی نمایشی" : "Interactive visual systems"}>
      <div className="interactive-dock__header"><div><div className="interactive-kicker">/ interaction layer / {paused ? "paused" : "ready"}</div><p>{isFa ? "ابزارهای زیر صرفاً سطح تعاملی بصری هستند." : "These controls are a visual interaction layer, not factual telemetry."}</p></div><button type="button" className="interactive-button interactive-button--quiet" onClick={() => setPaused((current) => !current)}>{paused ? <Play size={14} /> : <Pause size={14} />}{paused ? (isFa ? "پخش" : "Resume") : (isFa ? "توقف" : "Pause")}</button></div>
      <div className="interactive-dock__grid"><Terminal isFa={isFa} /><div className="interactive-core"><div className="interactive-windowbar"><span className="interactive-lights"><i /><i /><i /></span><span>{isFa ? "abstract-boundary.svg" : "abstract-boundary.svg"}</span></div><HeroCanvas reduced={reduced || paused} /></div></div>
      <InteractiveLab isFa={isFa} reduced={reduced || paused} />
    </section>
  </>;
}
