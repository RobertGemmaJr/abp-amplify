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
    }
  }
`;
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($owner: String) {
    onCreatePerson(owner: $owner) {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($owner: String) {
    onUpdatePerson(owner: $owner) {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($owner: String) {
    onDeletePerson(owner: $owner) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($owner: String) {
    onCreateQuestion(owner: $owner) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($owner: String) {
    onUpdateQuestion(owner: $owner) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($owner: String) {
    onDeleteQuestion(owner: $owner) {
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
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($owner: String) {
    onCreateResponse(owner: $owner) {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse($owner: String) {
    onUpdateResponse(owner: $owner) {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse($owner: String) {
    onDeleteResponse(owner: $owner) {
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
export const onCreateResponseQuestion = /* GraphQL */ `
  subscription OnCreateResponseQuestion($owner: String) {
    onCreateResponseQuestion(owner: $owner) {
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
        responses {
          nextToken
          startedAt
        }
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
        questions {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateResponseQuestion = /* GraphQL */ `
  subscription OnUpdateResponseQuestion($owner: String) {
    onUpdateResponseQuestion(owner: $owner) {
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
        responses {
          nextToken
          startedAt
        }
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
        questions {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteResponseQuestion = /* GraphQL */ `
  subscription OnDeleteResponseQuestion($owner: String) {
    onDeleteResponseQuestion(owner: $owner) {
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
        responses {
          nextToken
          startedAt
        }
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
        questions {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
