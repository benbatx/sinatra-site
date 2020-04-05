const drawCircle = (x, y, radius, color) => {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()
  ctx.closePath()
}

let bounceCircleX = 0
let bounceCircleY = 0
let xDir = 1 // moving right
let yDir = 1 // moving downward
let circleSpeed = 1/10
const drawFrame = (timeDiff, canvasWidth, canvasHeight) => {
  // timeDiff is the number of seconds since the last time this function was run
  //          usually a very small num
  changeText('heyooo')

  if (bounceCircleX > canvasWidth) {
    xDir = -1
  } else if (bounceCircleX < 0) {
    xDir = 1
  }
  if (bounceCircleY > canvasHeight) {
    yDir = -1
  } else if (bounceCircleY < 0) {
    yDir = 1
  }
  bounceCircleX += xDir * timeDiff * circleSpeed
  bounceCircleY += yDir * timeDiff * circleSpeed


  drawCircle(bounceCircleX, bounceCircleY, 50, 'green')
}
