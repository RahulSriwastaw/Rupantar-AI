
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  isPro: boolean
  createdAt: string
}

export interface Template {
  id: string
  name: string
  description: string
  category: string
  previewUrl: string
  usageCount: number
  rating: number
  createdAt: string
}

export interface GenerationJob {
  jobId: string
  userId: string
  templateId?: string
  prompt: string
  photos: string[]
  status: 'pending' | 'processing' | 'completed' | 'failed'
  resultUrl?: string
  cost: number
  createdAt: string
  completedAt?: string
}

export interface WalletTransaction {
  id: string
  userId: string
  type: 'credit' | 'debit'
  amount: number
  description: string
  referenceId?: string
  createdAt: string
}
