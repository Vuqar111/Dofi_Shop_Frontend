// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
    en: {
        translation: {
            hero_page_title: "Welcome",
            hero_page_subtitle: 'Smart, Safe & Super Fun for Every Kid!',
            hero_page_button: "Pre-order now",
            home_screen_products_title: "Dofi In Action",
            add_to_cart_text: "Add to cart",
            about_title: "About",
            about_description: "Our robot is a smart, engaging companion designed to support children's development through voice command interaction, video calling with parental controls, and dynamic body and facial expressions. It helps kids learn both their native language and English, enjoy interactive storytelling, and build strong math and logic skills, all while having fun.",
            about_feature_part1: "Cognitive Growth",
            about_feature_part2: "Cognitive Growth",
            about_feature_part3: "Cognitive Growth",
            about_feature_part4: "Cognitive Growth",
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
    az: {
        translation: {
            hero_page_title: "Xoş gəlmisən",
            hero_page_subtitle: 'Smart, Safe & Super Fun for Every Kid!',
            hero_page_button: "Ön sifariş et",
            home_screen_products_title: "Dofi In Action",
            add_to_cart_text: "Add to cart",
            about_description: "Our robot is a smart, engaging companion designed to support children's development through voice command interaction, video calling with parental controls, and dynamic body and facial expressions. It helps kids learn both their native language and English, enjoy interactive storytelling, and build strong math and logic skills, all while having fun.",
            about_feature_part1: "Cognitive Growth",
            about_feature_part2: "Cognitive Growth",
            about_feature_part3: "Cognitive Growth",
            about_feature_part4: "Cognitive Growth",

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
    fr: {
        translation: {
            hero_page_title: "Welcome",
            hero_page_subtitle: 'Smart, Safe & Super Fun for Every Kid!',
            hero_page_button: "Pre-order now",
            home_screen_products_title: "Dofi In Action",
            add_to_cart_text: "Add to cart",
            about_description: "Our robot is a smart, engaging companion designed to support children's development through voice command interaction, video calling with parental controls, and dynamic body and facial expressions. It helps kids learn both their native language and English, enjoy interactive storytelling, and build strong math and logic skills, all while having fun.",
            about_feature_part1: "Cognitive Growth",
            about_feature_part2: "Cognitive Growth",
            about_feature_part3: "Cognitive Growth",
            about_feature_part4: "Cognitive Growth",
        },
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
            about_feature_part4: "Cognitive Growth",

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
