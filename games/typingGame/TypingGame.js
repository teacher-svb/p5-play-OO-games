class TypingGame extends Game {
    #player = undefined;
    #rockSpawner = undefined;

    #keyPressed = "";
    #lastKeyPressed = "S";

    #wordList = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Quaerat", "quae", "hic", "rerum", "ipsam", "perferendis", "quod", "nam", "esse", "doloribus", "Delectus", "unde", "natus", "quae", "accusantium", "exercitationem", "veritatis", "molestias", "laboriosam", "iste", "ipsam", "amet"];

    #target = undefined;

    constructor() { 
        super();
        frameRate(3000);
        this.#player = new Player(width/2, height - 100, 50, 50);


        this.#wordList = [...new Set(this.#wordList)].map(s => s.toLowerCase());
        this.#rockSpawner = new RockSpawner(this.#wordList);
    }

    Update() { 

        text(this.#lastKeyPressed, 20, 20);

        if (GameManager.keysPressed.length > 0) {
            this.#keyPressed = String.fromCharCode(GameManager.keysPressed[0]).toLowerCase();
            this.#lastKeyPressed = this.#keyPressed;
        }
        else { 
            this.#keyPressed = "";
        }

        
        if (this.#target == undefined || this.#target.Removed) {
            this.#target = this.#rockSpawner.TargetRock(this.#lastKeyPressed);
        }

        if (GameManager.keysPressed.length > 0 && this.#target != undefined) {
            let hit = this.#target.Hit(this.#lastKeyPressed);
            if (hit === false) { 
                console.log(this.#lastKeyPressed)
                this.#player.Hit();
            }
        }

        if (this.#target && this.#target.Removed == false) {
            circle(this.#target.Position.x, this.#target.Position.y, 50);
        }
    }
}