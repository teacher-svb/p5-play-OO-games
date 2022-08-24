class TypingGame extends Game {
    #player = undefined;
    #map = undefined;

    #keyPressed = "";
    #lastKeyPressed = "S";

    #wordList = [];
    #levelSectionImagePaths = [
        "assets/data/tile1.png",
        "assets/data/tile2.png"
    ];

    #levelSectionImages = [];

    #target = undefined;

    constructor() {
        super();
        frameRate(60);
        this.#player = new Player(width / 2, height - 100, 50, 85);

        
        this.LoadData();
        // this.LoadImages(levelData);
        // this.LoadWords();
    }


    LoadData() {
        if (this.#levelSectionImagePaths.length > 0) {
            let img = loadImage(this.#levelSectionImagePaths.pop(), this.LoadData.bind(this));
            this.#levelSectionImages.push(img);
        }
        else {
            this.LoadWords();
        }
    }
    

    LoadImages(paths) {
        let images = [];
        while (images.length != paths.length) {
            paths.forEach(path => {
                images.push(loadImage(path));
            });
        }
        return images;
    }

    LoadWords() {
        loadStrings("assets/data/text.txt", (result) => {
            let text = result.join(" ");
            text = text.replace(/[^a-zA-Z ]/g, "");
            text = text.toLowerCase();
            let words = text.split(" ");
            words = [...new Set(words)];
            words = words.filter(w => w.length > 2);
            words.sort((a, b) => {
                if (a.length > b.length) {
                    return 1;
                }
                else if (a.length < b.length) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                if (b > a) {
                    return -1;
                }
                return 0;
            });
            this.LoadWordsFinished(words);
        });
    }

    LoadWordsFinished(words) {
        this.#wordList = words;
        this.#map = new Level(this.#wordList, this.#levelSectionImages);
    }

    Update() {
        text(this.#lastKeyPressed, 20, 20);

        if (GameManager.keysPressed.length > 0) {
            this.#keyPressed = String.fromCharCode(GameManager.keysPressed[0]).toLowerCase();
            this.#lastKeyPressed = this.#keyPressed;

            if (!this.#target || this.#target.Removed || this.#target.Finished) {
                this.#target = this.#map.TargetEnemy(this.#lastKeyPressed);
            }
        }
        else {
            this.#keyPressed = "";
        }

        if (GameManager.keysPressed.length > 0 && this.#target != undefined) {
            this.#player.Shoot(this.#lastKeyPressed, this.#target);
        }

        if (this.#target && this.#target.Removed == false) {
            circle(this.#target.Position.x, this.#target.Position.y, 50);
        }
    }
}