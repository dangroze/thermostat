'use strict';

function Thermostat(){
  this._temperature = 20;
  this.MIN_TEMPERATURE = 10;
};
Thermostat.prototype = {
  currentTemperature: function() {
    return this._temperature;
  },
  up: function(temp) {
    this._temperature += temp;
  },
  down: function(temp) {
    if(this._temperature - temp < this.MIN_TEMPERATURE) {
      this._temperature = this.MIN_TEMPERATURE;
    } else {
    this._temperature -= temp;
    }
  }
}
