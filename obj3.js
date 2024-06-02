//test1
// function findStudentByGrade(arr,baho)
// {
//     return arr.find(el=>el.grade==baho) || {}
// }
// console.log(findStudentByGrade([ { name: "Alice", grade: "B" }, { name: "Bob", grade: "A" }, { name: "Charlie", grade: "C" }, ] , "A"));
// console.log(findStudentByGrade([ { name: "Ehson", grade: "C" }, { name: "Abduvosid", grade: "A" }, { name: "Ali", grade: "B" }, ] , "F"));
// //test2
//2
// function filterProducts(arr, m, c) {
//     let cnt=[];
//     for (let i=0; i<arr.length; i++) {
//       let cnt1=arr[i];
//       if (cnt1.price>=m&&(c==null||cnt1.category==c)) {
//         cnt.push(cnt1);
//       }
//     }
//     return cnt;
//   }
// console.log(filterProducts([ { name: "Laptop", price: 800, category:
// "электроника" }, { name: "Headphones", price: 30, category:
// "электроника" }, { name: "Book", price: 15, category: "книги" } ],
// 50, "электроника"));
// function filterProducts(arr,narx,category)
// {
//    let str = []

//    for(let i = 0; i<arr.length;i++)
//    {
//     let product = arr[i]
//     if(product.price>=narx && category == product.category)
//     {
//         str.push(product)
//     }
//    }
//    return str
// }
// console.log(
//     filterProducts([{ name: "Laptop", price: 800, category: "электроника" }, { name: "Headphones", price: 30, category: "электроника" }, { name: "Book", price: 15, category: "книги" } ], 50, "электроника"));

//test3
// function sortPeopleByAge(arr)
// {

//     return arr.sort((a,b)=>{
//      return   a.age - b.age
//     })
// }

// console.log(sortPeopleByAge([{ name: "Anna", age: 25 }, { name: "Bob", age: 30}, { name: "Charlie", age: 22 }, ]));
//test4
// function ObjectSearch(obj, path) {
//     return path.split('.').reduce((value, key) => value && value[key], obj);
// }
// console.log(
//     ObjectSearch({ user: { details: { address: { city: "New York" } } } },
// "user.details.address.city"));
// console.log(
//     ObjectSearch({ user: { details: { address: { city: "New York" } } } },
// "user.details.address"));
//test6

// //test7
// function createObjectFromArrays(arr,arr2)
// {
//     let obj = {}

//     for(let i = 0; i<arr.length; i++)
//     {

//         obj[arr[i]]=arr2[i]
//     }
//     return obj
// }
// console.log(
//     createObjectFromArrays(["name", "age", "city"], ["Alice", 25, "New York"]));







// function flattenNestedObjects(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//       result.push(arr[i].id + ' ' + JSON.stringify(arr[i].data));
//     }
//     return result;
//   }
  
//   console.log(
//     flattenNestedObjects([
//       { id: 1, data: { name: "John", age: 25 } },
//       { id: 2, data: { name: "Alice", age: 30 } },
//     ])
//   );










//test8
// function findMaxObjectByValue(arr,key)
// {
//     return arr.reduce((acc,curr)=>{
// if(curr[key]>acc[key]) 
// return curr
// else {
//     return acc
// }
//     },)
    
// }
// console.log(
//     findMaxObjectByValue([ { name: "Alice", age: 25 }, { name: "Bob", age:30 }, { name: "Charlie", age: 22 },], "age"));








// function date(data) {
//     let date = new Date()
//     let a = date.getTime()
//     let b = new Date(data).getTime()
//     let c = b - a
//     return c / 1000 / 60 / 60 / 24
// }
// console.log(date("2024-12-31"));