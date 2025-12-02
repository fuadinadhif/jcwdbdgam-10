// Array - Kumpulan data yang memiliki urutan
/* --------------------------- Cara Membuat Array --------------------------- */
const arrayOfNumbers: number[] = [1, 2, 3, 40, 50, 60];
const arrayOfStrings: string[] = ["A", "B", "C", "D"];
const randomArray: (string | number | null | undefined | boolean)[] = [
  "A",
  1,
  null,
  undefined,
  true,
];
const arrayRandom: any[] = ["a", 2, null, undefined, false, []];
const arrayMultipleDimension: any[] = [1, 2, 3, [2, 4, 5]];

const array1: [] = [];
const array2: any[] = new Array();
console.log(array1);
console.log(array2);

/* ------------------- Cara Mengakses Data di Dalam Array ------------------- */
const students = ["Andhika", "Malika", "Bango", "Budiman"];
console.log(students);
console.log(students[0]);
console.log(students[3]);

const multiDimensionArray = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10]]];
console.log(multiDimensionArray[1]);
console.log(multiDimensionArray[3][0]);
console.log(multiDimensionArray[3][3][3]);

/* ---------------- Cara Update Value Element di Dalam Array ---------------- */
const employees = ["Pimpie", "Devina", "Nadina", "Malik", "Cipuy", "Khrisna"];
console.log(employees);
console.log(employees[4]);

employees[4] = "Zahra";

console.log(employees);
console.log(employees[4]);

/* ---------------------- Cara Memeriksa Panjang Array ---------------------- */
const randomStrings = ["a", "b", "z", "d", "c", "q", "z"];
console.log(randomStrings.length);

/* ---------- Cara Menambah dan Mengurangi Elemenet di Dalam Array ---------- */
const randomNumbers = [1, 2, 40, 50, 60, 1000, 2000, 3000];
console.log(randomNumbers);

// .push => menambah di paling akhir
randomNumbers.push(0.5);
console.log(randomNumbers);

// .pop => mengurangi di paling akhir
randomNumbers.pop();
console.log(randomNumbers);

// .unshift => menambah di paling awal
randomNumbers.unshift(95);
console.log(randomNumbers);

// .shift => mengurangi di paling awal
randomNumbers.shift();
console.log(randomNumbers);

/* ----------------------------- Iterating Array ---------------------------- */
const favoriteSongs = ["December", "33x", "Cincin", "Indonesia Raya", "So Asu"];

console.log(favoriteSongs[0]);
console.log(favoriteSongs[1]);
console.log(favoriteSongs[2]);
console.log(favoriteSongs[3]);
console.log(favoriteSongs[4]);

// 1. for loop
for (let i = 0; i < favoriteSongs.length; i++) {
  console.log(favoriteSongs[i]);
}

// 2. for of loop
for (const x of favoriteSongs) {
  console.log(x);
}
// Loop 1
// x = favoriteSongs[0]

// Loop 2
// x = favoriteSongs[1]

// 3. for in loop
for (const x in favoriteSongs) {
  console.log(x);
}
