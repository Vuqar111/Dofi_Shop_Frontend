// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
    en: {
        translation: {
            hero_page_title: "Welcome!",
            hero_page_subtitle: 'Smart, Safe & Super Fun for Every Kid!',
            hero_page_button: "Pre-order now",
            home_screen_products_title: "Dofi In Action",
            add_to_cart_text: "Add to cart",
            about_title: "About",
            about_description: "Our robot is a smart, engaging companion designed to support children's development through voice command interaction, video calling with parental controls, and dynamic body and facial expressions. It helps kids learn both their native language and English, enjoy interactive storytelling, and build strong math and logic skills, all while having fun.",
            about_feature_part1: "Cognitive Growth",
            about_feature_part2: "Enhanced Problem-Solving",
            about_feature_part3: "Adaptive Learning",
            safety_page_title: "Artificial Intelligence and Security",
            safety_page_description: "We take security seriously. Every byte of your child's data is protected within our closed system. Dofi sets a new standard for family-friendly artificial intelligence.",
            safety_page_feature_title_part1: "Useful for parents",
            safety_page_feature_desciption_part1: "From secure calls to real-time progress reports",
            safety_page_feature_title_part2: "Better parenting tools",
            safety_page_feature_description_part2: "Parent App that clearly presents child's educational plans and identifies developmental milestones",
            safety_page_feature_title_part3: "Safe, secure and private",
            safety_page_feature_description_part3: "kidSAFE+ COPPA certified device with customizable security and privacy settings",
            faq_question_part1: "What is Dofi?",
            faq_answer_part1: "Dofi is an AI-powered talking learning robot designed for children, small in size but big in personality.",
            faq_question_part2: "How does Dofi work?",
            faq_answer_part2: "Dofi uses advanced artificial intelligence algorithms to interact with children, teach them new skills, and provide a fun, engaging learning experience.",
            faq_question_part3: "Is Dofi safe for kids?",
            faq_answer_part4: "Yes, Dofi is designed with safety in mind. It has enhanced encryption and parental controls to ensure a safe and secure experience for kids.",
            faq_question_part5: "What age group is Dofi suitable for?",
            faq_answer_part5: "Dofi is suitable for children between the ages of 3 and 8.",
            faq_question_part6: "How do I pre-order Dofi?",
            faq_answer_part6: "You can pre-order Dofi directly from our website. Simply add the product to your cart and proceed to checkout."
        },
    },
    az: {
        translation: {
            hero_page_title: "Xoş gəlmisiniz!",
            hero_page_subtitle: 'Hər Uşaq üçün Ağıllı, Təhlükəsiz və Super Əyləncəli!',
            hero_page_button: "Ön sifariş et",
            home_screen_products_title: "Dofi Fəaliyyətdədir",
            add_to_cart_text: "Səbətə əlavə et",
            about_description: "Robotumuz səsli əmrlə qarşılıqlı əlaqə, valideyn nəzarəti ilə video zəng, dinamik bədən və üz ifadələri vasitəsilə uşaqların inkişafını dəstəkləmək üçün nəzərdə tutulmuş ağıllı, cəlbedici yoldaşdır. O, uşaqlara həm ana dilini, həm də ingilis dilini öyrənməyə, interaktiv hekayələrdən həzz almağa və əylənərkən güclü riyaziyyat və məntiq bacarıqlarını inkişaf etdirməyə kömək edir.",
            about_feature_part1: "Məntiqi artım",
            about_feature_part2: "Təkmilləşdirilmiş Problemlərin Həlli",
            about_feature_part3: "Adaptiv Öyrənmə",

            safety_page_title: "Süni İntellekt və Təhlükəsizlik",
            safety_page_description: "Biz təhlükəsizliyə ciddi yanaşırıq. Övladınızın məlumatlarının hər baytı bizim qapalı sistemimiz çərçivəsində qorunur. Dofi ailə dostu süni intellekt üçün yeni standart müəyyən edir.",
            safety_page_feature_title_part1: "Valideynlər üçün faydalıdır",
            safety_page_feature_desciption_part1: "Təhlükəsiz zənglərdən real vaxt tərəqqi hesabatlarına qədər",
            safety_page_feature_title_part2: "Daha yaxşı valideynlik vasitələri",
            safety_page_feature_description_part2: "Uşağın təhsil planlarını aydın şəkildə təqdim edən və inkişaf mərhələlərini müəyyən edən Valideyn Proqramı",
            safety_page_feature_title_part3: "Təhlükəsiz, təhlükəsiz və şəxsi",
            safety_page_feature_description_part3: "Fərdiləşdirilə bilən təhlükəsizlik və məxfilik parametrləri ilə kidSAFE+ COPPA sertifikatlı cihaz",
            faq_question_part1: "Dofi nədir?",
            faq_answer_part1: "Dofi uşaqlar üçün nəzərdə tutulmuş, kiçik ölçülü, lakin şəxsiyyət baxımından böyük olan süni intellektlə işləyən danışan öyrənmə robotudur.",
            faq_question_part2: "Dofi necə işləyir?",
            faq_answer_part2: "Dofi uşaqlarla ünsiyyət qurmaq, onlara yeni bacarıqlar öyrətmək və əyləncəli, cəlbedici öyrənmə təcrübəsi təmin etmək üçün qabaqcıl süni intellekt alqoritmlərindən istifadə edir.",
            faq_question_part3: "Dofi uşaqlar üçün təhlükəsizdir mi?",
            faq_answer_part4: "Bəli, Dofi təhlükəsizlik nəzərə alınmaqla hazırlanmışdır. Uşaqlar üçün təhlükəsiz və təhlükəsiz təcrübə təmin etmək üçün təkmilləşdirilmiş şifrələmə və valideyn nəzarətinə malikdir.",
            faq_question_part5: "Dofi hansı yaş qrupu üçün uyğundur?",
            faq_answer_part5: "Dofi 3-8 yaş arası uşaqlar üçün uyğundur.",
            faq_question_part6: "Dofi-ni necə əvvəlcədən sifariş edə bilərəm?",
            faq_answer_part6: "Dofi-ni birbaşa saytımızdan öncədən sifariş edə bilərsiniz. Sadəcə olaraq məhsulu səbətinizə əlavə edin və ödənişə davam edin."
        },
    },
    fr: {
        translation: {
            hero_page_title: "Bienvenue",
            hero_page_subtitle: "Intelligent, sûr et super amusant pour tous les enfants!",
            hero_page_button: "Précommandez dès maintenant",
            home_screen_products_title: "Dofi en action",
            add_to_cart_text: "Ajouter au panier",
            about_description: "Notre robot est un compagnon intelligent et engageant, conçu pour accompagner le développement des enfants grâce à l'interaction vocale, aux appels vidéo avec contrôle parental et à des expressions corporelles et faciales dynamiques. Il aide les enfants à apprendre leur langue maternelle et l'anglais, à profiter de contes interactifs et à développer de solides compétences en mathématiques et en logique, tout en s'amusant.",
            about_feature_part1: "Développement cognitif",
            about_feature_part2: "Résolution améliorée des problèmes",
            about_feature_part3: "Apprentissage adaptatif",
        },
        safety_page_title: "Intelligence artificielle et sécurité",
        safety_page_description: "Nous prenons la sécurité très au sérieux. Chaque octet des données de votre enfant est protégé au sein de notre système fermé. Dofi établit une nouvelle norme en matière d'intelligence artificielle adaptée aux familles.",
        safety_page_feature_title_part1: "Utile pour les parents",
        safety_page_feature_desciption_part1: "Des appels sécurisés aux rapports de progression en temps réel",
        safety_page_feature_title_part2: "Des outils parentaux plus performants",
        safety_page_feature_description_part2: "Application parentale présentant clairement le projet éducatif de l'enfant et identifiant les étapes de son développement.",
        safety_page_feature_title_part3: "Sûr, sécurisé et privé",
        safety_page_feature_description_part3: "Appareil certifié kidSAFE+ COPPA avec paramètres de sécurité et de confidentialité personnalisables.",
        faq_question_part1: "Qu'est-ce que Dofi ?",
        faq_answer_part1: "Dofi est un robot d'apprentissage parlant, alimenté par l'IA, conçu pour les enfants. Petit par la taille, mais doté d'une grande personnalité.",
        faq_question_part2: "Comment fonctionne Dofi?",
        faq_answer_part2: "Dofi utilise des algorithmes d'intelligence artificielle avancés pour interagir avec les enfants, leur enseigner de nouvelles compétences et leur offrir une expérience d'apprentissage ludique et stimulante.",
        faq_question_part3: "Dofi est-il sûr pour les enfants?",
        faq_answer_part4: "Oui, Dofi est conçu pour la sécurité. Il dispose d'un cryptage amélioré et d'un contrôle parental pour garantir une expérience sûre et sécurisée aux enfants.",
        faq_question_part5: "À quelle tranche d'âge Dofi est-il adapté?",
        faq_answer_part5: "Dofi est adapté aux enfants de 3 à 8 ans.",
        faq_question_part6: "Comment précommander Dofi ?",
        faq_answer_part6: "Vous pouvez précommander Dofi directement sur notre site web. Ajoutez simplement le produit à votre panier et passez à la caisse."
    },
    tr: {
        translation: {
            hero_page_title: "Merhaba",
            hero_page_subtitle: 'Smart, Safe & Super Fun for Every Kid!',
            hero_page_button: "Pre-order now",
            home_screen_products_title: "Dofi In Action",
            add_to_cart_text: "Add to cart",
            about_description: "Our robot is a smart, engaging companion designed to support children's development through voice command interaction, video calling with parental controls, and dynamic body and facial expressions. It helps kids learn both their native language and English, enjoy interactive storytelling, and build strong math and logic skills, all while having fun.",
            about_feature_part1: "Cognitive Growth",
            about_feature_part2: "Cognitive Growth",
            about_feature_part3: "Cognitive Growth",

            safety_page_title: "Artificial Intelligence and Security",
            safety_page_description: "We take security seriously. Every byte of your child's data is protected within our closed system. <br/> Dofi sets a new standard for family-friendly artificial intelligence.",
            safety_page_feature_title_part1: "Useful for parents",
            safety_page_feature_desciption_part1: "From secure calls to real-time progress reports",
            safety_page_feature_title_part2: "Better parenting tools",
            safety_page_feature_description_part2: "Parent App that clearly presents child's educational plans and identifies developmental milestones",
            safety_page_feature_title_part3: "Safe, secure and private",
            safety_page_feature_description_part3: "kidSAFE+ COPPA certified device with customizable security and privacy settings",
            faq_question_part1: "What is Dofi?",
            faq_answer_part1: "Dofi is an AI-powered talking learning robot designed for children, small in size but big in personality.",
            faq_question_part2: "How does Dofi work?",
            faq_answer_part2: "Dofi uses advanced artificial intelligence algorithms to interact with children, teach them new skills, and provide a fun, engaging learning experience.",
            faq_question_part3: "Is Dofi safe for kids?",
            faq_answer_part4: "Yes, Dofi is designed with safety in mind. It has enhanced encryption and parental controls to ensure a safe and secure experience for kids.",
            faq_question_part5: "What age group is Dofi suitable for?",
            faq_answer_part5: "Dofi is suitable for children between the ages of 3 and 8.",
            faq_question_part6: "How do I pre-order Dofi?",
            faq_answer_part6: "You can pre-order Dofi directly from our website. Simply add the product to your cart and proceed to checkout."
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
