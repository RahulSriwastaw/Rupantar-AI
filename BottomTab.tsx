
import React from 'react'
import { useTranslation } from 'react-i18next'

type Tab = 'template' | 'wallet' | 'generate' | 'history' | 'pro'

interface BottomTabProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

export const BottomTab: React.FC<BottomTabProps> = ({ activeTab, onTabChange }) => {
  const { t } = useTranslation()

  const tabs: { key: Tab; icon: string }[] = [
    { key: 'template', icon: '📄' },
    { key: 'wallet', icon: '💳' },
    { key: 'generate', icon: '✨' },
    { key: 'history', icon: '📋' },
    { key: 'pro', icon: '👑' }
  ]

  return (
    <nav className="bottom-nav">
      {tabs.map(({ key, icon }) => (
        <button
          key={key}
          className={`nav-item ${activeTab === key ? 'active' : ''}`}
          onClick={() => onTabChange(key)}
          aria-label={t(`nav.${key}`)}
        >
          <span className="nav-icon">{icon}</span>
          <span className="nav-label">{t(`nav.${key}`)}</span>
        </button>
      ))}
    </nav>
  )
}
