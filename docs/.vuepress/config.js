const { backToTopPlugin } = require('@vuepress/plugin-back-to-top');
const { activeHeaderLinksPlugin } = require('@vuepress/plugin-active-header-links');
const { defaultTheme } = require('@vuepress/theme-default');
module.exports = {
    lang: 'en-US',
    title: 'Right to Repair',
    description: 'Own what you buy',
    plugins: [
        backToTopPlugin(),
        activeHeaderLinksPlugin({
            // options
        })
    ],
    theme: defaultTheme({
        navbar: [
          // https://v2.vuepress.vuejs.org/reference/default-theme/config.html#navbar
            {
                text: 'Thesis',
                link: '/',
            },
            {
                text: 'Outline',
                link: '/outline/',
            },
            {
                text: 'Sources',
                link: '/sources/'
            }
        ],
    }),
}