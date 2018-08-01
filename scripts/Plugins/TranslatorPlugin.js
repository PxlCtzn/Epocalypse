class TranslatorPlugin extends Phaser.Plugins.BasePlugin {
    constructor (pluginManager)
    {
        super(pluginManager);
    }

    init()
    {
        console.log('Translator is alive');
    }

    start()
    {
        console.log('Translator is started');
    }

    stop()
    {
        console.log('Translator is stopped');
    }

    updateLanguage(languageKey){
        this.systems ;
        this.game.load.json('language', 'scripts/translations/'+languageKey+'.json');
    }

    translate(key, options)
    {
        return this.cache.json.get('key')
    }

}