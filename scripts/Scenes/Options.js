class Options extends Phaser.Scene {

    constructor(){
        super({
            "key" : "Options",
        })
    }

    preload(){
        console.log("Scene: OptionsScene");
        console.log("OptionsScene->preaload()");
    }

    create(){
        console.log("OptionsScene->create()");
    }
}