import { defineUserConfig } from 'vuepress'
import { viteBundler } from 'vuepress'
import { usePagesPlugin } from 'vuepress-plugin-use-pages'

export default defineUserConfig({
  lang: 'en-US',
  title: 'DinghyGo Fan',
  description: 'All around DinghyGo boat',
  bundler: viteBundler(),
  plugins: [
    usePagesPlugin({ startsWith: '/planned/', file: 'planned.js' }),
    usePagesPlugin({ startsWith: '/trips/', file: 'trips.js' }),
    usePagesPlugin({ startsWith: '/boat/', file: 'boat.js' })
  ]  
})
