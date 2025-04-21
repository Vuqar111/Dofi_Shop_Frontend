import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "Dofi nədir?",
      answer: "Dofi, süni intellektlə işləyən, uşaqlar üçün nəzərdə tutulmuş, kiçik ölçülü, lakin böyük şəxsiyyətə sahib bir danışıq öyrənmə robotudur."
    },
    {
      question: "Dofi necə işləyir?",
      answer: "Dofi, uşaqlarla qarşılıqlı əlaqə qurmaq, onlara yeni bacarıqlar öyrətmək və əyləncəli, maraqlı bir öyrənmə təcrübəsi təqdim etmək üçün qabaqcıl süni intellekt alqoritmlərindən istifadə edir."
    },
    {
      question: "Dofi uşaqlar üçün təhlükəsizdirmi?",
      answer: "Bəli, Dofi təhlükəsizlik nəzərə alınaraq hazırlanıb. O, uşaqlar üçün təhlükəsiz və güvənli bir təcrübə təmin etmək üçün gücləndirilmiş şifrələmə və valideyn nəzarəti funksiyalarına malikdir."
    },
    {
      question: "Dofi hansı yaş qrupuna uyğundur?",
      answer: "Dofi 5 yaş və daha böyük uşaqlar üçün uyğundur."
    },
    {
      question: "Dofi-ni necə ala bilərəm?",
      answer: "Dofi-ni birbaşa veb saytımızdan ala bilərsiniz. Sadəcə məhsulu səbətinizə əlavə edin və ödəmə prosesinə keçin."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-[100%] md:w-[80%] mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Tez-tez soruşulan suallar</h1>
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