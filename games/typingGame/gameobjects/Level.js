class Level extends GameObject {
    #tiles = [];
    #templates = [];
    #enemies = [];

    #wordList = [];

    constructor(wordList, levelSections) {
        super(0, 0, 0, 0);
        this.#wordList = wordList;

        levelSections.forEach(img => {
            img.loadPixels();
            let tmpl = [];
            for (let i = 0; i < img.pixels.length; i += 4) {
                tmpl.push(color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], 0));
            }
            this.#templates.push(tmpl);
        })

        
        let rndTmpl = this.#templates[Math.floor(Math.random() * this.#templates.length)];
        this.#tiles.push(new LevelSection(0, rndTmpl, this.#wordList));
        rndTmpl = this.#templates[Math.floor(Math.random() * this.#templates.length)];
        this.#tiles.push(new LevelSection(-1, rndTmpl, this.#wordList));
        rndTmpl = this.#templates[Math.floor(Math.random() * this.#templates.length)];
        this.#tiles.push(new LevelSection(-2, rndTmpl, this.#wordList));

        this.#UpdateEnemiesList();
    }

    CreateRandomLevelSection() {
        const randomTemplate = this.#templates[Math.floor(Math.random() * this.#templates.length)];
        return new LevelSection(0, randomTemplate, this.#wordList);
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
                let rndTmpl = this.#templates[Math.floor(Math.random() * this.#templates.length)];
                this.#tiles.push(new LevelSection(-2, rndTmpl, this.#wordList));

                this.#UpdateEnemiesList();
            }
        });
    }
}