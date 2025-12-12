/* ---------------------------------- Slice --------------------------------- */
const message = "Selamat pagi teman-teman yang berbahagia";
console.log(message.slice(2, 5));

console.log("Hello guys!".slice(6));

/* ---------------------------------- Trim ---------------------------------- */
// Membersihkan/menghapus whitespace
const fullName = "  Purwa Hartono     ";
console.log(fullName.trim());

console.log("  purwa.hartono@mail.com  ".trim());

/* ------------------------ toUpperCase * toLowerCase ----------------------- */
const username = "FuADHinaDhIF";
console.log(username.toUpperCase());
console.log(username.toLowerCase());

/* --------------------------------- replace -------------------------------- */
const secretMessage =
  "This is a very secret message you cannot see this secret";
console.log(secretMessage.replace("secret", "***"));
console.log(secretMessage.replaceAll("secret", "***"));
