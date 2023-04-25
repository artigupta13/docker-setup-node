### base image node 
FROM node:16-slim
ENV NODE_ENV=production

### default location for all subsequent command
WORKDIR /app

### copy package.json and package-lock.json file into working directory ~/app
COPY package.json package.json
copy package-lock.json package-lock.json
copy tsconfig.json tsconfig.json

RUN npm ci && npm cache clean --force
###  install node_modules directory inside our image

### copy all files located in the current directory and copies them into image 

COPY . .

RUN npm run build


### run image inside of a container
CMD [ "node" , "dist/index.js" ]