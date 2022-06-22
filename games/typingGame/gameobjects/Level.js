class Level extends GameObject {
    #tiles = [];
    #templates = [];
    #enemies = [];

    #wordList = [];

    constructor(wordList) {
        super(0, 0, 0, 0);
        this.#wordList = wordList;

        loadImage('assets/tile1.png', img => {
            img.loadPixels();
            let tmpl = [];
            for (let i = 0; i < img.pixels.length; i += 4) {
                tmpl.push(color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], 0));
            }
            this.#templates.push(tmpl);

            this.#tiles.push(new LevelSection(0, tmpl, this.#wordList));
            this.#tiles.push(new LevelSection(-1, tmpl, this.#wordList));
            this.#tiles.push(new LevelSection(-2, tmpl, this.#wordList));

            this.#UpdateEnemiesList();
        });
    }

    get Enemies() {
        return this.#enemies;
    }

    TargetEnemy(char) {
        let enemies = this.#enemies.filter(r => r.Removed == false && r.Word && r.Word[0] == char);
        if (enemies.length == 0) {
            return undefined;
        }
        return enemies[0];
    }

    #UpdateEnemiesList() {
        this.#enemies = [];
        this.#tiles.forEach(t => this.#enemies.push(...t.Enemies));
        this.#enemies = this.#enemies.filter(e => e && e.Removed === false);
        this.#enemies.sort((a, b) => {
            if (a.Position.y < b.Position.y) return 1;
            if (a.Position.y > b.Position.y) return -1;
        });
    }

    Update() {
        this.#tiles.forEach((t, i) => {
            if (!t || t.Removed) {
                this.#tiles.splice(i, 1);
                this.#tiles.push(new LevelSection(-2, this.#templates[0], this.#wordList));

                this.#UpdateEnemiesList();
            }
        });
    }
}