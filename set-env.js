const fs = require('fs'); // needed to use WriteFile
const colors = require('colors/safe') // to color the logging clearly

// get version and name from package.json
const appVer = require('./package.json').version;
const appName = require('./package.json').name;

// the file we will write the settings to
const targetPath = `./src/environments/environment.ts`;

// This will load the env vars defined in the local .env file, which should
// be added to .gitignore. That means .env will not and should not be present 
// for other environments, it will use the env vars set on the OS 
// (or for Heroku, using Heroku env var settings)
require('./node_modules/dotenv').config();

const envConfigFile = `
export const environment = {
  version: "${appVer}",
  name: "${appName}",
  production: true,
  url: "${process.env.URL}"
};
`

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) console.log(colors.red(err));
  console.log(colors.green(`\nOutput generated at ${targetPath}`));
});
