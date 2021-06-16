import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Matrix {
  readonly id: string;
  readonly familyMorning: boolean;
  readonly familyAfternoon: boolean;
  readonly staffMorning: boolean;
  readonly staffAfternoon: boolean;
  readonly manualMorning: boolean;
  readonly manualAfternoon: boolean;
  constructor(init: ModelInit<Matrix>);
}

export declare class Person {
  readonly id: string;
  readonly type: string;
  readonly fName: string;
  readonly lName: string;
  readonly accountID?: string;
  readonly Responses?: (Response | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

export declare class Response {
  readonly id: string;
  readonly date: string;
  readonly responses?: string[];
  readonly passed: boolean;
  readonly accountID?: string;
  readonly personID?: string;
  readonly ResponseQuestions?: (ResponseQuestion | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Response>);
  static copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}

export declare class Question {
  readonly id: string;
  readonly type: string;
  readonly question: string;
  readonly response: string;
  readonly recordTemp?: boolean;
  readonly checkboxes: Matrix;
  readonly accountID?: string;
  readonly responses?: (ResponseQuestion | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class ResponseQuestion {
  readonly id: string;
  readonly response: Response;
  readonly question: Question;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ResponseQuestion>);
  static copyOf(source: ResponseQuestion, mutator: (draft: MutableModel<ResponseQuestion>) => MutableModel<ResponseQuestion> | void): ResponseQuestion;
}

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