const ogprefix = 'og: http://ogp.me/ns#'
const title = 'Awesome Browser APIs'
const description = '🦄 Cool && Fun Browser APIs you did not know!'
// const color = '#f42525'

module.exports = {
  title: 'Awesome Browser APIs',
  description: 'Cool && Fun Browser APIs',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'About', link: '/about/'},
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     {text: 'Chinese', link: '/language/chinese/'},
      //     {text: 'Japanese', link: '/language/japanese/'}
      //   ]
      // }
    ],
    // sidebar: [
    //   ['/api/audio/', 'AUDIO']
    //   ['/catering/appetizers/', 'APPETIZERS'],
    // ],
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'baumannzone/awesome-browser-apis',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    // docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    docsDir: 'src',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    [
      '@vuepress/google-analytics',
      {
        'ga': ''
        // UA-00000000-0
      }
    ],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        // type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ],
    [
      'robots',
      {
        /**
         * @host
         * Mandatory, You have to provide the host URL
         */
        host: 'https://awesome-browser-apis.netlify.app/',
        /**
         * @disallowAll
         * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
         */
        disallowAll: false,
        /**
         * @allowAll
         * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
         */
        allowAll: true,
        /**
         * @sitemap
         * Optional, by default: sitemap.xml
         */
        sitemap: '/sitemap.xml',
        /**
         * @policies
         * Optional, by default: null
         */
        policies: [
          {
            userAgent: '*',
            disallow: [],
            allow: ['/']
          }
        ]
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://awesome-browser-apis.netlify.app/'
      },
    ]
  ],
  head: [
    ['link', {rel: 'icon', href: '/img/favicon.png'}],
    // ['meta', {name: 'theme-color', content: color}],
    ['meta', {prefix: ogprefix, property: 'og:locale', content: 'en_EN'}],
    ['meta', {prefix: ogprefix, property: 'og:title', content: title}],
    ['meta', {prefix: ogprefix, property: 'twitter:title', content: title}],
    ['meta', {prefix: ogprefix, property: 'og:type', content: 'website'}],
    ['meta', {prefix: ogprefix, property: 'og:url', content: 'https://awesome-browser-apis.netlify.app'}],
    ['meta', {prefix: ogprefix, property: 'og:description', content: description}],
    ['meta', {
      prefix: ogprefix,
      property: 'og:image',
      content: 'https://awesome-browser-apis.netlify.app/img/logo.png'
    }],
    [
      'link', {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
      integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
      crossorigin: 'anonymous'
    }
    ]

  ],
}