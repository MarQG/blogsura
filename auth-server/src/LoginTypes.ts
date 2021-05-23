type Maybe<T> = T | null

type uuid = string



type LoginOutput = {
  account_status: string
  email: string
  first_name: string
  id: uuid
  last_name: string
  role: string
}

type LoginInput = {
  email: string
}

type Query = {
  Login?: Maybe<LoginOutput>
}

type LoginArgs = {
  email?: Maybe<string>
}