// بيانات المشاهير و الفنانين المتعاقدين مع Macula Egypt
const TALENTS = [
  {
    slug: "hanan-motawie",
    name: "Hanan Motawie",
    nameAr: "حنان مطاوع",
    role: "Artist – Egyptian Actress",
    roleAr: "فنانة وممثلة مصرية",
    photo: "assets/hanan-motawie-thumb.jpg",
    cover: "assets/hanan-motawie-full.jpg",
    featured: true,
    stats: [
      { label: "Views on all platforms", value: "61M+" },
      { label: "Instagram Followers", value: "2.1M" },
      { label: "Facebook Followers", value: "1.1M" }
    ],
    bioEn: "Hanan Motawie is one of Macula Egypt’s prominent talents. We manage her social media presence and content, achieving more than 61 million views across platforms.",
    bio: "الفنانة حنان مطاوع من أبرز الوجوه الفنية اللي بتتعاون معانا في ماكولا إيجيبت، بنتولى إدارة حساباتها وصناعة المحتوى الخاص بيها على السوشيال ميديا، وحققنا معاها أكتر من 61 مليون مشاهدة على كل المنصات."
  },
  {
    slug: "sabrien",
    name: "Sabrien",
    nameAr: "صابرين",
    role: "Super Star",
    roleAr: "سوبر ستار",
    photo: "assets/sabrien-thumb.jpg",
    featured: true,
    bioEn: "Sabrien is one of the leading talents in the Macula Egypt family. We build an integrated content strategy across social platforms to expand reach and audience engagement.",
    bio: "الفنانة صابرين من أهم النجوم اللي انضمت لعائلة ماكولا إيجيبت، بنعمل معاها استراتيجية محتوى متكاملة على كل منصات السوشيال ميديا عشان توصل لأكبر عدد من الجمهور."
  },
  {
    slug: "mariam-amin",
    name: "Mariam Amin",
    nameAr: "مريم أمين",
    role: "TV & Radio Presenter",
    roleAr: "مذيعة تليفزيون وراديو",
    photo: "assets/mariam-amin-thumb.jpg",
    featured: true,
    bioEn: "Mariam Amin is a television and radio presenter. We manage her digital presence and create professional content that reflects her distinctive media personality.",
    bio: "الإعلامية مريم أمين، مقدمة برامج تليفزيون وراديو، بنتولى معاها إدارة الحضور الرقمي وصناعة محتوى احترافي يعكس شخصيتها الإعلامية المميزة."
  },
  {
    slug: "vivian-farid",
    name: "Vivian Farid",
    nameAr: "فيفيان فريد",
    role: "Chef & Content Creator",
    roleAr: "شيف وصانعة محتوى",
    photo: "assets/vivian-farid-thumb.jpg",
    featured: true,
    bioEn: "Chef and content creator Vivian Farid works with Macula Egypt on digital content production and marketing, building her audience across platforms.",
    bio: "الشيف فيفيان فريد، صانعة محتوى الطبخ الأشهر، بنتعاون معاها في إنتاج وتسويق محتواها الرقمي وبناء جمهورها على مختلف المنصات."
  },
  {
    slug: "heba-elgarhi",
    name: "Heba El.Garhi",
    nameAr: "هبة الجارحي",
    role: "Content Creator",
    roleAr: "صانعة محتوى",
    photo: "assets/heba-elgarhi-thumb.jpg",
    featured: true,
    stats: [
      { label: "Views on all platforms", value: "100M+" }
    ],
    bioEn: "Heba El-Garhi achieved more than 100 million views across social platforms with Macula Egypt through an integrated content and digital marketing strategy.",
    bio: "هبة الجارحي حققت معانا في ماكولا إيجيبت رقم قياسي بأكتر من 100 مليون مشاهدة على كل منصات السوشيال ميديا، بفضل خطة محتوى واستراتيجية تسويق رقمي متكاملة."
  },
  {
    slug: "asma-kandeel",
    name: "Asma Kandeel",
    nameAr: "أسماء قنديل",
    role: "Super Star",
    roleAr: "سوبر ستار",
    photo: "assets/asma-kandeel-thumb.jpg",
    featured: true,
    bioEn: "Asma Kandeel is one of Macula Egypt’s talents. We work together on content management and a professional, integrated media and digital presence.",
    bio: "الإعلامية أسماء قنديل من نجوم ماكولا إيجيبت، بنشتغل سوا على إدارة المحتوى والحضور الإعلامي والرقمي بشكل احترافي ومتكامل."
  },
  {
    slug: "passant-shawky",
    name: "Passant Shawky",
    nameAr: "باسنت شوقي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/passant-shawky-thumb.jpg",
    bioEn: "Passant Shawky collaborates with Macula Egypt across trend-focused content, social media management, and strategic content planning.",
    bio: "باسنت شوقي من الوجوه المتعاونة مع ماكولا إيجيبت ضمن باقة النجوم اللي بنقدملهم خدمات الترند وإدارة السوشيال ميديا وخطة المحتوى الاستراتيجية."
  },
  {
    slug: "rasha-mahdi",
    name: "Rasha Mahdi",
    nameAr: "رشا مهدي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/rasha-mahdi-thumb.jpg",
    bioEn: "Rasha Mahdi collaborates with Macula Egypt on trend-focused content, media production, and digital content management.",
    bio: "رشا مهدي من النجوم اللي بتتعاون مع ماكولا إيجيبت في الترند والإنتاج الإعلامي وإدارة المحتوى الرقمي."
  },
  {
    slug: "malak-koura",
    name: "Malak Koura",
    nameAr: "ملك كورة",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/malak-koura-thumb.jpg",
    bioEn: "Malak Koura is one of Macula Egypt’s talents, supported through media production and strategic social media planning.",
    bio: "ملك كورة ضمن نجوم ماكولا إيجيبت اللي بنقدملهم خدمات الإنتاج الإعلامي وإدارة وخطط استراتيجية السوشيال ميديا."
  },
  {
    slug: "shimaa-elsebaey",
    name: "Shimaa Elsebaey",
    nameAr: "شيماء السبعاوي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/shimaa-elsebaey-thumb.jpg",
    bioEn: "Shimaa Elsebaey collaborates with Macula Egypt across trend-focused services and digital content management.",
    bio: "شيماء السبعاوي من الوجوه المتعاونة مع ماكولا إيجيبت ضمن باقة خدمات الترند وإدارة المحتوى."
  },
  {
    slug: "sohair-goda",
    name: "Sohair Goda",
    nameAr: "سهير جودة",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/sohair-goda-thumb.jpg",
    bioEn: "Sohair Goda is one of Macula Egypt’s talents, with our team supporting media production and social media management.",
    bio: "سهير جودة من نجوم ماكولا إيجيبت اللي بنشتغل معاهم على الإنتاج الإعلامي وإدارة السوشيال ميديا."
  },
  {
    slug: "bosy-shalaby",
    name: "Bosy Shalaby",
    nameAr: "بوسي شلبي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/bosy-shalaby-thumb.jpg",
    bioEn: "Bosy Shalaby collaborates with Macula Egypt on trend-focused strategies and strategic content.",
    bio: "بوسي شلبي من الوجوه المتعاونة مع ماكولا إيجيبت في خطط الترند والمحتوى الاستراتيجي."
  },
  {
    slug: "lamiaa-fahmy",
    name: "Lamiaa Fahmy",
    nameAr: "لمياء فهمي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/lamiaa-fahmy-thumb.jpg",
    bioEn: "Lamiaa Fahmy is one of Macula Egypt’s talents, with our team supporting her digital presence and content management.",
    bio: "لمياء فهمي من نجوم ماكولا إيجيبت اللي بنتولى معاهم إدارة الحضور الرقمي والمحتوى."
  },
  {
    slug: "elham-wagdi",
    name: "Elham Wagdi",
    nameAr: "إلهام وجدي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/elham-wagdi-thumb.jpg",
    bioEn: "Elham Wagdi collaborates with Macula Egypt across trend-focused services and social media management.",
    bio: "إلهام وجدي من الوجوه المتعاونة مع ماكولا إيجيبت ضمن خدمات الترند وإدارة السوشيال ميديا."
  },
  {
    slug: "maged-elkedwany",
    name: "Maged El-Kedwany",
    nameAr: "ماجد الكدواني",
    role: "Actor",
    roleAr: "ممثل",
    photo: "assets/maged-elkedwany-thumb.jpg",
    bioEn: "Maged El-Kedwany is one of Macula Egypt’s talents, with our team supporting aspects of his media production and digital presence.",
    bio: "الفنان ماجد الكدواني من نجوم ماكولا إيجيبت، بنتولى جوانب من الإنتاج الإعلامي والحضور الرقمي الخاص بيه."
  },
  {
    slug: "mai-farouk",
    name: "Mai Farouk",
    nameAr: "مي فاروق",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/mai-farouk-thumb.jpg",
    bioEn: "Mai Farouk collaborates with Macula Egypt on content strategy and social media management.",
    bio: "مي فاروق من نجوم ماكولا إيجيبت اللي بنشتغل معاهم على استراتيجية المحتوى وإدارة السوشيال ميديا."
  },
  {
    slug: "khaled-selim",
    name: "Khaled Selim",
    nameAr: "خالد سليم",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/khaled-selim-thumb.jpg",
    bio: "خالد سليم من الوجوه المتعاونة مع ماكولا إيجيبت ضمن خدمات الإنتاج الإعلامي والترند."
  }
];


// All client images supplied in the latest archive.
const EXTRA_TALENTS = [
  {"slug":"01-284","name":"01 (284)","nameAr":"01 (284)","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/01-284.jpg","bio":"01 (284) is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"0m3a0366","name":"0M3A0366","nameAr":"0M3A0366","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/0m3a0366.jpg","bio":"0M3A0366 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"1723373572066-copy","name":"1723373572066 copy","nameAr":"1723373572066 copy","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/1723373572066-copy.jpg","bio":"1723373572066 copy is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"1974318","name":"1974318","nameAr":"1974318","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/1974318.jpg","bio":"1974318 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"2026-07-04-17-25-img-5236","name":"2026_07_04_17_25_IMG_5236","nameAr":"2026_07_04_17_25_IMG_5236","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/2026-07-04-17-25-img-5236.jpg","bio":"2026_07_04_17_25_IMG_5236 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"3","name":"3","nameAr":"3","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/3.jpg","bio":"3 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"476231324-609171332083295-204938870774733831-n","name":"476231324_609171332083295_204938870774733831_n","nameAr":"476231324_609171332083295_204938870774733831_n","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/476231324-609171332083295-204938870774733831-n.jpg","bio":"476231324_609171332083295_204938870774733831_n is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"478737344-18040553456371614-6311022223622979130-n","name":"478737344_18040553456371614_6311022223622979130_n","nameAr":"478737344_18040553456371614_6311022223622979130_n","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/478737344-18040553456371614-6311022223622979130-n.jpg","bio":"478737344_18040553456371614_6311022223622979130_n is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"565094133-1307895740977596-8564583960747570506-n","name":"565094133_1307895740977596_8564583960747570506_n","nameAr":"565094133_1307895740977596_8564583960747570506_n","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/565094133-1307895740977596-8564583960747570506-n.jpg","bio":"565094133_1307895740977596_8564583960747570506_n is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"584448650-18541985158035058-8702964693536372638-n","name":"584448650_18541985158035058_8702964693536372638_n","nameAr":"584448650_18541985158035058_8702964693536372638_n","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/584448650-18541985158035058-8702964693536372638-n.jpg","bio":"584448650_18541985158035058_8702964693536372638_n is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"5s5a0550","name":"5S5A0550","nameAr":"5S5A0550","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/5s5a0550.jpg","bio":"5S5A0550 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"654a5071","name":"654A5071","nameAr":"654A5071","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/654a5071.jpg","bio":"654A5071 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"6b2a3123","name":"6B2A3123","nameAr":"6B2A3123","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/6b2a3123.jpg","bio":"6B2A3123 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"9879e9f8-67bc-4eaf-83f0-07af121f046b","name":"9879e9f8-67bc-4eaf-83f0-07af121f046b","nameAr":"9879e9f8-67bc-4eaf-83f0-07af121f046b","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/9879e9f8-67bc-4eaf-83f0-07af121f046b.jpg","bio":"9879e9f8-67bc-4eaf-83f0-07af121f046b is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"abir-al-sheikh","name":"Abir Al Sheikh","nameAr":"عبير الشيخ","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/abir-al-sheikh.jpg","bio":"Abir Al Sheikh is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"ahmed-fared","name":"Ahmed Fared","nameAr":"أحمد فريد","role":"Photographer","roleAr":"مصور","photo":"assets/client-source/ahmed-fared.jpg","bio":"Ahmed Fared is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"aisel-mohamed-ramzy","name":"Aisel Mohamed Ramzy","nameAr":"أيسل محمد رمزي","role":"Egyptian Actress","roleAr":"ممثلة مصرية","photo":"assets/client-source/aisel-mohamed-ramzy.jpg","bio":"Aisel Mohamed Ramzy is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"amal-abo-omara","name":"Amal Abo Omara","nameAr":"أمل أبو عمارة","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/amal-abo-omara.jpg","bio":"Amal Abo Omara is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"asma-andel","name":"Asma Andel","nameAr":"أسماء أندل","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/asma-andel.jpg","bio":"Asma Andel is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"chatgpt-image-jul-29-2026-0215405-19-24-pm","name":"ChatGPT Image Jul 29, 2026, 0215405_19_24 PM","nameAr":"ChatGPT Image Jul 29, 2026, 0215405_19_24 PM","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/chatgpt-image-jul-29-2026-0215405-19-24-pm.jpg","bio":"ChatGPT Image Jul 29, 2026, 0215405_19_24 PM is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"dina","name":"Dina","nameAr":"Dina","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/dina.jpg","bio":"Dina is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"dr-ali","name":"Dr Ali","nameAr":"Dr Ali","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/dr-ali.jpg","bio":"Dr Ali is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"dsc-0504","name":"DSC_0504","nameAr":"DSC_0504","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/dsc-0504.jpg","bio":"DSC_0504 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"dsc-2578-46024","name":"DSC_2578_46024","nameAr":"DSC_2578_46024","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/dsc-2578-46024.jpg","bio":"DSC_2578_46024 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"dsc01134-copy","name":"DSC01134 copy","nameAr":"DSC01134 copy","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/dsc01134-copy.jpg","bio":"DSC01134 copy is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"dsc01441","name":"DSC01441","nameAr":"DSC01441","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/dsc01441.jpg","bio":"DSC01441 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"dsc01864","name":"DSC01864","nameAr":"DSC01864","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/dsc01864.jpg","bio":"DSC01864 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"dsc04868","name":"DSC04868","nameAr":"DSC04868","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/dsc04868.jpg","bio":"DSC04868 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"evon-nabil","name":"Evon Nabil","nameAr":"إيفون نبيل","role":"Journalist, Presenter & Actress","roleAr":"صحفية ومقدمة برامج وممثلة","photo":"assets/client-source/evon-nabil.jpg","bio":"Evon Nabil is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"generative-fill","name":"Generative Fill","nameAr":"Generative Fill","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/generative-fill.jpg","bio":"Generative Fill is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"generative-fill-2","name":"Generative Fill (2)","nameAr":"Generative Fill (2)","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/generative-fill-2.jpg","bio":"Generative Fill (2) is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"generative-fill-3","name":"Generative Fill (3)","nameAr":"Generative Fill (3)","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/generative-fill-3.jpg","bio":"Generative Fill (3) is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"gmal-anaed","name":"Gmal Anaed","nameAr":"Gmal Anaed","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/gmal-anaed.jpg","bio":"Gmal Anaed is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"heba-abd-alftah","name":"Heba Abd Alftah","nameAr":"هبة عبد الفتاح","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/heba-abd-alftah.jpg","bio":"Heba Abd Alftah is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"heba-elgarhi","name":"Heba El.Garhi","nameAr":"هبة الجارحي","role":"Content Creator","roleAr":"صانعة محتوى","photo":"assets/client-source/heba-elgarhi.jpg","bio":"Heba El.Garhi is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-1649","name":"IMG_1649","nameAr":"IMG_1649","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-1649.jpg","bio":"IMG_1649 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-20240824-wa0081","name":"IMG-20240824-WA0081","nameAr":"IMG-20240824-WA0081","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-20240824-wa0081.jpg","bio":"IMG-20240824-WA0081 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-20250208-wa0039","name":"IMG-20250208-WA0039","nameAr":"IMG-20250208-WA0039","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-20250208-wa0039.jpg","bio":"IMG-20250208-WA0039 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-20260118-wa0016","name":"IMG-20260118-WA0016","nameAr":"IMG-20260118-WA0016","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-20260118-wa0016.jpg","bio":"IMG-20260118-WA0016 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-2128","name":"IMG_2128","nameAr":"IMG_2128","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-2128.jpg","bio":"IMG_2128 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-2157","name":"IMG_2157","nameAr":"IMG_2157","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-2157.jpg","bio":"IMG_2157 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-4944","name":"IMG_4944","nameAr":"IMG_4944","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-4944.jpg","bio":"IMG_4944 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-5015-jpg","name":"IMG_5015.JPG","nameAr":"IMG_5015.JPG","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-5015-jpg.jpg","bio":"IMG_5015.JPG is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-5111","name":"IMG_5111","nameAr":"IMG_5111","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-5111.jpg","bio":"IMG_5111 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-5758","name":"IMG_5758","nameAr":"IMG_5758","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-5758.jpg","bio":"IMG_5758 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"img-5996-2","name":"IMG_5996 2","nameAr":"IMG_5996 2","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/img-5996-2.jpg","bio":"IMG_5996 2 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"k65a7086","name":"K65A7086","nameAr":"K65A7086","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/k65a7086.jpg","bio":"K65A7086 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"khalto-amal","name":"Khalto Amal","nameAr":"خالتو أمل","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/khalto-amal.jpg","bio":"Khalto Amal is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"krstina","name":"Krstina","nameAr":"كرستينا","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/krstina.jpg","bio":"Krstina is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"mahitab-haqsip","name":"Mahitab Haqsip","nameAr":"ماهيتاب حازق؟","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/mahitab-haqsip.jpg","bio":"Mahitab Haqsip is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"mariam-amin","name":"Mariam Amin","nameAr":"مريم أمين","role":"TV & Radio Presenter","roleAr":"مذيعة تليفزيون وراديو","photo":"assets/client-source/mariam-amin.jpg","bio":"Mariam Amin is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"may-samer","name":"May Samer","nameAr":"مي سامر","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/may-samer.jpg","bio":"May Samer is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"mohamed-soliman","name":"Mohamed Soliman","nameAr":"محمد سليمان","role":"Egyptian Actor","roleAr":"ممثل مصري","photo":"assets/client-source/mohamed-soliman.jpg","bio":"Mohamed Soliman is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"noha-hafiz","name":"Noha Hafiz","nameAr":"نهى حافظ","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/noha-hafiz.jpg","bio":"Noha Hafiz is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"noha-hafiz-2","name":"Noha Hafiz – Photo 2","nameAr":"نهى حافظ – صورة 2","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/noha-hafiz-2.jpg","bio":"Noha Hafiz – Photo 2 is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"nour-faid","name":"Nour Faid","nameAr":"نور فايد","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/nour-faid.jpg","bio":"Nour Faid is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"olfat-omar","name":"Olfat Omar","nameAr":"ألفت عمر","role":"Egyptian Actress","roleAr":"ممثلة مصرية","photo":"assets/client-source/olfat-omar.jpg","bio":"Olfat Omar is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"passant-shawky","name":"Passant Shawky","nameAr":"باسنت شوقي","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/passant-shawky.jpg","bio":"Passant Shawky is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"sabrien","name":"Sabrien","nameAr":"صابرين","role":"Super Star","roleAr":"سوبر ستار","photo":"assets/client-source/sabrien.jpg","bio":"Sabrien is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"safia-elemary","name":"Safia El Emary","nameAr":"صفية العمري","role":"Egyptian Actress","roleAr":"ممثلة مصرية","photo":"assets/client-source/safia-elemary.jpg","bio":"Safia El Emary is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"sherihan-abu-al-hassan","name":"Sherihan Abu Al Hassan","nameAr":"شريهان أبو الحسن","role":"TV Host & Media Personality","roleAr":"مذيعة وإعلامية","photo":"assets/client-source/sherihan-abu-al-hassan.jpg","bio":"Sherihan Abu Al Hassan is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"shimaa-elsebaey","name":"Shimaa Elsebaey","nameAr":"شيماء السبعاوي","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/shimaa-elsebaey.jpg","bio":"Shimaa Elsebaey is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"shimaa-nagy","name":"Shimaa Nagy","nameAr":"شيماء ناجي","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/shimaa-nagy.jpg","bio":"Shimaa Nagy is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"sina-fkry","name":"Sina Fkry","nameAr":"سينا فكري","role":"Public Figure","roleAr":"شخصية عامة","photo":"assets/client-source/sina-fkry.jpg","bio":"Sina Fkry is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"vivian-farid","name":"Vivian Farid","nameAr":"فيفيان فريد","role":"Chef & Content Creator","roleAr":"شيف وصانعة محتوى","photo":"assets/client-source/vivian-farid.jpg","bio":"Vivian Farid is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"whatsapp-image-2023-12-25-at-1-08-17-pm","name":"WhatsApp Image 2023-12-25 at 1.08.17 PM","nameAr":"WhatsApp Image 2023-12-25 at 1.08.17 PM","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/whatsapp-image-2023-12-25-at-1-08-17-pm.jpg","bio":"WhatsApp Image 2023-12-25 at 1.08.17 PM is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"whatsapp-image-2025-02-05-at-2-59-33-pm-1","name":"WhatsApp Image 2025-02-05 at 2.59.33 PM (1)","nameAr":"WhatsApp Image 2025-02-05 at 2.59.33 PM (1)","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/whatsapp-image-2025-02-05-at-2-59-33-pm-1.jpg","bio":"WhatsApp Image 2025-02-05 at 2.59.33 PM (1) is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"whatsapp-image-2026-01-10-at-9-00-36-pm","name":"WhatsApp Image 2026-01-10 at 9.00.36 PM","nameAr":"WhatsApp Image 2026-01-10 at 9.00.36 PM","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/whatsapp-image-2026-01-10-at-9-00-36-pm.jpg","bio":"WhatsApp Image 2026-01-10 at 9.00.36 PM is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"whatsapp-image-2026-01-18-at-4-40-43-pm-1","name":"WhatsApp Image 2026-01-18 at 4.40.43 PM (1)","nameAr":"WhatsApp Image 2026-01-18 at 4.40.43 PM (1)","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/whatsapp-image-2026-01-18-at-4-40-43-pm-1.jpg","bio":"WhatsApp Image 2026-01-18 at 4.40.43 PM (1) is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"whatsapp-image-2026-06-18-at-2-19-19-pm","name":"WhatsApp Image 2026-06-18 at 2.19.19 PM","nameAr":"WhatsApp Image 2026-06-18 at 2.19.19 PM","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/whatsapp-image-2026-06-18-at-2-19-19-pm.jpg","bio":"WhatsApp Image 2026-06-18 at 2.19.19 PM is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"whatsapp-image-2026-06-18-at-2-19-19-pm-1","name":"WhatsApp Image 2026-06-18 at 2.19.19 PM (1)","nameAr":"WhatsApp Image 2026-06-18 at 2.19.19 PM (1)","role":"Client Profile","roleAr":"ملف عميل","photo":"assets/client-source/whatsapp-image-2026-06-18-at-2-19-19-pm-1.jpg","bio":"WhatsApp Image 2026-06-18 at 2.19.19 PM (1) is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
  {"slug":"yahya-al-muji","name":"Yahya Al Muji","nameAr":"يحيى الموجي","role":"Composer, Arranger & Violinist","roleAr":"مؤلف موسيقي وموزع وعازف كمان","photo":"assets/client-source/yahya-al-muji.jpg","bio":"Yahya Al Muji is included in the Macula Egypt client archive. The supplied client image is preserved in the profile artwork."},
];

for(const extra of EXTRA_TALENTS){ if(!TALENTS.some(t=>t.slug===extra.slug)) TALENTS.push(extra); }

// بيانات منظومة ماكولا (Macula Network)
const NETWORK = [
  {
    slug: "macula-creative",
    nameEng: "Macula Creative",
    nameAr: "الإبداع والدعاية",
    tagEng: "Creative & Advertising",
    icon: "🎨",
    bio: "الذراع الإبداعية لماكولا، مسؤولة عن تصميم الهوية البصرية وابتكار الحملات الإعلانية اللي بتخلي علامتك التجارية مميزة وسط المنافسة.",
    bioEn: "The creative arm of Macula, responsible for visual identities and advertising campaigns that make brands stand out.",
    bioEn: "Khaled Selim collaborates with Macula Egypt across media production and trend-focused digital services.",
    bioEn: "Mai Farouk collaborates with Macula Egypt on content strategy and social media management.",
    bioEn: "Maged El-Kedwany is one of Macula Egypt’s talents, with our team supporting aspects of his media production and digital presence.",
    bioEn: "Elham Wagdi collaborates with Macula Egypt across trend-focused services and social media management.",
    bioEn: "Lamiaa Fahmy is one of Macula Egypt’s talents, with our team supporting her digital presence and content management.",
    bioEn: "Bosy Shalaby collaborates with Macula Egypt on trend-focused strategies and strategic content.",
    bioEn: "Sohair Goda is one of Macula Egypt’s talents, with our team supporting media production and social media management.",
    bioEn: "Shimaa Elsebaey collaborates with Macula Egypt across trend-focused services and digital content management.",
    bioEn: "Malak Koura is one of Macula Egypt’s talents, supported through media production and strategic social media planning.",
    bioEn: "Rasha Mahdi collaborates with Macula Egypt on trend-focused content, media production, and digital content management.",
    bioEn: "Passant Shawky collaborates with Macula Egypt across trend-focused content, social media management, and strategic content planning.",
    bioEn: "Asma Kandeel is one of Macula Egypt’s talents. We work together on content management and a professional, integrated media and digital presence.",
    bioEn: "Heba El-Garhi achieved more than 100 million views across social platforms with Macula Egypt through an integrated content and digital marketing strategy.",
    bioEn: "Chef and content creator Vivian Farid works with us on digital content production and marketing, building a stronger audience presence across platforms.",
    bioEn: "Mariam Amin is a television and radio presenter. We manage her digital presence and create professional content that reflects her distinctive media personality.",
    bioEn: "Sabrien is one of the leading talents who joined the Macula Egypt family. We build an integrated content strategy across social platforms to maximize reach and engagement.",
    bioEn: "Hanan Motawie is one of the prominent talents collaborating with Macula Egypt. We manage her social media presence and content, achieving more than 61 million views across platforms.",
    services: ["Creative Direction", "Art Direction", "Graphic Design", "Copywriting", "Advertising Campaigns"]
  },
  {
    slug: "macula-digital",
    nameEng: "Macula Digital",
    nameAr: "التسويق الرقمي",
    tagEng: "Digital Marketing & Social Media",
    icon: "📈",
    bio: "بندير حضورك الرقمي بالكامل من إدارة السوشيال ميديا للحملات الممولة، ونحول كل جنيه تسويقي لنتيجة ملموسة بتقدر تقيسها بالأرقام.",
    bioEn: "We manage your digital presence from social media and paid campaigns to performance, turning marketing spend into measurable results.",
    services: ["Social Media Management", "Performance Marketing", "SEO", "Digital Campaigns", "Analytics & Reporting"]
  },
  {
    slug: "macula-studio",
    nameEng: "Macula Studio",
    nameAr: "الإنتاج المرئي",
    tagEng: "Video Production & Photography",
    icon: "🎥",
    bio: "استوديو إنتاج متكامل بيحول أفكارك لمحتوى مرئي احترافي، من التصوير والإخراج لحد المونتاج والموشن جرافيك.",
    bioEn: "A full-service production studio turning ideas into professional visual content, from shooting and directing to editing and motion graphics.",
    services: ["Commercial Production", "Photography", "Reels", "Podcast Production", "Green Screen Studio", "Post Production", "Motion Graphics"]
  },
  {
    slug: "macula-entertainment",
    nameEng: "Macula Entertainment",
    nameAr: "الفعاليات والترفيه",
    tagEng: "Events & Entertainment",
    icon: "🎪",
    bio: "بننظم وندير الفعاليات والحملات الترويجية بشكل احترافي، من التخطيط والتصميم لحد التنفيذ والتغطية الإعلامية.",
    bioEn: "We plan and manage events and promotional experiences from concept and design through execution and media coverage.",
    services: ["Event Production", "Stage Design", "Promotional Campaigns", "Live Coverage"]
  },
  {
    slug: "macula-tech",
    nameEng: "Macula Tech",
    nameAr: "المنتجات الرقمية",
    tagEng: "Websites & Digital Products",
    icon: "💻",
    bio: "بنبني المواقع والمنصات الرقمية اللي بتدعم نمو بيزنسك، بتصميم عصري وتجربة استخدام سلسة على أي جهاز.",
    bioEn: "We build modern websites and digital platforms that support business growth with seamless user experiences across devices.",
    services: ["Websites", "Landing Pages", "Digital Platforms", "Interactive Experiences"]
  },
  {
    slug: "macula-media",
    nameEng: "Macula Media",
    nameAr: "الإنتاج الإعلامي",
    tagEng: "Media Production & Publishing",
    icon: "📺",
    bio: "بنقدم محتوى إعلامي متنوع من برامج وحوارات ووثائقيات، وصولاً لمحتوى أصلي بعلامة Macula Originals.",
    bioEn: "We create media content including shows, interviews, documentaries, and original productions under the Macula Originals label.",
    services: ["Content Production", "Digital Shows", "Interviews", "Documentaries", "News & Trends"]
  }
];

// Social profiles for Macula talent/client detail pages.
// Only confirmed/public profile URLs are populated here; unknown links stay empty
// so the site never points visitors to an unrelated account.
const TALENT_SOCIALS = {
  "hanan-motawie": {
    facebook: "https://www.facebook.com/Official.Hanan.Motawie",
    instagram: "https://instagram.com/hananmotawie",
    tiktok: "",
    snapchat: ""
  },
  "sabrien": {
    facebook: "https://www.facebook.com/sabrien.yassien.9",
    instagram: "https://instagram.com/sabrienofficial",
    tiktok: "",
    snapchat: ""
  },
  "mariam-amin": {
    facebook: "https://www.facebook.com/mariamamin",
    instagram: "https://www.instagram.com/mariamamin",
    tiktok: "",
    snapchat: ""
  },
  "vivian-farid": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "heba-elgarhi": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "asma-kandeel": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "passant-shawky": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "rasha-mahdi": {
    facebook: "https://facebook.com/rashamahdii",
    instagram: "https://instagram.com/rashamahdi",
    tiktok: "",
    snapchat: "https://snapchat.com/add/rashamahdi"
  },
  "malak-koura": {
    facebook: "https://facebook.com/pg/Malakkourafans",
    instagram: "https://instagram.com/malak_koura",
    tiktok: "",
    snapchat: ""
  },
  "shimaa-elsebaey": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "sohair-goda": {
    facebook: "https://www.facebook.com/sohair.goda",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "bosy-shalaby": {
    facebook: "https://www.facebook.com/BosyShalabyOfficial",
    instagram: "https://www.instagram.com/boosy17",
    tiktok: "",
    snapchat: ""
  },
  "lamiaa-fahmy": {
    facebook: "https://www.facebook.com/LamiaaFahmyAbdelHamid",
    instagram: "https://www.instagram.com/lamiaafahmy",
    tiktok: "",
    snapchat: ""
  },
  "elham-wagdi": {
    facebook: "https://www.facebook.com/elhamwagdi",
    instagram: "https://www.instagram.com/elhamwagdi",
    tiktok: "https://www.tiktok.com/@elhamwagdii",
    snapchat: ""
  },
  "maged-elkedwany": {
    facebook: "https://www.facebook.com/magedelkedwany.officialpage",
    instagram: "https://www.instagram.com/magedelkedwany.official",
    tiktok: "",
    snapchat: ""
  },
  "mai-farouk": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "khaled-selim": {
    facebook: "https://www.facebook.com/Khaled.Selim",
    instagram: "https://www.instagram.com/khaledselimofficial",
    tiktok: "",
    snapchat: ""
  },
  "aisel-mohamed-ramzy": { instagram: "https://instagram.com/aicelramzy", facebook: "https://www.facebook.com/Aicel-ramzy-105584138678656/", tiktok: "", snapchat: "" },
  "safia-elemary": { instagram: "https://instagram.com/safia.alemaryofficial", facebook: "", tiktok: "", snapchat: "" },
  "olfat-omar": { instagram: "https://instagram.com/olfatomarofficial", facebook: "https://www.facebook.com/olfatomarofficial", tiktok: "", snapchat: "" },
  "sherihan-abu-al-hassan": { facebook: "https://www.facebook.com/sherihan.abohassanksalah", instagram: "", tiktok: "", snapchat: "" },
  "yahya-al-muji": { instagram: "https://instagram.com/yehiaelmougy", facebook: "https://www.facebook.com/yehiaelmougy", tiktok: "", snapchat: "" },
  "mohamed-soliman": { facebook: "https://www.facebook.com/mo.soliman.official", instagram: "https://www.instagram.com/mohamedsolimansoli19", tiktok: "", snapchat: "" },
  "evon-nabil": { instagram: "https://instagram.com/evonnabilkoko", facebook: "", tiktok: "", snapchat: "" }};

// بيانات مشاريع قسم "أعمالنا" في الصفحة الرئيسية
// لإضافة صور/فيديوهات شغل حقيقي: حط الملفات في مجلد assets وأضفها في مصفوفة media بنفس شكل الأمثلة
const PROJECTS = [
  {
    slug: "integrated-social-media-campaign",
    tag: "Campaign",
    tagAr: "حملة",
    title: "Integrated Social Media Campaign",
    titleAr: "حملة سوشيال ميديا متكاملة",
    meta: "Social Media · 2025",
    metaAr: "السوشيال ميديا · 2025",
    thumb: "assets/hero.jpg",
    summary: "A full social media campaign covering strategy, content creation, and platform management — from the first idea to measurable results on every channel.",
    summaryAr: "حملة سوشيال ميديا متكاملة بتغطي الاستراتيجية وصناعة المحتوى وإدارة المنصات، من أول فكرة لحد نتائج حقيقية بنشوفها بالأرقام على كل منصة.",
    media: []
  },
  {
    slug: "talent-content-production",
    tag: "Production",
    tagAr: "إنتاج",
    title: "Content Production for One of Our Talents",
    titleAr: "إنتاج محتوى لأحد نجومنا",
    meta: "Video Production · 2025",
    metaAr: "إنتاج فيديو · 2025",
    thumb: "assets/hanan-motawie-full.jpg",
    summary: "End-to-end video production for one of our talents — scripting, filming, lighting, and post-production, all handled in-house by our own studios.",
    summaryAr: "إنتاج فيديو متكامل لأحد نجومنا — من كتابة السيناريو للتصوير والإضاءة والمونتاج، وكله بيتنفذ بأنفسنا في استوديوهاتنا.",
    media: []
  },
  {
    slug: "brand-identity-growing-brand",
    tag: "Branding",
    tagAr: "براندينج",
    title: "Brand Identity for a Growing Brand",
    titleAr: "هوية بصرية لعلامة تجارية نامية",
    meta: "Branding · 2024",
    metaAr: "براندينج · 2024",
    thumb: "assets/logo.png",
    summary: "A complete brand identity project — logo, visual language, and brand guidelines — built to give a growing brand a clear, consistent presence everywhere it shows up.",
    summaryAr: "مشروع هوية بصرية متكامل — لوجو، لغة بصرية، ودليل هوية — عشان نديله حضور واضح وثابت في كل مكان يظهر فيه.",
    media: []
  }
];

// عملاء وشركاء ماكولا إيجيبت (قسم "عملاؤنا وشركاؤنا")
// لإضافة شريك جديد: زوّد سطر في المصفوفة دي بس
const CLIENTS = [
  "رئاسة جمهورية مصر العربية",
  "راعي مصر",
  "مراتب ريتا",
  "كشري أبو طارق",
  "I Soft Systems",
  "CTV",
  "Mesat",
  "المركز الثقافي القبطي الأرثوذكسي",
  "المركز الثقافي القبطي الأرثوذكسي - ألمانيا",
  "Gabi Egypt",
  "وزارة الإنتاج الحربي",
  "حياة كريمة",
  "نايل كريستال",
  "دايموند بوت",
  "ديليس",
  "بيرجو",
  "مستشفى فريد حبيب",
  "بازوكا",
  "مركز الشيخ حامد الأحمدي الثقافي"
];
