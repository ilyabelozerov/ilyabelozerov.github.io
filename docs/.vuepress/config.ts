import { defineUserConfig } from 'vuepress'
import { viteBundler } from 'vuepress'
import { usePagesPlugin } from 'vuepress-plugin-use-pages'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'en-US',
  title: 'DinghyGo Fan',
  description: 'All around DinghyGo boat',
  bundler: viteBundler(),
  plugins: [
    usePagesPlugin({ startsWith: '/planned/', file: 'planned.js' }),
    usePagesPlugin({ startsWith: '/trips/', file: 'trips.js' }),
    usePagesPlugin({ startsWith: '/boat/', file: 'boat.js' }),
    searchPlugin({})
  ],
  theme: defaultTheme({
    contributors: false,
    themePlugins: {
      mediumZoom: false
    },
    sidebar: [
      {
        text: 'Trips',
        children: ['/trips/testTrip.md'],
      },
      {
        text: 'Planned',
        children: ['/planned/lake-garda.md', '/planned/lake-erlichsee.md'],
      },      
      {
        text: 'Boat',
        children: ['/boat/unpacking-375.md'],
      },            
      '/map.md',
      '/links.md'
    ]
  })
})
