class Bullet extends GameObject {
    #target;
    #char;
    #missed = false;

    #lines = [];

    constructor(char, x, y, target) {
        super(x, y, 10, 10);
        this.#char = char;
        this.SetDefaultCollider();

        this.#target = target;

        this.Depth = 20;

        let diff = p5.Vector.sub(this.#target.Position, this.Position);

        this.SetSpeed(2, degrees(diff.heading()));

        this.#lines.push({
            from: this.Position.copy(),
            to: this.Position.copy()
        })
    }

    Update() {
        let brightness = 255;
        strokeWeight(10);
        [...this.#lines].reverse().forEach(l => { 
            stroke(255, 255, 255, brightness);
            line(l.from.x - this.Position.x, l.from.y - this.Position.y, l.to.x - this.Position.x, l.to.y - this.Position.y);
            brightness -= 5;
        });

        stroke("#3a4747");
        strokeWeight(1);
        fill("#506262");
        circle(0, 0, this.Width);


        let diff = p5.Vector.sub(this.#target.Position, this.Position);
        if (this.#missed == false) {
            this.SetSpeed(2, degrees(diff.heading()));

            if (!this.#target || this.#target.Removed) {
                this.Life = 50;
                this.#missed = true;
            }
        }


        this.#lines.push({
            from: this.#lines[this.#lines.length - 1].to,
            to: this.Position.copy()
        })
    }

    OnOverlap(spritesHit) {
        spritesHit.forEach(spriteHit => {
            if (spriteHit instanceof Enemy) {
                let dist = this.Position.dist(spriteHit.Position);


                if (dist < 20) {
                    this.#missed = !spriteHit.RemoveFirstLetter(this.#char);
                    if (this.#missed) {
                        this.Life = 40;
                    }
                    else {
                        this.Remove();
                    }
                }

            }
        });
    }
}