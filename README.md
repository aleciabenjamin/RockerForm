# Yo Rocker!

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
## Getting Started

Clone the repository with an SSH key

$ git clone git@github.com:aleciabenjamin/RockerForm.git
or with HTTPS

$ git clone https://github.com/aleciabenjamin/RockerForm.git

### Prerequisites



```

```

### Installing



```

```

```

```


## Running the tests


### Break down into end to end tests



```

```

## Built With

* [react-native](https://reactnative.dev/docs/environment-setup) - The framework used for building native apps
* [Typescript](https://www.typescriptlang.org/) - for static type checking
* [redux](http://redux.js.org/) -  for generating and managing the state model

## Authors

* [Alecia Benjamin](https://www.linkedin.com/in/alecia-benjamin/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
