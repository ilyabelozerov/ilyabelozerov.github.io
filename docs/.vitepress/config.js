import { defineConfig } from 'vitepress'
import { getArticles, saveArticles } from '../getPosts.js'

const posts = {
  boat: await getArticles('/boat/', true),
  planned: await getArticles('/planned/', true),
  trips: await getArticles('/trips/', true)
}

await saveArticles(posts)

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "DinghyGo Fan",
  description: "All around DinghyGo boat",
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/navLogo.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/navLogo.png' }]
  ],
  themeConfig: {
    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/dinghy.fun/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@dinghy-fun' }
    ],
    logo: '/navLogo.png',
    search: {
      provider: 'local'
    },
    sidebar: [
      { text: 'Trips', 
        collapsed: true, 
        items: posts.trips.map((item)=>{return {text: item.title, link: item.link}}) 
      },
      { text: 'Planned', 
        collapsed: true, 
        items: posts.planned.map((item)=>{return {text: item.title, link: item.link}}) 
      },
      { text: 'Boat', 
        collapsed: true, 
        items: posts.boat.map((item)=>{return {text: item.title, link: item.link}}) 
      },
      { text: 'Map', link: '/map' },
      { text: 'Current Targets', link: '/targets/current' },
      { text: 'Targets 2023', link: '/targets/2023' }
    ],

    footer: {
      message: 'DISCLAIMER: This is NOT an official site of DinghyGo',
      copyright: 'Copyright © 2023-present by BaBuin Studio'
    }
  }
})


