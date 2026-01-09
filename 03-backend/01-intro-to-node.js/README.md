# README

## Backend Installation Setup

Pastikan terminal sudah mengarah ke root folder project.

1. `npm init -y`
2. `npm install node`
3. `npm install -D @types/node typescript`
4. `mkdir src`
5. `touch src/index.ts`
6. Edit `package.json` script:
   ```json
   "scripts": {
    "dev": "node src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
   },
   ```
7. Edit `package.json` type to "module"
8. `npx tsc --init`
9. `touch .gitignore`
