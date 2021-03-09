$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#thermostat-temperature').text(thermostat.temperature);

  $('#temperature-up').click(function() {
    thermostat.up()
    updateTemperature()
  })


  $('#temperature-down').click(function() {
    thermostat.down()
    updateTemperature()
  })

  $('#reset').click(function() {
    thermostat.reset()
    updateTemperature()

  })

  $('#powersaving-switch').click(function() {
    thermostat.savingModeSwitch()
    $('#power-saving-status').text(thermostat.powerSavingMode)
    updateTemperature()

  })

  function updateTemperature() {
  $('#thermostat-temperature').text(thermostat.temperature);
  $('#thermostat-temperature').attr('class', thermostat.currentEnergyUse());
}

})
