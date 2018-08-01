var Positions = {
    v_center : game.height/2,
    h_center : game.width/2,

    top : 0,
    right: game.width,
    bottom : game.height,
    left: 0,

    isBitmapText: function(candidate){
        return "BitmapText" === candidate.type;
    },

    centerOnScreen : function(item){
        if(this.isBitmapText(item)) {
            item.x = this.h_center - item.width/2;
            item.y = this.v_center - item.height/2;
        }
    },

    bottomRightOnScreen : function(item){
        if(this.isBitmapText(item)) {
            item.x = this.right - item.width;
            item.y = this.bottom - item.height;
        }
    },
};