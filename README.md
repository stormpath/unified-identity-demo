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

**NOTE**: Keep track of your newly created app name, we'll need this below to
finish setting up the demo!


## CLI Configuration

Before continuing, I'm going to assume you've already got the
[Heroku Toolbelt][] setup and working so that you can use the Heroku command
line tool.

If you don't already have it installed and working, go set it up now!


## Setup

To setup the demo app, we'll need to first grab our Stormpath API keys.  You can
do this by running the below command:

```console
$ heroku config --app random-demo-app
=== random-demo-app Config Vars
OAUTHIO_PUBLIC_KEY:       xxx
STORMPATH_API_KEY_ID:     xxx
STORMPATH_API_KEY_SECRET: xxx
STORMPATH_URL:            https://api.stormpath.com/v1/applications/xxx
```

**NOTE**: You should see something similar to the above.  You'll want to write
down your Stormpath API Key ID and API Key Secret values.  You'll need these
below.

Next, you need to open up the OAuth.io addon and configure it to use Stormpath
-- this integration is what allows us to support a *"unified identity"* model
whereas all users created in our app will be stored in Stormpath's secure user
database -- and all social logins will be handled by OAuth.io's excellent
Javascript toolset.

Here's what you need to do.

First, open up the OAuth.io interface:

```console
$ heroku addons:open oauthio --app random-demo-app
```

This will open your browser automatically, and you should see something like
this:

![OAuth.io Dashboard][]


  [Stormpath]: https://stormpath.com/ "Stormpath User Management API"
  [OAuth.io]: https://oauth.io/home "OAuth.io - Simple OAuth Integration"
  [Heroku]: https://www.heroku.com/ "Heroku"
  [Heroku Install Page]: https://raw.githubusercontent.com/stormpath/unified-identity-demo/master/static/images/heroku-install-page.png "Heroku Install Page"
  [Heroku Toolbelt]: https://toolbelt.heroku.com/ "Heroku Toolbelt"
  [OAuth.io Dashboard]: https://raw.githubusercontent.com/stormpath/unified-identity-demo/master/static/images/oauthio-dashboard.png "OAuth.io Dashboard Page"
