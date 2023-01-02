# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Running

## option 1: need to replace .app with react version
```
npm run build
swa start ./build --api-location ./api
```
## option 2: live dev server
```
npm start
// open new console:
swa start  http://localhost:3000 ./build --api-location ./api
```

## option 2:
```
func host start
swa start  --api-location http://localhost:7071
```


https://sagesnipsdev.b2clogin.com/sagesnipsdev.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_signupsignin1