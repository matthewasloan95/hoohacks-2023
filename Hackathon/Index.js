const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64*16;
canvas.height = 64*9;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

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

    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);


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


window.addEventListener('keydown', (event) =>{
    switch(event.key){
        case ' ': 
        if (player.velocity.y === 0 || player.jumped === false) {
            player.velocity.y = -40;
            player.jumped = true;
        }
        break;

        case 'd': 
            keys.d.pressed = true;
        break;

        case 'a':
            keys.a.pressed = true;
        break;
        
    }
})

window.addEventListener('keyup', (event) =>{
    switch(event.key){
        case 'd': 
        keys.d.pressed = false;
        break;

        case 'a':
            keys.a.pressed = false;
        break;
        
    }
})


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