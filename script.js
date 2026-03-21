 // Плавна прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Створення частинок
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Анімація появи елементів при прокрутці
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// --- Початок коду для перемикання мов (ВЕРСІЯ 4: Без JSON, RU за замовчуванням) ---

// 1. ОБ'ЄКТ З ПЕРЕКЛАДАМИ (ЗАМІСТЬ ФАЙЛУ JSON)
// Твоя задача - заповнити тут всі переклади для трьох мовscript.js
// 1. ОБ'ЄКТ З ПЕРЕКЛАДАМИ (ПОВНА ВЕРСІЯ)
const translations = {
  // --- index.html ---
  "title": {
    "uk": "Веб-розробник",
    "en": "Web Developer",
    "ru": "Веб-разработчик"
  },
  "nav_home": {
    "uk": "Головна",
    "en": "Home",
    "ru": "Главная"
  },
  "nav_skills": {
    "uk": "Навички",
    "en": "Skills",
    "ru": "Навыки"
  },
  "nav_projects": {
    "uk": "Проєкти",
    "en": "Projects",
    "ru": "Проекты"
  },
  "nav_prices": {
    "uk": "Ціни",
    "en": "Prices",
    "ru": "Цены"
  },
  "nav_contacts": {
    "uk": "Контакти",
    "en": "Contacts",
    "ru": "Контакты"
  },
  "hero_h1": {
    "uk": "Веб-розробник",
    "en": "Web Developer",
    "ru": "Веб-разработчик"
  },
  "hero_p": {
    "uk": "Створюю сучасні та функціональні веб-рішення",
    "en": "Creating modern and functional web solutions",
    "ru": "Создаю современные и функциональные веб-решения"
  },
  "hero_cta": {
    "uk": "Переглянути роботи",
    "en": "View Projects",
    "ru": "Смотреть работы"
  },
  "about_title": {
    "uk": "Про мене",
    "en": "About Me",
    "ru": "Обо мне"
  },
  "about_p1": {
    "uk": "Привіт! Я веб-розробник з досвідом створення сучасних веб-додатків, Telegram ботів та плагінів. Спеціалізуюсь на розробці як frontend, так і backend частин проєктів.",
    "en": "Hi! I'm a web developer with experience in creating modern web applications, Telegram bots, and plugins. I specialize in both frontend and backend project development.",
    "ru": "Привет! Я веб-разработчик с опытом создания современных веб-приложений, Telegram ботов и плагинов. Специализируюсь на разработке как frontend, так и backend частей проектов."
  },
  "about_p2": {
    "uk": "Працюю з новітніми технологіями та завжди слідкую за трендами у веб-розробці. Кожен проєкт для мене - це можливість створити щось особливе та корисне.",
    "en": "I work with the latest technologies and always follow trends in web development. For me, every project is an opportunity to create something special and useful.",
    "ru": "Работаю с новейшими технологиями и всегда слежу за трендами в веб-разработке. Каждый проект для меня - это возможность создать что-то особенное и полезное."
  },
  "why_me_title": {
    "uk": "Чому обирають мене",
    "en": "Why Choose Me",
    "ru": "Почему выбирают меня"
  },
  "why_me_card1_h3": {
    "uk": "Швидка розробка",
    "en": "Fast Development",
    "ru": "Быстрая разработка"
  },
  "why_me_card1_p": {
    "uk": "Дотримуюсь термінів та швидко реагую на зміни",
    "en": "I meet deadlines and react quickly to changes",
    "ru": "Соблюдаю сроки и быстро реагирую на изменения"
  },
  "why_me_card2_h3": {
    "uk": "Якість коду",
    "en": "Code Quality",
    "ru": "Качество кода"
  },
  "why_me_card2_p": {
    "uk": "Чистий, зрозумілий та оптимізований код",
    "en": "Clean, understandable, and optimized code",
    "ru": "Чистый, понятный и оптимизированный код"
  },
  "why_me_card3_h3": {
    "uk": "Підтримка",
    "en": "Support",
    "ru": "Поддержка"
  },
  "why_me_card3_p": {
    "uk": "Допомога навіть після завершення проєкту",
    "en": "Help even after the project is completed",
    "ru": "Помощь даже после завершения проекта"
  },

  // --- tex.html ---
  "title_skills": {
    "uk": "Навички та технології",
    "en": "Skills & Technologies",
    "ru": "Навыки и технологии"
  },
  "skills_title": {
    "uk": "Мої навички та технології",
    "en": "My Skills & Technologies",
    "ru": "Мои навыки и технологии"
  },
  "skills_card1_h3": {
    "uk": "VEB розробка",
    "en": "WEB Development",
    "ru": "WEB разработка"
  },
  "skills_card1_p": {
    "uk": "Node.js, Python, HTML/CSS",
    "en": "Node.js, Python, HTML/CSS",
    "ru": "Node.js, Python, HTML/CSS"
  },
  "skills_card2_h3": {
    "uk": "Telegram боти",
    "en": "Telegram Bots",
    "ru": "Telegram боты"
  },
  "skills_card2_p": {
    "uk": "Python, Node.js",
    "en": "Python, Node.js",
    "ru": "Python, Node.js"
  },
  "skills_card3_h3": {
    "uk": "Розробка плагінів",
    "en": "Plugin Development",
    "ru": "Разработка плагинов"
  },
  "skills_card3_p": {
    "uk": "Java",
    "en": "Java",
    "ru": "Java"
  },
  "skills_tools_title": {
    "uk": "Інструменти розробки",
    "en": "Development Tools",
    "ru": "Инструменты разработки"
  },
  "skills_tool1": {
    "uk": "VS Code",
    "en": "VS Code",
    "ru": "VS Code"
  },
  "skills_tool2": {
    "uk": "Git",
    "en": "Git",
    "ru": "Git"
  },
  "skills_tool3": {
    "uk": "IntelliJ IDEA",
    "en": "IntelliJ IDEA",
    "ru": "IntelliJ IDEA"
  },

  // --- robota.html ---
  "title_projects": {
    "uk": "Мої проєкти",
    "en": "My Projects",
    "ru": "Мои проекты"
  },
  "projects_title": {
    "uk": "Розроблені проєктів",
    "en": "Developed projects",
    "ru": "Разработанные проектов"
  },
  "project1_h3": {
    "uk": "Плагіни",
    "en": "Plugins",
    "ru": "Плагины"
  },
  "project1_p": {
    "uk": "Модульна система плагінів...",
    "en": "Modular plugin system...",
    "ru": "Модульная система плагинов..."
  },
  "project2_h3": {
    "uk": "Веб-сайт",
    "en": "Website",
    "ru": "Веб-сайт"
  },
  "project2_p": {
    "uk": "Сучасний багатосторінковий сайт...",
    "en": "Modern multi-page website...",
    "ru": "Современный многостраничный сайт..."
  },
  "project3_h3": {
    "uk": "Telegram бот для бізнесу",
    "en": "Telegram Bot for Business",
    "ru": "Telegram бот для бизнеса"
  },
  "project3_p": {
    "uk": "Автоматизація бізнес-процесів...",
    "en": "Business process automation...",
    "ru": "Автоматизация бизнес-процессов..."
  },

  // --- chena_and_usluga.html ---
  "title_prices": {
    "uk": "Ціни та послуги",
    "en": "Prices & Services",
    "ru": "Цены и услуги"
  },
  "prices_title": {
    "uk": "Ціни та послуги",
    "en": "Prices & Services",
    "ru": "Цены и услуги"
  },
  "price1_h3": {
    "uk": "Telegram бот",
    "en": "Telegram Bot",
    "ru": "Telegram бот"
  },
  "price1_price": {
    "uk": "від 100₴ до 800₴",
    "en": "from 100₴ to 800₴",
    "ru": "от 100₴ до 800₴"
  },
  "price_project": {
    "uk": "проєкт",
    "en": "project",
    "ru": "проект"
  },
  "price1_li1": {
    "uk": "Статистика",
    "en": "Statistics",
    "ru": "Статистика"
  },
  "price1_li2": {
    "uk": "1 місяць підтримки",
    "en": "1 month of support",
    "ru": "1 месяц поддержки"
  },
  "price_order": {
    "uk": "Замовити",
    "en": "Order",
    "ru": "Заказать"
  },
  "price2_h3": {
    "uk": "Discord бот",
    "en": "Discord Bot",
    "ru": "Discord бот"
  },
  "price2_price": {
    "uk": "від 100₴ до 900₴",
    "en": "from 100₴ to 900₴",
    "ru": "от 100₴ до 900₴"
  },
  "price2_li2": {
    "uk": "2 місяця підтримки",
    "en": "2 months of support",
    "ru": "2 месяца поддержки"
  },
  "price3_h3": {
    "uk": "Розробка плагінів",
    "en": "Plugin Development",
    "ru": "Разработка плагинов"
  },
  "price3_price": {
    "uk": "від 500₴ до 3000₴",
    "en": "from 500₴ to 3000₴",
    "ru": "от 500₴ до 3000₴"
  },
  "price3_li1": {
    "uk": "Розробка кілько днів",
    "en": "Development in a few days",
    "ru": "Разработка несколько дней"
  },
  "price3_li2": {
    "uk": "5 місяців підтримки",
    "en": "5 months of support",
    "ru": "5 месяцев поддержки"
  },
  "price4_h3": {
    "uk": "Веб разробка",
    "en": "Web Development",
    "ru": "Веб разработка"
  },
  "price4_price": {
    "uk": "від 900₴ до 4500₴",
    "en": "from 900₴ to 4500₴",
    "ru": "от 900₴ до 4500₴"
  },
  "price4_li2": {
    "uk": "1 рік підтримки",
    "en": "1 year of support",
    "ru": "1 год поддержки"
  },

  // --- svaz.html ---
  "title_contacts": {
    "uk": "Контакти",
    "en": "Contacts",
    "ru": "Контакты"
  },
  "contacts_title": {
    "uk": "Зв'язатися зі мною",
    "en": "Contact Me",
    "ru": "Связаться со мной"
  },
  "contacts_p1": {
    "uk": "Маєте цікавий проєкт або пропозицію? Буду радий обговорити деталі та втілити ваші ідеї в реальність!",
    "en": "Have an interesting project or proposal? I'll be glad to discuss the details and bring your ideas to life!",
    "ru": "Есть интересный проект или предложение? Буду рад обсудить детали и воплотить ваши идеи в реальность!"
  },
  "contacts_p2": {
    "uk": "Відповідаю протягом 24 годин. Працюю з клієнтами по всьому світу.",
    "en": "I respond within 24 hours. I work with clients all over the world.",
    "ru": "Отвечаю в течение 24 часов. Работаю с клиентами по всему миру."
  },
  "contacts_email": {
    "uk": "📧 ktooooo121@gmail.com",
    "en": "📧 ktooooo121@gmail.com",
    "ru": "📧 ktooooo121@gmail.com"
  },
  "contacts_telegram": {
    "uk": "📱 Telegram",
    "en": "📱 Telegram",
    "ru": "📱 Telegram"
  },
  "contacts_discord": {
    "uk": "💼 Discord",
    "en": "💼 Discord",
    "ru": "💼 Discord"
  },
  "contacts_telegram_bot": {
    "uk": "📱 Telegram bot",
    "en": "📱 Telegram bot",
    "ru": "📱 Telegram бот"
  },

  // --- dodatne.html ---
  "title_extra": {
    "uk": "Додаткова інформація",
    "en": "Additional Information",
    "ru": "Дополнительная информация"
  },
  "extra_title": {
    "uk": "Додаткова інформація",
    "en": "Additional Information",
    "ru": "Дополнительная информация"
  },
  "extra_process_h2": {
    "uk": "Процес роботи",
    "en": "Work Process",
    "ru": "Процесс работы"
  },
  "extra_process_p": {
    "uk": "Кожен проєкт проходить через декілька етапів для досягнення найкращого результату:",
    "en": "Each project goes through several stages to achieve the best result:",
    "ru": "Каждый проект проходит через несколько этапов для достижения наилучшего результата:"
  },
  "extra_process_li1": {
    "uk": "<strong>Консультація та аналіз</strong> - обговорюємо ваші потреби та цілі проєкту",
    "en": "<strong>Consultation and analysis</strong> - we discuss your needs and project goals",
    "ru": "<strong>Консультация и анализ</strong> - обсуждаем ваши потребности и цели проекта"
  },
  "extra_process_li2": {
    "uk": "<strong>Планування</strong> - створюємо технічне завдання та визначаємо терміни",
    "en": "<strong>Planning</strong> - we create a technical task and define deadlines",
    "ru": "<strong>Планирование</strong> - создаем техническое задание и определяем сроки"
  },
  "extra_process_li3": {
    "uk": "<strong>Дизайн та прототип</strong> - розробляємо макет та узгоджуємо з вами",
    "en": "<strong>Design and prototype</strong> - we develop a layout and coordinate with you",
    "ru": "<strong>Дизайн и прототип</strong> - разрабатываем макет и согласовываем с вами"
  },
  "extra_process_li4": {
    "uk": "<strong>Розробка</strong> - пишемо код та реалізуємо функціонал",
    "en": "<strong>Development</strong> - we write code and implement functionality",
    "ru": "<strong>Разработка</strong> - пишем код и реализуем функционал"
  },
  "extra_process_li5": {
    "uk": "<strong>Тестування</strong> - перевіряємо роботу на всіх пристроях",
    "en": "<strong>Testing</strong> - we check work on all devices",
    "ru": "<strong>Тестирование</strong> - проверяем работу на всех устройствах"
  },
  "extra_process_li6": {
    "uk": "<strong>Запуск</strong> - розміщуємо проєкт на хостингу",
    "en": "<strong>Launch</strong> - we deploy the project to hosting",
    "ru": "<strong>Запуск</strong> - размещаем проект на хостинге"
  },
  "extra_process_li7": {
    "uk": "<strong>Підтримка</strong> - допомагаємо після запуску",
    "en": "<strong>Support</strong> - we help after launch",
    "ru": "<strong>Поддержка</strong> - помогаем после запуска"
  },
  "extra_why_me_h2": {
    "uk": "Чому саме я?",
    "en": "Why me?",
    "ru": "Почему именно я?"
  },
  "extra_why_me_p": {
    "uk": "Понад 5 років досвіду у веб-розробці. За цей час створив десятки успішних проєктів для клієнтів з різних країн. Завжди на зв'язку, відповідаю швидко та працюю над проєктами з повною віддачею.",
    "en": "Over 5 years of experience in web development. During this time, I've created dozens of successful projects for clients from different countries. Always in touch, respond quickly, and work on projects with full dedication.",
    "ru": "Более 5 лет опыта в веб-разработке. За это время создал десятки успешных проектов для клиентов из разных стран. Всегда на связи, отвечаю быстро и работаю над проектами с полной отдачей."
  },
  "extra_guarantees_h2": {
    "uk": "Гарантії",
    "en": "Guarantees",
    "ru": "Гарантии"
  },
  "extra_guarantees_p": {
    "uk": "Надаю гарантію на всі свої роботи. Якщо щось не працює - виправлю безкоштовно протягом гарантійного періоду. Також надаю детальну документацію для кожного проєкту.",
    "en": "I provide a guarantee for all my work. If something doesn't work - I'll fix it for free during the warranty period. I also provide detailed documentation for each project.",
    "ru": "Предоставляю гарантию на все свои работы. Если что-то не работает - исправлю бесплатно в течение гарантийного периода. Также предоставляю детальную документацию для каждого проекта."
  },
  "extra_payment_h2": {
    "uk": "Способи оплати",
    "en": "Payment Methods",
    "ru": "Способы оплаты"
  },
  "extra_payment_p": {
    "uk": "Приймаю оплату через банківський переказ, PayPal, криптовалюту. Можлива часткова оплата (50% на початку, 50% після завершення).",
    "en": "I accept payment via bank transfer, PayPal, cryptocurrency. Partial payment is possible (50% at the beginning, 50% after completion).",
    "ru": "Принимаю оплату через банковский перевод, PayPal, криптовалюту. Возможна частичная оплата (50% в начале, 50% после завершения)."
  },
  "extra_faq_h2": {
    "uk": "FAQ",
    "en": "FAQ",
    "ru": "FAQ"
  },
  "extra_faq1_h3": {
    "uk": "Скільки часу займає розробка?",
    "en": "How long does development take?",
    "ru": "Сколько времени занимает разработка?"
  },
  "extra_faq1_p": {
    "uk": "Залежить від складності проєкту. Простий лендінг - 3-5 днів, складний сайт - 2-4 тижні.",
    "en": "Depends on the project complexity. A simple landing page - 3-5 days, a complex site - 2-4 weeks.",
    "ru": "Зависит от сложности проекта. Простой лендинг - 3-5 дней, сложный сайт - 2-4 недели."
  },
  "extra_faq2_h3": {
    "uk": "Чи можу я вносити зміни в процесі?",
    "en": "Can I make changes during the process?",
    "ru": "Могу ли я вносить изменения в процессе?"
  },
  "extra_faq2_p": {
    "uk": "Так, звісно! Обговорюємо всі зміни та коригуємо проєкт.",
    "en": "Yes, of course! We discuss all changes and adjust the project.",
    "ru": "Да, конечно! Обсуждаем все изменения и корректируем проект."
  },
  "extra_faq3_h3": {
    "uk": "Чи надаєте підтримку після запуску?",
    "en": "Do you provide support after launch?",
    "ru": "Предоставляете ли поддержку после запуска?"
  },
  "extra_faq3_p": {
    "uk": "Так, кожен пакет включає певний період безкоштовної підтримки.",
    "en": "Yes, each package includes a certain period of free support.",
    "ru": "Да, каждый пакет включает определенный период бесплатной поддержки."
  },
  "extra_faq4_h3": {
    "uk": "Чи можете навчити працювати з сайтом?",
    "en": "Can you teach me how to work with the site?",
    "ru": "Можете ли научить работать с сайтом?"
  },
  "extra_faq4_p": {
    "uk": "Так, проведу детальний інструктаж та надам відео-інструкції.",
    "en": "Yes, I will provide detailed instructions and video guides.",
    "ru": "Да, проведу детальный инструктаж и предоставлю видео-инструкции."
  },
  "extra_contact_cta": {
    "uk": "Зв'язатися зі мною",
    "en": "Contact me",
    "ru": "Связаться со мной"
  },

  // --- Сторінки проєктів (ключі, що повторюються) ---
  "project_back_button": {
    "uk": "← Назад до проєктів",
    "en": "← Back to projects",
    "ru": "← Назад к проектам"
  },
  "project_about_h2": {
    "uk": "Про проєкт",
    "en": "About the project",
    "ru": "О проекте"
  },
  "project_features_h2": {
    "uk": "Основні можливості",
    "en": "Main Features",
    "ru": "Основные возможности"
  },
  "project_tech_h2": {
    "uk": "Технічна реалізація",
    "en": "Technical Implementation",
    "ru": "Техническая реализация"
  },
  "project_tech_stack_h2": {
    "uk": "Технології",
    "en": "Technologies",
    "ru": "Технологии"
  },
  "project_results_h2": {
    "uk": "Результати",
    "en": "Results",
    "ru": "Результаты"
  },
  "project_cta_secondary": {
    "uk": "Замовити подібний",
    "en": "Order a similar one",
    "ru": "Заказать похожий"
  },
  "project_cta_discord": {
    "uk": "Відвідати Discord",
    "en": "Visit Discord",
    "ru": "Посетить Discord"
  },

  // --- business-bot.html ---
  "title_project_bot": {
    "uk": "Telegram бот для бізнесуv",
    "en": "Telegram Bot for Business",
    "ru": "Telegram бот для бизнеса"
  },
  "project_bot_h1": {
    "uk": "Telegram бот для бізнесу",
    "en": "Telegram Bot for Business",
    "ru": "Telegram бот для бизнеса"
  },
  "project_bot_subtitle": {
    "uk": "Автоматизація процесів та взаємодія з клієнтами",
    "en": "Process automation and customer interaction",
    "ru": "Автоматизация процессов и взаимодействие с клиентами"
  },
  "project_bot_about_p1": {
    "uk": "Розробив багатофункціонального Telegram бота для автоматизації бізнес-процесів середнього підприємства. Бот обробляє замовлення від клієнтів, надає автоматичні консультації, генерує звіти для менеджерів та інтегрується з існуючою CRM системою компанії.",
    "en": "Developed a multifunctional Telegram bot to automate business processes for a medium-sized enterprise. The bot processes customer orders, provides automatic consultations, generates reports for managers, and integrates with the company's existing CRM system.",
    "ru": "Разработал многофункционального Telegram бота для автоматизации бизнес-процессов среднего предприятия. Бот обрабатывает заказы от клиентов, предоставляет автоматические консультации, генерирует отчеты для менеджеров и интегрируется с существующей CRM системой компании."
  },
  "project_bot_about_p2": {
    "uk": "До впровадження бота, компанія витрачала багато часу на обробку рутинних запитів від клієнтів. Бот дозволив автоматизувати до 70% типових звернень, що значно знизило навантаження на менеджерів.",
    "en": "Before the bot's implementation, the company spent a lot of time processing routine customer inquiries. The bot automated up to 70% of typical requests, significantly reducing the workload on managers.",
    "ru": "До внедрения бота, компания тратила много времени на обработку рутинных запросов от клиентов. Бот позволил автоматизировать до 70% типичных обращений, что значительно снизило нагрузку на менеджеров."
  },
  "project_bot_li1": {
    "uk": "<strong>Прийом замовлень</strong> - клієнти можуть оформити замовлення безпосередньо в боті з вибором товарів/послуг",
    "en": "<strong>Order acceptance</strong> - clients can place orders directly in the bot with a choice of goods/services",
    "ru": "<strong>Прием заказов</strong> - клиенты могут оформить заказ непосредственно в боте с выбором товаров/услуг"
  },
  "project_bot_li2": {
    "uk": "<strong>Система сповіщень</strong> - менеджери отримують миттєві повідомлення про нові замовлення",
    "en": "<strong>Notification system</strong> - managers receive instant notifications about new orders",
    "ru": "<strong>Система уведомлений</strong> - менеджеры получают мгновенные сообщения о новых заказах"
  },
  "project_bot_li3": {
    "uk": "<strong>Система оплати</strong> - підтримка оплати через Telegram Payments та LiqPay",
    "en": "<strong>Payment system</strong> - support for payments via Telegram Payments and LiqPay",
    "ru": "<strong>Система оплаты</strong> - поддержка оплаты через Telegram Payments и LiqPay"
  },
  "project_bot_li4": {
    "uk": "<strong>Підтримка груп</strong> - можливість додати бота в групу для командної роботи",
    "en": "<strong>Group support</strong> - ability to add the bot to a group for teamwork",
    "ru": "<strong>Поддержка групп</strong> - возможность добавить бота в группу для командной работы"
  },
  "project_bot_li5": {
    "uk": "<strong>Історія замовлень</strong> - клієнти можуть переглядати свої попередні покупки",
    "en": "<strong>Order history</strong> - clients can view their previous purchases",
    "ru": "<strong>История заказов</strong> - клиенты могут просматривать свои предыдущие покупки"
  },
  "project_bot_h2_clients": {
    "uk": "Функціонал для клієнтів",
    "en": "Functionality for clients",
    "ru": "Функционал для клиентов"
  },
  "project_bot_p_clients": {
    "uk": "Клієнти можуть:",
    "en": "Clients can:",
    "ru": "Клиенты могут:"
  },
  "project_bot_clients_li1": {
    "uk": "Оформлювати замовлення в кілька кліків",
    "en": "Place orders in a few clicks",
    "ru": "Оформлять заказы в несколько кликов"
  },
  "project_bot_clients_li2": {
    "uk": "Відстежувати статус доставки",
    "en": "Track delivery status",
    "ru": "Отслеживать статус доставки"
  },
  "project_bot_h2_managers": {
    "uk": "Функціонал для менеджерів",
    "en": "Functionality for managers",
    "ru": "Функционал для менеджеров"
  },
  "project_bot_p_managers": {
    "uk": "Адміністратори та менеджери мають окремий інтерфейс:",
    "en": "Administrators and managers have a separate interface:",
    "ru": "Администраторы и менеджеры имеют отдельный интерфейс:"
  },
  "project_bot_managers_li1": {
    "uk": "Перегляд та управління замовленнями",
    "en": "View and manage orders",
    "ru": "Просмотр и управление заказами"
  },
  "project_bot_managers_li2": {
    "uk": "Управління каталогом товарів",
    "en": "Manage the product catalog",
    "ru": "Управление каталогом товаров"
  },
  "project_bot_tech_p": {
    "uk": "Бот написаний на Python для асинхронної роботи. Це забезпечує високу швидкість обробки запитів навіть при великій кількості користувачів одночасно.",
    "en": "The bot is written in Python for asynchronous operation. This ensures high-speed request processing even with a large number of concurrent users.",
    "ru": "Бот написан на Python для асинхронной работы. Это обеспечивает высокую скорость обработки запросов даже при большом количестве пользователей одновременно."
  },
  "project_bot_tech_item": {
    "uk": "Python",
    "en": "Python",
    "ru": "Python"
  },
  "project_bot_results_p1": {
    "uk": "Після впровадження бота:",
    "en": "After the bot's implementation:",
    "ru": "После внедрения бота:"
  },
  "project_bot_results_li1": {
    "uk": "Час обробки замовлення скоротився з 15 хвилин до 2 хвилин",
    "en": "Order processing time reduced from 15 minutes to 2 minutes",
    "ru": "Время обработки заказа сократилось с 15 минут до 2 минут"
  },
  "project_bot_results_li2": {
    "uk": "Навантаження на менеджерів знизилось на 70%",
    "en": "Workload on managers decreased by 70%",
    "ru": "Нагрузка на менеджеров снизилась на 70%"
  },
  "project_bot_results_li3": {
    "uk": "Задоволеність клієнтів зросла (за опитуваннями)",
    "en": "Customer satisfaction increased (according to surveys)",
    "ru": "Удовлетворенность клиентов выросла (по опросам)"
  },
  "project_bot_results_li4": {
    "uk": "Компанія зекономила на додатковому персоналі",
    "en": "The company saved money on additional staff",
    "ru": "Компания сэкономила на дополнительном персонале"
  },
  "project_bot_results_p2": {
    "uk": "Бот обробляє понад 1000 повідомлень на день та обслуговує базу з 5000+ активних користувачів.",
    "en": "The bot processes over 1000 messages per day and serves a base of 5000+ active users.",
    "ru": "Бот обрабатывает более 1000 сообщений в день и обслуживает базу из 5000+ активных пользователей."
  },
  "project_bot_cta_try": {
    "uk": "Спробувати бота",
    "en": "Try the bot",
    "ru": "Попробовать бота"
  },

  // --- corporate-website.html ---
  "title_project_corp": {
    "uk": "Веб-сайт",
    "en": "Website",
    "ru": "Веб-сайт"
  },
  "project_corp_h1": {
    "uk": "Веб-сайт",
    "en": "Website",
    "ru": "Веб-сайт"
  },
  "project_corp_subtitle": {
    "uk": "Сучасний багатосторінковий сайт з CMS",
    "en": "Modern multi-page site with CMS",
    "ru": "Современный многостраничный сайт с CMS"
  },
  "project_corp_about_p1": {
    "uk": "Створив повноцінний веб-сайт з сучасним дизайном, зручною адмін-панеллю та системою управління контентом, оптимізований для пошукових систем та повністю адаптований під всі пристрої.",
    "en": "Created a full-fledged corporate website with a modern design, a convenient admin panel and content management system, optimized for search engines and fully adapted for all devices.",
    "ru": "Создал полноценный веб-сайт с современным дизайном, удобной админ-панелью и системой управления контентом, оптимизированный для поисковых систем и полностью адаптированный под все устройства."
  },
  "project_corp_about_p2": {
    "uk": "Проєкт виконувався для компанії, яка потребувала професійного представлення в інтернеті з можливістю самостійно оновлювати контент без знань програмування.",
    "en": "The project was carried out for a company that needed a professional online presence with the ability to independently update content without programming knowledge.",
    "ru": "Проект выполнялся для компании, которой требовалось профессиональное представительство в интернете с возможностью самостоятельно обновлять контент без знаний программирования."
  },
  "project_corp_li1": {
    "uk": "<strong>Адаптивний дизайн</strong> - ідеально виглядає на всіх пристроях від смартфонів до великих моніторів",
    "en": "<strong>Responsive design</strong> - looks perfect on all devices from smartphones to large monitors",
    "ru": "<strong>Адаптивный дизайн</strong> - идеально выглядит на всех устройствах от смартфонов до больших мониторов"
  },
  "project_corp_li2": {
    "uk": "<strong>Форми зворотного зв'язку</strong> - з валідацією та захистом від спаму",
    "en": "<strong>Feedback forms</strong> - with validation and spam protection",
    "ru": "<strong>Формы обратной связи</strong> - с валидацией и защитой от спама"
  },
  "project_corp_tech_p1": {
    "uk": "Сайт побудований на GitHub.",
    "en": "The site is built on GitHub.",
    "ru": "Сайт построен на GitHub."
  },
  "project_corp_tech_p2": {
    "uk": "Особлива увага приділена безпеці: всі форми захищені від CSRF атак, паролі хешуються, є захист від SQL ін'єкцій та XSS.",
    "en": "Special attention is paid to security: all forms are protected from CSRF attacks, passwords are-hashed, there is protection against SQL injections and XSS.",
    "ru": "Особое внимание уделено безопасности: все формы защищены от CSRF атак, пароли хешируются, есть защита от SQL инъекций и XSS."
  },
  "project_corp_tech_item1": {
    "uk": "Visual studio code",
    "en": "Visual studio code",
    "ru": "Visual studio code"
  },
  "project_corp_tech_item2": {
    "uk": "Node.js or Java",
    "en": "Node.js or Java",
    "ru": "Node.js or Java"
  },
  "project_corp_results_p": {
    "uk": "Після запуску сайту відвідуваність сервера зросла на 70%. Кількість заявок збільшилась на 80%. Клієнт залишився дуже задоволений і замовив додаткові функції для розширення сайту.",
    "en": "After the site launch, server traffic increased by 70%. The number of applications increased by 80%. The client was very satisfied and ordered additional features to expand the site.",
    "ru": "После запуска сайта посещаемость сервера выросла на 70%. Количество заявок увеличилось на 80%. Клиент остался очень доволен и заказал дополнительные функции для расширения сайта."
  },
  "project_corp_cta_visit": {
    "uk": "Відвідати сайт",
    "en": "Visit site",
    "ru": "Посетить сайт"
  },

  // --- telegram-plugin.html ---
  "title_project_plugin": {
    "uk": "Плагіни",
    "en": "Plugins",
    "ru": "Плагины"
  },
  "project_plugin_h1": {
    "uk": "Плагіни",
    "en": "Plugins",
    "ru": "Плагины"
  },
  "project_plugin_subtitle": {
    "uk": "Модульна система для розширення функціоналу",
    "en": "Modular system for extending functionality",
    "ru": "Модульная система для расширения функционала"
  },
  "project_plugin_about_p1": {
    "uk": "Розробив Nonentity1732 or @Ua_ls2 повноцінну систему плагінів, яка дозволяє легко розширювати функціонал майнкрафт сервер.",
    "en": "Developed by Nonentity1732 or @Ua_ls2 a full-fledged plugin system that allows easy extension of Minecraft server functionality.",
    "ru": "Разработал Nonentity1732 or @Ua_ls2 полноценную систему плагинов, которая позволяет легко расширять функционал майнкрафт сервер."
  },
  "project_plugin_about_p2": {
    "uk": "Головна перевага цієї системи - можливість швидко додавати нові функції до сервера, просто створивши новий клас. Не потрібно перезапускати сервер або вносити зміни в основний код.",
    "en": "The main advantage of this system is the ability to quickly add new functions to the server just by creating a new class. No need to restart the server or make changes to the main code.",
    "ru": "Главное преимущество этой системы - возможность быстро добавлять новые функции на сервер, просто создав новый класс. Не нужно перезапускать сервер или вносить изменения в основной код."
  },
  "project_plugin_li1": {
    "uk": "<strong>Розлічні конфігурації</strong> - зміна тексту ефекти та багато іншого.",
    "en": "<strong>Various configurations</strong> - changing text, effects, and much more.",
    "ru": "<strong>Различные конфигурации</strong> - изменение текста, эффекты и многое другое."
  },
  "project_plugin_h2_how": {
    "uk": "Як це працює",
    "en": "How it works",
    "ru": "Как это работает"
  },
  "project_plugin_how_p1": {
    "uk": "Кожен плагін - це окремий модуль з власним класом та методами. При запуску сервера, система автоматично сканує ваш сервер, завантажує його та реєструє всі обробники. Плагіни можуть додавати нові команди, обробляти повідомлення, працювати з базою даних та багато іншого.",
    "en": "Each plugin is a separate module with its own class and methods. When the server starts, the system automatically scans your server, loads it, and registers all handlers. Plugins can add new commands, process messages, work with the database, and much more.",
    "ru": "Каждый плагин - это отдельный модуль с собственным классом и методами. При запуске сервера, система автоматически сканирует ваш сервер, загружает его и регистрирует все обработчики. Плагины могут добавлять новые команды, обрабатывать сообщения, работать с базой данных и многое другое."
  },
  "project_plugin_how_p2": {
    "uk": "Приклад простого плагіну:",
    "en": "Example of a simple plugin:",
    "ru": "Пример простого плагина:"
  },
  "project_plugin_results_p": {
    "uk": "Система використовується в кількох комерційних проєктах, де керує ботами з більш ніж 10,000 користувачів. Завдяки модульній архітектурі, вдається швидко додавати нові функції та оновлювати існуючі без простоїв.",
    "en": "The system is used in several commercial projects, managing bots with more than 10,000 users. Thanks to the modular architecture, new functions can be quickly added and existing ones updated without downtime.",
    "ru": "Система используется в нескольких коммерческих проектах, где управляет ботами с более чем 10,000 пользователей. Благодаря модульной архитектуре, удается быстро добавлять новые функции и обновлять существующие без простоев."
  },
  "project_plugin_cta_test": {
    "uk": "запит на тестування",
    "en": "request for testing",
    "ru": "запрос на тестирование"
  },
  "a1_telegram_plugin": {
    "uk": "Замовити подібний проєкт",
    "en": "Order a similar project",
    "ru": "Заказать подобный проект"
  },
  "h2_corporacte": {
    "uk": "Технічні особливості",
    "en": "Technical features",
    "ru": "Технические особенности"
  },

  // --- Ключ для футера (вже є, але для наочності) ---
  "footer_copy": {
    "uk": "2025 WebDev. Всі права захищені.",
    "en": "2025 WebDev. All rights reserved.",
    "ru": "2025 WebDev. Все права защищены."
  }
};

// 2. Функція, яка застосовує переклади на сторінці
function applyTranslations(lang) {
  // Перевіряємо, чи існує мова в об'єкті
  if (!lang || !translations) return;

  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if (translations[key] && translations[key][lang]) {
      const translation = translations[key][lang];
      const tagName = el.tagName.toLowerCase();
      if (tagName === 'input' || tagName === 'textarea') {
        el.placeholder = translation;
      } else if (tagName === 'img') {
        el.alt = translation;
      } else {
        el.textContent = translation;
      }
    } else {
      // Якщо перекладу для ключа немає
      // console.warn(`Translation key "${key}" for lang "${lang}" not found.`);
    }
  });

  if (translations['title'] && translations['title'][lang]) {
    document.title = translations['title'][lang];
  }
}

// 3. Функція, яка ОНОВЛЮЄ кнопку поточного мови
function updateCurrentLangButton(lang) {
  const currentLangText = document.querySelector('.lang-current-text');
  if (currentLangText) {
    currentLangText.textContent = lang.toUpperCase();
  }
}

// 4. Функція, яка встановлює обрану мову
function setLanguage(lang) {
  localStorage.setItem('language', lang); // Зберігаємо вибір

  // Оновлюємо 'active' клас на кнопках у списку
  document.querySelectorAll('.lang-dropdown .lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  applyTranslations(lang); // Застосовуємо переклади
  updateCurrentLangButton(lang); // Оновлюємо текст на головній кнопці

  // Закриваємо дропдаун
  const switcher = document.querySelector('.lang-switcher');
  if (switcher) {
    switcher.classList.remove('open');
  }
}

// 5. Головна функція ініціалізації
function initLanguageSwitcher() {
  // 'ru' - мова за замовчуванням
  const savedLang = localStorage.getItem('language') || 'ru';

  // Встановлюємо активний клас для кнопки у списку
  document.querySelectorAll('.lang-dropdown .lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === savedLang);
  });

  applyTranslations(savedLang); // Перекладаємо сторінку
  updateCurrentLangButton(savedLang); // Встановлюємо текст головної кнопки ("RU")

  // --- ЛОГІКА ДРОПДАУНУ ---
  const switcher = document.querySelector('.lang-switcher');
  const toggleBtn = document.querySelector('.lang-current-btn');

  if (!switcher || !toggleBtn) {
    // console.error('Елементи перемикача мов не знайдені');
    return;
  }

  // 1. Клік на головну кнопку (відкрити/закрити)
  toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    switcher.classList.toggle('open'); // Перемикаємо клас "open"
  });

  // 2. Клік на одну з мов у меню
  document.querySelectorAll('.lang-dropdown .lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // 3. Клік поза меню (щоб закрити його)
  window.addEventListener('click', (event) => {
    if (!switcher.contains(event.target)) {
      switcher.classList.remove('open');
    }
  });
}

// Запускаємо все, коли сторінка завантажиться
document.addEventListener('DOMContentLoaded', initLanguageSwitcher);

  document.addEventListener('contextmenu', event => event.preventDefault());

  document.onkeydown = function(e) {
    if (e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || 
        (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
      alert("Копирование запрещено!");
      return false;
    }
  };
// --- Кінець коду для перемикання мов ---

