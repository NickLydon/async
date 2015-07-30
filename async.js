var async = {
    series: function (arr, cb) {
        function trigger(i) {
            if (i === arr.length) {
                cb();
            }
            else {
                arr[i](function () {
                    trigger(i + 1);
                });
            }
        }
        trigger(0);
    },
    waterfall: function (arr, cb) {
        function trigger(i, data) {
            if (i === arr.length) {
                cb(data);
            }
            else {
                arr[i](data, function (d) {
                    trigger(i + 1, d);
                });
            }
        }
        trigger(0);
    },
    parallel: function (arr, cb) {
        var counter = arr.length;
        var result = [];
        arr.forEach(function (v, i) {
            v(function (d) {
                result[i] = d;
                counter--;
                if (counter === 0)
                    cb(result);
            });
        });
    }
};
exports.async = async;
