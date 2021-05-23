import { gql } from "graphql-request";

const Login = gql`
  query Login($email: String = "") {
    User(where: {email: {_eq: $email}}) {
      account_status
      email
      first_name
      id
      last_name
      role
    }
  }
`;