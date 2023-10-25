# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build your Vite-React app
RUN npm run build

# Expose the port your app will run on
EXPOSE 4173

# Start your app
CMD [ "npm", "run", "preview" ]