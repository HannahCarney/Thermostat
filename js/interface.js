

var thermostat = new Thermostat();

var updateColor = function() {
  $('#energyColor').addClass(thermostat.energyColor);
};

var removeColor = function() {
  $('#energyColor').removeClass();
};

var updateTemperature = function() {
    removeColor();
    updateColor();
  $('#temperature').text(thermostat.temperature);
  

};

