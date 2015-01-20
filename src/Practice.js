"use strict"


var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  return this.temperature += changeTempBy; 
};
