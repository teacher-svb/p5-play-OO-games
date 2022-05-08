class TileWall extends Tile {
    constructor(x, y, size) {
        super(x, y, size, size);
        loadJSON("assets/images/objects/tiles.json", allFrames => {
            let frames = [];
            let spritesheet = null;
            let animation = null;

            frames = [
                allFrames[65]
            ];
            spritesheet = loadSpriteSheet('assets/images/objects/tiles.png', frames);
            animation = loadAnimation(spritesheet);
            this.addAnimation("floor", animation);
            this.changeAnimation("floor");
        });
    }

    Update() {
        // super.Update();
        if (this.animation)
            this.animation.draw(0, 0);
    }
}