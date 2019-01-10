FROM node:10
WORKDIR /test_node_project/myapp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]