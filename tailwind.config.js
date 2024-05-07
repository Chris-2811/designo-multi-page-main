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

        'web-design-tablet': "url('@/assets/home/tablet/image-web-design.jpg')",
        'app-design-tablet': "url('@/assets/home/tablet/image-app-design.jpg')",
        'graphic-design-tablet':
          "url('@/assets/home/tablet/image-graphic-design.jpg')",

        'web-design-desktop':
          "url('@/assets/home/desktop/image-web-design-large.jpg')",
        'app-design-desktop':
          "url('@/assets/home/desktop/image-app-design.jpg')",
        'graphic-design-desktop':
          "url('@/assets/home/desktop/image-graphic-design.jpg')",

        'intro-web':
          "url('@/assets/web-design/desktop/bg-pattern-intro-web.svg')",
        'intro-app':
          "url('@/assets/app-design/desktop/bg-pattern-intro-app.svg')",
        'intro-graphic':
          "url('@/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg')",

        'intro-tablet':
          "url('@/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg')",
        'intro-mobile':
          "url('@/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg')",

        /* CTA */
        'pattern-call-to-action':
          "url('@/assets/shared/desktop/bg-pattern-call-to-action.svg')",

        /* Shared */
        'small-circle':
          "url('@/assets/shared/desktop/bg-pattern-small-circle.svg')",
        'pattern-two-circles':
          "url('@/assets/shared/desktop/bg-pattern-two-circles.svg')",
        'pattern-three-circles':
          "url('@/assets/shared/desktop/bg-pattern-three-circles.svg')",

        'pattern-design-mobile':
          "url('@/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg')",
        'pattern-design-tablet':
          "url('@/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg')",
        /* 'pattern-design-desktop':
          "url('@/assets/shared/desktop/bg-pattern-design-pages-intro-desktop.svg')", */

        /* About */

        'about-mobile':
          "url('@/assets/about/mobile/bg-pattern-hero-about-mobile.svg')",
        'about-desktop':
          "url('@/assets/about/desktop/bg-pattern-hero-about-desktop.svg')",

        /* Contact */
        'hero-contact-mobile':
          "url('@/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')",
        'hero-contact-desktop':
          "url('@/assets/contact/desktop/bg-pattern-hero-desktop.svg')",

        /* Linear gradients */
        'gradient-linear':
          'linear-gradient(90deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)',
      },

      backgroundPosition: {
        'right-10': '-25px',
        'left-10': '-80px',
        'right-20': '-20px',
        'right-80': '-80px',
        'center-right-25': 'calc(50% + 25px) 50%',
        'center-right-70': 'calc(50% + 70px) 50%',
        'right-100': 'calc(50% + 200px) 80%',
        'center-left-down': 'calc(50% - 255px) 25%',
        'left-100': ' top left -106px',
      },
    },
  },
  plugins: [],
};
