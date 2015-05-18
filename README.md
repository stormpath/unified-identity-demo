# unified-identity-demo

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/stormpath/unified-identity-demo)


## Purpose

This demo app showcases how you can easily throw together a web application with
user registration, authentication, and social login using plain old Javascript.

This application works by using [Stormpath][] to store your user accounts and
user data, using [OAuth.io][] to handle social login and account linking, and
using [Heroku][] to easily host the web application for free.

The guide below explains how to make this example application run in your own
environment.


## What it Looks Like

Here's what the application looks like once deployed:

![Demo](https://raw.githubusercontent.com/stormpath/unified-identity-demo/master/static/images/demo.gif)

This demo application lets you:

- Create an account.
- Enter a private dashboard page.
- Link your Facebook / Twitter / Google social accounts to create a 'unified'
  identity.


## Installation

To install this demo app and get started, you'll first need to create a
[Heroku][] account if you haven't already.

Next, you'll want to click the big *"Deploy to Heroku"* button at the top of
this README -- this should prompt you to create a new (*free*) Heroku
application which will automatically run and configure itself with both the
[Stormpath][] and [OAuth.io][] addons.

You should see a page that looks something like this:

![Heroku Install Page][]

To launch your new Heroku app, just click the *"Deploy for Free"* button at the
bottom of the page =)


  [Stormpath]: https://stormpath.com/ "Stormpath User Management API"
  [OAuth.io]: https://oauth.io/home "OAuth.io - Simple OAuth Integration"
  [Heroku]: https://www.heroku.com/ "Heroku"
  [Heroku Install Page]: https://raw.githubusercontent.com/stormpath/unified-identity-demo/master/static/images/heroku-install-page.png "Heroku Install Page"
