const routes = require('next-routes')


module.exports = routes()
    .add('index', '/')
    .add('menu', '/restorant/menu/:slug')
    .add('search', '/restorant/search/:slug')               