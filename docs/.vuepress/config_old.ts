import { defineUserConfig, SidebarGroup } from 'vuepress'
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
        children: [
          '/planned/bodensee.md',
          '/planned/calanques.md',
          '/planned/croatia.md',
          '/planned/flensburg.md',
          '/planned/gibraltar.md',
          '/planned/lake-bled.md',
          '/planned/lake-brienz.md',
          '/planned/lake-chiemsee.md',
          '/planned/lake-como.md',
          '/planned/lake-garda.md', 
          '/planned/lake-erlichsee.md',
          '/planned/lake-geneve.md',
          '/planned/lake-tavatui.md',
          '/planned/lake-trauensee.md',
          '/planned/portovenere.md',
          '/planned/santorini.md',
          '/planned/sardinia.md'
        ],
      },   
      {
        text: 'Boat',
        children: [
          '/boat/unpacking-375.md',
          '/boat/mainsheet-cleat.md',
          '/boat/jibcleat.md',
          '/boat/tiller-extension.md',
          '/boat/ladder.md',
          '/boat/e-motor.md',
          '/boat/bimini.md',
          '/boat/cup-holders.md',
          '/boat/wheels.md'
        ],
      },            
      '/map.md',
      '/links.md'
    ]
  })
})

