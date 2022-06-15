class Player extends GameObject { 
    #wasHit = false;

    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.SetDefaultCollider();
        this.CollisionLayer = Settings.Layers.PLAYER;
    }

    Hit() { 
        this.#wasHit = true; 
        setTimeout(() => {
            this.#wasHit = false;
        }, 500);
    }

    Update() { 
        this.#DrawCursor();
        this.#MoveCursor();
    }

    #MoveCursor() { 
        if (keyIsDown(LEFT_ARROW) === true) { 
            this.Position.x -= 5;
        }
        if (keyIsDown(RIGHT_ARROW) === true) { 
            this.Position.x += 5;
        }
        if (keyIsDown(UP_ARROW) === true) { 
            this.Position.y -= 5;
        }
        if (keyIsDown(DOWN_ARROW) === true) { 
            this.Position.y += 5;
        }
    }

    #DrawCursor() { 
        if (this.#wasHit) {
            fill("red");
        }
        else {
            fill("blue");
        }
        rect(0, 0, this.Width);
    }

    OnOverlap(spritesHit) { 
        spritesHit.forEach(spriteHit => {
            if (spriteHit instanceof Rock) { 
                console.log("rock hit!");
            }
        });
    }
}