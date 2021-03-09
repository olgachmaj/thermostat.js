class Thermostat {
  constructor(){
    this.temperature = 20
    this.maxTemperature = 25
    this.powerSavingMode = 'on'
  }

  up() {
    this.temperature += 1;
  }

  down() {
    return (this.temperature <= 10) ? "Minimum temperature is 10 degrees." : this.temperature -= 1;
  }

  savingModeSwitch() {
    this.powerSavingMode === 'on' ? this.powerSavingMode = 'off': this.powerSavingMode = 'on'
    this.maxTemperature === 25 ? this.maxTemperature = 32 : this.maxTemperature = 25
  }

  currentEnergyUse() {
    if( this.temperature < 18 ) {
      return 'Low energy use'
    }
    else if( this.temperature <= 25 && this.temperature > 18 ){
      return 'Medium energy use'
    }
    else {
      return 'High energy use'
    }
  }
}
