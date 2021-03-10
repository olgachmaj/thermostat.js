$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#thermostat-temperature').text(thermostat.temperature + '°');

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=' + API_KEY, function(data) {
    console.log(data);
    $('#current-temperature').text(data.main.temp + '°');
    $('#current-city').text(data.name);
  })

  $('#select-city-submit').click(function(event) {
    event.preventDefault();
    var city = $('#select-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+ API_KEY + '&units=metric', function(data) {
     console.log(data);
    $('#current-temperature').text(data.main.temp + '°');
    $('#current-city').text(data.name);
  })
})

  $('#temperature-up').click(function() {
    thermostat.up()
    updateTemperature()
  })


  $('#temperature-down').click(function() {
    thermostat.down()
    updateTemperature()
  })

  $('#temperature-reset').click(function() {
    thermostat.reset()
    updateTemperature()

  })

  $('#checkbox').click(function() {
    thermostat.savingModeSwitch()
    $('#power-saving-status').text(thermostat.powerSavingMode)
    updateTemperature()

  })

  function updateTemperature() {
  $('#thermostat-temperature').text(thermostat.temperature + '°');
  $('#thermostat-temperature').attr('class', thermostat.currentEnergyUse());
}

})
