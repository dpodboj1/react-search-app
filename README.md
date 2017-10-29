A react search app which connects with DuckDuckGo and Wikipedia API to get the results. The application was built with "create-react-app".

# Structure of the application

I have divided the folder structure into two parts - components and containers. The components are functional stateless components which contain no logic, but are there only for style. Containers contain logic and/or state, which is passed to the components as props. The structure of the application is as follows:

src/
  components/
    Colors.js - Component which renders the three-colored "logo"
    Result.js - Component which renders a query result
    Search.js - Component where the input text lives
  containers/
    App.js - Main component which handles application logic
    ResultList.js - Component which handles logic regarding mapping and filtering through the results of the API and passing the results to Result.js
index.js - The entry file of the application where the App component gets rendered

# Application logic

The main logic is in the App.js file, which does two things.

1. App.js <---- Search.js, when the user types something in input (onChange) the state is lifted up from the Search.js to the App.js where that change is being handled by handleChange.

2. App.js ----> ResultList.js ----> Result.js, when handleChange triggers, a debounced API call triggers with the user's query. The results from Wikipedia and DuckDuckGo APIs are saved into an array and sent as props to the child component ResultList. ResultList then filters and maps through the array and for each object in the array calls Result and passes props to it to render a result from the API.

# Scripts

Use "yarn build" to create an optimized production build in /build folder.

Use "yarn start" to launch the app in the browser using a development server.

Use "yarn test" to initiate tests, there are tests for App component which check the API.
