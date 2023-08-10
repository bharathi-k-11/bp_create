sap.ui.define([
    'fiori/bp/team4/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast'
], function(BaseController, MessageBox, MessageToast) {
    'use strict';
    return BaseController.extend("fiori.bp.team4.Home",{
        onInit: function(){
            this.oRouter = this.getOwnerComponent().getRouter()
        },
        createPartner:function(){
            this.oRouter.navTo("createPartner");
        }
       });
    });