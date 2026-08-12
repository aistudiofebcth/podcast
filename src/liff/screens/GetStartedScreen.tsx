import { Logo, Button, OnboardingText, PaginationDots, HomeIndicator } from '@/components'
import { covers } from '@/lib/placeholder'

export interface GetStartedScreenProps {
  onStart: () => void
}

/**
 * LIFF entry screen — mirrors the kit's "Get Started" onboarding: a full-bleed
 * hero fading into the dark canvas, the FEBC brand lockup, a headline + body,
 * and the primary CTA into the podcast list.
 */
export function GetStartedScreen({ onStart }: GetStartedScreenProps) {
  return (
    <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-[480px] flex-col overflow-hidden bg-background text-content">
      {/* hero */}
      <div className="relative flex-1">
        <img src={covers.neon} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
        <div className="absolute left-1/2 top-[12%] -translate-x-1/2">
          <Logo width={52} />
        </div>
      </div>

      {/* content */}
      <div className="relative -mt-10 flex flex-col items-center gap-5 px-6 pb-6 text-center">
        <PaginationDots count={3} activeIndex={0} />
        <div className="flex flex-col items-center gap-3">
          <h1 className="type-heading-2 text-white">พอดแคสต์ FEBC</h1>
          <OnboardingText
            text="สาระ กำลังใจ และบทเพลงจากสื่อคริสเตียน FEBC — ฟังได้ทุกที่ ทุกเวลา ฟรี"
            maxWidth={320}
          />
        </div>
        <Button variant="primary" label="เริ่มต้นใช้งาน" fullWidth className="mt-2" onClick={onStart} />
      </div>

      <HomeIndicator theme="dark" className="mb-1" />
    </div>
  )
}

export default GetStartedScreen
