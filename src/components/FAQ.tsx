import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { t } = useTranslation();


  const faqData = [
    {
      question: t('faq_question_part1'),
      answer: t('faq_answer_part1'),
    },
    {

      question: t('faq_question_part2'),
      answer: t('faq_answer_part2'),
    },
    {
      question: t('faq_question_part3'),
      answer: t('faq_answer_part3'),
    },
    {
      question: t('faq_question_part4'),
      answer: t('faq_answer_part4'),
    },
    {
      question: t('faq_question_part5'),
      answer: t('faq_answer_part5'),
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-[100%] md:w-[80%] mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        {t('faq_title')}

      </h1>
      <div className="border border-gray-200">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <div
              className="w-full cursor-pointer text-left text-lg font-medium text-gray-700 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div className='flex items-center justify-between pt-4 py-4'>
                <h3 className='pl-4'>{faq.question}</h3>
                <span className='mr-4 px-2 cursor-pointer text-2xl bg-gray-100'>
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-2 px-4 pb-4 text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ