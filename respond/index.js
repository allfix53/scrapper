module.exports = {
    'index': function (req, res, next) {
        return res.send('server up');
    },
    'crawl': function (req, res, next) {
        console.log(req)
        let isString = (typeof req.body.url == 'string') ? true : false;
        if (!isString) return res.send('url (String) is required')

        if (ValidURL(req.body.url)) {
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