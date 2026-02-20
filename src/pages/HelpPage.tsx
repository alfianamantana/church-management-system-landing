'use client'

import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Footer } from '@/components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Lightbulb, BookOpen, Wrench, Lightbulb as LightbulbIcon, MessageCircle } from 'lucide-react'

export function HelpPage() {
  const { t } = useTranslation()

  const categories = [
    {
      icon: BookOpen,
      title: t('help.gettingStarted.title'),
      description: t('help.gettingStarted.desc'),
    },
    {
      icon: LightbulbIcon,
      title: t('help.features.title'),
      description: t('help.features.desc'),
    },
    {
      icon: Wrench,
      title: t('help.troubleshooting.title'),
      description: t('help.troubleshooting.desc'),
    },
    {
      icon: BookOpen,
      title: t('help.bestPractices.title'),
      description: t('help.bestPractices.desc'),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Lightbulb className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold text-foreground">Paturehon</span>
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
              {t('help.title')}
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              {t('help.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="border-b border-border/40 px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group flex h-full flex-col border-border/50 bg-secondary/30 p-6 transition-all hover:shadow-lg hover:border-accent/50">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{category.description}</p>
                    <Button variant="ghost" size="sm" className="mt-4 self-start">
                      Learn More →
                    </Button>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-border/40 px-4 py-20 md:py-28">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="mb-4 mx-auto h-12 w-12 text-accent" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t('help.contact.button')}
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Contact Support
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
