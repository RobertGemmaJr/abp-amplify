/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
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
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
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
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
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
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
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
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
