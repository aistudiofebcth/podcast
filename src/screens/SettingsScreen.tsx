import * as React from 'react'
import {
  Screen,
  TopAppBar,
  ListRow,
  ToggleSwitch,
  Button,
  Divider,
  HomeIndicator,
  Bell,
  Lock,
  Shield,
  Info,
  Star,
  ChevronRight,
} from '@/components'
import { cover } from '@/lib/placeholder'

/** Settings — profile header, grouped rows, and a destructive Log Out action. */
export function SettingsScreen() {
  const [pushEnabled, setPushEnabled] = React.useState(true)

  return (
    <Screen theme="dark" className="flex flex-col">
      <TopAppBar title="Settings" onBack={() => {}} />

      <div className="flex flex-1 flex-col gap-4 px-4 pt-2">
        <ListRow
          size="tall"
          leadingType="avatar"
          leading={<img src={cover(275)} alt="Amelia Park" className="size-full object-cover" />}
          label="Amelia Park"
          caption="View profile"
        />

        <div className="flex flex-col gap-3">
          <ListRow
            leading={<Bell size={22} />}
            label="Notifications"
            trailing={
              <ToggleSwitch
                checked={pushEnabled}
                onChange={setPushEnabled}
                ariaLabel="Push notifications"
              />
            }
          />
          <ListRow leading={<Lock size={22} />} label="Password" onPress={() => {}} />
          <ListRow leading={<Info size={22} />} label="About Us" onPress={() => {}} />
          <ListRow leading={<Shield size={22} />} label="Terms & Conditions" onPress={() => {}} />
          <ListRow
            leading={<Star size={22} />}
            label="Rate FEBC Podcast"
            trailing={<ChevronRight size={20} className="text-content-muted" />}
            onPress={() => {}}
          />
        </div>

        <Divider className="my-2" tone="light" />

        <Button variant="light" label="Log Out" fullWidth />
      </div>

      <HomeIndicator theme="dark" className="mt-6 mb-1" />
    </Screen>
  )
}

export default SettingsScreen
