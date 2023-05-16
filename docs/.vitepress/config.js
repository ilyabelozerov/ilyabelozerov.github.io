import { defineConfig } from 'vitepress'
import { getArticles } from '../getPosts.js'

const boatPosts = await getArticles('/boat/', true)
const plannedPosts = await getArticles('/planned/', true)
const tripsPosts = await getArticles('/trips/', true)

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "DinghyGo Fan",
  description: "All around DinghyGo boat",

  themeConfig: {
    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/dinghy.fun/' },
      { icon: 'youtube', link: 'https://www.youtube.com' }
    ],

    sidebar: [
      { text: 'Trips', 
        collapsed: true, 
        items: tripsPosts.map((item)=>{return {text: item.title, link: item.link}}) 
      },
      { text: 'Planned', 
        collapsed: true, 
        items: plannedPosts.map((item)=>{return {text: item.title, link: item.link}}) 
      },
      { text: 'Boat', 
        collapsed: true, 
        items: boatPosts.map((item)=>{return {text: item.title, link: item.link}}) 
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


