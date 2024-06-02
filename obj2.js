// function generation(obj,obj2) {
//     let result = "";
//     let male = {
//         "-3": "great grandfather",
//         "-2": "grandfather",
//         "-1": "father",
//         "0": "son",
//         "1": "son",
//         "2": "grandson",
//         "3": "great grandson",
//     }
//     let female = {
//         "-3": "great grandmother",
//         "-2": "grandmother",
//         "-1": "mother",
//         "0": "daughter",
//         "1": "daughter",
//         "2": "granddaughter",
//         "3": "great granddaughter",
//     }
//     if (obj2 == "m") {
//         result = male[obj];
//     } else {
//         result = female[obj];
//     }
//     return result;
// }
// console.log(generation(2, "f"));









// function toArray(obj) {
//     let a = []
//     for(let i in obj){
//         a.push([i,obj[i]])
//     }
//     return a;
// }
// console.log(toArray({ a: 1, b: 2 }));








// function keysAndValues(obj) {
//     let arr = [];
//     let arr2 = [];
//     let keys = Object.keys(obj);
//     for (let i = 0; i < keys.length; i++) {
//         arr.push(keys[i]);
//         arr2.push(obj[keys[i]]);
//     }
//     return [arr , arr2];
// }
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));








// function getBudgets(obj1) {
//     let arr = [];
//     for (let key in obj1) {
//         arr.push(obj1[key].budget);
//     }
//     return arr.reduce((a, b) => a + b, 0);
// }
// console.log(getBudgets([
// { name: "John", age: 21, budget: 29000 },
// { name: "Steve", age: 32, budget: 32000 },
// { name: "Martin", age: 16, budget: 1600 }
// ]));







// function freeShipping(obj) {
//     let arr = [];
//     for (let key in obj) {
//         if (obj[key] > 50) {
//             arr.push(obj[key]);
//         }
//     }
//     return obj
// }
// console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));









// function mapping(obj) {
//     let obj1 = {}
//     obj.forEach((value) => {obj1[value] = value.toUpperCase()})
// return obj1
// }
// console.log(mapping(["p", "s"]));







// function afterNYears(obj,num) {
    
// }
// console.log(afterNYears({ "Joel" : 32, "Fred" : 44, "Reginald" : 65, "Susan" : 33,"Julian" : 13}, 1));














// function findStudentByGrade(students, grade) {
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].grade === grade) {
//             return students[i];
//         }
//     }
//     return {};
// }
// console.log(findStudentByGrade([{ name: "Alice", grade: "B" }, { name: "Bob", grade: "A" }, { name: "Charlie", grade: "C" },], "A"));








