# Welcome to the eichershop microfrontend prototype

## Build

The github action builds the frontend and commits the index.html and static files to the repo under /docs, where it served via github pages.

There is also a gradle build which build Frontend and Backend. Frontend static files are copied to the spring boot embedded tomcat dir serving the files.

    ./gradlew build

Check the ```frontend/package.json``` to see how the WebComponents are built.

The gradle build creates webcomponents with the 'build' script in package.json. If you want to build a default vue app, run the 'builddefault' script.

## Run

    ./gradlew bootRun

## Develop with live-reload
Launch the dev server on port 8180:

    cd frontend
    npm run s

Backend is proxied to localhost:8080, so just run the gradle:

    ./gradlew bootRun -Plocal


## Docker

Build and run the image:

    ./gradlew build && \
    docker-compose up --build

Access: ```localhost:8080/demo.html```
Debug: Attach debugger to: ```localhost:5005```
## See result:
When running gradle only:

    localhost:8080/demo.html

When running with npm run serve:

    localhost:8180

The transpiled frontend code is in ```src/main/resources/public``` and there is a demo.html using the WebComponents, which you can open in the browser:

    localhost:8080/demo.html

## Cypress Tests

- Go to: ```/tests```
- Make sure Backend and local DynoDB are running

To run headless:

    npx cypress run

Screenshots of fails and videos of success are available at ```/screenshots``` and ```/videos```

Open TestRunner for manual visual testing:

    npx cypress open
