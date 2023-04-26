import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DinghyGo Fan Blog",
  description: "All around of DinghyGo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
    siteTitle: 'My Title',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/user/dinghygo' },
      { icon: 'instagram', link: 'https://www.instagram.com' }
    ],

    footer: {
      message: 'DISCLAIMER: It\'s not the official site of DinghyGo.',
      copyright: 'Copyright © 2023-present by Babuin Studio'
    },
    
    search: {
      provider: 'local'
    }
  },

  lastUpdated: true
})
