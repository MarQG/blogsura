import { config } from './config/config';
import express, { Request, Response } from 'express';
import { getSdk } from './generated/graphql';
import { GraphQLClient } from 'graphql-request';
import jwt from 'jwt-simple';

const app = express();

const { port, adminKey, graphqlURL, jwtSecret} = config;

// Establish Hasura GraphQL Client
const client = new GraphQLClient(graphqlURL, {
  headers: {
    'x-hasura-admin-secret': adminKey
  }
});

// Create SDK
const sdk = getSdk(client);

// Server Configuration
app.use(express.urlencoded({ extended: true}));

/**
 * processUserToJWT
 * @param user
 * Takes a full user profile retrieved from and processes it into a JWT Token with role formatted for Hasura.
 *
 * @returns base64 JWTToken
 */
const processUserToJWT = (user: LoginOutput) => {
  const userCredentials = {
    sub: user.email,
    name: `${user.first_name} ${user.last_name}`,
    admin: false,
    iat: new Date().getTime()/1000,
    hasura: {
      claims: {
        "x-hasura-allowed-roles": ["anonymous","user", "moderator"],
        "x-hasura-default-role": user.role,
        "x-hasura-user-id": user.id,
      }
    }
  };
  const jwToken = jwt.encode(userCredentials, jwtSecret);
  return jwToken;
};

// /login
// Takes an email parameter and returns a jwt token if a user is found. Otherwise it will return an error.
// Input: Content-Type: application/x-www-form-urlencoded email=youremail@email.com
// Responses:
app.post('/login', async (req: Request, res: Response) => {
  if (req.body.email === undefined) return res.status(400).json({
    "error": `email is required: ${req.body.email}`
  });
  // get request input
  const params: LoginArgs = req.body;
  // execute the parent operation in Hasura
  const {data, errors} = await sdk.Login(params);

  if(errors) return res.status(400).send(errors[0]);

  if(data?.User === undefined) return res.status(400).send("Unexpected error. Try again.");

  if(data.User.length === 0) return res.status(404).send("Unable to find user");

  const profile = data.User[0];

  if(profile.account_status === "disabled") return res.status(400).send(`Account is disabled: ${params}`);

  const profileToken = processUserToJWT(profile);
  // success
  return res.json(profileToken);
});


app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

app.on("error", (err: any) => {
  if (err.code === 'EADDRINUSE') {
    console.log('server startup error: address already in use');
  }
  else {
    console.log(err);
  }
});