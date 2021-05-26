/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      type
      fName
      lName
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
        type
        fName
        lName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      type
      question
      response
      recordTemp
      familyMorning
      familyAfternoon
      staffMorning
      staffAfternoon
      manualMorning
      manualAfternoon
      createdAt
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        question
        response
        recordTemp
        familyMorning
        familyAfternoon
        staffMorning
        staffAfternoon
        manualMorning
        manualAfternoon
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      id
      date
      questions {
        id
        type
        question
        response
        recordTemp
        familyMorning
        familyAfternoon
        staffMorning
        staffAfternoon
        manualMorning
        manualAfternoon
        createdAt
        updatedAt
      }
      responses
      passed
      createdAt
      updatedAt
    }
  }
`;
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        questions {
          id
          type
          question
          response
          recordTemp
          familyMorning
          familyAfternoon
          staffMorning
          staffAfternoon
          manualMorning
          manualAfternoon
          createdAt
          updatedAt
        }
        responses
        passed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
