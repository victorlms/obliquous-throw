class Gun {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    fill(0);
    circle(this.x, this.y, 5);
  }

  shoot(x, y) {
      console.log(y)
    this.y = this.y + y/100;
    this.x = this.x + x/10;
  }

  getPositionX(){
      return this.x
  }
  
  getPositionY(){
    return this.y
}
}
