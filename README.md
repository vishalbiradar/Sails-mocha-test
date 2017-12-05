# Sails-mocha-test
This repo contains code for testing sails app using mocha.

Sails version: v0.12

## Testing
For unit testing of sails app, we will mocha testing tool


step 1) install mocha and other required modules for testing
```
    $ sudo npm install --save-dev mocha chai istanbul supertest nyc
```
step 2) add testing script in package.json file

```
...

    "scripts": {
        "test": "gulp && node ./node_modules/mocha/bin/mocha test/bootstrap.test.js test/api/**/*.test.js"
        "test-with-coverage": "gulp && nyc ./node_modules/mocha/bin/mocha test/bootstrap.test.js test/api/**/*.test.js"
      }
 ...
```
Step 3) create test folder in main app directory

step 4) create test/mocha.opts file in test folder (for defining mocha options)

```
    --require chai
    --reporter spec
    --recursive
    --ui bdd
    --globals sails
    --timeout 5s
    --slow 2000
```

step 5) create test/bootstrap.test.js file under test folder

```
var sails = require('sails');
var _ = require('lodash');
require('ts-node/register');

global.chai = require('chai');
global.should = chai.should();

before(function (done) {

    this.timeout(5000);

    sails.lift({
        log: {
            level: 'silent'
        },
        hooks: {
            grunt: false
        },
        models: {
            connection: 'unitTestConnection',
            migrate: 'drop'
        },
        connections: {
            unitTestConnection: {
                adapter: 'sails-mongo'
            }
        }
    }, function (err, server) {
        if (err) returndone(err);
        done(err, sails);
    });
});

after(function (done) {
    if (sails && _.isFunction(sails.lower)) {
        sails.lower(done);
    }
});

```

step 6) start writing test cases
    Its good practice to create separate test controllers for each api controller
    for example if api/controllers/AuthController.js
    then for testing we must create test/api/controllers/AuthController.test.js
    So in test/api/controllers/AuthController.test.js we must write this controller specific test cases
    as written below:
```
    var supertest = require('supertest');
    var assert = require('assert');

    require('../../bootstrap.test');

    describe('The AuthController', function () {

        var token = 0;

        /* test for login */
        it('should signup', function (done) {
            var agent = supertest.agent(sails.hooks.http.app);
            agent
                .post('/signup')
                .set('Accept', 'application/json')
                .send({"userName": "user1", "password": "password1"})
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, result) {
                    if (err) {
                        done(err);
                    } else {
                        result.body.should.be.an('object');
                        assert.equal(result.body.user.userName,'user1');
                        token = result.body.token;
                        done();
                    }
                });
        });

        /* test for getting all groups */
        it('should get groups', function (done) {
            var agent = supertest.agent(sails.hooks.http.app);
            agent
                .get('/groups/1')
                .set('Accept', 'application/json')
                .set('api_key', token)
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, result) {
                    if (err) {
                        done(err);
                    } else {
                        result.body.should.be.an('array');
                        result.body.should.have.length(1);
                        done();
                    }
                });
        });

    });
```
step 7) for checking code coverage
```
        $ npm run test-with-coverage
```
