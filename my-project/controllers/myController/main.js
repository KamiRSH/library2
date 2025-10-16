const Controller = require('@partFramework/baseController');
const DTO = require('../../model')
const Cores = require('../../core')
const dto = new DTO()
const core = new Cores.Core();

exports.controller = class SampleController extends Controller {
  httpGet(){
    return 'Hello from PartFramework 10';
  }

  async signup(reqBody){
    const objDetail = dto.jDetailToObjUser(reqBody)
    return core.signup(objDetail)
  }
};

exports.introduceToLoader = {
  config: require('./config'),
  schema: require('./schema')
};