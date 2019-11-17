## Clinic EMR DHIS2 App

This app was developed using @dhis2/app-platform

### Installation
``
    yarn install
``

### Running
``
    yarn start
``

### Building
``
    yarn build
``
## Functionality

As a clinical officer, I would like to search in the patient exists in the system based on their name or unique id, so I can pull their digital health passport.
As a clinical officer, I would like to create a new patient health passport if it does not already exist in the system, so i can add visit outcome.
As a clinical officer, I would like to pull patient's passport, so I can look at previous case related with today's visit case.
As a clinical officer, I would like to pull patient's passport, so I can look at allergies before I give prescription.
As a clinical officer, would like to initialize client journey in OPD, so we can track the whole journey.
As a clinical officer, I would like to pass or direct the patient to the next step of their journey, so that the next department can work faster?

## Implementation

First you search if person already exist is system on the first screen.
	
If no results are found a card is displayed with a button to add a new person.
	
A modal appears on clicking to add patient, for now we just get the important details.
	
If person exists, a table is displayed with results found.
	
Each person under results has an "view passport" button.
	
Upon clicking the "View Passport" button, the user is redirected to health passport where they can add patient visits and view previous data.

## Missing functionalities

As a clinical officer, would like to initialize client journey in OPD, so we can track the whole journey.
As a clinical officer, I would like to pass or direct the patient to the next step of their journey, so that the next department can work faster?

