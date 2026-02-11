export default defineNuxtPlugin(() => {
    const { cookiesEnabledIds } = useCookieControl()
    const gaId = 'G-XXXXXXXXXX' // Placeholder ID

    const loadGoogleAnalytics = () => {
        // Check if script is already loaded
        if (document.getElementById('ga-script')) return

        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
        script.id = 'ga-script'
        document.head.appendChild(script)

        const inlineScript = document.createElement('script')
        inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `
        document.head.appendChild(inlineScript)

        console.log('Google Analytics loaded')
    }

    // Watch for consent changes
    watch(
        () => cookiesEnabledIds.value,
        (enabledIds) => {
            if (enabledIds?.includes('analytics')) {
                loadGoogleAnalytics()
            }
        },
        { immediate: true, deep: true }
    )
})
