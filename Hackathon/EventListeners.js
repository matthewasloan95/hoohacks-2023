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