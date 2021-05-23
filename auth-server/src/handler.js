"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const app = express_1.default();
const port = process.env.NODE_PORT || 3000;
const HASURA_OPERATION = `query Login($email: String = "ferenc.g87@gmail.com") {
  User(where: {email: {_eq: $email}}) {
    email
    id
    role
    first_name
    last_name
    account_status
  }
}`;
const execute = async (variables) => {
    const fetchResponse = await node_fetch_1.default('http://localhost:8080/v1/graphql', {
        method: 'POST',
        body: JSON.stringify({
            query: HASURA_OPERATION,
            variables,
        }),
    });
    const data = await fetchResponse.json();
    console.log('DEBUG: ', data);
    return data;
};
// Request Handler
app.post('/Login', async (req, res) => {
    // get request input
    const params = req.body.input;
    // execute the parent operation in Hasura
    const { data, errors } = await execute(params);
    if (errors)
        return res.status(400).json(errors[0]);
    // run some business logic
    // success
    return res.json(data);
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
app.on("error", (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('server startup error: address already in use');
    }
    else {
        console.log(err);
    }
});
