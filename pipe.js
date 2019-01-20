function Pipe() {
  this.space = random(90, 250)
  this.width = 30
  this.x = width
  this.topPipe = random(height - this.space)
  this.bottomPipe = height - this.topPipe - this.space
  this.speed = 5
  this.pipeColor = 'rgb(0, 255, 0)'

  this.show = function () {
    fill(this.pipeColor)
    rect(this.x, 0, this.width, this.topPipe)
    rect(this.x, this.topPipe + this.space, this.width, this.bottomPipe)
  }

  this.update = function () {
    this.x -= this.speed
  }

  this.isHit = function (bird) {
    if ((bird.x + 16) > this.x && ((bird.x - 16) < (this.x + this.width))) {
      if (bird.y - 16 < this.topPipe || bird.y + 16 > (this.topPipe + this.space)) {
        this.pipeColor = 'red'
        return true
      }
    }
  }
}
