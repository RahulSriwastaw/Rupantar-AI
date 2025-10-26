
import React, { useState } from 'react'
import './App.css'
import { BottomTab } from './BottomTab'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from './useTheme'

type Tab = 'template' | 'wallet' | 'generate' | 'history' | 'pro'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('generate')
  const { isDark, toggleTheme } = useTheme()

  const renderContent = () => {
    switch (activeTab) {
      case 'template':
        return <p>Template content coming soon...</p>
      case 'wallet':
        return <p>Wallet content coming soon...</p>
      case 'generate':
        return <p>Admin dashboard coming soon...</p>
      case 'history':
        return <p>History content coming soon...</p>
      case 'pro':
        return <p>Pro content coming soon...</p>
      default:
        return null
    }
  }

  return (
    <div className="admin-container">
      <header>
        <h1>Rupantar AI Admin Panel</h1>
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </header>
      {renderContent()}
      <BottomTab activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
