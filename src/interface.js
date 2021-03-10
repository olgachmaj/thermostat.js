$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#thermostat-temperature').text(thermostat.temperature);

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=85517936ebe5c7470d0c186d231bd426', function(data) {
    console.log(data);
    $('#current-temperature').text(data.main.temp);
  })

  $('#select-city-submit').click(function(event) {
    event.preventDefault();
    var city = $('#select-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=85517936ebe5c7470d0c186d231bd426&units=metric', function(data) {
     console.log(data);
    $('#current-temperature').text(data.main.temp);
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
