import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "What is Dofi?",
      answer: "Dofi is an AI-powered talking learning robot designed for children, small in size but big in personality.",
    },
    {
      question: "How does Dofi work?",
      answer: "Dofi uses advanced artificial intelligence algorithms to interact with children, teach them new skills, and provide a fun, engaging learning experience."
    },
    {
      question: "Is Dofi safe for kids?",
      answer: "Yes, Dofi is designed with safety in mind. It has enhanced encryption and parental controls to ensure a safe and secure experience for kids."
    },
    {
      question: "What age group is Dofi suitable for?",
      answer: "Dofi is suitable for children between the ages of 3 and 8."
    },
    {
      question: "How do I pre-order Dofi?",
      answer: "You can pre-order Dofi directly from our website. Simply add the product to your cart and proceed to checkout."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-[100%] md:w-[80%] mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Frequently asked questions</h1>
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