import { Predicates, SortDirection } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Setting, Person, Question, Response } from './models';

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
  } else if (models.length > 1) console.error("Too many settings! Using first object")
    // TODO: This error is happening
  return models[0];
}

// Returns all models of type Setting
export async function getPeople() {
  return await DataStore.query(Person);
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
export async function getResponses(startDate, endDate) {
  return await DataStore.query(Response)
}