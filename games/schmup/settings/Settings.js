class Settings {
    static GameClass = SchmupGame;
    
    static Layers = {
        PLAYER: 0,
        ROCKS: 1,
        ENEMIES: 2
    };

    static LayerInteractions = {
        // [Settings.Layers.PLAYER]: [Settings.Layers.ENEMIES, Settings.Layers.ROCKS]
    };

    static BackgroundColor = "#FFF";

    static GameWidth = 800;
    static GameHeight = 600;

    static Debug = true;
    static ShowStats = true;
    static ShowGrid = false;
    static GridSize = 50;
}