# blogsura
A blogging application using GraphQL, Postgres, and Hasura

# Hasura - Blogsura

Blogsura is a Hasura GraphQL Server that will allow you to support a blogging website with GraphOL.

## Local Requirements

This local deploy runs on Docker so you will need to have the following tools setup and configured. This is assuming you are running on a Linux or MacOS based system.

* [Docker](https://docs.docker.com/desktop/) **Install Based on your OS**

* [Docker-Compose](https://docs.docker.com/compose/)

* [Hasura-CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli)

### Step 1. Setting up the .env

In order to get the environment up you will need to setup the `.env` under the `hasura` folder. To get started you can navigated to the folder `cd hasura` and then run `cp env.dev .env` to get baseline configuration. You will want to update the secret variables to ensure your environment is properly protected.

To setup the `HASURA_GRAPHQL_JWT_SECRET`you can follow the documentation [Configuring JWT Mode](https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt.html#configuring-jwt-mode) on how to setup the object. A baseline has been provided but the key is insecure so you will want to generate a new one with the following command: 

`echo -n "use-a-random-phrase-here" | openssl dgst -sha256 -hmac "change-this-to-secret-phrase" -binary | openssl enc -base64 -A`

The admin secret key `HASURA_GRAPHQL_ADMIN_SECRET` can be changed to any phrase of your choice.

Lastly if you are going to use the a postgres database outside of local you can update the follow `HASURA_GRAPHQL_DATABASE_URL` with the full url. Documentation going over the configuration of these variables can be found here [Hasura Server Config Reference](https://hasura.io/docs/latest/graphql/core/deployment/graphql-engine-flags/reference.html#server-flag-reference)

### Step 2. Running Hasura Containers

Once you are configured and ready you can run the Hasura containers from the `hasura` folder with the following command `sudo docker-compose up -d`. If you need to stop the containers then run the following command `sudo docker-compose down`.

You can reach the hasura console at `http://localhost:8080/console`.

### Step 3. Importing the migrations and metadata

After the hasura server and postgres database are online you can start importing the migrations and metadata from the project. Ensure you are in the `hasura/blogsura` folder or `cd hasura/blogsura`.

You will need to run each migration with the following command. Make sure to include your admin secret key with the command to ensure you have the right permissions. Documentation about these commands can be found here. [Hasura CLI Reference](https://hasura.io/docs/latest/graphql/core/hasura-cli/index.html)

`hasura migrate apply --admins-secret <admin-secret-here>`

Then apply the metadata

`hasura metadata apply --admin-secret <admin-secret-here>`

After both are applied you should be able to interact with the tables and graphql console at the Hasura Console at `http://localhost:8080/console`.


# Auth-Server

In order to provide a base level of security using Json Web Tokens, a NodeJS - Express server was setup with a basic api to retrieve tokens for user accounts so that a client would be able to interact with the graphql interface.

## Local Requirements

To run this locally you will need the hasura server and postgres database up and running from the previous section. In addtion you will need to ensure you install the following:

* [Nodejs](https://nodejs.org/en/)

* npm

* [Tslint](https://palantir.github.io/tslint/)

* [Typescript](https://www.typescriptlang.org/download)

### Step 1. Setting up the .env

You will need to ensure your env is configured properly to work with your hasura server as well as adjust the configuration of the server. To start navigate to the `auth-server` folder with `cd auth-server`. Then you can run `cp env.dev .env` to create a baseline config. If you adjust the .env file in the `hasura` folder for the hasura server you will need to make similar updates here. In the `.env` update the following variables to match what you have established in your hasura server.

* `BLOGSURA_ADMIN_SECRET=<hasura-admin-secret-key-here>`

* `BLOGSURA_HASURA_URL=<hasura-graphql-url-here>`

* `BLOGSURA_JWT_SECRET=<hasura-jwt-secret-here>`

### Step 2. Run the server

Once you have the env in place you can now run the server. Run `npm install` first to get the packages the server needs installed. Afterwards run `npm start` and the server will be online. You can reach the server at `http://localhost:<3000-or-BLOGSURA_NODE_PORT>`

### Routes

The following routes are available on the server:

* `/login`

#### Login

The login route will interact with the hasura graphQL server to search for a user based on an email passed in. If the user you find is not disabled, you will then be given a JWT Token to pass into hasura via `Authorization: Bearer` headers in your requests to the server. If the user is disabled you will be given an error message. A quick test can be done with the following command.

`curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "email=<test@email.here>" http://localhost:<3000-or-BLOGSURA_NODE_PORT>/login`

**Endpoint Details**


    /login:
    post:
      summary: Get a JWT Token for a user based on email
      requestBody:
        required: true
        content:
          application/x-www-form-urlencoded:
            schema:
              type: object
              properties:
                email:
                    type: string
              required:
                - email
      responses: 
        '200':
          description: A JWT Token use for authentication
          content:
            text/plain:
              schema:
                type: string
                example: eyJ0eXAiO...OiJIUzI1NiJ9
        '400':
          description: An error.
          content:
            text/plain:
              schema:
                type: string
                example: Unable to find user
