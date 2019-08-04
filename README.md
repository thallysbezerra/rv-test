# Development Stack

-  **Assets extraction**: Figma

-  **Code editor**: Visual Studio Code

   <details>
   <summary>Important extensions</summary>

   -  Auto Rename Tag
   -  Auto-Open Markdown Preview
   -  Brackt Pair Colorizer
   -  VS Code ES7 React/Redux/React-Native/JS snippets
   -  ESLint
   -  GitLens
   -  JavaScript (ES6) code snippets
   -  Prettier - Code formatter
   -  SCSS formatter

   </details>

-  **CSS preprocessor**: SASS/SCSS

-  **Hosting**: Firebase

-  **Lib/Framework**: React.js using create-react-app

-  **Package manager**: NPM/Yarn

   <details>
   <summary>Dependencies</summary>

   -  chai
   -  enzyme
   -  enzyme-adapter-react-16
   -  node-sass
   -  ramda
   -  react-test-renderer

   </details>

-  **Server**: Node.js

## API

-  API call using `fetch`, without external dependencies.
-  Success, requesting and error feedback combining `fetch` and `catch` with ternaries.

## CSS

-  All CSS/SCSS theme files are imported on `theme.scss`.
-  Animations on `:hover` in buttons to give feedback of interaction to user.
-  B.E.M. (Block Element Modifier) class naming methodology.
-  Breakpoints as mixin, included inside own selector in order to facilitate maintenance.
-  CSS Grid and CSS Flexbox to define layout structures.
-  Even with disabled links, navbar on mobile can be simulate scrolling right/left.
-  Each component have your own SCSS file.
-  Font-family using Google Fonts and Font-weight variables are declared on `fonts.scss`.
-  Keyframes animations are imported on `animations.scss`.
-  Mobile first with four breakpoints using:
   -  Only on mobile: Screen resolution <= 767px.
   -  Tablet portrait mode: Screen resolution >= 768px.
   -  Tablet landscape mode: Screen resolution >= 1024px.
   -  Desktop: Screen resolution >= 1280px.
-  Pseudo-elements as `: first-letter`,`: after` and `: before` to solve specific situations.
-  Using SASS/SCSS.

## HTML

-  HTML5 following W3C Standards recommendations.
-  All images are on the same directory (`src/img`) for performance reasons downloading each images only once when page is loaded.
-  Car models are disabled, without navigation, except Model R.

## Javascript

-  Arrow functions instead of `bind.this`, simplifying code.
-  Combining `isNil` method from `ramda` with ternaries to verify arguments with/without changes.
-  Destructuring of states and props to keep a clean code and declarative.
-  Functions on `/services` to aid some data treatment.
-  `.map` to list items from API.
-  `PropTypes` to better component maintenance and understanding.
-  Reusing car price and name as states, considering possible future changes.
-  Some components are stateless, focused on performance.
-  Spread operator to create an array with selected items on footer.
-  Short circuit conditionals validating selected items on footer.

## Tests

-  Jest as test runner inside create-react-app.
-  In specific situations was applied TDD (Test Driven Development) concepts.
-  Simple tests to verify if application is rendering without crashing and initial states are initializing correctly.
-  Statics components with snapshots tests to avoid components changes.
-  Testing if data as number, is entering and returning correctly on `monetaryMask()` function.
-  Testing if `screenStatus()` returns only two possibilities correctly.

# Instructions to run tests

-  `npm test`, or `yarn test` on root directory to run application tests.

# Instructions to run locally

-  `npm install`, or `yarn` on root directory to install dependencies.
-  `npm start` or `yarn start` to run the project locally.

# Instructions to run online

-
