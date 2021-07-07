// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Account, Person, Response, Question } = initSchema(schema);

export {
  Account,
  Person,
  Response,
  Question
};