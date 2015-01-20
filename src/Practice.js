"use strict"


var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  return this.temperature += changeTempBy;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
 
   this.temperature -= changeTempBy;

   if (this.temperature < 10)
  {
    return ("Too Cold")
  } 
  else
  {
    return this.temperature
  }  
};