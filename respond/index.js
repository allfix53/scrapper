const db = require('./../db');

module.exports = {
    'new': function (req, res, next) {
        db.data.create(req.body)
            .then(function (created) {
                return res.send(created);
            })
            .catch(function (err) {
                return res.send(err);
            })
    },
    'latest': function (req, res, next) {
        db.data.find({})
            .sort({ created_at: -1 })
            .then(function(sortedData){
                return res.send(sortedData);
            })
            .catch(function(err){
                return res.send(err);
            })
    },
    'index': function (req, res, next) {
        return res.send('server up');
    },
    'crawl': function (req, res, next) {
        // console.log(req)
        let isString = (typeof req.body.url == 'string') ? true : false;
        if (!isString) return res.send('url (String) is required')

        if (/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(req.body.url)) {
            return res.send('crawling ' + req.body.url);
        }
        return res.send({ error: 'url is not valid' });
    }
}

function ValidURL(str) {
    var pattern = new RegExp('^(https?:\/\/)?' + // protocol
        '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|' + // domain name
        '((\d{1,3}\.){3}\d{1,3}))' + // OR ip (v4) address
        '(\:\d+)?(\/[-a-z\d%_.~+]*)*' + // port and path
        '(\?[;&a-z\d%_.~+=-]*)?' + // query string
        '(\#[-a-z\d_]*)?$', 'i'); // fragment locater
    if (!pattern.test(str)) {
        return false;
    } else {
        return true;
    }
}