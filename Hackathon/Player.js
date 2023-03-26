class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }

        this.width = 50,
        this.height = 50,

        this.velocity = {
            x:0,
            y:0,
        }

        this.gravity = 3;

        this.sides = {
            bottom: this.position.y + this.height,
        }

    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        this.velocity.y += this.gravity;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    
        if (this.sides.bottom + this.velocity.y > canvas.height) {
            this.velocity.y = 0;
            this.position.y = canvas.height - this.height;
            this.sides.bottom = this.height + this.position.y;
        }
    
        this.sides.bottom = this.height + this.position.y;
    }

    
}