
import React from 'react'
import { useTranslation } from 'react-i18next'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  const { t } = useTranslation()

  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={t('theme.toggle')}
      title={t('theme.toggle')}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
