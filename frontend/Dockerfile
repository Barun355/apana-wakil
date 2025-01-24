# Use a complete Node.js image instead of Alpine
FROM node:18

# Set the working directory
WORKDIR /usr/apnawakil/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# Run the Vite development server
CMD ["npm", "run", "dev"]
