# node_project

This project was generated with express generator.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`.

## Run Docker

Run this command - 

 <!-- Run this command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:    -->
1. docker build -t 'your-username'/node-web-app .

<!-- Your image will now be listed by Docker: -->
2. docker images

<!-- Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built: -->

3. docker run -p 4500:3000 -d 'your-username'/node-web-app

4. Navigate to "http://localhost:4500/".

## In project

API's -- 

1. On "/" (GET)  it will return "Hello" as response. 
2. On "/username" (GET) it will return "Hello username" as response. 
3. On "/"  (POST ) it will return complete request body as response.