var Airport = function() {
  this.planes = []
  this.capacity = 1
  this.weatherGenerator = 0
}

var Plane = function() {}

Airport.prototype.weather = function() {
  if (this.rand() % 2 == 0) {
    return true
  }
    return false
}

Airport.prototype.land = function(plane) {
  if (this.planes.length == this.capacity) {
    throw "Cannot land: airport full"
  }
  else if (this.weather() == true) {
    throw "Cannot land: stormy weather"
  }
  else this.planes.push(plane)
  return "Plane landed successfully"
}

Airport.prototype.takeoff = function(plane) {
  if (this.planes.length == 0) {
    throw "Cannot takeoff: airport empty"
  }
  else if (this.weather() == true) {
    throw "Cannot takeoff: stormy weather"
  }
  else this.planes.pop(plane)
  return "Plane took off successfully"
}

Airport.prototype.rand = function() {
  return Math.floor((Math.random() * 10) + 1)
}
