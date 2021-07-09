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
  console.log(models)

  if(!models.length) {
    console.log("empty")

    for(let i=0; i < questions.length; i++) {
      await DataStore.save(
        new Question({
          "index": questions[i].index,
          "type": questions[i].type,
          "question": questions[i].question,
          "expectedResponse": questions[i].expectedResponse,
          "checkboxes":  questions[i].checkboxes
      })
    )}
    // questions.forEach(q => {
    //   await DataStore.save(
    //     new Question({
    //       "index": q.index,
    //       "type": q.type,
    //       "question": q.question,
    //       "expectedResponse": q.expectedResponse,
    //       "checkboxes":  q.checkboxes
    //   })
    // );   
    // })
  } else {
    console.log("questions", models)

    // models.forEach(m => {
    //   DataStore.delete(m); // TEMP
    // })
  }



  
  return models
  // return await DataStore.query(Question)
}

// Returns all models of type Response dated between the start and end date
export async function getResponses(startDate, endDate) {
  return await DataStore.query(Response)
}