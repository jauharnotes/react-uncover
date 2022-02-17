const gertUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Rudi");
            reject("Someting wrong...");
        }, 2000)
    })
}

const tryGetName = async () => {
    try {
        let userName = await gertUser();
        console.log(userName);
    }
    catch (error) {
        console.log(error);
    }
};

console.log("Start");
tryGetName();
console.log("Finish");