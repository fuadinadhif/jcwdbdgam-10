# 1. Base image
FROM node:22

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install packages
RUN npm install

# 5. Copy all files
COPY . .

# 6. Expose port
EXPOSE 8000

# 8. Run the app
CMD ["npm", "run", "dev"]