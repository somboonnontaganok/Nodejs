//main = callback function
var main = function(arg) {
    console.log('Result: ' + arg);     
};
var queryDatabase = function(callback)  {
    setTimeout(function() {
        var result = 'Finish QueryDatabase()'
        callback(result)
 },2000)
};

console.log('Wait for set time out');
queryDatabase(main);