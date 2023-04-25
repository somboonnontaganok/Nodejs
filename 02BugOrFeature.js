//Back Up Code 
var main = function(r) {
    console.log('Result: ' + r);     
};
var queryDatabase = function(callback)  {
    setTimeout(function() {
        var r = 'Finish QueryDatabase()'
        callback(r)
 },2000)
};

console.log('Wait for set time out');
queryDatabase(main);