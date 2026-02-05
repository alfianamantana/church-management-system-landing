import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-medium text-muted-foreground hover:text-foreground"
    >
      {i18n.language === 'en' ? 'ID' : 'EN'}
    </Button>
  )
}