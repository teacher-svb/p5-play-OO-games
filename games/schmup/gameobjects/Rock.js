class Rock extends GameObject { 
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.SetDefaultCollider();
        this.CollisionLayer = Settings.Layers.ROCKS;
        this.SetSpeed(.5, 90);
    }

    Update() { 
        fill("brown");
        rect(0, 0, this.Width, this.Height);

        if (this.Position.y > height + this.Height) { 
            this.Remove();
        }
    }
}