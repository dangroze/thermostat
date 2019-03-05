'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('temperature starts at 20', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  });
  it('increases temperature with up()', function(){
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });
  it('decreases temp with down()', function() {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });
  it('minimum temp is 10', function(){
    for(var i = 0; i < 15; i++){
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });
  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });
  it('can switch PSM on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('maximum temp is 25 when power saver mode = on', function(){
    for(var i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(25);
  });
  it('cannot set temp above 32 when power saver mode off', function(){
    thermostat.switchPowerSavingModeOff();
    for(var i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(32);
  });
  it('can reset temp to 20', function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20);
  });
  describe('Energy usage levels', function () {
    it('Shows low usage when temp < 18', function () {
      for(var i = 0; i < 3; i++) {
        thermostat.down();
      }
        expect(thermostat.energyUsage()).toEqual('low-usage');
    })
    it('Shows medium usage when temp is between 18-25', function () {
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    })
    it('Shows high usage when temp is > 25', function () {
      for(var i = 0; i < 10; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    })
  })
});
