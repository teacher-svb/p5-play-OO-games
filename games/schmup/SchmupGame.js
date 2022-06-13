
class SchmupGame extends Game {
    #player = undefined;
    #rockSpawner = undefined;
    constructor() { 
        super();
        frameRate(3000);
        this.#player = new Player(100, 100, 50, 50);

        this.#rockSpawner = new RockSpawner();
    }

    Update() { 
    }
}