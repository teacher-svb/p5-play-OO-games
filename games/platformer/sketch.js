let game = null;

function setup() {
    createCanvas(800, 400);

    game = new PlatformerGame();
}

function draw() {
    background(0);
    game.Update();
}