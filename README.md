# Shop-local

This README outlines the details of collaborating on this Ember application.

## User stories

Must
* As a user, I want to see a list of all local businesses
  * With seeded json data, and inputs from real local businesses ;)
    grocery, clothing, art, bookstores, haircut, spa, restaurant, mechanics, dry cleaners, bed and breakfast, hotel/motel/inn, recreation, theater, resale
  * do a Google Places API call, use json data to seed database manually
  * Business: Name, hours, address, category/keyword, phone, image, years-in-business, description, website
  * category: name, image
* As a user, I want to drill lists of businesses down by category (e.g. food, spa, haircut)
* As a business, I want to submit my business to Shop-local IF it is not already on Shop-local
* As a business, I want to see my business' page immediately after submitting my business to your website to see what it looks like (and edit).
* As an business, I want to be able update my business
  * https://emberobserver.com/addons/ember-modal-dialog
* As a business, I want to delete my business

Nice to have
* HOST Site on Heroku
* As a user, I want to search a business by name
* As a user/business, I want shop-local to have all the businesses that are in Google Places already
  * https://developers.google.com/places/web-service/search
* As a business, I want to offer sales/packages/coupons/deals to users on my business' page
* As a user, I want to see the location of this business on a google map on the business' page
  * Convert lat/long to
* As a business, I want to log in to shop-local with my own business' permissions to edit my business
* As a business, I do not want to be able to update other businesses, just mine. :)
* As a user, I want to review/see reviews of local businesses
* As a user, I want to bookmark my favorite local businesses
* As a user/business, I want to share a business' unique URL with others
  * (see RESTful URL routing dilemma, with drilling down to a business page from categories or drilling down from a full list of businesses).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
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
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)