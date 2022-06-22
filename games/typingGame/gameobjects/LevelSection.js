class LevelSection extends GameObject {
    #gridSize = 5;
    #obstacles = [];
    #enemies = [];
    #values = [];
    constructor(screen, templateData, wordList) {
        super(width / 2, screen * height + height / 2, width, height);

        this.#InitObstacles(templateData, wordList);
    }

    get Enemies() {
        return this.#enemies;
    }

    #InitObstacles(templateData, wordList) {
        for (let x = 0; x < width / Settings.GridSize; x += 1) {
            for (let y = 0; y < height / Settings.GridSize; y += 1) {
                let c = (y * width / Settings.GridSize) + x;

                let t = y > 0 ? ((y-1) * width / Settings.GridSize) + x : false;
                let r = x < width / Settings.GridSize - 1 ? (y * width / Settings.GridSize) + (x+1) : false;
                let b = y < height / Settings.GridSize - 1 ? ((y+1) * width / Settings.GridSize) + x : false;
                let l = x > 0 ? (y * width / Settings.GridSize) + (x-1) : false;

                let tl = t && l ? ((y-1) * width / Settings.GridSize) + (x-1) : false;
                let tr = t && r ? ((y-1) * width / Settings.GridSize) + (x+1) : false;
                let br = b && r ? ((y+1) * width / Settings.GridSize) + (x+1) : false;
                let bl = b && l ? ((y+1) * width / Settings.GridSize) + (x-1) : false;

                let cClr = templateData[c];
                let pattern = "";
                pattern += tl || tl === 0 ? templateData[tl].toString() === cClr.toString() ? "1" : "0" : "1";
                pattern += t || t === 0 ? templateData[t].toString() === cClr.toString() ? "1" : "0" : "1";
                pattern += tr || tr === 0 ? templateData[tr].toString() === cClr.toString() ? "1" : "0" : "1";
                pattern += r || r === 0 ? templateData[r].toString() === cClr.toString() ? "1" : "0" : "1";
                pattern += br || br === 0 ? templateData[br].toString() === cClr.toString() ? "1" : "0" : "1";
                pattern += b || b === 0 ? templateData[b].toString() === cClr.toString() ? "1" : "0" : "1";
                pattern += bl || bl === 0 ? templateData[bl].toString() === cClr.toString() ? "1" : "0" : "1";
                pattern += l || l === 0 ? templateData[l].toString() === cClr.toString() ? "1" : "0" : "1";

                const xPos = this.Position.x - (this.Width / 2) + (x * Settings.GridSize) + (Settings.GridSize / 2);
                const yPos = this.Position.y - (this.Height / 2) + (y * Settings.GridSize) + (Settings.GridSize / 2);

                switch (cClr.toString()) {
                    case color(0, 0, 255, 0).toString():
                        this.#obstacles.push(new Water(xPos, yPos));
                        break;
                    case color(255, 0, 0, 0).toString():
                        this.#enemies.push(new Rock(wordList.shift(), xPos, yPos, 80, 80));
                        this.#obstacles.push(new Water(xPos, yPos));
                        break;
                    case color(0, 255, 0, 0).toString():
                        console.log(templateData[t].toString() === cClr.toString())
                        this.#obstacles.push(new Island(xPos, yPos, pattern));
                        break;
                }
            }
        }
    }

    Update() {
        let speed = 0.5;
        this.Position.y += speed;


        this.#obstacles.forEach(o => o.Position.y += speed);

        if (this.Position.y > height * 1.5) {
            this.#obstacles.forEach(o => o.Remove());
            this.Remove();
        }
    }
}