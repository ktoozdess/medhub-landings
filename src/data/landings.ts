// src/data/landings.ts
import { GIFT_LANDINGS } from './gift-landings';

export const LOCALES = ['sk', 'en', 'ru', 'ua', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const HTML_LANG: Record<Locale, string> = {
  sk: 'sk',
  en: 'en',
  ru: 'ru',
  ua: 'uk', // SEO-правильный код языка при URL /ua/
  de: 'de',
};

export interface LandingCopy {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  microLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  trustText: string;
  heroAnchor: string;
  motionCard: {
    title: string;
    liveBadge: string;
    tabA: string;
    tabB: string;
    typingQuery: string;
    searchBtn: string;
    sampleRows: Array<{ name: string; meta: string; rating: string }>;
  };
  valueSection: {
    microLabel: string;
    title: string;
    text: string;
    cta: string;
    ctaHrefSuffix: string;
    reviewQuote: string;
  };
  stepsSection: {
    microLabel: string;
    title: string;
    cards: Array<{ num: string; title: string; desc: string }>;
  };
  comparisonSection: {
    microLabel: string;
    title: string;
    boxes: Array<{ title: string; desc: string; points: string[] }>;
  };
  faqs: Array<{ q: string; a: string }>;
  bottomCta: {
    microLabel: string;
    title: string;
    btn: string;
  };
  /** Сезонные гиды «здоровье как подарок» — та же вёрстка, отдельные иллюстрации. */
  theme?: 'gift';
  giftScene?: {
    focus: 'visit' | 'hygiene' | 'checkup';
    captions: [string, string, string];
  };
}

export const UI_CHROME: Record<
  Locale,
  {
    nav: { home: string; specialists: string; clinics: string; about: string; blog: string };
    headerCta: string;
    blogIndexTitle: string;
    blogIndexSubtitle: string;
    readGuide: string;
    footerTagline: string;
    footerNavTitle: string;
    footerLegalTitle: string;
    legal: { terms: string; privacy: string; cookies: string };
    reviewsBadge: string;
    faqTitle: string;
  }
> = {
  sk: {
    nav: { home: 'Domov', specialists: 'Špecialisti', clinics: 'Kliniky', about: 'O nás', blog: 'Sprievodca' },
    headerCta: 'Nájsť lekára',
    blogIndexTitle: 'Zrozumiteľná zdravotná starostlivosť na Slovensku.',
    blogIndexSubtitle: 'Praktické prehľady miest, špecializácií a skúseností pacientov – aby ste sa rozhodli s istotou.',
    readGuide: 'Čítať prehľad',
    footerTagline: 'Správna starostlivosť začína správnym výberom.',
    footerNavTitle: 'HLAVNÁ NAVIGÁCIA',
    footerLegalTitle: 'PRÁVNE INFORMÁCIE',
    legal: { terms: 'Podmienky používania', privacy: 'Ochrana súkromia', cookies: 'Nastavenia cookies' },
    reviewsBadge: 'RECENZIE PACIENTOV',
    faqTitle: 'Časté otázky pred návštevou',
  },
  en: {
    nav: { home: 'Home', specialists: 'Specialists', clinics: 'Clinics', about: 'About', blog: 'Guides' },
    headerCta: 'Find care',
    blogIndexTitle: 'Clearer healthcare choices across Slovakia.',
    blogIndexSubtitle: 'City guides, specialty breakdowns, and patient insights built to take the guesswork out of finding a doctor.',
    readGuide: 'Read guide',
    footerTagline: 'Care starts with the right choice.',
    footerNavTitle: 'MAIN NAVIGATION',
    footerLegalTitle: 'LEGAL',
    legal: { terms: 'Terms of Service', privacy: 'Privacy Policy', cookies: 'Cookie Policy' },
    reviewsBadge: 'REVIEWS',
    faqTitle: 'Frequently asked questions',
  },
  ru: {
    nav: { home: 'Главная', specialists: 'Специалисты', clinics: 'Клиники', about: 'О нас', blog: 'Гиды' },
    headerCta: 'Найти врача',
    blogIndexTitle: 'Понятная медицина в Словакии без лишнего стресса.',
    blogIndexSubtitle: 'Подробные гиды по городам, врачам и клиникам на основе реального опыта пациентов.',
    readGuide: 'Открыть гид',
    footerTagline: 'Забота начинается с правильного выбора.',
    footerNavTitle: 'НАВИГАЦИЯ',
    footerLegalTitle: 'ДОКУМЕНТЫ',
    legal: { terms: 'Условия сервиса', privacy: 'Конфиденциальность', cookies: 'Настройки cookies' },
    reviewsBadge: 'ОТЗЫВЫ ПАЦИЕНТОВ',
    faqTitle: 'Частые вопросы перед записью',
  },
  ua: {
    nav: { home: 'Головна', specialists: 'Спеціалісти', clinics: 'Клініки', about: 'Про нас', blog: 'Гіди' },
    headerCta: 'Знайти лікаря',
    blogIndexTitle: 'Зрозуміла медицина у Словаччині без зайвого стресу.',
    blogIndexSubtitle: 'Практичні гіди по містах, спеціалістах і клініках на основі реального досвіду пацієнтів.',
    readGuide: 'Читати гід',
    footerTagline: 'Турбота починається з правильного вибору.',
    footerNavTitle: 'НАВІГАЦІЯ',
    footerLegalTitle: 'ПРАВОВА ІНФОРМАЦІЯ',
    legal: { terms: 'Умови сервісу', privacy: 'Конфіденційність', cookies: 'Налаштування cookies' },
    reviewsBadge: 'ВІДГУКИ ПАЦІЄНТІВ',
    faqTitle: 'Часті запитання перед візитом',
  },
  de: {
    nav: { home: 'Start', specialists: 'Fachärzte', clinics: 'Kliniken', about: 'Über uns', blog: 'Ratgeber' },
    headerCta: 'Arzt finden',
    blogIndexTitle: 'Klare Gesundheitsentscheidungen in der Slowakei.',
    blogIndexSubtitle: 'Städte-Guides, Facharzt-Übersichten und echte Patientenerfahrungen für mehr Sicherheit bei der Arztwahl.',
    readGuide: 'Ratgeber lesen',
    footerTagline: 'Gute Versorgung beginnt mit der richtigen Wahl.',
    footerNavTitle: 'NAVIGATION',
    footerLegalTitle: 'RECHTLICHES',
    legal: { terms: 'Nutzungsbedingungen', privacy: 'Datenschutz', cookies: 'Cookie-Richtlinie' },
    reviewsBadge: 'BEWERTUNGEN',
    faqTitle: 'Häufige Fragen vor dem Termin',
  },
};

const BASE_LANDINGS: Record<Locale, LandingCopy[]> = {
  sk: [
    {
      slug: 'bratislava-specialists',
      seoTitle: 'Overení lekári v Bratislave | Recenzie a výber špecialistu | Medhub',
      seoDescription: 'Hľadáte dobrého lekára v Bratislave? Porovnajte si špecialistov v Starom Meste, Ružinove či Petržalke podľa reálnych skúseností pacientov.',
      microLabel: 'LOKÁLNY SPRIEVODCA • BRATISLAVA',
      heroTitle: 'Overení lekári v Bratislave. Bez hádania.',
      heroSubtitle: 'Od Starého Mesta po Petržalku – nájdite kardiológa, dermatológa či všeobecného lekára s jasným prístupom a skúsenosťami ostatných pacientov.',
      trustText: 'Najprehľadnejšie recenzie lekárov na Slovensku',
      heroAnchor: 'Pozrite si, ako vybrať v Bratislave',
      motionCard: {
        title: 'Koho v Bratislave hľadáte?',
        liveBadge: 'Overené profily',
        tabA: 'Špecialisti',
        tabB: 'Kliniky',
        typingQuery: 'Dermatológ • Staré Mesto',
        searchBtn: 'Hľadať',
        sampleRows: [
          { name: 'MUDr. Katarína Kováčová', meta: 'Dermatológia • Bratislava II', rating: '★ 4.9 (112)' },
          { name: 'Poliklinika Mlynská dolina', meta: 'Viac odborov • Bratislava IV', rating: '★ 4.8 (240)' },
        ],
      },
      valueSection: {
        microLabel: 'REÁLNA SKÚSENOSŤ PACIENTOV',
        title: 'Menej obvolávania, viac istoty pred prvou návštevou.',
        text: 'V Bratislave rozhodujú detaily: komunikácia lekára, dodržanie času objednania aj to, ako sa personál správa pri príchode. Recenzie na Medhube vám ukážu kontext skôr, než vyrazíte z domu.',
        cta: 'Prehliadať špecialistov v BA',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Jedna úprimná recenzia ušetrí týždne čakania na nesprávnej adrese.',
      },
      stepsSection: {
        microLabel: 'AKO SI VYBRAŤ SPRÁVNE',
        title: 'Tri kroky k lekárovi v hlavnom meste',
        cards: [
          { num: '01', title: 'Vyberte odbor a mestskú časť', desc: 'Filtrujte starostlivosť blízko práce alebo domova – Ružinov, Nové Mesto či Karlova Ves.' },
          { num: '02', title: 'Čítajte kontext, nielen hviezdičky', desc: 'Sledujte poznámky o komunikácii, vysvetlení diagnózy a reálnej čakacej dobe.' },
          { num: '03', title: 'Rozhodnite sa s pokojom', desc: 'Príďte na vyšetrenie pripravení a k odborníkovi, ktorému dôverujete.' },
        ],
      },
      comparisonSection: {
        microLabel: 'PREHĽAD PODĽA POTREBY',
        title: 'Štátna poliklinika alebo súkromné centrum?',
        boxes: [
          {
            title: 'Zmluvní lekári (VšZP, Dôvera, Union)',
            desc: 'Ideálne na pravidelnú starostlivosť a preventívne prehliadky bez poplatkov za samotné vyšetrenie.',
            points: ['Hradené z verejného zdravotného poistenia', 'Často potrebný výmenný lístok', 'Dlhšie termíny pri populárnych špecialistoch'],
          },
          {
            title: 'Súkromné kliniky v Bratislave',
            desc: 'Riešenie, keď potrebujete presný čas objednania, viac času na konzultáciu alebo cudzie jazyky.',
            points: ['Termín zvyčajne do niekoľkých dní', 'Komfortná komunikácia v EN / DE / RU', 'Transparentný cenník za nadštandard'],
          },
        ],
      },
      faqs: [
        { q: 'Potrebujem v Bratislave výmenný lístok ku každému špecialistovi?', a: 'Ku kožnému lekárovi, očnému lekárovi (pri predpise okuliarov), psychiatrovi či gynekológovi výmenný lístok spravidla nepotrebujete. Pri iných odboroch odporúčame overiť podmienky vopred.' },
        { q: 'Ako fungujú recenzie na Medhube?', a: 'Recenzie pomáhajú zachytiť reálny prístup lekára a organizáciu ambulancie – aby budúci pacienti vedeli, na čo sa pripraviť.' },
      ],
      bottomCta: {
        microLabel: 'ĎALŠÍ KROK',
        title: 'Nájdite si lekára v Bratislave ešte dnes.',
        btn: 'Vyhľadať lekárov a kliniky',
      },
    },
    {
      slug: 'dentists-slovakia',
      seoTitle: 'Zubári na Slovensku | Ako vybrať kvalitnú zubnú kliniku | Medhub',
      seoDescription: 'Porovnanie zubných ambulancií a recenzií pacientov na Slovensku. Bezbolestný prístup, dentálna hygiena a transparentná komunikácia.',
      microLabel: 'ŠPECIALIZÁCIA • STOMATOLÓGIA',
      heroTitle: 'Zubná starostlivosť bez obáv a nečakaných prekvapení.',
      heroSubtitle: 'Nájdite zubára na Slovensku, ktorý všetko vysvetlí vopred – od preventívnej prehliadky až po endodonciu či ortodonciu.',
      trustText: 'Overené skúsenosti pacientov zo celého Slovenska',
      heroAnchor: 'Zistite, čo sledujú pacienti u zubárov',
      motionCard: {
        title: 'Hľadáte zubára vo svojom okolí?',
        liveBadge: 'Reálne hodnotenia',
        tabA: 'Špecialisti',
        tabB: 'Kliniky',
        typingQuery: 'Dentálna hygiena • Košice',
        searchBtn: 'Hľadať',
        sampleRows: [
          { name: 'MDDr. Marek Horváth', meta: 'Záchovná stomatológia • Košice', rating: '★ 4.9 (96)' },
          { name: 'Dental Studio Centrum', meta: 'Ortodoncia a hygiena • Žilina', rating: '★ 4.8 (184)' },
        ],
      },
      valueSection: {
        microLabel: 'DÔVERA V KRESLE',
        title: 'Dobrý zubár nezačína zákrokom, ale rozhovorom.',
        text: 'Pacienti najčastejšie oceňujú citlivý prístup, jasný liečebný plán a férovú cenu oznámenú pred začiatkom ošetrenia.',
        cta: 'Nájsť zubnú kliniku',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Keď lekár všetko pokojne vysvetlí, strach zo zubára zmizne po prvej návšteve.',
      },
      stepsSection: {
        microLabel: 'AKO VYBRAŤ ZUBÁRA',
        title: 'Na čo sa zamerať pred objednaním',
        cards: [
          { num: '01', title: 'Komplexnosť pod jednou strechou', desc: 'RTG, dentálna hygiena a endodoncia na jednom mieste šetria váš čas.' },
          { num: '02', title: 'Jasný plán a cenník', desc: 'Skontrolujte v recenziách, či klinika komunikuje ceny ešte pred zákrokom.' },
          { num: '03', title: 'Prístup pri citlivosti a bolesti', desc: 'Skúsenosti ostatných pacientov odhalia empatiu tímu aj šetrnú anestéziu.' },
        ],
      },
      comparisonSection: {
        microLabel: 'TYPY STAROSTLIVOSTI',
        title: 'Prevencia vs. akútne ošetrenie',
        boxes: [
          {
            title: 'Pravidelná prehliadka a hygiena',
            desc: 'Raz ročne ako základ pre zachovanie nároku na príspevky poisťovne a zdravé ďasná.',
            points: ['Preventívna prehliadka odhalí kaz včas', 'Profesionálna hygiena znižuje zápaly', 'Nižšie náklady na budúce zákroky'],
          },
          {
            title: 'Špecializované stomatologické centrá',
            desc: 'Mikroskopické ošetrenie koreňových kanálikov, implantáty a neviditeľné strojčeky.',
            points: ['Práca pod operačným mikroskopom', '3D CBCT diagnostika priamo na klinike', 'Detailná konzultácia pred liečbou'],
          },
        ],
      },
      faqs: [
        { q: 'Ako často absolvovať preventívnu zubnú prehliadku?', a: 'Dospelým sa odporúča minimálne raz ročne (deťom dvakrát ročne), čo je často aj podmienkou benefitov zdravotných poisťovní.' },
        { q: 'Na čo sa pýtať pred drahším zákrokom?', a: 'Vždy si vyžiadajte písomný liečebný plán s alternatívami a rozpisom cien za jednotlivé kroky.' },
      ],
      bottomCta: {
        microLabel: 'STAROSTLIVOSŤ O ÚSMEV',
        title: 'Vyberte si zubnú ambulanciu s dôverou.',
        btn: 'Prehliadať zubárov na Medhube',
      },
    },
    {
      slug: 'private-clinics-guide',
      seoTitle: 'Súkromné kliniky vs. polikliniky na Slovensku | Medhub',
      seoDescription: 'Kedy sa oplatí súkromná klinika a kedy klasická poliklinika? Praktické porovnanie termínov, poisťovní a pacientskej skúsenosti.',
      microLabel: 'SPRIEVODCA SYSTÉMOM',
      heroTitle: 'Súkromná klinika alebo poliklinika? Vyberte si múdro.',
      heroSubtitle: 'Nie vždy potrebujete drahý balík – a niekedy je rýchly termín na nezaplatenie. Zistite, ako oba svety skombinovať pre svoje zdravie.',
      trustText: 'Transparentné porovnanie kliník po celom Slovensku',
      heroAnchor: 'Pozrieť rozdiely v praxi',
      motionCard: {
        title: 'Porovnajte si možnosti kliník',
        liveBadge: 'Aktuálne dáta',
        tabA: 'Špecialisti',
        tabB: 'Kliniky',
        typingQuery: 'Súkromná klinika • Bratislava',
        searchBtn: 'Porovnať',
        sampleRows: [
          { name: 'Klinika Medis Centrum', meta: 'Termín do 48 hodín • Súkromná', rating: '★ 4.9 (165)' },
          { name: 'Poliklinika Sever', meta: 'Zmluvná so VšZP / Dôvera / Union', rating: '★ 4.6 (310)' },
        ],
      },
      valueSection: {
        microLabel: 'VAŠA VOĽBA',
        title: 'Zdravie nie je o tom, či zaplatíte viac. Je o správnom načasovaní.',
        text: 'Medhub spája hodnotenia súkromných centier aj bežných polikliník na jednom mieste, aby ste hneď videli reálnu kvalitu prístupu.',
        cta: 'Preskúmať kliniky',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Skvelého odborníka nájdete na poliklinike aj v súkromnom centre – rozhoduje skúsenosť pacientov.',
      },
      stepsSection: {
        microLabel: 'ROZHODOVACÍ RÁMEC',
        title: 'Ako sa rozhodnúť za 60 sekúnd',
        cards: [
          { num: '01', title: 'Posúďte naliehavosť', desc: 'Ak potrebujete termín do 2–3 dní, súkromná klinika vám ušetrí týždne stresu.' },
          { num: '02', title: 'Overte zmluvu s poisťovňou', desc: 'Mnohé moderné kliniky majú čiastočné zmluvy – platíte len za manažment termínu.' },
          { num: '03', title: 'Skontrolujte skúsenosti s organizáciou', desc: 'Zamerajte sa na recenzie recepcie, dĺžku čakania a následnú starostlivosť.' },
        ],
      },
      comparisonSection: {
        microLabel: 'POROVNANIE MOŽNOSTÍ',
        title: 'Kde získať akú výhodu',
        boxes: [
          {
            title: 'Klasická poliklinika',
            desc: 'Najlepšia voľba pri dlhodobej starostlivosti a nadväzujúcich laboratórnych vyšetreniach.',
            points: ['Plné krytie poisťovňou pri zmluvných lekároch', 'Blízko bydliska v každom okresnom meste', 'Osvedčené lokálne ambulancie'],
          },
          {
            title: 'Súkromná klinika',
            desc: 'Ideálna pre pracujúcich ľudí, expatov alebo komplexnú diagnostiku v jeden deň.',
            points: ['Objednanie na presný čas bez čakania', 'Dlhší čas na konzultáciu s lekárom', 'Moderné digitálne výstupy a koordinácia'],
          },
        ],
      },
      faqs: [
        { q: 'Sú lekári v súkromných klinikách lepší ako v poliklinikách?', a: 'Mnohí špičkoví lekári pôsobia v oboch typoch zariadení. Hlavný rozdiel býva v organizácii objednávania, prostredí a čase vyhradenom na jedného pacienta.' },
        { q: 'Ako zistím, či klinika berie moju poisťovňu?', a: 'Vždy si pred objednaním skontrolujte zoznam zmluvných poisťovní (VšZP, Dôvera, Union) a prípadný poplatok za objednanie na presný čas.' },
      ],
      bottomCta: {
        microLabel: 'VAŠE ZDRAVIE, VÁŠ VÝBER',
        title: 'Porovnajte kliniky vo svojom meste.',
        btn: 'Nájsť kliniku na Medhube',
      },
    },
  ],

  en: [
    {
      slug: 'bratislava-specialists',
      seoTitle: 'Trusted Doctors in Bratislava | Reviews & Specialists | Medhub',
      seoDescription: 'Looking for an English-friendly or trusted doctor in Bratislava? Explore patient reviews across Staré Mesto, Ružinov, and Petržalka.',
      microLabel: 'CITY GUIDE • BRATISLAVA',
      heroTitle: 'Trusted doctors in Bratislava. Minus the guesswork.',
      heroSubtitle: 'Whether you live in Staré Mesto or Petržalka, find specialists who listen, explain clearly, and come recommended by real patients.',
      trustText: "Slovakia's #1 doctor review website",
      heroAnchor: 'See how to choose in Bratislava',
      motionCard: {
        title: 'Who are you looking for in Bratislava?',
        liveBadge: 'Verified listings',
        tabA: 'Specialists',
        tabB: 'Clinics',
        typingQuery: 'Dermatologist • Staré Mesto',
        searchBtn: 'Search',
        sampleRows: [
          { name: 'MUDr. Katarína Kováčová', meta: 'Dermatology • Bratislava II', rating: '★ 4.9 (112)' },
          { name: 'Mlynská Dolina Polyclinic', meta: 'Multi-specialty • Bratislava IV', rating: '★ 4.8 (240)' },
        ],
      },
      valueSection: {
        microLabel: 'CARE WHEN YOU NEED IT',
        title: 'Less calling around. More confidence before you walk in.',
        text: 'Finding healthcare in a new district—or a new language—can feel overwhelming. Real patient reviews show you bedside manner, wait times, and clarity before you book.',
        cta: 'Browse Bratislava specialists',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'One thoughtful patient review can save weeks of trial and error.',
      },
      stepsSection: {
        microLabel: 'HOW IT WORKS',
        title: 'Three calm steps to the right doctor',
        cards: [
          { num: '01', title: 'Pick specialty & neighborhood', desc: 'Narrow down care close to home or work—from Ružinov to Nové Mesto.' },
          { num: '02', title: 'Read beyond the star score', desc: 'Check real notes on English communication, punctuality, and clear explanations.' },
          { num: '03', title: 'Book with peace of mind', desc: 'Walk into your appointment knowing what to expect and why patients trust them.' },
        ],
      },
      comparisonSection: {
        microLabel: 'LOCAL INSIGHT',
        title: 'Public coverage vs. private convenience',
        boxes: [
          {
            title: 'Insurance-contracted practices (VšZP, Dôvera, Union)',
            desc: 'Great for routine visits and long-term care covered by Slovak public health insurance.',
            points: ['Covered by standard Slovak insurance', 'May require a GP referral (výmenný lístok)', 'Longer wait times for popular specialists'],
          },
          {
            title: 'Private clinics in Bratislava',
            desc: 'Ideal when you need fast appointments, predictable timing, or multilingual consultations.',
            points: ['Appointments often within 48–72 hours', 'English, German & Russian support common', 'Upfront fee schedules for private visits'],
          },
        ],
      },
      faqs: [
        { q: 'Do I need a GP referral (výmenný lístok) for specialists in Slovakia?', a: 'Usually yes for most specialists under public insurance, except gynecology, ophthalmology (glasses), dermatology, and psychiatry. Private self-pay visits generally do not require one.' },
        { q: 'Can expats find English-speaking doctors on Medhub?', a: 'Yes—each doctor’s page lists the languages they speak fluently.' },
      ],
      bottomCta: {
        microLabel: 'TAKE THE NEXT STEP',
        title: 'Find a doctor in Bratislava who feels right.',
        btn: 'Search doctors and clinics',
      },
    },
    {
      slug: 'dentists-slovakia',
      seoTitle: 'Dentists in Slovakia | Verified Patient Reviews | Medhub',
      seoDescription: 'Compare dental clinics and dentists across Slovakia. Read honest patient reviews on gentle care, hygiene, and transparent pricing.',
      microLabel: 'SPECIALTY GUIDE • DENTISTRY',
      heroTitle: 'Dental care in Slovakia, guided by honest patient reviews.',
      heroSubtitle: 'From routine dental hygiene to microscopic endodontics—find clinics known for gentle treatment and zero surprise bills.',
      trustText: "Slovakia's #1 doctor review website",
      heroAnchor: 'See what patients look for',
      motionCard: {
        title: 'Looking for a trusted dentist?',
        liveBadge: 'Patient-reviewed',
        tabA: 'Specialists',
        tabB: 'Clinics',
        typingQuery: 'Dental hygiene • Košice',
        searchBtn: 'Search',
        sampleRows: [
          { name: 'MDDr. Marek Horváth', meta: 'Restorative Dentistry • Košice', rating: '★ 4.9 (96)' },
          { name: 'Dental Studio Centrum', meta: 'Orthodontics & Hygiene • Žilina', rating: '★ 4.8 (184)' },
        ],
      },
      valueSection: {
        microLabel: 'COMFORT & TRANSPARENCY',
        title: 'Great dental care starts with listening, not drilling.',
        text: 'The most praised dentists in Slovakia share two traits: they explain every step before starting, and they give clear pricing before any procedure.',
        cta: 'Find a dental clinic',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'When a dentist explains your options calmly, half the anxiety disappears.',
      },
      stepsSection: {
        microLabel: 'WHAT TO CHECK',
        title: 'Choosing a dentist with confidence',
        cards: [
          { num: '01', title: 'Everything under one roof', desc: 'In-house X-ray, dental hygiene, and specialists save extra trips across town.' },
          { num: '02', title: 'Clear written treatment plans', desc: 'Look for reviews mentioning transparent quotes before major dental work.' },
          { num: '03', title: 'Gentle, unhurried approach', desc: 'First-hand stories tell you how caring the team is with sensitive patients.' },
        ],
      },
      comparisonSection: {
        microLabel: 'CARE TYPES',
        title: 'Preventive visits vs. specialized centers',
        boxes: [
          {
            title: 'Annual check-ups & hygiene',
            desc: 'The simplest way to protect your teeth and stay eligible for Slovak insurance dental benefits.',
            points: ['Catch small issues before they hurt', 'Professional plaque & tartar removal', 'Lower long-term dental costs'],
          },
          {
            title: 'Specialized dental studios',
            desc: 'Microscopic root canals, implants, and clear aligners with modern 3D diagnostics.',
            points: ['CBCT 3D imaging on-site', 'Microscope-assisted precision', 'Dedicated post-procedure follow-up'],
          },
        ],
      },
      faqs: [
        { q: 'How often should I book a preventive dental exam in Slovakia?', a: 'Adults should visit at least once a year (twice for children)—this also helps keep your eligibility for public insurer dental allowances.' },
        { q: 'Are dental prices transparent across clinics?', a: 'Good clinics publish baseline prices online and walk you through an exact treatment quote before proceeding.' },
      ],
      bottomCta: {
        microLabel: 'CHOOSE WITH CONFIDENCE',
        title: 'Find dental care you actually feel good visiting.',
        btn: 'Explore dentists on Medhub',
      },
    },
    {
      slug: 'private-clinics-guide',
      seoTitle: 'Private Clinics vs. Polyclinics in Slovakia | Medhub Guide',
      seoDescription: 'Should you book a private clinic or visit a public polyclinic in Slovakia? Compare waiting times, insurance, and patient experience.',
      microLabel: 'HEALTHCARE GUIDE',
      heroTitle: 'Private clinics vs. polyclinics: choose faster, clearer care.',
      heroSubtitle: 'Know when public insurance coverage works best—and when a private clinic saves you weeks of waiting.',
      trustText: "Slovakia's #1 doctor review website",
      heroAnchor: 'Compare both options',
      motionCard: {
        title: 'Compare clinic options nearby',
        liveBadge: 'Updated insights',
        tabA: 'Specialists',
        tabB: 'Clinics',
        typingQuery: 'Private clinic • Bratislava',
        searchBtn: 'Compare',
        sampleRows: [
          { name: 'Medis Centrum Clinic', meta: 'Next-day slots • Private', rating: '★ 4.9 (165)' },
          { name: 'Poliklinika Sever', meta: 'VšZP / Dôvera / Union covered', rating: '★ 4.6 (310)' },
        ],
      },
      valueSection: {
        microLabel: 'CONTEXT MATTERS',
        title: 'Better care is about fit—not just price tags.',
        text: 'Some of the finest specialists work in local polyclinics, while private centers shine on speed and scheduling. Medhub puts patient reviews for both side by side.',
        cta: 'Find a clinic',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Seeing real clinic experiences helps every next visit feel calmer and clearer.',
      },
      stepsSection: {
        microLabel: 'DECISION FRAMEWORK',
        title: 'How to decide in 60 seconds',
        cards: [
          { num: '01', title: 'Check how urgent it is', desc: 'Need answers this week? Private clinics typically offer slots within days.' },
          { num: '02', title: 'Verify insurance agreements', desc: 'Many modern clinics hold partial contracts—you only pay a scheduling fee.' },
          { num: '03', title: 'Look at reception & organization', desc: 'Patient notes show whether appointment times are actually respected.' },
        ],
      },
      comparisonSection: {
        microLabel: 'SIDE BY SIDE',
        title: 'Where each option shines',
        boxes: [
          {
            title: 'Traditional Polyclinics',
            desc: 'Strong for ongoing chronic care, lab work, and full public insurance coverage.',
            points: ['Covered by Slovak public insurers', 'Available in every district town', 'Long-standing community doctors'],
          },
          {
            title: 'Private Medical Centers',
            desc: 'Built for busy schedules, expats, and coordinated same-day diagnostics.',
            points: ['Exact appointment times, minimal waiting', 'Longer consultation windows', 'Multilingual reception & digital results'],
          },
        ],
      },
      faqs: [
        { q: 'Are doctors at private clinics more experienced?', a: 'Not necessarily—many respected specialists practice in both settings. The main difference is usually wait times, amenities, and consultation length.' },
        { q: 'How do I check if a clinic accepts VšZP, Dôvera, or Union?', a: 'Always confirm both insurer contracts and whether there is an administrative fee for exact-time booking.' },
      ],
      bottomCta: {
        microLabel: 'NEXT STEP',
        title: 'Compare reviewed clinics across Slovakia.',
        btn: 'Search clinics on Medhub',
      },
    },
  ],

  ru: [
    {
      slug: 'bratislava-specialists',
      seoTitle: 'Проверенные врачи в Братиславе | Отзывы пациентов | Medhub',
      seoDescription: 'Ищете врача в Братиславе? Читайте честные отзывы пациентов о специалистах в Старом Месте, Ружинове и Петржалке.',
      microLabel: 'ГИД ПО ГОРОДУ • БРАТИСЛАВА',
      heroTitle: 'Проверенные врачи в Братиславе. Без угадываний.',
      heroSubtitle: 'От Старого Места до Петржалки — находите специалистов, которые внимательно слушают, понятно объясняют и заслужили доверие пациентов.',
      trustText: 'Платформа №1 отзывов о врачах в Словакии',
      heroAnchor: 'Как выбрать врача в Братиславе',
      motionCard: {
        title: 'Кого вы ищете в Братиславе?',
        liveBadge: 'Проверенные профили',
        tabA: 'Специалисты',
        tabB: 'Клиники',
        typingQuery: 'Дерматолог • Старое Место',
        searchBtn: 'Найти',
        sampleRows: [
          { name: 'MUDr. Katarína Kováčová', meta: 'Дерматология • Братислава II', rating: '★ 4.9 (112)' },
          { name: 'Poliklinika Mlynská dolina', meta: 'Многопрофильная • Братислава IV', rating: '★ 4.8 (240)' },
        ],
      },
      valueSection: {
        microLabel: 'ЗАБОТА В НУЖНЫЙ МОМЕНТ',
        title: 'Меньше звонков наугад — больше уверенности на приёме.',
        text: 'Поиск врача в новом районе или на иностранном языке часто вызывает тревогу. Реальные отзывы заранее показывают манеру общения, время ожидания и атмосферу в клинике.',
        cta: 'Смотреть врачей в Братиславе',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Один подробный отзыв пациента экономит недели поисков и лишних визитов.',
      },
      stepsSection: {
        microLabel: 'КАК ЭТО РАБОТАЕТ',
        title: 'Три спокойных шага к своему врачу',
        cards: [
          { num: '01', title: 'Выберите профиль и район', desc: 'Ищите приём рядом с домом или работой: Ружинов, Нове-Место, Карлова-Вес.' },
          { num: '02', title: 'Читайте суть, а не только оценки', desc: 'Обращайте внимание на язык общения (EN/RU/SK), пунктуальность и понятность диагноза.' },
          { num: '03', title: 'Идите на приём с доверием', desc: 'Вы заранее понимаете, как проходит визит и почему пациенты советуют этого врача.' },
        ],
      },
      comparisonSection: {
        microLabel: 'МЕСТНЫЙ КОНТЕКСТ',
        title: 'Государственная страховка или частный приём?',
        boxes: [
          {
            title: 'Врачи по страховке (VšZP, Dôvera, Union)',
            desc: 'Отличный вариант для планового наблюдения и профилактики без оплаты самого осмотра.',
            points: ['Покрывается словацкой медстраховкой', 'Часто нужно направление (výmenný lístok)', 'Ожидание записи к узким врачам дольше'],
          },
          {
            title: 'Частные клиники Братиславы',
            desc: 'Удобно, если нужен быстрый визит на точное время или приём на русском / английском.',
            points: ['Запись обычно в течение 1–3 дней', 'Персонал часто говорит на EN / RU / UA', 'Понятный прайс за визит без сюрпризов'],
          },
        ],
      },
      faqs: [
        { q: 'Нужно ли направление (výmenný lístok) к специалисту в Словакии?', a: 'По госстраховке — к большинству врачей да, кроме гинеколога, дерматолога, психиатра и офтальмолога (для подбора очков). В частных клиниках на платной основе направление обычно не требуется.' },
        { q: 'Можно ли найти на Medhub врачей, говорящих по-русски или по-английски?', a: 'Да, на странице врача перечислены языки, на которых он свободно общается.' },
      ],
      bottomCta: {
        microLabel: 'СЛЕДУЮЩИЙ ШАГ',
        title: 'Найдите врача в Братиславе уже сегодня.',
        btn: 'Поиск врачей и клиник',
      },
    },
    {
      slug: 'dentists-slovakia',
      seoTitle: 'Стоматологи в Словакии | Отзывы и выбор клиники | Medhub',
      seoDescription: 'Сравните стоматологов и клиники в Словакии по реальным отзывам пациентов: бережное лечение, гигиена и прозрачные цены.',
      microLabel: 'СПЕЦИАЛИЗАЦИЯ • СТОМАТОЛОГИЯ',
      heroTitle: 'Стоматология в Словакии глазами реальных пациентов.',
      heroSubtitle: 'От профессиональной гигиены до микроскопной эндодонтии — выбирайте клиники с бережным подходом и честной сметой до начала лечения.',
      trustText: 'Платформа №1 отзывов о врачах в Словакии',
      heroAnchor: 'На что смотрят пациенты',
      motionCard: {
        title: 'Ищете проверенного стоматолога?',
        liveBadge: 'Оценки пациентов',
        tabA: 'Специалисты',
        tabB: 'Клиники',
        typingQuery: 'Гигиена зубов • Кошице',
        searchBtn: 'Найти',
        sampleRows: [
          { name: 'MDDr. Marek Horváth', meta: 'Терапия • Кошице', rating: '★ 4.9 (96)' },
          { name: 'Dental Studio Centrum', meta: 'Ортодонтия и гигиена • Жилина', rating: '★ 4.8 (184)' },
        ],
      },
      valueSection: {
        microLabel: 'ДОВЕРИЕ В КРЕСЛЕ',
        title: 'Хороший стоматолог начинает с диалога, а не с бормашины.',
        text: 'Больше всего пациенты ценят деликатность, понятный план лечения и озвученную стоимость до начала любых процедур.',
        cta: 'Найти стоматологию',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Когда врач спокойно объясняет каждый шаг, страх исчезает с первой минуты.',
      },
      stepsSection: {
        microLabel: 'КРИТЕРИИ ВЫБОРА',
        title: 'Как выбрать стоматологию без риска',
        cards: [
          { num: '01', title: 'Диагностика в одном месте', desc: 'Рентген, КТ и гигиена на одной базе экономят время на разъездах.' },
          { num: '02', title: 'Прозрачный план лечения', desc: 'Проверяйте в отзывах, согласует ли клиника стоимость заранее.' },
          { num: '03', title: 'Бережное отношение', desc: 'Истории пациентов сразу показывают комфорт анестезии и заботу команды.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ФОРМАТЫ ПОМОЩИ',
        title: 'Профилактика и сложная стоматология',
        boxes: [
          {
            title: 'Ежегодный осмотр и гигиена',
            desc: 'Основа здоровья дёсен и условие сохранения бонусов от словацких страховых.',
            points: ['Раннее выявление кариеса без боли', 'Снятие камня и налёта у гигиениста', 'Экономия на сложном лечении в будущем'],
          },
          {
            title: 'Специализированные студии',
            desc: 'Лечение каналов под микроскопом, имплантация и элайнеры.',
            points: ['3D-снимки прямо в кабинете', 'Высокая точность под увеличением', 'Детальное сопровождение после визита'],
          },
        ],
      },
      faqs: [
        { q: 'Как часто нужно проходить профилактический осмотр в Словакии?', a: 'Взрослым рекомендуется минимум раз в год (детям — дважды). Это также важно для сохранения страховых льгот.' },
        { q: 'Можно ли узнать цену до лечения?', a: 'Да, надёжные клиники всегда предоставляют предварительный расчёт и альтернативные варианты пломб или коронок.' },
      ],
      bottomCta: {
        microLabel: 'ЗАБОТА О ЗДОРОВЬЕ',
        title: 'Выберите стоматологию с уверенностью.',
        btn: 'Смотреть стоматологов на Medhub',
      },
    },
    {
      slug: 'private-clinics-guide',
      seoTitle: 'Частные клиники и поликлиники в Словакии: что выбрать | Medhub',
      seoDescription: 'Когда выгоднее обычная поликлиника, а когда частный центр? Сравнение сроков записи, страховок и сервиса в Словакии.',
      microLabel: 'ГИД ПО СИСТЕМЕ',
      heroTitle: 'Частная клиника или поликлиника: выбирайте осознанно.',
      heroSubtitle: 'Понимание того, как устроена медицина в Словакии, помогает не переплачивать там, где не нужно — и не ждать неделями, когда помощь нужна сейчас.',
      trustText: 'Платформа №1 отзывов о врачах в Словакии',
      heroAnchor: 'Сравнить оба варианта',
      motionCard: {
        title: 'Сравните клиники рядом с вами',
        liveBadge: 'Живые отзывы',
        tabA: 'Специалисты',
        tabB: 'Клиники',
        typingQuery: 'Частная клиника • Братислава',
        searchBtn: 'Сравнить',
        sampleRows: [
          { name: 'Klinika Medis Centrum', meta: 'Запись за 48 часов • Частная', rating: '★ 4.9 (165)' },
          { name: 'Poliklinika Sever', meta: 'Договор с VšZP / Dôvera / Union', rating: '★ 4.6 (310)' },
        ],
      },
      valueSection: {
        microLabel: 'ВАЖЕН КОНТЕКСТ',
        title: 'Качество медицины измеряется не чеком, а подходом врача.',
        text: 'Сильные специалисты работают и в городских поликлиниках, и в частных центрах. Medhub собирает отзывы о каждом месте, чтобы выбор был прозрачным.',
        cta: 'Выбрать клинику',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Чужой опыт помогает сделать ваш следующий визит спокойнее и предсказуемее.',
      },
      stepsSection: {
        microLabel: 'АЛГОРИТМ ВЫБОРА',
        title: 'Как определиться за минуту',
        cards: [
          { num: '01', title: 'Оцените срочность', desc: 'Если приём нужен на этой неделе — частная клиника сэкономит недели ожидания.' },
          { num: '02', title: 'Проверьте договоры со страховой', desc: 'Часть современных центров работает по страховке с небольшой доплатой за сервис.' },
          { num: '03', title: 'Посмотрите отзывы об организации', desc: 'Узнайте, соблюдается ли время записи и как работает регистратура.' },
        ],
      },
      comparisonSection: {
        microLabel: 'СРАВНЕНИЕ НА ПРАКТИКЕ',
        title: 'Сильные стороны каждого формата',
        boxes: [
          {
            title: 'Обычная поликлиника',
            desc: 'Оптимальна для хронического наблюдения и базовых анализов по страховке.',
            points: ['Полное покрытие VšZP / Dôvera / Union', 'Есть в каждом районе и городе', 'Опытные участковые специалисты'],
          },
          {
            title: 'Частный медцентр',
            desc: 'Идеально при плотном графике, языковом барьере и комплексной диагностике за день.',
            points: ['Приём строго по времени без очередей', 'Больше времени на беседу с врачом', 'Быстрые цифровые результаты анализов'],
          },
        ],
      },
      faqs: [
        { q: 'Правда ли, что в частных клиниках врачи квалифицированнее?', a: 'Не всегда: многие ведущие врачи совмещают приём в больницах, поликлиниках и частных центрах. Отличаются в первую очередь сервис и скорость записи.' },
        { q: 'Как понять, примут ли меня по страховке?', a: 'Уточняйте наличие контракта с вашей страховой (VšZP, Dôvera, Union) и размер возможной доплаты за запись на точное время.' },
      ],
      bottomCta: {
        microLabel: 'СЛЕДУЮЩИЙ ШАГ',
        title: 'Сравните клиники в вашем городе на Medhub.',
        btn: 'Найти клинику',
      },
    },
  ],

  ua: [
    {
      slug: 'bratislava-specialists',
      seoTitle: 'Перевірені лікарі у Братиславі | Відгуки пацієнтів | Medhub',
      seoDescription: 'Шукаєте надійного лікаря у Братиславі? Читайте реальні відгуки про спеціалістів у Старому Месті, Ружинові та Петржалці.',
      microLabel: 'ГІД ПО МІСТУ • БРАТИСЛАВА',
      heroTitle: 'Перевірені лікарі у Братиславі. Без вгадувань.',
      heroSubtitle: 'Від Старого Места до Петржалки — знаходьте фахівців, які уважно слухають, зрозуміло пояснюють і мають довіру пацієнтів.',
      trustText: 'Платформа №1 відгуків про лікарів у Словаччині',
      heroAnchor: 'Як обрати лікаря у Братиславі',
      motionCard: {
        title: 'Кого ви шукаєте у Братиславі?',
        liveBadge: 'Перевірені профілі',
        tabA: 'Спеціалісти',
        tabB: 'Клініки',
        typingQuery: 'Дерматолог • Старе Место',
        searchBtn: 'Шукати',
        sampleRows: [
          { name: 'MUDr. Katarína Kováčová', meta: 'Дерматологія • Братислава II', rating: '★ 4.9 (112)' },
          { name: 'Poliklinika Mlynská dolina', meta: 'Багатопрофільна • Братислава IV', rating: '★ 4.8 (240)' },
        ],
      },
      valueSection: {
        microLabel: 'ТУРБОТА В ПОТРІБНИЙ МОМЕНТ',
        title: 'Менше дзвінків навмання — більше впевненості на візиті.',
        text: 'Пошук лікаря в новому районі чи іноземною мовою часто викликає хвилювання. Реальні відгуки заздалегідь показують ставлення, час очікування та атмосферу в клініці.',
        cta: 'Переглянути лікарів у Братиславі',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Один щирий відгук пацієнта заощаджує тижні пошуків і зайвих візитів.',
      },
      stepsSection: {
        microLabel: 'ЯК ЦЕ ПРАЦЮЄ',
        title: 'Три спокійні кроки до свого лікаря',
        cards: [
          { num: '01', title: 'Оберіть напрямок і район', desc: 'Шукайте прийом поруч із домом чи роботою: Ружинов, Нове-Место, Карлова-Вес.' },
          { num: '02', title: 'Читайте деталі, а не лише зірочки', desc: 'Звертайте увагу на мову спілкування, пунктуальність і чіткість пояснень.' },
          { num: '03', title: 'Йдіть на прийом з довірою', desc: 'Ви заздалегідь знаєте, чого очікувати та чому пацієнти радять цього спеціаліста.' },
        ],
      },
      comparisonSection: {
        microLabel: 'МІСЦЕВИЙ КОНТЕКСТ',
        title: 'Державне страхування чи приватний центр?',
        boxes: [
          {
            title: 'Лікарі за страховкою (VšZP, Dôvera, Union)',
            desc: 'Чудово підходить для планового нагляду й профілактики без оплати за сам огляд.',
            points: ['Покривається словацьким медстрахуванням', 'Часто потрібне направлення (výmenný lístok)', 'Довше очікування запису до вузьких фахівців'],
          },
          {
            title: 'Приватні клініки Братислави',
            desc: 'Зручно, коли потрібен швидкий візит на точний час або консультація українською / англійською.',
            points: ['Запис зазвичай протягом 1–3 днів', 'Поширена підтримка UA / EN / SK', 'Прозорий прайс без несподіванок'],
          },
        ],
      },
      faqs: [
        { q: 'Чи потрібне направлення (výmenný lístok) до спеціаліста у Словаччині?', a: 'За держстрахуванням — здебільшого так, окрім гінеколога, дерматолога, психіатра та офтальмолога (для окулярів). У приватних клініках на платній основі направлення зазвичай не потрібне.' },
        { q: 'Чи можна знайти на Medhub україномовних чи англомовних лікарів?', a: 'Так, на сторінці лікаря зазначені мови, якими він вільно спілкується.' },
      ],
      bottomCta: {
        microLabel: 'НАСТУПНИЙ КРОК',
        title: 'Знайдіть лікаря у Братиславі вже сьогодні.',
        btn: 'Шукати лікарів і клініки',
      },
    },
    {
      slug: 'dentists-slovakia',
      seoTitle: 'Стоматологи у Словаччині | Відгуки та вибір клініки | Medhub',
      seoDescription: 'Порівняйте стоматологічні клініки у Словаччині за реальними відгуками пацієнтів: делікатне лікування, гігієна та чесні ціни.',
      microLabel: 'СПЕЦІАЛІЗАЦІЯ • СТОМАТОЛОГІЯ',
      heroTitle: 'Стоматологія у Словаччині очима реальних пацієнтів.',
      heroSubtitle: 'Від професійної гігієни до мікроскопної ендодонтії — обирайте клініки з дбайливим підходом і зрозумілим кошторисом до початку лікування.',
      trustText: 'Платформа №1 відгуків про лікарів у Словаччині',
      heroAnchor: 'На що звертають увагу пацієнти',
      motionCard: {
        title: 'Шукаєте надійного стоматолога?',
        liveBadge: 'Оцінки пацієнтів',
        tabA: 'Спеціалісти',
        tabB: 'Клініки',
        typingQuery: 'Гігієна зубів • Кошице',
        searchBtn: 'Шукати',
        sampleRows: [
          { name: 'MDDr. Marek Horváth', meta: 'Терапія • Кошице', rating: '★ 4.9 (96)' },
          { name: 'Dental Studio Centrum', meta: 'Ортодонтія та гігієна • Жиліна', rating: '★ 4.8 (184)' },
        ],
      },
      valueSection: {
        microLabel: 'ДОВІРА В КРІСЛІ',
        title: 'Добрий стоматолог починає з розмови, а не з інструментів.',
        text: 'Найбільше пацієнти цінують делікатність, чіткий план лікування та озвучену вартість ще до старту процедур.',
        cta: 'Знайти стоматологію',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Коли лікар спокійно пояснює кожен крок, страх зникає з першої хвилини.',
      },
      stepsSection: {
        microLabel: 'КРИТЕРІЇ ВИБОРУ',
        title: 'Як обрати стоматологію впевнено',
        cards: [
          { num: '01', title: 'Діагностика в одному місці', desc: 'Рентген, КТ і гігієна в одній клініці заощаджують ваш час.' },
          { num: '02', title: 'Прозорий план лікування', desc: 'Перевіряйте у відгуках, чи узгоджує клініка ціни заздалегідь.' },
          { num: '03', title: 'Дбайливе ставлення', desc: 'Історії пацієнтів одразу показують якість анестезії та турботу команди.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ФОРМАТИ ДОПОМОГИ',
        title: 'Профілактика та спеціалізовані центри',
        boxes: [
          {
            title: 'Щорічний огляд і гігієна',
            desc: 'Основа здоров’я ясен та умова збереження бонусів від словацьких страхових.',
            points: ['Раннє виявлення карієсу без болю', 'Професійне зняття каменю та нальоту', 'Менші витрати на лікування в майбутньому'],
          },
          {
            title: 'Спеціалізовані студії',
            desc: 'Лікування каналів під мікроскопом, імплантація та елайнери.',
            points: ['3D-діагностика просто в кабінеті', 'Висока точність під збільшенням', 'Детальний супровід після візиту'],
          },
        ],
      },
      faqs: [
        { q: 'Як часто варто проходити профілактичний огляд у Словаччині?', a: 'Дорослим рекомендується щонайменше раз на рік (дітям — двічі). Це також важливо для страхових компенсацій.' },
        { q: 'Чи можна дізнатися вартість до початку лікування?', a: 'Так, відповідальні клініки завжди готують попередній фінансовий план з альтернативами.' },
      ],
      bottomCta: {
        microLabel: 'ТУРБОТА ПРО УСМІШКУ',
        title: 'Оберіть стоматологію з упевненістю.',
        btn: 'Переглянути стоматологів на Medhub',
      },
    },
    {
      slug: 'private-clinics-guide',
      seoTitle: 'Приватні клініки чи поліклініки у Словаччині: що обрати | Medhub',
      seoDescription: 'Коли краще звичайна поліклініка, а коли приватний центр? Порівняння термінів запису, страхування та сервісу у Словаччині.',
      microLabel: 'ГІД ПО СИСТЕМІ',
      heroTitle: 'Приватна клініка чи поліклініка: обирайте зважено.',
      heroSubtitle: 'Розуміння медичної системи Словаччини допомагає не переплачувати зайвого — і не чекати тижнями, коли допомога потрібна терміново.',
      trustText: 'Платформа №1 відгуків про лікарів у Словаччині',
      heroAnchor: 'Порівняти обидва варіанти',
      motionCard: {
        title: 'Порівняйте клініки поруч',
        liveBadge: 'Актуальні відгуки',
        tabA: 'Спеціалісти',
        tabB: 'Клініки',
        typingQuery: 'Приватна клініка • Братислава',
        searchBtn: 'Порівняти',
        sampleRows: [
          { name: 'Klinika Medis Centrum', meta: 'Запис за 48 годин • Приватна', rating: '★ 4.9 (165)' },
          { name: 'Poliklinika Sever', meta: 'Договір з VšZP / Dôvera / Union', rating: '★ 4.6 (310)' },
        ],
      },
      valueSection: {
        microLabel: 'ВАЖЛИВИЙ КОНТЕКСТ',
        title: 'Якість медицини вимірюється підходом лікаря, а не лише чеком.',
        text: 'Сильні фахівці працюють і в поліклініках, і в приватних центрах. Medhub збирає відгуки про обидва формати в одному місці.',
        cta: 'Обрати клініку',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Досвід інших пацієнтів робить кожен наступний візит спокійнішим і зрозумілішим.',
      },
      stepsSection: {
        microLabel: 'АЛГОРИТМ ВИБОРУ',
        title: 'Як визначитися за 60 секунд',
        cards: [
          { num: '01', title: 'Оцініть терміновість', desc: 'Якщо прийом потрібен цього тижня — приватна клініка заощадить тижні очікування.' },
          { num: '02', title: 'Перевірте договори зі страховою', desc: 'Частина сучасних центрів приймає за страховкою з невеликою доплатою за сервіс.' },
          { num: '03', title: 'Оцініть організацію візиту', desc: 'Відгуки покажуть, чи дотримуються часу запису та як працює рецепція.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ПОРІВНЯННЯ НА ПРАКТИЦІ',
        title: 'Переваги кожного формату',
        boxes: [
          {
            title: 'Звичайна поліклініка',
            desc: 'Найкращий вибір для тривалого нагляду та базових аналізів за страховкою.',
            points: ['Повне покриття VšZP / Dôvera / Union', 'Є у кожному районі та місті', 'Досвідчені місцеві фахівці'],
          },
          {
            title: 'Приватний медцентр',
            desc: 'Ідеально при щільному графіку, мовному бар’єрі та комплексній діагностиці за один день.',
            points: ['Прийом точно за часом без черг', 'Більше часу на консультацію з лікарем', 'Швидкі цифрові результати аналізів'],
          },
        ],
      },
      faqs: [
        { q: 'Чи справді в приватних клініках лікарі досвідченіші?', a: 'Не обов’язково: багато провідних лікарів поєднують прийом у лікарнях, поліклініках та приватних центрах. Головна різниця — сервіс і швидкість запису.' },
        { q: 'Як дізнатися, чи приймуть мене за страховкою?', a: 'Завжди уточнюйте контракт із вашою страховою (VšZP, Dôvera, Union) і можливу доплату за точний час запису.' },
      ],
      bottomCta: {
        microLabel: 'НАСТУПНИЙ КРОК',
        title: 'Порівняйте клініки у своєму місті на Medhub.',
        btn: 'Знайти клініку',
      },
    },
  ],

  de: [
    {
      slug: 'bratislava-specialists',
      seoTitle: 'Vertrauenswürdige Ärzte in Bratislava | Bewertungen | Medhub',
      seoDescription: 'Sie suchen einen guten Arzt in Bratislava? Vergleichen Sie Fachärzte in Staré Mesto, Ružinov und Petržalka anhand echter Patientenbewertungen.',
      microLabel: 'STÄDTE-GUIDE • BRATISLAVA',
      heroTitle: 'Vertrauenswürdige Ärzte in Bratislava. Ohne Rätselraten.',
      heroSubtitle: 'Von Staré Mesto bis Petržalka – finden Sie Fachärzte, die zuhören, verständlich erklären und von echten Patienten empfohlen werden.',
      trustText: 'Die Nr. 1 Arztbewertungsplattform der Slowakei',
      heroAnchor: 'So wählen Sie in Bratislava richtig',
      motionCard: {
        title: 'Wen suchen Sie in Bratislava?',
        liveBadge: 'Geprüfte Profile',
        tabA: 'Fachärzte',
        tabB: 'Kliniken',
        typingQuery: 'Dermatologe • Staré Mesto',
        searchBtn: 'Suchen',
        sampleRows: [
          { name: 'MUDr. Katarína Kováčová', meta: 'Dermatologie • Bratislava II', rating: '★ 4.9 (112)' },
          { name: 'Poliklinik Mlynská dolina', meta: 'Mehrere Fachbereiche • Bratislava IV', rating: '★ 4.8 (240)' },
        ],
      },
      valueSection: {
        microLabel: 'VERSORGUNG, WENN SIE SIE BRAUCHEN',
        title: 'Weniger Herumtelefonieren. Mehr Sicherheit vor dem Termin.',
        text: 'Einen Arzt in einem neuen Stadtteil – oder einer anderen Sprache – zu finden, kann überfordern. Echte Erfahrungsberichte zeigen Wartezeiten, Kommunikation und Atmosphäre vorab.',
        cta: 'Fachärzte in Bratislava entdecken',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Eine ehrliche Patientenbewertung spart oft Wochen der vergeblichen Suche.',
      },
      stepsSection: {
        microLabel: 'SO FUNKTIONIERT ES',
        title: 'Drei ruhige Schritte zum passenden Arzt',
        cards: [
          { num: '01', title: 'Fachrichtung & Bezirk wählen', desc: 'Filtern Sie Praxen nahe Wohnort oder Arbeitsplatz – von Ružinov bis Nové Mesto.' },
          { num: '02', title: 'Kontext statt nur Sterne lesen', desc: 'Achten Sie auf Hinweise zu Sprachkenntnissen, Pünktlichkeit und Erklärungen.' },
          { num: '03', title: 'Entspannt zum Termin gehen', desc: 'Sie wissen vorab, was Sie erwartet und warum andere Patienten dieser Praxis vertrauen.' },
        ],
      },
      comparisonSection: {
        microLabel: 'LOKALER EINBLICK',
        title: 'Kassenpraxis oder Privatklinik?',
        boxes: [
          {
            title: 'Vertragsärzte (VšZP, Dôvera, Union)',
            desc: 'Ideal für Regelversorgung und Vorsorge im Rahmen der slowakischen Krankenversicherung.',
            points: ['Durch slowakische Kassen abgedeckt', 'Oft Überweisung (výmenný lístok) nötig', 'Längere Wartezeiten bei gefragten Fachärzten'],
          },
          {
            title: 'Privatkliniken in Bratislava',
            desc: 'Optimal bei Zeitdruck, exakten Terminwünschen oder Beratungen auf Deutsch/Englisch.',
            points: ['Termine meist innerhalb von 48–72 Stunden', 'Häufig Deutsch-, Englisch- & Russisch-Support', 'Klare Preislisten für Privatleistungen'],
          },
        ],
      },
      faqs: [
        { q: 'Brauche ich in der Slowakei eine Überweisung (výmenný lístok)?', a: 'Bei Kassenärzten meist ja – außer bei Gynäkologie, Dermatologie, Psychiatrie und Augenheilkunde (Brille). Bei Privatleistungen ist in der Regel keine Überweisung erforderlich.' },
        { q: 'Findet man auf Medhub deutsch- oder englischsprachige Ärzte?', a: 'Ja, auf der Arztseite sind die Sprachen aufgeführt, die der Arzt sicher spricht.' },
      ],
      bottomCta: {
        microLabel: 'NÄCHSTER SCHRITT',
        title: 'Finden Sie noch heute Ihren Arzt in Bratislava.',
        btn: 'Ärzte & Kliniken suchen',
      },
    },
    {
      slug: 'dentists-slovakia',
      seoTitle: 'Zahnärzte in der Slowakei | Geprüfte Bewertungen | Medhub',
      seoDescription: 'Vergleichen Sie Zahnärzte und Zahnkliniken in der Slowakei anhand echter Patientenstimmen: sanfte Behandlung und transparente Kosten.',
      microLabel: 'FACHGEBIET • ZAHNMEDIZIN',
      heroTitle: 'Zahnmedizin in der Slowakei – bewertet von echten Patienten.',
      heroSubtitle: 'Von der professionellen Zahnreinigung bis zur Mikroskop-Endodontie: Finden Sie Praxen mit einfühlsamer Betreuung und klaren Kosten.',
      trustText: 'Die Nr. 1 Arztbewertungsplattform der Slowakei',
      heroAnchor: 'Worauf Patienten achten',
      motionCard: {
        title: 'Sie suchen einen guten Zahnarzt?',
        liveBadge: 'Patientenbewertet',
        tabA: 'Fachärzte',
        tabB: 'Kliniken',
        typingQuery: 'Zahnreinigung • Košice',
        searchBtn: 'Suchen',
        sampleRows: [
          { name: 'MDDr. Marek Horváth', meta: 'Konservative Zahnmedizin • Košice', rating: '★ 4.9 (96)' },
          { name: 'Dental Studio Centrum', meta: 'Kieferorthopädie • Žilina', rating: '★ 4.8 (184)' },
        ],
      },
      valueSection: {
        microLabel: 'VERTRAUEN IM BEHANDLUNGSSTUHL',
        title: 'Gute Zahnmedizin beginnt mit Zuhören, nicht mit dem Bohrer.',
        text: 'Am häufigsten loben Patienten eine ruhige Aufklärung vor jedem Schritt sowie transparente Heil- und Kostenpläne ohne Überraschungen.',
        cta: 'Zahnklinik finden',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Wenn ein Zahnarzt jeden Schritt ruhig erklärt, verfliegt die Nervosität sofort.',
      },
      stepsSection: {
        microLabel: 'WORAUF ACHTEN',
        title: 'Sicher zur passenden Zahnarztpraxis',
        cards: [
          { num: '01', title: 'Diagnostik unter einem Dach', desc: 'Röntgen, Prophylaxe und Spezialisten am selben Standort sparen Wege.' },
          { num: '02', title: 'Schriftlicher Kostenplan', desc: 'Prüfen Sie in Bewertungen, ob Preise vorab klar kommuniziert werden.' },
          { num: '03', title: 'Einfühlsamer Umgang', desc: 'Erfahrungsberichte zeigen, wie behutsam das Team bei Schmerzempfindlichkeit arbeitet.' },
        ],
      },
      comparisonSection: {
        microLabel: 'BEHANDLUNGSARTEN',
        title: 'Vorsorge vs. spezialisierte Zentren',
        boxes: [
          {
            title: 'Jährliche Kontrolle & Prophylaxe',
            desc: 'Schützt Zähne langfristig und sichert Zuschüsse der slowakischen Krankenkassen.',
            points: ['Früherkennung kleiner Schäden', 'Professionelle Zahnsteinentfernung', 'Geringere Folgekosten'],
          },
          {
            title: 'Spezialisierte Dental-Studios',
            desc: 'Wurzelbehandlungen unter dem Mikroskop, Implantate und Aligner mit 3D-Diagnostik.',
            points: ['3D-CBCT direkt in der Klinik', 'Höchste Präzision mit OP-Mikroskop', 'Strukturierte Nachsorge'],
          },
        ],
      },
      faqs: [
        { q: 'Wie oft sollte man in der Slowakei zur Zahnkontrolle gehen?', a: 'Erwachsenen wird mindestens ein Besuch pro Jahr empfohlen (Kindern zweimal) – oft Voraussetzung für Kassenboni.' },
        { q: 'Sind die Behandlungskosten vorab einsehbar?', a: 'Seriöse Kliniken veröffentlichen Basispreise und erstellen vor größeren Eingriffen einen verbindlichen Kostenvoranschlag.' },
      ],
      bottomCta: {
        microLabel: 'MIT SICHERHEIT WÄHLEN',
        title: 'Finden Sie eine Zahnarztpraxis, der Sie vertrauen.',
        btn: 'Zahnärzte auf Medhub entdecken',
      },
    },
    {
      slug: 'private-clinics-guide',
      seoTitle: 'Privatkliniken vs. Polikliniken in der Slowakei | Medhub',
      seoDescription: 'Wann lohnt sich eine Privatklinik und wann eine klassische Poliklinik? Ein Vergleich zu Wartezeiten, Kassen und Service.',
      microLabel: 'SYSTEM-RATGEBER',
      heroTitle: 'Privatklinik oder Poliklinik: schneller zur passenden Behandlung.',
      heroSubtitle: 'Verstehen Sie beide Optionen – damit Sie nicht unnötig zahlen und bei Bedarf nicht wochenlang warten müssen.',
      trustText: 'Die Nr. 1 Arztbewertungsplattform der Slowakei',
      heroAnchor: 'Beide Optionen vergleichen',
      motionCard: {
        title: 'Kliniken in Ihrer Nähe vergleichen',
        liveBadge: 'Aktuelle Einblicke',
        tabA: 'Fachärzte',
        tabB: 'Kliniken',
        typingQuery: 'Privatklinik • Bratislava',
        searchBtn: 'Vergleichen',
        sampleRows: [
          { name: 'Medis Centrum Klinik', meta: 'Termine binnen 48h • Privat', rating: '★ 4.9 (165)' },
          { name: 'Poliklinika Sever', meta: 'VšZP / Dôvera / Union Vertrag', rating: '★ 4.6 (310)' },
        ],
      },
      valueSection: {
        microLabel: 'KONTEXT ZÄHLT',
        title: 'Gute Versorgung hängt vom richtigen Match ab – nicht nur vom Preis.',
        text: 'Hervorragende Ärzte arbeiten sowohl in Polikliniken als auch in Privatkliniken. Medhub bündelt Bewertungen für beide Welten.',
        cta: 'Klinik finden',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Echte Patientenerfahrungen machen jeden nächsten Klinikbesuch planbarer.',
      },
      stepsSection: {
        microLabel: 'ENTSCHEIDUNGSHILFE',
        title: 'In 60 Sekunden zur richtigen Wahl',
        cards: [
          { num: '01', title: 'Dringlichkeit prüfen', desc: 'Brauchen Sie diese Woche Klarheit? Privatkliniken bieten meist kurzfristige Slots.' },
          { num: '02', title: 'Kassenverträge checken', desc: 'Viele moderne Kliniken rechnen teils über die Kasse ab – nur die Terminpauschale fällt an.' },
          { num: '03', title: 'Organisation bewerten', desc: 'Lesen Sie, ob Termine eingehalten werden und wie die Rezeption arbeitet.' },
        ],
      },
      comparisonSection: {
        microLabel: 'DIREKTER VERGLEICH',
        title: 'Wo welches Modell punktet',
        boxes: [
          {
            title: 'Klassische Poliklinik',
            desc: 'Stark bei Langzeitbetreuung, Laborwerten und voller Kassenabrechnung.',
            points: ['Volle Deckung durch VšZP / Dôvera / Union', 'In jeder Bezirksstadt vertreten', 'Bewährte lokale Fachärzte'],
          },
          {
            title: 'Privates Medizinzentrum',
            desc: 'Ideal bei engem Zeitplan, Sprachbarriere oder gebündelter Diagnostik an einem Tag.',
            points: ['Fixe Uhrzeiten ohne langes Warten', 'Mehr Zeit für das Arztgespräch', 'Mehrsprachiger Empfang & digitale Befunde'],
          },
        ],
      },
      faqs: [
        { q: 'Sind Ärzte in Privatkliniken fachlich besser?', a: 'Nicht zwingend – viele Spitzenärzte praktizieren in beiden Einrichtungen. Der Unterschied liegt vor allem in Wartezeit, Komfort und Gesprächsdauer.' },
        { q: 'Wie erkenne ich, ob meine Kasse akzeptiert wird?', a: 'Prüfen Sie vor der Buchung Verträge mit VšZP, Dôvera oder Union sowie eventuelle Gebühren für Wunschtermine.' },
      ],
      bottomCta: {
        microLabel: 'NÄCHSTER SCHRITT',
        title: 'Vergleichen Sie bewertete Kliniken in Ihrer Stadt.',
        btn: 'Kliniken auf Medhub suchen',
      },
    },
  ],
};

export const LANDINGS: Record<Locale, LandingCopy[]> = {
  sk: [...BASE_LANDINGS.sk, ...GIFT_LANDINGS.sk],
  en: [...BASE_LANDINGS.en, ...GIFT_LANDINGS.en],
  ru: [...BASE_LANDINGS.ru, ...GIFT_LANDINGS.ru],
  ua: [...BASE_LANDINGS.ua, ...GIFT_LANDINGS.ua],
  de: [...BASE_LANDINGS.de, ...GIFT_LANDINGS.de],
};