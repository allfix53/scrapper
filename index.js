const restify = require('restify'),
    respond = require('./respond/');

const server = restify.createServer();
server.use(restify.bodyParser());

server.get('/', respond.index);
server.post('/crawl', respond.crawl);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});