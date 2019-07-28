# Development Stack

- **Assets extraction**: Figma
- **Code editor**: Visual Studio Code
	<details>
	<summary>Important extensions</summary>
	 
	- Auto Rename Tag
	- Auto-Open Markdown Preview
	- Brackt Pair Colorizer
	- VS Code ES7 React/Redux/React-Native/JS snippets
	- ESLint
	- GitLens
	- JavaScript (ES6) code snippets
	- Prettier - Code formatter
	- SCSS formatter
	
	</details>
- **CSS preprocessor**: SASS/SCSS
- **Hosting**: Firebase
- **Lib/Framework**: React.js using create-react-app
- **Package manager**: NPM/Yarn
	<details>
	<summary>Dependencies</summary>
	
	- node-sass

	</details>

- **Server**: Node.js

## API

-  API call using `fetch`, without external dependencies
-  Success, requesting and error feedback combining `fetch` and `catch` with ternaries

## CSS

- All CSS/SCSS theme files are imported on `theme.scss`
- B.E.M. (Block Element Modifier) class naming methodology
- Mobile first with four breakpoints using:
	- Mobile: Til 767px
	- Tablet portrait mode: Beetween 768px and 1023px
	- Tablet landscape mode: Beetween 1024px and 1279px
	- Desktop: Bigger than 1280px
- Each component have your own SCSS file
- Font-family using Google Fonts and Font-weight variables are declared on `fonts.scss` 
- Keyframes animations are imported on `animations.scss`
- Using SASS/SCSS

## HTML

- HTML5 following on W3C Standards recommendations

## Javascript

-  Destructuring of states and props to keep a clean code and declarative
-  `.map` to list items from API
-  `PropTypes` to better component maintenance and understanding
-  Some components are stateless, focused on performance
-  Spread operator to create an array with selected items on footer

# Instructions to run locally

-  `npm install`, or `yarn` on root directory to install dependencies
-  `npm start` or `yarn start` to run the project locally

# Instructions to run online

-
