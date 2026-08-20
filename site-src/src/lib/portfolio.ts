/**
 * Systems Ledger reconstruction — content source of truth.
 * Persian copy is deliberately authored for RTL reading; project evidence limits are preserved.
 */
export type Locale = "en" | "fa";

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  status: string;
  summary: string;
  highlights: string[];
  evidenceLabel: string;
  proof: string;
  proofDetail: string;
  evidenceKind: "raven" | "rezvan" | "media" | "onyx" | "ifem";
  github?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  detail: {
    problem: string;
    constraints: string;
    architecture: string;
    implementation: string;
    evidence: string;
    limits: string;
  };
};

export type PortfolioCopy = {
  locale: Locale;
  nav: { about: string; work: string; methodology: string; profiles: string; contact: string };
  languageLabel: string;
  languageHref: string;
  eyebrow: string;
  localizedName: string;
  role: string;
  hero: string;
  heroPrimary: string;
  heroSecondary: string;
  heroCaption: string;
  aboutRail: string;
  aboutKicker: string;
  aboutHeading: string;
  aboutBody: string;
  workRail: string;
  workKicker: string;
  workHeading: string;
  workIntro: string;
  methodologyRail: string;
  methodologyHeading: string;
  methodologyBody: string;
  methodologyCta: string;
  methodologyQuote: string;
  profilesRail: string;
  profilesKicker: string;
  profilesHeading: string;
  profilesBody: string;
  projects: Project[];
};

const links = {
  github: "https://github.com/SMozaff",
  orcid: "https://orcid.org/0009-0001-2428-1295",
  linkedin: "https://www.linkedin.com/in/su-muzaff/",
  ifem: "https://ifem-doctrine.github.io/",
  primaryDoi: "https://doi.org/10.5281/zenodo.20621561",
  manualDoi: "https://doi.org/10.5281/zenodo.21330255",
} as const;

const faProjects: Project[] = [
  {
    id: "raven",
    number: "۰۱",
    title: "Raven Metadata Extractor",
    category: "ابزارهای توسعه / نرم‌افزار دسکتاپ",
    status: "پروژهٔ فعال",
    summary:
      "ابزاری چندسکویی با رابط دسکتاپ و خط فرمان (CLI) که اسکن پوشه‌های تصاویر را به گزارش‌های توضیح‌پذیر از فراداده‌های EXIF، XMP، GPS و C2PA تبدیل می‌کند و در کنار آن، نشانه‌های محدود و غیرقطعی دربارهٔ احتمال دخالت ابزارهای هوش مصنوعی در تولید تصویر ارائه می‌دهد.",
    highlights: [
      "مسیر اجرایی مشترک برای رابط دسکتاپ و CLI",
      "استخراج فراداده از چند منبع",
      "گزارش و تاریخچهٔ ساخت‌یافته",
      "تفکیک نشانه از مدرک قطعی در مدل شواهد",
    ],
    evidenceLabel: "شواهد — رابط کاربری",
    proof: "نمای واقعی رابط کاربری",
    proofDetail: "این تصویر فقط وجود و شکل رابط کاربری را نشان می‌دهد؛ دربارهٔ دقت تحلیل یا منشأ محتوا ادعای قطعی نمی‌کند.",
    evidenceKind: "raven",
    github: "https://github.com/SMozaff/Raven-Metadata-Extractor",
    detail: {
      problem: "بررسی فراداده معمولاً میان چند ابزار پراکنده است و رسیدن به یک تصویر منسجم از شواهد را دشوار می‌کند.",
      constraints: "نشانه‌های مرتبط با هوش مصنوعی باید محدود و توضیح‌پذیر بمانند و نباید به‌عنوان مدرک قطعی ارائه شوند.",
      architecture: "استخراج‌کننده‌های مستقل، داده‌های هر منبع را گردآوری می‌کنند و نتیجه در قالب مدلی توضیح‌پذیر از شواهد ارائه می‌شود؛ نه یک برچسب مبهم و قطعی.",
      implementation: "ساختار Python با مسیر مشترک رابط گرافیکی و CLI، گزارش‌ها و تاریخچه، به‌همراه مسیرهای اختیاری C2PA و مؤلفه‌های یادگیری ماشین.",
      evidence: "ساختار مخزن، گردش‌کار ساخت چندسکویی و تصویر واقعی رابط کاربری.",
      limits: "در این بخش انتشار رسمیِ برچسب‌گذاری‌شده‌ای معرفی نمی‌شود. نشانه‌های مرتبط با هوش مصنوعی بخشی از یک مدل شواهدند، نه آشکارساز قطعی یا نتیجهٔ قطعی کارشناسی.",
    },
  },
  {
    id: "rezvan",
    number: "۰۲",
    title: "Rezvan Mesh",
    subtitle: "ارتباط آفلاین در Android",
    category: "معماری سامانه / مهندسی موبایل",
    status: "بتا / در حال اعتبارسنجی",
    summary:
      "نمونهٔ اولیه‌ای برای ارتباط همتابه‌همتا در Android که Kotlin، Rust، Bluetooth LE، Wi‑Fi Direct و ذخیره‌سازی محلی رمزنگاری‌شده را برای پیام‌رسانی در شرایطی که شبکهٔ معمول در دسترس نیست کنار هم می‌آورد.",
    highlights: [
      "مرز JNI میان Kotlin و Rust",
      "پیاده‌سازی انتقال بر پایهٔ BLE و Wi‑Fi Direct",
      "ذخیره‌سازی محلی رمزنگاری‌شده",
      "هستهٔ Rust برای مسیریابی، رمزنگاری و مدیریت نشست",
    ],
    evidenceLabel: "شواهد — معماری",
    proof: "طرح مفهومی معماری و مرزها",
    proofDetail: "این نمودار ساختار مفهومی سامانه را نشان می‌دهد و به‌همراه کد منبع و شواهد CI ارائه شده است؛ رفتار واقعی روی دستگاه را به‌تنهایی اثبات نمی‌کند.",
    evidenceKind: "rezvan",
    github: "https://github.com/SMozaff/Rezvan-Mesh",
    detail: {
      problem: "در نبود اتصال معمول، ارتباط میان دستگاه‌ها می‌تواند کاملاً قطع شود.",
      constraints: "نمونهٔ اولیه نباید به سرور مرکزی یا مسیر استاندارد شبکه وابسته باشد.",
      architecture: "مسئولیت‌های رابط کاربری و ارتباط رادیویی در Android از هستهٔ Rust برای مسیریابی، رمزنگاری و مدیریت نشست جدا شده‌اند و از طریق JNI به هم متصل می‌شوند.",
      implementation: "کار روی BLE و Wi‑Fi Direct، ذخیره‌سازی محلی رمزنگاری‌شده، هستهٔ Rust و ابزارهای یکپارچه‌سازی و آزمون روی دستگاه.",
      evidence: "ساختار کد، آزمون‌های Rust، گردش‌کار ساخت Android و روش مستند آزمون روی دستگاه.",
      limits: "اعتبارسنجی سخت‌افزاری چندپرشی، پخش صوت در گیرنده و عملکرد رله هنوز به‌عنوان کامل یا کاملاً راستی‌آزمایی‌شده ارائه نمی‌شوند.",
    },
  },
  {
    id: "mediaplayer",
    number: "۰۳",
    title: "Watermelon MediaPlayer",
    category: "مهندسی محصول / مهندسی موبایل",
    status: "در حال توسعه",
    summary:
      "معماری یک پخش‌کنندهٔ رسانهٔ آفلاین و حریم‌خصوصی‌محور برای Android که بر رابط‌های صریح Kotlin، مرزهای ماژولار پخش، ذخیره‌سازی و زیرنویس، و طراحی محصول سازگار با RTL استوار است.",
    highlights: [
      "مرزهای ماژولی صریح",
      "ماژول مشترک قراردادها و رابط‌ها",
      "معماری پخش بر پایهٔ Media3 / ExoPlayer",
      "جداسازی منطق مهاجرت داده از موتور زیرنویس",
    ],
    evidenceLabel: "شواهد — سامانهٔ طراحی",
    proof: "خروجی سامانهٔ طراحی",
    proofDetail: "این تصویر یک خروجی طراحی است و اجرای کامل محصول یا انتشار عمومی آن را اثبات نمی‌کند.",
    evidenceKind: "media",
    github: "https://github.com/SMozaff/Watermelon-MediaPlayer",
    detail: {
      problem: "کاربرانی که رسانه را به‌صورت محلی نگه می‌دارند به پخش‌کننده‌ای آفلاین با معماری روشن و تجربه‌ای سازگار با RTL نیاز دارند.",
      constraints: "با رشد قابلیت‌ها، حریم خصوصی و مرزهای ماژولی باید روشن و قابل‌نگه‌داری باقی بمانند.",
      architecture: "قراردادها در رابط‌های مشترک تعریف می‌شوند و ماژول‌های مستقل مسئول پخش، ذخیره‌سازی، زیرنویس و ارائه‌اند؛ ترکیب نهایی در مرز برنامه انجام می‌شود.",
      implementation: "ماژول‌های Kotlin و Compose با Media3، مرزهای مستقل ذخیره‌سازی و زیرنویس، و کنترل‌های ساخت و مهاجرت Android در CI.",
      evidence: "ساختار ماژول‌ها، پیکربندی گردش‌کار CI و خروجی سامانهٔ طراحی.",
      limits: "در اینجا ادعای انتشار عمومی برای کاربر نهایی مطرح نیست. خروجی سامانهٔ طراحی نیز نمایش یک محصول کاملاً اجراشده نیست.",
    },
  },
  {
    id: "onyx",
    number: "۰۴",
    title: "ONYX Mission Operations",
    category: "معماری سامانه / سامانه‌های توزیع‌شده",
    status: "مطالعهٔ موردی معماری — در حال توسعه",
    summary:
      "معماری در حال توسعه‌ای با محوریت Rust برای عملیات مأموریت که اجرای محلی، همگام‌سازی، ماندگاری داده، مشاهده‌پذیری، چند رابط کاربری، مسیرهای انتقال و زیرساخت استقرار را در یک ساختار ماژولار کنار هم قرار می‌دهد.",
    highlights: [
      "فضای کاری چند-crate در Rust",
      "معماری CRDT و همگام‌سازی",
      "جداسازی هسته، دامنه، کاربرد و زیرساخت",
      "پیکربندی‌های استقرار Docker، Helm و Terraform",
    ],
    evidenceLabel: "شواهد — دامنه و انطباق",
    proof: "شواهد دامنه و انطباق",
    proofDetail: "ساختار مخزن، آزمون‌ها و ثبت انطباق در دسترس‌اند؛ این شواهد کامل بودن یک محصول عملیاتی را ثابت نمی‌کنند.",
    evidenceKind: "onyx",
    github: "https://github.com/SMozaff/Onyx-Framwork",
    detail: {
      problem: "هماهنگی مأموریت به اجرای محلی با حدود اختیار روشن و سازوکار همگام‌سازی نیاز دارد.",
      constraints: "معماری چندسکویی با چند مسیر انتقال باید ماژولار بماند و ادعاها فقط به بخش‌هایی محدود شوند که واقعاً پیاده‌سازی شده‌اند.",
      architecture: "هسته، دامنه، کاربرد، زیرساخت و انتقال در یک فضای کاری مبتنی بر Rust و چند رابط کاربری از هم جدا شده‌اند.",
      implementation: "اجزای فضای کاری Rust، رابط‌های وب، دسکتاپ و موبایل، پیکربندی‌های استقرار، آزمون‌ها و مستندات انطباق.",
      evidence: "ساختار معماری مخزن، آزمون‌ها، پیکربندی‌های زیرساخت و ثبت انطباق.",
      limits: "بخش‌های مهمی هنوز ناتمام‌اند. Cloud Relay مانع تأیید ادعاهای گسترده‌تر دربارهٔ عملکرد چنددستگاهی است و پوشش کامل FFI یا انطباق نیز ادعا نمی‌شود.",
    },
  },
  {
    id: "ifem",
    number: "۰۵",
    title: "Interface-First Execution Methodology (IFEM)",
    category: "پژوهش / روش‌شناسی / تألیف فنی",
    status: "روش‌شناسی / انتشار",
    summary:
      "روش‌شناسی مهندسی و مجموعهٔ مستندات و انتشار دوزبانه‌ای که بر رابط‌های صریح، قراردادها، مرزهای مسئولیت و راستی‌آزمایی مستقل تمرکز دارد.",
    highlights: [
      "سایت دکترین دوزبانهٔ فارسی و انگلیسی",
      "ارائهٔ ایستای بدون وابستگی اجرایی",
      "HTML معنایی و بهبود تدریجی",
      "پیوند مستقیم مستندات با DOI و سوابق انتشار",
    ],
    evidenceLabel: "شواهد — انتشار",
    proof: "دکترین و سوابق انتشار",
    proofDetail: "سایت دکترین و DOIها وجود عمومی روش‌شناسی و سوابق انتشار آن را نشان می‌دهند؛ نه داوری همتا، پذیرش گسترده یا استاندارد صنعتی بودن را.",
    evidenceKind: "ifem",
    primary: { label: "آشنایی با IFEM", href: links.ifem },
    secondary: { label: "مطالعهٔ سند اصلی", href: links.primaryDoi },
    github: "https://github.com/IFEM-doctrine/ifem-doctrine.github.io",
    detail: {
      problem: "وقتی رابط‌ها و مالکیت ضمنی باقی می‌مانند، کار مهندسی موازی شکننده می‌شود.",
      constraints: "ادعاهای روش‌شناسی باید صریح و قابل‌پیگیری باشند و از ادعاهای پذیرش یا اثربخشی جدا بمانند.",
      architecture: "رابط‌ها، قراردادها، مرزها، مسئولیت و راستی‌آزمایی به‌عنوان اجزای درجه‌اول کار مهندسی تعریف می‌شوند.",
      implementation: "مجموعه‌ای دوزبانه از مستندات و صفحات انتشار با ارائهٔ ایستا و پیوند مستقیم به سوابق علمی.",
      evidence: "سایت زندهٔ دکترین، DOI سند اصلی، DOI راهنمای زمان اجرا و ساختار عمومی مخزن.",
      limits: "در این سایت، IFEM به‌عنوان روش‌شناسی دارای داوری همتا، استاندارد صنعتی یا روش پذیرفته‌شده معرفی نمی‌شود مگر آن‌که شواهد مستقل چنین ادعایی را پشتیبانی کنند.",
    },
  },
];

export const faCopy: PortfolioCopy = {
  locale: "fa",
  nav: { about: "دربارهٔ من", work: "کارهای منتخب", methodology: "روش‌شناسی", profiles: "پروفایل‌ها", contact: "تماس" },
  languageLabel: "English",
  languageHref: "/",
  eyebrow: "فعالیت مستقل / سامانه و نرم‌افزار",
  localizedName: "سهیل مظفری",
  role: "مهندس علوم کامپیوتر • معمار سامانه‌ها • نویسندهٔ IFEM",
  hero: "محصول و سامانه می‌سازم، معماری طراحی می‌کنم و روش‌هایی را صورت‌بندی می‌کنم که مرزها، مسئولیت‌ها و مسیرهای راستی‌آزمایی را روشن و قابل‌پیگیری نگه می‌دارند.",
  heroPrimary: "مرور کارهای منتخب",
  heroSecondary: "آشنایی با روش‌شناسی",
  heroCaption: "مرزها زمانی ارزشمندند که مسئولیت را روشن کنند.",
  aboutRail: "آشنایی",
  aboutKicker: "تمرکز حرفه‌ای",
  aboutHeading: "پیش از آن‌که پیاده‌سازی، تغییر را پرهزینه کند، مسئولیت را روشن کنید.",
  aboutBody: "در معماری نرم‌افزار، سامانه‌های پیچیده، مهندسی با کمک هوش مصنوعی و طراحی روش‌شناسی فنی کار می‌کنم. تمرکز من عملی است: مرزها، قراردادها و مدل‌های اجرا را آن‌قدر صریح کنم که پیاده‌سازی سنجیده و راستی‌آزمایی مستقل ممکن باشد.",
  workRail: "کارهای منتخب",
  workKicker: "نمونه‌کارهای مستند",
  workHeading: "محصول، سامانه، معماری و روش‌شناسی.",
  workIntro: "این مسیر از یک ابزار مشخص شروع می‌شود، به مهندسی موبایل و معماری محصول می‌رسد، سپس یک مطالعهٔ موردی معماری را نشان می‌دهد و در نهایت به روش‌شناسی و تألیف فنی می‌رسد.",
  methodologyRail: "روش‌شناسی IFEM",
  methodologyHeading: "روش‌شناسی‌ای برای زمانی که کار موازی، توافق‌های ضمنی را پرهزینه می‌کند.",
  methodologyBody: "IFEM کار پیچیدهٔ نرم‌افزار را پیش از آغاز اجرای موازی، حول رابط‌های صریح، قراردادها، مرزهای مسئولیت و راستی‌آزمایی مستقل سازمان می‌دهد.",
  methodologyCta: "مطالعهٔ سند اصلی",
  methodologyQuote: "«رابط‌ها، قراردادها، مسئولیت و راستی‌آزمایی بخشی از خودِ کار مهندسی‌اند؛ نه چیزهایی که بعداً به آن افزوده شوند.»",
  profilesRail: "هویت و سوابق",
  profilesKicker: "پروفایل‌ها و راه‌های ارتباطی",
  profilesHeading: "پیوندهای مرجع برای کد منبع، سوابق انتشار و هویت حرفه‌ای.",
  profilesBody: "برای مشاهدهٔ کد منبع، شناسهٔ پژوهشی و سابقهٔ حرفه‌ای از پیوندهای مرجع استفاده کنید.",
  projects: faProjects,
};

const enProjects: Project[] = [
  {
    id: "raven", number: "01", title: "Raven Metadata Extractor", category: "Developer Tooling / Desktop Software", status: "Active project", evidenceKind: "raven",
    summary: "A cross-platform desktop and CLI tool for turning image-folder scans into explainable metadata reports across EXIF, XMP, GPS, C2PA, and carefully bounded AI-origin indicators.",
    highlights: ["Shared desktop and CLI execution path", "Multi-source metadata extraction", "Structured report and history generation", "Evidence tiers that distinguish indicators from proof"],
    evidenceLabel: "GUI capture", proof: "GUI capture", proofDetail: "Interface evidence; not a claim of forensic certainty or AI-origin proof.", github: "https://github.com/SMozaff/Raven-Metadata-Extractor",
    detail: { problem: "Metadata investigation is often fragmented across separate tools and hard to interpret as a whole.", constraints: "AI-origin indicators must remain explicitly bounded and must not be represented as proof.", architecture: "Source-specific extractors feed an explainable evidence model rather than a single opaque classification claim.", implementation: "Python application structure with GUI and CLI paths, reports, history, and optional C2PA or ML-related paths.", evidence: "Repository structure, cross-platform build workflow, and the real interface screenshot shown here.", limits: "No tagged release is presented here. AI-related signals are indicators within an evidence hierarchy, not a detector or forensic conclusion." },
  },
  {
    id: "rezvan", number: "02", title: "Rezvan Mesh", subtitle: "Offline Android Communication", category: "Systems Architecture / Mobile Engineering", status: "Beta / validation in progress", evidenceKind: "rezvan",
    summary: "An Android peer-to-peer communication prototype combining Kotlin, Rust, Bluetooth LE, Wi-Fi Direct, and encrypted local storage for off-grid messaging scenarios.",
    highlights: ["Kotlin ↔ Rust JNI boundary", "BLE and Wi-Fi Direct transport work", "Local encrypted persistence", "Rust core for routing, crypto, and session responsibilities"],
    evidenceLabel: "Architecture", proof: "Conceptual architecture / boundary sketch", proofDetail: "A conceptual sketch paired with repository source and CI evidence; it does not prove live device behavior.", github: "https://github.com/SMozaff/RezvanMesh",
    detail: { problem: "Communication may fail when normal connectivity is unavailable.", constraints: "The prototype cannot assume a central server or an ordinary network path.", architecture: "Android radio and interface concerns are separated from a Rust routing, crypto, and session core through JNI boundaries.", implementation: "BLE and Wi-Fi Direct transport work, encrypted local storage, Rust-core responsibilities, and device-oriented integration tooling.", evidence: "Visible source organization, Rust tests, Android build workflow, and documented physical-device procedure.", limits: "Multi-hop hardware validation, receiver voice playback, and relay behavior are not presented as complete or fully verified." },
  },
  {
    id: "mediaplayer", number: "03", title: "Watermelon MediaPlayer", subtitle: "Offline Android Media System", category: "Product Engineering / Mobile Engineering", status: "Active development", evidenceKind: "media",
    summary: "A privacy-oriented offline Android media-player architecture built around explicit Kotlin interfaces, modular playback/storage/subtitle boundaries, and RTL-aware product design.",
    highlights: ["Strict modular boundaries", "Shared contract and interface module", "Media3 / ExoPlayer playback architecture", "Storage migration and subtitle-engine separation"],
    evidenceLabel: "Design system", proof: "Design-system artifact", proofDetail: "Design evidence only; it is not represented as proof of a released or complete consumer application.", github: "https://github.com/SMozaff/Watermelon-MediaPlayer",
    detail: { problem: "Local media users need a focused offline player with clean architecture and RTL-aware interaction.", constraints: "Privacy and maintainable module boundaries must remain legible as the feature set grows.", architecture: "Shared interfaces hold contracts while dedicated modules own playback, storage, subtitles, and presentation; the app boundary composes implementations.", implementation: "Kotlin and Compose modules with Media3, storage and subtitle boundaries, and CI-backed Android build and migration checks.", evidence: "Module structure, visible workflow configuration, and the visual-system artifact shown here.", limits: "No published consumer release is claimed. The visual-system artifact is not a running-product demonstration." },
  },
  {
    id: "onyx", number: "04", title: "ONYX Mission Operations", category: "Systems Architecture / Distributed Systems", status: "Architecture Case Study — In Progress", evidenceKind: "onyx",
    summary: "An in-progress Rust-centric mission-operations architecture spanning local-first synchronization, persistence, observability, multiple client surfaces, transport layers, and deployment infrastructure.",
    highlights: ["Multi-crate Rust workspace", "CRDT and synchronization architecture", "Kernel / domain / application / infrastructure separation", "Docker, Helm, and Terraform deployment artifacts"],
    evidenceLabel: "Scope / conformance", proof: "Scope and conformance artifacts", proofDetail: "Repository composition, test surfaces, and a conformance register are available; this is not presented as a finished mission-operations product.", github: "https://github.com/SMozaff/Onyx-Framwork",
    detail: { problem: "Mission coordination needs authority-aware local operation and synchronization.", constraints: "Multi-platform and multi-transport work must remain modular while claims stay aligned with delivered scope.", architecture: "Kernel, domain, application, infrastructure, and transport responsibilities are separated across a Rust-centric workspace and several client surfaces.", implementation: "Rust workspace components, web/desktop/mobile surfaces, deployment scaffolding, tests, and conformance documentation.", evidence: "Repository architecture, test surface, infrastructure artifacts, and the conformance register.", limits: "Important areas remain incomplete. Cloud Relay is a blocking gap for certain multi-device claims; full FFI and conformance coverage are not claimed." },
  },
  {
    id: "ifem", number: "05", title: "Interface-First Execution Methodology (IFEM)", category: "Research / Methodology / Technical Writing", status: "Methodology / Publication", evidenceKind: "ifem",
    summary: "A bilingual engineering methodology and publication system centered on explicit interfaces, contracts, responsibility boundaries, and independent verification.",
    highlights: ["Bilingual English/Persian doctrine site", "Dependency-free static delivery", "Semantic HTML and progressive enhancement", "Publication and DOI integration"],
    evidenceLabel: "Publication", proof: "Doctrine and publication records", proofDetail: "A supporting methodology/publication project, not a conventional software product or an industry-standard claim.", primary: { label: "Explore IFEM", href: links.ifem }, secondary: { label: "Read publication", href: links.primaryDoi }, github: "https://github.com/IFEM-doctrine/ifem-doctrine.github.io",
    detail: { problem: "Parallel engineering becomes fragile when interfaces and ownership remain implicit.", constraints: "Methodology claims need to remain explicit, traceable, and distinct from adoption claims.", architecture: "Interfaces, contracts, boundaries, responsibility, and verification are treated as first-class artifacts.", implementation: "A bilingual documentation and publication system with static delivery and linked scholarly records.", evidence: "Live doctrine site, primary publication DOI, runtime manual DOI, and public repository structure.", limits: "IFEM is not described here as peer reviewed, an established industry standard, or adopted without separate evidence." },
  },
];

export const enCopy: PortfolioCopy = {
  locale: "en",
  nav: { about: "About", work: "Selected work", methodology: "Methodology", profiles: "Profiles", contact: "Contact" },
  languageLabel: "فارسی",
  languageHref: "/fa/",
  eyebrow: "Independent practice / systems & software",
  localizedName: "",
  role: "Computer scientist • systems architect • author of IFEM",
  hero: "I build products and systems, design architectures, and formulate methods that keep boundaries, responsibilities, and verification paths explicit and traceable.",
  heroPrimary: "Review selected work",
  heroSecondary: "Explore the methodology",
  heroCaption: "A boundary matters when it makes responsibility legible.",
  aboutRail: "About",
  aboutKicker: "Professional focus",
  aboutHeading: "Make responsibility explicit before implementation makes change expensive.",
  aboutBody: "I work across software architecture, complex systems, AI-assisted engineering, and technical-method design. My focus is practical: make boundaries, contracts, and execution models explicit enough for considered implementation and independent verification.",
  workRail: "Selected work",
  workKicker: "Evidence-led portfolio",
  workHeading: "Product, system, architecture, methodology.",
  workIntro: "The sequence moves from a focused tool through mobile engineering and product architecture, then an architecture case study, and finally technical methodology and authorship.",
  methodologyRail: "IFEM methodology",
  methodologyHeading: "A methodology for when parallel work makes implicit agreement expensive.",
  methodologyBody: "IFEM organizes complex software work around explicit interfaces, contracts, responsibility boundaries, and independent verification before parallel implementation begins.",
  methodologyCta: "Read the primary document",
  methodologyQuote: "Interfaces, contracts, responsibility, and verification are part of the engineering work itself—not additions made later.",
  profilesRail: "Identity & records",
  profilesKicker: "Profiles & contact paths",
  profilesHeading: "Reference links for source code, publication records, and professional identity.",
  profilesBody: "Use the reference links for source code, publication records, and professional history.",
  projects: enProjects,
};

export { links };
