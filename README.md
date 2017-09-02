# Questionnaire app

## Future improvements
1. Better integration with ember data
    * Answers could have relationship to questionnaire/question
    * Already answered questions should be deleted from the store so they dont appear when starting questionnaire again. I still have some more learning needed to fully grasp the ember data philosophy.
2. More unit tests (see test files for suggestions)
    * Logical heavy parts such as the questionnaire-helper and the controllers for the routes should be covered
3. Better handling of sliding animation without timeout
    * Use ember event hooks to trigger animations instead
    
## About

Questionnaire app done in Ember.js.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd clark-coding-challenge`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
