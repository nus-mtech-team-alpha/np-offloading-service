FROM node:latest

WORKDIR /np-offloading-service
COPY package.json ./
RUN npm install
COPY src src
COPY public public
COPY tsconfig.json ./
RUN npm run build
RUN rm -rf src
CMD ["npm", "run", "serve"]
