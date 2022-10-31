const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   firebase: {
    AUTH_DOMAIN: "${process.env.AUTH_DOMAIN}",
    PROJECT_ID: "${process.env.PROJECT_ID}",
    STORAGE_BUCKET : "${process.env.STORAGE_BUCKET}",
    MESSAGE_SENDER_ID: "${process.env.MESSAGE_SENDER_ID}",
    APP_ID : "${process.env.APP_ID}",
    MEASUREMENT_ID : "${process.env.MEASUREMENT_ID}",
   }
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
});
