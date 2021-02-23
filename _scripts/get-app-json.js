require('@babel/register');

const validateInputAndGetApp = require('./helpers').validateInputAndGetApp;

const appJSON = validateInputAndGetApp('Expected usage: npm run get-app-json [appName]');

const pretty = JSON.stringify(appJSON, null, 2);

console.log(pretty);
process.exit(0);
