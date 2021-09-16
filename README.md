# Weather-Mini

# Landing page

![image](https://user-images.githubusercontent.com/51323586/133636488-838ef48b-5aa7-4dbe-9d9d-81ea4dbf69f1.png)


# Project Description:

  Weather forecasting is very necessary for our daily lives. It helps us to prepare 
  and make plans depending on the expectations. Many weather stations are 
  placed around the world fetching real-time weather elements’ data.
  Weather-mini is a web based application through which user will able be to get 
  live weather forecasting of the entered location. It uses a third party weather 
  API (of openweathermap.org) which sends current weather data by city name. 
  Weather-mini displays weather details such as precipitation, wind, atmospheric 
  pressure, cloudiness, and temperature. With these, user can analyze trends and 
  know the prediction of tomorrow’s data or forecast the weather. To change the 
  location user will just have to enter the new location in the location input box 
  and will get all the weather details. 
  Its calculations and details are so accurate, that you can even check and match 
  it from news channel. Its user’s friendly UI is simple and easy to use, that even a 
  child can handle it and get information on particular geographical area.
  
  
# Live Weather Forecast of Entered Location

![image](https://user-images.githubusercontent.com/51323586/133636663-08803e63-f248-40ef-beeb-9c564eb2b057.png)


# Tech-Stack Used:

  HTML and EJS: Used the html to build the structure of webapp and EJS to include 
    dynamic Weather data and outputting the received data at correct places.
    
  CSS: Used it to design the webapp so as to give it a simple and easy to use user interface.
  
  JavaScript (Node.js): Used it to setup the server(backend) of the webapp
  
  Express.js: Used it as server framework and for handling of HTTP request
  
  Visual Studio Code: Used to build and deploy project locally.
  
  
# Approach:

  I started the project with backend side of my webapp. First I installed the 
  necessary dependencies like express, ejs, body-parser, dotenv etc. Then created 
  an express app then setted the view-engine to ejs, then created a middleware 
  that will parse the content of the form submitted. Then created the directory 
  inside the root directory named ‘views’ to store all template files of the app. 
  Then created two files inside views directory ‘lander.ejs’(landing page of the app
  with input form that will take location as input) and ‘weatherPage.ejs’ (for 
  showing the weather data). Then created a new directory in root directory 
  named ‘public’ to store static files (css and media files), inside public created 
  two directories one for css and other for media elements (mainly images), then 
  created styles sheets for each of the pages(landing and weatherPage). Now on 
  backend-side called the live weather api of openweathermap.org and stored
  and parsed the received data in local variable as javascript object. Then 
  converted units of the received data then exported the final data to 
  weatherPage.ejs which will output the data to user. After completing the code 
  first launched the app locally and checked the app is working fine. Then hosted 
  the app on Heroku.
  
  
  https://weather-mini-app.herokuapp.com/
