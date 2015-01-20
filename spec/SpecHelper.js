describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("by default", function() {

    it("starts at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("changing temperature", function() {

    it("can increase", function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it("can decrease", function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toEqual(19);
    });

  });

});