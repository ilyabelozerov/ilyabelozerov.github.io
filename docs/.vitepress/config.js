import { defineConfig } from 'vitepress'
import fs from 'node:fs/promises'
import matter from 'gray-matter'

const root = './docs'
const boatPosts = (await getArticles(root, '/boat/')).sort((a,b)=>{return a.createdAt - b.createdAt})
const plannedPosts = (await getArticles(root, '/planned/')).sort((a,b)=>{return a.createdAt - b.createdAt})
const tripsPosts = (await getArticles(root, '/trips/')).sort((a,b)=>{return a.createdAt - b.createdAt})
// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "DinghyGo Fan",
  description: "All around DinghyGo boat",
  customData: {
    posts: {
      planned: plannedPosts,
      trips: tripsPosts,
      boat: boatPosts
    }
  },

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
      { text: 'Useful Links', link: '/links' }
    ],

    footer: {
      message: 'DISCLAIMER: This is NOT an official site of DinghyGo',
      copyright: 'Copyright © 2023-present by BaBuin Studio'
    }
  }
})


async function getArticles(root, path){
  const articles = await fs.readdir(root+path)

  return await Promise.all(
    articles.map(async (article) => {
  
      const file = matter.read(`${root}${path}${article}`, {
        excerpt: false
      })
  
      const stats = await fs.stat(file.path)

      return {
        ...file.data,
        link: `${path}${article}`,
        lastModifiedAt: stats.mtime,
        createdAt: stats.ctime
      }
    })
  )  
}