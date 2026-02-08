import { colors } from './app/tokens/colors'

export default {
  content: [
    './app/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.{js,vue,ts}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
}
