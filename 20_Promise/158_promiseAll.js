let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.reject("Cache OK");


Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
})
 .then(function (r) { console.log(r); })
 .catch(function (err) { console.log("Failed:", err); });

//Promise.all([
//     Promise.resolve("OK"),
//     Promise.reject("DB DOWN"),
//     Promise.resolve("OK")
// ])
//     .then(function (r) { console.log(r); })
//     .catch(function (err) { console.log("Failed:", err); });

// let auth = promise.reject("Auth Failed");
// let db = promise.resolve("DB OK");
// let cache = promise.resolve("Cache OK");

// promise.all([auth, db, cache])
//     .then(function (results) {
//         console.log("All checks:", results);
//     })
//     .catch(function (err) {
//         console.log("Failed:", err);
//     })
//     .finally(function () {
//         console.log("All checks completed");
//     })