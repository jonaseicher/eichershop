# Welcome to the eichershop microfrontend prototype

## Build

Builds Frontend and Backend. Frontend static files are copied to the spring boot embedded tomcat dir serving the files.

    ./gradlew build

Check the ```frontend/package.json``` to see how the WebComponents are built.

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

## Test DynamoDB locally
- Start DynoDB container

        docker-compose -f docker-compose.yaml up -d dynamodb

- Create table

        aws dynamodb --endpoint-url http://localhost:8000 create-table --table-name marquez-local-eichershopTable \
        --attribute-definitions '[{"AttributeName":"agentId", "AttributeType":"S"},
        {"AttributeName":"connectId", "AttributeType":"S"}]' \
        --key-schema '[{"AttributeName":"agentId", "KeyType":"HASH"},
        {"AttributeName":"connectId", "KeyType":"RANGE"}]' \
        --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
        --billing-mode PAY_PER_REQUEST

    The table-name is built like this (EKS_NAMESPACE is defined in application.properties, for local its 'local'):

        marquez-${EKS_NAMESPACE}-UserTable

- To use the local dynamoDB, in ```DynamoDBConfig``` you need to provide the dynamoDBMapper with the ```localDybamoDB()``` instead of ```amazonDynamoDB()```:

        public DynamoDBMapper dynamoDBMapper() {
            return new DynamoDBMapper(localDynamoDB(), dynamoDBMapperConfig());
        }

- Optional: Ensure successful table creation

        aws dynamodb list-tables --endpoint-url http://localhost:8000
## Deployment to AWS

### Push Image to ECR

    $(aws ecr get-login --no-include-email --region eu-central-1)
    docker tag eichershop 160260724909.dkr.ecr.eu-central-1.amazonaws.com/eichershop
    docker push 160260724909.dkr.ecr.eu-central-1.amazonaws.com/eichershop

### Deploy via Helm

There is a helm directory containing the deployment and service configuration.

    helm upgrade --install eichershop helm

## TODOs

- AWS Secrets Manager
- Websecurity
- add prometheus dependencies for monitoring (or not, if appdynamics suffices)
- actuator, readiness probes, prometheus scraping autodiscovery


## Gererate InteractionEvent from avsc file
./gradlew generateAvro

Important!! Add @JsonIgnore to getSchema() and getSpecificData() Methods of InteractionEvent class

## Kafka/Zookeeper via Docker

I am using simplestephs kafka-stack: https://github.com/simplesteph/kafka-stack-docker-compose
with a small variation, so you can use it from another docker-compose stack. See
```
kafka-compose.yaml
```
Launch it by running:
```
docker-compose -f kafka-compose.yaml up
```
You can reach the bootstrap servers at localhost:9092, or (from another docker container) at host.docker.internal:9092

Useful kafka commands for debugging:
```
docker exec -ti kafka bash
kafka-topics --zookeeper localhost:2181 --list
kafka-console-consumer --bootstrap-server localhost:9092 --topic TOPIC1 --from-beginning
```
## Kafka endpoints

There is an endpoint that will send a message to a kafka topic:
```
/scs/eichershop/kafka?topic=TOPIC1&message=HelloWorld
```

There is also a kafka listener on 'TOPIC1' that will log the message to the console.

## Cypress Tests

- Go to: ```/tests```
- Make sure Backend and local DynoDB are running

To run headless:

    npx cypress run

Screenshots of fails and videos of success are available at ```/screenshots``` and ```/videos```

Open TestRunner for manual visual testing:

    npx cypress open
