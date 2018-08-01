class Boot extends Phaser.Scene {

    constructor(){
        super({
            "key" : "Boot",
        })
    }

    preload(){
        console.log("Scene: BootScene");
        console.log("BootScene->preaload()");
        this.load.bitmapFont(GameFonts.dialogue.name,   GameFonts.dialogue.png, GameFonts.dialogue.xml);
        this.load.bitmapFont(GameFonts.console.name,    GameFonts.console.png,  GameFonts.console.xml);
        this.load.json('translations', 'scripts/translations/boot.json');
        this.load.json('flags', 'scripts/translations/boot.json');
    }

    create(){
        console.log("BootScene->create()");
        this.renderLanguageSelector();
        this.renderVersion();
    }

    renderLanguageSelector(){
        let grp = {};
        grp.selectLanguageBmpText = this.add.bitmapText(0, 0, GameFonts.title.name, );
    }

    renderVersion(){
        let titleBmpText = this.add.bitmapText(0, 0, GameFonts.console.name, 'Version'+this.sys.game.config.gameVersion);
        titleBmpText.setScale(0.5);
        titleBmpText.setAlpha(0.5);
        Positions.bottomRightOnScreen(titleBmpText);
    }
}