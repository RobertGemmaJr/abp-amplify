import { DataStore } from '@aws-amplify/datastore';
import { Setting, Person, } from './models';

// import { questions } from './constants/tempDatabase';

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
  
export async function getPeople() {
  return await DataStore.query(Person);
}