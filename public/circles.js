const drawCircle = (x, y, radius, color) => {
  // https://simon.html5.org/dump/html5-canvas-cheat-sheet.html
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()
  ctx.closePath()
}

let circleX = 0 // coords of center of circle
let circleY = 0

let xDir = 1 // moving right
let yDir = 1 // moving downward
let circleSpeed = 1/10
let circleRadius = 50

const drawFrame = (timeDiff, canvasWidth, canvasHeight) => {
  // timeDiff is the number of seconds since the last time this function was run
  //          usually a very small num
  drawCircle(100, 100, 25, 'blue')

  if (circleX > canvasWidth) {
    xDir = -1
  } else if (circleX < 0) {
    xDir = 1
  }
  if (circleY > canvasHeight) {
    yDir = -1
  } else if (circleY < 0) {
    yDir = 1
  }
  circleX += xDir * timeDiff * circleSpeed
  circleY += yDir * timeDiff * circleSpeed

  drawCircle(circleX, circleY, circleRadius, 'green')
}

document.addEventListener('click', (evt) => {
  const distToCircle = Math.sqrt(Math.pow(evt.x - circleX, 2) + Math.pow(evt.y - circleY, 2))
  if (distToCircle < circleRadius) {
    changeText("you clicked the circle. good job!")
  } else {
    changeText(`you clicked: ${evt.x}, ${evt.y}`)
  }
})
