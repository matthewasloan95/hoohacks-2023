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