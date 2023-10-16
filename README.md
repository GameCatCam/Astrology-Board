# Chatstrology

[![MIT license](https://img.shields.io/badge/License-MIT-green.svg)](https://lbesson.mit-license.org/)

# Table of Contents

- [Description](#description)
- [Task](#task)
- [Process](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contributors](#contributors)
- [Github](#github)

## Description

Chatstrology is an application designed for users interested in learning more about astrology. It is powered through ChatGPT using lang-chain and allows a user to make and store prompts for later viewing.

## Task

```md
GIVEN a AI powered Astrology based website
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing chat prompts if any have been prompted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing chat prompts that include the prompt title and the date created
WHEN I click on an existing chat prompt
THEN I am presented with the prompt title, contents, and prompt creator’s username for that prompt
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any prompts I have already created and the option to add a new prompt
WHEN I click on the button to add a new prompt
THEN I am prompted to enter both a title and prompt for my prompt
WHEN I click on the button to create a new prompt
THEN the title and contents of my prompt are saved and I am taken to the page of my new prompt
WHEN I look at one of my existing prompts in the dashboard
THEN I am able to delete my prompt
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view prompts and comments but I am prompted to log in again before I can add, update, or delete prompts
```

## Installation

- First, running this program requires Node.js and MySQL if you intend to download it for personal use. Other than that, every thing else needed for the program is included and all it requires is that you run "npm install" to install all the needed packages.
- Additionally, lang-chain requires an api-key. The program includes dotenv capabilities, all you need to do is create a .env file and fill in the database name, username, password, and api-key for the program to use it.

## Usage

- The main usage for this program is to learn about astrology and astral bodies.

## Licenses

    This project is covered under the MIT license. To learn more about what this means, click the license button at the top.

## Tests

- There are currently no tests for this project.

## Contributors

- Anthony Kahly
- Alana Ragon
- Jim Mcgreevy
- Cameron Rawlins

Note: This project was designed for the 2023 CWRU course, and is not currently accepting other contributors.

## Github

GitHub: https://github.com/GameCatCam/Astrology-Board
