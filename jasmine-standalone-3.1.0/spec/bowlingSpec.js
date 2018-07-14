describe('Bowling: ', function() {
  var frame

  beforeEach(function() {
    frame = new Frame()
  })

describe('#totalScore', function() {
  it('starts at zero', function(){
    expect(frame.totalScore).toEqual(0)
  })
})

describe('#score', function() {
  it('starts at zero', function() {
    expect(frame.currentFrame).toEqual(0)
  })

  it('adds the score of two rolls', function() {
    frame.roll1(3)
    frame.roll2(2)
    expect(frame.totalScore).toBe(5)
  })
})

describe('#roll1', function() {
  it('adds the roll to the total score', function() {
    frame.roll1(5)
    expect(frame.currentFrame).toBe(5)
  })

  it('returns "Strike" if the first roll is 10', function() {
    expect(frame.roll1(10)).toBe('Strike')
  })

  it('calls a new frame if user Strikes', function() {
    frame.roll1(10)
    expect(frame.currentFrame).toBe(0)
  })
})

describe('#roll2', function() {
  it('adds the roll to the total score', function() {
    frame.roll2(2)
    expect(frame.totalScore).toBe(2)
  })

  it('invokes "Spare" if user rolls a spare', function() {
    frame.roll1(5)
    frame.roll2(5)
    expect(frame.spare).toBe(true)
  })

  it('calls #newframe after the second roll is rolled', function() {
    frame.roll2(4)
    expect(frame.currentFrame).toBe(0)
  })
})

describe('#newframe', function() {
  it('adds the previous frames score to the total', function () {
    frame.roll1(2)
    frame.roll2(4)
    frame.newFrame()
    expect(frame.currentFrame).toBe(0)
    expect(frame.totalScore).toBe(6)
  })
})

describe('#spare', function() {
  it('starts the game as false', function() {
    expect(frame.spare).toBe(false)
  })

  it('toggles spare on if user rolls a spare', function() {
    frame.roll1(5)
    frame.roll2(5)
    expect(frame.spare).toBe(true)
  })

  it('toggles spare off if user rolls a spare then does not roll a strike the next frame', function() {
    frame.roll1(5)
    frame.roll2(5)
    frame.roll1(5)
    expect(frame.spare).toBe(false)
  })

  it('toggles spare off if user rolls a spare then rolls a strike the next frame', function() {
    frame.roll1(5)
    frame.roll2(5)
    frame.roll1(10)
    expect(frame.spare).toBe(false)
  })
})

describe('scenario 1', function() {
  it('user does not roll a spare or a strike', function() {
    frame.roll1(2)
    frame.roll2(4)
    frame.roll1(4)
    frame.roll2(3)
    expect(frame.currentFrame).toBe(0)
    expect(frame.totalScore).toBe(13)
  })
})

describe('scenario 2', function() {
  it('user rolls a spare', function() {
    frame.roll1(5)
    frame.roll2(5)
    frame.roll1(5)
    frame.roll2(4)
    expect(frame.totalScore).toBe(24)

  })
})

})
