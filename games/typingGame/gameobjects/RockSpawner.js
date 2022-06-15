class RockSpawner { 
    #spawnedRocks = [];
    #words = [];

    constructor(words) { 
        this.#words = words;
        this.SpawnRock();
    }

    TargetRock(char) {
        let rocksStartingWithChar = this.#spawnedRocks.filter(r => r.Removed == false && r.Word && r.Word[0] == char);
        if (rocksStartingWithChar.length == 0) { 
            return undefined;
        }
        return rocksStartingWithChar[0];
    }

    SpawnRock() { 
        let randomX = random(100, width - 100);
        let newRock = new Rock(this.#words.pop(), randomX, -150, 50, 50);
        this.#spawnedRocks.push(newRock);

        this.#spawnedRocks.sort((a, b) => a.Position.y < b.Position.y );

        let randomTime = random(2000, 4000);
        setTimeout(() => {
            if (this.#words.length > 0)
                this.SpawnRock();
        }, randomTime);
    }
}