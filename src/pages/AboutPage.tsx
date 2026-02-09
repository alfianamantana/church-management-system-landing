'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Shield, Users, Lightbulb, Heart, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Footer } from '@/components/Footer'
import { Link } from 'react-router-dom'

export function AboutPage() {
  const { t } = useTranslation()

  const values = [
    {
      icon: Lightbulb,
      titleKey: 'about.values.accessibility.title',
      descriptionKey: 'about.values.accessibility.description',
    },
    {
      icon: Heart,
      titleKey: 'about.values.affordability.title',
      descriptionKey: 'about.values.affordability.description',
    },
    {
      icon: Globe,
      titleKey: 'about.values.efficiency.title',
      descriptionKey: 'about.values.efficiency.description',
    },
    {
      icon: Shield,
      titleKey: 'about.values.security.title',
      descriptionKey: 'about.values.security.description',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Lightbulb className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold text-foreground">Lumen</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link to="/#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t('nav.features')}
            </Link>
            <Link to="/#analytics" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t('nav.analytics')}
            </Link>
            <Link to="/#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t('nav.pricing')}
            </Link>
            <Link to="/about" className="text-sm font-medium text-accent transition-colors hover:text-accent/80">
              About
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm">
              {t('nav.login')}
            </Button>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              {t('nav.getStarted')}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Bold Headline */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-secondary/30 px-4 py-20 md:py-32">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              {t('about.hero.title')}
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* The 'Why' Section - The Story */}
      <section className="border-b border-border/40 px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t('about.why.title')}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t('about.why.story')}</p>
              <p className="text-foreground font-medium">{t('about.why.lokasi')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values & Mission */}
      <section className="border-b border-border/40 bg-secondary/30 px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t('about.mission.title')}
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              {t('about.mission.description')}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-foreground">
                        {t(value.titleKey)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {t(value.descriptionKey)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The 'How' Section - Solution & Efficiency */}
      <section className="border-b border-border/40 px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t('about.how.title')}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t('about.how.solution')}</p>
              <p>{t('about.how.efficiency')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section - Security & Community */}
      <section className="border-b border-border/40 bg-secondary/30 px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t('about.commitment.title')}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t('about.commitment.security')}</p>
              <p>{t('about.commitment.community')}</p>
              <p className="text-foreground font-medium">{t('about.commitment.closing')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="border-b border-border/40 px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t('about.testimonials.title')}
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              {t('about.testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {/* Testimonial 1 - Lead Pastor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <Card className="flex h-full flex-col border-border/50 bg-secondary/30 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {t('about.testimonial.pastor.name')}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    "{t('about.testimonial.pastor.quote')}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 - Church Admin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="flex h-full flex-col border-border/50 bg-secondary/30 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {t('about.testimonial.admin.name')}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    "{t('about.testimonial.admin.quote')}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 3 - Finance Head */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="flex h-full flex-col border-border/50 bg-secondary/30 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {t('about.testimonial.finance.name')}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    "{t('about.testimonial.finance.quote')}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t('about.cta.title')}
            </h2>
            <p className="mb-10 text-pretty text-lg text-muted-foreground md:text-xl">
              {t('about.cta.description')}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t('about.cta.primaryButton')}
              </Button>
              <Button size="lg" variant="outline">
                {t('about.cta.secondaryButton')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
