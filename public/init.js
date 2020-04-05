// ignore this file for now

window.canvas = document.querySelector('canvas')
window.ctx = canvas.getContext('2d')
// onResize()

const textEl = document.querySelector('#overlayText')
const changeText = (text) => {
  textEl.innerText = text
}

let lastNow = null
const drawFrameLoop = () => {
  const canvasWidth = window.innerWidth
  const canvasHeight = window.innerHeight

  canvas.width = canvasWidth
  canvas.height = canvasHeight

  ctx.moveTo(0, 0)
  ctx.lineTo(canvasWidth, 0)
  ctx.lineTo(canvasWidth, canvasHeight)
  ctx.lineTo(0, canvasHeight)
  ctx.closePath()
  ctx.fillStyle = 'black'
  ctx.fill()

  const now = (new Date).getTime()
  let tickMs = null
  if (lastNow) {
    tickMs = (now - lastNow)
  } else {
    tickSec = 16
  }
  drawFrame(tickMs, canvasWidth, canvasHeight)
  lastNow = now
  window.requestAnimationFrame(drawFrameLoop)
}
// window.addEventListener('resize', onResize, false)
