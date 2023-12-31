<img width="1728" alt="Screenshot 2023-08-04 at 11 21 02 PM" src="https://github.com/sejal175/Newsapp-react/assets/56756275/daf7ba89-8d9b-46f7-9309-83e6b89f746c">
<h3 align=center> :smile: <strong>Newapp</strong> is <em><strong>React Website</strong></em> highlighting daily news :newspaper: on the website :smile: </h3>
<p align=center> :heart: Show your love to this project :heart:</p>


# :bookmark_tabs: What’s In This Document
* [Pre-requisite to run React](#point_right-pre-requisite-to-run-react)
* [How to create your first React App](#rocket-how-to-create-your-first-react-app)
* [Script require to run the project](#bookmark-script-require-to-run-the-project)
* [Where to see the running project](#eyes-where-to-see-the-running-project)
* [React Packages Used](#boom-react-packages-used)

# :point_right: Pre-requisite to run React 

Install Node.js and npm in the local machine. Use [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) docuementation for info and set up steps.<br>

I have used the API of the News APP and fetched that data in my local system. You can get the API key from this [website](https://newsapi.org/) and additional details which this News App includes.<br>

This site could not be hosted because of the API restriction on it. This could only run on the localhost.<br>

FYI: If you try to host this webiste, you can get the ERROR :x: message in the Preview Section of the Network Logs stating that:<br>

     cors:"corsNotAllowed"
     message:"Requests from the browser are not allowed on the Developed plan, except from localhost"<br>
     status:"error"

# :rocket: How to create your first React App

:one: Create a folder for React Project<br>

:two: Open IDE for that folder<br>

:three: Run the :arrow_down: command in terminal

```properties
npx create-react-app my-app
```
```properties
cd my-app
```
```properties
npm start
```
Read [this](https://create-react-app.dev/) documentation for more details


# :bookmark: Script require to run the project

<li>For Bootstrap, add Script for Javascript and CSS</li><br>

In the project directory, you have the following scripts to run:

    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"

### `npm start`

&nbsp; &nbsp; &nbsp; Runs the app in the development mode.\
&nbsp; &nbsp; &nbsp; The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

&nbsp; &nbsp; &nbsp; Launches the test runner in the interactive watch mode.\
&nbsp; &nbsp; &nbsp; See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

&nbsp; &nbsp; &nbsp; Builds the app for production to `build` folder. It correctly bundles React in production mode and optimizes build for best performance.

&nbsp; &nbsp; &nbsp; The build is minified and the filenames include the hashes.\
&nbsp; &nbsp; &nbsp; Your app is ready to be deployed!

&nbsp; &nbsp; &nbsp; See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# :eyes: Where to see the running project

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.<br>

For  more details, use [this](https://react.dev/) link

# :boom: React Packages Used

    "cors": "^2.8.5",
    "cra-template": "1.2.0",
    "ra-data-simple-rest": "^4.12.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-infinite-scroll-component": "^6.1.0",
    "react-router-dom": "^6.14.2",
    "react-scripts": "5.0.1",
    "react-top-loading-bar": "^2.3.1"

To read more about, <br>

&nbsp; &nbsp; react-router-dom package, follow [this](https://www.npmjs.com/package/react-router-dom) link<br>
&nbsp; &nbsp; react-toastify, follow [this](https://www.npmjs.com/package/react-toastify)  link<br>
&nbsp; &nbsp; ra-data-simple-rest, follow [this](https://www.npmjs.com/package/ra-data-simple-rest) link <br>
&nbsp; &nbsp; react-infinite-scroll-component follow [this](https://www.npmjs.com/package/react-infinite-scroll-component) link <br>
&nbsp; &nbsp; react-top-loading-bar follow [this](https://www.npmjs.com/package/react-top-loading-bar) link <br>
