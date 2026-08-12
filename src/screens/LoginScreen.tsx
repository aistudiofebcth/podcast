import * as React from 'react'
import {
  Screen,
  TopAppBar,
  TextField,
  Button,
  Logo,
  HomeIndicator,
  Mail,
} from '@/components'

/** Auth — email/password sign-in on the dark theme. */
export function LoginScreen() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <Screen theme="dark" className="flex flex-col">
      <TopAppBar title="Log in" onBack={() => {}} />

      <div className="flex flex-1 flex-col gap-8 px-4 pt-8">
        <div className="flex flex-col items-center gap-3">
          <Logo />
          <p className="type-body text-content-muted text-center">
            Welcome back — sign in to keep listening.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <TextField
            label="Email"
            type="email"
            value={email}
            onChangeText={setEmail}
            placeholder="you@zentune.com"
            trailingIcon={<Mail size={24} />}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
          />
        </div>

        <button type="button" className="-mt-2 self-end type-caption text-content-muted">
          Forgot password?
        </button>

        <Button variant="primary" label="Log in" fullWidth />

        <p className="text-center type-caption text-content-muted">
          Don&apos;t have an account? <span className="text-primary">Sign up</span>
        </p>
      </div>

      <HomeIndicator theme="dark" className="mt-auto mb-1" />
    </Screen>
  )
}

export default LoginScreen
