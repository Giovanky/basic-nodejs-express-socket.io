const express = require('express'),
router = express.Router()

router.get('/', (req,res,next) => res.render('index', {title: 'Home'}))
router.get('/portfolio', (req,res,next) => res.render('portfolio', {title: 'Portafolio'}))
router.get('/contact', (req,res,next) => res.render('contact', {title: 'Contacto'}))

module.exports = router;