import fs from 'node:fs/promises'
import matter from 'gray-matter'

const root = './docs'
export async function getArticles(path, doSort = false){
  const articles = await fs.readdir(root+path)

  const preparedArticles = await Promise.all(
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

  if (doSort){
    return preparedArticles.sort((a,b)=>{return a.createdAt - b.createdAt})
  } else {
    return preparedArticles
  }
}