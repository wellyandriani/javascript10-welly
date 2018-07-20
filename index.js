// function logName(name) {
//     console.log(`My Name is ${name}`);
// }

// function insertCustomName(callback) {
//     var name = "welly";
//     callback(name);
// }

// insertCustomName(logName);
// function myname(){
//     document.getElementById("output").innerHTML = "My Name is welly";
// }

// //PROMISE

// var newPromise = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, 'foo');
// });

// newPromise
//     .then(sucessValue => {

//     })
//     .catch(error => {

//     });

// console.log(newPromise);

// const condition = false;
// let myFirstPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("fullfilled!");
//     } else {
//         const reason = new Error("rejected!");
//         reject(reason);
//     }
// });
// myFirstPromise
//     .then(successMessage => {
//         console.log(".then >>> " + successMessage);

//     })
//     .catch(error => console.log(".catch >>>" + error.message));

//     //my Promise

// const itisme = false;

// const getnewcar = new Promise ((resolve, reject)=>{
//     if(itisme){
//         const car = {
//             brand: "ferarri",
//             color: "pink"
//         };
//         resolve(car);
//             }else{
//                 const reason = new Error("this is not me");
//                 reject(reason);
//             }
// });

// const showOff =function(car){
//     const message = "Hey friend, I have a new" + car.color + " " + "car";
//     return Promise.resolve(message);
// };

// const askme = function() {
//     getnewcar
//     .then(showOff)
//     .then(fulfilled => console.log(fulfilled)
//     )

//     .catch(error => console.log(error.message)
//     );
// };
// askme();


// var askmom = function () {
//     console.log('before asking MOM');
//     getnewphone
//         .then(showOff)

//         .then(function (fulfilled) {
//             console.log(fulfilled);

//         })
//         .catch(function (error) {
//             console.log(error.message);

//         });
//     console.log('after asking mom');

// }


//     async function myfunction(){
//         return "theValue";
//     }

//     function myfunction(){
//         return Promise.resolve("theValue");
//     }
// myfunction().then(returnedval => console.log(returnedval));


// async function myamya(){
//     throw "error";
// }

// function myamya(){
//     return Promise.reject("error");
// }

// myamya().catch(err => console.log(err));


// async function mydate() {
//     try {
//         let datedetail = await date;
//         let message = await ordergojek(datedetail);
//         console.log(message);
//     } catch (error) {
//         console.log(error.message);
//     }
// }




//level0
// const numberOrNotAsync = (input) => {
//     if (typeof input === "number"){
//         return Promise.resolve("input is a number")
//     } else {
//         return Promise.reject(Error("input is not a number"))
//     }
// }

// numberOrNotAsync(2).then(response => console.log(response)).catch(error => console.log(error))
// numberOrNotAsync(555).then(response => console.log(response)).catch(error => console.log(error))
// numberOrNotAsync(true).then(response => console.log(response)).catch(error => console.log(error))

//level 1
// const numberOrNot =(input)=>{
//     return new Promise ((resolve, reject)=>{
//         if(typeof input === "number"){
//             resolve("input is a number")
//         }
//         else{
//             reject (Error("input is not number"))
//         }
//     })
// }
// numberOrNot(2).then(response => console.log(response)).catch(error => console.log(error))
// numberOrNot(555).then(response => console.log(response)).catch(error => console.log(error))
// numberOrNot(true).then(response => console.log(response)).catch(error => console.log(error))


//level 2

// const checkVariableType = (input) => {
//     switch (typeof input){
//         case "string" : return Promise.resolve("Input is a string")
//         break
//         case "number" : return Promise.resolve("Input is a Number")
//         break
//         case "boolean" : return Promise.resolve("Input is a Boolean")
//         break
//         case "undefined" : return Promise.reject(Error("Please input a variable"))
       
//     }
// }

// checkVariableType("abcd ").then(response => console.log(response)).catch(error => console.log(error))
// checkVariableType(555).then(response => console.log(response)).catch(error => console.log(error))
// checkVariableType(false).then(response => console.log(response)).catch(error => console.log(error))
// checkVariableType().then(response => console.log(response)).catch(error => console.log(error))


//level 3
const numberValidation = (input) => {
    switch (typeof input){
        case "number" : return Promise.resolve (input)
        break
        case "string" : return Promise.reject(Error("Input is not a number"))
        break
        case "boolean" : return Promise.reject(Error("Input is not a number"))
    }
}

const multipleByTwo = (result) => {
   return Promise.resolve (result * 2)
}
const multipleByThree =  (result) => {
    return Promise.resolve (result * 3)
 }

// console.log("before promise");
// numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))
// console.log("after promise");

// Level 4
// let finalresult = numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))

// async function asyncfinal(){
//     await console.log ("before promise");
//     await finalresult
//     await console.log("after promise");
// }
// asyncfinal()

//level 5
let result = numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => {return res}).catch(err => {return err})


async function asyncresult(){
    let result = await numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => {return res}).catch(err => {return err})
    console.log(result);
}
asyncresult()