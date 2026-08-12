import * as React from 'react'
import { initLiff } from './liff'
import GetStartedScreen from './screens/GetStartedScreen'
import PodcastListScreen from './screens/PodcastListScreen'

type View = 'getstarted' | 'list'

/**
 * The LINE LIFF podcast app. Opens on the Get Started screen (the rich-menu
 * entry point) and moves to the podcast list. LIFF init runs once on mount and
 * degrades gracefully outside LINE.
 */
export default function LiffApp() {
  const [view, setView] = React.useState<View>('getstarted')
  const [profileName, setProfileName] = React.useState<string | undefined>()

  React.useEffect(() => {
    let active = true
    initLiff().then((state) => {
      if (active && state.profileName) setProfileName(state.profileName)
    })
    return () => {
      active = false
    }
  }, [])

  if (view === 'getstarted') {
    return <GetStartedScreen onStart={() => setView('list')} />
  }
  return (
    <PodcastListScreen
      profileName={profileName}
      onBack={() => setView('getstarted')}
      onOpen={() => {}}
    />
  )
}
