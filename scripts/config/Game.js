var game = {
    title: "Epocalypse",
    version: "0.0.1",
    width: 800,
    height: 600,
    language: "fr",
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            }
        },
    },
    plugins : {
        global: [
            {
                key:    'TranslatorPlugin',
                plugin: TranslatorPlugin,
                start: true,
                mapping: 'translator'
            },
        ]
    },
    scene: [
        Boot,
        MainMenu,
    ]
};