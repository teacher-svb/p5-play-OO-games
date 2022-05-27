class Candy extends GameObject { 
    constructor(x, y, size) { 
        super(x, y, size - 2, size - 2);
        this.SetDefaultCollider();
    }

    Update() { 
        fill(255, 150, 150);
        rect(0, 0, this.Width, this.Height);
    }
}