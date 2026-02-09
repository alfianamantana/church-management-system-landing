'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Users, DollarSign, Calendar, Heart, TrendingUp, Check, Lightbulb, Sparkles, Building } from 'lucide-react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Footer } from '@/components/Footer'
import { FAQ } from '@/components/FAQ'
import { Link } from 'react-router-dom'

const attendanceData = [
  { week: 'Week 1', attendance: 240 },
  { week: 'Week 2', attendance: 268 },
  { week: 'Week 3', attendance: 255 },
  { week: 'Week 4', attendance: 290 },
  { week: 'Week 5', attendance: 312 },
  { week: 'Week 6', attendance: 305 },
]

const givingData = [
  { month: 'Jan', amount: 8500 },
  { month: 'Feb', amount: 9200 },
  { month: 'Mar', amount: 8800 },
  { month: 'Apr', amount: 10500 },
  { month: 'May', amount: 11200 },
  { month: 'Jun', amount: 10800 },
]

export function HomePage() {
  const { t } = useTranslation()

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
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t('nav.features')}
            </a>
            <a href="#analytics" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t('nav.analytics')}
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t('nav.pricing')}
            </a>
            <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-secondary/30 px-4 py-20 md:py-32">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Lightbulb className="h-4 w-4" />
              {t('hero.badge')}
            </div>
            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="mb-10 text-pretty text-lg text-muted-foreground md:text-xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t('hero.primaryButton')}
              </Button>
              <Button size="lg" variant="outline">
                {t('hero.secondaryButton')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="border-b border-border/40 px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t('features.title')}
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              {t('features.description')}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{t('features.memberManagement.title')}</CardTitle>
                  <CardDescription>
                    {t('features.memberManagement.description')}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{t('features.financialStewardship.title')}</CardTitle>
                  <CardDescription>
                    {t('features.financialStewardship.description')}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{t('features.ministryScheduling.title')}</CardTitle>
                  <CardDescription>
                    {t('features.ministryScheduling.description')}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{t('features.automatedCare.title')}</CardTitle>
                  <CardDescription>
                    {t('features.automatedCare.description')}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{t('features.attendanceInsights.title')}</CardTitle>
                  <CardDescription>
                    {t('features.attendanceInsights.description')}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Building className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{t('features.assetManagement.title')}</CardTitle>
                  <CardDescription>
                    {t('features.assetManagement.description')}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Showcase */}
      <section id="analytics" className="border-b border-border/40 bg-secondary/30 px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t('analytics.title')}
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              {t('analytics.description')}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">{t('analytics.attendance.title')}</CardTitle>
                  <CardDescription>{t('analytics.attendance.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      attendance: {
                        label: 'Attendance',
                        color: 'hsl(var(--accent))',
                      },
                    }}
                    className="h-[300px] w-full"
                  >
                    <AreaChart data={attendanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="attendance"
                        stroke="hsl(var(--accent))"
                        fill="hsl(var(--accent))"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">{t('analytics.giving.title')}</CardTitle>
                  <CardDescription>{t('analytics.giving.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      amount: {
                        label: 'Amount',
                        color: 'hsl(var(--primary))',
                      },
                    }}
                    className="h-[300px] w-full"
                  >
                    <BarChart data={givingData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-b border-border/40 px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t('value.title')}
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              {t('value.description')}
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              {t('value.button')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="border-b border-border/40 bg-secondary/30 px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl text-center">
              {t('whyUs.title')}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t('whyUs.intro')}</p>
              <p>{t('whyUs.personal')}</p>
              <p>{t('whyUs.dedication')}</p>
              <p className="font-medium text-foreground">{t('whyUs.conclusion')}</p>
            </div>
            <div className='text-xs font-bold mt-2'>
              Team Lumen
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t('pricing.title')}
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              {t('pricing.description')}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">{t('pricing.seed.name')}</CardTitle>
                  <CardDescription>{t('pricing.seed.description')}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{t('pricing.seed.price')}</span>
                    <span className="text-muted-foreground">{t('pricing.growth.period')}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t('pricing.seed.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-accent" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full bg-transparent" variant="outline">
                    {t('pricing.seed.button')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="relative h-full border-accent/50 shadow-lg">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                  <Sparkles className="inline-block h-4 w-4 mr-1" />
                  {t('pricing.growth.badge')}
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{t('pricing.growth.name')}</CardTitle>
                  <CardDescription>{t('pricing.growth.description')}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{t('pricing.growth.price')}</span>
                    <span className="text-muted-foreground">{t('pricing.growth.period')}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t('pricing.growth.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-accent" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {t('pricing.growth.button')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">{t('pricing.harvest.name')}</CardTitle>
                  <CardDescription>{t('pricing.harvest.description')}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{t('pricing.harvest.price')}</span>
                    <span className="text-muted-foreground">{t('pricing.harvest.period')}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t('pricing.harvest.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-accent" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full bg-transparent" variant="outline">
                    {t('pricing.harvest.button')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  )
}
