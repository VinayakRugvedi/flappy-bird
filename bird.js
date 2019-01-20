function Bird() {
  this.x = 80
  this.y = height / 2
  this.velocity = 0
  this.gravity = 0.6
  this.antiGravity = -12
  this.birdColor = 'white'

  this.show = function () {
    fill(this.birdColor)
    ellipse(this.x, this.y, 30, 30)
  }

  this.update = function () {
    if (this.y > height - 15) {
      this.velocity = 0
      this.y = height - 15
      this.birdColor = 'red'
      noLoop()
    }

    if (this.y < 15) {
      this.velocity = 0
      this.y = 15
      this.birdColor = 'red'
      noLoop()
    }

    else {
      this.velocity += this.gravity
      this.velocity *= 0.9
      this.y += this.velocity
    }
  }

  this.lift = function () {
    this.velocity += this.antiGravity
    this.y += this.velocity
  }
}
