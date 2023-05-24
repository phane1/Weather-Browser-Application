# Weather Browser Application

## Introduction

The primary purpose of this project was to gain practical experience in utilizing JavaScript and NodeJS in a real-world context. Having a keen interest in front-end development, I aspired to create my own weather application. The objective was to develop a functional weather application capable of providing a comprehensive 5-day forecast, with the potential inclusion of an hourly forecast feature.

In addition to the functional aspects, I aimed to explore the creative side by designing an aesthetically pleasing interface for the application. The goal was to strike a balance between making the application visually appealing and engaging without overwhelming the user with excessive elements or a cluttered design. By incorporating a sense of fun and appeal into the application's aesthetics, I aimed to create an enjoyable user experience while maintaining usability and clarity of information.

## How to run the program:

Make sure you have NodeJS [downloaded](https://nodejs.org/en/)
Then run the command:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

If you have issues running the program run this in the terminal:

### `npm install react-scripts --save`

## How to use the application:

The application offers a user-friendly interface that is easy to navigate. By default, the location is set to Orange, CA. If users wish to check the weather for a different location, they simply need to input the desired city name and click the corresponding icon. Please note that using the enter key on the keyboard to submit the search is currently not functional.

## Documentation:

Before delving into the different components of the program, it's essential to understand how they work together. Each JavaScript file collaborates with a corresponding .css file, which is an HTML document I authored. The .css file manipulates the appearance of the components on the web browser by utilizing specific commands in the markup language. Each .css file is tailored to its associated component and will differ based on the desired design for the final look.

The program also relies on the OpenWeather API, which provides accurate data about specific locations worldwide through latitude and longitude coordinates. More information about the OpenWeather API can be found at this [link](https://openweathermap.org/).

Additionally, I incorporate free icons from IconScout to enhance the visual elements of the application. Information about these icons can be found [here](https://iconscout.com/unicons), with further details available on their [Github repository](https://github.com/Iconscout/unicons). Instead of manually downloading individual icons and storing them in a folder, I can conveniently import the required icons directly from the IconScout website.

### `App.js`

This file serves as the main component, comparable to the main function in the C++ language. By importing other files that act as components building the main structure, I can call and utilize these components within this file. In this function, I make use of the "useState" hook, which enables the setting of specific parameters either through user input or by assigning default values that can be modified.

### `Display`

This file represents the top section of the weather app. It includes a search bar and two icons that function as a search button (users can also press the enter key on their keyboard) and a location button, which automatically fetches the user's location and inputs it for the API data retrieval.

### `Time`

This file displays the current time and location of the user's search. If no input is provided, it defaults to a predetermined value.

### `Weather`

This file is the primary component of the program. It displays detailed weather information for the specified location. Utilizing the API, common weather data such as temperature, sunrise and sunset times, wind speed, humidity, and how the temperature feels are presented.

### `Forecast`

This file is an optional addition but was included to add a more "professional" touch to the project and test development skills. It displays a 6-hourly weather forecast with temperature and corresponding weather icons. Additionally, it provides a daily forecast for the next 6 days.

### `weatherService`

This file acts as the core of the program, responsible for accurate data retrieval from the API. It requires the use of an API key, linking it with the website for permission to access the data. Functions related to weather, time, forecast, and display depend on this file to fetch the necessary information. It facilitates API calls through various functions, gathering the required data and passing it to other functions.

### `Background`

This file is responsible for generating the dynamic background with moving particles. For implementation details, more information can be found [here](https://www.npmjs.com/package/react-tsparticles). This feature required significant time and effort. By leveraging the mentioned package and importing it, interactive particles were introduced to create an engaging visual backdrop.

## Final Thoughts

This project was undertaken with the intention of exploring a new programming language and indulging in the creative realm of web development. I feel that I have successfully accomplished these objectives. However, if I were to continue working on this project, there are a few areas that I could further enhance.

Firstly, I would focus on refining the layout of the application, as it currently appears somewhat cluttered. By reorganizing and optimizing the placement of elements, I could create a more streamlined and intuitive user interface.

Additionally, I would strive to improve the overall design of the application, aiming for a cleaner and more visually appealing aesthetic. This could involve refining the color scheme, typography, and overall visual hierarchy to ensure a more polished and professional look.

By addressing these aspects, I believe the application's usability and visual appeal would be significantly enhanced, providing an even better experience for users.