const apicall = new Promise(function (reject) {
    reject("api error");
});

apicall
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("api call completed");
    });
