const amplifyApp = require('amplify-app');

async function run(context) {
  const { frontend } = context.exeInfo.projectConfig;
  if (frontend === 'ios') {
    await amplifyApp.run({ skipEnvCheck: true, platform: frontend, skipInit: true, internalOnlyIosCallback: true });
  }
}

module.exports = {
  run,
};
