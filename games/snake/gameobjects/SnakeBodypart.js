class SnakeBodypart extends GameObject {
    #child = null;
    #parent = null;
    #moveDirection = null;
    constructor(x, y, size, child, parent) {
        super(x, y, size, size);
        this.#child = child;
        this.#parent = parent;
        this.#moveDirection = createVector(1, 0);
        this.SetDefaultCollider();
    }

    Move() {
        this.Position.x += this.#moveDirection.x * this.Width;
        this.Position.y += this.#moveDirection.y * this.Width;

        if (this.#child) {
            let distanceToNext = p5.Vector.dist(this.Position, this.#child.Position);

            if (distanceToNext > this.Width)
                this.#child.Move();
            if (Math.abs(this.#moveDirection.angleBetween(this.#child.#moveDirection)) > 0)
                this.#child.#moveDirection = this.#moveDirection.copy();
        }
    }

    Update() {
        fill(0);
        rect(0, 0, this.Width, this.Height);
    }

    AddBodypart() {
        if (this.#child) {
            this.#child.AddBodypart();
            return;
        }

        let bodypart = new SnakeBodypart(this.Position.x, this.Position.y, 20, null, this);
        bodypart.#moveDirection = this.#moveDirection.copy();

        this.#child = bodypart;

    }

    ChangeDirection(newDir) {
        let angle = newDir.angleBetween(this.#moveDirection);
        angle = Math.abs(angle);
        if (angle < 1.6) {
            this.#moveDirection = newDir;
        }
    }

    OnOverlap(spritesHit) {
        spritesHit.forEach(other => {
            if (other instanceof Candy) {
                if (this.#parent == null) {
                    other.Remove();
                    this.AddBodypart();
                }
            }

            if (other instanceof SnakeBodypart) {
                // GAME OVER
            }
        });
    }
}