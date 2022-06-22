class Water extends GameObject {
    constructor(x, y) {
        super(x, y, Settings.GridSize, Settings.GridSize);
    }

    Update() {
        stroke("#b0e9fc");
        fill("#b0e9fc");
        rect(0, 0, this.Width, this.Height);
    }
}