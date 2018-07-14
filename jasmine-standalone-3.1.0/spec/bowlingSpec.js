describe('Airport: ', function() {
  var airport
  var plane

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  describe('lands a plane', function() {
    it('confirms landing', function() {
      spyOn(airport, 'weather').and.returnValue(false)
      expect(airport.land(plane)).toBe("Plane landed successfully")
    });
  });

  describe('stores landed planes', function() {
    it('stores landed planes', function() {
      spyOn(airport, 'weather').and.returnValue(false)
      airport.land(plane)
      expect(airport.planes).toContain(plane)
    });
  });

  describe('return error', function() {
    it('when already at the airport', function() {
      spyOn(airport, 'weather').and.returnValue(false)
      airport.land(plane)
      expect( function(){ airport.land(plane) }).toThrow("Cannot land: airport full")
    });
  });

  describe('return error', function() {
    it('when weather is stormy', function() {
      spyOn(airport, 'weather').and.returnValue(true)
      // expect(airport.weather()).toEqual(true)
      expect( function() { airport.land(plane) }).toThrow("Cannot land: stormy weather")
    })
  })

  describe('takeoff a plane', function() {
    it('confirms takeoff', function() {
      spyOn(airport, 'weather').and.returnValue(false)
      airport.land(plane)
      expect(airport.takeoff(plane)).toBe("Plane took off successfully")
      // expect(airport.planes).not.toContain(plane)
    });
  });

  describe('no longer stores planes that have taken off', function() {
    it('empties taken off planes', function() {
      spyOn(airport, 'weather').and.returnValue(false)
      airport.land(plane)
      airport.takeoff(plane)
      expect(airport.planes).not.toContain(plane)
    });
  });

  describe('return error', function() {
    it('cannot takeoff if airport is empty', function() {
      spyOn(airport, 'weather').and.returnValue(false)
      expect( function(){ airport.takeoff(plane) }).toThrow("Cannot takeoff: airport empty")
    });
  });

  describe('return error', function() {
    it('cannot takeoff if weather is stormy', function() {
      spyOn(airport, 'weather').and.returnValue(false)
      airport.land
      spyOn(airport, 'weather').and.returnValue(true)
      expect( function() { airport.takeoff(plane) }).toThrow("Cannot takeoff: stormy weather")
    })
  })
});
