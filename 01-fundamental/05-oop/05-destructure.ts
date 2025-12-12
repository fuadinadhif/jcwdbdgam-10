/* ---------------------------- Array Destructure --------------------------- */
const groceryList = ["Telur", "Daging Ayam", "Roti", "Susu"];

// const groceryList1 = groceryList[0];
// const groceryList2 = groceryList[1];
// const groceryList3 = groceryList[2];
// const groceryList4 = groceryList[3];

const [groceryList1, groceryList2, groceryList3, groceryList4] = groceryList;

console.log(groceryList1);
console.log(groceryList2);
console.log(groceryList3);
console.log(groceryList4);

/* --------------------------- Object Destructure --------------------------- */
const citizenData = {
  NIK: "092183091283",
  firstName: "Adi",
  lastName: "Baskara",
};

// const NIK = citizenData.NIK;
// const firstName = citizenData.firstName;
// const lastName = citizenData.lastName;

const { firstName, lastName, NIK, addres } = citizenData;

console.log(NIK);
console.log(firstName);
console.log(lastName);
console.log(addres);
