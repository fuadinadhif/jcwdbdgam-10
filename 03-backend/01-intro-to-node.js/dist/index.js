import fs from "fs/promises";
const someObject = { name: "John" };
const userData = await fs.readFile("data/users.json", "utf-8");
console.log(userData);
//# sourceMappingURL=index.js.map