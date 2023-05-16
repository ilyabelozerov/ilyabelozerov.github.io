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
  themeConfig: {
    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/dinghy.fun/' },
      { icon: 'youtube', link: 'https://www.youtube.com' }
    ],
    logo: '/navLogo.png',
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
      { text: 'Useful Links', link: '/links' }
    ],

    footer: {
      message: 'DISCLAIMER: This is NOT an official site of DinghyGo',
      copyright: 'Copyright © 2023-present by BaBuin Studio'
    }
  }
})


