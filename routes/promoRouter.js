const express = require('express');
const bodyParser = require('body-parser');


const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + 'with details ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403; 
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('deleting all the promotions!');
});


promoRouter.route('/:promoID')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req, res, next) => {
    res.end('will send details of the promotions: ' + req.params.promoID + ' to you!');
})

.post((req, res, next) => {
    res.statusCode = 403; 
    res.end('Post operation not supported on /promotions/' + req.params.promoID);
})

.put((req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promoID + '\n');
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('deleting promotion: ' + req.params.promoID);
});


module.exports = promoRouter;