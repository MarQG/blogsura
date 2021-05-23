import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** columns and relationships of "Account_Status" */
export type Account_Status = {
  __typename?: 'Account_Status';
  /** An array relationship */
  Users: Array<User>;
  /** An aggregated array relationship */
  Users_aggregate: User_Aggregate;
  comment: Scalars['String'];
  value: Scalars['String'];
};


/** columns and relationships of "Account_Status" */
export type Account_StatusUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "Account_Status" */
export type Account_StatusUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "Account_Status" */
export type Account_Status_Aggregate = {
  __typename?: 'Account_Status_aggregate';
  aggregate?: Maybe<Account_Status_Aggregate_Fields>;
  nodes: Array<Account_Status>;
};

/** aggregate fields of "Account_Status" */
export type Account_Status_Aggregate_Fields = {
  __typename?: 'Account_Status_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Account_Status_Max_Fields>;
  min?: Maybe<Account_Status_Min_Fields>;
};


/** aggregate fields of "Account_Status" */
export type Account_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Account_Status" */
export type Account_Status_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Status_Max_Order_By>;
  min?: Maybe<Account_Status_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Account_Status" */
export type Account_Status_Arr_Rel_Insert_Input = {
  data: Array<Account_Status_Insert_Input>;
  on_conflict?: Maybe<Account_Status_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Account_Status". All fields are combined with a logical 'AND'. */
export type Account_Status_Bool_Exp = {
  Users?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Account_Status_Bool_Exp>>>;
  _not?: Maybe<Account_Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Account_Status_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Account_Status" */
export enum Account_Status_Constraint {
  /** unique or primary key constraint */
  AccountStatusPkey = 'Account_Status_pkey'
}

/** input type for inserting data into table "Account_Status" */
export type Account_Status_Insert_Input = {
  Users?: Maybe<User_Arr_Rel_Insert_Input>;
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Account_Status_Max_Fields = {
  __typename?: 'Account_Status_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Account_Status" */
export type Account_Status_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Status_Min_Fields = {
  __typename?: 'Account_Status_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Account_Status" */
export type Account_Status_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "Account_Status" */
export type Account_Status_Mutation_Response = {
  __typename?: 'Account_Status_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Account_Status>;
};

/** input type for inserting object relation for remote table "Account_Status" */
export type Account_Status_Obj_Rel_Insert_Input = {
  data: Account_Status_Insert_Input;
  on_conflict?: Maybe<Account_Status_On_Conflict>;
};

/** on conflict condition type for table "Account_Status" */
export type Account_Status_On_Conflict = {
  constraint: Account_Status_Constraint;
  update_columns: Array<Account_Status_Update_Column>;
  where?: Maybe<Account_Status_Bool_Exp>;
};

/** ordering options when selecting data from "Account_Status" */
export type Account_Status_Order_By = {
  Users_aggregate?: Maybe<User_Aggregate_Order_By>;
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "Account_Status" */
export type Account_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "Account_Status" */
export enum Account_Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "Account_Status" */
export type Account_Status_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "Account_Status" */
export enum Account_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "Article" */
export type Article = {
  __typename?: 'Article';
  /** An object relationship */
  User: User;
  author: Scalars['uuid'];
  created_timestamp: Scalars['timestamptz'];
  edited_timestamp?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  message: Scalars['String'];
  title: Scalars['String'];
};

/** aggregated selection of "Article" */
export type Article_Aggregate = {
  __typename?: 'Article_aggregate';
  aggregate?: Maybe<Article_Aggregate_Fields>;
  nodes: Array<Article>;
};

/** aggregate fields of "Article" */
export type Article_Aggregate_Fields = {
  __typename?: 'Article_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Article_Max_Fields>;
  min?: Maybe<Article_Min_Fields>;
};


/** aggregate fields of "Article" */
export type Article_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Article_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Article" */
export type Article_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Article_Max_Order_By>;
  min?: Maybe<Article_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Article" */
export type Article_Arr_Rel_Insert_Input = {
  data: Array<Article_Insert_Input>;
  on_conflict?: Maybe<Article_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Article". All fields are combined with a logical 'AND'. */
export type Article_Bool_Exp = {
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Article_Bool_Exp>>>;
  _not?: Maybe<Article_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Article_Bool_Exp>>>;
  author?: Maybe<Uuid_Comparison_Exp>;
  created_timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  edited_timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Article" */
export enum Article_Constraint {
  /** unique or primary key constraint */
  ArticlePkey = 'Article_pkey'
}

/** input type for inserting data into table "Article" */
export type Article_Insert_Input = {
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  author?: Maybe<Scalars['uuid']>;
  created_timestamp?: Maybe<Scalars['timestamptz']>;
  edited_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Article_Max_Fields = {
  __typename?: 'Article_max_fields';
  author?: Maybe<Scalars['uuid']>;
  created_timestamp?: Maybe<Scalars['timestamptz']>;
  edited_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Article" */
export type Article_Max_Order_By = {
  author?: Maybe<Order_By>;
  created_timestamp?: Maybe<Order_By>;
  edited_timestamp?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Article_Min_Fields = {
  __typename?: 'Article_min_fields';
  author?: Maybe<Scalars['uuid']>;
  created_timestamp?: Maybe<Scalars['timestamptz']>;
  edited_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Article" */
export type Article_Min_Order_By = {
  author?: Maybe<Order_By>;
  created_timestamp?: Maybe<Order_By>;
  edited_timestamp?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "Article" */
export type Article_Mutation_Response = {
  __typename?: 'Article_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Article>;
};

/** input type for inserting object relation for remote table "Article" */
export type Article_Obj_Rel_Insert_Input = {
  data: Article_Insert_Input;
  on_conflict?: Maybe<Article_On_Conflict>;
};

/** on conflict condition type for table "Article" */
export type Article_On_Conflict = {
  constraint: Article_Constraint;
  update_columns: Array<Article_Update_Column>;
  where?: Maybe<Article_Bool_Exp>;
};

/** ordering options when selecting data from "Article" */
export type Article_Order_By = {
  User?: Maybe<User_Order_By>;
  author?: Maybe<Order_By>;
  created_timestamp?: Maybe<Order_By>;
  edited_timestamp?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "Article" */
export type Article_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Article" */
export enum Article_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  EditedTimestamp = 'edited_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "Article" */
export type Article_Set_Input = {
  author?: Maybe<Scalars['uuid']>;
  created_timestamp?: Maybe<Scalars['timestamptz']>;
  edited_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "Article" */
export enum Article_Update_Column {
  /** column name */
  Author = 'author',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  EditedTimestamp = 'edited_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  Title = 'title'
}

export type LoginInput = {
  email: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  account_status: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  role: Scalars['String'];
};

/** columns and relationships of "Role" */
export type Role = {
  __typename?: 'Role';
  /** An array relationship */
  Users: Array<User>;
  /** An aggregated array relationship */
  Users_aggregate: User_Aggregate;
  comment: Scalars['String'];
  value: Scalars['String'];
};


/** columns and relationships of "Role" */
export type RoleUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "Role" */
export type RoleUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "Role" */
export type Role_Aggregate = {
  __typename?: 'Role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "Role" */
export type Role_Aggregate_Fields = {
  __typename?: 'Role_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "Role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Role" */
export type Role_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Role_Max_Order_By>;
  min?: Maybe<Role_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Role" */
export type Role_Arr_Rel_Insert_Input = {
  data: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  Users?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Role_Bool_Exp>>>;
  _not?: Maybe<Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Role_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Role" */
export enum Role_Constraint {
  /** unique or primary key constraint */
  RolePkey = 'Role_pkey'
}

/** input type for inserting data into table "Role" */
export type Role_Insert_Input = {
  Users?: Maybe<User_Arr_Rel_Insert_Input>;
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'Role_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Role" */
export type Role_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'Role_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Role" */
export type Role_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "Role" */
export type Role_Mutation_Response = {
  __typename?: 'Role_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "Role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};

/** on conflict condition type for table "Role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns: Array<Role_Update_Column>;
  where?: Maybe<Role_Bool_Exp>;
};

/** ordering options when selecting data from "Role" */
export type Role_Order_By = {
  Users_aggregate?: Maybe<User_Aggregate_Order_By>;
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "Role" */
export type Role_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "Role" */
export enum Role_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "Role" */
export type Role_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "Role" */
export enum Role_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An object relationship */
  Account_Status: Account_Status;
  /** An array relationship */
  Articles: Array<Article>;
  /** An aggregated array relationship */
  Articles_aggregate: Article_Aggregate;
  /** An object relationship */
  Role: Role;
  account_status: Scalars['String'];
  created_timestamp: Scalars['timestamptz'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  role: Scalars['String'];
};


/** columns and relationships of "User" */
export type UserArticlesArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserArticles_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "User" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Account_Status?: Maybe<Account_Status_Bool_Exp>;
  Articles?: Maybe<Article_Bool_Exp>;
  Role?: Maybe<Role_Bool_Exp>;
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  account_status?: Maybe<String_Comparison_Exp>;
  created_timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'User_email_key',
  /** unique or primary key constraint */
  UserPkey = 'User_pkey'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Account_Status?: Maybe<Account_Status_Obj_Rel_Insert_Input>;
  Articles?: Maybe<Article_Arr_Rel_Insert_Input>;
  Role?: Maybe<Role_Obj_Rel_Insert_Input>;
  account_status?: Maybe<Scalars['String']>;
  created_timestamp?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  account_status?: Maybe<Scalars['String']>;
  created_timestamp?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  account_status?: Maybe<Order_By>;
  created_timestamp?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  account_status?: Maybe<Scalars['String']>;
  created_timestamp?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "User" */
export type User_Min_Order_By = {
  account_status?: Maybe<Order_By>;
  created_timestamp?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "User" */
export type User_Order_By = {
  Account_Status?: Maybe<Account_Status_Order_By>;
  Articles_aggregate?: Maybe<Article_Aggregate_Order_By>;
  Role?: Maybe<Role_Order_By>;
  account_status?: Maybe<Order_By>;
  created_timestamp?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** primary key columns input for table: "User" */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  AccountStatus = 'account_status',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  account_status?: Maybe<Scalars['String']>;
  created_timestamp?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  AccountStatus = 'account_status',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Role = 'role'
}


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Account_Status" */
  delete_Account_Status?: Maybe<Account_Status_Mutation_Response>;
  /** delete single row from the table: "Account_Status" */
  delete_Account_Status_by_pk?: Maybe<Account_Status>;
  /** delete data from the table: "Article" */
  delete_Article?: Maybe<Article_Mutation_Response>;
  /** delete single row from the table: "Article" */
  delete_Article_by_pk?: Maybe<Article>;
  /** delete data from the table: "Role" */
  delete_Role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "Role" */
  delete_Role_by_pk?: Maybe<Role>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Account_Status" */
  insert_Account_Status?: Maybe<Account_Status_Mutation_Response>;
  /** insert a single row into the table: "Account_Status" */
  insert_Account_Status_one?: Maybe<Account_Status>;
  /** insert data into the table: "Article" */
  insert_Article?: Maybe<Article_Mutation_Response>;
  /** insert a single row into the table: "Article" */
  insert_Article_one?: Maybe<Article>;
  /** insert data into the table: "Role" */
  insert_Role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "Role" */
  insert_Role_one?: Maybe<Role>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Account_Status" */
  update_Account_Status?: Maybe<Account_Status_Mutation_Response>;
  /** update single row of the table: "Account_Status" */
  update_Account_Status_by_pk?: Maybe<Account_Status>;
  /** update data of the table: "Article" */
  update_Article?: Maybe<Article_Mutation_Response>;
  /** update single row of the table: "Article" */
  update_Article_by_pk?: Maybe<Article>;
  /** update data of the table: "Role" */
  update_Role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "Role" */
  update_Role_by_pk?: Maybe<Role>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_Account_StatusArgs = {
  where: Account_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ArticleArgs = {
  where: Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Article_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Account_StatusArgs = {
  objects: Array<Account_Status_Insert_Input>;
  on_conflict?: Maybe<Account_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_Status_OneArgs = {
  object: Account_Status_Insert_Input;
  on_conflict?: Maybe<Account_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ArticleArgs = {
  objects: Array<Article_Insert_Input>;
  on_conflict?: Maybe<Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Article_OneArgs = {
  object: Article_Insert_Input;
  on_conflict?: Maybe<Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Account_StatusArgs = {
  _set?: Maybe<Account_Status_Set_Input>;
  where: Account_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_Status_By_PkArgs = {
  _set?: Maybe<Account_Status_Set_Input>;
  pk_columns: Account_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ArticleArgs = {
  _set?: Maybe<Article_Set_Input>;
  where: Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Article_By_PkArgs = {
  _set?: Maybe<Article_Set_Input>;
  pk_columns: Article_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: Maybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: Maybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Account_Status" */
  Account_Status: Array<Account_Status>;
  /** fetch aggregated fields from the table: "Account_Status" */
  Account_Status_aggregate: Account_Status_Aggregate;
  /** fetch data from the table: "Account_Status" using primary key columns */
  Account_Status_by_pk?: Maybe<Account_Status>;
  /** fetch data from the table: "Article" */
  Article: Array<Article>;
  /** fetch aggregated fields from the table: "Article" */
  Article_aggregate: Article_Aggregate;
  /** fetch data from the table: "Article" using primary key columns */
  Article_by_pk?: Maybe<Article>;
  /** perform the action: "Login" */
  Login?: Maybe<LoginOutput>;
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


/** query root */
export type Query_RootAccount_StatusArgs = {
  distinct_on?: Maybe<Array<Account_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Status_Order_By>>;
  where?: Maybe<Account_Status_Bool_Exp>;
};


/** query root */
export type Query_RootAccount_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Status_Order_By>>;
  where?: Maybe<Account_Status_Bool_Exp>;
};


/** query root */
export type Query_RootAccount_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootArticleArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};


/** query root */
export type Query_RootArticle_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};


/** query root */
export type Query_RootArticle_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootLoginArgs = {
  email?: Maybe<Scalars['String']>;
};


/** query root */
export type Query_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** query root */
export type Query_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** query root */
export type Query_RootRole_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Account_Status" */
  Account_Status: Array<Account_Status>;
  /** fetch aggregated fields from the table: "Account_Status" */
  Account_Status_aggregate: Account_Status_Aggregate;
  /** fetch data from the table: "Account_Status" using primary key columns */
  Account_Status_by_pk?: Maybe<Account_Status>;
  /** fetch data from the table: "Article" */
  Article: Array<Article>;
  /** fetch aggregated fields from the table: "Article" */
  Article_aggregate: Article_Aggregate;
  /** fetch data from the table: "Article" using primary key columns */
  Article_by_pk?: Maybe<Article>;
  /** perform the action: "Login" */
  Login?: Maybe<LoginOutput>;
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


/** subscription root */
export type Subscription_RootAccount_StatusArgs = {
  distinct_on?: Maybe<Array<Account_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Status_Order_By>>;
  where?: Maybe<Account_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccount_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Status_Order_By>>;
  where?: Maybe<Account_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccount_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootArticleArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootArticle_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootArticle_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootLoginArgs = {
  email?: Maybe<Scalars['String']>;
};


/** subscription root */
export type Subscription_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type LoginQueryVariables = Exact<{
  email?: Maybe<Scalars['String']>;
}>;


export type LoginQuery = (
  { __typename?: 'query_root' }
  & { User: Array<(
    { __typename?: 'User' }
    & Pick<User, 'account_status' | 'email' | 'first_name' | 'id' | 'last_name' | 'role'>
  )> }
);


export const LoginDocument = gql`
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const LoginDocumentString = print(LoginDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Login(variables?: LoginQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: LoginQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<LoginQuery>(LoginDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Login');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;