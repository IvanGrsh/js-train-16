// // {
// //   let a = 5;

// //   a = 10;

// //   console.error("Error, a змінна повинна бути 5");
// // }
// // console.error();

// const counterLabel = "Timer";

// // console.time(counterLabel);

// // // console.groupCollapsed("Groop 1");

// // // console.log("Test 1");
// // // console.warn("Test 2");

// // // console.groupCollapsed("Groop 2");

// // console.timeLog(counterLabel);

// // // console.debug("Test 3");

// // // console.groupEnd();

// // // console.groupEnd();

// // console.timeEnd(counterLabel);

// /////////////////////////////////////////////////

// console.time(counterLabel);
// console.count(counterLabel);

// console.timeLog(counterLabel);
// console.count(counterLabel);

// console.timeEnd(counterLabel);
// console.countReset(counterLabel);

// console.count(counterLabel);

// /////////////////////////////////////////////////

// const test1 = () => console.trace("Hello");

// const test2 = () => test1();

// const test3 = () => test2();

// test3();

// /////////////////////////////////////////////////

// const data = [
//   {
//     name: "John",
//     age: 25,
//     city: "New York",
//   },
//   {
//     name: "Alice",
//     age: 30,
//     city: "London",
//   },
// ];

// console.table(data);

// const dat = [1, 2, 3, 4, 5];

// console.table(dat);

// const dar = [
//   {
//     name: "John",
//     age: 25,
//     city: "New York",
//   },
//   {
//     name: "Alice",
//     age: 30,
//     city: "London",
//   },
// ];

// console.table(dar, ["name", "age"]);

// /////////////////////////////////////////////////

// const a = 5;
// const b = 10;
// const result = a > b;
// console.assert(result, "info");

// if (!result) {
// 	console.assert(result, "info");
//   }

// if (result) {
//   //...
// } else {
//   //...
// }

// if (a > b) {
//   //...
// } else {
//   console.log("info");
// }

console.log("%c Hello World", "font-size: 50px; color:blue");
