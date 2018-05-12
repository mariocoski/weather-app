This project was bootstrapped with [Create-React-App-Typescript](https://github.com/wmonk/create-react-app-typescript).

I have used semantic-ui-react for css layer [semantic-react-ui]
(https://react.semantic-ui.com/introduction)

## 1. Installation
### `yarn install`

## 2. Build
### `yarn build`

## 3. Setup
### `cp .env.example .env`
### go to https://openweathermap.org/ and log in 
### grab your api id and weather api url - most likely: (http://api.openweathermap.org/data/2.5/forecast) 
```
REACT_APP_WEATHER_APP_ID=yourAppId
REACT_APP_WEATHER_API_URL=http://api.openweathermap.org/data/2.5/forecast
```
## 4. Start
### `yarn start`

## 5. Usage:
### 5a. If your setup your env vars (see above) you can click 
### 'Get weather data' to get weather forecast from remote source
### 5b. You can get weather forecast from .csv file as well, click 'Toggle data source'
### and then 'Upload CSV', you have an example test.csv in root dir of this project
### format is the following
```
2017-07-23 09:00:00,291.12,
2017-07-23 12:00:00,295.12,
```

## 6. Tests
### `yarn test`
