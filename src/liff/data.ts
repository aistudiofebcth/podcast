import { cover } from '@/lib/placeholder'

export const CATEGORIES = ['ทั้งหมด', 'ข่าวสาร', 'ครอบครัว', 'บทเพลง', 'บทเรียน', 'เยาวชน'] as const
export type Category = (typeof CATEGORIES)[number]
export type PodcastCategory = Exclude<Category, 'ทั้งหมด'>

export interface Podcast {
  id: string
  title: string
  publisher: string
  episodes: string
  category: PodcastCategory
  cover: string
  featured?: boolean
}

/** Sample FEBC podcast catalogue (placeholder data). */
export const PODCASTS: Podcast[] = [
  { id: 'morning', title: 'เช้านี้ที่ FEBC', publisher: 'FEBC Thailand', episodes: '128 ตอน', category: 'ข่าวสาร', cover: cover(200), featured: true },
  { id: 'family', title: 'ครอบครัวอบอุ่น', publisher: 'FEBC Family', episodes: '64 ตอน', category: 'ครอบครัว', cover: cover(18), featured: true },
  { id: 'songs', title: 'บทเพลงแห่งใจ', publisher: 'FEBC Music', episodes: '96 ตอน', category: 'บทเพลง', cover: cover(320), featured: true },
  { id: 'word', title: 'พระวจนะประจำวัน', publisher: 'FEBC Devotion', episodes: '365 ตอน', category: 'บทเรียน', cover: cover(255) },
  { id: 'heart', title: 'เสียงจากใจ', publisher: 'FEBC Talk', episodes: '48 ตอน', category: 'ข่าวสาร', cover: cover(150) },
  { id: 'youth', title: 'เยาวชนคนรุ่นใหม่', publisher: 'FEBC Youth', episodes: '72 ตอน', category: 'เยาวชน', cover: cover(38) },
  { id: 'hope', title: 'ความหวังยามค่ำ', publisher: 'FEBC Night', episodes: '54 ตอน', category: 'ครอบครัว', cover: cover(280) },
  { id: 'study', title: 'ห้องเรียนพระคัมภีร์', publisher: 'FEBC School', episodes: '110 ตอน', category: 'บทเรียน', cover: cover(95) },
]

export const FEATURED = PODCASTS.filter((p) => p.featured)
