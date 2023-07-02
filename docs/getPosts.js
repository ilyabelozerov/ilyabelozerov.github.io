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
        link: `${path}${article.replace(/\.[^/.]+$/, "")}`,
        lastModifiedAt: stats.mtime,
        createdAt: file.data.postDate ? new Date(file.data.postDate) : stats.ctime
      }
    })
  )  

  console.log(preparedArticles)
  if (doSort){
    return preparedArticles.sort((a,b)=>{return a.createdAt - b.createdAt})
  } else {
    return preparedArticles
  }
}

export async function saveArticles(data){
  await fs.writeFile(`${root}/posts.json`, JSON.stringify(data), 'utf-8');
}