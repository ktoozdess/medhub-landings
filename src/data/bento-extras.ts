// src/data/bento-extras.ts
import type { Locale } from './landings';
import { GIFT_BENTO } from './gift-bento';

export interface BentoExtras {
  visualLabels: {
    pins: [string, string, string];
    bar1: string;
    bar2: string;
    badges: [string, string, string];
  };
  marqueeItems: Array<{
    quote: string;
    author: string;
    tag: string;
  }>;
  tabsSection: {
    microLabel: string;
    title: string;
    tabs: Array<{
      id: string;
      label: string;
      headline: string;
      desc: string;
      metrics: string[];
    }>;
  };
}

const BASE_BENTO: Record<Locale, Record<string, BentoExtras>> = {
  sk: {
    'bratislava-specialists': {
      visualLabels: {
        pins: ['Staré Mesto • 4.9★', 'Ružinov • 4.8★', 'Petržalka • 4.9★'],
        bar1: 'Zrozumiteľné vysvetlenie',
        bar2: 'Dodržanie času objednania',
        badges: ['✓ VšZP / Dôvera / Union', '★ 4.9 Overená recenzia', '⏱ Termín do 48 hodín'],
      },
      marqueeItems: [
        { quote: 'Pani doktorka mi konečne všetko vysvetlila pokojne a bez ponáhľania.', author: 'Zuzana K.', tag: 'Staré Mesto • Kardiológia' },
        { quote: 'Presný čas objednania, žiadne čakanie v preplnenej čakárni.', author: 'Tomáš M.', tag: 'Ružinov • Ortopédia' },
        { quote: 'Výborná komunikácia aj v angličtine pre môjho manžela.', author: 'Petra V.', tag: 'Petržalka • Všeobecný lekár' },
        { quote: 'Recenzie na Medhube presne zodpovedali realite v ambulancii.', author: 'Marek D.', tag: 'Nové Mesto • Dermatológia' },
      ],
      tabsSection: {
        microLabel: 'INTERAKTÍVNY PREHĽAD MESTSKÝCH ČASTÍ',
        title: 'Kde v Bratislave hľadáte najčastejšie?',
        tabs: [
          {
            id: 'stare-mesto',
            label: 'Staré Mesto',
            headline: 'Historické centrum a súkromní špecialisti',
            desc: 'Najvyššia koncentrácia menších špecializovaných ambulancií, výborná dostupnosť MHD a častá komunikácia v cudzích jazykoch.',
            metrics: ['Rýchla dostupnosť z centra', 'Široký výber dermatológov a ORL', 'Možnosť skorých ranných termínov'],
          },
          {
            id: 'ruzinov',
            label: 'Ružinov',
            headline: 'Komplexné polikliniky aj rodinní lekári',
            desc: 'Silné zázemie pre dlhodobú starostlivosť, pediatriu, rehabilitáciu a nadväzujúce laboratórne odbery na jednom mieste.',
            metrics: ['Zmluvní lekári VšZP, Dôvera, Union', 'Dobré parkovanie pri poliklinikách', 'Silná ponuka ortopédie a fyzioterapie'],
          },
          {
            id: 'petrzalka',
            label: 'Petržalka & Nové Mesto',
            headline: 'Moderné polikliniky s rýchlym objednaním',
            desc: 'Ideálne pre pracujúcich ľudí a rodiny – moderné zdravotné centrá s elektronickým manažmentom pacientov.',
            metrics: ['Online objednanie na presný čas', 'Moderná diagnostika pod jednou strechou', 'Večerné hodiny vo vybraných centrách'],
          },
        ],
      },
    },
    'dentists-slovakia': {
      visualLabels: {
        pins: ['Bratislava • 4.9★', 'Košice • 4.9★', 'Žilina • 4.8★'],
        bar1: 'Bezbolestný prístup',
        bar2: 'Transparentná cena vopred',
        badges: ['✓ Príspevok poisťovne', '★ 4.9 Empatický tím', '✓ 3D RTG na mieste'],
      },
      marqueeItems: [
        { quote: 'Prvýkrát som sa u zubára nebála, ošetrenie bolo úplne bezbolestné.', author: 'Lucia H.', tag: 'Bratislava • Endodoncia' },
        { quote: 'Cenu mi povedali presne pred zákrokom, žiadne skryté príplatky.', author: 'Jakub S.', tag: 'Košice • Dentálna hygiena' },
        { quote: 'Skvelý prístup k deťom a všetko pekne vysvetlené na snímke.', author: 'Monika B.', tag: 'Trnava • Detský zubár' },
        { quote: 'Mikroskopické ošetrenie zachránilo zub, ktorý chceli inde vytrhnúť.', author: 'Peter N.', tag: 'Žilina • Stomatológia' },
      ],
      tabsSection: {
        microLabel: 'VYBERTE SI PODĽA POTREBY',
        title: 'Čo riešite u zubára najčastejšie?',
        tabs: [
          {
            id: 'hygiene',
            label: 'Prevencia a hygiena',
            headline: 'Základ zdravých zubov bez zbytočných zásahov',
            desc: 'Pravidelná prehliadka raz ročne odhalí problém včas a udrží nárok na benefity zdravotnej poisťovne.',
            metrics: ['Airflow a ultrazvuk bez citlivosti', 'Kontrola skrytých medzizubných kazov', 'Individuálna inštruktáž čistenia'],
          },
          {
            id: 'endo',
            label: 'Ošetrenie pod mikroskopom',
            headline: 'Maximálna presnosť pri záchrane zuba',
            desc: 'Moderné pracoviská využívajú operačný mikroskop a lokálnu anestéziu tak, aby bol zákrok pokojný a trvácny.',
            metrics: ['Vysoká úspešnosť liečby kanálikov', '3D CBCT diagnostika pred výkonom', 'Jasný liečebný plán vopred'],
          },
          {
            id: 'ortho',
            label: 'Estetika a strojčeky',
            headline: 'Neviditeľné dlahy aj šetrné bielenie',
            desc: 'Digitálny sken namiesto nepríjemných odtlačkov a presná vizualizácia výsledku ešte pred začiatkom liečby.',
            metrics: ['Digitálny 3D sken chrupu', 'Flexibilný splátkový kalendár', 'Konzultácia všetkých alternatív'],
          },
        ],
      },
    },
    'private-clinics-guide': {
      visualLabels: {
        pins: ['Poliklinika • VšZP', 'Súkromné centrum • 48h', 'Diagnostika • 1 deň'],
        bar1: 'Rýchlosť získania termínu',
        bar2: 'Spokojnosť s recepciou',
        badges: ['✓ Overené poisťovne', '★ 4.8 Organizácia', '⏱ Bez čakania v rade'],
      },
      marqueeItems: [
        { quote: 'Na súkromnej klinike som mal výsledky krvi aj sono v jeden deň.', author: 'Martin K.', tag: 'Bratislava • Komplexné centrum' },
        { quote: 'Naša obvodná poliklinika má skvelú neurologičku, stačilo si prečítať recenzie.', author: 'Alena R.', tag: 'Nitra • Poliklinika' },
        { quote: 'Výborná organizácia recepcie, vošiel som do ambulancie na minútu presne.', author: 'Dávid P.', tag: 'Košice • Súkromná klinika' },
        { quote: 'Vďaka porovnaniu na Medhube som si vybral kliniku so zmluvou pre Dôveru.', author: 'Ivana T.', tag: 'Banská Bystrica' },
      ],
      tabsSection: {
        microLabel: 'POROVNANIE SCENÁROV',
        title: 'Kedy zvoliť aký typ zariadenia?',
        tabs: [
          {
            id: 'acute',
            label: 'Riešim akútny problém',
            headline: 'Keď potrebujete termín do 48 hodín',
            desc: 'Súkromná klinika alebo špecializované centrum vám ušetrí týždne čakania a dá okamžitý posun v diagnostike.',
            metrics: ['Voľné termíny zvyčajne do 1–3 dní', 'Vyšetrenie na presnú hodinu', 'Možnosť priameho objednania bez lístka'],
          },
          {
            id: 'longterm',
            label: 'Dlhodobá starostlivosť',
            headline: 'Pravidelné kontroly cez verejné poistenie',
            desc: 'Zmluvní lekári v poliklinikách sú najefektívnejšou cestou pre chronické diagnózy a pravidelné predpisy.',
            metrics: ['Plné krytie VšZP / Dôvera / Union', 'Nadväzujúce odbery bez poplatkov', 'Stabilný ošetrujúci lekár'],
          },
          {
            id: 'preventive',
            label: 'Kompletná prevencia',
            headline: 'Všetci špecialisti zosúladení v jeden deň',
            desc: 'Manažérske a ročné preventívne balíky spoja odbery, EKG, sono aj záverečnú správu do jedného dopoludnia.',
            metrics: ['Bez behania po viacerých budovách', 'Digitálna správa v mobile', 'Osobný koordinátor prehliadky'],
          },
        ],
      },
    },
    ...GIFT_BENTO.sk,
  },

  en: {
    'bratislava-specialists': {
      visualLabels: {
        pins: ['Staré Mesto • 4.9★', 'Ružinov • 4.8★', 'Petržalka • 4.9★'],
        bar1: 'Clear communication',
        bar2: 'On-time appointments',
        badges: ['✓ VšZP / Dôvera / Union', '★ 4.9 Verified review', '⏱ Slots within 48h'],
      },
      marqueeItems: [
        { quote: 'The doctor took time to explain every lab result in clear English.', author: 'Daniel R.', tag: 'Staré Mesto • Cardiology' },
        { quote: 'Zero waiting room chaos—called in right at my scheduled time.', author: 'Elena K.', tag: 'Ružinov • Orthopedics' },
        { quote: 'Patient reviews helped me find a kind pediatrician near home.', author: 'Sarah M.', tag: 'Petržalka • Pediatrics' },
        { quote: 'Honest notes about reception and parking saved me so much stress.', author: 'Lukáš B.', tag: 'Nové Mesto • Dermatology' },
      ],
      tabsSection: {
        microLabel: 'INTERACTIVE DISTRICT GUIDE',
        title: 'Where in Bratislava are you looking?',
        tabs: [
          {
            id: 'stare-mesto',
            label: 'Staré Mesto',
            headline: 'Central specialists & expat-friendly practices',
            desc: 'Highest density of private specialists, walkable tram access, and doctors fluent in English or German.',
            metrics: ['Easy transit across the center', 'Strong dermatology & ENT selection', 'Morning slots before work'],
          },
          {
            id: 'ruzinov',
            label: 'Ružinov',
            headline: 'Full-service polyclinics & family care',
            desc: 'Well-established clinics great for ongoing care, pediatrics, rehab, and insurance-covered check-ups.',
            metrics: ['Wide VšZP, Dôvera & Union coverage', 'Convenient neighborhood parking', 'Great physiotherapy & orthopedics'],
          },
          {
            id: 'petrzalka',
            label: 'Petržalka & Nové Mesto',
            headline: 'Modern medical hubs with digital booking',
            desc: 'Streamlined multi-specialty centers designed around predictable scheduling and diagnostics under one roof.',
            metrics: ['Exact-time online booking', 'Lab & imaging on-site', 'Extended afternoon hours'],
          },
        ],
      },
    },
    'dentists-slovakia': {
      visualLabels: {
        pins: ['Bratislava • 4.9★', 'Košice • 4.9★', 'Žilina • 4.8★'],
        bar1: 'Gentle, painless care',
        bar2: 'Upfront price clarity',
        badges: ['✓ Insurance bonus ready', '★ 4.9 Caring team', '✓ 3D X-ray on-site'],
      },
      marqueeItems: [
        { quote: 'First dental visit where I felt relaxed—completely painless numbing.', author: 'Claire W.', tag: 'Bratislava • Endodontics' },
        { quote: 'They walked me through the exact quote before touching a tooth.', author: 'Jakub S.', tag: 'Košice • Dental Hygiene' },
        { quote: 'Super patient with kids and explained everything on the screen.', author: 'Monika B.', tag: 'Trnava • Pediatric Dentistry' },
        { quote: 'Microscope root canal saved a tooth another clinic wanted to pull.', author: 'Peter N.', tag: 'Žilina • Dentistry' },
      ],
      tabsSection: {
        microLabel: 'EXPLORE BY NEED',
        title: 'What dental care do you need right now?',
        tabs: [
          {
            id: 'hygiene',
            label: 'Check-up & Hygiene',
            headline: 'Protect your teeth and keep insurance perks',
            desc: 'One annual exam catches tiny issues early and keeps you eligible for Slovak insurer dental reimbursements.',
            metrics: ['Gentle Airflow & ultrasonic cleaning', 'Early interdental cavity check', 'Tailored home-care advice'],
          },
          {
            id: 'endo',
            label: 'Microscope Treatment',
            headline: 'Precision care built to save natural teeth',
            desc: 'Modern Slovak studios pair dental microscopes with gentle anesthesia for calm, predictable root canals.',
            metrics: ['High long-term success rate', 'In-house 3D CBCT scan', 'Clear written treatment plan'],
          },
          {
            id: 'ortho',
            label: 'Aligners & Aesthetics',
            headline: 'Digital scans instead of messy molds',
            desc: 'Preview your expected result in 3D and compare transparent payment options before committing.',
            metrics: ['3D intraoral scanning', 'Flexible monthly installments', 'All options compared clearly'],
          },
        ],
      },
    },
    'private-clinics-guide': {
      visualLabels: {
        pins: ['Polyclinic • Public', 'Private Hub • 48h', 'Diagnostics • 1 day'],
        bar1: 'Appointment speed',
        bar2: 'Reception & clarity',
        badges: ['✓ Insurer contracts', '★ 4.8 Organization', '⏱ Minimal wait time'],
      },
      marqueeItems: [
        { quote: 'Got bloodwork, ultrasound, and specialist review in one morning.', author: 'Martin K.', tag: 'Bratislava • Private Clinic' },
        { quote: 'Found an amazing neurologist at a local polyclinic via Medhub.', author: 'Alena R.', tag: 'Nitra • Polyclinic' },
        { quote: 'Called in on the exact minute—zero stress at reception.', author: 'David P.', tag: 'Košice • Medical Center' },
        { quote: 'Loved seeing which clinics still accept Dôvera with partial coverage.', author: 'Ivana T.', tag: 'Banská Bystrica' },
      ],
      tabsSection: {
        microLabel: 'COMPARE SCENARIOS',
        title: 'Which setting fits your situation?',
        tabs: [
          {
            id: 'acute',
            label: 'Need care this week',
            headline: 'When fast answers matter most',
            desc: 'Private clinics bypass multi-week queues and give you an exact appointment window within days.',
            metrics: ['Slots typically within 1–3 days', 'Zero waiting-room backlog', 'No GP referral needed for self-pay'],
          },
          {
            id: 'longterm',
            label: 'Ongoing insurance care',
            headline: 'Routine follow-ups covered by public insurance',
            desc: 'Contracted doctors in local polyclinics remain the most cost-effective choice for chronic care and prescriptions.',
            metrics: ['Full VšZP / Dôvera / Union coverage', 'Routine lab work included', 'Consistent family doctor'],
          },
          {
            id: 'preventive',
            label: 'One-day check-up',
            headline: 'Coordinated diagnostics in a single visit',
            desc: 'Annual preventive packages bundle blood panels, ECG, ultrasound, and doctor review into one streamlined morning.',
            metrics: ['No running across multiple buildings', 'Digital results summary', 'Dedicated visit coordinator'],
          },
        ],
      },
    },
    ...GIFT_BENTO.en,
  },

  ru: {
    'bratislava-specialists': {
      visualLabels: {
        pins: ['Staré Mesto • 4.9★', 'Ružinov • 4.8★', 'Petržalka • 4.9★'],
        bar1: 'Понятное общение с врачом',
        bar2: 'Пунктуальность приёма',
        badges: ['✓ VšZP / Dôvera / Union', '★ 4.9 Проверенный отзыв', '⏱ Запись за 48 часов'],
      },
      marqueeItems: [
        { quote: 'Врач спокойно всё объяснила, без спешки и сложных терминов.', author: 'Анна К.', tag: 'Staré Mesto • Кардиолог' },
        { quote: 'Зашли ровно по времени записи, никаких очередей в коридоре.', author: 'Дмитрий М.', tag: 'Ružinov • Ортопед' },
        { quote: 'По отзывам сразу нашли педиатра, который понимает по-русски и по-английски.', author: 'Елена В.', tag: 'Petržalka • Педиатр' },
        { quote: 'Комментарии пациентов про парковку и регистратуру реально выручили.', author: 'Максим Д.', tag: 'Nové Mesto • Дерматолог' },
      ],
      tabsSection: {
        microLabel: 'ИНТЕРАКТИВНЫЙ ГИД ПО РАЙОНАМ',
        title: 'В каком районе Братиславы вы ищете врача?',
        tabs: [
          {
            id: 'stare-mesto',
            label: 'Staré Mesto',
            headline: 'Центр города и частные специалисты',
            desc: 'Максимум узких кабинетов в пешей доступности от трамваев, часто есть приём на английском, русском или немецком.',
            metrics: ['Удобно добираться из любой точки', 'Сильный выбор дерматологов и ЛОР', 'Утренние слоты до работы'],
          },
          {
            id: 'ruzinov',
            label: 'Ružinov',
            headline: 'Крупные поликлиники и семейная медицина',
            desc: 'Отличный район для планового наблюдения, педиатрии, реабилитации и анализов по словацкой страховке.',
            metrics: ['Широкое покрытие VšZP, Dôvera, Union', 'Удобная парковка у центров', 'Сильная ортопедия и физиотерапия'],
          },
          {
            id: 'petrzalka',
            label: 'Petržalka & Nové Mesto',
            headline: 'Современные медцентры с онлайн-записью',
            desc: 'Идеально для занятых людей и семей: электронная очередь, понятный сервис и диагностика в одном здании.',
            metrics: ['Запись на точное время', 'УЗИ и лаборатория на месте', 'Вечерние часы приёма'],
          },
        ],
      },
    },
    'dentists-slovakia': {
      visualLabels: {
        pins: ['Братислава • 4.9★', 'Кошице • 4.9★', 'Жилина • 4.8★'],
        bar1: 'Бережное лечение без боли',
        bar2: 'Прозрачная смета заранее',
        badges: ['✓ Бонусы страховой', '★ 4.9 Чуткий врач', '✓ 3D-снимок на месте'],
      },
      marqueeItems: [
        { quote: 'Впервые у стоматолога не было страшно — анестезия подействовала идеально.', author: 'Ольга С.', tag: 'Братислава • Эндодонтия' },
        { quote: 'Сразу показали план и точную цену, никаких доплат в конце.', author: 'Артём Н.', tag: 'Кошице • Гигиена' },
        { quote: 'Очень бережно отнеслись к ребёнку, показали всё на экране.', author: 'Марина Б.', tag: 'Трнава • Детский стоматолог' },
        { quote: 'Под микроскопом спасли зуб, который в другом месте советовали удалить.', author: 'Игорь П.', tag: 'Жилина • Стоматология' },
      ],
      tabsSection: {
        microLabel: 'ВЫБОР ПО ЗАДАЧЕ',
        title: 'Какая помощь стоматолога вам нужна?',
        tabs: [
          {
            id: 'hygiene',
            label: 'Осмотр и гигиена',
            headline: 'Профилактика и сохранение бонусов страховой',
            desc: 'Один профилактический визит в год защищает от сложного лечения и сохраняет право на компенсацию от страховой.',
            metrics: ['Мягкий Airflow без чувствительности', 'Поиск скрытого кариеса на ранней стадии', 'Подбор ухода под ваши дёсны'],
          },
          {
            id: 'endo',
            label: 'Лечение под микроскопом',
            headline: 'Ювелирная точность при спасении зуба',
            desc: 'Современные клиники Словакии лечат каналы под микроскопом с компьютерной томографией на месте.',
            metrics: ['Высокая надёжность пломбировки', '3D КТ-диагностика в кабинете', 'Письменный план лечения'],
          },
          {
            id: 'ortho',
            label: 'Элайнеры и эстетика',
            headline: '3D-сканирование вместо слепков',
            desc: 'Увидьте будущую улыбку на экране ещё до начала курса и сравните варианты оплаты.',
            metrics: ['Цифровой 3D-скан за 5 минут', 'Удобная поэтапная оплата', 'Разбор всех альтернатив'],
          },
        ],
      },
    },
    'private-clinics-guide': {
      visualLabels: {
        pins: ['Поликлиника • Страховка', 'Частный центр • 48ч', 'Чек-ап • 1 день'],
        bar1: 'Скорость записи',
        bar2: 'Организация на ресепшн',
        badges: ['✓ Договор со страховой', '★ 4.8 Сервис', '⏱ Приём без очередей'],
      },
      marqueeItems: [
        { quote: 'За одно утро прошёл анализы, УЗИ и получил расшифровку врача.', author: 'Сергей К.', tag: 'Братислава • Частный центр' },
        { quote: 'Нашли отличного невролога в обычной поликлинике благодаря отзывам.', author: 'Алёна Р.', tag: 'Нитра • Поликлиника' },
        { quote: 'Приняли минута в минуту, администратор говорит по-русски и на словацком.', author: 'Денис П.', tag: 'Кошице • Клиника' },
        { quote: 'Удобно заранее видеть, работает ли клиника с Dôvera и VšZP.', author: 'Ирина Т.', tag: 'Банска-Бистрица' },
      ],
      tabsSection: {
        microLabel: 'СРАВНЕНИЕ СЦЕНАРИЕВ',
        title: 'Какой формат подойдёт именно сейчас?',
        tabs: [
          {
            id: 'acute',
            label: 'Нужен врач на этой неделе',
            headline: 'Когда важна скорость и точное время',
            desc: 'Частный медцентр избавляет от многонедельного ожидания и даёт чёткий маршрут диагностики.',
            metrics: ['Окна записи обычно за 1–3 дня', 'Никаких живых очередей', 'Не нужно направление при платном визите'],
          },
          {
            id: 'longterm',
            label: 'Плановое наблюдение',
            headline: 'Регулярные визиты по государственной страховке',
            desc: 'Договорные врачи в поликлиниках — самый разумный выбор для хронического контроля и выписки рецептов.',
            metrics: ['Покрытие VšZP / Dôvera / Union', 'Базовые анализы без доплат', 'Постоянный лечащий врач'],
          },
          {
            id: 'preventive',
            label: 'Чек-ап за один день',
            headline: 'Все специалисты и анализы за одно утро',
            desc: 'Комплексные программы объединяют кровь, ЭКГ, УЗИ и итоговую консультацию без беготни по городу.',
            metrics: ['Всё в одном здании', 'Результаты в электронном виде', 'Личный координатор визита'],
          },
        ],
      },
    },
    ...GIFT_BENTO.ru,
  },

  ua: {
    'bratislava-specialists': {
      visualLabels: {
        pins: ['Staré Mesto • 4.9★', 'Ružinov • 4.8★', 'Petržalka • 4.9★'],
        bar1: 'Зрозуміле спілкування',
        bar2: 'Пунктуальність прийому',
        badges: ['✓ VšZP / Dôvera / Union', '★ 4.9 Перевірений відгук', '⏱ Запис за 48 годин'],
      },
      marqueeItems: [
        { quote: 'Лікарка спокійно все пояснила, без поспіху і складних термінів.', author: 'Оксана К.', tag: 'Staré Mesto • Кардіолог' },
        { quote: 'Зайшли точно за часом запису, жодних черг у коридорі.', author: 'Тарас М.', tag: 'Ružinov • Ортопед' },
        { quote: 'За відгуками одразу знайшли педіатра, який розуміє українську та англійську.', author: 'Наталія В.', tag: 'Petržalka • Педіатр' },
        { quote: 'Коментарі пацієнтів про паркування та рецепцію реально допомогли.', author: 'Максим Д.', tag: 'Nové Mesto • Дерматолог' },
      ],
      tabsSection: {
        microLabel: 'ІНТЕРАКТИВНИЙ ГІД ПО РАЙОНАХ',
        title: 'У якому районі Братислави ви шукаєте лікаря?',
        tabs: [
          {
            id: 'stare-mesto',
            label: 'Staré Mesto',
            headline: 'Центр міста та приватні спеціалісти',
            desc: 'Найвища концентрація профільних кабінетів поруч із трамваями, часто є прийом англійською, українською чи німецькою.',
            metrics: ['Зручно дістатися з будь-якої точки', 'Великий вибір дерматологів і ЛОР', 'Ранкові слоти до роботи'],
          },
          {
            id: 'ruzinov',
            label: 'Ružinov',
            headline: 'Великі поліклініки та сімейна медицина',
            desc: 'Чудовий район для планового нагляду, педіатрії, реабілітації та аналізів за словацьким страхуванням.',
            metrics: ['Широке покриття VšZP, Dôvera, Union', 'Зручне паркування біля центрів', 'Сильна ортопедія та фізіотерапія'],
          },
          {
            id: 'petrzalka',
            label: 'Petržalka & Nové Mesto',
            headline: 'Сучасні медцентри з онлайн-записом',
            desc: 'Ідеально для зайнятих людей і родин: електронна черга, зрозумілий сервіс та діагностика в одній будівлі.',
            metrics: ['Запис на точний час', 'УЗД та лабораторія на місці', 'Вечірні години прийому'],
          },
        ],
      },
    },
    'dentists-slovakia': {
      visualLabels: {
        pins: ['Братислава • 4.9★', 'Кошице • 4.9★', 'Жиліна • 4.8★'],
        bar1: 'Делікатне лікування без болю',
        bar2: 'Прозорий кошторис наперед',
        badges: ['✓ Бонуси страхової', '★ 4.9 Чуйний лікар', '✓ 3D-знімок на місці'],
      },
      marqueeItems: [
        { quote: 'Вперше у стоматолога не було страшно — анестезія подіяла ідеально.', author: 'Ірина С.', tag: 'Братислава • Ендодонтія' },
        { quote: 'Одразу показали план і точну ціну, жодних сюрпризів на касі.', author: 'Артем Н.', tag: 'Кошице • Гігієна' },
        { quote: 'Дуже дбайливо поставилися до дитини, показали все на екрані.', author: 'Марина Б.', tag: 'Трнава • Дитячий стоматолог' },
        { quote: 'Під мікроскопом врятували зуб, який в іншому місці радили видалити.', author: 'Ігор П.', tag: 'Жиліна • Стоматологія' },
      ],
      tabsSection: {
        microLabel: 'ВИБІР ЗА ПОТРЕБОЮ',
        title: 'Яка допомога стоматолога вам потрібна?',
        tabs: [
          {
            id: 'hygiene',
            label: 'Огляд і гігієна',
            headline: 'Профілактика та збереження бонусів страхової',
            desc: 'Один профілактичний візит на рік захищає від складного лікування і зберігає право на компенсації від страхової.',
            metrics: ['М’який Airflow без чутливості', 'Пошук прихованого карієсу на ранній стадії', 'Підбір догляду під ваші ясна'],
          },
          {
            id: 'endo',
            label: 'Лікування під мікроскопом',
            headline: 'Ювелірна точність для порятунку зуба',
            desc: 'Сучасні клініки Словаччини лікують канали під мікроскопом із комп’ютерною томографією на місці.',
            metrics: ['Висока надійність пломбування', '3D КТ-діагностика в кабінеті', 'Письмовий план лікування'],
          },
          {
            id: 'ortho',
            label: 'Елайнери та естетика',
            headline: '3D-сканування замість відбитків',
            desc: 'Побачте майбутню усмішку на екрані ще до початку курсу та порівняйте варіанти оплати.',
            metrics: ['Цифровий 3D-скан за 5 хвилин', 'Зручна поетапна оплата', 'Розгляд усіх альтернатив'],
          },
        ],
      },
    },
    'private-clinics-guide': {
      visualLabels: {
        pins: ['Поліклініка • Страховка', 'Приватний центр • 48г', 'Чек-ап • 1 день'],
        bar1: 'Швидкість запису',
        bar2: 'Організація на рецепції',
        badges: ['✓ Договір зі страховою', '★ 4.8 Сервіс', '⏱ Прийом без черг'],
      },
      marqueeItems: [
        { quote: 'За один ранок здав аналізи, зробив УЗД і отримав висновок лікаря.', author: 'Сергій К.', tag: 'Братислава • Приватний центр' },
        { quote: 'Знайшли чудового невролога у звичайній поліклініці завдяки відгукам.', author: 'Олена Р.', tag: 'Нітра • Поліклініка' },
        { quote: 'Прийняли хвилина в хвилину, адміністратор говорить українською та словацькою.', author: 'Денис П.', tag: 'Кошице • Клініка' },
        { quote: 'Зручно заздалегідь бачити, чи працює клініка з Dôvera та VšZP.', author: 'Анна Т.', tag: 'Банська Бистриця' },
      ],
      tabsSection: {
        microLabel: 'ПОРІВНЯННЯ СЦЕНАРІЇВ',
        title: 'Який формат підійде саме зараз?',
        tabs: [
          {
            id: 'acute',
            label: 'Потрібен лікар цього тижня',
            headline: 'Коли важлива швидкість і точний час',
            desc: 'Приватний медцентр позбавляє багатотижневого очікування і дає чіткий маршрут діагностики.',
            metrics: ['Вікна запису зазвичай за 1–3 дні', 'Жодних живих черг', 'Не потрібне направлення при платному візиті'],
          },
          {
            id: 'longterm',
            label: 'Плановий нагляд',
            headline: 'Регулярні візити за державним страхуванням',
            desc: 'Договірні лікарі в поліклініках — найрозумніший вибір для хронічного контролю та виписки рецептів.',
            metrics: ['Покриття VšZP / Dôvera / Union', 'Базові аналізи без доплат', 'Постійний лікуючий лікар'],
          },
          {
            id: 'preventive',
            label: 'Чек-ап за один день',
            headline: 'Усі спеціалісти й аналізи за один ранок',
            desc: 'Комплексні програми об’єднують кров, ЕКГ, УЗД і підсумкову консультацію без біганини містом.',
            metrics: ['Усе в одній будівлі', 'Результати в електронному вигляді', 'Особистий координатор візиту'],
          },
        ],
      },
    },
    ...GIFT_BENTO.ua,
  },

  de: {
    'bratislava-specialists': {
      visualLabels: {
        pins: ['Staré Mesto • 4.9★', 'Ružinov • 4.8★', 'Petržalka • 4.9★'],
        bar1: 'Klare Kommunikation',
        bar2: 'Pünktliche Termine',
        badges: ['✓ VšZP / Dôvera / Union', '★ 4.9 Geprüfte Bewertung', '⏱ Termine binnen 48h'],
      },
      marqueeItems: [
        { quote: 'Die Ärztin hat sich Zeit genommen und alles verständlich erklärt.', author: 'Sabine K.', tag: 'Staré Mesto • Kardiologie' },
        { quote: 'Auf die Minute genau aufgerufen – kein volles Wartezimmer.', author: 'Thomas M.', tag: 'Ružinov • Orthopädie' },
        { quote: 'Über die Bewertungen fanden wir sofort eine Praxis mit Deutsch & Englisch.', author: 'Petra V.', tag: 'Petržalka • Allgemeinmedizin' },
        { quote: 'Ehrliche Hinweise zu Parkplätzen und Empfang sparen viel Stress.', author: 'Lukas D.', tag: 'Nové Mesto • Dermatologie' },
      ],
      tabsSection: {
        microLabel: 'INTERAKTIVER BEZIRKS-GUIDE',
        title: 'In welchem Stadtteil Bratislavas suchen Sie?',
        tabs: [
          {
            id: 'stare-mesto',
            label: 'Staré Mesto',
            headline: 'Zentrale Fachärzte & mehrsprachige Praxen',
            desc: 'Höchste Dichte an Spezialisten, optimale Straßenbahnanbindung und häufig Kommunikation auf Deutsch oder Englisch.',
            metrics: ['Schnell aus der Innenstadt erreichbar', 'Große Auswahl an Dermatologie & HNO', 'Frühe Termine vor der Arbeit'],
          },
          {
            id: 'ruzinov',
            label: 'Ružinov',
            headline: 'Umfassende Polikliniken & Familienmedizin',
            desc: 'Stark für langfristige Betreuung, Pädiatrie, Reha und Kassenleistungen inklusive Labor direkt vor Ort.',
            metrics: ['Breite Deckung VšZP, Dôvera, Union', 'Gute Parkmöglichkeiten', 'Starke Orthopädie & Physiotherapie'],
          },
          {
            id: 'petrzalka',
            label: 'Petržalka & Nové Mesto',
            headline: 'Moderne Ärztehäuser mit Online-Terminen',
            desc: 'Ideal für Berufstätige und Familien: planbare Abläufe, digitale Aufrufe und Diagnostik unter einem Dach.',
            metrics: ['Exakte Online-Terminbuchung', 'Labor & Ultraschall im Haus', 'Abendsprechstunden verfügbar'],
          },
        ],
      },
    },
    'dentists-slovakia': {
      visualLabels: {
        pins: ['Bratislava • 4.9★', 'Košice • 4.9★', 'Žilina • 4.8★'],
        bar1: 'Sanfte, schmerzfreie Behandlung',
        bar2: 'Transparente Kosten vorab',
        badges: ['✓ Kassenbonus-fähig', '★ 4.9 Einfühlsames Team', '✓ 3D-Röntgen im Haus'],
      },
      marqueeItems: [
        { quote: 'Erster Zahnarztbesuch ohne Angst – völlig schmerzfreie Betäubung.', author: 'Julia H.', tag: 'Bratislava • Endodontie' },
        { quote: 'Der genaue Kostenplan lag vor der Behandlung schriftlich vor.', author: 'Jakub S.', tag: 'Košice • Prophylaxe' },
        { quote: 'Sehr geduldig mit Kindern und alles ruhig am Monitor erklärt.', author: 'Monika B.', tag: 'Trnava • Kinderzahnarzt' },
        { quote: 'Dank OP-Mikroskop wurde ein Zahn gerettet, der anderswo raus sollte.', author: 'Peter N.', tag: 'Žilina • Zahnmedizin' },
      ],
      tabsSection: {
        microLabel: 'NACH BEDARF WÄHLEN',
        title: 'Wobei benötigen Sie aktuell Unterstützung?',
        tabs: [
          {
            id: 'hygiene',
            label: 'Vorsorge & Prophylaxe',
            headline: 'Zähne schützen und Kassenboni sichern',
            desc: 'Eine jährliche Kontrolle erkennt kleine Schäden früh und sichert Zuschüsse Ihrer slowakischen Krankenkasse.',
            metrics: ['Sanftes Airflow ohne Schmerzempfinden', 'Früherkennung versteckter Karies', 'Individuelle Pflegetipps'],
          },
          {
            id: 'endo',
            label: 'Mikroskop-Behandlung',
            headline: 'Höchste Präzision für den Zahnerhalt',
            desc: 'Moderne Praxen kombinieren OP-Mikroskope mit ruhiger Anästhesie für nachhaltige Wurzelbehandlungen.',
            metrics: ['Sehr hohe Erfolgsquote', '3D-CBCT-Scan direkt vor Ort', 'Verbindlicher Behandlungsplan'],
          },
          {
            id: 'ortho',
            label: 'Aligner & Ästhetik',
            headline: '3D-Scan statt unangenehmer Abdrücke',
            desc: 'Sehen Sie das erwartete Ergebnis digital vorab und vergleichen Sie transparente Ratenzahlungen.',
            metrics: ['Digitaler 3D-Scan in Minuten', 'Flexible Monatsraten', 'Alle Alternativen im Vergleich'],
          },
        ],
      },
    },
    'private-clinics-guide': {
      visualLabels: {
        pins: ['Poliklinik • Kasse', 'Privatklinik • 48h', 'Check-up • 1 Tag'],
        bar1: 'Termin-Geschwindigkeit',
        bar2: 'Empfang & Organisation',
        badges: ['✓ Kassenverträge', '★ 4.8 Struktur', '⏱ Ohne Warteschlange'],
      },
      marqueeItems: [
        { quote: 'Blutbild, Ultraschall und Arztgespräch an einem einzigen Vormittag.', author: 'Martin K.', tag: 'Bratislava • Privatklinik' },
        { quote: 'Dank Medhub eine hervorragende Neurologin in einer Poliklinik gefunden.', author: 'Alena R.', tag: 'Nitra • Poliklinik' },
        { quote: 'Auf die Minute pünktlich, freundlicher Empfang auf Deutsch und Slowakisch.', author: 'David P.', tag: 'Košice • Medizinzentrum' },
        { quote: 'Hilfreich, sofort zu sehen, welche Klinik Verträge mit Dôvera hat.', author: 'Ivana T.', tag: 'Banská Bystrica' },
      ],
      tabsSection: {
        microLabel: 'SZENARIEN IM VERGLEICH',
        title: 'Welches Modell passt zu Ihrer Situation?',
        tabs: [
          {
            id: 'acute',
            label: 'Termin diese Woche nötig',
            headline: 'Wenn Schnelligkeit an erster Stelle steht',
            desc: 'Privatkliniken umgehen lange Wartelisten und bieten planbare Termine innerhalb weniger Tage.',
            metrics: ['Freie Termine oft binnen 1–3 Tagen', 'Keine überfüllten Wartezimmer', 'Selbstzahler meist ohne Überweisung'],
          },
          {
            id: 'longterm',
            label: 'Dauerhafte Kassenbetreuung',
            headline: 'Regelmäßige Kontrollen über die Krankenversicherung',
            desc: 'Vertragsärzte in Polikliniken bleiben der wirtschaftlichste Weg für chronische Verläufe und Rezepte.',
            metrics: ['Volle Deckung VšZP / Dôvera / Union', 'Basis-Labor ohne Aufpreis', 'Fester Ansprechpartner vor Ort'],
          },
          {
            id: 'preventive',
            label: 'Check-up an einem Tag',
            headline: 'Alle Fachbereiche koordiniert an einem Vormittag',
            desc: 'Präventionspakete bündeln Labor, EKG, Ultraschall und Abschlussbericht ohne Wege durch die halbe Stadt.',
            metrics: ['Alles unter einem Dach', 'Digitale Befundübersicht', 'Persönliche Terminkoordination'],
          },
        ],
      },
    },
    ...GIFT_BENTO.de,
  },
};

export const BENTO_EXTRAS: Record<Locale, Record<string, BentoExtras>> = BASE_BENTO;