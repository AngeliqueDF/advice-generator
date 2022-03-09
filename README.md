- [Advice generator app challenge](#advice-generator-app-challenge)
  - [Overview](#overview)
  - [Links](#links)
  - [How to run the project](#how-to-run-the-project)
  - [The challenge](#the-challenge)
  - [Description](#description)
  - [Features](#features)
  - [Technologies](#technologies)
  - [How I built this project](#how-i-built-this-project)
  - [Sources](#sources)

# Advice generator app challenge

![Screenshot of the todo app](./src/images/desktop-screenshot.png)

<div align="center">
  <img src="./src/images/logo-html5.svg">
  <img src="./src/images/logo-css3.svg">
  <img width="48px" src="./src/images/logo-javascript-gif.gif">
  <img src="./src/images/logo-parceljs.png">
</div>

## Overview

*An app to get inspired.*

<br />

## Links

<p>
<a href="https://github.com/AngeliqueDF/advice-generator-challenge">GitHub repo</a> • 
<!-- <a href="">Live demo </a> -->
</p>

<br />

## How to run the project

1. ``git clone HTTPS_REPO_URL MY-FOLDER-NAME``
2. ``cd MY-FOLDER-NAME``
3. ``npm install``
4. `` npm start ``
5. visit ``http://localhost:1234``

or

1. ``npm run dev``
2. Advice: for the live reload functionality, keep an eye on the console and reload if necessary.

<br />

## The challenge
 
> Your challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.
> 
> You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
> 
> Your users should be able to:
> 
> - View the optimal layout for the app depending on their device's screen size
> - See hover states for all interactive elements on the page
> - Generate a new piece of advice by clicking the dice icon
> 
> *[From Frontend Mentor]()*

<br />

## Description

This frontend project is a good way to train on how to connect to an API and render data received to the DOM.

<p align="center">
<img width="375" width="667" src="./images/../src/design/mobile-design.jpg">
</p>

<br />

## Features

- When the dice is clicked, the app displays a new advice from the Advice Slip API with the ``async/await`` syntax.
- Responsive interface.
- Lightweight.

<br />

## Technologies

- Semantic HTML5 markup.
- SCSS.
- Flexbox
- Mobile-first workflow.
- Minified with parcel v2.

<br />

## How I built this project

 1. Start by structuring the page with semantic and accessible HTML.
 2. Style the page with a mobile-first approach.
 3. Add functionality with JavaScript.

<br />

## Sources

- [Advice generator app from Frontend Mentor.](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)