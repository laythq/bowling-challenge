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
  // if ((this.final === true) && (this.strike === true)) {
  //   // Bonus roll?
  // }


  if (this.spare === true) {
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
// if #final and #strike are true, call #bonus roll1, and roll2
  if (value === 10) {

        if (this.strike === true) {
            this.doubleStrike = true
                                    }
        this.currentFrame += value
        this.strike = true
        this.newFrame()
                        }
    else {
        if (this.frameNumber === 10) {
          this.currentFrame += value
          this.newFrame()
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

// if #final and frame are triggered, call bonus on one more roll1

    // if ((this.final === true) && ((this.currentFrame + value) === 10)) {
    //   // Bonus roll?
    // }


      if ((this.currentFrame + value) === 10) {
    this.currentFrame += value
    this.newFrame()
    this.spare = true
    }
    else {
    this.currentFrame += value
    // if (this.final === true) {
    //   this.totalScore += this.currentFrame
    //   return this.totalScore
    // }
    this.newFrame()
    }

}

Frame.prototype.newFrame = function() {
  this.totalScore += this.currentFrame
  this.currentFrame = 0
  // if (this.frameNumber > 9) {
  //   this.final = true
  // }
  // else {
  this.frameNumber ++
  // }
}

Frame.prototype.bonus = function(value) {
  if (this.doubleStrike === true) {
    this.totalScore += value
    this.doubleStrike = false
  }
  this.totalScore += value
}
