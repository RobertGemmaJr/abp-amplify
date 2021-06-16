/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($owner: String!) {
    onCreatePerson(owner: $owner) {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($owner: String!) {
    onUpdatePerson(owner: $owner) {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($owner: String!) {
    onDeletePerson(owner: $owner) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($owner: String!) {
    onCreateQuestion(owner: $owner) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($owner: String!) {
    onUpdateQuestion(owner: $owner) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($owner: String!) {
    onDeleteQuestion(owner: $owner) {
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
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($owner: String!) {
    onCreateResponse(owner: $owner) {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse($owner: String!) {
    onUpdateResponse(owner: $owner) {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse($owner: String!) {
    onDeleteResponse(owner: $owner) {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($owner: String!) {
    onCreateAccount(owner: $owner) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($owner: String!) {
    onUpdateAccount(owner: $owner) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($owner: String!) {
    onDeleteAccount(owner: $owner) {
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
