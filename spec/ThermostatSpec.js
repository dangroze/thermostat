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
  it('maximum temp is 25 when power saver mode = on', function(){
    thermostat._powerSavingOn = true;
    thermostat.up(10);
    expect(thermostat.currentTemperature()).toEqual(25);
  });
  it('cannot set temp above 32 when power saver mode off', function(){
    thermostat._powerSavingOn = false;
    thermostat.up(10);
    expect(thermostat.currentTemperature()).toEqual(30);
    thermostat.up(5);
    expect(thermostat.currentTemperature()).toEqual(32);
  });
});
