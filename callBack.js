var myCallback = function(data) {
    console.log('got data: ' + data);
};

// var usingItNow = function(callback) {
//     callback('get it?')
// }
       
var usingItNow = function(callback) {
    setTimeout(function () {
        callback('get it?')
}, 3000) };

console.log('Waiting for callback funciton');
usingItNow(myCallback);
