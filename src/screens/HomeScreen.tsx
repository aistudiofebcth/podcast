import * as React from 'react'
import {
  Screen,
  TopAppBar,
  IconButton,
  SearchBar,
  Chip,
  SectionHeader,
  CardCarousel,
  AlbumCard,
  BottomNavBar,
  Search,
  Home,
  Library,
} from '@/components'
import { covers } from '@/lib/placeholder'

const FILTERS = ['All', 'Pop', 'Podcasts', 'Top Hits', 'Chill']

/** Home / Your Studio — light theme dashboard with search, filters, and a card deck. */
export function HomeScreen() {
  const [query, setQuery] = React.useState('')
  const [filter, setFilter] = React.useState('All')
  const [tab, setTab] = React.useState('home')

  return (
    <Screen theme="light" className="relative flex flex-col">
      <TopAppBar
        variant="dashboard"
        title="Your Studio"
        trailing={
          <IconButton icon={<Search />} ariaLabel="Search" fill="glass" size={40} />
        }
      />

      <div className="flex flex-1 flex-col gap-6 px-4 pb-32 pt-2">
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Songs, artists, podcasts"
          theme="light"
        />

        <div className="-mx-4 flex gap-[7px] overflow-x-auto px-4 no-scrollbar">
          {FILTERS.map((f) => (
            <Chip
              key={f}
              label={f}
              variant="filter"
              selected={filter === f}
              onClick={() => setFilter(f)}
            />
          ))}
        </div>

        <div>
          <SectionHeader
            title="Your Library"
            level={2}
            action={{ label: 'See all', onPress: () => {} }}
            className="mb-4"
          />
          <CardCarousel gap={16} className="-mx-4 px-4">
            <AlbumCard
              cover={covers.stay}
              title="Late Night Tapes"
              episodeCount="18 tracks"
              tags={[{ label: 'Pop', tone: 'accent' }, { label: 'Chill' }]}
            />
            <AlbumCard
              cover={covers.midnight}
              title="Midnight Drive"
              episodeCount="24 tracks"
              tags={[{ label: 'Synth' }, { label: 'Top Hits' }]}
            />
            <AlbumCard
              cover={covers.goldenHour}
              title="Golden Hour"
              episodeCount="12 episodes"
              tags={[{ label: 'Podcast', tone: 'accent' }]}
            />
          </CardCarousel>
        </div>
      </div>

      <BottomNavBar
        className="absolute inset-x-0 bottom-6"
        activeKey={tab}
        onSelect={setTab}
        items={[
          { key: 'home', icon: <Home />, ariaLabel: 'Home' },
          { key: 'library', icon: <Library />, ariaLabel: 'Library' },
          { key: 'search', icon: <Search />, ariaLabel: 'Search' },
        ]}
      />
    </Screen>
  )
}

export default HomeScreen
