const gertUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Rudi");
            reject("Someting wrong...");
        }, 2000)
    })
}

console.log("Start");
gertUser()
.then((userName) => console.log(userName))
.catch((error) => console.log(error));
console.log("Finish");