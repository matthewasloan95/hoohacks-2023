class Player extends Sprite{
    constructor({collisionBlocks = [], imageSrc, frameRate, animations, loop}){
        super({imageSrc, frameRate, animations, loop})
        this.position = {
            x: 200,
            y: 200,
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

        this.collisionBlocks = collisionBlocks;
    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        this.position.x += this.velocity.x;
    
        this.updateHitbox();

        this.checkForHorizontalCollisions();

        this.applyGravity();

        this.updateHitbox();

        this.checkForVerticalCollisions();
    }


    handleInput(keys){
        if (this.preventInput) return;
        this.velocity.x = 0;
        if (keys.d.pressed){
            this.switchSprite('runRight');
            this.velocity.x = 10;
            this.lastDirection = 'right';
        }
        else if (keys.a.pressed){
            this.switchSprite('runLeft');
            this.velocity.x = -10;
            this.lastDirection = 'left';
        } 
        else {
            if (this.lastDirection === 'left') {
                this.switchSprite('idleLeft');
            }
            else{
                this.switchSprite('idlRight');
            }
        }
    }

    switchSprite(name){
        if (this.image === this.animations[name].image) return;
        this.currentFrame = 0;
        this.image = this.animations[name].image;
        this.frameRate = this.animations[name].frameRate;
        this.frameBuffer = this.animations[name].frameBuffer;
        this.loop = this.animations[name].loop;
        this.currentAnimation = this.animations[name]
    }

    updateHitbox(){
        this.hitbox = {
            position: {
                x: this.position.x + 25, //setting hitbox to match up with sprite
                y: this.position.y + 34,
            },
            width: 50,
            height: 53,
        }
    }

    checkForHorizontalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];

            if (
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                if (this.velocity.x < -0){
                    const offset = this.hitbox.position.x - this.position.x;
                    this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01;
                    break;
                }

                if (this.velocity.x > -0){
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
                    this.position.x = collisionBlock.position.x - offset - 0.01;
                    break;
                }
            }
            
        }
    }

    applyGravity() {
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;
    }

    checkForHVerticalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];

            if (
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                if (this.velocity.y < -0){
                    const offset = this.hitbox.position.y - this.position.y;
                    this.position.y = collisionBlock.position.y + collisionBlock.width - offset + 0.01;
                    break;
                }

                if (this.velocity.y > -0){
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.width;
                    this.position.y = collisionBlock.position.y - offset - 0.01;
                    break;
                }
            }
            
        }
    }





    
}