'use client'

import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Footer } from '@/components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Lightbulb } from 'lucide-react'

export function TermsPage() {
  const { t } = useTranslation()

  const sections = [
    {
      title: t('terms.section1.title'),
      content: t('terms.section1.content'),
    },
    {
      title: t('terms.section2.title'),
      content: t('terms.section2.content'),
    },
    {
      title: t('terms.section3.title'),
      content: t('terms.section3.content'),
    },
    {
      title: t('terms.section4.title'),
      content: t('terms.section4.content'),
    },
    {
      title: t('terms.section5.title'),
      content: t('terms.section5.content'),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Lightbulb className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold text-foreground">Lumen</span>
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm">
              {t('nav.login')}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border/40 px-4 py-20 md:py-28">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {t('terms.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('terms.lastUpdated')}: February 9, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                  {section.title}
                </h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Additional Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                6. Contact Information
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at support@lumen.church or visit our Contact page for more information.
              </p>
            </motion.div>
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 border-t border-border/40 pt-8"
          >
            <p className="text-sm text-muted-foreground text-center">
              These terms and conditions are subject to change without notice. Please review this page periodically to stay informed of any updates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
