import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Qtype {
  BOOLEAN = "BOOLEAN",
  TEXT = "TEXT",
  TEMP = "TEMP",
  TEMP_CHECKBOX = "TEMP_CHECKBOX"
}

export enum Ptype {
  NONE = "NONE",
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



export declare class Setting {
  readonly id: string;
  readonly title: string;
  readonly randomizeQuestions: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Setting>);
  static copyOf(source: Setting, mutator: (draft: MutableModel<Setting>) => MutableModel<Setting> | void): Setting;
}

export declare class Person {
  readonly id: string;
  readonly companyID?: number;
  readonly type: Ptype | keyof typeof Ptype;
  readonly fName: string;
  readonly lName: string;
  readonly Submissions?: Submission[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

export declare class Submission {
  readonly id: string;
  readonly personID: string;
  readonly createdAt: string;
  readonly formType: Ptype | keyof typeof Ptype;
  readonly time: Time | keyof typeof Time;
  readonly questions: string[];
  readonly responses: string[];
  readonly passed: boolean;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Submission>);
  static copyOf(source: Submission, mutator: (draft: MutableModel<Submission>) => MutableModel<Submission> | void): Submission;
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
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}