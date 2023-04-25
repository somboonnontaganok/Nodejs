<<<<<<< HEAD
console.log('Node.js is running...')


//Is it a feature ot bug
// function queryDatabase()  {
//     setTimeout(function() {
//         var r = 'Finish QueryDatabase()'
//         callback(r)
//  },2000)
// }

// function main() {
//         // console.log('Result: ' + queryDatabase(r));
//         queryDatabase(function (r) {
//             console.log('Result is: ' + r)
//         })    
// }






//Back Up Code 

function queryDatabase(callback)  {
    setTimeout(function() {
        var r = 'Finish QueryDatabase()'
        callback(r)
 },2000)
}

function main() {
    queryDatabase(function(r){
        console.log('Result: ' + r);
    })
     
}
=======
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
>>>>>>> 9aefacf32291ff167d05cf2e36d8fe2719082262
