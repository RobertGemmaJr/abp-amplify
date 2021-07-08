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



export declare class Settings {
  readonly id: string;
  readonly title: string;
  readonly randomizeQuestions: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Settings>);
  static copyOf(source: Settings, mutator: (draft: MutableModel<Settings>) => MutableModel<Settings> | void): Settings;
}

export declare class Person {
  readonly id: string;
  readonly type: Ptype | keyof typeof Ptype;
  readonly fName: string;
  readonly lName: string;
  readonly Responses?: Response[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

export declare class Response {
  readonly id: string;
  readonly personID: string;
  readonly date: string;
  readonly formType: Ptype | keyof typeof Ptype;
  readonly time: Time | keyof typeof Time;
  readonly responses: string[];
  readonly passed: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Response>);
  static copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}

export declare class Question {
  readonly id: string;
  readonly type: Qtype | keyof typeof Qtype;
  readonly question: string;
  readonly expectedResponse: string;
  readonly checkboxes?: string[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}