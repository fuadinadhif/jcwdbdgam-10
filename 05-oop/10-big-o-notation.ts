/* -------------------------------------------------------------------------- */
/*                               Time Complexity                              */
/* -------------------------------------------------------------------------- */
// O(1)
function getFirstIndex(array: any[]) {
  return array[0]; // 1
}
// O(1)

console.log(getFirstIndex([1, 2, 3]));
console.log(getFirstIndex([1]));
console.log(getFirstIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(getFirstIndex([]));

/* ------------------------------------ 1 ----------------------------------- */
// O(n)
function searchName(array: string[], target: string) {
  for (const name of array) {
    // array.length => n
    if (name === target) return true;
  }

  return false; // 1
}
// n + 1
// O(n)

/* ------------------------------------ 2 ----------------------------------- */
console.log(
  searchName(["Adi", "Joko", "Susilo", "Bambang", "Yudhoyono"], "Joko")
);
// best scenario = O(1)
// average scenario = O(n)
// worst scenario = O(n)

console.log(
  searchName(["Adi", "Joko", "Susilo", "Bambang", "Yudhoyono"], "Siti")
);

/* ------------------------------------ 3 ----------------------------------- */
function capitalFirstLetter(sentence: string) {
  if (!sentence) return ""; // 1

  let result = ""; // 1
  let capitalizeNext = true; // 1

  for (let i = 0; i < sentence.length; i++) {
    // n
    if (capitalizeNext === true && sentence[i] !== " ") {
      result = result + sentence[i].toLocaleUpperCase();
      capitalizeNext = false;
    } else {
      result = result + sentence[i];
    }

    if (sentence[i] === " ") {
      capitalizeNext = true;
    }
  }

  return result; // 1
}
console.log(capitalFirstLetter("nadhif"));
console.log(capitalFirstLetter("nadhif fuadi"));

// 1 + 1 + 1 + n + 1
// n
// O(n)

/* ------------------------------------ 3 ----------------------------------- */
function hasDuplicate(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    // n
    for (let j = i + 1; j < array.length; j++) {
      // n
      if (array[i] === array[j]) return true;
    }
  }

  return false;
}
console.log(hasDuplicate([10, 20, 30, 40]));
console.log(hasDuplicate([10, 20, 30, 30]));

// n * n
// n^2
// O(n^2)

/* ------------------------------------ 4 ----------------------------------- */
function someFunc(array: any[]) {
  for (let i = 0; i < array.length; i++) {} // n

  for (let i = 0; i < array.length; i++) {} // n
}
// n + n
// 2n
// n

/* ------------------------------------ 5 ----------------------------------- */
function sortArray(array: number[]) {
  return array.sort((a, b) => a - b);
}
console.log(sortArray([1, 10, 0, 1000, 90, 300]));

/* -------------------------------------------------------------------------- */
/*                              Space Complexity                              */
/* -------------------------------------------------------------------------- */
/* ------------------------------------ 1 ----------------------------------- */
function findMax(array: number[]) {
  let max = -Infinity; // 1

  // 1
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }

  return max;
}
console.log(findMax([10, 4, 5, 2, 10000, 90, 999999, 45678, 823429347]));

// 1 + 1
// O(1) => Constant

/* ------------------------------------ 2 ----------------------------------- */
function copyArray(array: any[]) {
  const newArray = []; // n

  // 1
  for (const element of array) {
    newArray.push(element);
  }

  return newArray;
}
const arrayOriginal = [5, 50, 500];
const arrayCopy = copyArray(arrayOriginal);

console.log(arrayOriginal);
console.log(arrayCopy);

arrayCopy[2] = 5000;

console.log(arrayOriginal);
console.log(arrayCopy);

// n + 1
// O(n)

/* ------------------------- Why We Remove Constanta ------------------------ */
// 1. n (1000) + 1 + 1 + 1 = 1003
// 1. n (1_000_000) + 1 + 1 + 1 = 1_000_003
// 1. n (1_000_000_000) + 1 + 1 + 1 = 1_000_000_003

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
const array1 = [1, 2, 3];
const array2 = array1;
const array3 = { ...array1 };

function looping(array: any[]) {
  for (let i = 0; i < 10; i++) {}
}
