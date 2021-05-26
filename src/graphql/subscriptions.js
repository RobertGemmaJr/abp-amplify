/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
      id
      type
      fName
      lName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
      id
      type
      fName
      lName
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
      id
      type
      fName
      lName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateSettings = /* GraphQL */ `
  subscription OnCreateSettings {
    onCreateSettings {
      id
      title
      randomized
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSettings = /* GraphQL */ `
  subscription OnUpdateSettings {
    onUpdateSettings {
      id
      title
      randomized
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSettings = /* GraphQL */ `
  subscription OnDeleteSettings {
    onDeleteSettings {
      id
      title
      randomized
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse {
    onCreateResponse {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse {
    onUpdateResponse {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse {
    onDeleteResponse {
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
