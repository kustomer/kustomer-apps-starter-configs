<p align="center">
  <img src="./assets/kusty.png" alt="Kustomer Kusty"/>
</p>

# Kustomer App Templates

Welcome to your first Kustomer app! There are many things an app can do, and different types of apps that can be built to integrate with the Kustomer platform, so to get you started, we have provided a couple different app configurations for what you might want to build, explaining their pieces inline. We also provide a simple command for registering and updating your apps to your Kustomer organization.

## The Basics

The main portion of this repo will be located within the `./src` folder. Here, in the root `index.js`, we can import and include new apps in the available apps array. This file is used to hold all of the available apps you have available, and where the `get-app-json` and `register-new-version` commands will look to pull the available JSON. Each subfolder will contain the contents of a single app. From here, subfolders will contain different properties of an app, all of which get bundled into the app JSON. *In order to use an app, you will need to make sure it is added to the apps array in index.js*.

**Note** Some templates include a placeholder string beginning with `<<` and ending with `>>`. Replace the value with a string unique to your app.

While some of these demo apps contain pieces that others do not, an app can support all of these features at once! Combining different portions of an app, such as advanced Kviews, Outbound Webhooks, and Workflows can create extremely feature-rich experiences for your user, so feel free to experiment combining different possibilities.

<br />


### App Properties

Apps include a variety of properties that can be configured to do many things. We have included some interfaces explaining their uses [here](./_docs/fields.md). These interfaces will help you understand the config object for a given app inside of `./src/app-name/index.js`, and how to properly create an app config using the right properties. We also have a more in-depth version of these properties in the Kustomer [Documentation Portal](http://developer.kustomer.com/kustomer-apps-platform/docs/creating-your-first-app).

### Internationalization

One property of the app definition is the `i18n` key, which allows an app developer to provide translations in as many locales as their app supports, using `en_us` as a fallback. In many cases these are not required, but provide a far richer experience for the users of your application. For explanations on the supported translated fields, as well as the appropriate format for the field key, please visit the Kustomer [Documentation Portal](https://developer.kustomer.com/kustomer-apps-platform/docs/internationalization).

### Registering Or Updating An App

Included in this repo is a command, `npm run register-new-version [app]`, which uses a couple environment variables from your `.env` file to register a new app scoped to your Kustomer organization. This command can also be used to publish a new version of an existing app. 

When publishing an app, the `app` property in your config
1. Cannot be one of the values used for these included templates
2. Must be unique. If you start from one of these templates, we recommend adding a postfix to the `app` property, starting with an underscore, followed by any value you find helpful. For instance, `my_starter_app_myKustomerOrg01_01`.

Also of note, when POSTing subsequent versions of your app to see your changes, you must bump the semver version of the `version` property, or your request will fail.

For more detailed information on what this is doing, or how to run these tasks manually with the output from `npm get-app-json [app]` and an API call with a tool such as Postman, we have some in-depth documentation over in the Kustomer [Documentation portal](https://developer.kustomer.com/kustomer-apps-platform/docs/registering-and-updating-apps).