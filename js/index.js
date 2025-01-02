// --1--
const greeting = (message) => {
  message = "Hello, World";
  console.log(message);
};
const btn = document.getElementById("button");
addEventListener("click", greeting);

// --2--
// const task2 = (random, res) => {
//   random = Math.trunc(Math.random() * 100);
//   res = prompt("Enter number from 1 ot 100");
//   if (res === random) {
//     alert("all right, you guess");
//   } else {
//     task2;
//     alert("try again, you dont guess");
//     console.log(random);
//   }
//   return res;
// };
// task2();
//--3--
//Так как не знаю что тут можно сделать то пропускаю
//--4--
// const applyCallbackToEachElement = (arr, callback) => {
//   arr = [1, 2, 3, 4, 5];
//   let squareArr;
// };
// const result = (squareArr, newArr) => {
//   for (let i = 0; i < arr.length; i++) {
//     squareArr = arr[i] * arr[i];
//     console.log(squareArr);
//   }
// };
// applyCallbackToEachElement(result);
//--4//
const applyCallbackToEachElement = (arr, callback) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i]));
  }
  return res;
};
const numbers = [10, 21, 32, 11];
const square = applyCallbackToEachElement(numbers, (num) => num ** 2);
console.log(square);
// --5--
const calculateDiscountedPrice = (price, discount, callback) => {
  let showDicountedPrice = price - (price * discount) / 100;

  callback(`Price with discount is: ${showDicountedPrice}`);
};
calculateDiscountedPrice(200, 15, function (num) {
  console.log(`Price is: ${num}`);
});
