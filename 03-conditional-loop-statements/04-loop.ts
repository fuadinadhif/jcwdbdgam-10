/* -------------------------------- for loop -------------------------------- */
for (let i = 0; i < 3; i++) {
  console.log("Hello");
}

// Loop 1
// i = 0
// i < 3 => 0 < 3 = true
// run loop body. console.log("Hello")
// i = i + 1 => 0 + 1 = 1

// Loop 2
// i = 1
// i < 3 => 1 < 3 = true
// run loop body. console.log("Hello")
// i = i + 1 => 1 + 1 = 2

// Loop 3
// i = 2
// i < 3 => 2 < 3 = true
// run loop body. console.log("Hello")
// i = i + 1 => 2 + 1 = 3

// Loop 4
// i = 3
// i < 3 => 3 < 3 = false
// stop loop

/* ------------------------------- while loop ------------------------------- */
let i = 0;

while (i < 3) {
  console.log("Hai");
  i++;
}

/* ------------------------------ do while loop ----------------------------- */
let x = 0;

do {
  console.log("Salam");
  x++;
} while (x < 3);

/* ------------------------- do while vs while loop ------------------------- */
let a = 0;
while (a < 0) {
  console.log("A");
  a++;
}

let b = 0;
do {
  console.log("B");
  b++;
} while (b < 0);

/* ---------------------------------- break --------------------------------- */
for (let i = 0; i < 100; i++) {
  console.log("Waka-waka");

  if (i === 2) {
    break;
  }
}

// loop 1
// if (0 === 2) {}
// if (false) { // tidak dijalankan }

// loop 2
// if (1 === 2) {}
// if (false) { // tidak dijalankan }

// loop 3
// if (2 === 2) {}
// if (true) { // break dijalankan dan loop berhenti }

/* -------------------------------- continue -------------------------------- */
for (let i = 0; i < 100; i++) {
  if (i === 2 || i === 4) {
    continue;
  }

  console.log(i);
}

/* -------------------------------- exercise -------------------------------- */
// 1.
const number = 13;

if (number % 2 !== 0) {
  console.log("Odd");
} else {
  console.log("Even");
}

// 2.
