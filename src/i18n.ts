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
        'Paturehon simplifies church administration, from congregation care to financial transparency, so you can focus on what matters most: the people.',
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
        'Paturehon helps church leaders notice when a member stops attending, track who needs a birthday prayer, and understand the spiritual health of your congregation through data-driven insights. Focus on relationships while we handle the administration.',
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
        'Volunteer scheduling',
        'Congregation attendance tracking',
      ],
      'pricing.growth.button': 'Start Free Trial',

      'pricing.harvest.name': 'Harvest',
      'pricing.harvest.description': 'For established ministries',
      'pricing.harvest.price': 'Contact sales',
      'pricing.harvest.period': '',
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
        'Behind every line of code in Paturehon, there is a heart that understands. I know exactly what it feels like to pour time and energy into ministry, yet often hindered by endless administrative burdens. This is where Paturehon was born—not just software, but a vision brought to life.',
      'whyUs.personal':
        'As a church servant, I have personally experienced the challenges of managing congregations, organizing finances, and coordinating various activities. I have seen firsthand how time that should be used for shepherding is instead spent at the desk handling data and reports. The desire to see churches focus more on their true mission—to serve and disciple—is the main driving force behind every feature of Paturehon.',
      'whyUs.dedication':
        'Paturehon is built with a deep understanding of the church ecosystem. Every detail is designed to address your unique needs, from sensitive attendance tracking to transparent financial reporting. We believe that by lightening the administrative burden, church leaders can once again devote their energy fully to relationships, spiritual growth, and real impact in the community.',
      'whyUs.conclusion':
        'Paturehon is our offering to your ministry. It is a tool we hope will illuminate your path, provide clarity, and free you to focus on what matters most: souls. Because we believe, when your church shines, the world will see His light.',
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
      'footer.support.privacy': 'Privacy',
      'footer.copyright': '© 2026 Paturehon. All rights reserved.',

      // About Page
      'about.hero.title': 'The Light Behind Paturehon',
      'about.hero.subtitle':
        'A story born from the heart of ministry and the desire to set churches free from administrative burdens.',

      'about.why.title': 'Why Paturehon Was Born',
      'about.why.story':
        "Paturehon was created by a Christian developer who serves as a ministry worker in a local church in Bekasi, West Java. This wasn't built in a corporate office, but born out of the real-life challenges faced by a small-to-medium congregation. The creator saw firsthand the struggle of managing congregation data manually and realized that many churches lack the technical staff or massive budgets to implement high-end software. They witnessed time and energy that should have been devoted to shepherding and discipleship getting consumed by spreadsheets and manual data entry. From that reality, Paturehon was born—not as a commercial product first, but as a ministry tool created to lighten the load.",
      'about.why.lokasi': 'Bekasi, West Java—where this journey began.',

      'about.mission.title': 'Our Core Mission & Values',
      'about.mission.description':
        'Three pillars guide everything we do at Paturehon',

      'about.values.accessibility.title': 'Radical Accessibility',
      'about.values.accessibility.description':
        "Digitizing church data in the simplest way possible, so even non-technical leaders can navigate their congregation's information with confidence.",

      'about.values.affordability.title': 'Affordability',
      'about.values.affordability.description':
        "We believe technology should empower the Great Commission, not drain the church's treasury. Designed to be as affordable as possible so even the smallest churches can benefit.",

      'about.values.efficiency.title': 'Efficiency',
      'about.values.efficiency.description':
        'Web-based systems are superior to spreadsheets—real-time updates, accessibility from any device, and centralized coordination for all ministries.',

      'about.values.security.title': 'Data Security',
      'about.values.security.description':
        'While affordable, security is a top priority. All congregation data is encrypted and backed up to ensure privacy and peace of mind.',

      'about.how.title': 'How We Solve It',
      'about.how.solution':
        'Paturehon is designed with what we call "church logic"—built by someone who understands the rhythms of congregational life. Because the developer is an active servant in the church, Paturehon doesn\'t think like generic CRM software. It thinks like a pastor, a finance administrator, and a ministry coordinator all at once.',
      'about.how.efficiency':
        'Instead of juggling spreadsheets across email and WhatsApp, you get one centralized system where attendance is tracked, giving is recorded, events are scheduled, and member profiles are maintained. Real-time updates mean no more outdated data. Accessibility from any device means the church administrator can manage information from anywhere. Centralized coordination means every ministry department stays informed without endless back-and-forth communication.',

      'about.commitment.title': 'Our Commitment to You',
      'about.commitment.security':
        'Security Without Compromise: While Paturehon is affordable, data protection is never compromised. All congregation information is encrypted and backed up regularly, ensuring the privacy and trust your church deserves.',
      'about.commitment.community':
        "By the Church, For the Church: We don't just build software—we build in partnership with you. Paturehon includes a dedicated feature request system where users can suggest and vote on new features. Your feedback directly shapes Paturehon's evolution, ensuring the software grows alongside your church's unique needs.",
      'about.commitment.closing':
        'This is community-driven growth at its finest.',

      'about.cta.title': 'Join the Paturehon Community',
      'about.cta.description':
        'Hundreds of churches are already simplifying their administration and focusing more on their mission. Your church could be next.',
      'about.cta.primaryButton': 'Start Your Free Trial',
      'about.cta.secondaryButton': 'Schedule a Demo',

      // Testimonials Section
      'about.testimonials.title': 'What Our Community Says',
      'about.testimonials.subtitle':
        'Real voices from real churches transforming their ministry',

      'about.testimonial.pastor.quote':
        'Paturehon has given us eyes to see who is missing and heart to reach out. The attendance analytics are a game-changer for our growth.',
      'about.testimonial.pastor.name': 'Lead Pastor, Mount Carmel Church',

      'about.testimonial.admin.quote':
        'Scheduling worship teams used to be a nightmare. Now, it happens in minutes, and the WhatsApp reminders keep everyone on track.',
      'about.testimonial.admin.name':
        'Church Administrator, Grace Ministry Center',

      'about.testimonial.finance.quote':
        'The financial flow tracking is so transparent and easy to use. It has built immense trust within our congregation.',
      'about.testimonial.finance.name': 'Finance Head, Emmanuel Fellowship',

      // FAQ Section
      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Everything you need to know about Paturehon',

      'faq.q1.question': 'What is Paturehon?',
      'faq.q1.answer':
        'Paturehon is a church management system designed to simplify administration. It helps churches manage members, track attendance, handle finances, schedule ministries, and automate care—all in one easy-to-use platform.',

      'faq.q2.question': 'How much does Paturehon cost?',
      'faq.q2.answer':
        'Paturehon is designed to be affordable for churches of all sizes. We offer flexible pricing plans starting from free trials to paid subscriptions. Visit our pricing page to see all available plans.',

      'faq.q3.question': 'Is my church data secure?',
      'faq.q3.answer':
        "Yes, security is our top priority. All data is encrypted and backed up regularly. We comply with industry standards and maintain strict security protocols to protect your congregation's privacy.",

      'faq.q4.question': 'Can Paturehon send WhatsApp reminders?',
      'faq.q4.answer':
        'Yes! Paturehon can auto-send birthday reminders and event notifications via WhatsApp to keep your congregation engaged and informed.',

      'faq.q5.question': 'Is Paturehon easy to set up?',
      'faq.q5.answer':
        'Absolutely. Paturehon is designed with churches in mind, so setup is straightforward. We also offer onboarding support to get your team up to speed quickly.',

      'faq.q6.question': 'Do you offer support?',
      'faq.q6.answer':
        "Yes, we provide comprehensive support including documentation, video tutorials, and direct support for our paid plans. We're here to help your church succeed.",

      // Help Center
      'help.title': 'Help Center',
      'help.subtitle': 'Find answers and support for using Paturehon',
      'help.gettingStarted.title': 'Getting Started',
      'help.gettingStarted.desc':
        'Learn the basics of setting up your church on Paturehon',
      'help.features.title': 'Features',
      'help.features.desc':
        'Explore all the powerful features Paturehon offers',
      'help.troubleshooting.title': 'Troubleshooting',
      'help.troubleshooting.desc': 'Solutions to common issues and problems',
      'help.bestPractices.title': 'Best Practices',
      'help.bestPractices.desc': 'Tips and strategies for maximizing Paturehon',
      'help.contact.button': 'Need More Help?',

      // Contact Page
      'contact.title': 'Contact Us',
      'contact.subtitle': 'Get in touch with the Paturehon team',
      'contact.email.label': 'Email Address',
      'contact.email.placeholder': 'your@email.com',
      'contact.name.label': 'Full Name',
      'contact.name.placeholder': 'Your Name',
      'contact.subject.label': 'Subject',
      'contact.subject.placeholder': 'What can we help you with?',
      'contact.message.label': 'Message',
      'contact.message.placeholder': 'Tell us more about your inquiry...',
      'contact.submit': 'Send Message',
      'contact.info.email': 'Email',
      'contact.info.phone': 'Phone',
      'contact.info.address': 'Address',

      // Terms Page
      'terms.title': 'Terms of Service',
      'terms.lastUpdated': 'Last Updated',
      'terms.section1.title': '1. Acceptance of Terms',
      'terms.section1.content':
        'By accessing and using Paturehon, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
      'terms.section2.title': '2. Use License',
      'terms.section2.content':
        'Permission is granted to temporarily download one copy of the materials (information or software) on Paturehon for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:',
      'terms.section3.title': '3. Disclaimer',
      'terms.section3.content':
        "The materials on Paturehon's web site are provided on an 'as is' basis. Paturehon makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
      'terms.section4.title': '4. Limitations',
      'terms.section4.content':
        "In no event shall Paturehon or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Paturehon's Internet site, even if Paturehon or a Paturehon authorized representative has been notified orally or in writing of the possibility of such damage.",
      'terms.section5.title': '5. Accuracy of Materials',
      'terms.section5.content':
        "The materials appearing on Paturehon's web site could include technical, typographical, or photographic errors. Paturehon does not warrant that any of the materials on Paturehon's web site are accurate, complete, or current. Paturehon may make changes to the materials contained on its web site at any time without notice.",

      // Privacy Policy Page
      'privacy.title': 'Privacy Policy',
      'privacy.lastUpdated': 'Last Updated',
      'privacy.section1.title': '1. Information We Collect',
      'privacy.section1.content':
        'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, and church-related information.',
      'privacy.section2.title': '2. How We Use Your Information',
      'privacy.section2.content':
        'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotions.',
      'privacy.section3.title': '3. Information Sharing',
      'privacy.section3.content':
        'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our services.',
      'privacy.section4.title': '4. Data Security',
      'privacy.section4.content':
        'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted and backed up regularly.',
      'privacy.section5.title': '5. Your Rights',
      'privacy.section5.content':
        'You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.',
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
        'Paturehon menghadirkan efisiensi dalam pelayanan dan keterbukaan dalam laporan keuangan. Karena di balik administrasi yang rapi, ada pelayanan yang lebih berarti.',
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
        'Paturehon membantu Anda menyadari saat seorang jemaat mulai jarang hadir, mengingatkan siapa yang membutuhkan doa di hari ulang tahunnya, hingga memahami kesehatan rohani jemaat melalui data yang akurat. Fokuslah membangun hubungan, biarkan kami yang mengurus administrasinya.',
      'value.button': 'Mulai Uji Coba Gratis Anda',

      // Pricing Section
      'pricing.title': 'Harga Sederhana, Transparan',
      'pricing.description':
        'Temukan Solusi Tepat untuk Setiap Tahap Pertumbuhan Gereja Anda',

      // Pricing Plans
      'pricing.seed.name': 'Bibit',
      'pricing.seed.description': 'Sempurna untuk gereja kecil',
      'pricing.seed.price': 'Rp. 49.000 ',
      'pricing.seed.features': [
        'Pencatatan hingga 55 jemaat',
        'Kalender acara',
        'Pencatatan keuangan',
        'Server bersama',
        'Pencatatan aset',
      ],
      'pricing.seed.button': 'Mulai',

      'pricing.growth.name': 'Bertumbuh',
      'pricing.growth.description': 'Untuk gereja yang sedang berkembang',
      'pricing.growth.price': 'Rp. 75.000',
      'pricing.growth.period': '/bulan',
      'pricing.growth.badge': 'Rekomendasi',
      'pricing.growth.features': [
        'Pencatatan hingga 200 jemaat',
        'Analitik lanjutan',
        'Otomasi WhatsApp',
        'Dukungan prioritas developer',
        'Server bersama',
        'Pencatatan aset',
        'Penjadwalan volenteer',
        'Pendataan kehadiran jemaat',
      ],
      'pricing.growth.button': 'Mulai Uji Coba Gratis',

      'pricing.harvest.name': 'Panen',
      'pricing.harvest.description': 'Untuk gereja yang mapan',
      'pricing.harvest.price': 'Hubungi Kami',
      'pricing.harvest.period': '',
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
        'Di balik setiap baris kode Paturehon, ada sebuah hati yang memahami. Saya mengenal betul bagaimana rasanya mencurahkan waktu dan tenaga untuk pelayanan, namun seringkali terhambat oleh beban administrasi yang tak ada habisnya. Dari sinilah Paturehon lahir—bukan sekadar perangkat lunak, melainkan sebuah visi yang dihidupkan.',
      'whyUs.personal':
        'Sebagai seorang pelayan gereja, saya telah merasakan sendiri tantangan dalam mengelola jemaat, menata keuangan, dan mengkoordinir berbagai kegiatan. Saya melihat langsung bagaimana waktu yang seharusnya bisa digunakan untuk penggembalaan, malah habis di meja kerja mengurus data dan laporan. Keinginan untuk melihat gereja lebih fokus pada misinya yang sejati—yaitu melayani dan memuridkan—adalah pendorong utama di balik setiap fitur Paturehon.',
      'whyUs.dedication':
        'Paturehon dibangun dengan pemahaman mendalam tentang ekosistem gereja. Setiap detail dirancang untuk menjawab kebutuhan unik Anda, dari pelacakan kehadiran yang sensitif hingga pelaporan keuangan yang transparan. Kami percaya, dengan meringankan beban administratif, para pemimpin gereja dapat kembali mencurahkan energi mereka sepenuhnya pada hubungan, pertumbuhan rohani, dan dampak nyata di tengah masyarakat.',
      'whyUs.conclusion':
        'Paturehon adalah persembahan kami untuk pelayanan Anda. Ini adalah alat yang kami harap dapat menerangi jalan Anda, memberikan kejelasan, dan membebaskan Anda untuk fokus pada apa yang paling penting: jiwa-jiwa. Karena kami percaya, ketika gereja Anda bersinar, dunia pun akan melihat terang-Nya.',
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
      'footer.support.privacy': 'Privasi',
      'footer.copyright': '© 2026 Paturehon. All rights reserved.',

      // About Page
      'about.hero.title': 'Cahaya Di Balik Paturehon',
      'about.hero.subtitle':
        'Sebuah kisah yang lahir dari hati pelayanan dan keinginan untuk membebaskan gereja dari beban administrasi.',

      'about.why.title': 'Mengapa Paturehon Diciptakan',
      'about.why.story':
        'Paturehon diciptakan oleh seorang developer Kristen yang melayani sebagai pekerja gereja di sebuah gereja lokal di Bekasi, Jawa Barat. Bukan dibangun di kantor perusahaan, melainkan lahir dari tantangan nyata yang dihadapi oleh jemaat kecil-menengah. Pembuatnya melihat langsung perjuangan dalam mengelola data jemaat secara manual dan menyadari bahwa banyak gereja tidak memiliki staf teknis atau anggaran besar untuk mengimplementasikan perangkat lunak kelas atas. Mereka menyaksikan bagaimana waktu dan energi yang seharusnya dihabiskan untuk penggembalaan dan pemuridan malah tersedot oleh spreadsheet dan entri data manual. Dari realitas itulah Paturehon lahir—bukan sebagai produk komersial terlebih dahulu, melainkan sebagai alat pelayanan yang dirancang untuk meringankan beban.',
      'about.why.lokasi': 'Bekasi, Jawa Barat—tempat perjalanan ini dimulai.',

      'about.mission.title': 'Misi dan Nilai Inti Kami',
      'about.mission.description':
        'Tiga pilar memandu segala yang kami lakukan di Paturehon',

      'about.values.accessibility.title': 'Aksesibilitas Radikal',
      'about.values.accessibility.description':
        'Mendigitalkan data gereja dengan cara yang paling sederhana, sehingga bahkan pemimpin yang tidak berpengalaman teknis dapat menavigasi informasi jemaat dengan percaya diri.',

      'about.values.affordability.title': 'Keterjangkauan',
      'about.values.affordability.description':
        'Kami percaya teknologi harus memberdayakan Amanat Agung, bukan menguras kas gereja. Dirancang untuk semurah mungkin sehingga bahkan gereja terkecil pun bisa merasakan manfaatnya.',

      'about.values.efficiency.title': 'Efisiensi',
      'about.values.efficiency.description':
        'Sistem berbasis web lebih unggul dari spreadsheet—pembaruan real-time, aksesibilitas dari perangkat apa pun, dan koordinasi terpusat untuk semua pelayanan.',

      'about.values.security.title': 'Keamanan Data',
      'about.values.security.description':
        'Meskipun terjangkau, keamanan adalah prioritas utama. Semua data jemaat dienkripsi dan dicadangkan secara berkala untuk memastikan privasi dan ketenangan pikiran.',

      'about.how.title': 'Bagaimana Kami Menyelesaikannya',
      'about.how.solution':
        'Paturehon dirancang dengan apa yang kami sebut "logika gereja"—dibangun oleh seseorang yang memahami irama kehidupan jemaat. Karena pembuatnya adalah pelayan aktif di gereja, Paturehon tidak berpikir seperti perangkat lunak CRM generik. Ia berpikir seperti seorang pendeta, administrator keuangan, dan koordinator pelayanan sekaligus.',
      'about.how.efficiency':
        'Daripada mengelola spreadsheet di email dan WhatsApp, Anda mendapatkan satu sistem terpusat tempat kehadiran dilacak, pemberian dicatat, acara dijadwalkan, dan profil anggota dipertahankan. Pembaruan real-time berarti tidak ada lagi data yang ketinggalan jaman. Aksesibilitas dari perangkat apa pun berarti administrator gereja dapat mengelola informasi dari mana saja. Koordinasi terpusat berarti setiap departemen pelayanan tetap terinformasi tanpa komunikasi bolak-balik yang tidak ada habisnya.',

      'about.commitment.title': 'Komitmen Kami kepada Anda',
      'about.commitment.security':
        'Keamanan Tanpa Kompromi: Meskipun Paturehon terjangkau, perlindungan data tidak pernah dikompromikan. Semua informasi jemaat dienkripsi dan dicadangkan secara teratur, memastikan privasi dan kepercayaan yang layak diterima gereja Anda.',
      'about.commitment.community':
        'Oleh Gereja, Untuk Gereja: Kami tidak hanya membangun perangkat lunak—kami membangun dalam kemitraan dengan Anda. Paturehon mencakup sistem permintaan fitur khusus di mana pengguna dapat menyarankan dan memberikan suara pada fitur baru. Umpan balik Anda secara langsung membentuk evolusi Paturehon, memastikan perangkat lunak berkembang seiring dengan kebutuhan unik gereja Anda.',
      'about.commitment.closing':
        'Ini adalah pertumbuhan yang didorong komunitas dalam bentuk terbaiknya.',

      'about.cta.title': 'Bergabunglah dengan Komunitas Paturehon',
      'about.cta.description':
        'Ratusan gereja sudah menyederhanakan administrasi mereka dan fokus lebih pada misi mereka. Gereja Anda bisa menjadi berikutnya.',
      'about.cta.primaryButton': 'Mulai Uji Coba Gratis Anda',
      'about.cta.secondaryButton': 'Jadwalkan Demo',

      // Testimonials Section
      'about.testimonials.title': 'Apa Kata Pengguna Paturehon',
      'about.testimonials.subtitle':
        'Suara nyata dari gereja nyata yang mengubah pelayanan mereka',

      'about.testimonial.pastor.quote':
        'Paturehon telah memberi kami mata untuk melihat siapa yang tidak hadir dan hati untuk menjangkau. Analitik kehadiran adalah pengubah permainan untuk pertumbuhan kami.',
      'about.testimonial.pastor.name': 'Gembala Sidang, Gereja Gunung Karmel',

      'about.testimonial.admin.quote':
        'Menjadwalkan tim ibadah dulu sangat mengganggu. Sekarang, ini terjadi dalam hitungan menit, dan pengingat WhatsApp membuat semua orang tetap terdepan.',
      'about.testimonial.admin.name':
        'Administrator Gereja, Pusat Pelayanan Kasih',

      'about.testimonial.finance.quote':
        'Pelacakan aliran keuangan sangat transparan dan mudah digunakan. Ini telah membangun kepercayaan yang sangat besar dalam jemaat kami.',
      'about.testimonial.finance.name': 'Kepala Keuangan, Persekutuan Emanuel',

      // FAQ Section
      'faq.title': 'Pertanyaan yang Sering Diajukan',
      'faq.subtitle': 'Semua yang perlu Anda ketahui tentang Paturehon',

      'faq.q1.question': 'Apa itu Paturehon?',
      'faq.q1.answer':
        'Paturehon adalah sistem manajemen gereja yang dirancang untuk menyederhanakan administrasi. Ini membantu gereja mengelola anggota, melacak kehadiran, menangani keuangan, menjadwalkan pelayanan, dan mengotomatisasi perawatan—semuanya dalam satu platform yang mudah digunakan.',

      'faq.q2.question': 'Berapa biaya Paturehon?',
      'faq.q2.answer':
        'Paturehon dirancang untuk terjangkau bagi gereja dari semua ukuran. Kami menawarkan paket harga yang fleksibel mulai dari uji coba gratis hingga langganan berbayar. Kunjungi halaman penetapan harga kami untuk melihat semua paket yang tersedia.',

      'faq.q3.question': 'Apakah data gereja saya aman?',
      'faq.q3.answer':
        'Ya, keamanan adalah prioritas utama kami. Semua data dienkripsi dan dicadangkan secara teratur. Kami mematuhi standar industri dan mempertahankan protokol keamanan ketat untuk melindungi privasi jemaat Anda.',

      'faq.q4.question': 'Bisakah Paturehon mengirim pengingat WhatsApp?',
      'faq.q4.answer':
        'Ya! Paturehon dapat mengirim pengingat ulang tahun dan pemberitahuan acara melalui WhatsApp secara otomatis untuk menjaga jemaat Anda tetap terlibat dan terinformasi.',

      'faq.q5.question': 'Apakah Paturehon mudah diatur?',
      'faq.q5.answer':
        'Tentu saja. Paturehon dirancang dengan gereja dalam pikiran, jadi pengaturan sangat mudah. Kami juga menawarkan dukungan onboarding untuk membuat tim Anda cepat memahaminya.',

      'faq.q6.question': 'Apakah Anda menawarkan dukungan?',
      'faq.q6.answer':
        'Ya, kami menyediakan dukungan komprehensif termasuk dokumentasi, tutorial video, dan dukungan langsung untuk paket berbayar kami. Kami ada di sini untuk membantu gereja Anda sukses.',

      // Help Center
      'help.title': 'Pusat Bantuan',
      'help.subtitle':
        'Temukan jawaban dan dukungan untuk menggunakan Paturehon',
      'help.gettingStarted.title': 'Memulai',
      'help.gettingStarted.desc':
        'Pelajari dasar-dasar menyiapkan gereja Anda di Paturehon',
      'help.features.title': 'Fitur',
      'help.features.desc':
        'Jelajahi semua fitur canggih yang Paturehon tawarkan',
      'help.troubleshooting.title': 'Pemecahan Masalah',
      'help.troubleshooting.desc': 'Solusi untuk masalah dan pertanyaan umum',
      'help.bestPractices.title': 'Praktik Terbaik',
      'help.bestPractices.desc':
        'Tips dan strategi untuk memaksimalkan Paturehon',
      'help.contact.button': 'Butuh Lebih Banyak Bantuan?',

      // Contact Page
      'contact.title': 'Hubungi Kami',
      'contact.subtitle': 'Hubungi tim Paturehon',
      'contact.email.label': 'Alamat Email',
      'contact.email.placeholder': 'anda@email.com',
      'contact.name.label': 'Nama Lengkap',
      'contact.name.placeholder': 'Nama Anda',
      'contact.subject.label': 'Subjek',
      'contact.subject.placeholder': 'Apa yang bisa kami bantu?',
      'contact.message.label': 'Pesan',
      'contact.message.placeholder':
        'Ceritakan lebih lanjut tentang pertanyaan Anda...',
      'contact.submit': 'Kirim Pesan',
      'contact.info.email': 'Email',
      'contact.info.phone': 'Telepon',
      'contact.info.address': 'Alamat',

      // Terms Page
      'terms.title': 'Syarat Layanan',
      'terms.lastUpdated': 'Terakhir Diperbarui',
      'terms.section1.title': '1. Penerimaan Syarat',
      'terms.section1.content':
        'Dengan mengakses dan menggunakan Paturehon, Anda menerima dan setuju untuk terikat oleh ketentuan dan ketentuan perjanjian ini. Jika Anda tidak setuju untuk mematuhi hal di atas, silakan jangan gunakan layanan ini.',
      'terms.section2.title': '2. Lisensi Penggunaan',
      'terms.section2.content':
        'Izin diberikan untuk sementara mengunduh satu salinan materi (informasi atau perangkat lunak) di Paturehon hanya untuk melihat pribadi, non-komersial. Ini adalah pemberian lisensi, bukan transfer judul, dan di bawah lisensi ini Anda tidak boleh:',
      'terms.section3.title': '3. Penafian',
      'terms.section3.content':
        "Materi di situs web Paturehon disediakan dengan dasar 'sebagaimana adanya'. Paturehon tidak memberikan jaminan, tersurat atau tersirat, dan dengan ini menafikan dan meniadakan semua jaminan dan kondisi lainnya termasuk, tanpa batasan, jaminan tersirat atau kondisi kelayakan, kesesuaian untuk tujuan tertentu, atau non-pelanggaran hak kekayaan intelektual atau pelanggaran hak lainnya.",
      'terms.section4.title': '4. Pembatasan',
      'terms.section4.content':
        'Dalam hal apa pun Paturehon atau pemasoknya tidak bertanggung jawab atas kerusakan apa pun (termasuk, tanpa batasan, kerusakan untuk kehilangan data atau laba, atau karena gangguan bisnis) yang timbul dari penggunaan atau ketidakmampuan menggunakan materi di situs Internet Paturehon, bahkan jika Paturehon atau perwakilan resmi Paturehon telah diberitahu secara lisan atau tertulis tentang kemungkinan kerusakan tersebut.',
      'terms.section5.title': '5. Akurasi Materi',
      'terms.section5.content':
        'Materi yang muncul di situs web Paturehon dapat mencakup kesalahan teknis, tipografi, atau fotografi. Paturehon tidak menjamin bahwa ada materi di situs web Paturehon yang akurat, lengkap, atau terkini. Paturehon dapat membuat perubahan pada materi yang terdapat di situs webnya kapan saja tanpa pemberitahuan.',

      // Privacy Policy Page
      'privacy.title': 'Kebijakan Privasi',
      'privacy.lastUpdated': 'Terakhir Diperbarui',
      'privacy.section1.title': '1. Informasi yang Kami Kumpulkan',
      'privacy.section1.content':
        'Kami mengumpulkan informasi yang Anda berikan langsung kepada kami, seperti saat Anda membuat akun, menggunakan layanan kami, atau menghubungi kami untuk dukungan. Ini dapat mencakup nama Anda, alamat email, nomor telepon, dan informasi terkait gereja.',
      'privacy.section2.title': '2. Cara Kami Menggunakan Informasi Anda',
      'privacy.section2.content':
        'Kami menggunakan informasi yang kami kumpulkan untuk menyediakan, memelihara, dan meningkatkan layanan kami, memproses transaksi, mengirimkan pemberitahuan teknis dan pesan dukungan, dan berkomunikasi dengan Anda tentang produk, layanan, dan promosi.',
      'privacy.section3.title': '3. Berbagi Informasi',
      'privacy.section3.content':
        'Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda ke pihak ketiga tanpa persetujuan Anda, kecuali seperti yang dijelaskan dalam kebijakan ini. Kami dapat membagikan informasi Anda dengan penyedia layanan terpercaya yang membantu kami mengoperasikan layanan kami.',
      'privacy.section4.title': '4. Keamanan Data',
      'privacy.section4.content':
        'Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda dari akses, perubahan, pengungkapan, atau penghancuran yang tidak sah. Semua data dienkripsi dan dicadangkan secara teratur.',
      'privacy.section5.title': '5. Hak Anda',
      'privacy.section5.content':
        'Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda. Anda juga dapat memilih keluar dari menerima komunikasi promosi dari kami dengan mengikuti instruksi berhenti berlangganan dalam komunikasi tersebut.',
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
