const PartFramework = require('partFramework');

// const core = new PartFramework()
// await core.init()

class Program {
  #core;
  #config;
  #servers;
  #controllers = './controllers';
  #controllerPackages = [];

  constructor(projectConfig) {
    this.#config = projectConfig;
    this.#core = new PartFramework(this.#config);
    this.#servers = this.#config.servers;
  }

  #loadManualControllers() {}

  #loadDependencies() {}

  async #loadControllers() {
    return this.#core.loader.loadControllersByPath(this.#controllers);
  }

  async #loadServers() {
    return this.#core.loader.loadServers(this.#servers);
  }

  async #loadControllerPackages() {
    if (this.#controllerPackages.length) {
      return this.#core.loader.loadControllerPackages(this.#controllerPackages);
    }
  }

  async run() {
    await this.#core.init();
    await this.#loadControllers();
    await this.#loadControllerPackages();
    this.#loadDependencies();
    this.#loadManualControllers();
    await this.#loadServers();
  }
}

module.exports = Program;