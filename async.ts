interface IAsyncFunc {
  (cb: () => void): void;
}
interface IAsyncChainableFunc {
  (data:any, done: (d:any) => any): void;
}
interface IAsyncCallbackFunc {
  (done: (d:any) => void): void;
}

var async = {
  series: function(arr: IAsyncFunc[], cb: () => void) {

    function trigger(i) {
      if(i === arr.length) {
        cb();
      } else {
        arr[i](function() {
          trigger(i + 1);
        });
      }
    }

    trigger(0);
  },

  waterfall: function(arr: IAsyncChainableFunc[], cb: (data: any) => void) {

    function trigger(i, data?) {
      if(i === arr.length) {
        cb(data);
      } else {
        arr[i](data, function(d) {
          trigger(i + 1, d);
        });
      }
    }

    trigger(0);
  },

  parallel: function(arr: IAsyncCallbackFunc[], cb: (arr: any[]) => void) {
    var counter = arr.length;
    var result = [];
    arr.forEach((v,i) => {
      v(function(d) {
        result[i] = d;
        counter--;
        if (counter === 0) cb(result);
      });
    });
  }
};

export {async};
