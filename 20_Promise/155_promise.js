// let apiCall = new Promise(function(resolve,reject){
//            resolve({status : 200, body : "User Data"});
// });


// apiCall.then(function(response){
//     console.log(response); 
// });


// let testRun = new Promise(function (resolve, reject) {
//     reject("Assertion Failed");
// });

// testRun.then(function (data) { // Resolve
//     console.log(data);
// }).catch(function (error) { // Reject
//     console.log(error);
// });


// let apicall2 = new Promise(function(resolve,reject){
//     resolve({status:200,body:"user data"});
// })

// apicall2.then(function(data){
//     console.log(data);
// })

let testrun = new Promise(function(resolve,reject){
    reject("Assertion Failed");
})

testrun.catch(function(error){
    console.log(error);
})