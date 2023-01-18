////////////////////
class Sinkhole {
  constructor() {
    this.img = pics[0]
    setInterval(() => this.img = pics[Math.floor(random(pics.length))], 2222)
    this.ratio = this.img.height/this.img.width
    this.width = windowWidth*this.ratio/2
    this.height = this.width*this.ratio
    this.x = random(windowWidth - this.width)
    this.y = random(windowHeight - this.height)
    this.xspeed = 4
    this.yspeed = -3
  }
  move() {
    this.x = this.x + this.xspeed
    this.y = this.y + this.yspeed
  }
  show() {
    image(this.img, this.x, this.y, this.width, this.height)
  }
  bounce() {
    if (this.x + this.width > width || this.x < 0) {
      this.xspeed = this.xspeed * -1
    }
    if (this.y + this.height > height || this.y < 0) {
      this.yspeed = this.yspeed * -1
    }
  }
}
