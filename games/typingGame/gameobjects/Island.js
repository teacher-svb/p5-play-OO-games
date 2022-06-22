class Island extends GameObject {
    static #textureTopLeft = undefined;
    static #textureTop = undefined;
    static #textureTopRight = undefined;
    static #textureRight = undefined;
    static #textureBottomRight = undefined;
    static #textureBottom = undefined;
    static #textureBottomLeft = undefined;
    static #textureLeft = undefined;
    static #textureCenter = undefined;
    static #textureCenter1 = undefined;
    static #textureCenter2 = undefined;
    static #textureCenter3 = undefined;
    static #textureCenter4 = undefined;


    #pattern = "";
    #texture = undefined;

    constructor(x, y, pattern) {
        super(x, y, Settings.GridSize, Settings.GridSize);
        this.SetDefaultCollider();
        this.CollisionLayer = Settings.Layers.LAND;

        this.#pattern = pattern;
        
        if (!Island.#textureTopLeft) Island.#textureTopLeft = loadImage("assets/island-1.png");
        if (!Island.#textureTop) Island.#textureTop = loadImage("assets/island-2.png");
        if (!Island.#textureTopRight) Island.#textureTopRight = loadImage("assets/island-3.png");
        if (!Island.#textureRight) Island.#textureRight = loadImage("assets/island-5.png");
        if (!Island.#textureBottomRight) Island.#textureBottomRight = loadImage("assets/island-8.png");
        if (!Island.#textureBottom) Island.#textureBottom = loadImage("assets/island-7.png");
        if (!Island.#textureBottomLeft) Island.#textureBottomLeft = loadImage("assets/island-6.png");
        if (!Island.#textureLeft) Island.#textureLeft = loadImage("assets/island-4.png");
        if (!Island.#textureCenter) Island.#textureCenter = loadImage("assets/island-9.png");
        if (!Island.#textureCenter1) Island.#textureCenter1 = loadImage("assets/island-10.png");
        if (!Island.#textureCenter2) Island.#textureCenter2 = loadImage("assets/island-11.png");
        if (!Island.#textureCenter3) Island.#textureCenter3 = loadImage("assets/island-12.png");
        if (!Island.#textureCenter4) Island.#textureCenter4 = loadImage("assets/island-13.png");

        console.log(pattern);
        
        switch(true) {
            case /.000..../.test(this.#pattern): this.#texture = Island.#textureTopRight; break;
            case /.....000/.test(this.#pattern): this.#texture = Island.#textureBottomLeft; break;
            case /...000../.test(this.#pattern): this.#texture = Island.#textureBottomRight; break;
            case /00.....0/.test(this.#pattern): this.#texture = Island.#textureTopLeft; break;
            case /.......0/.test(this.#pattern): this.#texture = Island.#textureLeft; break;
            case /.....0../.test(this.#pattern): this.#texture = Island.#textureBottom; break;
            case /...0..../.test(this.#pattern): this.#texture = Island.#textureRight; break;
            case /.0....../.test(this.#pattern): this.#texture = Island.#textureTop; break;
            case /01.....1/.test(this.#pattern): this.#texture = Island.#textureCenter2; break;
            case /.101..../.test(this.#pattern): this.#texture = Island.#textureCenter1; break;
            case /...101../.test(this.#pattern): this.#texture = Island.#textureCenter3; break;
            case /.....101/.test(this.#pattern): this.#texture = Island.#textureCenter4; break;
            default: this.#texture = Island.#textureCenter; break;
        }
    }

    Update() {
        fill("#fae8c2");
        // rect(0, 0, this.Width, this.Height);
        image(Water.texture, 0, 0, this.Width, this.Height);
        if (this.#texture) {
            image(this.#texture, 0, 0, this.Width, this.Height);
        }
    }
}