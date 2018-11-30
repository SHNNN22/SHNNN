// let canvas
// let pics = []
// let pic
// let sinkholes = []
// let sinkhole
//
//
// function preload() {
// 	pic = 'pics/sinkhole0.jpg'
// 	for(let i = 0; i < 21; i++) {
// 		pics[i] = loadImage('pics/sinkhole' + i + '.jpg')
// 	}
// 	console.log('hi')
// }
//
// function setup() {
// 	canvas = createCanvas(windowWidth, windowHeight);
// 	canvas.position(0, 0)
// 	imageMode(CENTER)
// 	// for(let i = 0; i < 1; i++) {
// 	// 	let x = random(width)
//   //   let y = random(height)
//   //   let w = 50
//   //   let h = 50
//   //   sinkhole = new Sinkhole(pic, x, y, w, h)
//   //   sinkholes.push(sinkhole)
// 	// }
// 	for (let i = 0; i < 1; i++) {
//     let x = parseInt(random(width - 333))
//     let y = parseInt(random(height - 333))
//     let w = [i].pic.width
//     let h = random(222, 333)
//     let b = new Sinkhole(x, y, w, h)
//     sinkholes.push(b)
//   }
// }
//
// function draw() {
// 	clear()
//
// 	for(let s of sinkholes) {
// 		s.show()
// 		// s.move()
// 	}
//
// }
//
// class Sinkhole {
// 	constructor(pic, x, y, w, h) {
// 		this.pic = random(pics)
// 		this.x = x
// 		this.y = y
// 		this.w = p5.Image.width
//     this.h = p5.Image.height
// 		this.xspeed = 4
//   	this.yspeed = -3
// 	}
// 	show() {
// 		image(this.pic, this.x, this.y, this.w, this.h)
// 	}
// 	move() {
// 		this.x = this.x + this.xspeed
// 		this.y = this.y + this.yspeed
// 	}
// }






let sinkholes = []
let pics = []
let pic
let sink
let shannon


function preload() {
  //assign value to pic
  pic = loadImage('pics/sinkhole0.jpg');
  //load this many pics
  for(let i = 0; i < 20; i++) {
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
		let w = pics[i].width/3
    let h = pics[i].height/3
    let x = random(width - w)
    let y = random(height - h)

    sink = new Sinkhole(x, y, w, h)
    sinkholes.push(sink)
  }
	// shannon.style('transform', 'rotate(-90deg)')

	shannon = createImg('https://66.media.tumblr.com/abacf4831f612598ef776e601085ba68/tumblr_og2kfnCs9C1r2poiwo1_1280.png', 'Shannon').id('shannon')
}

//create element on click
// function mousePressed() {
//   shannon = createImg('https://66.media.tumblr.com/abacf4831f612598ef776e601085ba68/tumblr_og2kfnCs9C1r2poiwo1_1280.png').class('shnnn').style('top', `${random(0, 444)}px`)
//   shannon.parent('over')
// }
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

  //   let overlapping = false
  //   for (let other of sinkholes) {
  //     if (s !== other && s.intersects(other)) {
  //       overlapping = true
  //     }
  //   if (overlapping) {
  //     s.changeColor(255)
  //   } else {
  //   	s.changeColor(0)
  //   }
  //   }
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

  // intersects(other) {
  //   let d = dist(this.x, this.y, other.x, other.y)
  //   return (d < this.r + other.r)
  // }
  //
  // contains(px, py) {
  //   let d = dist(px, py, this.x, this.y)
  //   return (d < this.r)
  // }

  move() {
    this.x = this.x + this.xspeed
  this.y = this.y + this.yspeed
  }

  show() {
    image(this.pic, this.x, this.y, this.w, this.h)

//    stroke(255)
//    strokeWeight(4)
//    fill(this.brightness, 122)
//    ellipse(this.x, this.y, this.r * 2)
  }
   bounce() {

  if(this.x + this.w > width || this.x < 0) {
    this.xspeed = this.xspeed * -1
  }
  if(this.y + this.h > height || this.y < 0) {
    this.yspeed = this.yspeed * -1
  }
}

}
