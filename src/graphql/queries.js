/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSettings = /* GraphQL */ `
  query GetSettings($id: ID!) {
    getSettings(id: $id) {
      id
      title
      randomizeQuestions
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        randomizeQuestions
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSettings = /* GraphQL */ `
  query SyncSettings(
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        randomizeQuestions
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      type
      fName
      lName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      Responses {
        items {
          id
          personID
          date
          formType
          time
          responses
          passed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        fName
        lName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        Responses {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPeople = /* GraphQL */ `
  query SyncPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        fName
        lName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        Responses {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      type
      question
      expectedResponse
      checkboxes
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      responses {
        items {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
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
        expectedResponse
        checkboxes
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        responses {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        question
        expectedResponse
        checkboxes
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        responses {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      id
      personID
      date
      formType
      time
      responses
      passed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      questions {
        items {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
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
        personID
        date
        formType
        time
        responses
        passed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        questions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncResponses = /* GraphQL */ `
  query SyncResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        personID
        date
        formType
        time
        responses
        passed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        questions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncResponseQuestions = /* GraphQL */ `
  query SyncResponseQuestions(
    $filter: ModelResponseQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResponseQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        question {
          id
          type
          question
          expectedResponse
          checkboxes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        response {
          id
          personID
          date
          formType
          time
          responses
          passed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
