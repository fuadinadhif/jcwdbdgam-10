/* --------------------------------- filter --------------------------------- */
const points = [100, 500, 50];
const pointsMoreThan100 = points.filter(function (element) {
  return element > 100;
});
console.log(pointsMoreThan100);

/* ---------------------------------- slice --------------------------------- */
const favFruits = ["Apple", "Banana", "Grape", "Watermelon", "Cherry"];
const sliceResult = favFruits.slice(1, 4);
console.log(favFruits);
console.log(sliceResult);

/* --------------------------------- splice --------------------------------- */
const favFoods = ["Satay", "Seblak", "Nasi Gonjleng", "Gudeg", "Chicken"];
const spliceResult = favFoods.splice(1, 3);
console.log(favFoods);
console.log(spliceResult);
