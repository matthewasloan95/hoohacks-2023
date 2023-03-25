class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }

        this.width = 50,
        this.height = 50,

        this.velocity = 0;

        this.gravity = 0;

        this.sides = {
            bottom: this.height + this.position.y,
        }

    }

    draw(){
        
    }
}