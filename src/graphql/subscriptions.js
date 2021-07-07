/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($owner: String) {
    onCreateAccount(owner: $owner) {
      id
      title
      randomizeQuestions
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      People {
        items {
          id
          accountID
          type
          fName
          lName
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
      Questions {
        items {
          id
          accountID
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
        nextToken
        startedAt
      }
      Responses {
        items {
          id
          accountID
          personID
          date
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($owner: String) {
    onUpdateAccount(owner: $owner) {
      id
      title
      randomizeQuestions
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      People {
        items {
          id
          accountID
          type
          fName
          lName
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
      Questions {
        items {
          id
          accountID
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
        nextToken
        startedAt
      }
      Responses {
        items {
          id
          accountID
          personID
          date
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($owner: String) {
    onDeleteAccount(owner: $owner) {
      id
      title
      randomizeQuestions
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      People {
        items {
          id
          accountID
          type
          fName
          lName
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
      Questions {
        items {
          id
          accountID
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
        nextToken
        startedAt
      }
      Responses {
        items {
          id
          accountID
          personID
          date
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($owner: String) {
    onCreatePerson(owner: $owner) {
      id
      accountID
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
          accountID
          personID
          date
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($owner: String) {
    onUpdatePerson(owner: $owner) {
      id
      accountID
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
          accountID
          personID
          date
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($owner: String) {
    onDeletePerson(owner: $owner) {
      id
      accountID
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
          accountID
          personID
          date
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($owner: String) {
    onCreateQuestion(owner: $owner) {
      id
      accountID
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
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($owner: String) {
    onUpdateQuestion(owner: $owner) {
      id
      accountID
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
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($owner: String) {
    onDeleteQuestion(owner: $owner) {
      id
      accountID
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
  }
`;
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($owner: String) {
    onCreateResponse(owner: $owner) {
      id
      accountID
      personID
      date
      responses
      passed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse($owner: String) {
    onUpdateResponse(owner: $owner) {
      id
      accountID
      personID
      date
      responses
      passed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse($owner: String) {
    onDeleteResponse(owner: $owner) {
      id
      accountID
      personID
      date
      responses
      passed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
