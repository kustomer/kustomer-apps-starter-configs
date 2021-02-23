export default {
    // note: The template points to a component with a src property
    // Use this DynamicCard component to load a remote url in your kview that utilizes the Kustomer Cards SDK for more advanced integrations.
    // For documentation around this, see https://kustomer-enterprise-group.readme.io/kustomer-apps-platform/docs/card-js
    template:'<div><DynamicCard src={"https://<<INSERT_YOUR_TARGET_URL_HERE>>"} context={object.context} noPadding fillToWidth /></div>\n',
    name: 'card-js-kview-<<organization>>.advanced', // replace organization with your Kustomer organization name
    context: 'smartbar-card',
    resource: 'customer',
    meta: {
        displayName: 'Cards SDK Kview',
        icon: 'earth',
        state: 'open'
    }
}
