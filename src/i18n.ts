// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
    en: {
        translation: {

            products: require('./locales/en/products.json'),

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
            about_feature_part4: "Personalized Feedback",


            safety_page_title: "Artificial Intelligence and Security",
            safety_page_description: "We take security seriously. Every byte of your child's data is protected within our closed system. Dofi sets a new standard for family-friendly artificial intelligence.",
            safety_page_feature_title_part1: "Useful for parents",
            safety_page_feature_desciption_part1: "From secure calls to real-time progress reports",
            safety_page_feature_title_part2: "Better parenting tools",
            safety_page_feature_description_part2: "Parent App that clearly presents child's educational plans and identifies developmental milestones",
            safety_page_feature_title_part3: "Safe, secure and private",
            safety_page_feature_description_part3: "kidSAFE+ COPPA certified device with customizable security and privacy settings",

            // FAQ
            faq_title: "Frequently Asked Questions",
            faq_question_part1: "What is Dofi?",
            faq_answer_part1: "Dofi is an AI-powered talking learning robot designed for children, small in size but big in personality.",
            faq_question_part2: "How does Dofi work?",
            faq_answer_part2: "Dofi uses advanced artificial intelligence algorithms to interact with children, teach them new skills, and provide a fun, engaging learning experience.",
            faq_question_part3: "Is Dofi safe for kids?",
            faq_answer_part3: "Yes, Dofi is designed with safety in mind. It has enhanced encryption and parental controls to ensure a safe and secure experience for kids.",
            faq_question_part4: "What age group is Dofi suitable for?",
            faq_answer_part4: "Dofi is suitable for children between the ages of 3 and 8.",
            faq_question_part5: "How do I pre-order Dofi?",
            faq_answer_part5: "You can pre-order Dofi directly from our website. Simply add the product to your cart and proceed to checkout.",

            // Profile
            profile_page_title: "Personal informations",
            profile_page_form_label1: "Name and Surname",
            profile_page_form_label2: "Email",
            profile_page_form_label3: "Contact number",
            profile_page_form_label4: "Role",
            profile_page_form_button: "Update",
            profile_page_rol_val1: "Company",
            profile_page_rol_val2: "Parent",
            profile_page_rol_val3: "VIP",
            profile_page_modal_desc: "Your profile has been updated successfully",


            // Profile Orders
            profile_orders_page_title: "Your orders",
            profile_order_card_part1: "Order code",
            profile_order_card_part2: "Order date",
            profile_order_card_part3: "Detailed information",
            profile_order_card_part4: "Total price",

            // Profile Order Details Card
            profile_orders_details_part1: "Delivery",
            profile_orders_details_part2: "Country",
            profile_orders_details_part3: "City",
            profile_orders_details_part4: "Address",
            profile_orders_details_part5: "Contact",
            profile_orders_details_part6: "Full name",
            profile_orders_details_part7: "Email",
            profile_orders_details_part8: "Phone",
            profile_orders_details_part9: "Payment",
            profile_orders_details_part10: "Payment status",
            profile_orders_details_part11: "Payment type",
            profile_orders_details_part12: "Ordered products",
            profile_orders_details_part13: "Price",
            profile_orders_details_part14: "Delivery",
            profile_orders_details_part15: "Total price",
            profile_orders_details_part16: "Discount",

            // Profile Security
            profile_security_page_title: "Security",
            profile_security_form_label1: "Current password",
            profile_security_form_placeholder1: "Enter your current password",
            profile_security_form_label2: "New password",
            profile_security_form_placeholder2: "Enter your new password",
            profile_security_form_label3: "Confirm password",
            profile_security_form_placeholder3: "Confirm your password",
            profile_security_form_button: "Change password",
            profile_security_modal_desc: "Your password successfully updated",

            // Sidebar
            sidebar_title_profile: "Profile",
            sidebar_title_orders: "Orders",
            sidebar_title_security: "Security",
            sidebar_title_logout: "Log out",

            // Breadcrumb
            breadcrumb_home: "Home",
            breadcrumb_profile: "Profile",
            breadcrumb_orders: "Orders",
            breadcrumb_order: "Order",
            breadcrumb_security: "Security",

            // Footer
            footer_title1: "Products",
            footer_part1: "Dofi Pro",
            footer_part2: "Dofi Pro mini",
            footer_part3: "Dofi mini",
            footer_part4: "Bag for Dofi",
            footer_title2: "Shipping & Policy",
            footer_part5: "About",
            footer_part6: "Shipping information",
            footer_part7: "Return Policy",
            footer_part8: "Privacy Policy",
            footer_part9: "Terms of Service",
            footer_title3: "Follow us",
            footer_part10: "Email",
            footer_part11: "Phone",
            footer_part12: "All Rights Reserved",

            // Product details
            product_details_part1: "Color",
            product_details_part2: "Quantity",
            product_details_part3: "Add to cart",
            product_details_part4: "Pre-order now",
            product_details_part5: "Detailed information",
            product_details_part6: "Shipping calculated at checkout",


            // Order checkout
            order_checkout_part1: "Contact",
            order_checkout_part2: "Email",
            order_checkout_part3: "Enter your email",
            order_checkout_part4: "Full name",
            order_checkout_part5: "Write the full name",
            order_checkout_part6: "Choose the country",
            order_checkout_part7: "Choose the city",
            order_checkout_part8: "Select the city",
            order_checkout_part9: "Address",
            order_checkout_part10: "Enter your address",
            order_checkout_part11: "Apartment",
            order_checkout_part12: "Enter your apartment",
            order_checkout_part13: "Contact",
            order_checkout_part14: "7 digit number",
            order_checkout_part15: "Confirm pre-order",
            order_checkout_part16: "Delivery",
            order_checkout_part17: "Select the country",
            order_checkout_part18: "Your order created as pre-order",

            // Order Summary
            order_summary_title: "Order summary",
            order_summary_part1: "Color",
            order_summary_part2: "Price",
            order_summary_part3: "Enter promo code",
            order_summary_part4: "Check",
            order_summary_part5: "Product price",
            order_summary_part6: "Delivery",
            order_summary_part7: "Discount",
            order_summary_part8: "Total price",
            order_summary_part9: "Your cart is empty",


            // Card modal
            card_modal_title: "Cart",
            cart_modal_footer: "Proceed to checkout",
            cart_modal_message1: "Continue to shopping",
            cart_modal_message2: "Your cart is empty",


            // Register
            register_page_title: "Create your account now with just one click",
            register_page_label1: "Name and Surname",
            register_page_input1: "Enter your name and surname",
            register_page_label2: "Email",
            register_page_input2: "Write the email",
            register_page_label3: "Pasword",
            register_page_input3: "Write the password",
            register_page_button: "Sign up",
            register_page_footer1: "Already have an account",
            register_page_footer2: "Sign in",


            // Login
            login_page_title: "We are glad to see you again",
            login_page_label1: "Email",
            login_page_input1: "Write the email",
            login_page_label2: "Password",
            login_page_input2: 'Write the password',
            login_page_button: "Login",
            login_page_footer1: "Don't have an account",
            login_page_footer2: "Sign Up",
            login_page_footer3: "Forgot your password",



            // Forgot
            forgot_page_title: "Repair your password",
            forgot_page_label1: "Email",
            forgot_page_input1: "Enter your email",
            forgot_page_button: "Change password",
            forgot_page_footer1: "Do you have an account",
            forgot_page_footer2: "Login",




            // Cart
            cart_page_part1: "Your cart",
            cart_page_part2: "Continue",
            cart_page_part3: "Product",
            cart_page_part4: "Amount",
            cart_page_part5: "Total",
            cart_page_part6: "Proceed to payment",






            modal_success_message_title: "Success",
            modal_success_message_description: "Product added to cart",
            modal_success_button: "Close",
            modal_error_message_title: "Error",
            modal_error_message_description: "Error occured",
            modal_error_button: "Close",
            modal_login_message_title: "Success",
            modal_login_message_description: "You've succesfully logged!",
            modal_register_message_description: "You've succesfully registered"



        },
    },
    az: {
        translation: {

            products: require('./locales/az/products.json'),

            hero_page_title: "Xoş gəlmisiniz!",
            hero_page_subtitle: 'Hər Uşaq üçün Ağıllı, Təhlükəsiz və Super Əyləncəli!',
            hero_page_button: "Ön sifariş et",
            home_screen_products_title: "Dofi Fəaliyyətdədir",
            add_to_cart_text: "Səbətə əlavə et",

            about_title: "Haqqında",
            about_description: "Robotumuz səsli əmrlə qarşılıqlı əlaqə, valideyn nəzarəti ilə video zəng, dinamik bədən və üz ifadələri vasitəsilə uşaqların inkişafını dəstəkləmək üçün nəzərdə tutulmuş ağıllı, cəlbedici yoldaşdır. O, uşaqlara həm ana dilini, həm də ingilis dilini öyrənməyə, interaktiv hekayələrdən həzz almağa və əylənərkən güclü riyaziyyat və məntiq bacarıqlarını inkişaf etdirməyə kömək edir.",
            about_feature_part1: "Məntiqi artım",
            about_feature_part2: "Təkmilləşdirilmiş Problemlərin Həlli",
            about_feature_part3: "Adaptiv Öyrənmə",
            about_feature_part4: "Personalized Feedback",


            safety_page_title: "Süni İntellekt və Təhlükəsizlik",
            safety_page_description: "Biz təhlükəsizliyə ciddi yanaşırıq. Övladınızın məlumatlarının hər baytı bizim qapalı sistemimiz çərçivəsində qorunur. Dofi ailə dostu süni intellekt üçün yeni standart müəyyən edir.",
            safety_page_feature_title_part1: "Valideynlər üçün faydalıdır",
            safety_page_feature_desciption_part1: "Təhlükəsiz zənglərdən real vaxt tərəqqi hesabatlarına qədər",
            safety_page_feature_title_part2: "Daha yaxşı valideynlik vasitələri",
            safety_page_feature_description_part2: "Uşağın təhsil planlarını aydın şəkildə təqdim edən və inkişaf mərhələlərini müəyyən edən Valideyn Proqramı",
            safety_page_feature_title_part3: "Təhlükəsiz, təhlükəsiz və şəxsi",
            safety_page_feature_description_part3: "Fərdiləşdirilə bilən təhlükəsizlik və məxfilik parametrləri ilə kidSAFE+ COPPA sertifikatlı cihaz",

            faq_title: "Tez-tez soruşulan suallar",
            faq_question_part1: "Dofi nədir?",
            faq_answer_part1: "Dofi uşaqlar üçün nəzərdə tutulmuş, kiçik ölçülü, lakin şəxsiyyət baxımından böyük olan süni intellektlə işləyən danışan öyrənmə robotudur.",
            faq_question_part2: "Dofi necə işləyir?",
            faq_answer_part2: "Dofi uşaqlarla ünsiyyət qurmaq, onlara yeni bacarıqlar öyrətmək və əyləncəli, cəlbedici öyrənmə təcrübəsi təmin etmək üçün qabaqcıl süni intellekt alqoritmlərindən istifadə edir.",
            faq_question_part3: "Dofi uşaqlar üçün təhlükəsizdir mi?",
            faq_answer_part3: "Bəli, Dofi təhlükəsizlik nəzərə alınmaqla hazırlanmışdır. Uşaqlar üçün təhlükəsiz və təhlükəsiz təcrübə təmin etmək üçün təkmilləşdirilmiş şifrələmə və valideyn nəzarətinə malikdir.",
            faq_question_part4: "Dofi hansı yaş qrupu üçün uyğundur?",
            faq_answer_part4: "Dofi 3-8 yaş arası uşaqlar üçün uyğundur.",
            faq_question_part5: "Dofi-ni necə əvvəlcədən sifariş edə bilərəm?",
            faq_answer_part5: "Dofi-ni birbaşa saytımızdan öncədən sifariş edə bilərsiniz. Sadəcə olaraq məhsulu səbətinizə əlavə edin və ödənişə davam edin.",

            // Profile
            profile_page_title: "Şəxsi məlumatlar",
            profile_page_form_label1: "Ad və soyad",
            profile_page_form_label2: "E-poçt",
            profile_page_form_label3: "Əlaqə nömrəsi",
            profile_page_form_label4: "Rol",
            profile_page_form_button: "Yenilə",
            profile_page_rol_val1: "Şirkət",
            profile_page_rol_val2: "Valideyn",
            profile_page_rol_val3: "VIP",
            profile_page_modal_desc: "Profilin uğurla yeniləndi",

            // Profile Orders
            profile_orders_page_title: "Sənin sifarişlərin",
            profile_order_card_part1: "Sifariş kodu",
            profile_order_card_part2: "Sifariş tarixi",
            profile_order_card_part3: "Sifariş detalları",
            profile_order_card_part4: "Ümumi qiymət",

            // Profile Order Details Card
            profile_orders_details_part1: "Çatdırılma",
            profile_orders_details_part2: "Ölkə",
            profile_orders_details_part3: "Şəhər",
            profile_orders_details_part4: "Ünvan",
            profile_orders_details_part5: "Əlaqə",
            profile_orders_details_part6: "Ad və soyad",
            profile_orders_details_part7: "E-poçt",
            profile_orders_details_part8: "Telefon nömrəsi",
            profile_orders_details_part9: "Ödəniş",
            profile_orders_details_part10: "Ödəniş statusu",
            profile_orders_details_part11: "Ödəniş növü",
            profile_orders_details_part12: "Sifariş olunan məhsullar",
            profile_orders_details_part13: "Qiymət",
            profile_orders_details_part14: "Çatdırılma",
            profile_orders_details_part15: "Ümumi qiymət",
            profile_orders_details_part16: "Endirim",

            // Profile Security
            profile_security_page_title: "Təhlükəsizlik",
            profile_security_form_label1: "Mövcud şifrə",
            profile_security_form_placeholder1: "Mövcud şifrənizi yazın",
            profile_security_form_label2: "Yeni şifrə",
            profile_security_form_placeholder2: "Yeni şifrənizi yazın",
            profile_security_form_label3: "Parolunuzu təsdiqləyin",
            profile_security_form_placeholder3: "Parolunuzu təsdiq edin",
            profile_security_form_button: "Parolunuzu dəyişin",
            profile_security_modal_desc: "Sənin şifrən uğurla dəyişdirildi",


            // Sidebar
            sidebar_title_profile: "Profil",
            sidebar_title_orders: "Sifarişlər",
            sidebar_title_security: "Təhlükəsizlik",
            sidebar_title_logout: "Çıxış et",



            // Breadcrumb
            breadcrumb_home: "Ana səhifə",
            breadcrumb_profile: "Profil",
            breadcrumb_orders: "Sifarişlər",
            breadcrumb_order: "Sifariş",
            breadcrumb_security: "Təhlükəsizlik",

            // Footer
            footer_title1: "Məhsullar",
            footer_part1: "Dofi Pro",
            footer_part2: "Dofi Pro mini",
            footer_part3: "Dofi mini",
            footer_part4: "Dofi çantası",
            footer_title2: "Çatdırılma & Siyasət",
            footer_part5: "Haqqında",
            footer_part6: "Çatdırılma",
            footer_part7: "Qaytarılma siyasəti",
            footer_part8: "Məxfiləşdirmə siyasəti",
            footer_part9: "Xidmət şərtləri",
            footer_title3: "Bizi izləyin",
            footer_part10: "E-poçt",
            footer_part11: "Əlaqə",
            footer_part12: "Bütün hüquqlar qorunur",

            // Product details
            product_details_part1: "Rəng",
            product_details_part2: "Say",
            product_details_part3: "Karta əlavə et",
            product_details_part4: "Ön sifariş et",
            product_details_part5: "Detallı məlumat",
            product_details_part6: "Çatdırılma hesablanacaq",




             // Order checkout
            order_checkout_part1: "Əlaqə",
            order_checkout_part2: "E-poçt",
            order_checkout_part3: "E-poçt daxil edin",
            order_checkout_part4: "Ad və soyad",
            order_checkout_part5: "Adınızı daxil edin",
            order_checkout_part6: "Ölkə seçin",
            order_checkout_part7: "Şəhər seçin",
            order_checkout_part8: "Şəhər seçin",
            order_checkout_part9: "Ünvan",
            order_checkout_part10: "Ünvanı daxil edin",
            order_checkout_part11: "Bina",
            order_checkout_part12: "Binanı daxil edin",
            order_checkout_part13: "Əlaqə",
            order_checkout_part14: "7 rəqəmli nömrə",
            order_checkout_part15: "Ön sifariş et",
            order_checkout_part16: "Çatdırılma",
            order_checkout_part17: "Ölkə seçin",
            order_checkout_part18: "Sənin sifarişin yaradıldı",

            // Order Summary
            order_summary_title: "Sifariş özəti",
            order_summary_part1: "Rəng",
            order_summary_part2: "Qiymət",
            order_summary_part3: "Promo kodu əlavə edin",
            order_summary_part4: "Yoxla",
            order_summary_part5: "Məhsul qiyməti",
            order_summary_part6: "Çatdırılma",
            order_summary_part7: "Endirim",
            order_summary_part8: "Ümumi qiymət",
            order_summary_part9: "Sənin səbətin boşdur",




            // Card modal
            card_modal_title: "Səbət",
            cart_modal_footer: "Sifarişi tamamla",
            cart_modal_message1: "Alış-verişə davam et",
            cart_modal_message2: "Sənin səbətin boşdur",



            // Register
            register_page_title: "Sadəcə bir toxunuşla hesabınızı yaradın",
            register_page_label1: "Ad və Soyad",
            register_page_input1: "Adınızı və soyadınızı daxil edin",
            register_page_label2: "Email",
            register_page_input2: "Email yazın",
            register_page_label3: "Şifrə",
            register_page_input3: "Şifrəni yazın",
            register_page_button: "Qeydiyyatdan keç",
            register_page_footer1: "Artıq hesabınız var?",
            register_page_footer2: "Daxil olun",


            // Login
            login_page_title: "Sizi yenidən görməyə şadıq",
            login_page_label1: "E-poçt",
            login_page_input1: "Email yazın",
            login_page_label2: "Şifrə",
            login_page_input2: "Şifrəni yazın",
            login_page_button: "Daxil olun",
            login_page_footer1: "Hesabınız yoxdur?",
            login_page_footer2: "Qeydiyyatdan keçin",
            login_page_footer3: "Şifrəni unutmusunuz?",



            // Login
            forgot_page_title: "Parolu təmin et",
            forgot_page_label1: "E-poçt",
            forgot_page_input1: "E-poçtu daxil edin",
            forgot_page_button: "Şifrəni dəyiş",
            forgot_page_footer1: "Hesabınız var?",
            forgot_page_footer2: "Daxil ol",



            // Cart
            cart_page_part1: "Səbət",
            cart_page_part2: "Davam et",
            cart_page_part3: "Məhsul",
            cart_page_part4: "Miqdar",
            cart_page_part5: "Ümumi miqdar",
            cart_page_part6: "Ödənişə doğru irəlilə",




            // Modal
            modal_success_message_title: "Uğurlu",
            modal_success_message_description: "Məhsul əlavə olundu",
            modal_success_button: "Bağla",
            modal_error_message_title: "Xəta",
            modal_error_message_description: "Xəta baş verdi",
            modal_error_button: "Bağla",
            modal_login_message_title: "Uğurlu",
            modal_login_message_description: "Siz uğurla daxil oldunuz!",
            modal_register_message_description: "Siz uğurla qeydiyyatdan keçdiniz!"





        },
    },
    fr: {
        translation: {
            hero_page_title: "Bienvenue!",
            hero_page_subtitle: "Intelligent, sûr et super amusant pour tous les enfants!",
            hero_page_button: "Précommandez dès maintenant",
            home_screen_products_title: "Dofi en action",
            add_to_cart_text: "Ajouter au panier",
            about_description: "Notre robot est un compagnon intelligent et engageant, conçu pour accompagner le développement des enfants grâce à l'interaction vocale, aux appels vidéo avec contrôle parental et à des expressions corporelles et faciales dynamiques. Il aide les enfants à apprendre leur langue maternelle et l'anglais, à profiter de contes interactifs et à développer de solides compétences en mathématiques et en logique, tout en s'amusant.",
            about_feature_part1: "Développement cognitif",
            about_feature_part2: "Résolution améliorée des problèmes",
            about_feature_part3: "Apprentissage adaptatif",
            safety_page_title: "Intelligence artificielle et sécurité",
            safety_page_description: "Nous prenons la sécurité très au sérieux. Chaque octet des données de votre enfant est protégé au sein de notre système fermé. Dofi établit une nouvelle norme en matière d'intelligence artificielle adaptée aux familles.",
            safety_page_feature_title_part1: "Utile pour les parents",
            safety_page_feature_desciption_part1: "Des appels sécurisés aux rapports de progression en temps réel",
            safety_page_feature_title_part2: "Des outils parentaux plus performants",
            safety_page_feature_description_part2: "Application parentale présentant clairement le projet éducatif de l'enfant et identifiant les étapes de son développement.",
            safety_page_feature_title_part3: "Sûr, sécurisé et privé",
            safety_page_feature_description_part3: "Appareil certifié kidSAFE+ COPPA avec paramètres de sécurité et de confidentialité personnalisables.",

            faq_title: "Questions fréquemment posées",
            faq_question_part1: "Qu'est-ce que Dofi?",
            faq_answer_part1: "Dofi est un robot d'apprentissage parlant, alimenté par l'IA, conçu pour les enfants. Petit par la taille, mais doté d'une grande personnalité.",
            faq_question_part2: "Comment fonctionne Dofi?",
            faq_answer_part2: "Dofi utilise des algorithmes d'intelligence artificielle avancés pour interagir avec les enfants, leur enseigner de nouvelles compétences et leur offrir une expérience d'apprentissage ludique et stimulante.",
            faq_question_part3: "Dofi est-il sûr pour les enfants?",
            faq_answer_part3: "Oui, Dofi est conçu pour la sécurité. Il dispose d'un cryptage amélioré et d'un contrôle parental pour garantir une expérience sûre et sécurisée aux enfants.",
            faq_question_part4: "À quelle tranche d'âge Dofi est-il adapté?",
            faq_answer_part4: "Dofi est adapté aux enfants de 3 à 8 ans.",
            faq_question_part5: "Comment précommander Dofi?",
            faq_answer_part5: "Vous pouvez précommander Dofi directement sur notre site web. Ajoutez simplement le produit à votre panier et passez à la caisse.",

            // Profile
            profile_page_title: "Informations personnelles",
            profile_page_form_label1: "Nom et prénom",
            profile_page_form_label2: "E-mail",
            profile_page_form_label3: "Numéro de téléphone",
            profile_page_form_label4: "Rôle",
            profile_page_form_button: "Mise à jour",
            profile_page_rol_val1: "Entreprise",
            profile_page_rol_val2: "Maison mère",
            profile_page_rol_val3: "VIP",

            // Profile Orders
            profile_orders_page_title: "Vos commandes",
            profile_order_card_part1: "Code de commande",
            profile_order_card_part2: "Date de commande",
            profile_order_card_part3: "Informations détaillées",
            profile_order_card_part4: "Prix total",

            // Profile Order details card
            profile_orders_details_part1: "Livraison",
            profile_orders_details_part2: "Pays",
            profile_orders_details_part3: "Ville",
            profile_orders_details_part4: "Adresse",
            profile_orders_details_part5: "Contact",
            profile_orders_details_part6: "Nom et prénom",
            profile_orders_details_part7: "E-mail",
            profile_orders_details_part8: "Numéro de téléphone",
            profile_orders_details_part9: "Paiement",
            profile_orders_details_part10: "Statut du paiement",
            profile_orders_details_part11: "Type de paiement",
            profile_orders_details_part12: "Produits commandés",
            profile_orders_details_part13: "Prix",
            profile_orders_details_part14: "Livraison",
            profile_orders_details_part15: "Prix total",
            profile_orders_details_part16: "Remise",

            // Profile Security
            profile_security_page_title: "Sécurité",
            profile_security_form_label1: "Mot de passe actuel",
            profile_security_form_placeholder1: "Saisissez votre mot de passe actuel",
            profile_security_form_label2: "Nouveau mot de passe",
            profile_security_form_placeholder2: "Saisissez votre nouveau mot de passe",
            profile_security_form_label3: "Confirmer le mot de passe",
            profile_security_form_placeholder3: "Confirmer votre mot de passe",
            profile_security_form_button: "Modifier le mot de passe",

            // Breadcrumb
            breadcrumb_home: "Maison",
            breadcrumb_profile: "Profil",
            breadcrumb_orders: "Ordres",
            breadcrumb_order: "Commande",
            breadcrumb_security: "Sécurité",

            // Footer
            footer_title1: "Produits",
            footer_part1: "Dofi Pro",
            footer_part2: "Dofi Pro mini",
            footer_part3: "Dofi mini",
            footer_part4: "Sac Dofi",
            footer_title2: "Livraison et Politiques",
            footer_part5: "À propos",
            footer_part6: "Livraison",
            footer_part7: "Politique de retour",
            footer_part8: "Politique de confidentialité",
            footer_part9: "Conditions d'utilisation",
            footer_title3: "Suivez-nous",
            footer_part10: "E-mail",
            footer_part11: "Contact",
            footer_part12: "Tous droits réservés",

            // Product details
            product_details_part1: "Couleur",
            product_details_part2: "Quantité",
            product_details_part3: "Ajouter au panier",
            product_details_part4: "Précommander maintenant",
            product_details_part5: "Informations détaillées",

            // Sidebar
            sidebar_title_profile: "Profil",
            sidebar_title_orders: "Ordres",
            sidebar_title_security: "Sécurité",
            sidebar_title_logout: "Se déconnecter",

            // Order Summary
            order_summary_title: "Récapitulatif de la commande",
            order_summary_part1: "Couleur",
            order_summary_part2: "Price",
            order_summary_part3: "Enter promo code",
            order_summary_part4: "Check",
            order_summary_part5: "Product price",
            order_summary_part6: "Delivery",
            order_summary_part7: "Discount",
            order_summary_part8: "Total price",
            order_summary_part9: "Your cart is empty",
        },
    },
    tr: {
        translation: {
            hero_page_title: "Merhaba!",
            hero_page_subtitle: "Her Çocuk İçin Akıllı, Güvenli ve Çok Eğlenceli!",
            hero_page_button: "Şimdi ön sipariş verin",
            home_screen_products_title: "Dofi Hareket Halinde",
            add_to_cart_text: "Sepete ekle",
            about_description: "Robotumuz, sesli komut etkileşimi, ebeveyn denetimleriyle görüntülü görüşme ve dinamik vücut ve yüz ifadeleri aracılığıyla çocukların gelişimini desteklemek için tasarlanmış akıllı, ilgi çekici bir arkadaştır. Çocukların hem ana dillerini hem de İngilizceyi öğrenmelerine, etkileşimli hikaye anlatımının keyfini çıkarmalarına ve eğlenirken güçlü matematik ve mantık becerileri geliştirmelerine yardımcı olur.",
            about_feature_part1: "Bilişsel Büyüme",
            about_feature_part2: "Gelişmiş Problem Çözme",
            about_feature_part3: "Uyarlanabilir Öğrenme",

            safety_page_title: "Yapay Zeka ve Güvenlik",
            safety_page_description: "Güvenliği ciddiye alıyoruz. Çocuğunuzun verilerinin her bir baytı kapalı sistemimizde korunuyor. Dofi, aile dostu yapay zeka için yeni bir standart belirliyor.",
            safety_page_feature_title_part1: "Ebeveynler için yararlı",
            safety_page_feature_desciption_part1: "Güvenli aramalardan gerçek zamanlı ilerleme raporlarına",
            safety_page_feature_title_part2: "Daha iyi ebeveynlik araçları",
            safety_page_feature_description_part2: "Çocuğun eğitim planlarını açıkça sunan ve gelişimsel dönüm noktalarını belirleyen Ebeveyn Uygulaması",
            safety_page_feature_title_part3: "Güvenli, emniyetli ve özel",
            safety_page_feature_description_part3: "kidSAFE+ COPPA sertifikalı, özelleştirilebilir güvenlik ve gizlilik ayarlarına sahip cihaz",

            faq_title: "Sıkça Sorulan Sorular",
            faq_question_part1: "Dofi nedir?",
            faq_answer_part1: "Dofi, çocuklar için tasarlanmış, yapay zeka destekli, konuşan bir öğrenme robotudur; boyutu küçük ama kişiliği büyüktür.",
            faq_question_part2: "Dofi nasıl çalışır?",
            faq_answer_part2: "Dofi, çocuklarla etkileşim kurmak, onlara yeni beceriler öğretmek ve eğlenceli, ilgi çekici bir öğrenme deneyimi sağlamak için gelişmiş yapay zeka algoritmaları kullanır.",
            faq_question_part3: "Dofi çocuklar için güvenli midir?",
            faq_answer_part3: "Evet, Dofi güvenlik düşünülerek tasarlanmıştır. Çocuklar için güvenli ve emniyetli bir deneyim sağlamak için gelişmiş şifreleme ve ebeveyn kontrollerine sahiptir.",
            faq_question_part4: "Dofi hangi yaş grubu için uygundur?",
            faq_answer_part4: "Dofi 3 ila 8 yaş arasındaki çocuklar için uygundur.",
            faq_question_part5: "Dofi'yi nasıl ön sipariş edebilirim?",
            faq_answer_part5: "Dofi'yi doğrudan web sitemizden ön sipariş edebilirsiniz. Ürünü sepetinize eklemeniz ve ödeme işlemine geçmeniz yeterlidir.",

            // Profile
            profile_page_title: "Kişisel bilgiler",
            profile_page_form_label1: "Adı ve Soyadı",
            profile_page_form_label2: "E-posta",
            profile_page_form_label3: "İletişim numarası",
            profile_page_form_label4: "Rol",
            profile_page_form_button: "Güncelleme",
            profile_page_rol_val1: "Şirket",
            profile_page_rol_val2: "Ebeveyn",
            profile_page_rol_val3: "VIP",

            // Profile Orders
            profile_orders_page_title: "Siparişleriniz",
            profile_order_card_part1: "Sipariş kodu",
            profile_order_card_part2: "Sipariş tarihi",
            profile_order_card_part3: "Ayrıntılı bilgi",
            profile_order_card_part4: "Toplam fiyat",

            // Profile Order Details Card
            profile_orders_details_part1: "Teslimat",
            profile_orders_details_part2: "Ülke",
            profile_orders_details_part3: "Şehir",
            profile_orders_details_part4: "Adres",
            profile_orders_details_part5: "İletişim",
            profile_orders_details_part6: "Tam ad",
            profile_orders_details_part7: "E-posta",
            profile_orders_details_part8: "Telefon",
            profile_orders_details_part9: "Ödeme",
            profile_orders_details_part10: "Ödeme durumu",
            profile_orders_details_part11: "Ödeme türü",
            profile_orders_details_part12: "Sipariş edilen ürünler",
            profile_orders_details_part13: "Fiyat",
            profile_orders_details_part14: "Teslimat",
            profile_orders_details_part15: "Toplam fiyat",

            // Profile Security
            profile_security_page_title: "Güvenlik",
            profile_security_form_label1: "Mevcut şifre",
            profile_security_form_placeholder1: "Mevcut şifrenizi girin",
            profile_security_form_label2: "Yeni şifre",
            profile_security_form_placeholder2: "Yeni şifrenizi girin",
            profile_security_form_label3: "Şifreyi onayla",
            profile_security_form_placeholder3: "Şifrenizi onayla",
            profile_security_form_button: "Şifreyi değiştir",

            // Breadcrumb
            breadcrumb_home: "Ana Sayfa",
            breadcrumb_profile: "Profil",
            breadcrumb_orders: "Siparişler",
            breadcrumb_order: "Sipariş edin",
            breadcrumb_security: "Güvenlik",

            // Footer
            footer_title1: "Ürünler",
            footer_part1: "Dofi Pro",
            footer_part2: "Dofi Pro mini",
            footer_part3: "Dofi mini",
            footer_part4: "Dofi çantası",
            footer_title2: "Kargo & Politikalar",
            footer_part5: "Hakkımızda",
            footer_part6: "Kargo",
            footer_part7: "İade Politikası",
            footer_part8: "Gizlilik Politikası",
            footer_part9: "Hizmet Şartları",
            footer_title3: "Bizi Takip Edin",
            footer_part10: "E-posta",
            footer_part11: "İletişim",
            footer_part12: "Tüm haklar saklıdır",

            // Product details
            product_details_part1: "Renk",
            product_details_part2: "Miktar",
            product_details_part3: "Sepete ekle",
            product_details_part4: "Şimdi ön sipariş ver",
            product_details_part5: "Ayrıntılı bilgi",

            // Sidebar
            sidebar_title_profile: "Profil",
            sidebar_title_orders: "Siparişler",
            sidebar_title_security: "Güvenlik",
            sidebar_title_logout: "Çıkış yap",

            // Order Summary
            order_summary_title: "Sipariş özeti",
            order_summary_part1: "Renk",
            order_summary_part2: "Price",
            order_summary_part3: "Enter promo code",
            order_summary_part4: "Check",
            order_summary_part5: "Product price",
            order_summary_part6: "Delivery",
            order_summary_part7: "Discount",
            order_summary_part8: "Total price",
            order_summary_part9: "Your cart is empty",
        },
    },
    cn: {
        translation: {
            hero_page_title: "你好！",
            hero_page_subtitle: "为每个孩子带来智能、安全和无限乐趣！",
            hero_page_button: "立即预购",
            home_screen_products_title: "Dofi在行动",
            add_to_cart_text: "加入购物车",
            about_description: "我们的机器人是一位智能、有趣的伙伴，通过语音指令互动、配有家长控制的视频通话以及动态的肢体和面部表情，支持孩子们的成长。它帮助孩子学习母语和英语，享受互动故事讲述，并在玩乐中培养强大的数学和逻辑能力。",
            about_feature_part1: "认知发展",
            about_feature_part2: "高级问题解决能力",
            about_feature_part3: "自适应学习",

            // Safety Page
            safety_page_title: "人工智能与安全",
            safety_page_description: "我们非常重视安全。您孩子的每一字节数据都在我们的封闭系统中受到保护。Dofi正在为家庭友好型人工智能树立新标准。",
            safety_page_feature_title_part1: "对家长有益",
            safety_page_feature_desciption_part1: "从安全通话到实时进度报告",
            safety_page_feature_title_part2: "更强大的育儿工具",
            safety_page_feature_description_part2: "家长应用程序清晰展示孩子的学习计划并识别成长里程碑",
            safety_page_feature_title_part3: "安全、可靠和私密",
            safety_page_feature_description_part3: "kidSAFE+ COPPA认证设备，拥有可定制的安全和隐私设置",

            // FAQ
            faq_title: "常见问题",
            faq_question_part1: "Dofi是什么？",
            faq_answer_part1: "Dofi是一款为儿童设计的人工智能驱动的会说话的学习机器人，体积小巧但个性十足。",
            faq_question_part2: "Dofi是如何工作的？",
            faq_answer_part2: "Dofi通过先进的人工智能算法与孩子互动，教授新技能，提供有趣且引人入胜的学习体验。",
            faq_question_part3: "Dofi对儿童安全吗？",
            faq_answer_part3: "是的，Dofi在设计时充分考虑了安全性，配备高级加密和家长控制功能，为孩子们提供安全的使用体验。",
            faq_question_part4: "Dofi适合哪个年龄段的孩子？",
            faq_answer_part4: "Dofi适合3至8岁的儿童。",
            faq_question_part5: "我该如何预购Dofi？",
            faq_answer_part5: "您可以直接在我们的网站上预购Dofi。只需将产品添加到购物车并完成支付即可。",

            // Profile
            profile_page_title: "个人信息",
            profile_page_form_label1: "姓名",
            profile_page_form_label2: "电子邮箱",
            profile_page_form_label3: "联系电话",
            profile_page_form_label4: "角色",
            profile_page_form_button: "更新",
            profile_page_rol_val1: "公司",
            profile_page_rol_val2: "家长",
            profile_page_rol_val3: "VIP",

            // Profile Order
            profile_orders_page_title: "您的订单",
            profile_order_card_part1: "订单编号",
            profile_order_card_part2: "订单日期",
            profile_order_card_part3: "详细信息",
            profile_order_card_part4: "总价",

            // Profile Order Details
            profile_orders_details_part1: "配送",
            profile_orders_details_part2: "国家",
            profile_orders_details_part3: "城市",
            profile_orders_details_part4: "地址",
            profile_orders_details_part5: "联系方式",
            profile_orders_details_part6: "全名",
            profile_orders_details_part7: "邮箱",
            profile_orders_details_part8: "电话",
            profile_orders_details_part9: "付款",
            profile_orders_details_part10: "付款状态",
            profile_orders_details_part11: "支付方式",
            profile_orders_details_part12: "订购商品",
            profile_orders_details_part13: "价格",
            profile_orders_details_part14: "配送",
            profile_orders_details_part15: "总价",

            // Profile Security
            profile_security_page_title: "安全设置",
            profile_security_form_label1: "当前密码",
            profile_security_form_placeholder1: "输入当前密码",
            profile_security_form_label2: "新密码",
            profile_security_form_placeholder2: "输入新密码",
            profile_security_form_label3: "确认密码",
            profile_security_form_placeholder3: "确认新密码",
            profile_security_form_button: "更改密码",

            // Breadcrumb
            breadcrumb_home: "主页",
            breadcrumb_profile: "个人资料",
            breadcrumb_orders: "订单",
            breadcrumb_order: "下订单",
            breadcrumb_security: "安全",

            // Footer
            footer_title1: "产品",
            footer_part1: "Dofi Pro",
            footer_part2: "Dofi Pro mini",
            footer_part3: "Dofi mini",
            footer_part4: "Dofi背包",
            footer_title2: "运输与政策",
            footer_part5: "关于我们",
            footer_part6: "运输",
            footer_part7: "退货政策",
            footer_part8: "隐私政策",
            footer_part9: "服务条款",
            footer_title3: "关注我们",
            footer_part10: "邮箱",
            footer_part11: "联系我们",
            footer_part12: "版权所有",

            // Product Details
            product_details_part1: "颜色",
            product_details_part2: "数量",
            product_details_part3: "加入购物车",
            product_details_part4: "立即预购",
            product_details_part5: "详细信息",

            // Sidebar
            sidebar_title_profile: "个人资料",
            sidebar_title_orders: "订单",
            sidebar_title_security: "安全设置",
            sidebar_title_logout: "退出登录",
            // Order Summary
            order_summary_title: "订单摘要",
            order_summary_part1: "颜色",
            order_summary_part2: "Price",
            order_summary_part3: "Enter promo code",
            order_summary_part4: "Check",
            order_summary_part5: "Product price",
            order_summary_part6: "Delivery",
            order_summary_part7: "Discount",
            order_summary_part8: "Total price",
            order_summary_part9: "Your cart is empty",
        },
    },
    de: {
        translation: {
            hero_page_title: "Willkommen!",
            hero_page_subtitle: "Intelligent, sicher & super spaßig für jedes Kind!",
            hero_page_button: "Jetzt vorbestellen",
            home_screen_products_title: "Dofi im Einsatz",
            add_to_cart_text: "In den Warenkorb",
            about_title: "Über uns",
            about_description: "Unser Roboter ist ein intelligenter, interaktiver Begleiter, der die Entwicklung von Kindern durch Sprachbefehle, Videoanrufe mit elterlicher Kontrolle sowie dynamische Körper- und Gesichtsausdrücke unterstützt. Er hilft Kindern, sowohl ihre Muttersprache als auch Englisch zu lernen, genießt interaktive Geschichten und stärkt ihre Mathematik- und Logikfähigkeiten – und das alles mit viel Spaß.",
            about_feature_part1: "Kognitive Entwicklung",
            about_feature_part2: "Verbessertes Problemlösen",
            about_feature_part3: "Adaptives Lernen",
            safety_page_title: "Künstliche Intelligenz und Sicherheit",
            safety_page_description: "Wir nehmen Sicherheit ernst. Jedes Byte der Daten Ihres Kindes ist in unserem geschlossenen System geschützt. Dofi setzt neue Maßstäbe für familienfreundliche KI.",
            safety_page_feature_title_part1: "Nützlich für Eltern",
            safety_page_feature_desciption_part1: "Von sicheren Anrufen bis zu Echtzeit-Fortschrittsberichten",
            safety_page_feature_title_part2: "Bessere Erziehungswerkzeuge",
            safety_page_feature_description_part2: "Eltern-App mit klaren Bildungsplänen und Entwicklungszielen",
            safety_page_feature_title_part3: "Sicher, geschützt und privat",
            safety_page_feature_description_part3: "kidSAFE+ COPPA-zertifiziertes Gerät mit anpassbaren Sicherheits- und Datenschutzeinstellungen",

            faq_title: "Häufig gestellte Fragen",
            faq_question_part1: "Was ist Dofi?",
            faq_answer_part1: "Dofi ist ein KI-gestützter sprechender Lernroboter für Kinder – klein in der Größe, aber groß in der Persönlichkeit.",
            faq_question_part2: "Wie funktioniert Dofi?",
            faq_answer_part2: "Dofi verwendet fortschrittliche KI-Algorithmen, um mit Kindern zu interagieren, ihnen neue Fähigkeiten beizubringen und ein unterhaltsames, ansprechendes Lernerlebnis zu bieten.",
            faq_question_part3: "Ist Dofi sicher für Kinder?",
            faq_answer_part3: "Ja, Dofi wurde mit Blick auf Sicherheit entwickelt. Es verfügt über starke Verschlüsselung und elterliche Kontrolle für ein sicheres Erlebnis.",
            faq_question_part4: "Für welches Alter ist Dofi geeignet?",
            faq_answer_part4: "Dofi ist für Kinder im Alter von 3 bis 8 Jahren geeignet.",
            faq_question_part5: "Wie kann ich Dofi vorbestellen?",
            faq_answer_part5: "Sie können Dofi direkt über unsere Website vorbestellen. Einfach das Produkt in den Warenkorb legen und zur Kasse gehen.",

            // Profile
            profile_page_title: "Persönliche Informationen",
            profile_page_form_label1: "Vor- und Nachname",
            profile_page_form_label2: "E-Mail",
            profile_page_form_label3: "Kontakttelefon",
            profile_page_form_label4: "Rolle",
            profile_page_form_button: "Aktualisieren",
            profile_page_rol_val1: "Unternehmen",
            profile_page_rol_val2: "Elternteil",
            profile_page_rol_val3: "VIP",

            // Profile Orders
            profile_orders_page_title: "Ihre Bestellungen",
            profile_order_card_part1: "Bestellcode",
            profile_order_card_part2: "Bestelldatum",
            profile_order_card_part3: "Details",
            profile_order_card_part4: "Gesamtpreis",

            // Profile Order Details Card
            profile_orders_details_part1: "Lieferung",
            profile_orders_details_part2: "Land",
            profile_orders_details_part3: "Stadt",
            profile_orders_details_part4: "Adresse",
            profile_orders_details_part5: "Kontakt",
            profile_orders_details_part6: "Vollständiger Name",
            profile_orders_details_part7: "E-Mail",
            profile_orders_details_part8: "Telefon",
            profile_orders_details_part9: "Zahlung",
            profile_orders_details_part10: "Zahlungsstatus",
            profile_orders_details_part11: "Zahlungsart",
            profile_orders_details_part12: "Bestellte Produkte",
            profile_orders_details_part13: "Preis",
            profile_orders_details_part14: "Lieferung",
            profile_orders_details_part15: "Gesamtpreis",
            profile_orders_details_part16: "Rabatt",

            // Profile Security
            profile_security_page_title: "Sicherheit",
            profile_security_form_label1: "Aktuelles Passwort",
            profile_security_form_placeholder1: "Geben Sie Ihr aktuelles Passwort ein",
            profile_security_form_label2: "Neues Passwort",
            profile_security_form_placeholder2: "Geben Sie Ihr neues Passwort ein",
            profile_security_form_label3: "Passwort bestätigen",
            profile_security_form_placeholder3: "Bestätigen Sie Ihr Passwort",
            profile_security_form_button: "Passwort ändern",

            // Sidebar
            sidebar_title_profile: "Profil",
            sidebar_title_orders: "Bestellungen",
            sidebar_title_security: "Sicherheit",
            sidebar_title_logout: "Abmelden",

            // Breadcrumb
            breadcrumb_home: "Startseite",
            breadcrumb_profile: "Profil",
            breadcrumb_orders: "Bestellungen",
            breadcrumb_order: "Bestellung",
            breadcrumb_security: "Sicherheit",

            // Footer
            footer_title1: "Produkte",
            footer_part1: "Dofi Pro",
            footer_part2: "Dofi Pro mini",
            footer_part3: "Dofi mini",
            footer_part4: "Dofi Tasche",
            footer_title2: "Versand & Richtlinien",
            footer_part5: "Über uns",
            footer_part6: "Lieferung",
            footer_part7: "Rückgaberecht",
            footer_part8: "Datenschutzrichtlinie",
            footer_part9: "Nutzungsbedingungen",
            footer_title3: "Folgen Sie uns",
            footer_part10: "E-Mail",
            footer_part11: "Kontakt",
            footer_part12: "Alle Rechte vorbehalten",

            // Product details
            product_details_part1: "Farbe",
            product_details_part2: "Menge",
            product_details_part3: "In den Warenkorb",
            product_details_part4: "Jetzt vorbestellen",
            product_details_part5: "Detaillierte Informationen",

            // Order Summary
            order_summary_title: "Bestellübersicht",
            order_summary_part1: "Farbe",
            order_summary_part2: "Price",
            order_summary_part3: "Enter promo code",
            order_summary_part4: "Check",
            order_summary_part5: "Product price",
            order_summary_part6: "Delivery",
            order_summary_part7: "Discount",
            order_summary_part8: "Total price",
            order_summary_part9: "Your cart is empty",
        },
    },
    es: {
        translation: {
            hero_page_title: "¡Bienvenido!",
            hero_page_subtitle: "¡Inteligente, seguro y súper divertido para cada niño!",
            hero_page_button: "Preordenar ahora",
            home_screen_products_title: "Dofi en acción",
            add_to_cart_text: "Agregar al carrito",
            about_title: "Acerca de",
            about_description: "Nuestro robot es un compañero inteligente e interactivo diseñado para apoyar el desarrollo de los niños mediante comandos de voz, videollamadas con controles parentales y expresiones corporales y faciales dinámicas. Ayuda a los niños a aprender su idioma nativo y el inglés, disfrutar de cuentos interactivos y fortalecer sus habilidades matemáticas y lógicas, todo mientras se divierten.",
            about_feature_part1: "Crecimiento cognitivo",
            about_feature_part2: "Mejora en la resolución de problemas",
            about_feature_part3: "Aprendizaje adaptativo",
            safety_page_title: "Inteligencia artificial y seguridad",
            safety_page_description: "Nos tomamos la seguridad en serio. Cada byte de los datos de su hijo está protegido dentro de nuestro sistema cerrado. Dofi establece un nuevo estándar para la inteligencia artificial familiar.",
            safety_page_feature_title_part1: "Útil para los padres",
            safety_page_feature_desciption_part1: "Desde llamadas seguras hasta informes de progreso en tiempo real",
            safety_page_feature_title_part2: "Mejores herramientas para padres",
            safety_page_feature_description_part2: "Aplicación para padres que muestra claramente los planes educativos del niño e identifica hitos de desarrollo",
            safety_page_feature_title_part3: "Seguro, protegido y privado",
            safety_page_feature_description_part3: "Dispositivo certificado por kidSAFE+ y COPPA con configuraciones de seguridad y privacidad personalizables",

            faq_title: "Preguntas frecuentes",
            faq_question_part1: "¿Qué es Dofi?",
            faq_answer_part1: "Dofi es un robot educativo parlante impulsado por inteligencia artificial, diseñado para niños, pequeño en tamaño pero grande en personalidad.",
            faq_question_part2: "¿Cómo funciona Dofi?",
            faq_answer_part2: "Dofi utiliza algoritmos avanzados de inteligencia artificial para interactuar con los niños, enseñarles nuevas habilidades y brindarles una experiencia de aprendizaje divertida y atractiva.",
            faq_question_part3: "¿Es seguro Dofi para los niños?",
            faq_answer_part3: "Sí, Dofi está diseñado con la seguridad en mente. Cuenta con cifrado avanzado y controles parentales para garantizar una experiencia segura.",
            faq_question_part4: "¿Para qué edad es adecuado Dofi?",
            faq_answer_part4: "Dofi es adecuado para niños de entre 3 y 8 años.",
            faq_question_part5: "¿Cómo puedo preordenar Dofi?",
            faq_answer_part5: "Puede preordenar Dofi directamente desde nuestro sitio web. Simplemente agregue el producto al carrito y continúe con la compra.",

            // Profile
            profile_page_title: "Información personal",
            profile_page_form_label1: "Nombre y apellido",
            profile_page_form_label2: "Correo electrónico",
            profile_page_form_label3: "Número de contacto",
            profile_page_form_label4: "Rol",
            profile_page_form_button: "Actualizar",
            profile_page_rol_val1: "Empresa",
            profile_page_rol_val2: "Padre/madre",
            profile_page_rol_val3: "VIP",

            // Profile Orders
            profile_orders_page_title: "Tus pedidos",
            profile_order_card_part1: "Código del pedido",
            profile_order_card_part2: "Fecha del pedido",
            profile_order_card_part3: "Información detallada",
            profile_order_card_part4: "Precio total",

            // Profile Order Details Card
            profile_orders_details_part1: "Entrega",
            profile_orders_details_part2: "País",
            profile_orders_details_part3: "Ciudad",
            profile_orders_details_part4: "Dirección",
            profile_orders_details_part5: "Contacto",
            profile_orders_details_part6: "Nombre completo",
            profile_orders_details_part7: "Correo electrónico",
            profile_orders_details_part8: "Teléfono",
            profile_orders_details_part9: "Pago",
            profile_orders_details_part10: "Estado del pago",
            profile_orders_details_part11: "Tipo de pago",
            profile_orders_details_part12: "Productos pedidos",
            profile_orders_details_part13: "Precio",
            profile_orders_details_part14: "Entrega",
            profile_orders_details_part15: "Precio total",
            profile_orders_details_part16: "Descuento",

            // Profile Security
            profile_security_page_title: "Seguridad",
            profile_security_form_label1: "Contraseña actual",
            profile_security_form_placeholder1: "Ingrese su contraseña actual",
            profile_security_form_label2: "Nueva contraseña",
            profile_security_form_placeholder2: "Ingrese su nueva contraseña",
            profile_security_form_label3: "Confirmar contraseña",
            profile_security_form_placeholder3: "Confirme su contraseña",
            profile_security_form_button: "Cambiar contraseña",

            // Sidebar
            sidebar_title_profile: "Perfil",
            sidebar_title_orders: "Pedidos",
            sidebar_title_security: "Seguridad",
            sidebar_title_logout: "Cerrar sesión",

            // Breadcrumb
            breadcrumb_home: "Inicio",
            breadcrumb_profile: "Perfil",
            breadcrumb_orders: "Pedidos",
            breadcrumb_order: "Pedido",
            breadcrumb_security: "Seguridad",

            // Footer
            footer_title1: "Productos",
            footer_part1: "Dofi Pro",
            footer_part2: "Dofi Pro mini",
            footer_part3: "Dofi mini",
            footer_part4: "Bolsa Dofi",
            footer_title2: "Envío y Políticas",
            footer_part5: "Acerca de",
            footer_part6: "Envío",
            footer_part7: "Política de devoluciones",
            footer_part8: "Política de privacidad",
            footer_part9: "Términos del servicio",
            footer_title3: "Síguenos",
            footer_part10: "Correo electrónico",
            footer_part11: "Contacto",
            footer_part12: "Todos los derechos reservados",

            // Product details
            product_details_part1: "Color",
            product_details_part2: "Cantidad",
            product_details_part3: "Agregar al carrito",
            product_details_part4: "Preordenar ahora",
            product_details_part5: "Información detallada",

            // Order Summary
            order_summary_title: "Resumen del pedido",
            order_summary_part1: "Color",
            order_summary_part2: "Price",
            order_summary_part3: "Enter promo code",
            order_summary_part4: "Check",
            order_summary_part5: "Product price",
            order_summary_part6: "Delivery",
            order_summary_part7: "Discount",
            order_summary_part8: "Total price",
            order_summary_part9: "Your cart is empty",
        },
    },
    it: {
        translation: {
            hero_page_title: "Benvenuto!",
            hero_page_subtitle: "Intelligente, sicuro e super divertente per ogni bambino!",
            hero_page_button: "Preordina ora",
            home_screen_products_title: "Dofi in azione",
            add_to_cart_text: "Aggiungi al carrello",
            about_title: "Chi siamo",
            about_description: "Il nostro robot è un compagno intelligente e coinvolgente progettato per supportare lo sviluppo dei bambini tramite comandi vocali, videochiamate con controlli parentali ed espressioni dinamiche del corpo e del viso. Aiuta i bambini a imparare la loro lingua madre e l'inglese, godersi storie interattive e sviluppare solide competenze in matematica e logica, il tutto divertendosi.",
            about_feature_part1: "Crescita cognitiva",
            about_feature_part2: "Risoluzione dei problemi migliorata",
            about_feature_part3: "Apprendimento adattivo",
            safety_page_title: "Intelligenza artificiale e sicurezza",
            safety_page_description: "Prendiamo la sicurezza molto sul serio. Ogni byte dei dati di tuo figlio è protetto all'interno del nostro sistema chiuso. Dofi stabilisce un nuovo standard per l'intelligenza artificiale a misura di famiglia.",
            safety_page_feature_title_part1: "Utile per i genitori",
            safety_page_feature_desciption_part1: "Dalle chiamate sicure ai report in tempo reale sui progressi",
            safety_page_feature_title_part2: "Strumenti migliori per genitori",
            safety_page_feature_description_part2: "App per genitori che mostra chiaramente i piani educativi del bambino e individua le tappe dello sviluppo",
            safety_page_feature_title_part3: "Sicuro, protetto e privato",
            safety_page_feature_description_part3: "Dispositivo certificato kidSAFE+ COPPA con impostazioni di sicurezza e privacy personalizzabili",

            faq_title: "Domande frequenti",
            faq_question_part1: "Cos'è Dofi?",
            faq_answer_part1: "Dofi è un robot educativo parlante basato su intelligenza artificiale, progettato per i bambini: piccolo di dimensioni, ma con una grande personalità.",
            faq_question_part2: "Come funziona Dofi?",
            faq_answer_part2: "Dofi utilizza algoritmi avanzati di intelligenza artificiale per interagire con i bambini, insegnare loro nuove competenze e offrire un'esperienza di apprendimento divertente e coinvolgente.",
            faq_question_part3: "Dofi è sicuro per i bambini?",
            faq_answer_part3: "Sì, Dofi è progettato tenendo conto della sicurezza. Include crittografia avanzata e controlli parentali per garantire un'esperienza sicura.",
            faq_question_part4: "Per quale fascia d'età è adatto Dofi?",
            faq_answer_part4: "Dofi è adatto a bambini tra i 3 e gli 8 anni.",
            faq_question_part5: "Come posso preordinare Dofi?",
            faq_answer_part5: "Puoi preordinare Dofi direttamente dal nostro sito web. Basta aggiungerlo al carrello e procedere al pagamento.",

            // Profile
            profile_page_title: "Informazioni personali",
            profile_page_form_label1: "Nome e cognome",
            profile_page_form_label2: "Email",
            profile_page_form_label3: "Numero di contatto",
            profile_page_form_label4: "Ruolo",
            profile_page_form_button: "Aggiorna",
            profile_page_rol_val1: "Azienda",
            profile_page_rol_val2: "Genitore",
            profile_page_rol_val3: "VIP",

            // Profile Orders
            profile_orders_page_title: "I tuoi ordini",
            profile_order_card_part1: "Codice ordine",
            profile_order_card_part2: "Data dell'ordine",
            profile_order_card_part3: "Informazioni dettagliate",
            profile_order_card_part4: "Prezzo totale",

            // Profile Order Details Card
            profile_orders_details_part1: "Consegna",
            profile_orders_details_part2: "Paese",
            profile_orders_details_part3: "Città",
            profile_orders_details_part4: "Indirizzo",
            profile_orders_details_part5: "Contatto",
            profile_orders_details_part6: "Nome completo",
            profile_orders_details_part7: "Email",
            profile_orders_details_part8: "Telefono",
            profile_orders_details_part9: "Pagamento",
            profile_orders_details_part10: "Stato del pagamento",
            profile_orders_details_part11: "Metodo di pagamento",
            profile_orders_details_part12: "Prodotti ordinati",
            profile_orders_details_part13: "Prezzo",
            profile_orders_details_part14: "Consegna",
            profile_orders_details_part15: "Prezzo totale",
            profile_orders_details_part16: "Sconto",

            // Profile Security
            profile_security_page_title: "Sicurezza",
            profile_security_form_label1: "Password attuale",
            profile_security_form_placeholder1: "Inserisci la password attuale",
            profile_security_form_label2: "Nuova password",
            profile_security_form_placeholder2: "Inserisci la nuova password",
            profile_security_form_label3: "Conferma password",
            profile_security_form_placeholder3: "Conferma la nuova password",
            profile_security_form_button: "Cambia password",

            // Sidebar
            sidebar_title_profile: "Profilo",
            sidebar_title_orders: "Ordini",
            sidebar_title_security: "Sicurezza",
            sidebar_title_logout: "Disconnetti",

            // Breadcrumb
            breadcrumb_home: "Home",
            breadcrumb_profile: "Profilo",
            breadcrumb_orders: "Ordini",
            breadcrumb_order: "Ordine",
            breadcrumb_security: "Sicurezza",

            // Footer
            footer_title1: "Prodotti",
            footer_part1: "Dofi Pro",
            footer_part2: "Dofi Pro mini",
            footer_part3: "Dofi mini",
            footer_part4: "Borsa Dofi",
            footer_title2: "Spedizione e Politiche",
            footer_part5: "Chi siamo",
            footer_part6: "Spedizione",
            footer_part7: "Politica di reso",
            footer_part8: "Informativa sulla privacy",
            footer_part9: "Termini di servizio",
            footer_title3: "Seguici",
            footer_part10: "Email",
            footer_part11: "Contatto",
            footer_part12: "Tutti i diritti riservati",

            // Product details
            product_details_part1: "Colore",
            product_details_part2: "Quantità",
            product_details_part3: "Aggiungi al carrello",
            product_details_part4: "Preordina ora",
            product_details_part5: "Informazioni dettagliate",

            // Order Summary
            order_summary_title: "Riepilogo ordine",
            order_summary_part1: "Colore",
            order_summary_part2: "Price",
            order_summary_part3: "Enter promo code",
            order_summary_part4: "Check",
            order_summary_part5: "Product price",
            order_summary_part6: "Delivery",
            order_summary_part7: "Discount",
            order_summary_part8: "Total price",
            order_summary_part9: "Your cart is empty",
        }
    }
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
