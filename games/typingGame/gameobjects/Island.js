class Island extends GameObject {
    constructor(x, y) {
        super(x, y, Settings.GridSize, Settings.GridSize);
        this.SetDefaultCollider();
        this.CollisionLayer = Settings.Layers.LAND;
    }

    Update() {
        fill("#fae8c2");
        rect(0, 0, this.Width, this.Height);
    }
}