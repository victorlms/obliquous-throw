class Canhao {
    constructor(x, y, z, h) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.h = h;

    }
    show () {
        fill(0);
        square(this.x, this.y, this.z);
        // strokeWeight(10)
        // line(this.x+20, this.y+5,this.x+30, this.y)
        // ellipse(this.x+30, this.y, this.z+50, this.h-10);
        strokeWeight(1)
    }

    getPositionX(){
        return this.x+20
    }

    getPositionY(){
        return this.y+5
    }

}