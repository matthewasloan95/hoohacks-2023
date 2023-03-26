const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64*16;
canvas.height = 64*9;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);



const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: 'backgroundLevel1.png',
})

const player = new Player();

const keys = {
    space: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }

}

function animate(){
    window.requestAnimationFrame(animate);

    backgroundLevel1.draw();


    player.velocity.x = 0;

    if (keys.d.pressed){
        player.velocity.x = 10;
    }
    else if(keys.a.pressed){
        player.velocity.x = -10;
    }

    player.draw();
    player.update();

}


animate();





// class Sprite{
//     constructor({ position, velocity})
//     {
//         this.position = position
//         this.velocity = velocity
//         this.height = 150
//         this.attackBox = {
//             position: this.position,
//             width: 100,
//             height: 50,
//         }
//     }
// }
// draw() 
// {
//     c.fillStyle = 'red'
//     c.fillRect(this.position.x, this.position.y, 50, this.height)

// // attack box drawn here 
//     c.fillStyle = 'green'
//     c.fillRect
//     (
//         this.attackBox.position.x, 
//         this.attackBox.position.y, 
//         this.attackBox.width,
//         this.attackBox.height
//     )
// }