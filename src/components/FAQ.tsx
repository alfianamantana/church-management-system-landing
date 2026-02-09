import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Accordion } from '@/components/ui/accordion'

export function FAQ() {
  const { t } = useTranslation()

  const faqs = [
    {
      id: 'faq-1',
      trigger: t('faq.q1.question'),
      content: t('faq.q1.answer'),
    },
    {
      id: 'faq-2',
      trigger: t('faq.q2.question'),
      content: t('faq.q2.answer'),
    },
    {
      id: 'faq-3',
      trigger: t('faq.q3.question'),
      content: t('faq.q3.answer'),
    },
    {
      id: 'faq-4',
      trigger: t('faq.q4.question'),
      content: t('faq.q4.answer'),
    },
    {
      id: 'faq-5',
      trigger: t('faq.q5.question'),
      content: t('faq.q5.answer'),
    },
    {
      id: 'faq-6',
      trigger: t('faq.q6.question'),
      content: t('faq.q6.answer'),
    },
  ]

  return (
    <section className="border-b border-border/40 bg-secondary/30 px-4 py-20 md:py-28">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('faq.title')}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion items={faqs} className="w-full" />
        </motion.div>
      </div>
    </section>
  )
}
