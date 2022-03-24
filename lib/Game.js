class Game {
    constructor() {
    }

    static GetAllGameObjects() {return GameCanvas.GetInstance().GetAllGameObjects(); }

    Update() {
        GameCanvas.GetInstance().Update();
    }
}