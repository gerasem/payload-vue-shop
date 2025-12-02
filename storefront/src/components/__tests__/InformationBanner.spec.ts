import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import InformationBanner from '@/components/information-banner/InformationBanner.vue'
import { useContentStore } from '@/stores/ContentStore'

describe('InformationBanner.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders nothing when informationBanner is empty', () => {
    const store = useContentStore()
    store.informationBanner = []

    const wrapper = mount(InformationBanner)
    expect(wrapper.find('.information-banner__list-item').exists()).toBe(false)
  })

  it('renders information banner items', () => {
    const store = useContentStore()
    store.informationBanner = [
      {
        id: '1',
        text: 'Free shipping on orders over $50',
        icon: null,
      },
      {
        id: '2',
        text: 'New arrivals are here!',
        icon: null,
      },
    ]

    const wrapper = mount(InformationBanner)
    const items = wrapper.findAll('.information-banner__list-item')
    expect(items).toHaveLength(2)
    expect(items[0].text()).toContain('Free shipping on orders over $50')
    expect(items[1].text()).toContain('New arrivals are here!')
  })

  it('renders icons when provided', () => {
    const store = useContentStore()
    const svgContent = '<svg><path d="M10 10" /></svg>'
    store.informationBanner = [
      {
        id: '1',
        text: 'With Icon',
        icon: {
          url: 'icon.svg',
          alt: 'Icon',
          svgContent: svgContent,
        },
      },
    ]

    const wrapper = mount(InformationBanner)
    const item = wrapper.find('.information-banner__list-item')
    expect(item.html()).toContain(svgContent)
    expect(item.text()).toContain('With Icon')
  })
})
