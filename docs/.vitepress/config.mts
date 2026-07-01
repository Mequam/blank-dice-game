import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blank Dice TTRPG",
  description: "A simple rules light ttrpg",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
       { text: 'Character Creation', link: '/character-creation' },
       { text: 'Skill Checks', link: '/skill-checks' },
       { text: 'Harm and Death', link:'/character-harm'},
       { text: 'Conflict and Combat', link: '/conflict'},
       { text: 'Vehicle Conflict', link:'/vehicles'}
 ],

    sidebar: [
      {
        text: 'Glossery',
        items: [
          { text: 'Character Creation', link: '/character-creation' },
          { text: 'Skill Checks', link: '/skill-checks' },
          { text: 'Harm and Death', link:'/character-harm'},
          { text: 'Conflict and Combat', link: '/conflict'},
          { text: 'Vehicle Conflict', link: '/vehicles'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
