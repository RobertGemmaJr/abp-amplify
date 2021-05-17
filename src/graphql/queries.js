/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSettings = /* GraphQL */ `
  query GetSettings($id: ID!) {
    getSettings(id: $id) {
      id
      title
      randomized
      createdAt
      updatedAt
    }
  }
`;
export const listSettingss = /* GraphQL */ `
  query ListSettingss(
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        randomized
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestionBool = /* GraphQL */ `
  query GetQuestionBool($id: ID!) {
    getQuestionBool(id: $id) {
      id
      question
      response
      createdAt
      updatedAt
    }
  }
`;
export const listQuestionBools = /* GraphQL */ `
  query ListQuestionBools(
    $filter: ModelQuestionBoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionBools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        response
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestionStr = /* GraphQL */ `
  query GetQuestionStr($id: ID!) {
    getQuestionStr(id: $id) {
      id
      question
      response
      createdAt
      updatedAt
    }
  }
`;
export const listQuestionStrs = /* GraphQL */ `
  query ListQuestionStrs(
    $filter: ModelQuestionStrFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionStrs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        response
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
