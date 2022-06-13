class Player extends GameObject { 
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.SetDefaultCollider();
        this.CollisionLayer = Settings.Layers.PLAYER;
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
        fill("blue");
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