{
  let price: number = 1000;
  let discount: number = 50;
  console.log(typeof discount);
  console.log(price - discount);

  discount = 500;
  console.log(typeof discount);
  console.log(price - discount);

  discount = "abc";
  console.log(typeof discount);
  console.log(price - discount);

  let fullName: string = "Abdi";
  let score: number = 100;
  let isValid: boolean = true;
  let phoneNumber: string | number = 85812123456;

  fullName = 1010;
  score = "10";
  isValid: false;
  phoneNumber = 12723456;
  phoneNumber = "+6208989097010";
}
