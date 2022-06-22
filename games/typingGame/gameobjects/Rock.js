class Rock extends GameObject { 
    #word = "";
    constructor(word, x, y, w, h) {
        super(x, y, w, h);
        this.#word = word;
        this.SetDefaultCollider();
        this.CollisionLayer = Settings.Layers.ROCKS;
        this.SetSpeed(1, 90);
        this.Depth = 5;
    }

    get Word() { 
        return this.#word;
    }

    Hit(char) {
        if (this.#word[0] != char) {
            return false;
        }

        if (this.#word.length == 1) {
            this.Remove();
        }

        this.#word = this.#word.substring(1);
        return true;
    }

    Update() { 
        fill("brown");
        rect(0, 0, this.Width / 2, this.Height / 2);
        textAlign(CENTER);
        text(this.#word, 0, this.Height / 2);

        if (this.Position.y > height + this.Height) { 
            this.Remove();
        }
    }
}