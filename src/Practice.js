var Thermostat = function() {
  this.temperature = 20;
  this.powerSavingMode = true;
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

Thermostat.prototype.increaseTemperature = function(changeTempBy) {

   this.temperature += changeTempBy;

   if (this.powerSavingMode === true && this.temperature > 25)
   {
     this.temperature = 25
     return ("Too Hot")
   }
   else if (this.powerSavingMode === false && this.temperature > 32)
   {
    this.temperature = 32
    return ("Too Hot")
   }
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

Thermostat.prototype.reset = function() {

  this.temperature = 20;

};
