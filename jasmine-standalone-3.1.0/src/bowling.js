Frame = function() {
  this.totalScore = 0
  this.currentFrame = 0
  this.spare = false
  this.strike = false
  this.doubleStrike = false
  this.frameNumber = 1
  this.final = false
}

Frame.prototype.roll1 = function(value) {
  if (this.spare === true) {
    if (this.final === true) {
      this.totalScore += value
      return this.totalScore
    }
    this.spare = false
    this.totalScore += value
  }

  if (this.strike === true) {
      this.totalScore += value
  }

  if (this.doubleStrike === true) {
    this.totalScore += value
  }

  if ((this.strike === true) && (this.doubleStrike === true)) {
    this.strike = false
  }

  if (value === 10) {
      if ((this.doubleStrike === true) && (this.final === true)) {
          this.totalScore += value
          return this.totalScore
        }
      else {
          if (this.strike === true) {
          this.doubleStrike = true
                                    }
          this.currentFrame += value
          this.strike = true
          this.newFrame()
                        }
                }
  else {
    if (this.final === true) {
        this.totalScore += value
        return this.totalScore
      }
    else {
        this.currentFrame += value
        }
        }
}

Frame.prototype.roll2 = function(value) {
  if (this.strike === true) {
    this.totalScore += value
    this.strike = false
  }

  if (this.doubleStrike === true) {
    this.totalScore += value
    this.doubleStrike = false
  }

  if ((this.currentFrame + value) === 10) {
    this.currentFrame += value
    this.newFrame()
    this.spare = true
  }
  else {
    this.currentFrame += value
    if (this.final === true) {
      this.totalScore += this.currentFrame
      return this.totalScore
    }
    this.newFrame()
}
}

Frame.prototype.newFrame = function() {
  this.totalScore += this.currentFrame
  this.currentFrame = 0
  if (this.frameNumber === 9) {
    this.final = true
  }
  else {
  this.frameNumber ++
  }
}
