var request = require('superagent'),
    chai = require('chai'),
    expect = chai.expect,
    should = chai.should,
    assert = chai.assert;

// var server = require('./index.js');

// before(function done() {

// })

describe("Root Test", function () {
    var response;
    before(function (done) {
        request
            .get('http://localhost:8080/')
            .set({ 'Content-Type': 'application/json' })
            .end(function (err, res) {
                response = res;
                done();
            });
    });

    describe("Checking header /", function () {
        it("response status must 200", function () {
            expect(response.status).to.equal(200);
        });

        it("response type must application/json", function () {
            expect(response.type).to.equal("application/json");
        });
    });
});

describe("Crawl test", function () {
    var response;
    before(function (done) {
        request
            .post('http://localhost:8080/crawl')
            .set({ 'Content-Type': 'application/json' })
            .send({ url: 'http://google.com' })
            .end(function (err, res) {
                response = res;
                done();
            });
    });

    describe("Checking header /", function () {
        it("response status must 200", function () {
            expect(response.status).to.equal(200);
        });

        it("response type must application/json", function () {
            expect(response.type).to.equal("application/json");
        });
    });
});