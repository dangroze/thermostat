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
    for (var i = 20; i > 10; i--) {
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });
});
