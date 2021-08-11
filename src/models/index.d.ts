import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Qtype {
  BOOLEAN = "BOOLEAN",
  TEXT = "TEXT"
}

export enum Ptype {
  FAMILY = "FAMILY",
  STAFF = "STAFF",
  MANUAL = "MANUAL"
}

export enum Time {
  MORNING = "MORNING",
  AFTERNOON = "AFTERNOON"
}

export enum Content {
  HOME = "HOME",
  MENU = "MENU",
  MANUAL = "MANUAL",
  KEYPAD = "KEYPAD",
  PEOPLE = "PEOPLE",
  QUESTIONNAIRE = "QUESTIONNAIRE",
  SUMMARY = "SUMMARY"
}



type SettingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PersonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubmissionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Setting {
  readonly id: string;
  readonly title: string;
  readonly randomizeQuestions: boolean;
  readonly recordTemperature: boolean;
  readonly keepTemperature: boolean;
  readonly tempTolerance: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Setting, SettingMetaData>);
  static copyOf(source: Setting, mutator: (draft: MutableModel<Setting, SettingMetaData>) => MutableModel<Setting, SettingMetaData> | void): Setting;
}

export declare class Person {
  readonly id: string;
  readonly companyID?: number;
  readonly type: Ptype | keyof typeof Ptype;
  readonly fName: string;
  readonly lName: string;
  readonly Submissions: (Submission | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Person, PersonMetaData>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person, PersonMetaData>) => MutableModel<Person, PersonMetaData> | void): Person;
}

export declare class Submission {
  readonly id: string;
  readonly personID: string;
  readonly formType: Ptype | keyof typeof Ptype;
  readonly time: Time | keyof typeof Time;
  readonly questions: string[];
  readonly responses: string[];
  readonly temperature?: string;
  readonly passed: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Submission, SubmissionMetaData>);
  static copyOf(source: Submission, mutator: (draft: MutableModel<Submission, SubmissionMetaData>) => MutableModel<Submission, SubmissionMetaData> | void): Submission;
}

export declare class Question {
  readonly id: string;
  readonly index: number;
  readonly type: Qtype | keyof typeof Qtype;
  readonly question: string;
  readonly expectedResponse: string;
  readonly checkboxes: boolean[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Question, QuestionMetaData>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question, QuestionMetaData>) => MutableModel<Question, QuestionMetaData> | void): Question;
}