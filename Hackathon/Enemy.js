/**
 * @author Matt S
 * @since today
 * @version 69
 * the enemy class
 */

// look like player class
// 2 modes, follow player and roam +++ movement patterns and variations.
// no need for velocity, movement speed and direction <-----
// don't forget gravity
// radius and los/colision for attack player
// constructor for enemy size
// what is getting attacked/attacking? method???



class Enemy
{
    constructor()
    { 
        this.delete = false;
    }

    update()
    {
        this.x--;
        // remove enemies when outside map bounds
        if (this.x < 0 - this.width)
        {
            this.delete = true;
        }
    }

    // ctx = context
    draw(ctx)
    {
        // spawning
        ctx.drawImage(this.image, sourceX, sourceY, sourceWidth, sourceHeight, this.x, this.y, this.width, this.height, this.ratio)
    }
}

// regular inheritance
class ground_enemy extends Enemy
{
    constructor()
    {
        super();
        this.spriteWidth = 0 // TODO: get this
        this.spriteHeight = 0 // TODO: get this
        this.x = this.game.width;
        this.y = Math.random() * this.game.height;
        this.width = this.spriteWidth * this.ratio;
        this.height = this.spriteHeight * this.ratio;

        this.image = ground_dude;
        console.log(this.image);

    }
}