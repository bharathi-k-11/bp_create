sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function(Controller, JSONModel, MessageToast, MessageBox) {
    'use strict';
    return Controller.extend("fiori.bp.team4.CreatePartner",{
        onInit:function(){
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oLocaldata = new JSONModel();
            this.oLocaldata.setData({
                "BussinessPartnerSet":{
                    "BP_ROLE" : "01",
                    "EMAIL_ADDRESS" : "bharathi.k@sap.com",
                    "PHONE_NUMBER" : "1234554321",
                    "FAX_NUMBER" : "0622734004",
                    "WEB_ADDRESS" : "http://www.sap.com",
                    "COMPANY_NAME" : "SAP",
                    "LEGAL_FORM" : "SE",
                    "CURRENCY_CODE" : "EUR",
                    "CITY" : "Walldorf",
                    "POSTAL_CODE" : "68789",
                    "STREET" : "Opelstraße",
                    "BUILDING" : "6",
                    "COUNTRY" : "DE",
                    "ADDRESS_TYPE" : "02",
                    "ADDRESS_VAL_START_DATE" : "PT00H00M00S",
                    "ADDRESS_VAL_END_DATE" : "PT00H00M00S",
                    "CREATED_BY" : "",
                    "CREATED_AT" : "PT00H00M00S",
                    "CHANGED_BY" : "",
                    "CHANGED_AT" : "PT00H00M00S",
                    "TITLE" : "Bharathi BP",
                    "FIRST_NAME" : "Bharathi",
                    "MIDDLE_NAME" : "",
                    "LAST_NAME" : "Kuarapati",
                    "NICKNAME" : "Bujji",
                    "INITIALS" : "K",
                    "SEX" : "M",
                    "LANGUAGE" : "E"
                }
            });
            this.getView().setModel(this.oLocaldata, "local");
        },
        onPrevious:function(){
            this.oRouter.navTo('home');
        },
        savePartner:function(){
          var payLoad = this.oLocaldata.getProperty("/BussinessPartnerSet");
          var oDataModel = this.getView().getModel();
          oDataModel.create("/BussinessPartnerSet", payLoad,{
                success: ()=>{
                    MessageToast.show("BP Created Successfully");
                },
                error:(oError)=>{
                    MessageBox.error(JSON.parse(oError.responseText).error.innererror.errordetails[0].message);
                }
          });
          
        }
    })
});