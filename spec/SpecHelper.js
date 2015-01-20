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

    it("has a minimum temperature of 10 degrees", function() {
      expect(thermostat.decreaseTemperature(11)).toBe("Too Cold");
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe("power-saving mode", function() {

    it("is switched on by default", function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it("can be switched off", function() {
      thermostat.powerSavingModeSwitch("off");
      expect(thermostat.powerSavingMode).toBe(false);
    });

  });

});