FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

EXPOSE 5172

CMD ["npm","run","dev"]



#production ready docker file

# # Stage 1: Build React app
# FROM node:20-alpine AS build

# # Set working directory
# WORKDIR /app

# # Copy package.json and install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy all project files and build
# COPY . .
# RUN npm run build

# # Stage 2: Serve with Nginx
# FROM nginx:alpine

# # Copy built files from build stage to Nginx default location   ---  /app/dist → this is where Vite puts your production build after running npm run build.  ----  /usr/share/nginx/html → this is the default directory where Nginx looks for files to serve
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose port 80 for HTTP traffic
# EXPOSE 80

# # Run Nginx in foreground  ----   -g "daemon off;" tells Nginx to stay in the foreground instead of running in the background
# CMD ["nginx", "-g", "daemon off;"]
