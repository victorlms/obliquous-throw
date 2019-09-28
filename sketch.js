let canhao;
let gun;
let shoot = false;
let x;
let y;
let angle;
let velocity;
let gravity = 10;

function setup() {
  createCanvas(1200, 600);
  canhao = new Canhao(20, 488, 20, 20);
  gun = new Gun(canhao.getPositionX(), canhao.getPositionY());
}

function mouseClicked() {
  shoot = true;
  x = mouseX;
  y = mouseY;
  let dy = y - canhao.getPositionY()
  let dx = x - canhao.getPositionX()
  angle = atan2(dy,dx)
  console.log(angle)
  angle *= 180/Math.PI
  velocity = dx
}

function draw() {
  fill(70, 70, 255);
  rect(0, 0, 1200, 600);
  fill(255, 255, 153);
  circle(80, 50, 80);
  fill(165, 42, 42);
  rect(0, 500, 1200, 100);

  canhao.show();
  gun.show(canhao.getPositionX + 10, canhao.getPositionY + 10);

  line(canhao.getPositionX(), canhao.getPositionY(), mouseX, mouseY);
  if (shoot) {
     
  console.log(angle)
    angle += gravity;
    gun.shoot(velocity, angle);
  }

  if (gun.getPositionX() > 1200) {
    shoot = false;
    gun = new Gun(canhao.getPositionX(), canhao.getPositionY());
  }
}
