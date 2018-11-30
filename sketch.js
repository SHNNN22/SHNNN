let sinkholes = []
let pics = []
let pic
let sink
let shannon


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
  console.log()
  //show random sinkholes/imgs
  for (let i = 0; i < 1; i++) {
    let w = pics[i].width / 3
    let h = pics[i].height / 3
    let x = random(width - w)
    let y = random(height - h)
    sink = new Sinkhole(x, y, w, h)
    sinkholes.push(sink)
  }
  // shannon.style('transform', 'rotate(-90deg)')
  shannon = createImg('https://66.media.tumblr.com/abacf4831f612598ef776e601085ba68/tumblr_og2kfnCs9C1r2poiwo1_1280.png', 'Shannon').id('shannon')
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





////////////////////
class Sinkhole {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    //    this.brightness = 0
    this.pic = random(pics)
    this.xspeed = 4
    this.yspeed = -3
  }
  move() {
    this.x = this.x + this.xspeed
    this.y = this.y + this.yspeed
  }
  show() {
    image(this.pic, this.x, this.y, this.w, this.h)
  }
  bounce() {
    if (this.x + this.w > width || this.x < 0) {
      this.xspeed = this.xspeed * -1
    }
    if (this.y + this.h > height || this.y < 0) {
      this.yspeed = this.yspeed * -1
    }
  }
}
