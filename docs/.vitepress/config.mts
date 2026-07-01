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
       { text: 'Focus and Turn Order', link:'/turns'}
 ],

    sidebar: [
      {
        text: 'Glossary',
        items: [
          { text: 'Character Creation', link: '/character-creation' },
          { text: 'Skill Checks', link: '/skill-checks' },
          { text: 'Focus and Turn Order', link:'/turns'},
          { text: 'Harm and Death', link:'/character-harm'},
          { text: 'Conflict and Combat', link: '/conflict'},
          { text: 'Skill Sequences',link : '/skill-sequence'},
          { text: 'Infiltration', link: '/infiltration'},
          { text: 'Vehicle Encounters', link:'/vehicles'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
