require('@babel/register');
const apps = require('../../src/index.js').default;
const [,, app] = process.argv;

const validateInputAndGetApp = (suggestedUsage) => {

    if (!app) {
        console.log(suggestedUsage);
        process.exit(0);
    }

    if (app.includes('-')) {
        console.log('\n\nInvalid character in app name: -\n\n');
        process.exit(0);
    }

    const appJSON = apps.find((item) => item.app === app);

    if (!appJSON) {
        console.log('\n\nApp not found.\nDouble check the `app` property of your app.\n\n');
        process.exit(0);
    }

    return appJSON;
}

const rejectTemplateAppPOST = () => {
    const templateApps = [
        'my_first_app',
        'my_first_widget_app',
        'my_first_advanced_kview_app',
        'my_first_outbound_webhook_app'
    ];
    
    if(templateApps.includes(app)) {
        console.log(`
        Base template ${app} can not be installed with the key ${app}.
        Please modify the app property in the app config with a unique postfix (e.g. ${app}_myKustomerOrg01_01). \n\n`);
        process.exit(0);
    };
}

module.exports = {
    validateInputAndGetApp,
    rejectTemplateAppPOST,
}