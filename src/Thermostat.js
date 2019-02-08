'use strict';

function Thermostat(){
  this._temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this._powerSavingOn = true;
};
Thermostat.prototype = {
  currentTemperature: function() {
    return this._temperature;
  },
  up: function(temp) {
    if(this._temperature + temp >= this.maxTemperature()){
      this._temperature = this.maxTemperature();
    }else {
      this._temperature += temp;
    }
  },
  down: function(temp) {
    if (this._temperature - temp < this.MIN_TEMPERATURE) {
      this._temperature = this.MIN_TEMPERATURE;
    } else {
      this._temperature -= temp;
    }
  },
  maxTemperature: function() {
    if (this._powerSavingOn) {
      return 25;
    } else {
      return 32;
    }
  },
  reset: function() {
    this._temperature = 20;
  },
  energyUsage: function() {
    if (this._temperature < 18) {
      return 'low-usage';
    } else if (this._temperature < 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}
