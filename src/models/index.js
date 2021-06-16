// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Person, Response, Question, ResponseQuestion, Account, Matrix } = initSchema(schema);

export {
  Person,
  Response,
  Question,
  ResponseQuestion,
  Account,
  Matrix
};