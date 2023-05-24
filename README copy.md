## How to run the program:

Make sure you have node js downloaded: https://nodejs.org/en/
Then run the command:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

If you have issues running the program run this in the terminal:

### `npm install react-scripts --save`

## How to use the application:

I was running out of time so I didn't implement a function where you can search for a specific city by pressing enter on the keyboard but rather clicking the search icon to the right of the search bar. Simply just enter a city you want to find the weather and click on the search icon next to it. The default city will be Orange.

## Documentation:

Before I talk about what each part of the program I must begin by talking about how it all works. Every javascript file works side by side with the a .css file which is a document I wrote in HTML. The .css file works by manipulating how my components show up on the web browser by writing out specific commands in the markup language. Each .css file is unique to the component that it is attached to and will be different according to how I want to design the final look. 

I am also using the OpenWeather API. You can find out more information about it here: https://openweathermap.org/. By using this API, I am able to fetch accurate data about specific locations anywhere in the world by finding the latitude and longitude coordinates.

In addition, I am using the free icons from IconScout. You can find out more information about it here: https://iconscout.com/unicons and more information here: https://github.com/Iconscout/unicons. Instead of simply downloading seperate icons and storing it into a folder, I can just import the necessary icons from the website itself.

### `App.js`

This file will be the main component. In the C++ language, think of this as the main function. By importing the other files (which are the components that ultimately build the main), I am able to call the components and use them here. In the function, I use "useState" which is a way to set certain parameters by either user input or I can set a default value that may or may not be changed. 

### `Display`

This file is the top portion of the weather app. Here it will include a search bar and two icons which will act as a search (the user can also just hit the enter button on their keyboard if they prefer) as well as a location button which will just find their location and automatically input it so the API can fetch the data. 

### `Time`

This file will display the current time and location of where the user is trying to search for. If there is nothing inputted, then the default value will show.

### `Weather`

This file is the main part of the program. Here it will display the exact weather that the location is current set to. Using the API I am able to display typical common weather information such as: temperature, sunrise time, sunset time, highs & lows& of wind speed, what the temperature feels like, humidity, and wind speed.

### `Forecast`

This file is more of an option to me. I technically do not need this but as a challenge and for the sake of this project (to test my skills and development) I decided to add this in to make the project feel more "professional." Here it will display a 6 hour weatherly forecast that will display the temperature as well as a corresponding weather icon. Below that will be a daily forecast which will show the next 6 days of weather. 

### `weatherService`

This file the "bread and butter" of the program. The only way I can accurately find information is through the API and here is where I get access from it by inputting my own API key and linking it with the website to grant myself permission to use the product. This is where the functions of weather, time, forecast, display will go to get the information when a user inputs a search. It will make a call to the API through the various functions I used here to gather the needed information and pass it to the other functions.

### `Background`

This file is the creation of the random moving particles in the background more information here: https://www.npmjs.com/package/react-tsparticles. This surprisingly took a very long time. Using the package and importing it I was able to get some particles in the back that can be interactive. 