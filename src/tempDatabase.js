import { Qtype, Ptype, Time } from "./models"
import { Person, Question } from "./models"
import { DataStore } from "@aws-amplify/datastore"

export async function getData() {
    await Promise.all(people.map(async (p) => {
        console.log(p.type, p.fName, p.lName, p.companyID)

        const newP = new Person({
            companyID: -1,
            type: p.type,
            fName: p.fName,
            lName: p.lName,
            Submissions: [],
        })
        console.log(newP)
        // const res = await DataStore.save(newP)
     }))

    await Promise.all(questions.map(async (q) => {

        const newQ = new Question({
            index: q.index,
            type: q.type,
            question: q.question,
            expectedResponse: q.expectedResponse,
            checkboxes: q.checkboxes,
        })
        console.log(newQ)
        // const res = await DataStore.save(newQ)
    }))
}

// All of the people associated with the account
export const people = [
    {

        type: Ptype.FAMILY,
        fName: "Robert",
        lName: "Gemma",
    },
    {

        type: Ptype.FAMILY,
        fName: "Carl",
        lName: "Salvo",
    },
    {

        type: Ptype.FAMILY,
        fName: "Anthony",
        lName: "Dutra",
    },
    {

        type: Ptype.STAFF,
        fName: "Robert",
        lName: "Gemma",
    },
    {

        type: Ptype.STAFF,
        fName: "Carl",
        lName: "Salvo",
    },
    {

        type: Ptype.STAFF,
        fName: "Anthony",
        lName: "Dutra",
    },
    {

        type: Ptype.MANUAL,
        fName: "First Name",
        lName: "Last Name",
    },
]

// All of the questions associated with the account
export const questions = [
    {
        index: 1,
        type: Qtype.BOOLEAN,
        question: "Cough?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, true, true],
    },
    {
        index: 2,
        type: Qtype.BOOLEAN,
        question: "Shortness of breath or difficulty breathing?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, true, false],
    },
    {
        index: 3,
        type: Qtype.BOOLEAN,
        question: "Body Aches?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, false, true],
    },
    {
        index: 4,
        type: Qtype.BOOLEAN,
        question: "Chills?",
        expectedResponse: "No",
        checkboxes: [true, true, true, false, true, true],
    },
    {
        index: 5,
        type: Qtype.BOOLEAN,
        question: "Runny Nose or Stuffy Nose?",
        expectedResponse: "No",
        checkboxes: [true, true, false, true, true, true],
    },
    {
        index: 6,
        type: Qtype.BOOLEAN,
        question: "Sore throat?",
        expectedResponse: "No",
        checkboxes: [true, false, true, true, true, true],
    },
    {
        index: 7,
        type: Qtype.BOOLEAN,
        question: "Diarrhea / GI Gastrointestinal Illness?",
        expectedResponse: "No",
        checkboxes: [false, true, true, true, true, true],
    },
    {
        index: 8,
        type: Qtype.BOOLEAN,
        question: "Has anyone in your household been diagnosed with Covid-19?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, false, false],
    },
    {
        index: 9,
        type: Qtype.BOOLEAN,
        question: "Have you had any visitors in your home from out of the state?",
        expectedResponse: "No",
        checkboxes: [true, true, true, false, false, false],
    },
    {
        index: 10,
        type: Qtype.BOOLEAN,
        question: "Has anyone in your household travelled to a red state in the past two weeks?",
        expectedResponse: "No",
        checkboxes: [true, true, false, false, false, false],
    },
    {
        index: 11,
        type: Qtype.BOOLEAN,
        question: "Have you been asked by any public health authority to self isolate or quarantine in the last 48 hours?",
        expectedResponse: "No",
        checkboxes: [true, false, false, false, false, false],
    },
    {
        index: 12,
        type: Qtype.BOOLEAN,
        question: "Has anyone in your household been exposed to anyone testing positive to Covid-19 in the past two weeks?",
        expectedResponse: "No",
        checkboxes: [false, false, false, false, false, false],
    },
    {
        index: 13,
        type: Qtype.BOOLEAN,
        question: "Has your child had a fever in the past 48 hours?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, true, true],
    },
    {
        index: 14,
        type: Qtype.BOOLEAN,
        question: "My child hasn’t been given any medications that would suppress signs or symptoms of sickness listed above?",
        expectedResponse: "Yes",
        checkboxes: [true, true, true, true, true, true],
    },
    {
        index: 15,
        type: Qtype.BOOLEAN,
        question: "Has anyone in your household travelled outside the USA in the past two weeks or on a cruise?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, true, true],
    },
    {
        index: 16,
        type: Qtype.BOOLEAN,
        question: "Has any one in the home travelled by commercial transportation in the past two weeks?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, true, true],
    },
]

// An example response
export const res = {
    date: "2021-01-01",
    form: Ptype.FAMILY,
    morning: Time.MORNING,
    person: people[0],
    questions: questions, // Make sure I have all the ids correctly
    responses: ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", ],
    passed: true,
}
