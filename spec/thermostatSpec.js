'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

    describe("#up", function() {

      it('Temperature goes up 1 degree', function() {
        thermostat.up()
        expect(thermostat.temperature).toEqual(21);
      });

      it('Doesnt allow to go over maxTemperature', function() {
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        expect(thermostat.up()).toEqual(`Maximum temperature is ${thermostat.maxTemperature}`);
      });
    });

    describe("#down", function() {

      it('Temperature goes down 1 degree', function() {
        thermostat.down()
        expect(thermostat.temperature).toEqual(19);
      });

      it("Doesnt allow temperature to go below 10 degrres", function() {
         var times = 10

         for(let i = 0;i <= times;i++){
           thermostat.down()
         }
        expect(thermostat.down()).toEqual('Minimum temperature is 10 degrees.');
      });
    });

    describe("#savingModeSwitch", function() {

      it("Changes max temperature to 32 degrees, switches saving mode to off from on", function() {
         thermostat.savingModeSwitch()

        expect(thermostat.maxTemperature).toEqual(32);
        expect(thermostat.powerSavingMode).toEqual('off')
      });

      it("Changes max temperature to 25 degrees, switches saving mode to on from off", function() {
        thermostat.savingModeSwitch()
        thermostat.savingModeSwitch()


        expect(thermostat.maxTemperature).toEqual(25);
        expect(thermostat.powerSavingMode).toEqual('on')
      });
    });

    describe("#currentEnergyUse", function() {

      it("returns low energy usage if temperature is lower than 18", function() {
        thermostat.down()
        thermostat.down()
        thermostat.down()

        expect(thermostat.currentEnergyUse()).toEqual('Low energy use')
      });

      it("returns low energy usage if temperature is equal or lower than 25 but higher than 18", function() {

        expect(thermostat.currentEnergyUse()).toEqual('Medium energy use')
      });

      it("returns high energy usage if temperature is higher than 25", function() {
        thermostat.savingModeSwitch()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()

        expect(thermostat.currentEnergyUse()).toEqual('High energy use')
      });

    });

  });
