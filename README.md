## Tom's Angular Practice

## Overview

This is a practice [AngularJS][angularjs] (version "1.5.11") application.

# Goals:
- Create an input field that queries ​https://api.github.com/users/<USER>/repos​.
- Display the user, avatar image as well as the list of repos the user has.
- If two or more people searched for the same user within 3 minutes, create an FE solution that blocks the GET request and outputs a message to the browser.
- Block a blank input field.
- Block 404 and/or invalid users, and both blocks the request and outputs a message to the browser.
- Display the number of stars per repository.
- Make responsive (more-or-less).
- Write Unit tests (FAIL!)
- Write End-to-End tests (FAIL!).

# Notes:
- Angular structure was adopted from: [angular-seed][angular-seed]
- Run locally with:
```
npm install
```,
```
bower install
```,
and
```
npm start
```
(to start local server) on: [`localhost:8000/index.html`][local-app-url]
- Run Unit Tests locally with:
```
npm test
```
- Run End-to-End tests locally with:
```
npm run update-webdriver
```
- Tests are run in Chrome, Safari, and Firefox.
- Deployed at:
- Some users to test with:
    + Defaults to 'tomgalpin' on load
    + Successful users:  'bob', 'octocat', 'dave'
    + Unsuccessful/failed users:
        -- 'a;ldkfja;lsdkfj;alsdfkj':  404,
        -- 'jerod':  actually returns as a 200, but without any content; so I called this a failure and invalid account.

# Areas of improvement:
1. Better tests (always)
    + Still learning to regularly encorporate tests/have a long way to improve.
    + In other words, admittedly I'm still a rookie here.
    + I ended up moving on from my tests, as I was running out of time and energy to push.  :(
2. Refactor:
  + Functions do one thing.
  + Abstract out GET request to a model or factory.
3. Minimize JS and CSS for prod.
4. Remember how to set up Grunt and/or Gulp.
5. Remember a quicker way to set up an Angular app from scratch (kind of forgot).
6. Make a better FE experience.
7. Come up with a more full-proof cut of the repos into their respective columns.
8. Have the 3 min. timer on repo searches done on the backend (if I were creating the BE).

# Structure:


# Links:
[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
