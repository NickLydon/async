import {async} from './async';

async.parallel([
  function(done) {
    setTimeout(function() {
      done('hello');
    }, Math.random() * 100);
  },
  function(done) {
    setTimeout(function() {
      done('nick');
    }, Math.random() * 100);
  },
  function(done) {
    setTimeout(function() {
      done('lydon');
    }, Math.random() * 100);
  }
], function(result) {
  console.log('done with:', result.join(' '));
});
