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

    //my Promise

    const itisme = false;

    const getnewcar = new Promise ((resolve, reject)=>{
        if(itisme){
            const car = {
                brand: "ferarri",
                color: "pink"
            };
            resolve(car);
                }else{
                    const reason = new Error("this is not me");
                    reject(reason);
                }
    });

    const showOff =function(car){
        const message = "Hey friend, I have a new" + car.color + " " + "car";
        return Promise.resolve(message);
    };

    const askme = function() {
        getnewcar
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)
        )

        .catch(error => console.log(error.message)
        );
    };
    askme();

