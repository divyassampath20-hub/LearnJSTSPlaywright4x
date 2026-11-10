function test(item, callMewhenDone) {
    console.log("Hi start the Testcase", item);
    callMewhenDone();
}

test("Verify the login page is working", async (page) =>{
    console.log("Testcase is done, now I will call the callback function");
});