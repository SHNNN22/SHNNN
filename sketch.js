let sinkholes = []
let pics = []
let pic
let sink
let shannon
let img

function preload() {
  //assign value to pic
  pic = loadImage('pics/sinkhole0.jpg');
  //load this many pics
  for (let i = 0; i < 20; i++) {
    pics[i] = loadImage(`pics/sinkhole${i}.jpg`);
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight)
  //change canvas ABSOLUTE positioning
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  //show random sinkholes/imgs
  for (let i = 0; i < 1; i++) {
    sink = new Sinkhole()
    sinkholes.push(sink)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //clear background
  clear()
  //show and animate sinkholes/imgs
  for (let s of sinkholes) {
    s.show()
    s.move()
    s.bounce()
  }
}
