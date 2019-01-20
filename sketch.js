let bird, pipes = []

function setup() {
  createCanvas(1000,600)
  console.log(height, 'In canvas');

  bird = new Bird()
  pipes.push(new Pipe())
}

function draw() {
  background(0)
  bird.update()
  bird.show()

  if (frameCount % 95 === 0) pipes.push(new Pipe())

  for( let i = pipes.length - 1; i >= 0; i-- ) {
    pipes[i].update()
    pipes[i].show()
    if (pipes[i].isHit(bird)) {
      pipes[i].show()
      noLoop()
    }
    if (pipes[i].x < -30) pipes.splice(i, 1)
  }
}

function keyPressed() {
  if (key === ' ') {
    console.log('SPACE')
    bird.lift()
  }
  else return false
}
