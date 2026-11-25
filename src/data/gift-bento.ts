import type { Locale } from './landings';
import type { BentoExtras } from './bento-extras';

const block = (copy: BentoExtras): BentoExtras => copy;

export const GIFT_BENTO: Record<Locale, Record<string, BentoExtras>> = {
  sk: {
    'gift-dental-visit': block({
      visualLabels: {
        pins: ['Bratislava • darček', 'Košice • 4.9★', 'Žilina • január'],
        bar1: 'Pokojné vysvetlenie',
        bar2: 'Cena povedaná vopred',
        badges: ['✓ Overený zubár', '★ Šetrný prvý kontakt', '⏱ Termín po sviatkoch'],
      },
      marqueeItems: [
        { quote: 'Sestra mi našla zubára a konečne som šla bez výčitiek.', author: 'Nina R.', tag: 'Bratislava • Prehliadka' },
        { quote: 'Lekárka všetko vysvetlila skôr, než čokoľvek začala.', author: 'Adam K.', tag: 'Košice • Stomatológia' },
        { quote: 'Januárový termín bol súčasť darčeka. Presne to som potreboval.', author: 'Filip S.', tag: 'Žilina • Prvá návšteva' },
        { quote: 'Žiadny tlak na veľký zákrok, len jasný plán na ďalšie mesiace.', author: 'Sofia M.', tag: 'Trnava • Kontrola' },
      ],
      tabsSection: {
        microLabel: 'KOMU DARČEK SADNE',
        title: 'Tri situácie, v ktorých má prehliadka zmysel',
        tabs: [
          { id: 'years', label: 'Roky bez zubára', headline: 'Návrat bez zahanbenia', desc: 'Darujte prehliadku niekomu, kto odkladá prvý krok. Dobrý lekár začína rozhovorom, nie výčitkou.', metrics: ['Prvá návšteva bez veľkého zákroku', 'Plán rozdelený na kroky', 'Priestor povedať o strachu'] },
          { id: 'family', label: 'Partner alebo rodič', headline: 'Spoločný termín je polovica darčeka', desc: 'Ponuka ísť spolu alebo vybaviť objednanie zjemní aj praktický darček.', metrics: ['Konkrétny profil lekára', 'Termín blízko ich domova', 'Jasná správa, čo darujete'] },
          { id: 'january', label: 'Novoročný reštart', headline: 'Január je lepší ako „niekedy“', desc: 'Sviatočný darček dostane dátum hneď po Novom roku, kým predsavzatie ešte drží.', metrics: ['Voľné hodiny po sviatkoch', 'Prevencia skôr ako bolesť', 'Nadväznosť na hygienu'] },
        ],
      },
    }),
    'gift-dental-hygiene': block({
      visualLabels: {
        pins: ['Airflow • 4.9★', 'Ultrazvuk • šetrne', 'Január • voľné'],
        bar1: 'Šetrnosť pri citlivosti',
        bar2: 'Jasný rozsah ceny',
        badges: ['✓ Šetrné čistenie', '★ Inštruktáž doma', '⏱ Hodina po sviatkoch'],
      },
      marqueeItems: [
        { quote: 'Čistenie bolo jemné aj pri citlivých krčkoch. Skvelý darček.', author: 'Hana P.', tag: 'Bratislava • Hygiena' },
        { quote: 'Vopred mi povedali, čo je v cene. Žiadne prekvapenie pri platbe.', author: 'Richard T.', tag: 'Košice • Airflow' },
        { quote: 'Po čistení som dostala jednoduchý plán, ako čistiť doma.', author: 'Eva L.', tag: 'Žilina • Dentálna hygiena' },
        { quote: 'Januárový termín bol voľný a celý darček mal hneď zmysel.', author: 'Michal B.', tag: 'Nitra • Hygiena' },
      ],
      tabsSection: {
        microLabel: 'ČO JE V DARČEKU',
        title: 'Akú hygienu ľudia oceňujú najviac',
        tabs: [
          { id: 'gentle', label: 'Šetrné čistenie', headline: 'Citlivosť nie je dôvod čistenie odkladať', desc: 'Pacienti chvália hygieničky, ktoré tempo prispôsobia a bolesť neberú ako samozrejmosť.', metrics: ['Jemný ultrazvuk', 'Prestávka, keď treba', 'Poznámka o citlivosti v recenzii'] },
          { id: 'airflow', label: 'Airflow a povlak', headline: 'To, čo zubná kefka necháva', desc: 'Airflow dopĺňa ultrazvuk tam, kde ide o povlak z kávy, čaju a medzizubných priestorov.', metrics: ['Viditeľne sviežejší pocit', 'Medzizubné priestory', 'Bez sľubov „bielych zubov za hodinu“'] },
          { id: 'home', label: 'Plán domov', headline: 'Darček pokračuje aj po ambulancii', desc: 'Najlepšia hygiena končí krátkou inštruktážou, nie iba lesklým povrchom.', metrics: ['Technika kefky', 'Medzizubné kefky', 'Kedy prísť znova'] },
        ],
      },
    }),
    'gift-health-checkup': block({
      visualLabels: {
        pins: ['Praktický lekár • 4.9★', 'Check-up • 1 deň', 'Január • pokoj'],
        bar1: 'Čas na vysvetlenie',
        bar2: 'Dodržaný termín',
        badges: ['✓ Prevencia ako dar', '★ Pokojná ambulancia', '⏱ Výsledky pokope'],
      },
      marqueeItems: [
        { quote: 'Namiesto vecí som dostala prehliadku. V januári som bola vďačná.', author: 'Jana V.', tag: 'Bratislava • Prevencia' },
        { quote: 'Lekár si sadol a prešiel výsledky bez ponáhľania.', author: 'Ondrej H.', tag: 'Nitra • Check-up' },
        { quote: 'Konečne termín u všeobecného lekára, ktorý roky odkladám.', author: 'Kristína D.', tag: 'Košice • Praktický lekár' },
        { quote: 'Všetko v jedno dopoludnie, bez behania po meste.', author: 'Samuel A.', tag: 'Bratislava • Súkromný balík' },
      ],
      tabsSection: {
        microLabel: 'KOMU ZDRAVIE SADNE',
        title: 'Tri spôsoby, ako darovať prehliadku',
        tabs: [
          { id: 'gp', label: 'Všeobecný lekár', headline: 'Základ, ktorý sa odkladá najľahšie', desc: 'Preventívna návšteva u zmluvného lekára je tichý a praktický darček na celý rok.', metrics: ['Poisťovne VšZP, Dôvera, Union', 'Nadväznosť na odbery', 'Lekár, ku ktorému sa dá vrátiť'] },
          { id: 'day', label: 'Jeden deň', headline: 'Pokojné dopoludnie namiesto zoznamu úloh', desc: 'Súkromný check-up spojí vyšetrenia tak, aby darček neznamenal tri cesty po meste.', metrics: ['Presný čas', 'EKG, odbery, záver', 'Digitálna správa'] },
          { id: 'tone', label: 'Tón darčeka', headline: 'Starostlivosť, nie úloha', desc: 'Darček funguje, keď znie ako prianie pokojného roka a nie ako kontrola.', metrics: ['Konkrétne meno lekára', 'Ponuka ísť spolu', 'Termín, ktorý vybavíte vy'] },
        ],
      },
    }),
  },
  en: {
    'gift-dental-visit': block({
      visualLabels: {
        pins: ['Bratislava • gift', 'Košice • 4.9★', 'Žilina • January'],
        bar1: 'A calm explanation',
        bar2: 'Price named first',
        badges: ['✓ A trusted dentist', '★ Gentle first visit', '⏱ A slot after the holidays'],
      },
      marqueeItems: [
        { quote: 'My sister found me a dentist and I finally went without the guilt.', author: 'Nina R.', tag: 'Bratislava • Check-up' },
        { quote: 'She explained everything before anything started.', author: 'Adam K.', tag: 'Košice • Dentistry' },
        { quote: 'The January slot was part of the gift. That was the point.', author: 'Filip S.', tag: 'Žilina • First visit' },
        { quote: 'No push toward a big procedure, just a clear plan.', author: 'Sofia M.', tag: 'Trnava • Review' },
      ],
      tabsSection: {
        microLabel: 'WHO IT SUITS',
        title: 'Three moments when a dental visit is the right gift',
        tabs: [
          { id: 'years', label: 'Years away', headline: 'A return without embarrassment', desc: 'Gift the visit to someone stuck on the first step. A good dentist starts with a conversation.', metrics: ['A first visit without a large procedure', 'A plan split into steps', 'Room to mention anxiety'] },
          { id: 'family', label: 'Partner or parent', headline: 'Booking it together is half the gift', desc: 'An offer to go along, or to make the appointment, softens a practical present.', metrics: ['A named dentist profile', 'A clinic near their home', 'A clear note about what you are giving'] },
          { id: 'january', label: 'A January reset', headline: 'January beats “sometime”', desc: 'The holiday gift gets a date right after New Year, while the intention still holds.', metrics: ['Hours open after the holidays', 'Prevention before pain', 'A path into hygiene'] },
        ],
      },
    }),
    'gift-dental-hygiene': block({
      visualLabels: {
        pins: ['Airflow • 4.9★', 'Ultrasonic • gentle', 'January • open'],
        bar1: 'Care with sensitivity',
        bar2: 'A clear price',
        badges: ['✓ A gentle cleaning', '★ Home-care lesson', '⏱ An hour after the holidays'],
      },
      marqueeItems: [
        { quote: 'The cleaning stayed gentle on sensitive teeth. A genuinely good gift.', author: 'Hana P.', tag: 'Bratislava • Hygiene' },
        { quote: 'They named what was included before I paid. No surprise.', author: 'Richard T.', tag: 'Košice • Airflow' },
        { quote: 'Afterwards I left with a simple plan for brushing at home.', author: 'Eva L.', tag: 'Žilina • Dental hygiene' },
        { quote: 'The January hour was free, so the gift worked immediately.', author: 'Michal B.', tag: 'Nitra • Hygiene' },
      ],
      tabsSection: {
        microLabel: 'INSIDE THE GIFT',
        title: 'The kind of cleaning people are glad to receive',
        tabs: [
          { id: 'gentle', label: 'A gentle clean', headline: 'Sensitivity is not a reason to postpone', desc: 'Patients praise hygienists who match the pace and do not treat discomfort as normal.', metrics: ['A light ultrasonic pass', 'A pause when needed', 'Sensitivity mentioned in reviews'] },
          { id: 'airflow', label: 'Airflow and plaque', headline: 'What the toothbrush leaves behind', desc: 'Airflow complements ultrasonic cleaning where coffee, tea, and the spaces between teeth collect.', metrics: ['A fresher feeling', 'Between the teeth', 'No promise of “white in an hour”'] },
          { id: 'home', label: 'A plan for home', headline: 'The gift continues after the clinic', desc: 'The best hygiene ends with a short lesson, not only a polished surface.', metrics: ['Brush technique', 'Interdental brushes', 'When to come back'] },
        ],
      },
    }),
    'gift-health-checkup': block({
      visualLabels: {
        pins: ['GP • 4.9★', 'Check-up • 1 day', 'January • calm'],
        bar1: 'Time to explain',
        bar2: 'The slot was kept',
        badges: ['✓ Prevention as a gift', '★ An unhurried clinic', '⏱ Results together'],
      },
      marqueeItems: [
        { quote: 'Instead of things, I got a check-up. In January I was grateful.', author: 'Jana V.', tag: 'Bratislava • Prevention' },
        { quote: 'The doctor sat down and walked through the results without rushing.', author: 'Ondrej H.', tag: 'Nitra • Check-up' },
        { quote: 'Finally a GP visit I had postponed for years.', author: 'Kristína D.', tag: 'Košice • General practice' },
        { quote: 'Everything in one morning, without crossing the city.', author: 'Samuel A.', tag: 'Bratislava • Private package' },
      ],
      tabsSection: {
        microLabel: 'WHO IT FITS',
        title: 'Three ways to gift a check-up',
        tabs: [
          { id: 'gp', label: 'A GP visit', headline: 'The basic visit that is easiest to delay', desc: 'A preventive appointment with a contracted doctor is a quiet, practical gift for the year.', metrics: ['VšZP, Dôvera, or Union', 'A path into lab work', 'A doctor they can return to'] },
          { id: 'day', label: 'One morning', headline: 'A calm morning instead of a task list', desc: 'A private check-up gathers the tests so the gift is not three trips across town.', metrics: ['A fixed time', 'ECG, labs, a summary', 'A digital report'] },
          { id: 'tone', label: 'The tone', headline: 'Care, not an assignment', desc: 'The gift works when it sounds like a wish for a calm year, not a check on them.', metrics: ['A named doctor', 'An offer to go along', 'A date you help to book'] },
        ],
      },
    }),
  },
  ru: {
    'gift-dental-visit': block({
      visualLabels: {
        pins: ['Братислава • подарок', 'Кошице • 4.9★', 'Жилина • январь'],
        bar1: 'Спокойное объяснение',
        bar2: 'Цена названа заранее',
        badges: ['✓ Проверенный стоматолог', '★ Бережный первый визит', '⏱ Слот после праздников'],
      },
      marqueeItems: [
        { quote: 'Сестра нашла мне стоматолога, и я наконец пошла без чувства вины.', author: 'Нина Р.', tag: 'Братислава • Осмотр' },
        { quote: 'Врач всё объяснила до того, как что-либо началось.', author: 'Адам К.', tag: 'Кошице • Стоматология' },
        { quote: 'Январская запись была частью подарка. В этом и смысл.', author: 'Филип С.', tag: 'Жилина • Первый визит' },
        { quote: 'Никакого давления на большое лечение, только понятный план.', author: 'София М.', tag: 'Трнава • Контроль' },
      ],
      tabsSection: {
        microLabel: 'КОМУ ЭТО ПОДХОДИТ',
        title: 'Три ситуации, когда визит к стоматологу — удачный подарок',
        tabs: [
          { id: 'years', label: 'Годы без врача', headline: 'Вернуться без стыда', desc: 'Дарите осмотр тому, кто застрял на первом шаге. Хороший врач начинает с разговора.', metrics: ['Первый визит без большого лечения', 'План по шагам', 'Можно сказать о страхе'] },
          { id: 'family', label: 'Партнёр или родители', headline: 'Запись вместе — половина подарка', desc: 'Предложение пойти вместе или оформить запись делает практичный подарок мягче.', metrics: ['Конкретный профиль врача', 'Клиника рядом с их домом', 'Понятно, что именно вы дарите'] },
          { id: 'january', label: 'Январский старт', headline: 'Январь лучше, чем «когда-нибудь»', desc: 'Праздничный подарок получает дату сразу после Нового года, пока намерение ещё живо.', metrics: ['Часы после праздников', 'Профилактика до боли', 'Дальше можно гигиену'] },
        ],
      },
    }),
    'gift-dental-hygiene': block({
      visualLabels: {
        pins: ['Airflow • 4.9★', 'Ультразвук • бережно', 'Январь • есть время'],
        bar1: 'Бережность при чувствительности',
        bar2: 'Понятный состав цены',
        badges: ['✓ Бережная чистка', '★ Урок домашнего ухода', '⏱ Час после праздников'],
      },
      marqueeItems: [
        { quote: 'Чистка была мягкой даже при чувствительных зубах. Хороший подарок.', author: 'Хана П.', tag: 'Братислава • Гигиена' },
        { quote: 'До оплаты сказали, что входит в цену. Без сюрприза.', author: 'Рихард Т.', tag: 'Кошице • Airflow' },
        { quote: 'После чистки я ушла с простым планом, как чистить дома.', author: 'Ева Л.', tag: 'Жилина • Гигиена' },
        { quote: 'Январский час был свободен, и подарок сразу заработал.', author: 'Михал Б.', tag: 'Нитра • Гигиена' },
      ],
      tabsSection: {
        microLabel: 'ЧТО ВНУТРИ ПОДАРКА',
        title: 'Какую чистку люди рады получить',
        tabs: [
          { id: 'gentle', label: 'Бережная чистка', headline: 'Чувствительность — не повод откладывать', desc: 'Пациенты хвалят гигиенистов, которые подстраивают темп и не считают дискомфорт нормой.', metrics: ['Мягкий ультразвук', 'Пауза, если нужно', 'Чувствительность в отзывах'] },
          { id: 'airflow', label: 'Airflow и налёт', headline: 'То, что остаётся после щётки', desc: 'Airflow дополняет ультразвук там, где собираются кофе, чай и промежутки между зубами.', metrics: ['Более свежее ощущение', 'Межзубные промежутки', 'Без обещания «белизны за час»'] },
          { id: 'home', label: 'План домой', headline: 'Подарок продолжается после клиники', desc: 'Хорошая гигиена заканчивается коротким уроком, а не только гладкой поверхностью.', metrics: ['Техника щётки', 'Межзубные ёршики', 'Когда прийти снова'] },
        ],
      },
    }),
    'gift-health-checkup': block({
      visualLabels: {
        pins: ['Терапевт • 4.9★', 'Чекап • 1 день', 'Январь • спокойно'],
        bar1: 'Время объяснить',
        bar2: 'Запись не сдвинули',
        badges: ['✓ Профилактика в подарок', '★ Спокойный кабинет', '⏱ Результаты вместе'],
      },
      marqueeItems: [
        { quote: 'Вместо вещей мне подарили осмотр. В январе я была благодарна.', author: 'Яна В.', tag: 'Братислава • Профилактика' },
        { quote: 'Врач сел и спокойно разобрал результаты.', author: 'Ондрей Х.', tag: 'Нитра • Чекап' },
        { quote: 'Наконец визит к терапевту, который я откладывала годами.', author: 'Кристина Д.', tag: 'Кошице • Терапевт' },
        { quote: 'Всё за одно утро, без поездок по городу.', author: 'Самуэл А.', tag: 'Братислава • Частный пакет' },
      ],
      tabsSection: {
        microLabel: 'КОМУ ЭТО ПОДХОДИТ',
        title: 'Три способа подарить осмотр',
        tabs: [
          { id: 'gp', label: 'Терапевт', headline: 'Базовый визит, который легче всего отложить', desc: 'Профилактика у договорного врача — тихий и практичный подарок на год.', metrics: ['VšZP, Dôvera или Union', 'Дальше анализы', 'Врач, к которому можно вернуться'] },
          { id: 'day', label: 'Одно утро', headline: 'Спокойное утро вместо списка дел', desc: 'Частный чекап собирает обследования так, чтобы подарок не превратился в три поездки.', metrics: ['Точное время', 'ЭКГ, анализы, итог', 'Цифровой отчёт'] },
          { id: 'tone', label: 'Тон подарка', headline: 'Забота, а не задание', desc: 'Подарок работает, когда звучит как пожелание спокойного года, а не проверка.', metrics: ['Имя врача', 'Предложение пойти вместе', 'Дата, которую вы помогаете забронировать'] },
        ],
      },
    }),
  },
  ua: {
    'gift-dental-visit': block({
      visualLabels: {
        pins: ['Братислава • подарунок', 'Кошице • 4.9★', 'Жиліна • січень'],
        bar1: 'Спокійне пояснення',
        bar2: 'Ціна названа заздалегідь',
        badges: ['✓ Перевірений стоматолог', '★ Бережний перший візит', '⏱ Слот після свят'],
      },
      marqueeItems: [
        { quote: 'Сестра знайшла мені стоматолога, і я нарешті пішла без почуття провини.', author: 'Ніна Р.', tag: 'Братислава • Огляд' },
        { quote: 'Лікарка все пояснила до того, як щось почалося.', author: 'Адам К.', tag: 'Кошице • Стоматологія' },
        { quote: 'Січневий запис був частиною подарунка. У цьому й сенс.', author: 'Філіп С.', tag: 'Жиліна • Перший візит' },
        { quote: 'Жодного тиску на велике лікування, лише зрозумілий план.', author: 'Софія М.', tag: 'Трнава • Контроль' },
      ],
      tabsSection: {
        microLabel: 'КОМУ ЦЕ ПІДХОДИТЬ',
        title: 'Три ситуації, коли візит до стоматолога — вдалий подарунок',
        tabs: [
          { id: 'years', label: 'Роки без лікаря', headline: 'Повернутися без сорому', desc: 'Даруйте огляд тому, хто застряг на першому кроці. Хороший лікар починає з розмови.', metrics: ['Перший візит без великого лікування', 'План кроками', 'Можна сказати про страх'] },
          { id: 'family', label: 'Партнер або батьки', headline: 'Запис разом — половина подарунка', desc: 'Пропозиція піти разом або оформити запис робить практичний подарунок м’якшим.', metrics: ['Конкретний профіль лікаря', 'Клініка біля їхнього дому', 'Зрозуміло, що саме ви даруєте'] },
          { id: 'january', label: 'Січневий старт', headline: 'Січень кращий за «колись»', desc: 'Святковий подарунок отримує дату одразу після Нового року, поки намір ще живий.', metrics: ['Години після свят', 'Профілактика до болю', 'Далі можна гігієну'] },
        ],
      },
    }),
    'gift-dental-hygiene': block({
      visualLabels: {
        pins: ['Airflow • 4.9★', 'Ультразвук • бережно', 'Січень • є час'],
        bar1: 'Бережність при чутливості',
        bar2: 'Зрозумілий склад ціни',
        badges: ['✓ Бережна чистка', '★ Урок домашнього догляду', '⏱ Година після свят'],
      },
      marqueeItems: [
        { quote: 'Чистка була м’якою навіть при чутливих зубах. Хороший подарунок.', author: 'Хана П.', tag: 'Братислава • Гігієна' },
        { quote: 'До оплати сказали, що входить у ціну. Без сюрпризу.', author: 'Ріхард Т.', tag: 'Кошице • Airflow' },
        { quote: 'Після чистки я пішла з простим планом, як чистити вдома.', author: 'Єва Л.', tag: 'Жиліна • Гігієна' },
        { quote: 'Січнева година була вільна, і подарунок одразу запрацював.', author: 'Міхал Б.', tag: 'Нітра • Гігієна' },
      ],
      tabsSection: {
        microLabel: 'ЩО ВСЕРЕДИНІ ПОДАРУНКА',
        title: 'Яку чистку люди раді отримати',
        tabs: [
          { id: 'gentle', label: 'Бережна чистка', headline: 'Чутливість — не привід відкладати', desc: 'Пацієнти хвалять гігієністів, які підлаштовують темп і не вважають дискомфорт нормою.', metrics: ['М’який ультразвук', 'Пауза, якщо треба', 'Чутливість у відгуках'] },
          { id: 'airflow', label: 'Airflow і наліт', headline: 'Те, що лишається після щітки', desc: 'Airflow доповнює ультразвук там, де збираються кава, чай і проміжки між зубами.', metrics: ['Свіжіше відчуття', 'Міжзубні проміжки', 'Без обіцянки «білизни за годину»'] },
          { id: 'home', label: 'План додому', headline: 'Подарунок триває після клініки', desc: 'Хороша гігієна закінчується коротким уроком, а не лише гладкою поверхнею.', metrics: ['Техніка щітки', 'Міжзубні йоржики', 'Коли прийти знову'] },
        ],
      },
    }),
    'gift-health-checkup': block({
      visualLabels: {
        pins: ['Терапевт • 4.9★', 'Чекап • 1 день', 'Січень • спокійно'],
        bar1: 'Час пояснити',
        bar2: 'Запис не зсунули',
        badges: ['✓ Профілактика в подарунок', '★ Спокійний кабінет', '⏱ Результати разом'],
      },
      marqueeItems: [
        { quote: 'Замість речей мені подарували огляд. У січні я була вдячна.', author: 'Яна В.', tag: 'Братислава • Профілактика' },
        { quote: 'Лікар сів і спокійно розібрав результати.', author: 'Ондрей Х.', tag: 'Нітра • Чекап' },
        { quote: 'Нарешті візит до терапевта, який я відкладала роками.', author: 'Крістіна Д.', tag: 'Кошице • Терапевт' },
        { quote: 'Усе за один ранок, без поїздок містом.', author: 'Самуел А.', tag: 'Братислава • Приватний пакет' },
      ],
      tabsSection: {
        microLabel: 'КОМУ ЦЕ ПІДХОДИТЬ',
        title: 'Три способи подарувати огляд',
        tabs: [
          { id: 'gp', label: 'Терапевт', headline: 'Базовий візит, який найлегше відкласти', desc: 'Профілактика в договірного лікаря — тихий і практичний подарунок на рік.', metrics: ['VšZP, Dôvera або Union', 'Далі аналізи', 'Лікар, до якого можна повернутися'] },
          { id: 'day', label: 'Один ранок', headline: 'Спокійний ранок замість списку справ', desc: 'Приватний чекап збирає обстеження так, щоб подарунок не став трьома поїздками.', metrics: ['Точний час', 'ЕКГ, аналізи, підсумок', 'Цифровий звіт'] },
          { id: 'tone', label: 'Тон подарунка', headline: 'Турбота, а не завдання', desc: 'Подарунок працює, коли звучить як побажання спокійного року, а не перевірка.', metrics: ['Ім’я лікаря', 'Пропозиція піти разом', 'Дата, яку ви допомагаєте забронювати'] },
        ],
      },
    }),
  },
  de: {
    'gift-dental-visit': block({
      visualLabels: {
        pins: ['Bratislava • Geschenk', 'Košice • 4.9★', 'Žilina • Januar'],
        bar1: 'Ruhige Erklärung',
        bar2: 'Preis vorab genannt',
        badges: ['✓ Vertrauenswürdiger Zahnarzt', '★ Behutsamer Erstbesuch', '⏱ Termin nach den Feiertagen'],
      },
      marqueeItems: [
        { quote: 'Meine Schwester fand einen Zahnarzt, und ich ging endlich ohne schlechtes Gewissen.', author: 'Nina R.', tag: 'Bratislava • Kontrolle' },
        { quote: 'Sie erklärte alles, bevor irgendetwas begann.', author: 'Adam K.', tag: 'Košice • Zahnmedizin' },
        { quote: 'Der Januartermin war Teil des Geschenks. Genau darum ging es.', author: 'Filip S.', tag: 'Žilina • Erstbesuch' },
        { quote: 'Kein Drängen auf eine große Behandlung, nur ein klarer Plan.', author: 'Sofia M.', tag: 'Trnava • Kontrolle' },
      ],
      tabsSection: {
        microLabel: 'FÜR WEN ES PASST',
        title: 'Drei Situationen, in denen ein Zahnarztbesuch das richtige Geschenk ist',
        tabs: [
          { id: 'years', label: 'Jahre ohne Zahnarzt', headline: 'Zurück ohne Peinlichkeit', desc: 'Schenken Sie die Kontrolle jemandem, der am ersten Schritt hängt. Ein guter Zahnarzt beginnt mit dem Gespräch.', metrics: ['Erstbesuch ohne großen Eingriff', 'Plan in Schritten', 'Raum, Angst zu erwähnen'] },
          { id: 'family', label: 'Partner oder Eltern', headline: 'Gemeinsam buchen ist die halbe Gabe', desc: 'Das Angebot mitzugehen oder den Termin zu machen, macht ein praktisches Geschenk weicher.', metrics: ['Ein konkretes Arztprofil', 'Praxis nah am Zuhause', 'Klar, was Sie schenken'] },
          { id: 'january', label: 'Start im Januar', headline: 'Januar schlägt „irgendwann“', desc: 'Das Festtagsgeschenk bekommt ein Datum direkt nach Neujahr, solange der Vorsatz hält.', metrics: ['Stunden nach den Feiertagen', 'Vorsorge vor dem Schmerz', 'Anschluss an die Hygiene'] },
        ],
      },
    }),
    'gift-dental-hygiene': block({
      visualLabels: {
        pins: ['Airflow • 4.9★', 'Ultraschall • behutsam', 'Januar • frei'],
        bar1: 'Behutsam bei Empfindlichkeit',
        bar2: 'Klarer Preisumfang',
        badges: ['✓ Behutsame Reinigung', '★ Pflege für zu Hause', '⏱ Stunde nach den Feiertagen'],
      },
      marqueeItems: [
        { quote: 'Die Reinigung blieb auch bei empfindlichen Zähnen behutsam. Ein gutes Geschenk.', author: 'Hana P.', tag: 'Bratislava • Hygiene' },
        { quote: 'Vor der Zahlung war klar, was enthalten ist. Keine Überraschung.', author: 'Richard T.', tag: 'Košice • Airflow' },
        { quote: 'Danach ging ich mit einem einfachen Plan für zu Hause.', author: 'Eva L.', tag: 'Žilina • Dentalhygiene' },
        { quote: 'Die Januarstunde war frei, das Geschenk wirkte sofort.', author: 'Michal B.', tag: 'Nitra • Hygiene' },
      ],
      tabsSection: {
        microLabel: 'IM GESCHENK',
        title: 'Welche Reinigung Menschen gern annehmen',
        tabs: [
          { id: 'gentle', label: 'Behutsam', headline: 'Empfindlichkeit ist kein Grund zu warten', desc: 'Patienten loben Hygienikerinnen, die das Tempo anpassen und Unbehagen nicht als normal behandeln.', metrics: ['Sanfter Ultraschall', 'Pause, wenn nötig', 'Empfindlichkeit in Bewertungen'] },
          { id: 'airflow', label: 'Airflow und Belag', headline: 'Was die Zahnbürste lässt', desc: 'Airflow ergänzt den Ultraschall dort, wo Kaffee, Tee und Zahnzwischenräume sich sammeln.', metrics: ['Frischeres Gefühl', 'Zwischen den Zähnen', 'Kein Versprechen „weiß in einer Stunde“'] },
          { id: 'home', label: 'Plan für zu Hause', headline: 'Das Geschenk geht nach der Praxis weiter', desc: 'Gute Hygiene endet mit einer kurzen Anleitung, nicht nur mit einer glatten Oberfläche.', metrics: ['Putztechnik', 'Interdentalbürsten', 'Wann wiederkommen'] },
        ],
      },
    }),
    'gift-health-checkup': block({
      visualLabels: {
        pins: ['Hausarzt • 4.9★', 'Check-up • 1 Tag', 'Januar • ruhig'],
        bar1: 'Zeit zum Erklären',
        bar2: 'Termin eingehalten',
        badges: ['✓ Vorsorge als Geschenk', '★ Ruhige Praxis', '⏱ Befunde zusammen'],
      },
      marqueeItems: [
        { quote: 'Statt Dingen bekam ich eine Vorsorge. Im Januar war ich dankbar.', author: 'Jana V.', tag: 'Bratislava • Vorsorge' },
        { quote: 'Der Arzt setzte sich und ging die Befunde ohne Eile durch.', author: 'Ondrej H.', tag: 'Nitra • Check-up' },
        { quote: 'Endlich der Hausarzttermin, den ich jahrelang verschoben hatte.', author: 'Kristína D.', tag: 'Košice • Allgemeinmedizin' },
        { quote: 'Alles an einem Vormittag, ohne Wege durch die Stadt.', author: 'Samuel A.', tag: 'Bratislava • Privatpaket' },
      ],
      tabsSection: {
        microLabel: 'FÜR WEN ES PASST',
        title: 'Drei Wege, eine Vorsorge zu schenken',
        tabs: [
          { id: 'gp', label: 'Hausarzt', headline: 'Der Basisbesuch, den man am leichtesten schiebt', desc: 'Vorsorge bei einem Vertragsarzt ist ein stilles, praktisches Geschenk fürs Jahr.', metrics: ['VšZP, Dôvera oder Union', 'Anschluss ans Labor', 'Eine Ärztin, zu der man zurückkann'] },
          { id: 'day', label: 'Ein Vormittag', headline: 'Ein ruhiger Morgen statt einer Aufgabenliste', desc: 'Ein privater Check-up bündelt die Untersuchungen, damit das Geschenk nicht drei Wege bedeutet.', metrics: ['Feste Uhrzeit', 'EKG, Labor, Abschluss', 'Digitaler Bericht'] },
          { id: 'tone', label: 'Der Ton', headline: 'Fürsorge, keine Aufgabe', desc: 'Das Geschenk wirkt, wenn es nach einem ruhigen Jahr klingt und nicht nach Kontrolle.', metrics: ['Ein konkreter Name', 'Angebot mitzugehen', 'Ein Termin, den Sie mitbuchen'] },
        ],
      },
    }),
  },
};
