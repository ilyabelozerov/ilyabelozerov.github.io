import { defineUserConfig } from 'vuepress'
import { viteBundler } from 'vuepress'
import { usePagesPlugin } from 'vuepress-plugin-use-pages'
import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'


export default defineUserConfig({
  lang: 'en-US',
  title: 'DinghyGo Fan',
  description: 'All around DinghyGo boat',
  bundler: viteBundler(),
  plugins: [
    usePagesPlugin({ startsWith: '/planned/', file: 'planned.js' }),
    usePagesPlugin({ startsWith: '/trips/', file: 'trips.js' }),
    usePagesPlugin({ startsWith: '/boat/', file: 'boat.js' }),
    docsearchPlugin({})
  ],
  theme: defaultTheme({
    contributors: false,
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
    themePlugins: {
      mediumZoom: false
    }
  })  
})
