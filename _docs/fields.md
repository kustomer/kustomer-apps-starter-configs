# The App Config Object

Currently, we support the following properties:

```ts
interface AppConfig {
  /** The internally used name for an app. Can not include spaces or dashes */
  app: string;
  /** The name of your app that will be displayed within Kustomer */
  title: string;
  /** The url for your app icon will be displayed within Kustomer */
  iconUrl: string;
  /** The markdown-supported set of instructions for your app icon will be displayed on the app store listing */
  instructions: string;
  /** The current version of your app */
  version: string;
  /** The list of apps that are required for this app to function. These will be in the format of app_name-semantic_version */
  dependencies: string[];
  /** The markdown-supported description of your app that will be displayed on the app store listing */
  description: string;
  /** An object to store app details. */
  appDetails: {
    /** The app developer. */
    appDeveloper: {
      /** The app developer's name (= link title). */
      name: string;
      /** The app developer's website (= link URL). */
      website: string;
      /** The app developer's support email address. */
      supportEmail: string,
    },
    /** The external platform of the integration */
    externalPlatform: {
      /** The external platform's name (= link title). */
      name: string;
      /** The external platform's website (= link URL). */
      website: string;
    },
    /** Links to documentation, e.g. KB articles, helpdesk articles, etc. */
    documentationLinks: {
      /** The link title. */
      title: string;
      /** The link URL. */
      url: string;
    }
  };
  /** An array of urls for images of your app that will be displayed on the app store listing */
  screenshots: string[];
  /** The name of your app that will be displayed within Kustomer */
  installUrl: string;
  /** The message that will be displayed within Kustomer after a successful installation */
  postInstallMessage: string;
  /** Workflows let you automate processes within Kustomer, helping your team build efficiency by eliminating the need to perform repetitive tasks */
  workflows: Workflow[];,
  /** The customizable data type within Kustomer. This allows you to create new objects within the Kustomer platform. */
  klasses: string;
  /** Small chunks of JSX (either direct or an iframe-based CardJsCard), which allows for visual extensions and interactive functionality within the Kustomer UI. These can be loaded in a variety of places, such as within the Timeline, as a Card in the insights Panel, or as a Widget. */
  kviews: string;
  /** A configurable portion of a workflow, that accepts an object, which can then be ran through a defined type, and then pass a new object out into the next step of the workflow */
  actions: Action[];
  /** A defined event that occurs which will begin a workflow, and output the incoming data in a particular format */
  triggers: Trigger[];
  /** Short for inbound webhooks, these are used within Workflows and Kustomer to subscribe to events sending data into the platform */
  hooks: InboundWebHook[];
  /** Translations. Related to actions and triggers */
  i18n: Internationalization[];
  /** Public Apps will be seen across all orgs within Kustomer. Private Apps are for a single org to install */
  visibility: 'public' | 'private';
  /** An object used to configure a fully external iframe-based settings page. */
  settingsPageConfig: {
      /** The title of the settings page for your app. */
      title: string;
      /** The description of the settings page for your app. */
      description: string;
      /** The url of the contents of the settings page for your app. */
      url: string;
  };
  /** Used to configure the available settings for an app. The object inside is a nested map of each app setting based on a each setting's category and name */
  settings: {
      /**The category of a group of settings*/
      [category: string]: {
          /** The name of the given setting */
          [name: string] : {
            /** The description of the given setting */
            description: string;
            /** The default value of the given setting */
            defaultValue: string;
            /** The supported type of the given setting */
            type: 'string' | 'number' | 'boolean' | 'secret';
            /** Specifies a setting that a user is expected to update after app install for a functional app */
            required: boolean;
          }
      }
  }
  /** An array of outbound webhook configurations  */
  outboundWebhooks: OutboundWebhook[];
  /** An array of widget configurations */
  widgets: Widget[];
}

```

### Outbound Webhooks

```ts
interface OutboundWebhook {
      /** The name of the outbound webhook */
      name: string;
      /** The url of the outbound webhook */
      url: string;
      /** An array of valid kustomer events that will trigger data to be sent to the outbound webhook */
      events: string[];
      /** Custom Headers used for the outbound webhook */
      headers: {
          /** The name of the outbound webhook header */
          name: string;
          /** The value of the outbound webhook header */
          value: string;
      }[];
  }
```

### Workflows

```ts
interface Workflow {
    /** The app-scoped unique id of the workflow */
    name: string;
    /** A description of the workflow */
    description: string;
    /** Metadata for the workflow */
    meta: Record<string, any>;
}
```

### Widgets

```ts
interface Widgets {
    /** A publicly hosted url for an icon to reference the widget with */
    icon: string
    /** A url which points to the publicly hosted widget code to run in the browser */
    url: string;
    /** A title for the widget that will be displayed within the Kustomer UI */
    title: string;
    /** An optional name for the widget. This will be used for i18n purposes, and to differentiate between an app's widgets */
    name: string;
    /** The width of the widget (in pixels) */
    width: number;
    /** The height of the widget (in pixels) */
    height: number;
}
```

### Actions

```ts
interface Action {
    /** The id of the action that will be hit */
    name: string;
    /** Explains what the given action will do */
    description: string;
    /** A defined list of supported action types, which coorelate to how the data will be processed */
    type: 'rest_api' | 'event' | 'regex_match' | 'schedule' | 'aws_lamda';
    /** A definition for the shape of the data being passed into the action */
    inputTemplate: Record<string, any>;
    /** A definition for the shape of the data that will leave the action, to be used in the next step of the workflow */
    outputTemplate: Record<string, any>;
}
```

### Triggers

```ts
interface Trigger {
    /** The id of the trigger that will be hit */
    eventName: string;
    /** Explains what the associated workflow will do */
    description: string;
    /** An object that will describe the shape of the data after it has hit the workflow */
    outputTemplate: Record<string, any>;
    /** The definition of the outputTemplate's fields */
    outputSchema: Record<string, any>;
    /** An example of the outputTemplate for the given trigger */
    sampleOutputSchema: Record<string, any>;
}
```

### Inbound Webhhooks

```ts
interface InboundWebHook {
    /** the Kustomer-internal name of the inbound webhook event */
  eventName: string;
  /** How the Event name will be represented in the Kustomer UI */
  displayEventName: string;
  /** Our currently supported forms of inbound webhooks */
  type: 'form'; | 'web' | 'email';
  /** What the inbound webhook is used to do */
  description: string;
}
```

### I18N

```ts
interface Internationalization {
    /** eg en_us */
    [locale: string]: {
        /** eg "app.newApp.workflow.builder.trigger" : "This is my translatable default value. Hello!" */
        [translationKey: string]: string;
    }
}
```
