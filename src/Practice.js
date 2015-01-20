var Thermostat = function() {
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  return this.temperature += changeTempBy;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
 
   this.temperature -= changeTempBy;

   if (this.temperature < 10)
  {
    this.temperature = 10
    return "Too Cold"
  }
  else
  {
    return this.temperature
  }
};

Thermostat.prototype.powerSavingModeSwitch = function(onOrOff) {
  if (onOrOff === "off") 
  {
    this.powerSavingMode = false
  }
  else if (onOrOff === "on")
  {
    this.powerSavingMode = true
  }
};