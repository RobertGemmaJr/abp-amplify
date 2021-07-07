/*
    This file is a temporary database to use before the backend API is implemented.
*/
import { FORM, QTYPE } from "./enum"

// Global account settings
export const account = {
    id: Math.floor(Math.random() * 1000),
    title: "Example Title",
    randomizeQuestions: true,
}

// All of the people associated with the account
export const people = [
    {
        id: Math.floor(Math.random() * 1000),
        type: FORM.FAMILY,
        fName: "Robert",
        lName: "Gemma",
    },
    {
        id: Math.floor(Math.random() * 1000),
        type: FORM.FAMILY,
        fName: "Carl",
        lName: "Salvo",
    },
    {
        id: Math.floor(Math.random() * 1000),
        type: FORM.FAMILY,
        fName: "Anthony",
        lName: "Dutra",
    },
    {
        id: Math.floor(Math.random() * 1000),
        type: FORM.STAFF,
        fName: "Robert",
        lName: "Gemma",
    },
    {
        id: Math.floor(Math.random() * 1000),
        type: FORM.STAFF,
        fName: "Carl",
        lName: "Salvo",
    },
    {
        id: Math.floor(Math.random() * 1000),
        type: FORM.STAFF,
        fName: "Anthony",
        lName: "Dutra",
    },
    {
        id: Math.floor(Math.random() * 1000),
        type: FORM.MANUAL,
        fName: "First Name",
        lName: "Last Name",
    },
]

// All of the questions associated with the account
export const questions = [
    {
        id: 1,
        type: QTYPE.BOOLEAN,
        question: "Cough?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, true, true],
    },
    {
        id: 2,
        type: QTYPE.BOOLEAN,
        question: "Shortness of breath or difficulty breathing?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, true, false],
    },
    {
        id: 3,
        type: QTYPE.BOOLEAN,
        question: "Body Aches?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, false, true],
    },
    {
        id: 4,
        type: QTYPE.BOOLEAN,
        question: "Chills?",
        expectedResponse: "No",
        checkboxes: [true, true, true, false, true, true],
    },
    {
        id: 5,
        type: QTYPE.BOOLEAN,
        question: "Runny Nose or Stuffy Nose?",
        expectedResponse: "No",
        checkboxes: [true, true, false, true, true, true],
    },
    {
        id: 6,
        type: QTYPE.BOOLEAN,
        question: "Sore throat?",
        expectedResponse: "No",
        checkboxes: [true, false, true, true, true, true],
    },
    {
        id: 7,
        type: QTYPE.BOOLEAN,
        question: "Diarrhea / GI Gastrointestinal Illness?",
        expectedResponse: "No",
        checkboxes: [false, true, true, true, true, true],
    },
    {
        id: 8,
        type: QTYPE.BOOLEAN,
        question: "Has anyone in your household been diagnosed with COVID-19?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, false, false],
    },
    {
        id: 9,
        type: QTYPE.BOOLEAN,
        question: "Have you had any visitors in your home from out of the state?",
        expectedResponse: "No",
        checkboxes: [true, true, true, false, false, false],
    },
    {
        id: 10,
        type: QTYPE.BOOLEAN,
        question: "Has anyone in your household travelled to a COVID red state in the past two weeks?",
        expectedResponse: "No",
        checkboxes: [true, true, false, false, false, false],
    },
    {
        id: 11,
        type: QTYPE.BOOLEAN,
        question: "Have you been asked by any public health authority to self isolate or quarantine in the last 48 hours?",
        expectedResponse: "No",
        checkboxes: [true, false, false, false, false, false],
    },
    {
        id: 12,
        type: QTYPE.BOOLEAN,
        question: "Has anyone in your household been exposed to anyone testing positive to COVID-19 in the past two weeks?",
        expectedResponse: "No",
        checkboxes: [false, false, false, false, false, false],
    },
    {
        id: 13,
        type: QTYPE.BOOLEAN,
        question: "Has your child had a fever in the past 48 hours?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, true, true],
    },
    {
        id: 14,
        type: QTYPE.BOOLEAN,
        question: "My child hasn’t been given any medications that would suppress signs or symptoms of sickness listed above?",
        expectedResponse: "Yes",
        checkboxes: [true, true, true, true, true, true],
    },
    {
        id: 15,
        type: QTYPE.BOOLEAN,
        question: "Has anyone in your household travelled outside the USA in the past two weeks or on a cruise?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, true, true],
    },
    {
        id: 16,
        type: QTYPE.BOOLEAN,
        question: "Has any one in the home travelled by commercial transportation in the past two weeks?",
        expectedResponse: "No",
        checkboxes: [true, true, true, true, true, true],
    },
]

// An example response
export const res = {
    id: Math.floor(Math.random() * 1000),
    date: "2021-01-01",
    form: FORM.FAMILY,
    morning: true,
    person: people[0],
    questions: questions, // Make sure I have all the ids correctly
    responses: ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", ],
    passed: true,
}
