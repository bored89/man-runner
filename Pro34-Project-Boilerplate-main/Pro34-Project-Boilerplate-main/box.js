class box 
{
  constructor(x, y, w, h) 
  {
    let options = {
     isStatic: true
    };
    this.image = loadAnimation ("1man.png","2man.png","3man.png","4man.png","5man.png","6man.png","7man.png","8man.png")
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    image(this.image,0, 0, this.w, this.h);
    pop();
  }
}