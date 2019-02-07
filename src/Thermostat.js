'use strict';

function Thermostat(){
  this._temperature = 20;
};
Thermostat.prototype = {
  startingTemperature: function() {
    return this._temperature;
  }
};
