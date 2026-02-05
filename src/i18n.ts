import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
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
    },
  },
  id: {
    translation: {
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
