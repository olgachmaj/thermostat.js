'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

    describe("#up", function() {

      it('temperature goes up 1 degree', function() {
        thermostat.up()
        expect(thermostat.temperature).toEqual(21);
      });
    });

    describe("#down", function() {

      it('temperature goes down 1 degree', function() {
        thermostat.down()
        expect(thermostat.temperature).toEqual(19);
      });
    });
});
