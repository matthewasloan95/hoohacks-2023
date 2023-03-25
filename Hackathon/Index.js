const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

c.fillStyle = 'white';
c.fillRect(canvas.width, canvas.height);

const player = new Player();


function animate(){
    window.requestAnimationFrame(animate);

    c.fillStyle = 'white';
    c.fillRect(canvas.width, canvas.height);

    Player.draw();

}


animate();

class Sprite{
    constructor({ position, velocity})
    {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.attackBox = {
            position: this.position,
            width: 100,
            height: 50,
        }
    }
}
draw() 
{
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, 50, this.height)

// attack box drawn here 
    c.fillStyle = 'green'
    c.fillRect
    (
        this.attackBox.position.x, 
        this.attackBox.position.y, 
        this.attackBox.width,
        this.attackBox.height
    )
}