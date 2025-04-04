const newsRouter = require('./news')
const siteRouter = require('./site')

function routes(app) {

    app.get('/', (req, res) => {
        res.render('home')
    })

    app.use('/news', newsRouter)
    app.use('/', siteRouter)

}

module.exports = routes
