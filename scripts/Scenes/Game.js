class Game extends Phaser.Scene {

    constructor(){
        super({
            "key" : "Game",
        })
    }

    preload(){
        console.log("Scene: GameScene");
        console.log("GameScene->preaload()");
    }

    create(){
        console.log("GameScene->create()");
    }
}