var async_1 = require('./async');
async_1.async.series([
    function (done) {
        console.log('1');
        setTimeout(done, Math.random() * 100);
    },
    function (done) {
        console.log('2');
        setTimeout(done, Math.random() * 100);
    },
    function (done) {
        console.log('3');
        setTimeout(done, Math.random() * 100);
    }
], function () {
    console.log('done');
});
