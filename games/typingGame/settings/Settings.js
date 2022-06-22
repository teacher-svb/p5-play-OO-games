class Settings {
    static GameClass = TypingGame;
    
    static Layers = {
        PLAYER: 0,
        ROCKS: 1,
        ENEMIES: 2,
        LAND: 3
    };

    static LayerInteractions = {
        [Settings.Layers.PLAYER]: [Settings.Layers.LAND],
        [Settings.Layers.ROCKS]: [Settings.Layers.ROCKS, Settings.Layers.LAND]
    };

    static BackgroundColor = "#FFF";

    static GameWidth = 400;
    static GameHeight = 800;

    static Debug = false;
    static ShowStats = true;
    static ShowGrid = false;
    static GridSize = 80;
}