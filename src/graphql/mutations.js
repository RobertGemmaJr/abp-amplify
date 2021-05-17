/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSettings = /* GraphQL */ `
  mutation CreateSettings(
    $input: CreateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    createSettings(input: $input, condition: $condition) {
      id
      title
      randomized
      createdAt
      updatedAt
    }
  }
`;
export const updateSettings = /* GraphQL */ `
  mutation UpdateSettings(
    $input: UpdateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    updateSettings(input: $input, condition: $condition) {
      id
      title
      randomized
      createdAt
      updatedAt
    }
  }
`;
export const deleteSettings = /* GraphQL */ `
  mutation DeleteSettings(
    $input: DeleteSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    deleteSettings(input: $input, condition: $condition) {
      id
      title
      randomized
      createdAt
      updatedAt
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
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
      name
      createdAt
      updatedAt
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
      name
      createdAt
      updatedAt
    }
  }
`;
export const createQuestionBool = /* GraphQL */ `
  mutation CreateQuestionBool(
    $input: CreateQuestionBoolInput!
    $condition: ModelQuestionBoolConditionInput
  ) {
    createQuestionBool(input: $input, condition: $condition) {
      id
      question
      response
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestionBool = /* GraphQL */ `
  mutation UpdateQuestionBool(
    $input: UpdateQuestionBoolInput!
    $condition: ModelQuestionBoolConditionInput
  ) {
    updateQuestionBool(input: $input, condition: $condition) {
      id
      question
      response
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestionBool = /* GraphQL */ `
  mutation DeleteQuestionBool(
    $input: DeleteQuestionBoolInput!
    $condition: ModelQuestionBoolConditionInput
  ) {
    deleteQuestionBool(input: $input, condition: $condition) {
      id
      question
      response
      createdAt
      updatedAt
    }
  }
`;
export const createQuestionStr = /* GraphQL */ `
  mutation CreateQuestionStr(
    $input: CreateQuestionStrInput!
    $condition: ModelQuestionStrConditionInput
  ) {
    createQuestionStr(input: $input, condition: $condition) {
      id
      question
      response
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestionStr = /* GraphQL */ `
  mutation UpdateQuestionStr(
    $input: UpdateQuestionStrInput!
    $condition: ModelQuestionStrConditionInput
  ) {
    updateQuestionStr(input: $input, condition: $condition) {
      id
      question
      response
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestionStr = /* GraphQL */ `
  mutation DeleteQuestionStr(
    $input: DeleteQuestionStrInput!
    $condition: ModelQuestionStrConditionInput
  ) {
    deleteQuestionStr(input: $input, condition: $condition) {
      id
      question
      response
      createdAt
      updatedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
