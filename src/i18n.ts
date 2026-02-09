import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'footer.brand.description':
        'Lumen is a church management system designed to simplify administration and empower ministries to focus on what matters most: people.',
      // Navigation
      'nav.features': 'Features',
      'nav.analytics': 'Analytics',
      'nav.pricing': 'Pricing',
      'nav.login': 'Log In',
      'nav.getStarted': 'Get Started',

      // Hero Section
      'hero.badge': 'Made for the Mission',
      'hero.title': "Shine a Light on Your Ministry's Growth",
      'hero.description':
        'Lumen simplifies church administration, from congregation care to financial transparency, so you can focus on what matters most: the people.',
      'hero.primaryButton': 'Get Started for Free',
      'hero.secondaryButton': 'Book a Demo',

      // Features Section
      'features.title': 'The Core Pillars',
      'features.description':
        'Everything you need to shepherd your congregation with excellence',

      // Feature Cards
      'features.memberManagement.title': 'Member Management',
      'features.memberManagement.description':
        "Detailed profiles for congregants and family grouping logic to keep track of every member's journey",

      'features.financialStewardship.title': 'Financial Stewardship',
      'features.financialStewardship.description':
        'Track church cash flow and generate transparent financial analytics for complete accountability',

      'features.ministryScheduling.title': 'Ministry Scheduling',
      'features.ministryScheduling.description':
        'A dedicated system for musician scheduling and church event calendars to keep everyone coordinated',

      'features.automatedCare.title': 'Automated Care',
      'features.automatedCare.description':
        'Auto-send birthday reminders via WhatsApp to members, ensuring no one feels forgotten',

      'features.attendanceInsights.title': 'Attendance Insights',
      'features.attendanceInsights.description':
        'Weekly check-ins with data-driven analytics to monitor congregation health and engagement',

      'features.assetManagement.title': 'Church Asset Management',
      'features.assetManagement.description':
        'Comprehensive tracking and management of all church assets, from buildings to equipment, ensuring proper maintenance and accountability',

      // Analytics Section
      'analytics.title': 'Dashboard Preview',
      'analytics.description':
        "Real-time insights into your ministry's health and growth",
      'analytics.attendance.title': 'Weekly Attendance Trends',
      'analytics.attendance.description':
        'Track congregation participation over time',
      'analytics.giving.title': 'Monthly Giving',
      'analytics.giving.description':
        'Monitor financial stewardship and generosity',

      // Value Proposition
      'value.title': 'Beyond data—empowering discipleship.',
      'value.description':
        'Lumen helps church leaders notice when a member stops attending, track who needs a birthday prayer, and understand the spiritual health of your congregation through data-driven insights. Focus on relationships while we handle the administration.',
      'value.button': 'Start Your Free Trial',

      // Pricing Section
      'pricing.title': 'Simple, Transparent Pricing',
      'pricing.description': "Choose the plan that fits your ministry's needs",

      // Pricing Plans
      'pricing.seed.name': 'Seed',
      'pricing.seed.description': 'Perfect for small congregations',
      'pricing.seed.price': '$5',
      'pricing.seed.features': [
        'Up to 100 members',
        'Basic member profiles',
        'Event calendar',
        'Simple financial recording',
        'Shared server',
        'Asset recording',
      ],
      'pricing.seed.button': 'Get Started',

      'pricing.growth.name': 'Growth',
      'pricing.growth.description': 'For growing churches',
      'pricing.growth.price': '$15',
      'pricing.growth.period': '/month',
      'pricing.growth.badge': 'Most Popular',
      'pricing.growth.features': [
        'Up to 500 members',
        'Advanced member profiles',
        'Advanced analytics',
        'WhatsApp automation',
        'Priority developer support',
        'Shared server',
        'Asset recording',
        'Musician scheduling',
        'Congregation attendance',
      ],
      'pricing.growth.button': 'Start Free Trial',

      'pricing.harvest.name': 'Harvest',
      'pricing.harvest.description': 'For established ministries',
      'pricing.harvest.price': 'Contact sales',
      'pricing.harvest.period': '/month',
      'pricing.harvest.features': [
        'Unlimited members',
        'Custom reporting',
        'Custom feature support',
        'Dedicated server',
        'Separate database',
      ],
      'pricing.harvest.button': 'Contact Sales',

      // Why Us Section
      'whyUs.title': 'Why Us? Created from the Heart of Service.',
      'whyUs.intro':
        'Behind every line of code in Lumen, there is a heart that understands. I know exactly what it feels like to pour time and energy into ministry, yet often hindered by endless administrative burdens. This is where Lumen was born—not just software, but a vision brought to life.',
      'whyUs.personal':
        'As a church servant, I have personally experienced the challenges of managing congregations, organizing finances, and coordinating various activities. I have seen firsthand how time that should be used for shepherding is instead spent at the desk handling data and reports. The desire to see churches focus more on their true mission—to serve and disciple—is the main driving force behind every feature of Lumen.',
      'whyUs.dedication':
        'Lumen is built with a deep understanding of the church ecosystem. Every detail is designed to address your unique needs, from sensitive attendance tracking to transparent financial reporting. We believe that by lightening the administrative burden, church leaders can once again devote their energy fully to relationships, spiritual growth, and real impact in the community.',
      'whyUs.conclusion':
        'Lumen is our offering to your ministry. It is a tool we hope will illuminate your path, provide clarity, and free you to focus on what matters most: souls. Because we believe, when your church shines, the world will see His light.',
      'footer.product.title': 'Product',
      'footer.product.features': 'Features',
      'footer.product.pricing': 'Pricing',
      'footer.product.security': 'Security',
      'footer.company.title': 'Company',
      'footer.company.about': 'About',
      'footer.company.blog': 'Blog',
      'footer.company.careers': 'Careers',
      'footer.support.title': 'Support',
      'footer.support.help': 'Help Center',
      'footer.support.contact': 'Contact',
      'footer.support.terms': 'Terms',
      'footer.copyright': '© 2026 Lumen. All rights reserved.',

      // About Page
      'about.hero.title': 'The Light Behind Lumen',
      'about.hero.subtitle': 'A story born from the heart of ministry and the desire to set churches free from administrative burdens.',

      'about.why.title': 'Why Lumen Was Born',
      'about.why.story': 'Lumen was created by a Christian developer who serves as a ministry worker in a local church in Bekasi, West Java. This wasn\'t built in a corporate office, but born out of the real-life challenges faced by a small-to-medium congregation. The creator saw firsthand the struggle of managing congregation data manually and realized that many churches lack the technical staff or massive budgets to implement high-end software. They witnessed time and energy that should have been devoted to shepherding and discipleship getting consumed by spreadsheets and manual data entry. From that reality, Lumen was born—not as a commercial product first, but as a ministry tool created to lighten the load.',
      'about.why.lokasi': 'Bekasi, West Java—where this journey began.',

      'about.mission.title': 'Our Core Mission & Values',
      'about.mission.description': 'Three pillars guide everything we do at Lumen',

      'about.values.accessibility.title': 'Radical Accessibility',
      'about.values.accessibility.description': 'Digitizing church data in the simplest way possible, so even non-technical leaders can navigate their congregation\'s information with confidence.',

      'about.values.affordability.title': 'Affordability',
      'about.values.affordability.description': 'We believe technology should empower the Great Commission, not drain the church\'s treasury. Designed to be as affordable as possible so even the smallest churches can benefit.',

      'about.values.efficiency.title': 'Efficiency',
      'about.values.efficiency.description': 'Web-based systems are superior to spreadsheets—real-time updates, accessibility from any device, and centralized coordination for all ministries.',

      'about.values.security.title': 'Data Security',
      'about.values.security.description': 'While affordable, security is a top priority. All congregation data is encrypted and backed up to ensure privacy and peace of mind.',

      'about.how.title': 'How We Solve It',
      'about.how.solution': 'Lumen is designed with what we call "church logic"—built by someone who understands the rhythms of congregational life. Because the developer is an active servant in the church, Lumen doesn\'t think like generic CRM software. It thinks like a pastor, a finance administrator, and a ministry coordinator all at once.',
      'about.how.efficiency': 'Instead of juggling spreadsheets across email and WhatsApp, you get one centralized system where attendance is tracked, giving is recorded, events are scheduled, and member profiles are maintained. Real-time updates mean no more outdated data. Accessibility from any device means the church administrator can manage information from anywhere. Centralized coordination means every ministry department stays informed without endless back-and-forth communication.',

      'about.commitment.title': 'Our Commitment to You',
      'about.commitment.security': 'Security Without Compromise: While Lumen is affordable, data protection is never compromised. All congregation information is encrypted and backed up regularly, ensuring the privacy and trust your church deserves.',
      'about.commitment.community': 'By the Church, For the Church: We don\'t just build software—we build in partnership with you. Lumen includes a dedicated feature request system where users can suggest and vote on new features. Your feedback directly shapes Lumen\'s evolution, ensuring the software grows alongside your church\'s unique needs.',
      'about.commitment.closing': 'This is community-driven growth at its finest.',

      'about.cta.title': 'Join the Lumen Community',
      'about.cta.description': 'Hundreds of churches are already simplifying their administration and focusing more on their mission. Your church could be next.',
      'about.cta.primaryButton': 'Start Your Free Trial',
      'about.cta.secondaryButton': 'Schedule a Demo',

      // Testimonials Section
      'about.testimonials.title': 'What Our Community Says',
      'about.testimonials.subtitle': 'Real voices from real churches transforming their ministry',

      'about.testimonial.pastor.quote': 'Lumen has given us eyes to see who is missing and heart to reach out. The attendance analytics are a game-changer for our growth.',
      'about.testimonial.pastor.name': 'Lead Pastor, Mount Carmel Church',

      'about.testimonial.admin.quote': 'Scheduling worship teams used to be a nightmare. Now, it happens in minutes, and the WhatsApp reminders keep everyone on track.',
      'about.testimonial.admin.name': 'Church Administrator, Grace Ministry Center',

      'about.testimonial.finance.quote': 'The financial flow tracking is so transparent and easy to use. It has built immense trust within our congregation.',
      'about.testimonial.finance.name': 'Finance Head, Emmanuel Fellowship',
    },
  },
  id: {
    translation: {
      'footer.brand.description':
        'Lumen adalah sistem manajemen gereja yang dirancang untuk menyederhanakan administrasi dan memberdayakan pelayanan agar fokus pada hal yang paling penting: manusia.',
      // Navigation
      'nav.features': 'Fitur',
      'nav.analytics': 'Analitik',
      'nav.pricing': 'Harga',
      'nav.login': 'Masuk',
      'nav.getStarted': 'Mulai',

      // Hero Section
      'hero.badge': 'Hadir Demi Satu Misi Mulia.',
      'hero.title': 'Melihat Lebih Jelas, Melayani Lebih Jauh.',
      'hero.description':
        'Lumen menghadirkan efisiensi dalam pelayanan dan keterbukaan dalam laporan keuangan. Karena di balik administrasi yang rapi, ada pelayanan yang lebih berarti.',
      'hero.primaryButton': 'Mulai Gratis',
      'hero.secondaryButton': 'Lihat Demo',

      // Features Section
      'features.title': 'Fokus Utama Kami',
      'features.description':
        'Semua yang Anda butuhkan untuk menggembalakan jemaat Anda dengan keunggulan',

      // Feature Cards
      'features.memberManagement.title': 'Manajemen Anggota',
      'features.memberManagement.description':
        'Profil detail untuk jemaat dan logika pengelompokan keluarga untuk melacak perjalanan setiap anggota',

      'features.financialStewardship.title': 'Pengelolaan Keuangan',
      'features.financialStewardship.description':
        'Lacak arus kas gereja dan hasilkan analitik keuangan transparan untuk akuntabilitas lengkap',

      'features.ministryScheduling.title': 'Penjadwalan gereja',
      'features.ministryScheduling.description':
        'Sistem khusus untuk penjadwalan musisi dan kalender acara gereja untuk menjaga semua orang terkoordinasi',

      'features.automatedCare.title': 'Perhatian yang Selalu Terjaga',
      'features.automatedCare.description':
        'Kirim otomatis pengingat ulang tahun via WhatsApp ke anggota, pastikan tidak ada yang terlewatkan.',

      'features.attendanceInsights.title': 'Analisis Kehadiran Jemaat',
      'features.attendanceInsights.description':
        'Check-in mingguan dengan analitik berbasis data untuk memantau kesehatan dan keterlibatan jemaat',

      'features.assetManagement.title': 'Pencatatan Aset Gereja',
      'features.assetManagement.description':
        'Pelacakan dan pengelolaan aset gereja secara menyeluruh, dari gedung hingga peralatan, memastikan perawatan yang tepat dan akuntabilitas',

      // Analytics Section
      'analytics.title': 'Pratinjau Dashboard',
      'analytics.description':
        'Data akurat, pelayanan sehat. Pantau perkembangan jemaat setiap saat.',
      'analytics.attendance.title': 'Tren Kehadiran Mingguan',
      'analytics.attendance.description':
        'Lacak partisipasi jemaat dari waktu ke waktu',
      'analytics.giving.title': 'Pemberian Bulanan',
      'analytics.giving.description':
        'Pantau pengelolaan keuangan dan kemurahan hati',

      // Value Proposition
      'value.title': 'Melampaui data, mendukung pemuridan.',
      'value.description':
        'Lumen membantu Anda menyadari saat seorang jemaat mulai jarang hadir, mengingatkan siapa yang membutuhkan doa di hari ulang tahunnya, hingga memahami kesehatan rohani jemaat melalui data yang akurat. Fokuslah membangun hubungan, biarkan kami yang mengurus administrasinya.',
      'value.button': 'Mulai Uji Coba Gratis Anda',

      // Pricing Section
      'pricing.title': 'Harga Sederhana, Transparan',
      'pricing.description':
        'Temukan Solusi Tepat untuk Setiap Tahap Pertumbuhan Gereja Anda',

      // Pricing Plans
      'pricing.seed.name': 'Bibit',
      'pricing.seed.description': 'Sempurna untuk gereja kecil',
      'pricing.seed.price': 'Rp. 25.000 ',
      'pricing.seed.features': [
        'Hingga 100 jemaat',
        'Profil jemaat dasar',
        'Kalender acara',
        'Pencatatan keuangan sederhana',
        'Server bersama',
        'Pencatatan aset',
      ],
      'pricing.seed.button': 'Mulai',

      'pricing.growth.name': 'Bertumbuh',
      'pricing.growth.description': 'Untuk gereja yang sedang berkembang',
      'pricing.growth.price': 'Rp. 75.000',
      'pricing.growth.period': '/bulan',
      'pricing.growth.badge': 'Paling Populer',
      'pricing.growth.features': [
        'Hingga 500 jemaat',
        'Profil jemaat lanjutan',
        'Analitik lanjutan',
        'Otomasi WhatsApp',
        'Dukungan prioritas developer',
        'Server bersama',
        'Pencatatan aset',
        'Penjadwalan pemusik',
        'Absensi jemaat',
      ],
      'pricing.growth.button': 'Mulai Uji Coba Gratis',

      'pricing.harvest.name': 'Panen',
      'pricing.harvest.description': 'Untuk gereja yang mapan',
      'pricing.harvest.price': 'Hubungi Kami',
      'pricing.harvest.period': '/bulan',
      'pricing.harvest.features': [
        'Anggota tak terbatas',
        'Pelaporan khusus',
        'Dukungan fitur kustom',
        'Server personal',
        'Database terpisah',
      ],
      'pricing.harvest.button': 'Hubungi Kami',

      // Why Us Section
      'whyUs.title': 'Mengapa Kami? Diciptakan dari Hati Pelayanan.',
      'whyUs.intro':
        'Di balik setiap baris kode Lumen, ada sebuah hati yang memahami. Saya mengenal betul bagaimana rasanya mencurahkan waktu dan tenaga untuk pelayanan, namun seringkali terhambat oleh beban administrasi yang tak ada habisnya. Dari sinilah Lumen lahir—bukan sekadar perangkat lunak, melainkan sebuah visi yang dihidupkan.',
      'whyUs.personal':
        'Sebagai seorang pelayan gereja, saya telah merasakan sendiri tantangan dalam mengelola jemaat, menata keuangan, dan mengkoordinir berbagai kegiatan. Saya melihat langsung bagaimana waktu yang seharusnya bisa digunakan untuk penggembalaan, malah habis di meja kerja mengurus data dan laporan. Keinginan untuk melihat gereja lebih fokus pada misinya yang sejati—yaitu melayani dan memuridkan—adalah pendorong utama di balik setiap fitur Lumen.',
      'whyUs.dedication':
        'Lumen dibangun dengan pemahaman mendalam tentang ekosistem gereja. Setiap detail dirancang untuk menjawab kebutuhan unik Anda, dari pelacakan kehadiran yang sensitif hingga pelaporan keuangan yang transparan. Kami percaya, dengan meringankan beban administratif, para pemimpin gereja dapat kembali mencurahkan energi mereka sepenuhnya pada hubungan, pertumbuhan rohani, dan dampak nyata di tengah masyarakat.',
      'whyUs.conclusion':
        'Lumen adalah persembahan kami untuk pelayanan Anda. Ini adalah alat yang kami harap dapat menerangi jalan Anda, memberikan kejelasan, dan membebaskan Anda untuk fokus pada apa yang paling penting: jiwa-jiwa. Karena kami percaya, ketika gereja Anda bersinar, dunia pun akan melihat terang-Nya.',
      'footer.product.title': 'Produk',
      'footer.product.features': 'Fitur',
      'footer.product.pricing': 'Harga',
      'footer.product.security': 'Keamanan',
      'footer.company.title': 'Perusahaan',
      'footer.company.about': 'Tentang',
      'footer.company.blog': 'Blog',
      'footer.company.careers': 'Karir',
      'footer.support.title': 'Dukungan',
      'footer.support.help': 'Pusat Bantuan',
      'footer.support.contact': 'Kontak',
      'footer.support.terms': 'Syarat',
      'footer.copyright': '© 2026 Lumen. All rights reserved.',

      // About Page
      'about.hero.title': 'Cahaya Di Balik Lumen',
      'about.hero.subtitle': 'Sebuah kisah yang lahir dari hati pelayanan dan keinginan untuk membebaskan gereja dari beban administrasi.',

      'about.why.title': 'Mengapa Lumen Diciptakan',
      'about.why.story': 'Lumen diciptakan oleh seorang developer Kristen yang melayani sebagai pekerja gereja di sebuah gereja lokal di Bekasi, Jawa Barat. Bukan dibangun di kantor perusahaan, melainkan lahir dari tantangan nyata yang dihadapi oleh jemaat kecil-menengah. Pembuatnya melihat langsung perjuangan dalam mengelola data jemaat secara manual dan menyadari bahwa banyak gereja tidak memiliki staf teknis atau anggaran besar untuk mengimplementasikan perangkat lunak kelas atas. Mereka menyaksikan bagaimana waktu dan energi yang seharusnya dihabiskan untuk penggembalaan dan pemuridan malah tersedot oleh spreadsheet dan entri data manual. Dari realitas itulah Lumen lahir—bukan sebagai produk komersial terlebih dahulu, melainkan sebagai alat pelayanan yang dirancang untuk meringankan beban.',
      'about.why.lokasi': 'Bekasi, Jawa Barat—tempat perjalanan ini dimulai.',

      'about.mission.title': 'Misi dan Nilai Inti Kami',
      'about.mission.description': 'Tiga pilar memandu segala yang kami lakukan di Lumen',

      'about.values.accessibility.title': 'Aksesibilitas Radikal',
      'about.values.accessibility.description': 'Mendigitalkan data gereja dengan cara yang paling sederhana, sehingga bahkan pemimpin yang tidak berpengalaman teknis dapat menavigasi informasi jemaat dengan percaya diri.',

      'about.values.affordability.title': 'Keterjangkauan',
      'about.values.affordability.description': 'Kami percaya teknologi harus memberdayakan Amanat Agung, bukan menguras kas gereja. Dirancang untuk semurah mungkin sehingga bahkan gereja terkecil pun bisa merasakan manfaatnya.',

      'about.values.efficiency.title': 'Efisiensi',
      'about.values.efficiency.description': 'Sistem berbasis web lebih unggul dari spreadsheet—pembaruan real-time, aksesibilitas dari perangkat apa pun, dan koordinasi terpusat untuk semua pelayanan.',

      'about.values.security.title': 'Keamanan Data',
      'about.values.security.description': 'Meskipun terjangkau, keamanan adalah prioritas utama. Semua data jemaat dienkripsi dan dicadangkan secara berkala untuk memastikan privasi dan ketenangan pikiran.',

      'about.how.title': 'Bagaimana Kami Menyelesaikannya',
      'about.how.solution': 'Lumen dirancang dengan apa yang kami sebut "logika gereja"—dibangun oleh seseorang yang memahami irama kehidupan jemaat. Karena pembuatnya adalah pelayan aktif di gereja, Lumen tidak berpikir seperti perangkat lunak CRM generik. Ia berpikir seperti seorang pendeta, administrator keuangan, dan koordinator pelayanan sekaligus.',
      'about.how.efficiency': 'Daripada mengelola spreadsheet di email dan WhatsApp, Anda mendapatkan satu sistem terpusat tempat kehadiran dilacak, pemberian dicatat, acara dijadwalkan, dan profil anggota dipertahankan. Pembaruan real-time berarti tidak ada lagi data yang ketinggalan jaman. Aksesibilitas dari perangkat apa pun berarti administrator gereja dapat mengelola informasi dari mana saja. Koordinasi terpusat berarti setiap departemen pelayanan tetap terinformasi tanpa komunikasi bolak-balik yang tidak ada habisnya.',

      'about.commitment.title': 'Komitmen Kami kepada Anda',
      'about.commitment.security': 'Keamanan Tanpa Kompromi: Meskipun Lumen terjangkau, perlindungan data tidak pernah dikompromikan. Semua informasi jemaat dienkripsi dan dicadangkan secara teratur, memastikan privasi dan kepercayaan yang layak diterima gereja Anda.',
      'about.commitment.community': 'Oleh Gereja, Untuk Gereja: Kami tidak hanya membangun perangkat lunak—kami membangun dalam kemitraan dengan Anda. Lumen mencakup sistem permintaan fitur khusus di mana pengguna dapat menyarankan dan memberikan suara pada fitur baru. Umpan balik Anda secara langsung membentuk evolusi Lumen, memastikan perangkat lunak berkembang seiring dengan kebutuhan unik gereja Anda.',
      'about.commitment.closing': 'Ini adalah pertumbuhan yang didorong komunitas dalam bentuk terbaiknya.',

      'about.cta.title': 'Bergabunglah dengan Komunitas Lumen',
      'about.cta.description': 'Ratusan gereja sudah menyederhanakan administrasi mereka dan fokus lebih pada misi mereka. Gereja Anda bisa menjadi berikutnya.',
      'about.cta.primaryButton': 'Mulai Uji Coba Gratis Anda',
      'about.cta.secondaryButton': 'Jadwalkan Demo',

      // Testimonials Section
      'about.testimonials.title': 'Apa Kata Pengguna Lumen',
      'about.testimonials.subtitle': 'Suara nyata dari gereja nyata yang mengubah pelayanan mereka',

      'about.testimonial.pastor.quote': 'Lumen telah memberi kami mata untuk melihat siapa yang tidak hadir dan hati untuk menjangkau. Analitik kehadiran adalah pengubah permainan untuk pertumbuhan kami.',
      'about.testimonial.pastor.name': 'Gembala Sidang, Gereja Gunung Karmel',

      'about.testimonial.admin.quote': 'Menjadwalkan tim ibadah dulu sangat mengganggu. Sekarang, ini terjadi dalam hitungan menit, dan pengingat WhatsApp membuat semua orang tetap terdepan.',
      'about.testimonial.admin.name': 'Administrator Gereja, Pusat Pelayanan Kasih',

      'about.testimonial.finance.quote': 'Pelacakan aliran keuangan sangat transparan dan mudah digunakan. Ini telah membangun kepercayaan yang sangat besar dalam jemaat kami.',
      'about.testimonial.finance.name': 'Kepala Keuangan, Persekutuan Emanuel',
    },
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en', // use en if detected lng is not available
    // lng: 'en', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // react already does escaping
    },
  });

export default i18n;
