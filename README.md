# Yo Rocker!

## Brief

The purpose of this exercise is to test knowledge and ease of use with React Native and
Typescript.

Using React Native and Redux, build a form with the following fields, including validation:

* Social security number
* Phone number
* Email address
* Country
* Submit button

The list of countries can be fetched using a GET-request from
https://restcountries.eu/rest/v2/all. You may cache the result set so it only loads the first time
the form is displayed.

### Restrictions:

* The social security number needs to be a valid Swedish SSN (see
https://en.wikipedia.org/wiki/Personal_identity_number_(Sweden))
* The phone number needs to be a valid Swedish phone number (see
https://en.wikipedia.org/wiki/Telephone_numbers_in_Sweden)
* The email address needs to be valid
* The countries need to be displayed as a dropdown box
* All fields are mandatory
* Validation errors need to be displayed in some way if the input data is wrong.
* The Submit button needs to log "Success" to the console when clicked if, and only if,
all fields are valid.
* The input fields need to persist their values upon refresh, e.g. by using local storage,
so that their data is still there if the user refreshes the page.
* Local storage needs to be emptied upon a successful Submit so that if the page is
refreshed will display empty fields.

Validation can happen upon input or submit.

### Prerequisites

- [NodeJS](https://nodejs.org/en/)

- [Android Studio](https://developer.android.com/studio)
- [Java Development Kit](https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm#JSJIG-GUID-2FE451B0-9572-4E38-A1A5-568B77B146DE)



## Getting Started

Clone the repository with an SSH key

```$ git clone git@github.com:aleciabenjamin/RockerForm.git```

or with HTTPS

```$ git clone https://github.com/aleciabenjamin/RockerForm.git```

then
```
cd RockerForm
```
### Installing

Install the ```node modules``` with yarn
```
$ yarn install
```
or with npm
```
$ npm install
```
then start her up with
```
$ yarn android
```
and
```
yarn start
```
in a second terminal window.  And you're good to go!


## Built With

* [react-native](https://reactnative.dev/docs/environment-setup) - the framework used for building native apps
* [Typescript](https://www.typescriptlang.org/) - for static type checking
* [redux](http://redux.js.org/) -  for generating and managing the state model
* [redux-thunk](http://redux.js.org/) -  for redux middleware
* [axios](https://www.npmjs.com/package/axios) -  for fetching data
* [yup](http://https://github.com/jquense/yup.js.org/) -  for value parsing and validation
* [formik](https://formik.org/) -  for building forms

## Authors

* [Alecia Benjamin](https://www.linkedin.com/in/alecia-benjamin/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
