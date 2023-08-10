sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("fiori.bp.team4.Component",{
        metadata:{
            manifest:"json"
        },
        init:function(){
            UIComponent.prototype.init.apply(this);
            var oRouter = this.getRouter();
            oRouter.initialize();
        },
        destroy: function(){
            
        }

    })
});