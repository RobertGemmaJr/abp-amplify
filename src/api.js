import { DataStore } from '@aws-amplify/datastore';
import { Setting, Person, Question, Response } from './models';

import { questions } from './constants/tempDatabase';

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

  return models[0];
}

// Returns all models of type Setting
export async function getPeople() {
  return await DataStore.query(Person);
}

// Returns all models of type Question
export async function getQuestions() {
  const models = await DataStore.query(Question);

  if(!models.length) {
    console.log("empty")
    questions.forEach(q => {
      console.log(q)
    })
  }
  return
  // return await DataStore.query(Question)
}

// Returns all models of type Response dated between the start and end date
export async function getResponses(startDate, endDate) {
  return await DataStore.query(Response)
}