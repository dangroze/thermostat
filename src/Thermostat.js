'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this._temperature = this.DEFAULT_TEMPERATURE;
  this.MIN_TEMPERATURE = 10;
  this._powerSavingOn = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.LOW_USAGE_TEMP = 18;
}
Thermostat.prototype = {
  currentTemperature: function() {
    return this._temperature;
  },
  up: function() {
    if(this._temperature < this.maxTemperature()){
      this._temperature += 1;
    }else {
      this._temperature = this.maxTemperature();
    }
  },

  down: function() {
    if (this._temperature > this.MIN_TEMPERATURE) {
      this._temperature -= 1;
    } else {
      this._temperature = this.MIN_TEMPERATURE;
    }
  },
  maxTemperature: function() {
    if (this._powerSavingOn) {
      return this.MAX_LIMIT_PSM_ON;
    } else {
      return this.MAX_LIMIT_PSM_OFF;
    }
  },
  reset: function() {
    this._temperature = this.DEFAULT_TEMPERATURE;
  },
  energyUsage: function() {
    if (this._temperature < this.LOW_USAGE_TEMP) {
      return 'low-usage';
    } else if (this._temperature < this.MAX_LIMIT_PSM_ON) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  },
  isPowerSavingModeOn: function() {
    return this._powerSavingOn === true;
  },
  switchPowerSavingModeOff: function() {
    this._powerSavingOn = false;
  },
  switchPowerSavingModeOn: function() {
    this._powerSavingOn = true;
  }
}
