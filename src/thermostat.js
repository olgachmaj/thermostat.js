class Thermostat {
  constructor(){
    this.temperature = 20
    this.maxTemperature = 32
  }

  up() {
    this.temperature += 1;
  }

  down() {
    return (this.temperature <= 10) ? "Minimum temperature is 10 degrees." : this.temperature -= 1;
  }

  savingModeSwitch() {
    return this.maxTemperature === 32 ? this.maxTemperature = 25 : this.maxTemperature = 32
  }
}
