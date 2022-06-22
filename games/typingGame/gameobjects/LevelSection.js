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
                let i = (y * width / Settings.GridSize) + x;

                const xPos = this.Position.x - (this.Width / 2) + (x * Settings.GridSize) + (Settings.GridSize / 2);
                const yPos = this.Position.y - (this.Height / 2) + (y * Settings.GridSize) + (Settings.GridSize / 2);

                switch (templateData[i].toString()) {
                    case color(0, 0, 255, 0).toString():
                        this.#obstacles.push(new Water(xPos, yPos));
                        break;
                    case color(255, 0, 0, 0).toString():
                        this.#enemies.push(new Rock(wordList.shift(), xPos, yPos, 80, 80));
                        this.#obstacles.push(new Water(xPos, yPos));
                        break;
                    case color(0, 255, 0, 0).toString():
                        this.#obstacles.push(new Island(xPos, yPos));
                        break;
                }
            }
        }
    }

    Update() {
        let speed = .5;
        this.Position.y += speed;


        this.#obstacles.forEach(o => o.Position.y += speed);

        if (this.Position.y > height * 1.5) {
            this.#obstacles.forEach(o => o.Remove());
            this.Remove();
        }
    }
}