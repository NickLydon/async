import {async} from './async';

async.waterfall([
  function(d, done) {
    setTimeout(function() {
      done('hello');
    }, Math.random() * 100);
  },
  function(d, done) {
    setTimeout(function() {
      done(d + ' nick');
    }, Math.random() * 100);
  },
  function(d, done) {
    setTimeout(function() {
      done(d + ' lydon');
    }, Math.random() * 100);
  }
], function(data) {
  console.log('done %s', data);
});
