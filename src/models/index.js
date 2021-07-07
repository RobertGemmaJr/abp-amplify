// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Qtype = {
  "BOOLEAN": "BOOLEAN",
  "TEXT": "TEXT",
  "TEMP": "TEMP",
  "TEMP_CHECKBOX": "TEMP_CHECKBOX"
};

const Ptype = {
  "NONE": "NONE",
  "FAMILY": "FAMILY",
  "STAFF": "STAFF",
  "MANUAL": "MANUAL"
};

const Time = {
  "MORNING": "MORNING",
  "AFTERNOON": "AFTERNOON"
};

const { Account, Person, Response, Question } = initSchema(schema);

export {
  Account,
  Person,
  Response,
  Question,
  Qtype,
  Ptype,
  Time
};