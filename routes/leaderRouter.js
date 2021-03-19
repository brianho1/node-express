const express = require('express');
const bodyParser = require('body-parser');


const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + 'with details ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403; 
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('deleting all the leaders!');
});


leaderRouter.route('/:leaderID')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req, res, next) => {
    res.end('will send details of the leaders: ' + req.params.leaderID + ' to you!');
})

.post((req, res, next) => {
    res.statusCode = 403; 
    res.end('Post operation not supported on /leaders/' + req.params.leaderID);
})

.put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderID + '\n');
    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('deleting leader: ' + req.params.leaderID);
});


module.exports = leaderRouter;