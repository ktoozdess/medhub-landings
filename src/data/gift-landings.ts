import type { LandingCopy, Locale } from './landings';

const page = (copy: LandingCopy): LandingCopy => copy;

export const GIFT_LANDINGS: Record<Locale, LandingCopy[]> = {
  sk: [
    page({
      slug: 'gift-dental-visit',
      theme: 'gift',
      giftScene: {
        focus: 'visit',
        captions: ['Návšteva u zubára', 'Šetrný zubár', 'Termín v januári'],
      },
      seoTitle: 'Darujte návštevu zubára | Vianočný a novoročný darček | Medhub',
      seoDescription:
        'Najlepší darček na Vianoce a Nový rok je pokojná prehliadka u overeného zubára. Porovnajte ambulancie na Slovensku podľa skúseností pacientov.',
      microLabel: 'DARČEK • VIANOCE A NOVÝ ROK',
      heroTitle: 'Najkrajší darček pod stromčekom je pokojný úsmev.',
      heroSubtitle:
        'Namiesto ďalšej veci do skrine darujte blízkemu prehliadku u zubára, ktorého pacienti chvália za šetrný prístup a zrozumiteľné vysvetlenie.',
      trustText: 'Overení zubári podľa skúseností pacientov',
      heroAnchor: 'Ako taký darček vybrať',
      motionCard: {
        title: 'Komu hľadáte zubára?',
        liveBadge: 'Darčekový výber',
        tabA: 'Špecialisti',
        tabB: 'Kliniky',
        typingQuery: 'Zubár • Bratislava',
        searchBtn: 'Hľadať',
        sampleRows: [
          { name: 'MDDr. Elena Nováková', meta: 'Záchovná stomatológia • Bratislava', rating: '★ 4.9 (128)' },
          { name: 'Smile Atelier', meta: 'Prehliadka bez zhonu • Košice', rating: '★ 4.8 (203)' },
        ],
      },
      valueSection: {
        microLabel: 'DARČEK, KTORÝ OSTANE',
        title: 'Návšteva, ktorú si človek sám často odkladá.',
        text: 'Pomôžte blízkemu vybrať zubára a dohodnúť termín – to dáva konkrétny dôvod konečne ísť. Na Medhube vidíte, ako pacienti opisujú komunikáciu, citlivosť aj to, či cena zaznela ešte pred zákrokom.',
        cta: 'Vybrať zubára ako darček',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Najlepší darček bol termín, na ktorý by som sa sama neodhodlala.',
      },
      stepsSection: {
        microLabel: 'AKO DARČEK ZABALIŤ',
        title: 'Tri kroky k návšteve, ktorá poteší',
        cards: [
          { num: '01', title: 'Vyberte mesto obdarovaného', desc: 'Bratislava, Košice alebo menšie mesto – ambulancia má byť blízko jeho domova, nie vašej práce. Blízkosť rozhoduje o tom, či sa na termín naozaj príde.' },
          { num: '02', title: 'Čítajte priebeh prvej návštevy', desc: 'V recenziách hľadajte, či lekár vysvetľuje pokojne, ako zvláda strach zo zubára a či prvý kontakt nie je hneď veľký zákrok.' },
          { num: '03', title: 'Darujte konkrétny ďalší krok', desc: 'Odkaz na profil lekára, pomoc s objednaním alebo spoločne rezervovaný termín na január. Darček funguje, keď má dátum, nielen dobrý úmysel.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ČO DAROVAŤ',
        title: 'Len prehliadka, alebo rovno ošetrenie?',
        boxes: [
          {
            title: 'Prvá prehliadka ako darček',
            desc: 'Najuniverzálnejší variant. Lekár zistí stav a navrhne plán bez tlaku na veľký zákrok.',
            points: ['Vhodné aj po rokoch bez zubára', 'Žiadny predpoklad, čo treba opraviť', 'Ďalší termín sa dohodne v pokoji'],
          },
          {
            title: 'Keď už viete, čo blízky rieši',
            desc: 'Citlivosť, stará výplň alebo kontrola po rokoch – vyberte ambulanciu, ktorú pacienti opisujú ako šetrnú.',
            points: ['Anestézia podľa skúseností pacientov', 'Cena povedaná pred začiatkom', 'Možnosť nadviazať hygienou na mieste'],
          },
        ],
      },
      faqs: [
        { q: 'Je návšteva zubára vhodný vianočný darček?', a: 'Áno, ak ju podáte ako starostlivosť, nie ako výčitku. Najlepšie funguje konkrétny profil lekára a ponuka ísť spolu alebo termín, ktorý vybavíte vy.' },
        { q: 'Má zmysel darovať termín až v januári?', a: 'Práve január je dobrý mesiac: sviatky sú za vami a novoročné „konečne k zubárovi“ má konkrétny dátum.' },
      ],
      bottomCta: {
        microLabel: 'POD STROMČEK',
        title: 'Darujte prehliadku u zubára, ktorému sa dá veriť.',
        btn: 'Nájsť zubára na Medhube',
      },
    }),
    page({
      slug: 'gift-dental-hygiene',
      theme: 'gift',
      giftScene: {
        focus: 'hygiene',
        captions: ['Čistenie ako dar', 'Svieži dych', 'Plán na nový rok'],
      },
      seoTitle: 'Darujte dentálnu hygienu | Čistenie zubov na Vianoce | Medhub',
      seoDescription:
        'Profesionálne čistenie zubov ako darček na Vianoce a Nový rok. Porovnajte dentálnu hygienu na Slovensku podľa recenzií pacientov.',
      microLabel: 'DARČEK • DENTÁLNA HYGIENA',
      heroTitle: 'Darujte čistenie, po ktorom je úsmev naozaj svieži.',
      heroSubtitle:
        'Profesionálna dentálna hygiena je praktický darček: odstráni povlak, ktorý zubná kefka nezvládne, a dá jasný plán ďalšej starostlivosti.',
      trustText: 'Hygieničky a kliniky, ktoré pacienti odporúčajú',
      heroAnchor: 'Čo sledovať pred darovaním',
      motionCard: {
        title: 'Hľadáte hygienu ako darček?',
        liveBadge: 'Overené profily',
        tabA: 'Špecialisti',
        tabB: 'Kliniky',
        typingQuery: 'Dentálna hygiena • Bratislava',
        searchBtn: 'Hľadať',
        sampleRows: [
          { name: 'Hygiena Studio Dunaj', meta: 'Airflow a ultrazvuk • Bratislava', rating: '★ 4.9 (156)' },
          { name: 'MDDr. Lucia Horváthová', meta: 'Šetrné čistenie • Žilina', rating: '★ 4.8 (91)' },
        ],
      },
      valueSection: {
        microLabel: 'MALÝ RITUÁL, VEĽKÝ ROZDIEL',
        title: 'Čistenie, ktoré človek „niekedy“ odkladá celý rok.',
        text: 'Navrhnúť dentálnu hygienu je konkrétne a príjemné, ak zároveň pomôžete s výberom ambulancie. V recenziách hľadajte šetrnosť pri citlivých krčkoch, vysvetlenie domácej starostlivosti a férovú cenu vopred.',
        cta: 'Nájsť dentálnu hygienu',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Sestra mi našla hygieničku a rezervovala termín. Bol to najužitočnejší darček pod stromčekom.',
      },
      stepsSection: {
        microLabel: 'PRED ODSTÁNÍM STUŽKY',
        title: 'Ako vybrať hygienu, ktorá naozaj poteší',
        cards: [
          { num: '01', title: 'Šetrnosť pri citlivosti', desc: 'Pozrite, či pacienti spomínajú jemné čistenie a nie bolesť „pre istotu“.' },
          { num: '02', title: 'Čo má byť v cene návštevy', desc: 'Ultrazvuk, Airflow aj inštruktáž čistenia majú byť pomenované vopred.' },
          { num: '03', title: 'Termín, ktorý sa zmestí do januára', desc: 'Dobré ambulancie mávajú voľné hodiny hneď po sviatkoch – rezervujte ich ako súčasť darčeka.' },
        ],
      },
      comparisonSection: {
        microLabel: 'DVA SPÔSOBY DARU',
        title: 'Samotná hygiena alebo hygiena so zubárom?',
        boxes: [
          {
            title: 'Len profesionálne čistenie',
            desc: 'Ideálne pre niekoho, kto u zubára chodí, ale profesionálnu hygienu stále odkladá.',
            points: ['Jasný a ohraničený darček', 'Bez tlaku na ďalšie zákroky', 'Okamžitý pocit sviežosti'],
          },
          {
            title: 'Hygiena v zubnej klinike',
            desc: 'Praktické, ak chcete, aby po čistení hneď nadviazala krátka kontrola u zubára.',
            points: ['Jedna adresa, dva kroky', 'Nález sa nestratí medzi ambulanciami', 'Jednoduchšie dohodnúť ďalší termín'],
          },
        ],
      },
      faqs: [
        { q: 'Je profesionálne čistenie vhodný darček pre každého?', a: 'Pre väčšinu dospelých áno. Pri veľmi citlivých ďasnách alebo akútnom probléme je lepšie najprv krátka prehliadka u zubára a hygienu dohodnúť podľa jeho odporúčania.' },
        { q: 'Ako darček odovzdať, aby nepôsobil ako kritika?', a: 'Povedzte, že ide o starostlivosť, ktorú ste sami ocenili. Priložte profil kliniky a ponúknite, že termín rezervujete vy.' },
      ],
      bottomCta: {
        microLabel: 'SVEŽÍ ŠTART ROKA',
        title: 'Darujte čistenie, ktoré má zmysel aj v januári.',
        btn: 'Porovnať hygienu na Medhube',
      },
    }),
    page({
      slug: 'gift-health-checkup',
      theme: 'gift',
      giftScene: {
        focus: 'checkup',
        captions: ['Darček je zdravie', 'Pokojná prehliadka', 'Nový rok s plánom'],
      },
      seoTitle: 'Darujte zdravie na Vianoce a Nový rok | Prehliadka u lekára | Medhub',
      seoDescription:
        'Najlepší darček na Vianoce a Nový rok je zdravie. Nájdite lekára na preventívnu prehliadku podľa recenzií pacientov na Slovensku.',
      microLabel: 'DARČEK • ZDRAVIE',
      heroTitle: 'Najlepší darček na Vianoce a Nový rok je zdravie.',
      heroSubtitle:
        'Nie ďalší sveter. Pokojná preventívna prehliadka u lekára, ktorému ľudia veria, je darček, ktorý má zmysel aj dlho po sviatkoch.',
      trustText: 'Lekári, ku ktorým sa pacienti radi vracajú',
      heroAnchor: 'Ako darovať prehliadku',
      motionCard: {
        title: 'Akú prehliadku hľadáte?',
        liveBadge: 'Overené recenzie',
        tabA: 'Špecialisti',
        tabB: 'Kliniky',
        typingQuery: 'Preventívna prehliadka • Bratislava',
        searchBtn: 'Hľadať',
        sampleRows: [
          { name: 'MUDr. Peter Kolár', meta: 'Všeobecný lekár • Bratislava', rating: '★ 4.9 (214)' },
          { name: 'Klinika Jeden deň', meta: 'Check-up bez zhonu • Nitra', rating: '★ 4.8 (167)' },
        ],
      },
      valueSection: {
        microLabel: 'STAROSTLIVOSŤ NA CELÝ ROK',
        title: 'Zdravie sa nedá zabaliť. Dá sa mu však dať termín.',
        text: 'Darujte blízkemu konkrétneho lekára: niekoho, kto vysvetlí výsledky, neponáhľa sa a má v recenziách pokojnú organizáciu. To je darček, ktorý vydrží dlhšie ako sviatky.',
        cta: 'Nájsť lekára na prehliadku',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Namiesto parfumu som dostala prehliadku. V januári som bola rada, že ju mám.',
      },
      stepsSection: {
        microLabel: 'DARČEK BEZ STRESOV',
        title: 'Ako vybrať prehliadku, ktorá sedí',
        cards: [
          { num: '01', title: 'Začnite tým, čo človek odkladá', desc: 'Všeobecný lekár, kožný lekár alebo interný check-up – darujte to, čo roky čaká „na neskôr“.' },
          { num: '02', title: 'Overte poisťovňu a doplatok', desc: 'Pri zmluvných lekároch býva základ hradený. Súkromný balík má mať jasnú cenu vopred.' },
          { num: '03', title: 'Nechajte čas na rozhovor', desc: 'V recenziách hľadajte, či lekár vysvetľuje a či ambulancia dodrží čas objednania.' },
        ],
      },
      comparisonSection: {
        microLabel: 'DVA DARČEKY, JEDEN ZMYSEL',
        title: 'Klasická prevencia alebo prehliadka v jeden deň?',
        boxes: [
          {
            title: 'Návšteva zmluvného lekára',
            desc: 'Najprirodzenejší darček pre niekoho, kto roky nebol na preventívnej prehliadke.',
            points: ['Základ zvyčajne cez VšZP, Dôveru alebo Union', 'Nadväznosť na predpisy a odbery', 'Lekár, ku ktorému sa dá vrátiť'],
          },
          {
            title: 'Súkromný check-up',
            desc: 'Keď chcete darovať pokojný dopoludnie: odbery, EKG a záver bez behania po meste.',
            points: ['Presný čas bez čakárne', 'Výsledky pokope', 'Vhodné ako novoročný reštart'],
          },
        ],
      },
      faqs: [
        { q: 'Nie je darovať lekára príliš osobné?', a: 'Záleží na tóne. „Chcem, aby si mal pokojný rok“ znie inak ako „mal by si sa dať vyšetriť“. Konkrétny lekár a ponuka ísť spolu to zjemnia.' },
        { q: 'Čo ak obdarovaný už svojho lekára má?', a: 'Potom darujte termín, nie nového človeka: pomoc s objednaním, odvoz alebo pripomienku na prehliadku, ktorú odkladá.' },
      ],
      bottomCta: {
        microLabel: 'NOVÝ ROK',
        title: 'Darujte zdravie, ktoré má meno a adresu.',
        btn: 'Vybrať lekára na Medhube',
      },
    }),
  ],

  en: [
    page({
      slug: 'gift-dental-visit',
      theme: 'gift',
      giftScene: {
        focus: 'visit',
        captions: ['A dental visit', 'A gentle dentist', 'A January slot'],
      },
      seoTitle: 'Gift a dental visit | A Christmas and New Year present | Medhub',
      seoDescription:
        'The best holiday gift is a calm visit with a trusted dentist in Slovakia. Compare clinics through real patient reviews.',
      microLabel: 'A GIFT • CHRISTMAS AND NEW YEAR',
      heroTitle: 'The best present under the tree is a calm smile.',
      heroSubtitle:
        'Skip another thing for the cupboard. Give someone a dental visit with a dentist patients describe as gentle and clear.',
      trustText: 'Dentists patients actually recommend',
      heroAnchor: 'How to choose this gift',
      motionCard: {
        title: 'Who needs a dentist?',
        liveBadge: 'Gift shortlist',
        tabA: 'Specialists',
        tabB: 'Clinics',
        typingQuery: 'Dentist • Bratislava',
        searchBtn: 'Search',
        sampleRows: [
          { name: 'MDDr. Elena Nováková', meta: 'General dentistry • Bratislava', rating: '★ 4.9 (128)' },
          { name: 'Smile Atelier', meta: 'Unhurried first visit • Košice', rating: '★ 4.8 (203)' },
        ],
      },
      valueSection: {
        microLabel: 'A GIFT THAT STAYS',
        title: 'The appointment people keep postponing.',
        text: 'Help them pick a dentist and book a date — that turns “I should go” into something real. On Medhub you can see how patients describe communication, sensitivity, and whether the price was clear before treatment.',
        cta: 'Choose a dentist to gift',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'The best gift was the appointment I would never have booked myself.',
      },
      stepsSection: {
        microLabel: 'HOW TO WRAP IT',
        title: 'Three steps to a visit they will thank you for',
        cards: [
          { num: '01', title: 'Pick their city, not yours', desc: 'Bratislava, Košice, or a smaller town — the clinic should sit close to their home, not your office. Distance is often what decides whether they actually go.' },
          { num: '02', title: 'Read the first-visit notes', desc: 'Look for whether the dentist explains calmly, takes dental anxiety seriously, and treats the first appointment as a conversation rather than a procedure.' },
          { num: '03', title: 'Give a next step, not a hint', desc: 'A dentist profile, help with booking, or a January slot you arrange together. The gift works when it has a date, not only a good intention.' },
        ],
      },
      comparisonSection: {
        microLabel: 'WHAT TO GIVE',
        title: 'A check-up, or treatment as well?',
        boxes: [
          {
            title: 'A first visit as the gift',
            desc: 'The safest present. The dentist looks, explains, and suggests a plan without pushing a large procedure.',
            points: ['Works even after years away', 'No need to guess what needs fixing', 'The next date is agreed calmly'],
          },
          {
            title: 'When you already know the worry',
            desc: 'Sensitivity, an old filling, a long-overdue review — choose a clinic patients call gentle.',
            points: ['Anaesthesia mentioned in reviews', 'Price stated before treatment', 'Hygiene available in the same place'],
          },
        ],
      },
      faqs: [
        { q: 'Is a dental visit an appropriate Christmas gift?', a: 'Yes, when it is offered as care rather than a criticism. A specific dentist profile, and an offer to go together or to book the visit, makes it feel generous.' },
        { q: 'Should the appointment be in January?', a: 'January is a good month. The holidays are over, and the New Year intention to see a dentist has a real date.' },
      ],
      bottomCta: {
        microLabel: 'UNDER THE TREE',
        title: 'Give a dental visit they can trust.',
        btn: 'Find a dentist on Medhub',
      },
    }),
    page({
      slug: 'gift-dental-hygiene',
      theme: 'gift',
      giftScene: {
        focus: 'hygiene',
        captions: ['Cleaning as a gift', 'A fresher smile', 'A plan for the year'],
      },
      seoTitle: 'Gift a dental cleaning | Professional hygiene for the holidays | Medhub',
      seoDescription:
        'Professional teeth cleaning as a Christmas and New Year gift. Compare dental hygienists in Slovakia through patient reviews.',
      microLabel: 'A GIFT • DENTAL CLEANING',
      heroTitle: 'Give a cleaning that actually leaves a fresher smile.',
      heroSubtitle:
        'A professional hygiene visit is a practical present: it removes what a toothbrush misses and leaves a clear plan for the year ahead.',
      trustText: 'Hygienists and clinics patients recommend',
      heroAnchor: 'What to check before you gift it',
      motionCard: {
        title: 'Looking for a cleaning to gift?',
        liveBadge: 'Verified profiles',
        tabA: 'Specialists',
        tabB: 'Clinics',
        typingQuery: 'Dental hygiene • Bratislava',
        searchBtn: 'Search',
        sampleRows: [
          { name: 'Hygiena Studio Dunaj', meta: 'Airflow and ultrasonic • Bratislava', rating: '★ 4.9 (156)' },
          { name: 'MDDr. Lucia Horváthová', meta: 'Gentle cleaning • Žilina', rating: '★ 4.8 (91)' },
        ],
      },
      valueSection: {
        microLabel: 'A SMALL RITUAL',
        title: 'The cleaning people postpone all year.',
        text: 'Suggesting a professional clean is specific and easy to receive if you also help choose the clinic. In reviews, look for a gentle touch on sensitive teeth, a clear home-care explanation, and a price named upfront.',
        cta: 'Find a dental cleaning',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'My sister found a hygienist and booked the time. It was the most useful gift under the tree.',
      },
      stepsSection: {
        microLabel: 'BEFORE THE RIBBON',
        title: 'How to choose a cleaning they will enjoy',
        cards: [
          { num: '01', title: 'Gentleness first', desc: 'Look for notes about sensitive necks of teeth, not a painful “just in case” scrape.' },
          { num: '02', title: 'Know what the visit should include', desc: 'Ultrasonic, Airflow, and a cleaning lesson should be named before the visit.' },
          { num: '03', title: 'Book a January hour', desc: 'Good clinics open slots right after the holidays. The reservation can be part of the gift.' },
        ],
      },
      comparisonSection: {
        microLabel: 'TWO WAYS TO GIVE IT',
        title: 'Cleaning alone, or cleaning with a dentist?',
        boxes: [
          {
            title: 'Just a professional cleaning',
            desc: 'Right for someone who already sees a dentist but keeps delaying a professional clean.',
            points: ['A clear, bounded gift', 'No pressure toward extra treatment', 'An immediate fresher feeling'],
          },
          {
            title: 'Hygiene inside a dental clinic',
            desc: 'Useful when you want a short dentist check to follow the cleaning on the same day.',
            points: ['One address, two steps', 'Findings stay in one place', 'Easier to book what comes next'],
          },
        ],
      },
      faqs: [
        { q: 'Is a professional cleaning a good gift for anyone?', a: 'For most adults, yes. With very sensitive gums or an acute toothache, a short dentist visit first is the kinder gift, with hygiene booked on their advice.' },
        { q: 'How do you give it without sounding critical?', a: 'Say it is care you valued yourself. Attach the clinic profile and offer to book the time.' },
      ],
      bottomCta: {
        microLabel: 'A FRESH START',
        title: 'Give a cleaning that still matters in January.',
        btn: 'Compare hygiene visits on Medhub',
      },
    }),
    page({
      slug: 'gift-health-checkup',
      theme: 'gift',
      giftScene: {
        focus: 'checkup',
        captions: ['Health is the gift', 'An unhurried visit', 'A plan for the year'],
      },
      seoTitle: 'Gift health for Christmas and New Year | A doctor’s check-up | Medhub',
      seoDescription:
        'The best Christmas and New Year gift is health. Find a doctor for a preventive visit in Slovakia through patient reviews.',
      microLabel: 'A GIFT • HEALTH',
      heroTitle: 'The best Christmas and New Year gift is health.',
      heroSubtitle:
        'Not another sweater. A calm preventive visit with a doctor people trust is a present that still matters after the holidays.',
      trustText: 'Doctors patients are glad to return to',
      heroAnchor: 'How to gift a check-up',
      motionCard: {
        title: 'Which visit are you gifting?',
        liveBadge: 'Verified reviews',
        tabA: 'Specialists',
        tabB: 'Clinics',
        typingQuery: 'Preventive check-up • Bratislava',
        searchBtn: 'Search',
        sampleRows: [
          { name: 'MUDr. Peter Kolár', meta: 'General practice • Bratislava', rating: '★ 4.9 (214)' },
          { name: 'Klinika Jeden deň', meta: 'Same-day check-up • Nitra', rating: '★ 4.8 (167)' },
        ],
      },
      valueSection: {
        microLabel: 'CARE FOR THE WHOLE YEAR',
        title: 'Health cannot be wrapped. It can be given a date.',
        text: 'Give a specific doctor: someone who explains results, does not rush, and whose clinic keeps appointment times. That gift outlasts the holidays.',
        cta: 'Find a doctor for a check-up',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Instead of perfume I got a check-up. In January I was glad I had it.',
      },
      stepsSection: {
        microLabel: 'A GIFT WITHOUT PRESSURE',
        title: 'How to choose a visit that fits',
        cards: [
          { num: '01', title: 'Start with what they postpone', desc: 'A GP visit, a dermatologist, or an internal check-up — gift the one waiting “for later”.' },
          { num: '02', title: 'Check insurance and any fee', desc: 'With contracted doctors the basics are often covered. A private package should show its price first.' },
          { num: '03', title: 'Leave room for a real conversation', desc: 'In reviews, look for clear explanations and a clinic that keeps the booked time.' },
        ],
      },
      comparisonSection: {
        microLabel: 'TWO GIFTS, ONE POINT',
        title: 'A standard preventive visit, or one morning in a clinic?',
        boxes: [
          {
            title: 'A visit with a contracted doctor',
            desc: 'The most natural gift for someone who has skipped prevention for years.',
            points: ['Basics often via VšZP, Dôvera, or Union', 'Follows through to labs and prescriptions', 'A doctor they can return to'],
          },
          {
            title: 'A private same-day check-up',
            desc: 'When you want to give a quiet morning: labs, ECG, and a summary without crossing the city.',
            points: ['A fixed time, no waiting room', 'Results in one place', 'A clean New Year reset'],
          },
        ],
      },
      faqs: [
        { q: 'Is gifting a doctor too personal?', a: 'The tone decides it. “I want you to have a calm year” lands differently from “you should get checked.” A named doctor, and an offer to go along, keeps it kind.' },
        { q: 'What if they already have a doctor?', a: 'Then gift the appointment, not a new person: help with booking, a ride, or a reminder for the extra check they keep delaying.' },
      ],
      bottomCta: {
        microLabel: 'NEW YEAR',
        title: 'Give health a name and an address.',
        btn: 'Choose a doctor on Medhub',
      },
    }),
  ],

  ru: [
    page({
      slug: 'gift-dental-visit',
      theme: 'gift',
      giftScene: {
        focus: 'visit',
        captions: ['Визит к стоматологу', 'Спокойный стоматолог', 'Запись на январь'],
      },
      seoTitle: 'Подарите визит к стоматологу | Подарок на Новый год и Рождество | Medhub',
      seoDescription:
        'Лучший подарок на Новый год и Рождество — спокойный визит к проверенному стоматологу. Сравните клиники в Словакии по отзывам пациентов.',
      microLabel: 'ПОДАРОК • НОВЫЙ ГОД И РОЖДЕСТВО',
      heroTitle: 'Лучший подарок под ёлкой — спокойная улыбка.',
      heroSubtitle:
        'Вместо ещё одной вещи в шкаф подарите близкому визит к стоматологу, которого пациенты хвалят за бережный приём и понятные объяснения.',
      trustText: 'Стоматологи, которых рекомендуют пациенты',
      heroAnchor: 'Как выбрать такой подарок',
      motionCard: {
        title: 'Кому ищете стоматолога?',
        liveBadge: 'Подарочный отбор',
        tabA: 'Специалисты',
        tabB: 'Клиники',
        typingQuery: 'Стоматолог • Братислава',
        searchBtn: 'Искать',
        sampleRows: [
          { name: 'MDDr. Elena Nováková', meta: 'Терапевтическая стоматология • Братислава', rating: '★ 4.9 (128)' },
          { name: 'Smile Atelier', meta: 'Осмотр без спешки • Кошице', rating: '★ 4.8 (203)' },
        ],
      },
      valueSection: {
        microLabel: 'ПОДАРОК, КОТОРЫЙ ОСТАЁТСЯ',
        title: 'Визит, который человек сам всё откладывает.',
        text: 'Помогите выбрать стоматолога и записаться — так «надо бы сходить» становится датой. На Medhub видно, как пациенты описывают общение, чувствительность и озвучили ли цену до лечения.',
        cta: 'Выбрать стоматолога в подарок',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Лучшим подарком была запись, на которую я бы сама не решилась.',
      },
      stepsSection: {
        microLabel: 'КАК ЭТО УПАКОВАТЬ',
        title: 'Три шага к визиту, за который скажут спасибо',
        cards: [
          { num: '01', title: 'Выберите город того, кого дарите', desc: 'Братислава, Кошице или меньший город — клиника должна быть рядом с его домом, а не с вашей работой. От расстояния часто зависит, дойдёт ли человек до кресла.' },
          { num: '02', title: 'Прочитайте, как проходит первый визит', desc: 'В отзывах смотрите, объясняет ли врач спокойно, считается ли со страхом стоматолога и не превращает ли первый приём сразу в большое лечение.' },
          { num: '03', title: 'Подарите следующий шаг', desc: 'Ссылка на профиль, помощь с записью или январский приём, который вы оформите вместе. Подарок работает, когда у него есть дата, а не только доброе намерение.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ЧТО ИМЕННО ДАРИТЬ',
        title: 'Только осмотр или сразу лечение?',
        boxes: [
          {
            title: 'Первый осмотр как подарок',
            desc: 'Самый универсальный вариант. Врач смотрит и предлагает план без давления на большой объём лечения.',
            points: ['Подходит даже после лет без стоматолога', 'Не нужно угадывать, что лечить', 'Следующую дату назначают спокойно'],
          },
          {
            title: 'Если вы уже знаете, что беспокоит',
            desc: 'Чувствительность, старая пломба, давно отложенный контроль — выбирайте клинику, которую описывают как бережную.',
            points: ['Анестезия в отзывах пациентов', 'Цена до начала лечения', 'Гигиена в той же клинике'],
          },
        ],
      },
      faqs: [
        { q: 'Уместно ли дарить визит к стоматологу на Новый год?', a: 'Да, если это забота, а не упрёк. Лучше всего работает конкретный врач и предложение сходить вместе или записаться за них.' },
        { q: 'Имеет ли смысл запись именно на январь?', a: 'Январь как раз удобен: праздники позади, а новогоднее «наконец к стоматологу» получает настоящую дату.' },
      ],
      bottomCta: {
        microLabel: 'ПОД ЁЛКУ',
        title: 'Подарите визит к стоматологу, которому можно доверять.',
        btn: 'Найти стоматолога на Medhub',
      },
    }),
    page({
      slug: 'gift-dental-hygiene',
      theme: 'gift',
      giftScene: {
        focus: 'hygiene',
        captions: ['Чистка в подарок', 'Свежее дыхание', 'План на новый год'],
      },
      seoTitle: 'Подарите чистку у стоматолога | Профгигиена на Новый год | Medhub',
      seoDescription:
        'Профессиональная чистка зубов как подарок на Новый год и Рождество. Сравните гигиенистов в Словакии по отзывам пациентов.',
      microLabel: 'ПОДАРОК • ЧИСТКА ЗУБОВ',
      heroTitle: 'Подарите чистку, после которой улыбка правда свежее.',
      heroSubtitle:
        'Профессиональная гигиена — практичный подарок: убирает налёт, с которым щётка не справляется, и оставляет понятный план ухода на год.',
      trustText: 'Гигиенисты и клиники, которых советуют пациенты',
      heroAnchor: 'На что смотреть перед подарком',
      motionCard: {
        title: 'Ищете чистку в подарок?',
        liveBadge: 'Проверенные профили',
        tabA: 'Специалисты',
        tabB: 'Клиники',
        typingQuery: 'Гигиена зубов • Братислава',
        searchBtn: 'Искать',
        sampleRows: [
          { name: 'Hygiena Studio Dunaj', meta: 'Airflow и ультразвук • Братислава', rating: '★ 4.9 (156)' },
          { name: 'MDDr. Lucia Horváthová', meta: 'Бережная чистка • Жилина', rating: '★ 4.8 (91)' },
        ],
      },
      valueSection: {
        microLabel: 'НЕБОЛЬШОЙ РИТУАЛ',
        title: 'Чистка, которую откладывают весь год.',
        text: 'Предложить профессиональную чистку легко принять, если вы ещё и поможете выбрать клинику. В отзывах ищите бережность при чувствительных шейках, объяснение домашнего ухода и цену, названную заранее.',
        cta: 'Найти профессиональную чистку',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Сестра нашла гигиениста и записала меня. Это был самый полезный подарок под ёлкой.',
      },
      stepsSection: {
        microLabel: 'ДО БАНТА',
        title: 'Как выбрать чистку, которая правда порадует',
        cards: [
          { num: '01', title: 'Сначала бережность', desc: 'Смотрите, пишут ли о деликатной чистке, а не о боли «на всякий случай».' },
          { num: '02', title: 'Поймите, что входит в визит', desc: 'Ультразвук, Airflow и обучение чистке должны быть названы до визита.' },
          { num: '03', title: 'Оставьте час в январе', desc: 'У хороших клиник слоты открываются сразу после праздников. Запись может быть частью подарка.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ДВА ФОРМАТА',
        title: 'Только чистка или чистка вместе со стоматологом?',
        boxes: [
          {
            title: 'Только профессиональная чистка',
            desc: 'Для того, кто и так ходит к стоматологу, но профессиональную чистку всё откладывает.',
            points: ['Понятный и ограниченный подарок', 'Без давления на лишнее лечение', 'Сразу более свежее ощущение'],
          },
          {
            title: 'Гигиена в стоматологической клинике',
            desc: 'Если хотите, чтобы после чистки был короткий осмотр врача в тот же день.',
            points: ['Один адрес, два шага', 'Находки не теряются между кабинетами', 'Проще назначить, что дальше'],
          },
        ],
      },
      faqs: [
        { q: 'Чистка подходит в подарок каждому?', a: 'Большинству взрослых — да. При очень чувствительных дёснах или острой боли добрее сначала короткий визит к стоматологу, а гигиену записать по его совету.' },
        { q: 'Как подарить, чтобы это не прозвучало как критика?', a: 'Скажите, что это забота, которую вы сами оценили. Приложите профиль клиники и предложите записать время.' },
      ],
      bottomCta: {
        microLabel: 'СВЕЖИЙ СТАРТ ГОДА',
        title: 'Подарите чистку, которая имеет смысл и в январе.',
        btn: 'Сравнить гигиену на Medhub',
      },
    }),
    page({
      slug: 'gift-health-checkup',
      theme: 'gift',
      giftScene: {
        focus: 'checkup',
        captions: ['Подарок — здоровье', 'Спокойный осмотр', 'План на новый год'],
      },
      seoTitle: 'Подарите здоровье на Новый год и Рождество | Осмотр у врача | Medhub',
      seoDescription:
        'Лучший подарок на Новый год и Рождество — здоровье. Найдите врача для профилактического осмотра в Словакии по отзывам пациентов.',
      microLabel: 'ПОДАРОК • ЗДОРОВЬЕ',
      heroTitle: 'Лучший подарок на Новый год и Рождество — здоровье.',
      heroSubtitle:
        'Не ещё один свитер. Спокойный профилактический осмотр у врача, которому доверяют, — подарок, который остаётся и после праздников.',
      trustText: 'Врачи, к которым пациенты возвращаются',
      heroAnchor: 'Как подарить осмотр',
      motionCard: {
        title: 'Какой осмотр дарите?',
        liveBadge: 'Проверенные отзывы',
        tabA: 'Специалисты',
        tabB: 'Клиники',
        typingQuery: 'Профилактический осмотр • Братислава',
        searchBtn: 'Искать',
        sampleRows: [
          { name: 'MUDr. Peter Kolár', meta: 'Терапевт • Братислава', rating: '★ 4.9 (214)' },
          { name: 'Klinika Jeden deň', meta: 'Чекап за одно утро • Нитра', rating: '★ 4.8 (167)' },
        ],
      },
      valueSection: {
        microLabel: 'ЗАБОТА НА ВЕСЬ ГОД',
        title: 'Здоровье не заворачивается. Ему можно назначить дату.',
        text: 'Подарите конкретного врача: того, кто объясняет результаты, не торопит и у кого клиника держит время записи. Такой подарок длиннее праздников.',
        cta: 'Найти врача для осмотра',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Вместо духов мне подарили осмотр. В январе я была рада, что он уже есть.',
      },
      stepsSection: {
        microLabel: 'ПОДАРОК БЕЗ ДАВЛЕНИЯ',
        title: 'Как выбрать осмотр, который подойдёт',
        cards: [
          { num: '01', title: 'Начните с того, что откладывают', desc: 'Терапевт, дерматолог или внутренний чекап — дарите то, что годами ждёт «потом».' },
          { num: '02', title: 'Проверьте страховку и доплату', desc: 'У договорных врачей база часто покрыта. У частного пакета цена должна быть ясна заранее.' },
          { num: '03', title: 'Оставьте время на разговор', desc: 'В отзывах ищите понятные объяснения и клинику, которая не сдвигает запись.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ДВА ПОДАРКА, ОДИН СМЫСЛ',
        title: 'Обычная профилактика или осмотр за одно утро?',
        boxes: [
          {
            title: 'Визит к договорному врачу',
            desc: 'Самый естественный подарок тому, кто годами пропускал профилактику.',
            points: ['База часто через VšZP, Dôvera или Union', 'Дальше — анализы и назначения', 'Врач, к которому можно вернуться'],
          },
          {
            title: 'Частный чекап за утро',
            desc: 'Если хотите подарить спокойное утро: анализы, ЭКГ и итог без поездок по городу.',
            points: ['Точное время без очереди', 'Результаты в одном месте', 'Чистый старт года'],
          },
        ],
      },
      faqs: [
        { q: 'Не слишком ли личный подарок — врач?', a: 'Решает тон. «Хочу, чтобы год был спокойным» звучит иначе, чем «тебе пора провериться». Конкретный врач и предложение пойти вместе смягчают подарок.' },
        { q: 'Что, если свой врач уже есть?', a: 'Тогда дарите не нового человека, а сам визит: помощь с записью, дорогу или напоминание о том осмотре, который всё откладывают.' },
      ],
      bottomCta: {
        microLabel: 'НОВЫЙ ГОД',
        title: 'Подарите здоровье, у которого есть имя и адрес.',
        btn: 'Выбрать врача на Medhub',
      },
    }),
  ],

  ua: [
    page({
      slug: 'gift-dental-visit',
      theme: 'gift',
      giftScene: {
        focus: 'visit',
        captions: ['Візит до стоматолога', 'Спокійний стоматолог', 'Запис на січень'],
      },
      seoTitle: 'Подаруйте візит до стоматолога | Подарунок на Новий рік і Різдво | Medhub',
      seoDescription:
        'Найкращий подарунок на Новий рік і Різдво — спокійний візит до перевіреного стоматолога. Порівняйте клініки у Словаччині за відгуками пацієнтів.',
      microLabel: 'ПОДАРУНОК • НОВИЙ РІК І РІЗДВО',
      heroTitle: 'Найкращий подарунок під ялинкою — спокійна усмішка.',
      heroSubtitle:
        'Замість ще однієї речі в шафі подаруйте близькій людині візит до стоматолога, якого пацієнти хвалять за бережний прийом і зрозумілі пояснення.',
      trustText: 'Стоматологи, яких радять пацієнти',
      heroAnchor: 'Як обрати такий подарунок',
      motionCard: {
        title: 'Кому шукаєте стоматолога?',
        liveBadge: 'Подарунковий добір',
        tabA: 'Спеціалісти',
        tabB: 'Клініки',
        typingQuery: 'Стоматолог • Братислава',
        searchBtn: 'Шукати',
        sampleRows: [
          { name: 'MDDr. Elena Nováková', meta: 'Терапевтична стоматологія • Братислава', rating: '★ 4.9 (128)' },
          { name: 'Smile Atelier', meta: 'Огляд без поспіху • Кошице', rating: '★ 4.8 (203)' },
        ],
      },
      valueSection: {
        microLabel: 'ПОДАРУНОК, ЯКИЙ ЛИШАЄТЬСЯ',
        title: 'Візит, який людина сама весь час відкладає.',
        text: 'Допоможіть обрати стоматолога і записатися — так «треба б сходити» стає датою. На Medhub видно, як пацієнти описують спілкування, чутливість і чи назвали ціну до лікування.',
        cta: 'Обрати стоматолога в подарунок',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Найкращим подарунком був запис, на який я б сама не наважилась.',
      },
      stepsSection: {
        microLabel: 'ЯК ЦЕ ЗАПАКУВАТИ',
        title: 'Три кроки до візиту, за який подякують',
        cards: [
          { num: '01', title: 'Оберіть місто того, кому даруєте', desc: 'Братислава, Кошице чи менше місто — клініка має бути біля його дому, а не вашої роботи. Від відстані часто залежить, чи людина взагалі прийде.' },
          { num: '02', title: 'Прочитайте, як минає перший візит', desc: 'У відгуках дивіться, чи лікар пояснює спокійно, чи зважає на страх стоматолога і чи не перетворює перший прийом одразу на велике лікування.' },
          { num: '03', title: 'Подаруйте наступний крок', desc: 'Посилання на профіль, допомога із записом або січневий прийом, який ви оформите разом. Подарунок працює, коли в нього є дата, а не лише добрий намір.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ЩО САМЕ ДАРУВАТИ',
        title: 'Лише огляд чи одразу лікування?',
        boxes: [
          {
            title: 'Перший огляд як подарунок',
            desc: 'Найуніверсальніший варіант. Лікар дивиться і пропонує план без тиску на великий обсяг лікування.',
            points: ['Підходить навіть після років без стоматолога', 'Не треба вгадувати, що лікувати', 'Наступну дату призначають спокійно'],
          },
          {
            title: 'Якщо ви вже знаєте, що турбує',
            desc: 'Чутливість, стара пломба, давно відкладений контроль — обирайте клініку, яку описують як бережну.',
            points: ['Анестезія у відгуках пацієнтів', 'Ціна до початку лікування', 'Гігієна в тій самій клініці'],
          },
        ],
      },
      faqs: [
        { q: 'Чи доречно дарувати візит до стоматолога на Новий рік?', a: 'Так, якщо це турбота, а не докір. Найкраще працює конкретний лікар і пропозиція піти разом або записатися за них.' },
        { q: 'Чи має сенс запис саме на січень?', a: 'Січень якраз зручний: свята позаду, а новорічне «нарешті до стоматолога» отримує справжню дату.' },
      ],
      bottomCta: {
        microLabel: 'ПІД ЯЛИНКУ',
        title: 'Подаруйте візит до стоматолога, якому можна довіряти.',
        btn: 'Знайти стоматолога на Medhub',
      },
    }),
    page({
      slug: 'gift-dental-hygiene',
      theme: 'gift',
      giftScene: {
        focus: 'hygiene',
        captions: ['Чистка в подарунок', 'Свіжіший подих', 'План на новий рік'],
      },
      seoTitle: 'Подаруйте чистку в стоматолога | Профгігієна на Новий рік | Medhub',
      seoDescription:
        'Професійна чистка зубів як подарунок на Новий рік і Різдво. Порівняйте гігієністів у Словаччині за відгуками пацієнтів.',
      microLabel: 'ПОДАРУНОК • ЧИСТКА ЗУБІВ',
      heroTitle: 'Подаруйте чистку, після якої усмішка справді свіжіша.',
      heroSubtitle:
        'Професійна гігієна — практичний подарунок: прибирає наліт, з яким щітка не справляється, і лишає зрозумілий план догляду на рік.',
      trustText: 'Гігієністи й клініки, яких радять пацієнти',
      heroAnchor: 'На що дивитися перед подарунком',
      motionCard: {
        title: 'Шукаєте чистку в подарунок?',
        liveBadge: 'Перевірені профілі',
        tabA: 'Спеціалісти',
        tabB: 'Клініки',
        typingQuery: 'Гігієна зубів • Братислава',
        searchBtn: 'Шукати',
        sampleRows: [
          { name: 'Hygiena Studio Dunaj', meta: 'Airflow і ультразвук • Братислава', rating: '★ 4.9 (156)' },
          { name: 'MDDr. Lucia Horváthová', meta: 'Бережна чистка • Жиліна', rating: '★ 4.8 (91)' },
        ],
      },
      valueSection: {
        microLabel: 'НЕВЕЛИКИЙ РИТУАЛ',
        title: 'Чистка, яку відкладають цілий рік.',
        text: 'Запропонувати професійну чистку легко прийняти, якщо ви ще й допоможете обрати клініку. У відгуках шукайте бережність при чутливих шийках, пояснення домашнього догляду і ціну, названу заздалегідь.',
        cta: 'Знайти професійну чистку',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Сестра знайшла гігієніста і записала мене. Це був найкорисніший подарунок під ялинкою.',
      },
      stepsSection: {
        microLabel: 'ДО БАНТА',
        title: 'Як обрати чистку, яка справді потішить',
        cards: [
          { num: '01', title: 'Спершу бережність', desc: 'Дивіться, чи пишуть про делікатну чистку, а не про біль «про всяк випадок».' },
          { num: '02', title: 'Зрозумійте, що входить у візит', desc: 'Ультразвук, Airflow і навчання чищенню мають бути названі до візиту.' },
          { num: '03', title: 'Залиште годину в січні', desc: 'У хороших клінік слоти відкриваються одразу після свят. Запис може бути частиною подарунка.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ДВА ФОРМАТИ',
        title: 'Лише чистка чи чистка разом зі стоматологом?',
        boxes: [
          {
            title: 'Лише професійна чистка',
            desc: 'Для того, хто й так ходить до стоматолога, але професійну чистку все відкладає.',
            points: ['Зрозумілий і обмежений подарунок', 'Без тиску на зайве лікування', 'Одразу свіжіше відчуття'],
          },
          {
            title: 'Гігієна в стоматологічній клініці',
            desc: 'Якщо хочете, щоб після чистки був короткий огляд лікаря того ж дня.',
            points: ['Одна адреса, два кроки', 'Знахідки не губляться між кабінетами', 'Простіше призначити, що далі'],
          },
        ],
      },
      faqs: [
        { q: 'Чи підходить чистка в подарунок кожному?', a: 'Більшості дорослих — так. При дуже чутливих яснах або гострому болю добріше спершу короткий візит до стоматолога, а гігієну записати за його порадою.' },
        { q: 'Як подарувати, щоб це не прозвучало як критика?', a: 'Скажіть, що це турбота, яку ви самі оцінили. Додайте профіль клініки і запропонуйте записати час.' },
      ],
      bottomCta: {
        microLabel: 'СВІЖИЙ СТАРТ РОКУ',
        title: 'Подаруйте чистку, яка має сенс і в січні.',
        btn: 'Порівняти гігієну на Medhub',
      },
    }),
    page({
      slug: 'gift-health-checkup',
      theme: 'gift',
      giftScene: {
        focus: 'checkup',
        captions: ['Подарунок — здоров’я', 'Спокійний огляд', 'План на новий рік'],
      },
      seoTitle: 'Подаруйте здоров’я на Новий рік і Різдво | Огляд у лікаря | Medhub',
      seoDescription:
        'Найкращий подарунок на Новий рік і Різдво — здоров’я. Знайдіть лікаря для профілактичного огляду у Словаччині за відгуками пацієнтів.',
      microLabel: 'ПОДАРУНОК • ЗДОРОВ’Я',
      heroTitle: 'Найкращий подарунок на Новий рік і Різдво — здоров’я.',
      heroSubtitle:
        'Не ще один светр. Спокійний профілактичний огляд у лікаря, якому довіряють, — подарунок, який лишається і після свят.',
      trustText: 'Лікарі, до яких пацієнти повертаються',
      heroAnchor: 'Як подарувати огляд',
      motionCard: {
        title: 'Який огляд даруєте?',
        liveBadge: 'Перевірені відгуки',
        tabA: 'Спеціалісти',
        tabB: 'Клініки',
        typingQuery: 'Профілактичний огляд • Братислава',
        searchBtn: 'Шукати',
        sampleRows: [
          { name: 'MUDr. Peter Kolár', meta: 'Терапевт • Братислава', rating: '★ 4.9 (214)' },
          { name: 'Klinika Jeden deň', meta: 'Чекап за один ранок • Нітра', rating: '★ 4.8 (167)' },
        ],
      },
      valueSection: {
        microLabel: 'ТУРБОТА НА ВЕСЬ РІК',
        title: 'Здоров’я не загортається. Йому можна призначити дату.',
        text: 'Подаруйте конкретного лікаря: того, хто пояснює результати, не поспішає і чия клініка тримає час запису. Такий подарунок довший за свята.',
        cta: 'Знайти лікаря для огляду',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Замість парфумів мені подарували огляд. У січні я була рада, що він уже є.',
      },
      stepsSection: {
        microLabel: 'ПОДАРУНОК БЕЗ ТИСКУ',
        title: 'Як обрати огляд, який підійде',
        cards: [
          { num: '01', title: 'Почніть із того, що відкладають', desc: 'Терапевт, дерматолог або внутрішній чекап — даруйте те, що роками чекає «потім».' },
          { num: '02', title: 'Перевірте страховку і доплату', desc: 'У договірних лікарів база часто покрита. У приватного пакета ціна має бути ясна заздалегідь.' },
          { num: '03', title: 'Залиште час на розмову', desc: 'У відгуках шукайте зрозумілі пояснення і клініку, яка не зсуває запис.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ДВА ПОДАРУНКИ, ОДИН СЕНС',
        title: 'Звичайна профілактика чи огляд за один ранок?',
        boxes: [
          {
            title: 'Візит до договірного лікаря',
            desc: 'Найприродніший подарунок тому, хто роками пропускав профілактику.',
            points: ['База часто через VšZP, Dôvera або Union', 'Далі — аналізи й призначення', 'Лікар, до якого можна повернутися'],
          },
          {
            title: 'Приватний чекап за ранок',
            desc: 'Якщо хочете подарувати спокійний ранок: аналізи, ЕКГ і підсумок без поїздок містом.',
            points: ['Точний час без черги', 'Результати в одному місці', 'Чистий старт року'],
          },
        ],
      },
      faqs: [
        { q: 'Чи не надто особистий подарунок — лікар?', a: 'Вирішує тон. «Хочу, щоб рік був спокійним» звучить інакше, ніж «тобі час перевіритись». Конкретний лікар і пропозиція піти разом пом’якшують подарунок.' },
        { q: 'Що, якщо свій лікар уже є?', a: 'Тоді даруйте не нову людину, а сам візит: допомогу із записом, дорогу або нагадування про той огляд, який усе відкладають.' },
      ],
      bottomCta: {
        microLabel: 'НОВИЙ РІК',
        title: 'Подаруйте здоров’я, у якого є ім’я й адреса.',
        btn: 'Обрати лікаря на Medhub',
      },
    }),
  ],

  de: [
    page({
      slug: 'gift-dental-visit',
      theme: 'gift',
      giftScene: {
        focus: 'visit',
        captions: ['Ein Zahnarztbesuch', 'Ein behutsamer Zahnarzt', 'Termin im Januar'],
      },
      seoTitle: 'Einen Zahnarztbesuch schenken | Geschenk zu Weihnachten | Medhub',
      seoDescription:
        'Das beste Geschenk zu Weihnachten und Neujahr ist ein ruhiger Besuch bei einem vertrauenswürdigen Zahnarzt. Kliniken in der Slowakei anhand von Patientenbewertungen vergleichen.',
      microLabel: 'GESCHENK • WEIHNACHTEN UND NEUJAHR',
      heroTitle: 'Das schönste Geschenk unterm Baum ist ein ruhiges Lächeln.',
      heroSubtitle:
        'Statt eines weiteren Dings im Schrank: ein Zahnarztbesuch bei jemandem, den Patienten als behutsam und verständlich beschreiben.',
      trustText: 'Zahnärzte, die Patienten weiterempfehlen',
      heroAnchor: 'So wählen Sie dieses Geschenk',
      motionCard: {
        title: 'Für wen suchen Sie einen Zahnarzt?',
        liveBadge: 'Geschenkauswahl',
        tabA: 'Fachärzte',
        tabB: 'Kliniken',
        typingQuery: 'Zahnarzt • Bratislava',
        searchBtn: 'Suchen',
        sampleRows: [
          { name: 'MDDr. Elena Nováková', meta: 'Zahnerhaltung • Bratislava', rating: '★ 4.9 (128)' },
          { name: 'Smile Atelier', meta: 'Kontrolle ohne Eile • Košice', rating: '★ 4.8 (203)' },
        ],
      },
      valueSection: {
        microLabel: 'EIN GESCHENK, DAS BLEIBT',
        title: 'Der Termin, den man selbst immer verschiebt.',
        text: 'Helfen Sie bei der Zahnarztwahl und der Terminbuchung — so wird aus „irgendwann“ ein Datum. Auf Medhub sehen Sie, wie Patienten Kommunikation, Empfindlichkeit und eine vorher genannte Preisangabe beschreiben.',
        cta: 'Zahnarzt als Geschenk wählen',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Das beste Geschenk war der Termin, den ich allein nie gebucht hätte.',
      },
      stepsSection: {
        microLabel: 'SO VERPACKEN SIE ES',
        title: 'Drei Schritte zu einem Besuch, für den man dankt',
        cards: [
          { num: '01', title: 'Die Stadt der beschenkten Person', desc: 'Bratislava, Košice oder eine kleinere Stadt — die Praxis soll nah an ihrem Zuhause liegen, nicht an Ihrem Büro. Die Entfernung entscheidet oft darüber, ob der Termin wirklich wahrgenommen wird.' },
          { num: '02', title: 'Den ersten Besuch mitlesen', desc: 'Achten Sie darauf, ob ruhig erklärt wird, ob Zahnarztangst ernst genommen wird und ob der erste Termin ein Gespräch bleibt und nicht gleich ein großer Eingriff.' },
          { num: '03', title: 'Einen nächsten Schritt schenken', desc: 'Ein Profil-Link, Hilfe bei der Buchung oder ein Januartermin, den Sie gemeinsam vereinbaren. Das Geschenk wirkt, wenn es ein Datum hat, nicht nur eine gute Absicht.' },
        ],
      },
      comparisonSection: {
        microLabel: 'WAS GENAU SCHENKEN',
        title: 'Nur Kontrolle oder gleich Behandlung?',
        boxes: [
          {
            title: 'Die erste Kontrolle als Geschenk',
            desc: 'Die universellste Variante. Der Zahnarzt schaut und schlägt einen Plan vor, ohne auf einen großen Eingriff zu drängen.',
            points: ['Auch nach Jahren ohne Zahnarzt passend', 'Kein Raten, was behandelt werden muss', 'Der Folgetermin wird in Ruhe vereinbart'],
          },
          {
            title: 'Wenn Sie das Anliegen schon kennen',
            desc: 'Empfindlichkeit, eine alte Füllung, eine lange aufgeschobene Kontrolle — wählen Sie eine Praxis, die Patienten als behutsam beschreiben.',
            points: ['Betäubung in den Bewertungen erwähnt', 'Preis vor Behandlungsbeginn', 'Prophylaxe in derselben Klinik'],
          },
        ],
      },
      faqs: [
        { q: 'Ist ein Zahnarztbesuch ein passendes Weihnachtsgeschenk?', a: 'Ja, wenn er als Fürsorge und nicht als Vorwurf ankommt. Ein konkretes Profil und das Angebot, gemeinsam hinzugehen, machen den Unterschied.' },
        { q: 'Ist ein Termin im Januar sinnvoll?', a: 'Gerade der Januar passt: Die Feiertage sind vorbei, und der Vorsatz hat ein echtes Datum.' },
      ],
      bottomCta: {
        microLabel: 'UNTERM BAUM',
        title: 'Schenken Sie einen Zahnarztbesuch, dem man vertrauen kann.',
        btn: 'Zahnarzt auf Medhub finden',
      },
    }),
    page({
      slug: 'gift-dental-hygiene',
      theme: 'gift',
      giftScene: {
        focus: 'hygiene',
        captions: ['Reinigung als Geschenk', 'Frischeres Gefühl', 'Plan fürs neue Jahr'],
      },
      seoTitle: 'Professionelle Zahnreinigung schenken | Weihnachtsgeschenk | Medhub',
      seoDescription:
        'Professionelle Zahnreinigung als Geschenk zu Weihnachten und Neujahr. Prophylaxe in der Slowakei anhand von Patientenbewertungen vergleichen.',
      microLabel: 'GESCHENK • ZAHNREINIGUNG',
      heroTitle: 'Schenken Sie eine Reinigung, nach der das Lächeln wirklich frischer ist.',
      heroSubtitle:
        'Professionelle Dentalhygiene ist ein praktisches Geschenk: Sie entfernt, was die Zahnbürste nicht schafft, und lässt einen klaren Plan fürs Jahr.',
      trustText: 'Hygienikerinnen und Kliniken mit Empfehlung',
      heroAnchor: 'Worauf Sie vor dem Schenken achten',
      motionCard: {
        title: 'Sie suchen eine Reinigung als Geschenk?',
        liveBadge: 'Geprüfte Profile',
        tabA: 'Fachärzte',
        tabB: 'Kliniken',
        typingQuery: 'Dentalhygiene • Bratislava',
        searchBtn: 'Suchen',
        sampleRows: [
          { name: 'Hygiena Studio Dunaj', meta: 'Airflow und Ultraschall • Bratislava', rating: '★ 4.9 (156)' },
          { name: 'MDDr. Lucia Horváthová', meta: 'Behutsame Reinigung • Žilina', rating: '★ 4.8 (91)' },
        ],
      },
      valueSection: {
        microLabel: 'EIN KLEINES RITUAL',
        title: 'Die Reinigung, die das ganze Jahr wartet.',
        text: 'Eine professionelle Reinigung vorzuschlagen ist leicht anzunehmen, wenn Sie auch bei der Klinikwahl helfen. In Bewertungen zählen ein behutsamer Umgang mit empfindlichen Zahnhälsen, eine Erklärung der Pflege zu Hause und ein Preis im Voraus.',
        cta: 'Professionelle Reinigung finden',
        ctaHrefSuffix: '/clinics',
        reviewQuote: 'Meine Schwester fand eine Hygienikerin und buchte den Termin. Das Nützlichste unterm Baum.',
      },
      stepsSection: {
        microLabel: 'VOR DER SCHLEIFE',
        title: 'So wählen Sie eine Reinigung, die freut',
        cards: [
          { num: '01', title: 'Zuerst die Behutsamkeit', desc: 'Achten Sie auf Hinweise zu schonender Reinigung, nicht auf Schmerz „zur Sicherheit“.' },
          { num: '02', title: 'Wissen, was der Termin umfassen sollte', desc: 'Ultraschall, Airflow und eine Putzanleitung sollten vor dem Termin genannt sein.' },
          { num: '03', title: 'Eine Stunde im Januar freihalten', desc: 'Gute Praxen öffnen Termine direkt nach den Feiertagen. Die Buchung kann Teil des Geschenks sein.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ZWEI FORMATE',
        title: 'Nur Reinigung oder Reinigung mit Zahnarzt?',
        boxes: [
          {
            title: 'Nur die professionelle Reinigung',
            desc: 'Für jemanden, der zum Zahnarzt geht, die professionelle Reinigung aber immer verschiebt.',
            points: ['Ein klares, begrenztes Geschenk', 'Kein Druck zu weiterer Behandlung', 'Sofort ein frischeres Gefühl'],
          },
          {
            title: 'Hygiene in der Zahnklinik',
            desc: 'Wenn nach der Reinigung noch eine kurze Kontrolle am selben Tag folgen soll.',
            points: ['Eine Adresse, zwei Schritte', 'Befunde bleiben an einem Ort', 'Der nächste Termin ist leichter'],
          },
        ],
      },
      faqs: [
        { q: 'Passt eine professionelle Reinigung als Geschenk für jeden?', a: 'Für die meisten Erwachsenen ja. Bei sehr empfindlichem Zahnfleisch oder akuten Schmerzen ist zuerst ein kurzer Zahnarztbesuch die freundlichere Variante.' },
        { q: 'Wie schenkt man das, ohne kritisch zu klingen?', a: 'Sagen Sie, dass es Fürsorge ist, die Sie selbst geschätzt haben. Legen Sie das Klinikprofil bei und bieten Sie an, den Termin zu buchen.' },
      ],
      bottomCta: {
        microLabel: 'FRISCHER JAHRESSTART',
        title: 'Schenken Sie eine Reinigung, die im Januar noch zählt.',
        btn: 'Hygiene auf Medhub vergleichen',
      },
    }),
    page({
      slug: 'gift-health-checkup',
      theme: 'gift',
      giftScene: {
        focus: 'checkup',
        captions: ['Gesundheit ist das Geschenk', 'Eine ruhige Kontrolle', 'Ein Plan fürs Jahr'],
      },
      seoTitle: 'Gesundheit zu Weihnachten schenken | Vorsorge beim Arzt | Medhub',
      seoDescription:
        'Das beste Geschenk zu Weihnachten und Neujahr ist Gesundheit. Finden Sie einen Arzt für die Vorsorge in der Slowakei anhand von Patientenbewertungen.',
      microLabel: 'GESCHENK • GESUNDHEIT',
      heroTitle: 'Das beste Geschenk zu Weihnachten und Neujahr ist Gesundheit.',
      heroSubtitle:
        'Nicht noch ein Pullover. Eine ruhige Vorsorge bei einem Arzt, dem Menschen vertrauen, bleibt länger als die Feiertage.',
      trustText: 'Ärztinnen und Ärzte, zu denen Patienten zurückkehren',
      heroAnchor: 'So schenken Sie eine Vorsorge',
      motionCard: {
        title: 'Welche Untersuchung schenken Sie?',
        liveBadge: 'Geprüfte Bewertungen',
        tabA: 'Fachärzte',
        tabB: 'Kliniken',
        typingQuery: 'Vorsorge • Bratislava',
        searchBtn: 'Suchen',
        sampleRows: [
          { name: 'MUDr. Peter Kolár', meta: 'Allgemeinmedizin • Bratislava', rating: '★ 4.9 (214)' },
          { name: 'Klinika Jeden deň', meta: 'Check-up an einem Vormittag • Nitra', rating: '★ 4.8 (167)' },
        ],
      },
      valueSection: {
        microLabel: 'FÜRSORGE FÜRS GANZE JAHR',
        title: 'Gesundheit lässt sich nicht einpacken. Man kann ihr einen Termin geben.',
        text: 'Schenken Sie eine konkrete Ärztin oder einen konkreten Arzt: jemand, der Befunde erklärt, sich Zeit nimmt und dessen Praxis die Uhrzeit hält.',
        cta: 'Arzt für die Vorsorge finden',
        ctaHrefSuffix: '/specialists',
        reviewQuote: 'Statt Parfüm bekam ich eine Vorsorge. Im Januar war ich froh darüber.',
      },
      stepsSection: {
        microLabel: 'EIN GESCHENK OHNE DRUCK',
        title: 'So wählen Sie eine Untersuchung, die passt',
        cards: [
          { num: '01', title: 'Beim Aufgeschobenen beginnen', desc: 'Hausarzt, Hautarzt oder internistischer Check-up — schenken Sie das, was seit Jahren „später“ wartet.' },
          { num: '02', title: 'Kasse und Zuzahlung prüfen', desc: 'Bei Vertragsärzten ist die Basis oft gedeckt. Ein Privatpaket nennt den Preis vorher.' },
          { num: '03', title: 'Zeit für das Gespräch lassen', desc: 'In Bewertungen zählen klare Erklärungen und eine Praxis, die den Termin einhält.' },
        ],
      },
      comparisonSection: {
        microLabel: 'ZWEI GESCHENKE, EIN SINN',
        title: 'Klassische Vorsorge oder ein Vormittag in der Klinik?',
        boxes: [
          {
            title: 'Besuch bei einem Vertragsarzt',
            desc: 'Das natürlichste Geschenk für jemanden, der die Vorsorge jahrelang ausgelassen hat.',
            points: ['Basis oft über VšZP, Dôvera oder Union', 'Anschluss an Labor und Rezepte', 'Eine Ärztin, zu der man zurückkann'],
          },
          {
            title: 'Privater Check-up an einem Vormittag',
            desc: 'Wenn Sie einen ruhigen Morgen schenken wollen: Labor, EKG und Abschluss ohne Wege durch die Stadt.',
            points: ['Feste Uhrzeit ohne Wartezimmer', 'Befunde an einem Ort', 'Ein klarer Start ins Jahr'],
          },
        ],
      },
      faqs: [
        { q: 'Ist ein Arztbesuch als Geschenk zu persönlich?', a: 'Der Ton entscheidet. „Ich wünsche dir ein ruhiges Jahr“ klingt anders als „du solltest dich untersuchen lassen“. Ein konkreter Name und das Angebot, mitzugehen, halten es freundlich.' },
        { q: 'Was, wenn schon ein Hausarzt da ist?', a: 'Dann schenken Sie nicht eine neue Person, sondern den Termin: Hilfe bei der Buchung, die Fahrt oder eine Erinnerung an die Untersuchung, die immer wartet.' },
      ],
      bottomCta: {
        microLabel: 'NEUES JAHR',
        title: 'Schenken Sie Gesundheit mit Namen und Adresse.',
        btn: 'Arzt auf Medhub wählen',
      },
    }),
  ],
};
