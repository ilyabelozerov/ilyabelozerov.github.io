import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "DinghyGo Fan",
  description: "All around DinghyGo boat",

  themeConfig: {
    sidebar: generateSidebar({
      root: '/docs',
      // rootGroupText: 'Contents',
      useTitleFromFileHeading: false,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: true,
      collapsed: true,
      collapseDepth: 1
    }),

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/dinghy.fun/' },
      { icon: 'youtube', link: 'https://www.youtube.com' }
    ]
  }
})
