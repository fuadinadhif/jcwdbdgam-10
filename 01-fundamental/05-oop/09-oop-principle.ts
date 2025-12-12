/* -------------------------------------------------------------------------- */
/*                                Encapsulation                               */
/* -------------------------------------------------------------------------- */
// 1. Public - Access from everywhere
// 2. # (js) - Access from inside Class only
// 3. private (ts) - Access from inside Class or directly from Class Instance

class FruitClass {
  public name: string;
  stock: number;
  private price: number;

  constructor(name: string, stock: number, price: number) {
    this.name = name;
    this.stock = stock;
    this.price = price;
  }
}

const apple = new FruitClass("Apple", 100, 5000);
const grape = new FruitClass("Grape", 50, 15000);

console.log(apple);
console.log(grape);

/* ----------------------------- Getter & Setter ---------------------------- */
class BankAccount {
  public name: string;
  #balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }

  set balance(amount: number) {
    if (amount < 0) {
      throw new Error("Amount cannot be negative");
    }

    // @ts-ignore
    this.#balance = this.#balance + amount;
  }
}

const ichsanAccount = new BankAccount("Ichsanudin", 1_000_000_000_000);
const fajarAccount = new BankAccount("Fajar", 1_500_000_000_000);

console.log(ichsanAccount);
console.log(ichsanAccount.name);
console.log(ichsanAccount.balance);

// ichsanAccount.balance = -500_000_000_000;
console.log(ichsanAccount.balance);

/* -------------------------------------------------------------------------- */
/*                                 Inheritance                                */
/* -------------------------------------------------------------------------- */
interface IFruit {
  name: string;
  price: number;
  weight: number;
}

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Fruit extends Product {
  weight: number;

  constructor({ name, price, weight }: IFruit) {
    super(name, price);
    this.weight = weight;
  }
}
const banana = new Fruit({
  price: 100_000,
  name: "Singaporean Banana",
  weight: 50,
});
console.log(banana);

class Book extends Product {
  author: string;

  constructor(author: string) {
    this.author = author;
  }
}

class IceCream extends Product {
  expiredAt: Date;

  constructor(expiredAt: Date) {
    this.expiredAt = expiredAt;
  }
}

/* ------------------------------- instanceof ------------------------------- */
console.log(banana instanceof Fruit);
console.log(banana instanceof Book);
console.log(banana instanceof Product);
