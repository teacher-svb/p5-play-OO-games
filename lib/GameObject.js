class GameObject {
    constructor(x, y, width, height) {
        let protos = [];
        let counter = 0;
        let proto = this.__proto__;
        while (proto && counter < 50) {
            protos.push(proto);
            proto = proto.__proto__;
            counter++;
        }

        proto = this.__proto__;
        for (let i = 0; i < protos.length - 3; ++i) {
            proto = proto.__proto__;
        }

        let obj2 = new Sprite(x, y, width, height);
        let obj = { ...obj2 };
        Object.setPrototypeOf(obj, obj2.__proto__);
        Object.setPrototypeOf(proto, obj);

        this.draw = this.Update;
        // this.remove = this.Remove;
        this.position = createVector(x, y);
        this.newPosition = createVector(x, y);
        this.previousPosition = createVector(x, y);
        this.width = width;
        this.height = height;
        this.velocity = createVector(0, 0);
        this.groups = [];
        this.touching = {};
        this.touching.left = false;
        this.touching.right = false;
        this.touching.top = false;
        this.touching.bottom = false;
        this.shapeColor = color(random(255), random(255), random(255));

        this.depth = allSprites.maxDepth() + 1;
        GameCanvas.GetInstance().AddGameObject(this);
    }

    Update() {
        fill(this.shapeColor);
        rect(0, 0, this.width, this.height);
    }

    // Remove() {
    //     this.removed = true;

    //     quadTree.removeObject(this);

    //     // when removed from the "scene" also remove all the references in all the groups
    //     while (this.groups.length > 0) {
    //         this.groups[0].remove(this);
    //     }
    // }
}