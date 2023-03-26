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
        c.clearRect();
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.sides.bottom = this.height + this.position.y;
        
        if (this.sides.bottom > canvas.height){
            this.position.y += this.velocity.y;
            this.sides.bottom = this.height + this.position.y;
        }
    }
    
}