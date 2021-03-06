var Service, Characteristic;

module.exports = function (homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerAccessory("homebridge-gong", "Gong", gong);
};

gong.prototype = {
  getServices: function () {
    let informationService = new Service.AccessoryInformation();
    informationService
      .setCharacteristic(Characteristic.Manufacturer, "Ethan Russell")
      .setCharacteristic(Characteristic.Model, "Carbon Fiber 12\" Gong")
      .setCharacteristic(Characteristic.SerialNumber, "420-69-AX");

    let switchService = new Service.Switch("Gong");
    switchService
      .getCharacteristic(Characteristic.On)
      .on('get', this.getSwitchOnCharacteristic.bind(this))
      .on('set', this.setSwitchOnCharacteristic.bind(this));

    this.informationService = informationService;
    this.switchService = switchService;
    return [informationService, switchService];
  },

  getSwitchOnCharacteristic: function (next) {
    const me = this;
    request({
      url: me.getUrl,
      method: 'GET',
    },
    function (error, response, body) {
      if (error) {
        me.log('STATUS: ' + response.statusCode);
        me.log(error.message);
        return next(error);
      }

      return next(null, 'off');
    });
  },

  setSwitchOnCharacteristic: function (on, next) {
    const me = this;
    console.log("would set to: " + on)
    request({
      url: me.postUrl,
      body: "{'targetState': 'true'}",
      method: 'POST',
      headers: {'Content-type': 'application/json'}
    },
    function (error, response) {
      if (error) {
        console.log('STATUS: ' + response)
        // me.log('STATUS: ' + response.statusCode);
        me.log(error.message);
        return next(); //did remove error
      }
      return next();
    });
  }



};


const request = require('request');
const url = require('url');

function gong(log, config) {
  this.log = log;
  this.getUrl = url.parse(config['getUrl']);
  this.postUrl = url.parse(config['postUrl']);
  this.postUrl = "http://192.168.1.101:4664/gong"
  console.log("postURL" + this.postUrl)
}

// gong.prototype = {
