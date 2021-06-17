/*
    This file is a temporary database to use before the backend API is implemented.
*/

// Global account settings
export const account = {
    id: Math.floor(Math.random()),
    title: "Example Title",
    randomizeQuestions: true,
}

// All of the people associated with the account
export const people = [
    {
        id: Math.floor(Math.random()),
        type: "family",
        fName: "Robert",
        lName: "Gemma",
    },
    {
        id: Math.floor(Math.random()),
        type: "family",
        fName: "Carl",
        lName: "Salvo",
    },
    {
        id: Math.floor(Math.random()),
        type: "family",
        fName: "Anthony",
        lName: "Dutra",
    },
    {
        id: Math.floor(Math.random()),
        type: "staff",
        fName: "Robert",
        lName: "Gemma",
    },
    {
        id: Math.floor(Math.random()),
        type: "staff",
        fName: "Carl",
        lName: "Salvo",
    },
    {
        id: Math.floor(Math.random()),
        type: "staff",
        fName: "Anthony",
        lName: "Dutra",
    },
    {
        id: Math.floor(Math.random()),
        type: "manual",
        fName: "First Name",
        lName: "Last Name",
    },
]

// All of the questions associated with the account
export const questions = [
    {
        id: Math.floor(Math.random()),
    }
]

// An example response
