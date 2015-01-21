var Thermostat = function() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.energyColor = "medium-usage";
};

Thermostat.prototype.powerSavingModeSwitch = function(onOrOff) {
  if (onOrOff === "off") 
  {
    this.powerSavingMode = false
    this.tooHot();
  }
  else if (onOrOff === "on")
  {
    this.powerSavingMode = true
    this.tooHot();
  }
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {

   this.temperature += changeTempBy;
   return this.tooHot();
};

Thermostat.prototype.tooHot = function() {

    if (this.powerSavingMode === true && this.temperature > 25)
   {
      this.temperature = 25
      this.setColor()
      return ("Too Hot")
   }
   else if (this.powerSavingMode === false && this.temperature > 32)
   {
      this.temperature = 32
      this.setColor()
      return ("Too Hot")
   }
   else
   { 
      this.setColor()
   }
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
 
   this.temperature -= changeTempBy;
   return this.tooCold();
};

Thermostat.prototype.tooCold = function() {

     if (this.temperature < 10)
   {
      this.temperature = 10
      this.setColor()
      return "Too Cold"
  }
    else
  {
      this.setColor()
      return this.temperature
  }

};

Thermostat.prototype.reset = function() {

  this.temperature = 20;

};

Thermostat.prototype.setColor = function() {

  if (this.temperature < 18) 
  {
    this.energyColor = "low-usage";
  }
  else if (this.temperature > 25)
  {
    this.energyColor = "high-usage";
  }
  else 
  {
    this.energyColor = "medium-usage";
  }

};




