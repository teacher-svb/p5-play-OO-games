
class SnakeGame extends Game {
    #snake = null;
    #currentCandy = null;

    constructor() { 
        super();

        this.#snake = new Snake(100, 100);

        this.GenerateCandy();
    }

    Update() { 
        if (!this.#currentCandy || this.#currentCandy.Removed) { 
            this.GenerateCandy();
        }

        if (this.#currentCandy && this.#snake) {
            this.#snake.TryEatCandy(this.#currentCandy);
        }
    }

    GenerateCandy() { 
        let x = Math.floor(random(0, width / 20)) * 20;
        let y = Math.floor(random(0, height / 20)) * 20;
        this.#currentCandy = new Candy(x, y, 20);
    }
}