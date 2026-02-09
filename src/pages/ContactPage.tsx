'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Footer } from '@/components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Lightbulb, Mail, Phone, MapPin } from 'lucide-react'

export function ContactPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'support@lumen.church',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+62 (0) 123-4567-890',
    },
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: 'Bekasi, West Java, Indonesia',
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
              {t('contact.title')}
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border/50 bg-secondary/30 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      {t('contact.name.label')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.name.placeholder')}
                      className="w-full rounded-lg border border-border/40 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      {t('contact.email.label')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.email.placeholder')}
                      className="w-full rounded-lg border border-border/40 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      {t('contact.subject.label')}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('contact.subject.placeholder')}
                      className="w-full rounded-lg border border-border/40 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      {t('contact.message.label')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.message.placeholder')}
                      rows={5}
                      className="w-full rounded-lg border border-border/40 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {t('contact.submit')}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about Lumen? We're here to help. Reach out to us using any of the contact methods below.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="border-border/50 bg-secondary/30 p-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">{info.label}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </Card>
                )
              })}

              <Card className="border-border/50 bg-accent/5 p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Response Time:</strong> We typically respond to inquiries within 24 business hours.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
