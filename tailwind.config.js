/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        body: ['Jost', 'sans-serif'],
        heading: ['Jost', 'sans-serif'],
      },
      colors: {
        peach: 'hsl(11, 73%, 66%)',
        'peach-light': 'hsl(11, 100%, 80%)',
        black: 'hsl(270, 3%, 11%)',
        'dark-grey': 'hsl(264, 5%, 20%)',
        white: 'hsl(0, 0%, 100%)',
        'light-grey': 'hsl(210, 17%, 95%)',
        'soft-pink': 'hsl(14, 100%, 96%)',
      },
      backgroundImage: {
        /* Home */
        'pattern-hero-home':
          "url('@/assets/home/desktop/bg-pattern-hero-home.svg')",

        /* Design Pages */
        'web-design': "url('@/assets/home/mobile/image-web-design.jpg')",
        'app-design': "url('@/assets/home/mobile/image-app-design.jpg')",
        'graphic-design':
          "url('@/assets/home/mobile/image-graphic-design.jpg')",
        circle: "url('@/assets/shared/desktop/bg-pattern-small-circle.svg')",
        'pattern-design-pages':
          "url('@/assets/home/desktop/bg-pattern-design-pages-intro-mobile.svg')",

        /* CTA */
        'pattern-call-to-action':
          "url('@/assets/shared/desktop/bg-pattern-call-to-action.svg')",

        /* Shared */
        'pattern-two-circles':
          "url('@/assets/shared/desktop/bg-pattern-two-circles.svg')",
        'pattern-three-circles':
          "url('@/assets/shared/desktop/bg-pattern-three-circles.svg')",

        'pattern-design-mobile':
          "url('@/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg')",
        'pattern-design-tablet':
          "url('@/assets/shared/mobile/bg-pattern-design-pages-intro-tablet.svg')",
        'pattern-design-desktop':
          "url('@/assets/shared/mobile/bg-pattern-design-pages-intro-desktop.svg')",

        /* Contact */
        'pattern-hero-contact':
          "url('@/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')",
      },

      backgroundPosition: {
        '625px-right': '625px center 10px',
        '635px-right': '50% 50%',
        '848px-right': '848px center',
        '0px-right': 'right center',
        'right-top': 'right top',
      },
    },
  },
  plugins: [],
};
