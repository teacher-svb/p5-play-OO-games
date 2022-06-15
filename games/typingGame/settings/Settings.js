class Settings {
    static GameClass = TypingGame;
    
    static Layers = {
        PLAYER: 0,
        ROCKS: 1,
        ENEMIES: 2
    };

    static LayerInteractions = {
        // [Settings.Layers.PLAYER]: [Settings.Layers.ENEMIES, Settings.Layers.ROCKS]
        [Settings.Layers.ROCKS]: [Settings.Layers.ROCKS]
    };

    static BackgroundColor = "#FFF";

    static GameWidth = 800;
    static GameHeight = 600;

    static Debug = false;
    static ShowStats = true;
    static ShowGrid = false;
    static GridSize = 50;
}