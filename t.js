// // 357 231
// function fizzBuzz(max) {
//   let list = [];
//   for (let i = 1; i < max; i++) {
//     if (i % 3 === 0) {
//       if (i % 5 === 0) {
//         list.push("FizzBuzz");
//       } else {
//         list.push("Fizz");
//       }
//     } else if (i % 5 === 0) {
//       list.push("Buzz");
//     } else {
//       list.push(i.toString());
//     }
//   }
//   return list;
// }
// console.log(fizzBuzz(20));

// // 357 226
// function f(m) {
//   if (m > 0) {
//     if (!(m % 3)) {
//       if (!(m % 5)) {
//         return `${f(m - 1)}, FizzBuzz`;
//       } else {
//         return `${f(m - 1)}, Fizz`;
//       }
//     } else if (!(m % 5)) {
//       return `${f(m - 1)}, Buzz`;
//     } else {
//       return `${f(m - 1)},${m.toString()}`;
//     }
//   } else {
//     return m.toString();
//   }
// }
// console.log(f(20));

// // 340 220
// function f(m) {
//   if (m > 0) {
//     if (!(m % 3)) {
//       if (!(m % 5)) {
//         return `${f(m - 1)}, FizzBuzz`;
//       }
//       return `${f(m - 1)}, Fizz`;
//     } else if (!(m % 5)) {
//       return `${f(m - 1)}, Buzz`;
//     } else {
//       return `${f(m - 1)},${m.toString()}`;
//     }
//   } else {
//     return m.toString();
//   }
// }
// console.log(f(20));

// // 288 173
// console.log(
//   (function a(e) {
//     if (e !== 0) {
//       if (!(e % 3) || !(e % 5)) {
//         return a(e - 1) + `${!(e % 3) ? "fizz" : ""}${!(e % 5) ? "buzz" : ""}`;
//       } else {
//         return a(e - 1) + " " + e.toString() + " ";
//       }
//     } else {
//       return "";
//     }
//   })(100)
// );

// // 252 167
// console.log(
//   (function a(e) {
//     if (e !== 0) {
//       if (!(e % 3) || !(e % 5))
//         return a(e - 1) + `${!(e % 3) ? "fizz" : ""}${!(e % 5) ? "buzz" : ""}`;
//       else return a(e - 1) + " " + e.toString() + " ";
//     } else return "";
//   })(100)
// );

// // 240 154
// console.log(
//   (function a(e) {
//     if (e !== 0) {
//       return !(e % 3) || !(e % 5)
//         ? a(e - 1) + `${!(e % 3) ? "fizz" : ""}${!(e % 5) ? "buzz" : ""}`
//         : a(e - 1) + " " + e.toString() + " ";
//     } else return "";
//   })(100)
// );

// // 224 +spaces 139 wo
// console.log(
//   (function a(e) {
//     return e !== 0
//       ? !(e % 3) || !(e % 5)
//         ? a(e - 1) + `${!(e % 3) ? "fizz" : ""}${!(e % 5) ? "buzz" : ""}`
//         : a(e - 1) + " " + e.toString() + " "
//       : "";
//   })(100)
// );

// // 233 +spaces 134 wo
// console.log(
//   (function a(e) {
//     return e !== 0
//       ? a(e - 1) +
//           (!(e % 3) || !(e % 5)
//             ? `${!(e % 3) ? "fizz" : ""}${!(e % 5) ? "buzz" : ""}`
//             : " " + e.toString() + " ")
//       : "";
//   })(100)
// );
