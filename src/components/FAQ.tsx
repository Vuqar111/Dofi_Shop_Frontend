import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "What is Doofy?",
      answer: "Doofy is an AI-powered conversational learning robot for kids that is small in size but big on personality."
    },
    {
      question: "How does Doofy work?",
      answer: "Doofy uses advanced AI algorithms to interact with children, teach them new skills, and provide a fun and engaging learning experience."
    },
    {
      question: "Is Doofy safe for children?",
      answer: "Yes, Doofy is designed with safety in mind. It includes enhanced encryption and parental control features to ensure a safe and secure experience for children."
    },
    {
      question: "What age group is Doofy suitable for?",
      answer: "Doofy is suitable for children aged 5 and above."
    },
    {
      question: "How can I purchase Doofy?",
      answer: "You can purchase Doofy directly from our website. Simply add the product to your cart and proceed to checkout."
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-[80%] mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h1>
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