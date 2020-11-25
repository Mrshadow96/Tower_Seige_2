class Blocks {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }
        
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        console.log(this.body.speed);
        if(this.body.speed <8){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        rect(0, 0, this.width, this.height);
        pop();

        }else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            pop();
        }

    }
}
