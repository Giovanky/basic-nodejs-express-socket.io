const express = require('express'),
createError = require('http-errors'),
logger = require('morgan'),
cookieParser = require('cookie-parser'),
sassMiddleware = require('node-sass-middleware'),
browserifyExpress = require('babelify-express'),
favicon = require('serve-favicon'),
session = require('express-session'),
hbs = require('hbs'),
hbsHelpers = require('./views/helpers'),
routes = require('./routes'),
app = express()

hbs.registerPartials(`${__dirname}/views/partials`)

app
 .set('views', `${__dirname}/views`)
 .set('view engine', 'hbs')
 .set('port', (process.env.PORT || 3000))
 .use(favicon(`${__dirname}/public/img/favicon.png`))
 .use(logger('dev'))
 .use(express.json())
 .use(express.urlencoded({extended: false}))
 .use(cookieParser())
 .use(session({
     secret: 'secret',
     saveUninitialized: true,
     resave: true
 }))
 .use(sassMiddleware({
     src: `${__dirname}/public`,
     dest: `${__dirname}/public`,
     indentedSyntax: false,
     sourceMap: true,
     outputStyle: 'compressed',
 }))
 .use(browserifyExpress({
     entry: `${__dirname}/public/js/index.js`,
     watch: `${__dirname}/public/js/`,
     mount: '/js/script.js',
     verbose: true,
     minify: true,
     bundle_opts: {debug: true}
 })) 
 .use(express.static(`${__dirname}/public`))
 .use(routes)
 .use((req, res, next) => next(createError(404)))
 .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {err})
 })

module.exports = app