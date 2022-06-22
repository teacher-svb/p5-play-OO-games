class Water extends GameObject {

    static texture = undefined;

    constructor(x, y) {
        super(x, y, Settings.GridSize, Settings.GridSize);

        if (!Water.texture) {
            Water.texture = loadImage("assets/water.png");
        }
    }

    Update() {
        stroke("#b0e9fc");
        fill("#b0e9fc");
        rect(0, 0, this.Width, this.Height);
        if (Water.texture) {
            image(Water.texture, 0, 0, this.Width, this.Height);
        }
    }
}