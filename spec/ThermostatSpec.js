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
    thermostat.up(1);
    expect(thermostat.currentTemperature()).toEqual(21);
  });
  it('decreases temp with down()', function() {
    thermostat.down(1);
    expect(thermostat.currentTemperature()).toEqual(19);
  });
  it('minimum temp is 10', function(){
    thermostat.down(12);
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
    thermostat.switchPowerSavingModeOn();
    thermostat.up(10);
    expect(thermostat.currentTemperature()).toEqual(25);
  });
  it('cannot set temp above 32 when power saver mode off', function(){
    thermostat.switchPowerSavingModeOff();
    thermostat.up(10);
    console.log(thermostat.currentTemperature());
    expect(thermostat.currentTemperature()).toEqual(30);
    thermostat.up(5);
    expect(thermostat.currentTemperature()).toEqual(32);
  });
  it('can reset temp to 20', function(){
    thermostat.up(10);
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20);
  });
  it('can display the energy usage level', function(){
    thermostat.down(5);
    expect(thermostat.energyUsage()).toEqual('low-usage');
    thermostat.up(5);
    expect(thermostat.energyUsage()).toEqual('medium-usage');
    thermostat.up(5);
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });
});
