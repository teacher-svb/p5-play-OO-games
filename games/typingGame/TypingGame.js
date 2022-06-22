class TypingGame extends Game {
    #player = undefined;
    #map = undefined;

    #keyPressed = "";
    #lastKeyPressed = "S";

    #wordList = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Quaerat", "quae", "hic", "rerum", "ipsam", "perferendis", "quod", "nam", "esse", "doloribus", "Delectus", "unde", "natus", "quae", "accusantium", "exercitationem", "veritatis", "molestias", "laboriosam", "iste", "ipsam", "amet"];

    #target = undefined;

    constructor() { 
        super();
        frameRate(3000);
        this.#player = new Player(width/2, height - 100, 50, 50);

        loadStrings("assets/text.txt", (result) => {
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
            console.log(words);
        });


        this.#wordList = [...new Set(this.#wordList)].map(s => s.toLowerCase());

        this.#map = new Level();
    }

    Update() { 
        text(this.#lastKeyPressed, 20, 20);

        if (GameManager.keysPressed.length > 0) {
            this.#keyPressed = String.fromCharCode(GameManager.keysPressed[0]).toLowerCase();
            this.#lastKeyPressed = this.#keyPressed;

            if (this.#target == undefined || this.#target.Removed) {
                this.#target = this.#map.TargetEnemy(this.#lastKeyPressed);
                console.log(this.#target);
            }
        }
        else { 
            this.#keyPressed = "";
        }

        

        if (GameManager.keysPressed.length > 0 && this.#target != undefined) {
            let hit = this.#target.Hit(this.#lastKeyPressed);
            if (hit === false) { 
                this.#player.Hit();
            }
        }

        if (this.#target && this.#target.Removed == false) {
            circle(this.#target.Position.x, this.#target.Position.y, 50);
        }
    }
}