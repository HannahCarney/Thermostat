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

    it("it can be reset", function(){
      thermostat.increaseTemperature(2)
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
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

    it("has a maximum temperature of 25 degrees when power-saving mode is on", function() {
      expect(thermostat.increaseTemperature(6)).toBe("Too Hot");
      expect(thermostat.temperature).toEqual(25);
    });

    it("has a maximum temperature of 32 degrees when power-saving mode is off", function() {
      thermostat.powerSavingModeSwitch("off");
      expect(thermostat.increaseTemperature(13)).toBe("Too Hot");
      expect(thermostat.temperature).toEqual(32);
    });


  });

  describe("energy usage shows", function() {

    it("green when temperature is less than 18", function() {
      thermostat.decreaseTemperature(3);
      expect(thermostat.energyColor).toBe("low-usage");
    }); 

    it("yellow when temperature is between 18 and 25", function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.energyColor).toBe("medium-usage");
    });

    it("red when power mode is off and temperature is greater than 25", function() {
      thermostat.powerSavingModeSwitch("off");
      thermostat.increaseTemperature(6);
      expect(thermostat.energyColor).toBe("high-usage");
    });

  });

});