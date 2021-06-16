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
      owner
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
        owner
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
      checkboxes {
        id
        familyMorning
        familyAfternoon
        staffMorning
        staffAfternoon
        manualMorning
        manualAfternoon
      }
      createdAt
      updatedAt
      owner
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
        checkboxes {
          id
          familyMorning
          familyAfternoon
          staffMorning
          staffAfternoon
          manualMorning
          manualAfternoon
        }
        createdAt
        updatedAt
        owner
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
        checkboxes {
          id
          familyMorning
          familyAfternoon
          staffMorning
          staffAfternoon
          manualMorning
          manualAfternoon
        }
        createdAt
        updatedAt
        owner
      }
      responses
      passed
      createdAt
      updatedAt
      owner
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
          createdAt
          updatedAt
          owner
        }
        responses
        passed
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      title
      randomizeQuestions
      people {
        id
        type
        fName
        lName
        createdAt
        updatedAt
        owner
      }
      questions {
        id
        type
        question
        response
        recordTemp
        checkboxes {
          id
          familyMorning
          familyAfternoon
          staffMorning
          staffAfternoon
          manualMorning
          manualAfternoon
        }
        createdAt
        updatedAt
        owner
      }
      responses {
        id
        date
        questions {
          id
          type
          question
          response
          recordTemp
          createdAt
          updatedAt
          owner
        }
        responses
        passed
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        randomizeQuestions
        people {
          id
          type
          fName
          lName
          createdAt
          updatedAt
          owner
        }
        questions {
          id
          type
          question
          response
          recordTemp
          createdAt
          updatedAt
          owner
        }
        responses {
          id
          date
          responses
          passed
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
