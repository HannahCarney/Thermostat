

var thermostat = new Thermostat();

var updateColor = function() {
  $('#energyColor').addClass(thermostat.energyColor);
  $('#PSM-title').addClass(thermostat.energyColor);

};

var removeColor = function() {
  $('#energyColor').removeClass();
  $('#PSM-title').removeClass();
};

var updateTemperature = function() {
    removeColor();
    updateColor();
  $('#temperature').text(thermostat.temperature);
 

};

