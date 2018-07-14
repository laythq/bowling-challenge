Frame = function() {
  this.totalScore = 0
  this.currentFrame = 0
  this.spare = false
}

Frame.prototype.roll1 = function(value) {
  if (this.spare === true) {
    this.spare = false
    this.totalScore += value
  }

    if (value === 10) {
        this.currentFrame += value
        this.newFrame()
        return 'Strike'
                      }
    else {
        this.currentFrame += value
        return value
        }

}

Frame.prototype.roll2 = function(value) {
  if ((this.currentFrame + value) === 10) {
    this.currentFrame += value
    this.newFrame()
    this.spare = true
  }
  else {
    this.currentFrame += value
    this.newFrame()
    return value
}
}

Frame.prototype.newFrame = function() {
  this.totalScore += this.currentFrame
  this.currentFrame = 0
}
