import { Predicates, SortDirection } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Setting, Person, Question, Submission } from './models';

/********* READ **********/

// Returns all models of type Setting
// There should be exactly 1 per user
export async function getSettings() {
  var models = await DataStore.query(Setting);

  if (!models.length) {
    // If no settings have been created, make initial one
    await DataStore.save(
      new Setting({
        "title": "Change Title in Menu",
        "randomizeQuestions": true
      })
    );
    models = await DataStore.query(Setting)    
  } else if (models.length > 1) {
    // TODO: This error is happening
    console.error("Too many settings! Using first object", models)
  }
  return models[0];
}

// Returns all models of type Setting
export async function getPeople() {
  return await DataStore.query(Person);
}

// Returns a single person by id
export async function getPerson(id) {
  return await DataStore.query(Person, id);
}

// Returns all models of type Question
// Questions are sorted by index
export async function getQuestions() {
  const models = await DataStore.query(Question, Predicates.ALL, {
    sort: q => q.index(SortDirection.ASCENDING)
  });
  return models
}

// Returns all models of type Response dated between the start and end date
export async function getSubmissions(startDate, endDate) {
  return await DataStore.query(Submission)
}

/********** CREATE **********/

export async function createSubmission(submission) {
  const res = new Submission({
    "personID": submission.personID,
    "formType": submission.formType,
    "time": submission.time,
    "questions": submission.questions,
    "responses": submission.responses,
    "passed": submission.passed,
  })
  await DataStore.save(res)

  // const models = await DataStore.query(Response)
  // console.log("MODELS CHECK", models)
  return res;
}