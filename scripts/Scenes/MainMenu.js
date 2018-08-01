class MainMenu extends Phaser.Scene {
    // Main Menu constructor
    constructor(){
        super({
            key: "MainMenu"
        });
    }

    preload(){
        console.log("Scene: MainMenu");
        console.log("MainMenu->preaload()");
        this.load.bitmapFont(GameFonts.title.name ,     GameFonts.title.png,    GameFonts.title.xml);
        this.load.bitmapFont(GameFonts.console.name,    GameFonts.console.png,  GameFonts.console.xml);

    }

    create(){
        console.log("MainMenu->create()");

        this.translator.updateLanguage('fr');

        this.renderTitleText();
        this.renderMenu();
        this.renderVersion();

    }

    renderTitleText(){
        let titleBmpText = this.add.bitmapText(0, 0, GameFonts.title.name, this.sys.game.config.gameTitle);
        // Positions.centerOnScreen(titleBmpText);
    }

    renderMenu(translator){
        if (true){
            let startBmpText = this.add.bitmapText(Positions.v_center, Positions.bottom * .75, GameFonts.title.name, this.translator.translate("MainMenu.start"));
        }else{
            // let continueBmpText = this.add.bitmapText(0, 0, GameFonts.title.name, translator.translate("MainMenu.continue"));
            // let restartBmpText = this.add.bitmapText(0, 0, GameFonts.title.name, translator.translate("MainMenu.restart"));
        }
        // let optionsBmpText = this.add.bitmapText(0, 0, GameFonts.title.name, translator.translate("MainMenu.options"));
        // let creditBmpText = this.add.bitmapText(0, 0, GameFonts.title.name, translator.translate("MainMenu.credit"));
    }

    renderVersion(){
        let titleBmpText = this.add.bitmapText(0, 0, GameFonts.console.name, 'Version'+this.sys.game.config.gameVersion);
        titleBmpText.setScale(0.5);
        titleBmpText.setAlpha(0.5);
        // Positions.bottomRightOnScreen(titleBmpText);
    }
}