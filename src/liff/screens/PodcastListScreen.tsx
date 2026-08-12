import * as React from 'react'
import {
  TopAppBar,
  IconButton,
  SearchBar,
  Chip,
  SectionHeader,
  CardCarousel,
  AlbumCard,
  ArtistRow,
  PlayPauseButton,
  EmptyState,
  HomeIndicator,
  Search,
} from '@/components'
import { CATEGORIES, FEATURED, PODCASTS, type Category } from '@/liff/data'

export interface PodcastListScreenProps {
  onBack?: () => void
  onOpen?: (id: string) => void
  profileName?: string
}

/** LIFF podcast list — search, category filter, a featured deck, and the full list. */
export function PodcastListScreen({ onBack, onOpen, profileName }: PodcastListScreenProps) {
  const [query, setQuery] = React.useState('')
  const [category, setCategory] = React.useState<Category>('ทั้งหมด')

  const filtered = PODCASTS.filter((p) => category === 'ทั้งหมด' || p.category === category).filter(
    (p) =>
      query.trim() === '' ||
      p.title.includes(query.trim()) ||
      p.publisher.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <div className="mx-auto flex min-h-[100dvh] w-full max-w-[480px] flex-col bg-background text-content">
      <TopAppBar
        variant="dashboard"
        title="พอดแคสต์"
        onBack={onBack}
        trailing={<IconButton icon={<Search />} ariaLabel="ค้นหา" fill="glass" size={40} />}
      />

      <div className="no-scrollbar flex-1 overflow-y-auto px-4 pb-10">
        {profileName && (
          <p className="-mt-1 mb-3 type-caption text-content-muted">สวัสดี {profileName} 👋</p>
        )}

        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="ค้นหาพอดแคสต์"
          theme="onImage"
        />

        <div className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4">
          {CATEGORIES.map((c) => (
            <Chip key={c} label={c} selected={category === c} onClick={() => setCategory(c)} />
          ))}
        </div>

        {category === 'ทั้งหมด' && query.trim() === '' && (
          <>
            <SectionHeader title="แนะนำ" level={2} className="mb-3 mt-6" />
            <CardCarousel gap={14} className="-mx-4 px-4">
              {FEATURED.map((p) => (
                <AlbumCard
                  key={p.id}
                  cover={p.cover}
                  title={p.title}
                  episodeCount={p.episodes}
                  align="right"
                  tags={[{ label: p.category, tone: 'accent' }]}
                  onPress={() => onOpen?.(p.id)}
                  className="h-[188px] w-[236px]"
                />
              ))}
            </CardCarousel>
          </>
        )}

        <SectionHeader title="ทั้งหมด" level={2} className="mb-3 mt-6" />

        {filtered.length === 0 ? (
          <EmptyState
            headline={`ไม่พบพอดแคสต์ “${query}”`}
            supportingText="ลองค้นหาด้วยคำอื่น หรือเลือกหมวดอื่น"
          />
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((p) => (
              <ArtistRow
                key={p.id}
                cover={p.cover}
                name={p.title}
                subtitle={`${p.publisher} · ${p.episodes}`}
                onPress={() => onOpen?.(p.id)}
                trailing={
                  <PlayPauseButton
                    playing={false}
                    size={40}
                    aria-label={`เล่น ${p.title}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      onOpen?.(p.id)
                    }}
                  />
                }
              />
            ))}
          </div>
        )}
      </div>

      <HomeIndicator theme="dark" className="mb-1" />
    </div>
  )
}

export default PodcastListScreen
