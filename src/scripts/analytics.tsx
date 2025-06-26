'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import Script from 'next/script'

/** Leave empty in .env for now; component bails out when it’s "" */
const GA_ID = (process.env.NEXT_PUBLIC_GA_ID || '').trim()

export default function Analytics() {
  const pathname     = usePathname()
  const searchParams = useSearchParams()

  /* Track route changes */
  useEffect(() => {
    if (!GA_ID || typeof window === 'undefined' || !('gtag' in window)) return
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '')
    // @ts-ignore – gtag injected by the inline script below
    window.gtag('config', GA_ID, { page_path: url })
  }, [pathname, searchParams])

  /* No ID yet? Render nothing, avoid build warnings */
  if (!GA_ID) return null

  return (
    <>
      {/* Load Google Tag Manager */}
      <Script
        id="gtag-load"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* Bootstrap the gtag function */}
      <Script
        id="gtag-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  )
}
