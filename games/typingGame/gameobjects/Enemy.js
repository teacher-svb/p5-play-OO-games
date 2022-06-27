class Enemy extends GameObject { 
    #word = "";
    #lettersHit = "";


    constructor(word, x, y, w, h) {
        super(x, y, w, h);
        this.#word = word;
        this.SetDefaultCollider();
        this.Depth = 5;
    }

    get Word() { 
        return this.#word;
    }

    get HitPoints() {
        return this.#word.length + this.#lettersHit.length;
    }

    get Finished() {
        return this.#word.length == 0;
    }

    RemoveFirstLetter(char) {
        if (this.#lettersHit[0] != char) {
            return false;
        }

        if (this.#word.length + this.#lettersHit.length == 1) {
            // this.Remove();
        }

        this.#lettersHit = this.#lettersHit.substring(1);
        return true;
    }

    TargetFirstLetter(char) {
        if (this.#word[0] != char) {
            return false;
        }
        this.#lettersHit += this.#word[0];
        this.#word = this.#word.substring(1);

        return true;
    }

    Update() { 
        textFont('Courier New');
        textStyle(BOLD);
        textSize(16);
        textAlign(CENTER);
        let letterSize = 10;
        let wordSize = (this.#word.length + this.#lettersHit.length - 1) * letterSize;
        [...this.#lettersHit + this.#word].forEach((letter, i) => {
            push();
            if (i < this.#lettersHit.length) {
                fill("white");
            }
            text(letter, (i * letterSize) - (wordSize / 2), (this.Height / 2) + 10);
            pop();
        });
    }
}