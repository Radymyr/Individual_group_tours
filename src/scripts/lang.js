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

  const enComments = [
    {
      title: 'August 2017',
      name: 'Alla Kravchenko',
      description: `Tanya, we returned from Turkey, there is a crisis in Delphin Deluxe Resort
    did not touch us (there are just fewer tourists in the hotel), everything was like
    always, not top notch, food top notch - out of 10
    days only 1 day there was no red fish!! Everything is cool! Thanks!!`,
    },
    {
      title: 'October 17, 2017',
      name: 'Yana Chaika',
      description: `2 days ago returned with friends from
    Egypt. Rest were satisfied. Behind
    The choice turned to Tanya and did not
    miscalculated. Chose Sharm El Sheikh
    first line of the sea hotel Hilton Sharm
    Sharks Bay 4 * ( in no way inferior to 5 * )
    the territory of the hotel is green and well-groomed,
    spacious. There are many pools
    even a slide, but that's what we went for
    Red sea. Very beautiful
    coral reef and many
    colorful fish. Animation
    great program guys
    well done animators! - sit still
    do not give. In spite of
    internationality of the hotel, relax
    it was fun and not stressful. In the hotel
    traveled to countries such as Italy,
    Spain, Germany, Ukraine, Egypt,
    Kuwait, Belarus. ....the rest are not
    remembered. Didn't want to leave.
    Plan your next vacation
    we will only be with IG tours.`,
    },
    {
      title: 'December 13, 2017',
      name: 'Yakov Shoshyn',
      description:
        'In life, in order to become more successful, you need to know the whole world !!!',
    },
    {
      title: 'November 8, 2017',
      name: 'Lilia Dmitrienko',
      description: `Already four times our holiday was a success and
    all with the help of IGtours and Tatyana personally!
    We returned from Egypt in October.
    Satisfied with the hotel
    location and level of service.
    Tatyana, thank you for the excellent
    recommendations.
    Next time only to you!)`,
    },
    {
      title: 'June 2018',
      name: 'Aa Gm',
      description: `If you want to relax and not think about
    boarding passes, check-in
    flight, transfer, etc., then Tanya is for you
    :) Thanks`,
    },
    {
      title: 'July 2018',
      name: 'Valeria Titenko',
      description: `In the summer of 2015, the family vacationed in
    Greece on the peninsula of Sithonia (tour
    organized IG tours) Rested in
    hotel Athena Pallas Village 5 *.
    Great hotel with great
    territory and three huge
    pools. This is a heavenly place
    amazing sea, pines and
    olive groves. Meals at the hotel
    top notch, eat like a swedish
    table and a la carte restaurant. And of course
    the peninsula of Sithonia itself, with
    crazy beautiful views
    beaches and nature. I advise you to take
    rent a car and drive around
    peninsula.`,
    },
    {
      title: 'October 6, 2019',
      name: 'Vladislav Ryl',
      description: `Dreams Come True! Thank you so much
    for a trip to Manchester: help with
    visa, excellent choice of hotel and
    comfortable flight!`,
    },
    {
      title: 'June 5, 2020',
      name: 'Victoria Poklonskaya',
      description: `
    Holidays in Pattaya, January 2020 Tanyusha huge respect for this hotel!!!! We are very picky travelers. But she could more than please! I am writing after almost 5 months (I gave myself time to cool down from all emotions and our pandemic) D
    Varee Jomtien Beach 4 * is a fairy tale!!!
    The service is beyond praise, the hotel really pulls on 5 *. After reading the hotel reviews, I was expecting a typical Asian hotel (with all
    "gags"), but having settled in the room was pleasantly surprised. The breakfasts are just amazing. The staff is unobtrusively helpful and friendly, the fitness room is simple, but has everything you need. But, we did not go for the sake of the hotel, but the opportunity to visit the elephant farm, the crocodile farm, the famous NonGnuch Park, the Alcazar show (the child was a little shocked). All in all, a great vacation!!!
    Thank you Tanya!!!`,
    },
    {
      title: 'February 5, 2020',
      name: 'Vladislav Panasenko',
      description: `Rested on a combo tour
    Bulgaria + Greece. In Bulgaria, we were in the ski resort of Bansko, in a hotel
    Sport Hotel 9 nights. In Greece in
    Thessaloniki was only 1 day and that was enough).
    In general, we are very satisfied with the trip.
    Thank you very much, we will contact
    You are still vegetative.`,
    },
    {
      title: 'July 12, 2020',
      name: 'Elena Kunak',
      description: `Since September 2019, my husband and I finally flew to Italy for a week K ©!
    We flew to Rimini, lived there all the time, ate, drank, walked, and swam!
    We went on excursions to Rome, Venice, San Marino and Florence.
    Everything was great
    • but 3 hours before the transfer to the airport, a bag with passports was taken from under our noses!!!
    Horror and nightmare!!! I will not retell the details of the adventure, I will only say that our vacation lasted for 4 days!))
    and now I know how to get to the embassy, what Rome looks like in the evening and at night () we already have new passports and we are ready for new Adventures`,
    },
    {
      title: 'February 21, 2020',
      name: 'Tatyana Vasilyeva',
      description: `Came back a week ago from a vacation.
    Zanzibar. Everyone liked it very much!
    Clean and new hotel, beautiful, turquoise sea, water temperature +29, colorful people, fresh and deliciously cooked seafood everywhere.
    All our trips are booked through
    IGtours!
    Tanya thank you very much! You know how to turn dreams into reality!`,
    },
    {
      title: 'July 24, 2020',
      name: 'Ruslana Rudenko',
      description: `Yesterday the family flew back from vacation.
    The hotel we chose exceeded all expectations! Gorgeous park area, turquoise sea, fresh breeze - it's all a guarantee of good emotions! Service at the hotel at a high level: cleaning of rooms, territory.
    We have been taking vacations through IGtours for the 4th year already - always at the highest level!!! Thank you)`,
    },
    {
      title: 'September 18, 2020',
      name: 'Alla Gabueva',
      description: `I wanted a quiet and budget holiday.
    Hotel Kriss lived up to all expectations.
    Cozy and family friendly. Well-groomed territory with many plants, affectionate cats.) Clean pool without much chlorine smell. No frills, good and varied food.
    Clean rooms. Professional and friendly staff. Cozy at home. Refused to take remuneration upon check-in.
    The only downside is that it doesn't have its own beach. Went to the free municipal. Nothing.
    But what views along the way: exotic flowers, white houses, embankment. And the sea smells like watermelon.
    But all good things come to an end quickly: I managed to visit only one excursion: to Pa-Mukkale, which left many pleasant impressions .. and photos.)
    I recommend to those who are not blue blooded.) I promise to return.)
    Many thanks to the organizers - true professionals`,
    },
    {
      title: 'August 09, 2020',
      name: 'Anatoly Grishchenko',
      description: `We are very grateful to IG tours for the clear organization of their work and the high level of professionalism.
    My family and our friends have been working closely with them for more than ten years and very successfully.
    Even in an extremely difficult year for tourism in 2020, Tatyana Vladimirovna promised and perfectly organized a family vacation for us in December in Egypt with her granddaughter.
    She even managed to refund us the cost of taking PCR tests.
    It was very pleasant and unexpected.
    She knows what to offer to whom from her capabilities so that customers are satisfied.
    And the possibilities are not great. For every taste desire and wallet.
    Who wants to fulfill their plans for interesting tours with rest and impressions - we recommend contacting this company IGtours and you will have a successful vacation and everything will be OK !!!
    THANKS, TANECHKA.`,
    },
    {
      title: 'October 16, 2021',
      name: 'Natalia Mishchenko',
      description: `Just got back from Egypt.
    Rested in the hotel "Albatros Vista
    Resort"5*
    My rating for the hotel is 4.5, everything is fine, only there are no fish.
    The food was delicious, the territory is beautiful, especially in the evening, the music is live and singing, the staff is cultural and fast, everything is clean, the beach is gorgeous, not every hotel in Turkey is so big. Fish and the depth of the sea - that's what was missing.
    It's good with little kids.
    And a little more trees will grow up, you can see they just planted.`,
    },
    {
      title: 'November 15, 2021',
      name: 'Vera Katlan',
      description: `My first vacation was in October!
    With the help of a wonderful professional Tatyana Lomakin.
    Chose Latte Beach Hotel
    (Kemer, Turkey).
    Thanks to a well-organized life? helpful staff and beautiful weather 7 days and 7 nights flew by quickly and with impressions (excursions Tahtaly, Pammukale, Demre contributed).
    I took note: in good accompaniment, you can have a great rest at any time of the year!`,
    },
    {
      title: 'July 10, 2020',
      name: 'Andrey Stelmakh',
      description: `Sri Lanka.Amagi Beach Hotel
    Came to this hotel due to quarantine
    China. I had to urgently change direction, and, in general, they did not regret it.
    They compared what they had read about Hainan and the rest in Marawil, once again they were convinced that there would be no happiness, but misfortune would help.
    But the taste and color...
    The hotel is like a hotel, budget, on the ocean, price-quality match.
    The room has everything you need, the Internet is closer to the reception, any request is fulfilled as best they can.
    Refrigerators are in short supply, but they promised, and they brought them a day later. On the day of departure, they asked for scales, to weigh luggage, they brought, however, they did not work.
    But they brought it!
    There is not much entertainment in Marawil.
    Quiet and peaceful village.
    Locals complain about the lack of tourists.
    The owner of the hotel approached our neighbor, asked not to go to other cafes, take excursions only at the hotel.
    She, of course, did the opposite.
    BUT this is so-so, the impression from the hotel and the staff did not spoil.
    We were a little surprised to see a lot of young people from twenty-five and older in the hotel and in Marawil itself.
    They did not look sad and boring, rather, on the contrary.
    Our neighbors are a young couple from
    Peter, they said that they were just happy, after the bustle of the city, the hassle and dampness, to rest for ten days in peace and quiet.
    The most important thing is the OCEAN and the coastal endless strip of sand under the palm trees.
    The hotel has its own beach, you can swim, rinse in the shower by the pool and sit on the terrace near your room or at the tables under the palm trees on the grass.
    There is a pool, but, in my opinion, the pool on the ocean is field hockey and ballet on ice (F. Ranevskaya).
    It is difficult to call the beach to the right of the hotel, no umbrellas, sunbeds, merchants of all sorts of nonsense.
    Only occasionally do fishermen either mend their nets or sort out their catch.
    Locals clean their yards, do some housework, their yards come almost to the ocean.
    Where we often swam, the owner regularly dragged his dog for a swim, for order it rested a little.
    On Road Beach, where the hotel is located, there is a cafe, a few shops (WATER, FRUIT).
    Once a week, a seafood market will be prepared both at the hotel and in any cafe.
    In the center, where the shops are an exchanger and a stop between. city buses, you can take tuk tuks that stand under the hotel, you can, wrote, on foot.
    BUT thirty, forty minutes in the heat is still a pleasure.
    The concept of a good holiday is different for everyone.
    But I do not regret that I had to change the concrete skyscrapers of Dadonghai for the village silence and tranquility of Maravila`,
    },
  ];

  const comments = [
    {
      title: 'Август 2017',
      name: 'Алла Кравченко',
      description: ` Таня, мы вернулись с Турции, в Delphin Deluxe Resort кризис
      нас не коснулся (просто в отеле меньше туристов), все было как
      всегда, не высшем уровне, питание на высшем уровне - из 10
      дней только 1 день не было красной рыбы!! Всё супер, Спасибо!!`,
    },
    {
      title: '17 октября 2017',
      name: 'Яна Чайка',
      description: `2 дня назад вернулись с друзьями из
      Египта. Отдыхом остались довольны. За
      Выбором обратились к Тане и не
      прогадали. Выбрали Шарм Эль Шейх
      первая линия моря отель Hilton Sharm
      Sharks Bay 4 * ( ничем не уступает 5 * )
      территория отеля зелёная ухоженная,
      просторная. Много бассейнов, есть
      даже горка, но то ради чего ехали это
      красное море. Очень красивый
      коралловый риф и множество
      красочных рыбок. Анимационная
      программа отличная -ребята
      аниматоры молодцы! - на месте сидеть
      не дают. Несмотря на
      интернациональность отеля, отдыхать
      было весело и не напряженно. В отеле
      отдыхали такие страны как Италия,
      Испания, Германия, Украина, Египт,
      Кувейт, Беларусь. ….остальных не
      запомнила. Уезжать не хотелось.
      Планировать дальнейший отпуск
      будем только с IG tours.`,
    },
    {
      title: '13 декабря 2017',
      name: 'Yakov Shoshyn',
      description: 'В жизни, чтоб успешней стать нужно целый мир познать !!!',
    },
    {
      title: '8 ноября 2017',
      name: 'Лилия Дмитриенко',
      description: `Уже четыре раза наш отдых удался и
      все с помощью IGtours и лично Татьяны!
      В октябре вернулись из Египта.
      Остались довольны отелем, его
      расположением и уровнем сервиса.
      Татьяна, спасибо за отличные
      рекомендации.
      В следующий раз только к Вам!)`,
    },
    {
      title: 'Июнь 2018',
      name: 'Aa Gm',
      description: `Если хочешь отдыхать, а не думать о
    посадочных талонах, регистрации на
    рейс, трансфере и т.д., Тогда тебе к Тане
    :) Спасибо`,
    },
    {
      title: 'Июль 2018',
      name: 'Валерия Титенко',
      description: `Летом 2015 года семьей отдыхали в
    Греции на полуострове Ситония (тур
    организовывала IG tours) Отдыхали в
    отеле Athena Pallas Village 5*.
    Прекрасный отель с большой
    территорией и тремя огромными
    бассейнами. Это райское местечко с
    изумительным морем, соснами и
    оливковыми рощами. Питание в отеле
    на высшем уровне, есть как шведский
    стол и ресторан Аля-карт. Ну и конечно
    же сам полуостров Ситония, с
    сумашедше-красивыми видами,
    пляжами и природой. Советую брать
    машину в аренду и проехаться по
    полуострову.`,
    },
    {
      title: '6 октября 2019',
      name: 'Владислав Рыль',
      description: `Мечты сбываются! Огромное спасибо
    за поездку в Манчестер: помощь с
    визой, отличный выбор отеля и
    комфортный перелет!`,
    },
    {
      title: '5 июня 2020',
      name: 'Виктория Поклонская',
      description: `Отдых на Патае, январь 2020г. Танюше огромный респект за этот отель!!!! Мы очень требовательные к отелям путешественники. Но она смогла более чем угодить! Пишу спустя почти 5 месяцев (дала время себе остыть от всех эмоций и нашей пандемии) D
    Varee Jomtien Beach 4*- это сказка!!!
    Сервис выше всех похвал, отель реально тянет на 5*. Прочитав отзывы об отеле, я ожидала обычный азиатский отель (со всеми
    "приколами"), но заселившись в номер была приятно удивлена. Завтраки просто потрясающие. Персонал ненавязчиво услужливо-приветлив, фитнес зал простенький, но есть всё необходимое. Но, мы ехали не ради отеля, а возможности побывать на слоновой ферме, на крокодиловой ферме, в знаменитом парке НонГнуч, шоу Альказар (ребенок немного был в шоке). Вообщем отдых удался!!!
    Танюше спасибо!!! `,
    },
    {
      title: '5 февраля 2020',
      name: 'Владислав Панасенко',
      description: `Отдыхали в комбинированном туре
    Болгария + Греция. В Болгарии были на горнолыжном курорте Банско, в отеле
    Sport Hotel 9 ночей. В Греции в
    Салониках были только 1 день и этого было достаточно).
    Вообщем поездкой очень довольны.
    Большое спасибо, будем обращаться к
    Вам ещё.`,
    },
    {
      title: '12 июля 2020',
      name: 'Елена Кунак',
      description: `С сентябре 2019 мы с мужем полетели, наконец, на неделю в Италию К©!
    Прилетели в Римини, там всё время жили, ели-пили, гуляли, и плавали!
    Выезжали на экскурсии в Рим, Венецию, Сан- Марино и Флоренцию.
    Всё было отлично
    • но за 3 часа до трансфера в аэропорт у нас из-под носа увели сумку с паспортами!!!
    Жуть и кошмар!!! Не буду пересказывать детали приключения, скажу только, что наш отпуск продлился на 4 дня!))
    и теперь я знаю как попасть в посольство, как выглядит Рим вечером и ночью() у нас уже новые паспорта и мы готовы к новым Приключениям`,
    },
    {
      title: '21 февраля 2020',
      name: 'Татьяна Васильева',
      description: `Вернулись неделю назад с отдыха из
    Занзибара. Все очень понравилось!
    Чистый и новый отель, море красивенное, бирюзовое, температура воды +29, колоритные люди, везде свежие и вкусно приготовленные морепродукты.
    Все наши поездки бронируем через
    IGtours!
    Танечка спасибо Вам большое! Вы умеете превратить мечты в реальность!`,
    },
    {
      title: '24 июля 2020',
      name: 'Руслана Руденко',
      description: `Вчера семьёй прилетели с отдыха.
    Выбранный нами отель превзошел все ожидания! Шикарная парковая зона, бирюзовое море, свежий бриз - это все залог хороших эмоций! Обслуживание в отеле на высоком уровне: уборка номеров, территории.
    Через IGtours берем отдых уже 4-й год - всегда на высшем уровне!!! Спасибо)`,
    },
    {
      title: '18 сентября 2020',
      name: 'Алла Габуева',
      description: `Хотелось тихого и бюджетного отдыха.
    Отель Kriss оправдал все ожидания.
    Уютно и по-семейному. Ухоженная территория с множеством растений, ласковые кошки.) Чистый бассейн без особого запаха хлора. Без изысков, хорошее и разнообразное питание.
    Чистые комнаты. Профессиональный и доброжелательный персонал. По-домашнему уютно. Отказались брать вознаграждение при заселении.
    Единственный минус- нет собственного пляжа. Ходила на бесплатный муниципальный. Ничего.
    Зато какие виды по пути : экзотические цветы, белые домики, набережная. И море пахнет арбузом.
    Но все хорошее быстро заканчивается : успела побывать только на одной экскурсии: в Па-Муккале, которая оставила много приятных впечатлений.. и фото.)
    Рекомендую тем кто не голубых кровей.) Обещаю вернуться.)
    Огромное спасибо организаторам-настоящим профессионалам`,
    },
    {
      title: '09 августа 2020',
      name: 'Анатолий Грищенко',
      description: `Очень признательны компании IG tours за четкую организацию своей работы и высокий уровень профессионализма.
    Моя семья и наши друзья более десяти лет тесно сотрудничаем с ними и очень удачно.
    Даже в крайне тяжелый для туризма 2020 год Татьяна Владимировна пообещала и прекрасно организовала нам семейный отдых в декабре в Египте с внучкой.
    Она даже сумела вернуть нам расходы на сдачу ПЦР-тестов.
    Было очень приятно и неожиданно.
    Она знает что кому предложить из ее возможностей чтобы клиенты остались довольными.
    А возможности у не огромные. На любой вкус желание и кошелек.
    Кто хочет осуществить свои планы по интересным турам с отдыхом и впечатлениям - рекомендуем обращаться в эту компанию IGtours и успешный отдых вам обеспечен и все будет ОК !!!
    СПАСИБО, ТАНЕЧКА.`,
    },
    {
      title: '16 октября 2021',
      name: 'Наталья Мищенко',
      description: `Только вернулись из Египта.
    Отдыхали в отеле «Albatros Vista
    Resort" 5*
    Моя оценка отелю - 4.5, все хорошо, рыбок только нет.
    Кормили вкусно, территория красивая, особенно вечером, музыка живая и пение , персонал культурный и быстрый, все чисто, пляж шикарный сделали, не в каждом отеле в Турции такой большой. Рыбки и глубина моря - вот чего не хватило.
    С детками маленькими тут хорошо. И немного деревья подрастут ещё, видно только посадили.`,
    },
    {
      title: '15 ноября 2021',
      name: 'Вера Катлан',
      description: `Впервые у меня случился отдых в октябре!
    С помощью замечательного профессионала Ломакина Татьяна.
    Выбрала отель Latte Beach Hotel
    (Кемер, Турция).
    Благодаря хорошо организованному быту? обходительному персоналу и прекрасной погоде 7 дней и 7 ночей пролетели быстро и с впечатлениями (способствовали экскурсии Tahtaly, Pammukale, Demre).
    Взяла на заметку: в хорошем сопровождении можно в любое время года прекрасно отдохнуть!`,
    },
    {
      title: '10 июля 2020',
      name: 'Андрей Стельмах',
      description: `Шри-Ланка.Отель Amagi Beach
    Попали в этот отель из за карантина в
    Китае.Пришлось срочно менять направление, и, вообщем,не пожалели.
    Сравнивали то, что начитались о Хайнане и отдых в Маравиле, лишний раз убедились-не было бы счастья да несчастье помогло.
    Но на вкус и цвет...
    Отель как отель,бюджетный, на берегу океана,цена-качество соответствуют.
    В номере все необходимое, интернет ближе к рецепшен,любую просьбу выполняют, как умеют.
    В дефиците холодильники, но пообещали,и через день принесли.В день отъезда просили весы, взвесить багаж,принесли, правда,они не работали.
    Но ведь принесли!
    В Маравиле развлечений особо и нет.
    Тихая и спокойная деревня.
    Местные жалуются на отсутствие туристов.
    К нашей соседке подходил хозяин отеля, просил в другие кафе не ходить, экскурсии брать только в отеле.
    Она,естественно, все делала наоборот.
    НО это так себе,впечатлнний от отеля и персонала не испортило.
    Мы немного удивились, увидев в отеле и в самой Маравиле очень много молодежи от двадцати пяти и старше.
    Грустными и скучными они не выгля дели,скорее,наоборот.
    Наши соседи-молодая пара из
    Питера-сказали, что они просто счастливы, после городской суеты, нервотрепки и сырости, отдохнуть десять дней в тишине и покое.
    Самое главное-ОКЕАН и прибрежная бесконечная полоса песка под пальмами.
    В отеле есть свой пляж, можно накупаться, сполоснуться под душем у бассейна и сидеть на терассе у своего номера или у столиков под пальмами на траве.
    Есть бассейн, но, по моему, бассейн на берегу океана-это хоккей на траве и балет на льду(Ф.Раневская).
    Пляжем назвать берег справа от отеля трудно, никаких зонтиков, лежаков, торговцев всякой ерундой.
    Только изредка рыбаки или сети чинят, или улов перебирают.
    Местные убираются во дворах,что то делают по хозяйству, их дворы подходят почти к океану.
    Там, где мы часто купались, хозяин регулярно тащил свою собаку купаться, для порядка она немного упиралась.
    На Роуд Бич, где находится отель, есть кафе, немного лавок(ВОДА,ФРУКТЫ).
    Раз в неделю рынок морепродуктов, приготовят и в отеле, и в любом кафе.
    В центр, где магазины обменник и остановка меж. городских автобусов, можно на тук туках, которые стоят под отелем, можно, писали, пешком.
    НО тридцать, сорок минут по жаре-удовольствие еще то.
    Понятие хорошего отдыха у всех свое.
    Но я не жалею, что пришлось менять бетонные высотки Дадунхая на деревенскую тишину и спокойствие Маравилы`,
    },
  ];

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
