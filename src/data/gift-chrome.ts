import type { Locale } from './landings';

export const GIFT_CHROME: Record<
  Locale,
  {
    visit: {
      cardEyebrow: string;
      cardFor: string;
      cardFrom: string;
      cardName: string;
      cardGiver: string;
      cardNote: string;
      whoLabel: string;
    };
    hygiene: {
      duration: string;
      ritualLabel: string;
      receiptLabel: string;
      sparkleNote: string;
    };
    checkup: {
      letterLabel: string;
      calendarLabel: string;
      month: string;
      marked: string;
      pathLabel: string;
    };
  }
> = {
  sk: {
    visit: {
      cardEyebrow: 'Lekár, ktorého vyberiete za nich',
      cardFor: 'Pre',
      cardFrom: 'Vaša pomoc',
      cardName: 'blízkeho človeka',
      cardGiver: 'nájsť zubára a dohodnúť termín',
      cardNote: 'Darček je návšteva, nie kartička. Medhub pomáha vybrať lekára podľa recenzií.',
      whoLabel: 'Komu to dáva zmysel',
    },
    hygiene: {
      duration: '45–60 minút v kresle',
      ritualLabel: 'Ako prebieha hodina',
      receiptLabel: 'Čo má dobré čistenie obsahovať',
      sparkleNote: 'Bez sľubu „bielych zubov za hodinu“. Iba čisté, pokojné čistenie.',
    },
    checkup: {
      letterLabel: 'Ako to povedať, keď darujete starostlivosť',
      calendarLabel: 'Január má dátum, nielen predsavzatie',
      month: 'Január',
      marked: 'voľný termín',
      pathLabel: 'Dve cesty k tomu istému darčeku',
    },
  },
  en: {
    visit: {
      cardEyebrow: 'A dentist you choose for them',
      cardFor: 'For',
      cardFrom: 'You help by',
      cardName: 'someone you care about',
      cardGiver: 'finding a dentist and booking the visit',
      cardNote: 'The gift is the appointment, not a card. Medhub is how you pick the dentist.',
      whoLabel: 'Who this gift fits',
    },
    hygiene: {
      duration: '45–60 minutes in the chair',
      ritualLabel: 'What the hour looks like',
      receiptLabel: 'What a good cleaning includes',
      sparkleNote: 'No “whiter in an hour” promise. Just a calm, thorough clean.',
    },
    checkup: {
      letterLabel: 'How to offer care without making it a lecture',
      calendarLabel: 'January needs a date, not only a resolution',
      month: 'January',
      marked: 'open slot',
      pathLabel: 'Two routes to the same present',
    },
  },
  ru: {
    visit: {
      cardEyebrow: 'Врач, которого вы выбираете за них',
      cardFor: 'Кому',
      cardFrom: 'Ваша помощь',
      cardName: 'близкого человека',
      cardGiver: 'найти стоматолога и записаться',
      cardNote: 'Подарок — визит, а не карточка. Medhub помогает выбрать врача по отзывам.',
      whoLabel: 'Кому это к месту',
    },
    hygiene: {
      duration: '45–60 минут в кресле',
      ritualLabel: 'Как проходит час',
      receiptLabel: 'Что должно быть в хорошей чистке',
      sparkleNote: 'Без обещания «белизны за час». Только спокойная, тщательная чистка.',
    },
    checkup: {
      letterLabel: 'Как предложить заботу, а не нотацию',
      calendarLabel: 'Январю нужна дата, а не только обещание',
      month: 'Январь',
      marked: 'свободный слот',
      pathLabel: 'Два пути к одному подарку',
    },
  },
  ua: {
    visit: {
      cardEyebrow: 'Лікар, якого ви обираєте за них',
      cardFor: 'Кому',
      cardFrom: 'Ваша допомога',
      cardName: 'близької людини',
      cardGiver: 'знайти стоматолога і записатися',
      cardNote: 'Подарунок — візит, а не картка. Medhub допомагає обрати лікаря за відгуками.',
      whoLabel: 'Кому це доречно',
    },
    hygiene: {
      duration: '45–60 хвилин у кріслі',
      ritualLabel: 'Як минає година',
      receiptLabel: 'Що має бути в хорошій чистці',
      sparkleNote: 'Без обіцянки «білизни за годину». Лише спокійна, ретельна чистка.',
    },
    checkup: {
      letterLabel: 'Як запропонувати турботу, а не нотацію',
      calendarLabel: 'Січню потрібна дата, а не лише обіцянка',
      month: 'Січень',
      marked: 'вільний слот',
      pathLabel: 'Два шляхи до одного подарунка',
    },
  },
  de: {
    visit: {
      cardEyebrow: 'Ein Zahnarzt, den Sie für sie wählen',
      cardFor: 'Für',
      cardFrom: 'Ihre Hilfe',
      cardName: 'einen nahen Menschen',
      cardGiver: 'Zahnarzt finden und Termin vereinbaren',
      cardNote: 'Das Geschenk ist der Besuch, keine Karte. Medhub hilft bei der Arztwahl anhand von Bewertungen.',
      whoLabel: 'Für wen das passt',
    },
    hygiene: {
      duration: '45–60 Minuten im Stuhl',
      ritualLabel: 'So läuft die Stunde',
      receiptLabel: 'Was zu einer guten Reinigung gehört',
      sparkleNote: 'Kein Versprechen „weiß in einer Stunde“. Nur eine ruhige, gründliche Reinigung.',
    },
    checkup: {
      letterLabel: 'Wie man Fürsorge anbietet, ohne zu belehren',
      calendarLabel: 'Der Januar braucht ein Datum, nicht nur einen Vorsatz',
      month: 'Januar',
      marked: 'freier Termin',
      pathLabel: 'Zwei Wege zum selben Geschenk',
    },
  },
};
