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

  it('toggles #strike on if the first roll is 10', function() {
    frame.roll1(10)
    expect(frame.strike).toBe(true)
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

  it('toggles spare if user rolls a spare', function() {
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

  it('adds a spare bonus after the first roll of a new frame', function() {
    frame.roll1(5)
    frame.roll2(5)
    frame.roll1(3)
    expect(frame.totalScore).toBe(13)
  })

  it('adds a spare bonus if the first roll of a new frame is a strike', function () {
    frame.roll1(6)
    frame.roll2(4)
    frame.roll1(10)
    expect(frame.totalScore).toBe(30)
  })
})

describe('#strike', function() {
  it('starts the game as false', function() {
    expect(frame.strike).toBe(false)
  })

  it('toggles strike on if user rolls a strike', function() {
    frame.roll1(10)
    expect(frame.strike).toBe(true)
  })

  it('toggles strike off if user rolls a strike, then an open frame', function() {
    frame.roll1(10)
    frame.roll1(5)
    frame.roll2(3)
    expect(frame.strike).toBe(false)
  })

  it('toggles strike off if user rolls two strikes in a row, then an open frame', function () {
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(1)
    frame.roll2(3)
    expect(frame.strike).toBe(false)
  })

  it('keeps strike on if user rolls two strikes in a row', function() {
    frame.roll1(10)
    frame.roll1(10)
    expect(frame.strike).toBe(true)
  })

  it('adds a strike bonus after open frame following a strike', function () {
    frame.roll1(10)
    frame.roll1(4)
    frame.roll2(3)
    expect(frame.totalScore).toBe(24)
  })

  it('adds a strike bonus after spare following a strike', function() {
    frame.roll1(10)
    frame.roll1(5)
    frame.roll2(5)
    expect(frame.totalScore).toBe(30)
  })
})

describe('#doubleStrike', function () {
  it('toggles on if player score two strikes in a row', function () {
    frame.roll1(10)
    frame.roll1(10)
    expect(frame.doubleStrike).toBe(true)
    })

  it('adds a strike bonus if player scores two strikes in a row', function () {
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(5)
    frame.roll2(3)
    expect(frame.totalScore).toBe(51)
  })

  it('adds a strike bonus if player score three strikes in a row', function () {
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(3)
    frame.roll2(4)
    expect(frame.totalScore).toBe(77)
  })
})

describe('#tripleStrike', function() {
  // it('toggles on if a player scores three strikes in a row', function () {
  //   frame.roll1(10)
  //   frame.roll1(10)
  //   frame.roll1(10)
  //   expect(frame.tripleStrike).toBe(true)
  // })
})

describe('#10th Frame', function() {
  // it('reaching the 10th frame toggles #final on', function() {
  //   frame.frameNumber = 9
  //   frame.newFrame()
  //   expect(frame.final).toBe(true)
  // })

  it('ends with an open frame', function() {
    frame.final = true
    frame.totalScore = 100
    frame.roll1(1)
    frame.roll2(3)
    expect(frame.totalScore).toBe(104)
  })

  it('ends with a spare, then an open frame', function(){
    frame.frameNumber = 9
    frame.totalScore = 141
    frame.roll1(8)
    frame.roll2(2)
    frame.roll1(6)
    frame.bonus(1)
    expect(frame.totalScore).toBe(164)
  })

  it('ends with a spare, and a bonus roll', function () {
    frame.final = true
    frame.totalScore = 100
    frame.roll1(2)
    frame.roll2(8)
    frame.bonus(3)
    expect(frame.totalScore).toBe(113)
  })

  it('ends with a strike, and an open frame', function() {
    frame.final = true
    frame.totalScore = 100
    frame.roll1(10)
    frame.bonus(4)
    frame.bonus(3)
    expect(frame.totalScore).toBe(117)
  })

  it('ends with two strikes and a normal role', function() {
    frame.final = true
    frame.totalScore = 100
    frame.roll1(10)
    frame.bonus(10)
    frame.bonus(5)
    expect(frame.totalScore).toBe(125)
  })

  it('ends with three strikes', function() {
    frame.final = true
    frame.totalScore = 100
    frame.roll1(10)
    frame.bonus(10)
    frame.bonus(10)
    expect(frame.totalScore).toBe(130)
  })

})

describe('#frameNumber', function() {
  // it('counts the frame number', function() {
  //   frame.roll1(1)
  //   frame.roll2(3)
  //   frame.roll1(10)
  //   frame.roll1(2)
  //   frame.roll2(3)
  //   expect(frame.frameNumber).toBe(4)
  // })
})

// describe('#perfectFinal', function() {
//   it('toggles on if user throws two strikes in last frame', function() {
//
//   })
// })

describe('scenarios: ', function() {
  it('1. open frame/open frame', function() {
    frame.roll1(2)
    frame.roll2(4)
    frame.roll1(4)
    frame.roll2(3)
    expect(frame.currentFrame).toBe(0)
    expect(frame.totalScore).toBe(13)
  })

  it('2. spare/open frame', function() {
    frame.roll1(5)
    frame.roll2(5)
    frame.roll1(5)
    frame.roll2(4)
    expect(frame.totalScore).toBe(24)
  })

  it('3. open frame/spare', function() {
    frame.roll1(3)
    frame.roll2(4)
    frame.roll1(5)
    frame.roll2(5)
    expect(frame.totalScore).toBe(17)
  })

  it('4. open frame/spare/open frame', function() {
    frame.roll1(3)
    frame.roll2(4)
    frame.roll1(5)
    frame.roll2(5)
    frame.roll1(3)
    frame.roll2(4)
    expect(frame.totalScore).toBe(27)
  })

  it('5. strike/strike/open frame', function() {
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(1)
    frame.roll2(3)
    expect(frame.totalScore).toBe(39)
  })

  it('6. open/open/spare/spare/strike/open', function() {
    frame.roll1(1)
    frame.roll2(4)
    frame.roll1(4)
    frame.roll2(5)
    frame.roll1(6)
    frame.roll2(4)
    frame.roll1(5)
    frame.roll2(5)
    frame.roll1(10)
    frame.roll1(1)
    frame.roll2(0)
    expect(frame.totalScore).toBe(61)
  })

  it('7. full game', function () {
    frame.roll1(1)
    frame.roll2(4)
    frame.roll1(4)
    frame.roll2(5)
    frame.roll1(6)
    frame.roll2(4)
    frame.roll1(5)
    frame.roll2(5)
    frame.roll1(10)
    frame.roll1(1)
    frame.roll2(0)
    frame.roll1(7)
    frame.roll2(3)
    frame.roll1(6)
    frame.roll2(4)
    frame.roll1(10)
    frame.roll1(2)
    frame.roll2(8)
    frame.bonus(6)
    expect(frame.totalScore).toBe(133)
  })

  it('8. perfect game', function() {
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.bonus(10)
    frame.bonus(10)
    expect(frame.totalScore).toBe(300)
  })

  it('9. normal game with perfect end', function () {
    frame.roll1(1)
    frame.roll2(4)
    frame.roll1(4)
    frame.roll2(5)
    frame.roll1(6)
    frame.roll2(4)
    frame.roll1(5)
    frame.roll2(5)
    frame.roll1(10)
    frame.roll1(1)
    frame.roll2(0)
    frame.roll1(7)
    frame.roll2(3)
    frame.roll1(6)
    frame.roll2(4)
    frame.roll1(10)
    frame.roll1(10)
    frame.bonus(10)
    frame.bonus(10)
    expect(frame.totalScore).toBe(157)
  })

  it('10. example game', function() {
    frame.roll1(10)
    frame.roll1(8)
    frame.roll2(2)
    frame.roll1(9)
    frame.roll2(1)
    frame.roll1(8)
    frame.roll2(0)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(9)
    frame.roll2(1)
    frame.roll1(9)
    frame.roll2(1)
    frame.roll1(10)
    frame.roll1(10)
    frame.bonus(9)
    frame.bonus(1)
    expect(frame.totalScore).toBe(202)
  })

  it('11. example game', function() {
    frame.roll1(7)
    frame.roll2(3)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(8)
    frame.roll2(1)
    frame.roll1(9)
    frame.roll2(1)
    frame.roll1(8)
    frame.roll2(1)
    frame.roll1(10)
    frame.roll1(9)
    frame.roll2(1)
    frame.roll1(8)
    frame.roll2(2)
    frame.roll1(6)
    frame.bonus(1)
    expect(frame.totalScore).toBe(164)
  })

  it('12. example game', function () {
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(10)
    frame.roll1(6)
    frame.roll2(4)
    frame.roll1(10)
    frame.bonus(10)
    frame.bonus(10)
    expect(frame.totalScore).toBe(276)
  })
})
})
