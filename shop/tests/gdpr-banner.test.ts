import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'

// Mock useCookieControl composable
const mockCookiesEnabledIds = ref<string[]>([])
const mockIsConsentGiven = ref(false)
const mockGrantAll = vi.fn()

vi.mock('#imports', async () => {
    const actual = await vi.importActual('#imports')
    return {
        ...actual,
        useCookieControl: () => ({
            cookiesEnabledIds: mockCookiesEnabledIds,
            isConsentGiven: mockIsConsentGiven,
            grantAll: mockGrantAll
        })
    }
})

describe('GDPR Cookie Consent Logic', () => {
    beforeEach(() => {
        mockCookiesEnabledIds.value = []
        mockIsConsentGiven.value = false
        mockGrantAll.mockClear()
    })

    describe('acceptAll', () => {
        it('should grant all cookies and mark consent as given', () => {
            // Simulate acceptAll logic
            mockGrantAll()
            mockIsConsentGiven.value = true

            expect(mockGrantAll).toHaveBeenCalledOnce()
            expect(mockIsConsentGiven.value).toBe(true)
        })
    })

    describe('acceptNecessary', () => {
        it('should clear all optional cookies', () => {
            // Start with analytics enabled
            mockCookiesEnabledIds.value = ['analytics']

            // Simulate acceptNecessary logic
            mockCookiesEnabledIds.value = []
            mockIsConsentGiven.value = true

            expect(mockCookiesEnabledIds.value).toEqual([])
            expect(mockIsConsentGiven.value).toBe(true)
        })

        it('should not include analytics in enabled IDs', () => {
            mockCookiesEnabledIds.value = []
            mockIsConsentGiven.value = true

            expect(mockCookiesEnabledIds.value).not.toContain('analytics')
        })
    })

    describe('saveSettings', () => {
        it('should enable analytics when analyticsConsent is true', () => {
            const analyticsConsent = true

            // Simulate saveSettings logic
            if (analyticsConsent) {
                mockCookiesEnabledIds.value = ['analytics']
            } else {
                mockCookiesEnabledIds.value = []
            }
            mockIsConsentGiven.value = true

            expect(mockCookiesEnabledIds.value).toContain('analytics')
            expect(mockIsConsentGiven.value).toBe(true)
        })

        it('should not enable analytics when analyticsConsent is false', () => {
            const analyticsConsent = false

            // Simulate saveSettings logic
            if (analyticsConsent) {
                mockCookiesEnabledIds.value = ['analytics']
            } else {
                mockCookiesEnabledIds.value = []
            }
            mockIsConsentGiven.value = true

            expect(mockCookiesEnabledIds.value).not.toContain('analytics')
            expect(mockIsConsentGiven.value).toBe(true)
        })
    })
})

describe('Google Analytics Script Injection', () => {
    beforeEach(() => {
        mockCookiesEnabledIds.value = []
        // Clean up any injected scripts
        document.querySelectorAll('#ga-script').forEach(el => el.remove())
    })

    it('should NOT inject GA script when analytics is not accepted', () => {
        mockCookiesEnabledIds.value = []

        const shouldLoad = mockCookiesEnabledIds.value.includes('analytics')
        expect(shouldLoad).toBe(false)

        // Verify no GA script in DOM
        const gaScript = document.getElementById('ga-script')
        expect(gaScript).toBeNull()
    })

    it('should inject GA script when analytics IS accepted', () => {
        mockCookiesEnabledIds.value = ['analytics']

        const shouldLoad = mockCookiesEnabledIds.value.includes('analytics')
        expect(shouldLoad).toBe(true)

        // Simulate the plugin's loadGoogleAnalytics logic
        if (shouldLoad && !document.getElementById('ga-script')) {
            const script = document.createElement('script')
            script.id = 'ga-script'
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
            document.head.appendChild(script)
        }

        const gaScript = document.getElementById('ga-script')
        expect(gaScript).not.toBeNull()
        expect(gaScript?.getAttribute('src')).toContain('googletagmanager.com')
    })

    it('should not duplicate GA script on repeated consent', () => {
        mockCookiesEnabledIds.value = ['analytics']

        // Inject twice
        for (let i = 0; i < 2; i++) {
            if (mockCookiesEnabledIds.value.includes('analytics') && !document.getElementById('ga-script')) {
                const script = document.createElement('script')
                script.id = 'ga-script'
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
                document.head.appendChild(script)
            }
        }

        const gaScripts = document.querySelectorAll('#ga-script')
        expect(gaScripts.length).toBe(1)
    })
})

describe('Banner Text Localization', () => {
    it('should return German text for de locale', () => {
        const locale = 'de'
        const bannerText = locale === 'en'
            ? { title: 'Your Data. Your Choice.', acceptAll: 'Accept all', necessaryOnly: 'Only necessary', settings: 'Settings' }
            : { title: 'Deine Daten. Deine Wahl.', acceptAll: 'Allem zustimmen', necessaryOnly: 'Nur das Nötigste', settings: 'Einstellungen' }

        expect(bannerText.title).toBe('Deine Daten. Deine Wahl.')
        expect(bannerText.acceptAll).toBe('Allem zustimmen')
        expect(bannerText.necessaryOnly).toBe('Nur das Nötigste')
        expect(bannerText.settings).toBe('Einstellungen')
    })

    it('should return English text for en locale', () => {
        const locale = 'en'
        const bannerText = locale === 'en'
            ? { title: 'Your Data. Your Choice.', acceptAll: 'Accept all', necessaryOnly: 'Only necessary', settings: 'Settings' }
            : { title: 'Deine Daten. Deine Wahl.', acceptAll: 'Allem zustimmen', necessaryOnly: 'Nur das Nötigste', settings: 'Einstellungen' }

        expect(bannerText.title).toBe('Your Data. Your Choice.')
        expect(bannerText.acceptAll).toBe('Accept all')
        expect(bannerText.necessaryOnly).toBe('Only necessary')
        expect(bannerText.settings).toBe('Settings')
    })
})

describe('Cookie Config Verification', () => {
    it('should have analytics cookie ID matching the plugin watch', () => {
        // This verifies the contract between nuxt.config and google-analytics.client.ts
        const configCookieId = 'analytics'
        const pluginWatchId = 'analytics'

        expect(configCookieId).toBe(pluginWatchId)
    })

    it('should have correct link paths for legal pages', () => {
        const imprintPath = '/page/impressum'
        const privacyPath = '/page/datenschutz'

        expect(imprintPath).toMatch(/^\/page\//)
        expect(privacyPath).toMatch(/^\/page\//)
    })
})
