class RockSpawner { 
    constructor() { 
        this.SpawnRock();
    }

    SpawnRock() { 
        let randomX = random(0, width);
        let newRock = new Rock(randomX, -50, 20, 20);

        let randomTime = random(200, 2000);
        setTimeout(() => {
            this.SpawnRock();
        }, randomTime);
    }
}