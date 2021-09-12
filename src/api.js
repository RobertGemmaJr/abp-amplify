import { Predicates, SortDirection } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Setting, Person, Question, Submission } from "./models";

/********** CREATE **********/

export async function createPerson(person) {
  const res = await DataStore.save(
    new Person({
      companyID: person.companyID,
      type: person.type,
      fName: person.fName,
      lName: person.lName,
      Submissions: [],
    })
  );
  return res;
}

export async function createQuestion(question) {
  const res = await DataStore.save(
    new Question({
      index: question.index,
      type: question.type,
      question: question.question,
      expectedResponse: question.expectedResponse,
      checkboxes: question.checkboxes,
    })
  );
  return res;
}

export async function createSubmission(submission) {
  const res = await DataStore.save(
    new Submission({
      personID: submission.personID,
      formType: submission.formType,
      time: submission.time,
      questions: submission.questions,
      responses: submission.responses,
      temperature: submission.temperature,
      passed: submission.passed,
    })
  );
  console.log("Response", res, res.createdAt);
  return res;
}

/********* READ **********/

// Returns all models of type Setting
// There should be exactly 1 per user
export async function getSettings() {
  var models = await DataStore.query(Setting);

  // TODO: Move this to the auth sign-up listener
  if (!models.length) {
    await DataStore.save(
      new Setting({
        title: "Change Title in Menu",
        randomizeQuestions: true,
        recordTemperature: true,
        keepTemperature: true,
        tempTolerance: 2,
      })
    );
    models = await DataStore.query(Setting);
  } else if (models.length > 1) {
    console.error("Too many settings! Using first object", models);
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
    sort: (q) => q.index(SortDirection.ASCENDING),
  });
  return models;
}

// Returns a single question by id
export async function getQuestion(id) {
  return await DataStore.query(Question, id);
}

// Returns all models of type Response dated between the start and end date (inclusive)
export async function getSubmissionsByDate(startDate, endDate) {
  return (
    // Filter gt or eq startDate, less than or eq end date
    await DataStore.query(
      Submission,
      (s) =>
        s
          .createdAt("ge", new Date(startDate).toISOString())
          .createdAt("le", new Date(endDate).toISOString()),
      { sort: (s) => s.createdAt(SortDirection.ASCENDING) }
    )
  );
}

// Returns the submissions belonging to a given person
export async function getSubmissionsByPerson(personId) {
  return (await DataStore.query(Submission)).filter(
    (s) => s.personID === personId
  );
}

/********* UPDATE *********/

export async function updateSettings(original, newSettings) {
  return await DataStore.save(
    Setting.copyOf(original, (updated) => {
      updated.title = newSettings.title;
      updated.randomizeQuestions = newSettings.randomizeQuestions;
      updated.recordTemperature = newSettings.recordTemperature;
      updated.keepTemperature = newSettings.keepTemperature;
      updated.tempTolerance = newSettings.tempTolerance;
    })
  );
}
