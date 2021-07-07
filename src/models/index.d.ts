import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Account {
  readonly id: string;
  readonly title: string;
  readonly randomizeQuestions: boolean;
  readonly People?: (Person | null)[];
  readonly Questions?: (Question | null)[];
  readonly Responses?: (Response | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Account>);
  static copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

export declare class Person {
  readonly id: string;
  readonly accountID: string;
  readonly type: number;
  readonly fName?: string;
  readonly lName: string;
  readonly Responses?: (Response | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

export declare class Response {
  readonly id: string;
  readonly accountID: string;
  readonly personID: string;
  readonly date: string;
  readonly responses: string[];
  readonly passed: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Response>);
  static copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}

export declare class Question {
  readonly id: string;
  readonly accountID: string;
  readonly type: number;
  readonly question: string;
  readonly expectedResponse: string;
  readonly checkboxes?: string[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}