require('@babel/register');

const api = require('./api');
const helpers = require('./helpers');

helpers.rejectTemplateAppPOST();

async function postApp() {
    const appJSON = helpers.validateInputAndGetApp('Expected usage: npm run register-new-version [appName]');
    await api.postAppToOrg(appJSON);
};

postApp();