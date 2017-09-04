# F1Seasons App
This app uses the http://ergast.com/mrd/ API to show the season list along with champions between 2005 to 2015.

Clicking on a season shows the list of all races with winners of the selected season.

The Champion is also highlighted where he is the winner of a race in the season.

# UI LIBRARY
https://bootswatch.com/flatly/
This is based on Bootstrap

# File Structure
    /public                 - contains index.html and css files
    /src                    - React code lies here
        /index.js           - this is where everything begins
        /components         - contains react components (smart and dump)
            /App.js         - basic layout/container of the application
            /container      - stateful/smart components
            /presentation   - stateless/dump components
        /services           - contains APIService for calling the API
        /config             - contains config that can be changed for the app. 

# Dependencies
    NodeJs (>=6.10)
    NPM 

# Some notes
    1. Using React components is the very nice way to develop.
    2. In this app itself, tomorrow one might decide to change the from and to year which is currently 2005 to 2015
    3. To do this simply change the START_YEAR AND FINISH_YEAR in config/index.js and no other thing has to be changed.
    4. In future, if the list of races of a given season has to be customised, It can be done directly in components/presentation/RaceListItem.js
    5. Using the component approach helps us divide our code which not only makes it reusable but also more scalable when we are trying to make updates.
    6. If the app has to be more complex, the introduction of REDUX can be very useful in state managemnt.
    7. Right now we have only one Container component so its not that complicated, but with increase of containers, REDUX can be used. 
    8. REDUX connect to containers and actions can be dispatched which in result change the store using reducers. 
    9. For now only one test is included. Using JEST for testing. tests for other components can be written in a similar way. 
    10. The App.test.js assures that the dcoument is rendered in a div without crashing.

# Setup
React does not allow directly accessing the index.html file.

    1. Clone the repo

    2. cd to repo

    3. npm install

    4. npm start to run in dev mode[localhost:3000]

    5. npm run build will build the app in the build directory

    6. npm test to run the test.

The build/index.html can be served from any server