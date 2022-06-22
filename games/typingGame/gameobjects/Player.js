class Player extends GameObject { 
    #wasHit = false;
    #animation = undefined;

    #cannon = undefined;

    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.SetDefaultCollider();
        this.CollisionLayer = Settings.Layers.PLAYER;
        this.Depth = 10;

        this.#animation = new Animation("assets/ship-1.png", "assets/ship-1.json");
        this.#animation.AddAnimationLoop("hit0", 0);
        this.#animation.AddAnimationLoop("hit1", 1);
        this.#animation.AddAnimationLoop("hit2", 2);
        this.#animation.CurrentAnimationLoop = "hit0";

    }

    Hit() { 
        this.#wasHit = true; 
        setTimeout(() => {
            this.#wasHit = false;
        }, 500);
    }

    Update() { 
        this.#DrawCursor();
    }

    Shoot(char, target) {
        target.TargetFirstLetter(char);
        new Bullet(char, this.Position.x, this.Position.y, target);
    }

    #DrawCursor() { 
        if (this.#wasHit) {
            fill("red");
        }
        else {
            fill("blue");
        }
        // rect(0, 0, this.Width);
        rotate(PI);
        this.#animation.Draw(this.Width, this.Height);
    }
}