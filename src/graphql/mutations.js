/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelpersonConditionInput
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
    $condition: ModelpersonConditionInput
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
    $condition: ModelpersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
