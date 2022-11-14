const canvas = document.querySelector("#etch-a-sketch") //reference the canvas
const ctx = canvas.getContext('2d')
const shakeButton = document.querySelector('.shake')
const moveAmount = 2


//Setup the canvas
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 10
const {width, height} = canvas
let x = Math.floor(Math.random()* width)
let y = Math.floor(Math.random()* height)


ctx.beginPath() //starts the drawing
ctx.moveTo(200, 200)
ctx.lineTo(200, 200)
ctx.stroke()

//write the draw function
function draw({key}){
  console.log(key)
  //start the path
  ctx.beginPath() //starts from random starting point
  ctx.moveTo(x, y)//move to new coords
  //move x and y values depending on the user input
  ctx.lineTo(x,y) //connects the 2 points
  ctx.stroke()//draws the line along the connection
  //move x and y based on user input
  switch(key){
    default:
    break
    case 'ArrowUp':
    y -= moveAmount
    break
    case 'ArrowRight':
    x += moveAmount
    break
    case 'ArrowLeft':
    x -= moveAmount
    break
    case 'ArrowDown':
    y+= moveAmount
    break
  }
}

//write the handler for arrow keys
function handleKey(event){
  if(event.key.includes('Arrow')){
    event.preventDefault()//disable refresh shortcuts
    draw({key: event.key})
  }
}

//clear shakeButton
function clearCanvas () {
        canvas.classList.add('shake')
        ctx.clearRect(0, 0, width, height)
        console.log(`done the shake`)
        canvas.addEventListener('animationend',
                 ()=> {
                canvas.classList.remove('shake')
                },
                {once: true} // auto removes the listener when it's done
        )
}

//listen for arrow keys
window.addEventListener('keydown', handleKey)
shakeButton.addEventListener('click', clearCanvas)
