import liff from '@line/liff'

export interface LiffState {
  /** true when liff.init succeeded inside a LINE/LIFF context. */
  ready: boolean
  /** LINE display name, when logged in. */
  profileName?: string
}

/**
 * Initialise the LINE LIFF runtime.
 *
 * The LIFF id comes from `VITE_LIFF_ID` (set it at build/deploy time — see
 * docs/LIFF.md). When it's absent — e.g. previewing in a normal browser — we
 * skip init and the app runs standalone, so the UI is always testable.
 */
export async function initLiff(): Promise<LiffState> {
  const liffId = import.meta.env.VITE_LIFF_ID as string | undefined
  if (!liffId) return { ready: false }

  try {
    await liff.init({ liffId })
    let profileName: string | undefined
    if (liff.isLoggedIn()) {
      try {
        const profile = await liff.getProfile()
        profileName = profile.displayName
      } catch {
        /* profile is optional */
      }
    }
    return { ready: true, profileName }
  } catch (err) {
    console.warn('[liff] init failed — running standalone', err)
    return { ready: false }
  }
}

export { liff }
