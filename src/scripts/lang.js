'use strict';

import { swiper } from './index';

document.addEventListener('DOMContentLoaded', () => {
  const dictionary = {
    uk: {
      'hero.list.item.aboutme': 'Про мене',
      'hero.list.item.aboutpay': 'Як оплачувати',
      'hero.list.item.reviews': 'Відгуки',
      'hero.list.item.blogs': 'Блог',
      'hero.list.item.contact': 'Контакти',
      'hero.txt': 'Ваш тревел агент',
      'hero.title': 'Тетяна Ломакіна',
      'hero.description':
        'Знаходжу найкоротший шлях від запитання «де відпочити» до відповіді!',
      'hero.link.btn': 'Підбір та супроводження вашої подорожі!',
      'about.aboutme': 'Про мене',
      'about.list.item.aboutme':
        'Вітаю Вас, дорогий відвідувач сайту! Мене звуть Тетяна Ломакіна. Я займаюся туристичною діяльністю з 2000 року. Тобто, мій досвід роботи більше 20 років.',
      'about.list.item.agency':
        'З березня 2013 року я працюю як приватний підприємець - Агенція IGtours (Individual & Group tours).',
      'about.list.item.description':
        'За цей час встигла відвідати 37 країн та деякі не один раз. Я дуже люблю свою роботу та люблю людей, постійно працюю над собою та вдосконалюю свої знання.',
      'about.list.item.partnership':
        'З багатьма клієнтами підтримаємо дружні стосунки i в нас вже співтовариство! 🙂',
      'about.list.item.mission':
        'Основна моя місія - найти коротший шлях від запитання - де відпочити- до відповіді! До відповіді, яка задовольнить замовника та зробить щасливими обидві сторони 🙂!',
      'about.list.item.wishes':
        'Кожна нова подорож робить нас трошки іншими. То нехай ми будемо змінюватися тільки на краще!',
      'payment.title.pay': 'Як оплачувати',
      'payment.list.item.pay':
        'Після того як ми знайшли найкращий варіант відпочинку, виникає питання його оплати.',
      'payment.list.item.aboutpay':
        'Оплата за тур приймається виключно в національній валюті (гривня). Для банківських карток, номінованих в інших валютах курс конвертації визначається платіжною системою та Вашим банком.',
      'payment.list.item.qr': `Чи скористайтесь
    QR code (через Приват24)`,
      'payment.list.item.transfer': 'Реквізити компанії IGTours',
      'payment.list.item.transfer.provider':
        'Постачальник: ФОП Ломакіна Тетяна Володимирівна',
      'payment.list.item.transfer.check':
        'Розрахунковий рахунок: UA613052990000026009050251687',
      'payment.list.item.transfer.bank': 'Банк: ПриватБанк, МФО: 305299',
      'payment.list.item.transfer.number':
        'Індивідуальний податковий номер (ІПН): 2646412208',
      'payment.list.item.transfer.phone': `Контактний телефон:`,
      'reviews.title': 'Відгуки',
      'blogs.title': 'Блог',
      'footer.contact': 'Контакти:',
      'swiper.description':
        'Безумно понравилось обслуживание и предоставленный тур! Спасибо ОГРОМНОЕ! Всем советую!',
      'swiper.time': 'Август 2017',
      'blogs.text.spices': `Я давно перестала в качестве сувениров и мелких подарков
    своим многочисленным родственникам и друзьям привозить
    магнитики. Вместо памятных магнитов из разных стран я
    стала привозить специи. Не новость, что именно специи
    «делают» кухню! Продукты для приготовления блюд в разных
    странах примерно одинаковые, но с разными специями одно и
    то же блюдо «звучит» по-разному! Вот для того, чтобы легко
    и приятно дать возможность дорогим сердцу людям
    попробовать новую страну на вкус, я и вывела формулу
    идеального сувенира. Вы можете сказать, что сейчас на
    полках наших местных магазинов огромный выбор специй и нет
    смысла везти их из-за границы - соглашусь, но только
    отчасти. Да и дело ведь именно в приятных мелочах, из
    которых, собственно, и состоит наша жизнь))) Итак: что
    откуда везём? Из Венгрии, конечно, паприку. Из Греции,
    Кипра, Италии - масса готового разнотравья в
    разнокалиберных расфасовках (выбирайте уже по принципу
    цена-качество, благо, выбор огромен и усё вкусное!)
    Основная добавка к болгарским салатам - это шарена соль
    (пёстрая соль - смесь мелкой соли и специй, в которых явно
    чувствуется красный молотый перец и чебрец). Вкус на
    любителя, конечно, но мне понравился. Из Таиланда
    привозила сухой лемонграсс - добавляем его в томатный суп
    - мммм - объедение! напоминаю, на любителя)) Можно
    запоминать названия перед поездкой или приобрести специи
    на месте и уже в комплекте - это Ваш выбор, но подарок
    выходит славный.`,
      'blogs.text.history': `Я всегда любила историю…Историю, как предмет, который
    преподают и истории, как рассказы, которые увлекают и
    уносят в прошлое. Но есть история, в которую можно
    окунуться в реальности, почувствовать её энергетику! Честь
    и хвала археологам! Раскопки начались в 1869 году и
    ведутся до сих пор! Эфес - античный город в турецком
    Эгейском регионе близ современного города Сельчук.
    Обнаруженные в ходе археологических раскопок руины
    позволяют проследить его историю со времен Древней Греции
    и Римской империи, когда он был важным торговым центром
    Средиземноморья, до эпохи распространения христианства. К
    юго-западу от Сельчука находится популярное место
    паломничества - Дом Богородицы, в котором, как считается,
    провела последние годы жизни Дева Мария. Как любой крупный
    культурный город, Эфес имел свой Театр. И именно по
    размерам Театра - а он вмещает более 20000 человек!!! -
    историки смогли представить размеры города! Большой театр
    в Эфесе построен на холме, устоял после многочисленных
    землетрясений, обладает очень хорошей акустикой, что
    позволяет проводить здесь разнообразные концерты и
    мероприятия в наше время. Я посетила выступление
    танцевального коллектива «Огни Анатолии» в Аспендосе
    (недалеко от г.Сиде, Анталийское побережье). Теперь буду
    следить за афишей театра в Эфесе* Отдыхая в Бодруме,
    Измире или Кушадасы, можно посетить мероприятия, которые
    здесь будут проводиться. Сентябрь и октябрь- самое
    комфортное время, чтобы совместить отдых на побережье и
    экскурсии. Путешествуйте! Мир прекрасен!`,
      'blogs.text.istanbul': `Дорогие мои! Ни для кого не секрет, что самостоятельное
    путешествие радует, дарит ощущение невероятной свободы и
    здорово бодрит с Тем, кто заказывает у меня авиатуры в
    Стамбул, да и вообще туры)), всегда подробно рассказываю о
    том, что знаю из собственного опыта и профессионального
    опыта многих лет работы . И вот мне пришла в голову
    мысль поделиться одной любопытной маленькой подробностью
    д. Речь о пункте выхода к трансферам в аэропорту Стамбула.
     Конечно, это «мелочь» С. Многим она уже хорошо
    знакома... • Но вдруг кому-то пригодится и облегчит жизнь!
    Итак. Поподробнее Новый аэропорт Стамбула реально
    огромный. От трапа самолёта до выхода из аэропорта идти
    достаточно долго. Даже не сколько идти, сколько идти +
    постоять в нескольких очередях!!! В зале выхода из
    аэропорта наша цель - дверь номер 13. Здесь место посадки
    на трансфер. • Мы идём по аэропорту. Проходим паспортный
    контроль, забираем багаж. Видим большой зал, двери, над
    ними цифры- номера выходов. Напоминаю. Нам нужен 13 номер.
    Вот сейчас, когда пишу текст, это уже кажется простым и
    очевидным. Даже смешным.А тогда мы прилетели ночью.
    Устали. Да и сонные уже... итак. Есть Цифра 12.... Есть
    радостное возбуждение!!! Сейчас будет выход…. проходим ещё
    несколько метров и ... Цифра 14. Стоп ...неужели мы
    НАСТОЛЬКО сонные? Может невнимательные? Может цифры
    другого размера? Разобрались не сразу!!! И потом об этом
    моменте я рассказывала туристам ОБЯЗАТЕЛЬНО!!! Над выходом
    13- цифра указана со стороны улицы  - то есть выход
    есть, а Цифры искомой не видно. Если этого не знать, можно
    догадаться, конечно. Но и понервничать тоже можно
    Предупреждён - значит вооружён! Этот пункт пройден! Далее
    великолепный город Путешествуйте! Мир прекрасен!`,
      'blogs.text.musicians': `«Памятник Бременским музыкантам»- один из самых популярных
    памятников Старого города Риги.
    Выполнен он бременским скульптором Кристой Баумгертель,
    преподнесён Риге в дар городом-побратимом Бременом и
    установлен в 1990 году. По легенде, если потереть нос осла
    и загадать желание, оно обязательно сбудется. Самое
    сокровенное желание исполняет петух, дотянуться до
    которого сложнее всего. То есть,у меня есть ещё две
    попытки. Путешествуйте! Мир прекрасен!`,
      'blogs.text.city': `Как влюбиться в Стамбул Пошаговая инструкция  для тех,
    кто, как и я, летит в первый раз: На поселиться в
    исторической части города - Султанахмет; посетить открытые
    на данный момент достопримечательности - Топкапы Палас,
    Айя-София. Голубая Мечеть ещё на реставрации, Цистерна
    Базилика тоже закрыта. . Гид нам показал альтернативное
    водохранилище . Смотрела видеообзоры блоггеров о нем и
    всё равно и не факт, что нашла бы. Вход в него через
    магазин ковров  ;
    .погулять в городских парках и фотографировать 1 тюльпаны
    ₽ . Мы были только в парке Гюльхане. Он находится в
    Султанахмете. На обязательно  советую посетить Долмабахче
    - дворец османских султанов на европейской стороне
    Босфора. девушки приезжают туда с реквизитом (набором
    платьев ) и делают классные фотосессии §s_ Входные билеты:
    по Основному зданию 90 лир, Только Гарем 60 лир, а
    Основное здание +Гарем - 120 лир . Оплачиваете входной
    билет ( и аудиогид берёте бесплатно ( ! в залог потребуют
    паспорт или права, но мы видели и просто денежный
    эквивалент  очень ! советую прокатиться по Босфору (есть
    вечерние прогулки с ужином, мы выбрали дневное время) а
    и... 1100 ! ! конечно же, кююююшать Причем, мы ели и в
    ресторанах с очень приличным чеком ) , и тестировали
    местную уличную еду (балык экмек- скумбрия с резаным
    салатом и луком в булке за 20 лир) - всё ВКУСНО и
    ещё дикий, необузданный шопинг . А если серьезно, чем бы
    вы ни заняли своё время в этом прекрасном городе, вы
    вернётесь наполненные позитивом Путешествуйте! Мир
    прекрасен!`,
    },
    en: {
      'hero.list.item.aboutme': 'About me',
      'hero.list.item.aboutpay': 'How to pay',
      'hero.list.item.reviews': 'Reviews',
      'hero.list.item.blogs': 'Blog',
      'hero.list.item.contact': 'Contacts',
      'hero.txt': 'Your travel agent',
      'hero.title': 'Tatiana Lomakina',
      'hero.description':
        'I find the shortest way from the question «where to rest»  to the answer!',
      'hero.link.btn': 'Selection and support of your trip!',
      'about.aboutme': 'About me',
      'about.list.item.aboutme':
        'Greetings, dear site visitor! My name is Tatyana Lomakina. I have been engaged in tourism since 2000. That is, my work experience is more than 20 years.',
      'about.list.item.agency':
        'Since March 2013, I have been working as a private entrepreneur - Igtours Agency (Individual & Group tours).',
      'about.list.item.description':
        'During this time, she managed to visit 37 countries and some more than once. I love my work and people, I am constantly working on myself and improving my knowledge.',
      'about.list.item.partnership':
        'We will maintain friendly relations with many customers and we already have a community! 🙂',
      'about.list.item.mission':
        'My main mission is to find a shorter way from the question - where to rest - to the answer! To the answer that will satisfy the customer and make both parties happy 🙂!',
      'about.list.item.wishes':
        'Each new journey makes us a little different. So let us change only for the better!',
      'payment.title.pay': 'How to pay',
      'payment.list.item.pay':
        'After we have found the best vacation option, the question of paying for it arises.',
      'payment.list.item.aboutpay':
        'Payment for the tour is accepted exclusively in the national currency (hryvnia). For bank cards denominated in other currencies, the conversion rate is determined by the payment system and your bank.',
      'payment.list.item.qr': `Do you use the QR code?
    (via Privat24)`,
      'payment.list.item.transfer': 'Details of the IGTours company',
      'payment.list.item.transfer.provider':
        'Supplier: FOP Lomakina Tetyana Volodymyrivna',
      'payment.list.item.transfer.check':
        'Розрахунковий рахунок: UA613052990000026009050251687',
      'payment.list.item.transfer.bank': 'Bank: PrivatBank, MFO: 305299',
      'payment.list.item.transfer.number':
        'Individual tax number (TIN): 2646412208',
      'payment.list.item.transfer.phone': `Contact phone number:`,
      'reviews.title': 'Reviews',
      'blogs.title': 'Blog',
      'footer.contact': 'Contacts:',
      'swiper.description':
        'I really liked the service and the provided tour! Thank you HUGE! I advise everyone!',
      'swiper.time': 'August 2017',
      'blogs.text.spices': `I stopped making souvenirs and small gifts a long time ago
    brings to his numerous relatives and friends
    magnets Instead of souvenir magnets from different countries, I
    she started bringing spices. It is not news that it is spices
    they "do" the kitchen! Products for cooking different dishes
    countries are approximately the same, but with different spices
    the same dish "sounds" differently! That's to make it easy
    and it is nice to give an opportunity to dear people
    to taste a new country, I derived the formula
    an ideal souvenir. You can say that now
    There is a huge selection of spices on the shelves of our local stores
    it makes sense to take them from abroad - I agree, but only
    partly And it's all about pleasant little things, iz
    which, in fact, our life consists of))) Itak:
    where are we taking it from? From Hungary, of course, paprika. From Greece
    Cyprus, Italy - a mass of ready-made herbs in
    different-caliber packages (choose according to the principle
    price-quality, goodness, the selection is huge and everything is delicious!)
    The main additive to Bulgarian salads is layered salt
    (variegated salt is a mixture of fine salt and spices, which clearly
    you can feel red ground pepper and thyme). Taste on
    amateur, of course, but I liked it. From Thailand
    I brought dry lemongrass - we add it to tomato soup
    - mmmm - union! I remind you, for an amateur)) It is possible
    remember the names before the trip or buy spices
    in place and already complete - it's your choice, but a gift
    comes out glorious.`,
      'blogs.text.history': `I have always loved history...History as a subject that
    they also teach stories, as well as stories that attract people
    carried into the past. But there is a story in which it is possible
    plunge into reality, feel its energy! Honor
    and praise to archaeologists! Excavations began in 1869 and
    still going on! c Ephesus - ancient city in Turkish
    In the Aegean region near the modern city of Selchuk.
    Ruins discovered during archaeological excavations
    allow us to trace its history since the times of Ancient Greece
    and the Roman Empire, when it was an important trade center
    Mediterranean, before the era of the spread of Christianity. K
    There is a popular place southwest of Selcuk
    pilgrimage - the House of the Virgin, in which, as it is believed,
    Virgin Mary spent the last years of her life. Like any big one
    A cultural city, Ephesus had its own theater. And precisely by
    the size of the Theater - and it can accommodate more than 20,000 people!!! -
    historians were able to present the dimensions of the city! Bolshoi Theater
    in Ephesus, built on a hill, it stood after many
    earthquake, has very good acoustics, что
    allows various concerts to be held here, etc
    events in our time. I visited the performance
    dance group "Lights of Anatolia" in Aspendos
    (not far from Side, Antalya coast). I will now
    follows the posters of the theater in Ephesus Rest in Bodrum,
    Izmir or Kusadasi, you can visit events that
    will be held here. September and October are the same
    comfortable time to combine rest on the coast and
    excursions Travel! The world is beautiful!`,
      'blogs.text.istanbul': `My dear! It is no secret to anyone that it is independent
    travel makes you happy, gives you a feeling of incredible freedom, etc
    It's great to cheer up those who order air tours from me
    Istanbul, and even tours in general)), I always tell about it in detail
    what I know from my own and professional experience
    experience of many years of work. And now it occurred to me
    thought to share one curious little detail
    d. We are talking about the exit point for transfers at Istanbul airport.
     Of course, this is a "trifle" of S. It is already good for many
    an acquaintance... But suddenly someone will find it useful and make life easier!
    So. More details The new airport of Istanbul is real
    huge Go from the plane ramp to the airport exit
    long enough Not even how much to go, how much to go +
    stand in several queues!!! In the exit hall
    At the airport, our goal is door number 13. This is the boarding place
    for transfer. • We are walking through the airport. We pass the passport office
    control, we take the luggage. We can see a large hall, doors, above
    they are exit numbers. I remind We need number 13.
    Now, when I write the text, it already seems simple
    obvious Even funny. And then we arrived at night.
    Tired Yes, and sleepy already... so. Yes Digit 12.... Yes
    joyful excitement!!! Now there will be a way out... we pass more
    a few meters and ... Number 14. Stop) are we really?
    SO sleepy? Maybe inattentive? Maybe numbers
    second size? We didn't figure it out right away!!! And then about that
    moment I told the tourists MUST!!! Above the exit
    13 - the number is indicated from the side of the street e) - that is, the exit
    yes, but the numbers you are looking for are not visible. If you don't know this, you can
    will guess, of course. But it is also possible to get nervous
    Warned means armed! This point is passed! Next
    magnificent city Travel! The world is beautiful!`,
      'blogs.text.musicians': `"Monument to Bremen Musicians" is one of the most popular
    monuments of the Old Town of Riga. Must do photo place.
    It was made by the Bremen sculptor Christoy Baumgertel,
    presented to Riga as a gift by the sister city of Bremen and
    established in 1990. According to legend, if you rub the donkey's nose
    and make a wish, it will surely come true. Same thing
    a cock fulfills a secret desire, reach for
    which is the most difficult. That is, I have two more
    demand Travel! The world is beautiful!`,
      'blogs.text.city': `How to fall in love with Istanbul Step-by-step instructions  for those
    who, like me, is flying for the first time: Na will settle in
    the historical part of the city - Sultanahmet; visit open
    at the moment the attractions are Topkapi Palace,
    Hagia Sophia. The Blue Mosque is still under restoration, the Cistern
    The basilica is also closed. . The guide showed us an alternative
    reservoir . I watched video reviews of bloggers about him
    all the same, it is not a fact that she would have found it. Entrance to it through
    carpet shop  ; watch my amateur video
    .walk in city parks and photograph 1 tulips
    . We were only in Gulhane Park. He is located in
    Sultanahmet For sure! I advise you to visit Dolmabahçe
    - the palace of the Ottoman sultans on the European side
    Bosphorus. girls come there with props (set
    dresses) and make cool photo sessions Entrance tickets:
    for the main building 90 lira, only Harem 60 lira, a
    Main building + Harem - 120 lira . You pay the entrance fee
    you get the ticket (and the audio guide for free (! a deposit is required
    passport or license, but we saw it and just [s] money
    equivalent ! I advise you to take a ride along the Bosphorus (ie
    evening walks with dinner, we chose daytime) a
    and... 1100! ! of course, they eat. Moreover, we also ate in
    restaurants with a very decent check) and tested
    local street food (balyk ekmek - mackerel with cut
    salad and onion in a bun for 20 lira) - everything is TASTY ! and and
    even more wild, unbridled shopping Sh And if seriously, what would it be
    You took your time in this beautiful city, you
    come back filled with positivity Travel! Peace
    beautiful!`,
    },
  };

  const wrapper = document.querySelector('.swiper-wrapper');
  let language = 'en';

  function changeLang(lang) {
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach((element) => {
      element.innerText = dictionary[lang][element.getAttribute('data-lang')];
    });
  }

  const button = document.querySelector('.button');

  button.addEventListener('click', () => {
    switch (language) {
      case 'en':
        changeLang('en');
        language = 'uk';
        button.innerText = 'UK';
        break;

      case 'uk':
        changeLang('uk');
        language = 'en';
        button.innerText = 'EN';

        break;

      default:
        break;
    }

    swiper.update();
  });
});
