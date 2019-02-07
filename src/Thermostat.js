'use strict';

function Thermostat(){
  this._temperature = 20;
  this.MIN_TEMPERATURE = 10;
};
Thermostat.prototype = {
  currentTemperature: function() {
    return this._temperature;
  },
  up: function() {
    this._temperature += 1;
  },
  down: function() {
    if (this.isMininumTemperature()) {
      return;
    };
    this._temperature -= 1;
  },
  isMininumTemperature: function() {
    return this._temperature === this.MIN_TEMPERATURE;
  }
};
