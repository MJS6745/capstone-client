# WDI Capstone - Client

## Description

This is the client repo for the capstone project for the General Assembly WDI course. This application is a Premier League (professional soccer league) squad manager. It allows users to create an account and add players to a squad that they manage. In addition, users can view the current league standings as well as search for players that they may want to add to their squad.

## Links
- [Deployed client](https://mjs6745.github.io/capstone-client/)
- [API repo](https://github.com/MJS6745/capstone-api)
- [Deployed API](https://protected-ocean-97576.herokuapp.com/)

## Technologies Used

Included below is a list of the technologies I used for the client portion of the application:
- HTML
- CSS
- JavaScript
- jQuery
- AJAX (for API interaction)
- [Football-data.org](http://api.football-data.org/index). This open 3rd party API was used to gather league, team, and player specific information.

## Unsolved Problems

While there were not any major bugs present in the application, I would have liked to explore more 3rd party APIs and extend the squad management features of the application given the opportunity. I was able to create successful connections to a 3rd party API that has a large amount of information. While I made good use of that data, I could extend my application to make additional use of the fixtures and competition data that is available.

## Planning Process and Problem Solving Strategy

I have always been a big fan of soccer throughout my life, and in particular the Premier League. During class I came across a list of free, public APIs available for use, one of which contained information about soccer competitions, teams, and players (see link above). From there, I planned to create a "squad manager" with which users could search and add/remove players from their squad.

Research went into what data I wanted to capture in my application and how I would gather the necessary information from the 3rd party API in order to make those connections. I created wireframes and an ERD to create a foundation for my idea and began building from there.

As I worked through my development, I tried to keep my development as methodical as possible. I would always understand what the next 3-4 items were next that I planned to tackle. As I completed any functionality/feature, I would then revisit my to-dos to make sure my plan was still sound. If any problems did arise when working through a particular piece of functionality, I would work as methodically as possible to isloate and address the issue before moving onto any additional development.

Once I considered my development "initially complete", I executed a series of around 50 test cases on my application. This was intended to provide a full suite of testing and was useful in oncovering a few minor bugs. Once these minor bugs were addressed, the application was deployed to production.

Once in production, I executed another series of "smoke tests" to ensure that the behavior I saw in test was functioning the same way in production. This proved very useful as a few small bugs were discovered in production that were not present in test. Again, I worked through these methodically and re-deployed to production once all issues had been addressed.

## Client Planning Links
- [Wireframes](https://imgur.com/zFmAdLR)

## Client Screenshot
![clientscreen](https://i.imgur.com/XU8TY4L.png)

## User Stories
- As a user I want to be able to log in so that I can manage my squad
- As a user I want to be able to search a list of players so that I can add them to my squad
- As a user I want to be able to edit a player on my squad so that their information is accurate
- As a user I want to be able to delete a player from my squad so that they are no longer a member of the squad
- As I user I want to be able to log out so that I am no longer viewing or managing my squad

# browser-template

A template for starting front-end projects. Webpack for `require` system, build
pipeline, and development server. Boostrap and Handlebars.js included. No
front-end frameworks included.

## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Replace all instances of `capstone-client` with the name of your project.
1.  Move into the new project and `git init`
1.  Add all of the files in your project with the command `git add -A`
  -   *Note:* THIS IS THE ONLY TIME YOU SHOULD RUN THIS COMMAND
1.  Commit all of your files with the command `git commit`
  -   Your commit title should read `Initial commit`
1.  Install dependencies with `npm install`.

## Structure

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `config.apiOrigins.production` (and
`config.apiOrigins.development` if it differs from the default).  With
`apiOrigins` set, developers may rely on `config.apiOrigin` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss).

Developers should use [getFormFields](forms.md) to retrieve form data to send to
an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Tasks

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
-   `grunt make-standard`: reformats all your code in the JavaScript Standard Style
-   `grunt <server|serve|s>`: generates bundles, watches, and livereloads
-   `grunt test`: runs any automated tests, depends on `grunt build`
-   `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
