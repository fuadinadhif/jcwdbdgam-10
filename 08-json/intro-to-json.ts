const studentList = [
  { name: "Agus 🎅🏼", class: "7A" },
  { name: "Rahmawati 👩🏼", class: "7A" },
  { name: "Asep 🤨", class: "7B" },
  { name: "Siti 👩🏼‍🦰", class: "7C" },
];
console.log(studentList);

/* ----------------------------- JSON.stringify ----------------------------- */
/* ----------------------- Mengubah Object JS -> JSON ----------------------- */
// const jsonStudentList = JSON.stringify(studentList);
// const jsonStudentList = JSON.stringify(studentList, ["name"]);
// const jsonStudentList = JSON.stringify(studentList, (key, value) => {
//   if (value === "7A") {
//     return "Hidden class";
//   } else {
//     return value;
//   }
// });
const jsonStudentList = JSON.stringify(
  studentList,
  (key, value) => {
    if (value === "7A") {
      return "Hidden class";
    } else {
      return value;
    }
  },
  2
);
console.log(jsonStudentList);

/* ------------------------------- JSON.parse ------------------------------- */
/* ----------------------- Mengubah JSON -> Object JS ----------------------- */
const jsStudentList = JSON.parse(jsonStudentList);
console.log(jsStudentList);
