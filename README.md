# System requirements.

1.Node.js:
React projects require Node.js, which is a JavaScript runtime environment. You'll need to install Node.js on your system.

[Link to download](https://nodejs.org/en/download)

## Installation

1. Go to the project's directory
2. Install dependencies: `npm install`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

Calendar component

1. √ renders the correct calendar for the given date (01/12/2023)
1. √ renders the correct calendar for the given date (25/8/2022)
1. √ renders Invalid Date for the given date (25/13/2022)
1. √ renders No date input provided for the given date ()

## Background

An organisation is building a React component library, which various front-end React solutions can import and use in their projects.

A new reusable calendar component has been requested to add to the component library: `<Calendar date={someDate} />`.

## Features

- A reusable calendar component which has a `date` prop.
- The first row of the calendar displays the `date` prop's month and year.
- The second row of the calendar displays the days of the week, one per column.
- The following rows displays the dates for the `date` prop's month and year, appropriately aligned with the day headings.
- The appropriate date cell will be highlighted based on the `date` prop.
- calendar component has other props also to configure month,year and week display format

## Calender Config Options

1. date: string,
1. dateFormat: oneOf(["dd/mm/yyyy", "mm/dd/yyyy"]),
1. monthDisplay: oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
1. yearDisplay: oneOf(["numeric", "2-digit"]),
1. weekDisplay: oneOf(["narrow", "short", "long", "firstTwoChars"])

## Screen Shot

![Screenshot](/src/image/cal.png "This is a sample image.")
