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
  "FAMILY": "FAMILY",
  "STAFF": "STAFF",
  "MANUAL": "MANUAL"
};

const Time = {
  "MORNING": "MORNING",
  "AFTERNOON": "AFTERNOON"
};

const Content = {
  "HOME": "HOME",
  "MENU": "MENU",
  "MANUAL": "MANUAL",
  "KEYPAD": "KEYPAD",
  "PEOPLE": "PEOPLE",
  "QUESTIONNAIRE": "QUESTIONNAIRE",
  "SUMMARY": "SUMMARY"
};

const { Setting, Person, Submission, Question } = initSchema(schema);

export {
  Setting,
  Person,
  Submission,
  Question,
  Qtype,
  Ptype,
  Time,
  Content
};