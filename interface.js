$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemperature());
  $('#plus').click(function(){
    thermostat.up();
    $('#temperature').text(thermostat.currentTemperature());
  });
  // $('#minus').click(function(){
  //   thermostat.down();
  //   if () {
  //   }
  //   $('#temperature').text(thermostat.currentTemperature());
  // });
  // $('#plus').click(function( event ) {
  //   thermostat = new Thermo();
  //
  //   $('#temperature').html(thermostat.def_temp);
  // })
});
