class Paper {
    constructor() {
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0,
        }
        this.body = Bodies.circle(75,500,10);
        this.x = 75;
        this.y = 500;
        this.r = 10;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        Engine.update(engine);
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.body.width,this.body.height);
        pop();
    }
}