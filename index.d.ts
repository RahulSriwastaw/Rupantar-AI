export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    locale: LocaleKey;
    createdAt: Date;
    updatedAt: Date;
}
export interface Template {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    category: string;
    usageCount: number;
    avgRating: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface PointsTx {
    id: string;
    userId: string;
    amount: number;
    type: 'credit' | 'debit';
    reason: string;
    metadata?: Record<string, any>;
    createdAt: Date;
}
export type LocaleKey = 'en' | 'hi' | 'bn' | 'ta' | 'te' | 'mr' | 'gu' | 'kn' | 'ml' | 'pa' | 'or' | 'as' | 'ur';
