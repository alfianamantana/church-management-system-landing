'use client'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Lightbulb } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border/40 bg-secondary/30 px-4 py-12 md:py-16">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
              <Lightbulb className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold text-foreground">Lumen</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Church management made simple, accessible, and affordable for every congregation.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              {t('footer.product.title')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.product.features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.product.pricing')}
                </a>
              </li>
              <li>
                <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.product.security')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              {t('footer.company.title')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.company.about')}
                </Link>
              </li>
              <li>
                <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.company.blog')}
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.company.careers')}
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              {t('footer.support.title')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.support.help')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.support.contact')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.support.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
