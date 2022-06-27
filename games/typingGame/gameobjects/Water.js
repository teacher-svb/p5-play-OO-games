class Water extends GameObject {

    static animation = undefined;

    constructor(x, y) {
        super(x, y, Settings.GridSize, Settings.GridSize);
        

        if (!Water.animation) {
            Water.animation = new Animation("assets/spritesheets/water.png", "assets/spritesheets/water.json", 100);
            Water.animation.AddAnimationLoop("flowing", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
            Water.animation.CurrentAnimationLoop = "flowing";
        }
    }

    Update() {
        stroke(176,233,252);
        if (Water.animation) {
            Water.animation.Draw(this.Width + 1, this.Height + 1);
        }
        
        fill(176,233,252,150);
        rect(0, 0, this.Width, this.Height);
    }
}