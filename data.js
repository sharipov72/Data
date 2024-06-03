// test1
// function get(month, year) {

//     return new Date(year, month - 1, 13).getDay() == 5;

// }
// console.log(get(10, 2017));
// console.log(get(2013, 11, 24));

//test2
// function get(num,num1,num2) {
//     let cnt = h * 3600 + m * 60 + s
//     let cnt1 = max(h, m, s)
//     if longest_time == h:
//         return h
//     elif longest_time == m:
//         return m;
//     else{
//         return s
//     }

// }
// console.log(get(1, 59, 3598));

//test3
// function Magic(dateString) {
//     // Split the date string into components
//     let dateComponents = dateString.split(" ");

//     let day = parseInt(dateComponents[0]);
//     let month = parseInt(dateComponents[1]);
//     let year = parseInt(dateComponents[2]);

//     if (Number.isInteger(day) && Number.isInteger(month) && Number.isInteger(year) && year >= 1000 && year <= 9999) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(Magic("1 1 2011"));
// console.log(Magic("4 1 2001"));

//test4
// function days(month, year) {
// let cnt = new Date(year, month, 0).getDate();
// return cnt;
// }
// console.log(days(2, 2018));

//test5
// function timeForMilkAndCookies(date) {
//   const month = date.getMonth();
//   const day = date.getDate();

//   if (month === 11 && day === 24) {
//     return true;
//   }

//   return false;
// }

// console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
// console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));

//test6
// function daysUntil2021(dateStr) {
//     const cnt = dateStr.split('/');
//     const cnt1 = new Date(cnt[2], cnt[0] - 1, cnt[1]);
//     const cnt2 = new Date(2024, 11, 31);
//     const cnt3 = cnt2 - cnt1;
//     const cnt4 = Math.ceil(cnt3 / (1000 * 60 * 60 * 24));
//     return ${cnt4} days;
// }
// console.log(daysUntil2021("05/03/2024"));

//test7
// function formatDate(dateStr) {
//   const parts = dateStr.split("/");
//   const year = parts[2];
//   const month = parts[0].padStart(2, "0");
//   const day = parts[1].padStart(2, "0");
//   const result = ${year}${day}${month};
//   return result;
// }

// console.log(formatDate("11/12/2019"));
// console.log(formatDate("12/31/2019"));









//test8
