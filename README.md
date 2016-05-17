# React playground

This project was a great opportunity on my way to learn React.js

## Install
```
git clone git@github.com:szilveszter9/react-playground.git
cd react-playground
npm install
npm run bundle
# on a separate terminal
npm start
```
If any issues, try with node: v4.2.6 and npm: 3.8.3

## Online

Visit http://szilveszter9.github.io
Non-minified bundle version: http://szilveszter9.github.io/test

## In focus

* Tests in a TDD/BDD style
* Bill should be easy to understand
* Good user experience
* Simple and eloquent code
* Knowledge of:
  * Responsive design
  * Accessibility
  * Event Handling
* Be creative!

## Features

* Tested for a number of device sizes
* Small components (easy to style)
* High test coverage
* ES6
* CSSNext (with PostCSS)
* Tests with Jest
* Routing with react-router
* Data flow with Flux

## To be improved (in order)

* Investigate why `npm run bundle:prod` fails a test, while `npm run bundle` is fine
* Separate tests for ApiUtils
* Test in IE
* Make it obvious that Statement is not the total of each services
* Use arrow keys and backspace to navigate to improve accessibility
* Numbered list for calls
* Differentiate device orientation in look
* Use "production" build for React.js, that is faster
* Try some dedupe plugin it might help to decrease the bundle size
* Think about moving actions, stores, utils, AppDispatcher to a separate folder
* Think about ...-components folder names
* Separate tests for all small components

## Notes
* `propTypes` seems like a bit redundant for subelements, parents already check
* No tests for each individual components for now, might be a bit too much
