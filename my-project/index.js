const Program = require('./Program');

const Cores = require("./core.js")

const projectConfig = require('./project-config');
const env = process.env.MODE || process.env.mode || 'dev';

(async () => {

  await Cores.beginning()

  const program = new Program(projectConfig[env]);
  await program.run();
})();   //don't forget to run with sudo!
