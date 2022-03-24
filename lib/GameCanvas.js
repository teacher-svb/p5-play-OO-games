class GameCanvas {
    static #INSTANCE;

    static GetInstance() {
        if (GameCanvas.#INSTANCE == undefined) {
            GameCanvas.#INSTANCE = new GameCanvas();
            GameCanvas.#INSTANCE.Init();
        }
        return GameCanvas.#INSTANCE;
    }
    #allGameObjects;
    #allCollisionObjects;

    constructor() {}

    Init() {
        this.#allGameObjects = new Group();
        this.#allCollisionObjects = new Group();
    }

    AddGameObject(gameObject) {
        allSprites.add(gameObject);
        this.#allGameObjects.add(gameObject);
    }

    AddCollisionObject(gameObject) {
        this.#allCollisionObjects.add(gameObject);
    }

    GetAllGameObjects() {return this.#allGameObjects; }

    Update() {
        background(0);
        this.#allGameObjects.draw();
    }
}