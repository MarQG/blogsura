import express, { Request, Response } from 'express';
import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';
import { getSdk } from './generated/graphql';
import { GraphQLClient } from 'graphql-request';

const app = express();
const port = process.env.NODE_PORT || 3000;
const adminKey = process.env.ADMIN_KEY || "myadminsecretkey";
const graphUrl = process.env.HASURA_URL || "http://localhost:8080/v1/graphql";
const client = new GraphQLClient(graphUrl, {
  headers: {
    'x-hasura-admin-secret': adminKey
  }
});

const sdk = getSdk(client);

// Server Configuration
app.use(express.json());
app.use(express.urlencoded());


const HASURA_OPERATION: String = `query Login($email: String) {
  User(where: {email: {_eq: $email}}) {
    email
    id
    role
    first_name
    last_name
    account_status
  }
}`;

const execute = async (variables: LoginArgs) => {
  const fetchResponse = await fetch('http://localhost:8080/v1/graphql', {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': adminKey
    },
    body: JSON.stringify({
      query: HASURA_OPERATION,
      variables,
    }),
  })
  const data = await fetchResponse.json()
  console.log('DEBUG: ', data)
  return data
};

const processUser = (user: LoginOutput) => {
  // return jwt token
};

// Request Handler
app.post('/login', async (req: Request, res: Response) => {
  console.log(req.body);
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
  
  // success
  return res.json(profile)
});

app.get('/test', async (req: Request, res: Response) => {
  const email = 'ferenc.g87@gmail.com';

  
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