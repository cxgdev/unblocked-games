const pages = require('html-pages')

const pagesServer = pages(__dirname, {
    port: 1904,
    'directory-index': '',
    'no-clipboard': true,
    ignore: ['.git', 'node_modules']
})