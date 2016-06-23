/**
 * Created by Jamey McElveen on 6/23/16.
 */

var express = require('express')
    , app     = express()
    , PouchDB = require('pouchdb');

app.use('/db', require('express-pouchdb')(PouchDB));

var master = new PouchDB('master');

// myPouch is now modifiable in your own code, and it's also
// available via HTTP at /db/master

app.use('/', express.static(__dirname + '/public'));

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});