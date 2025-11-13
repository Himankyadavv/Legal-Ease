# First Stage: Build React App
FROM node:22-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install 

# Copy all files and build the React app
COPY . .
RUN npm run build

# Second Stage: Serve with Nginx
FROM nginx:alpine

# Copy build output to Nginx's default directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
