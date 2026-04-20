import { useRouterState } from '@tanstack/react-router'
import { usePostHog } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogPageView() {
  const location = useRouterState({ select: (s) => s.location })
  const posthog = usePostHog()

  useEffect(() => {
    if (posthog) {
      posthog.capture('$pageview', {
        $current_url: window.location.href,
      })
    }
  }, [location.pathname, location.search, posthog])

  return null
}
