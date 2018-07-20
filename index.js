function logName(name) {
    console.log(`My Name is ${name}`);
}

function insertCustomName(callback) {
    var name = "welly";
    callback(name);
}

insertCustomName(logName);

//PROMISE

var newPromise = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});

newPromise
    .then(sucessValue => {

    })
    .catch(error => {

    });

console.log(newPromise);

const condition = false;
let myFirstPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("fullfilled!");
    } else {
        const reason = new Error("rejected!");
        reject(reason);
    }
});
myFirstPromise
    .then(successMessage => {
        console.log(".then >>> " + successMessage);

    })
    .catch(error => console.log(".catch >>>" + error.message));

    