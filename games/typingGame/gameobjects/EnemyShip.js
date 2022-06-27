class EnemyShip extends Enemy { 
    #animation = undefined;
    #numLetters = 0;
    #wreckageImage = undefined;

    constructor(word, x, y, w, h) {
        super(word, x, y, w, h);
        this.CollisionLayer = Settings.Layers.ROCKS;
        this.SetSpeed(1, 90);

        this.#numLetters = word.length;

        this.#animation = new Animation("assets/spritesheets/ship-2.png", "assets/spritesheets/ship-2.json");
        this.#animation.AddAnimationLoop("hit0", 0);
        this.#animation.AddAnimationLoop("hit1", 1);
        this.#animation.AddAnimationLoop("hit2", 2);
        this.#animation.CurrentAnimationLoop = "hit0";

        this.#wreckageImage = loadImage("assets/images/wreckage-1.png");
    }

    Update() { 
        fill("brown");
        // rect(0, 0, this.Width / 2, this.Height / 2);

        if (this.HitPoints <= 0) {
            image(this.#wreckageImage, 0, 0, this.Height * .58, this.Height);
            this.SetSpeed(.5, 90);
        }
        else {
            this.#animation.Draw(this.Height * .58, this.Height);
        }
        
        if (this.HitPoints < 2) {
            this.#animation.CurrentAnimationLoop = "hit2";
        }
        else if (this.HitPoints != this.#numLetters) {
            this.#animation.CurrentAnimationLoop = "hit1";
        }


        super.Update();

        if (this.Position.y > height + this.Height) { 
            this.Remove();
        }
    }
}