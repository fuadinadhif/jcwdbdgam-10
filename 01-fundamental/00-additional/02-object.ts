// Array => Kumpulan data yang memiliki urutan
// Object => Kumpulan data yang memiliki keterkaitan

const array = [];
const object = {};

const fullName = "John Doe";
const age = 70;
const address = "Jalan Asia Afrika, Bandung, Jawa Barat";
const phoneNumber = "+6289899097010";

/*
userData => nama variable/nama object
= => operator untuk mengisi sebuah variable
{} => pembungkus object
{
  key: value => property
}
*/
const userData = {
  fullName: "Jane Doe",
  age: 25,
  address: "Jalan Soekarno Hatta, Bandung, Jawa Barat",
  phoneNumber: "+6297239218790",
};

/* ----------------------- Cara mengakses value object ---------------------- */
// 1. (.) - Dot Notation -  namaObject.namaKey
console.log(userData.age);

// 2. ([]) - Square Bracket Notation
console.log(userData["age"]);

/* ----------------------- Cara mengganti value object ---------------------- */
console.log(userData.age);
userData.age = 100;
console.log(userData.age);

/* ----------------------- Kombinasi Array dan Object ----------------------- */
const listStudent = [
  { name: "Joko", class: "7A" },
  { name: "Budi", class: "7B" },
  { name: "Siti", class: "7C" },
];

console.log(listStudent[1]);
console.log(listStudent[1].name);
