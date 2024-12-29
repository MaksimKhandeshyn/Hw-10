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
const myFubc = (message) => {
  message = "hi life";
  console.log(message);
};
const high = (callback) => {
  const dtr = "HOC dfjasdf s";
  callback(dtr);
};
high(myFubc); //Функия высшего порядка(та которая принимает другую функцию)
myFubc(high);

const applyCallbackToEachElement = (arr, array) => {
  arr = [1, 2, 3, 4, 5];
  array = [6, 7, 8, 9, 10];
  let square;
};
const result = (callback) => {
  for (let i = 0; i < array.length; i++) {
    square = array[i] * array[i];
    console.log(square);
  }
  callback(array);
};
applyCallbackToEachElement(result);
result(applyCallbackToEachElement);
