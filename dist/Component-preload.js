//@ui5-bundle fiori/bp/team4/Component-preload.js
sap.ui.require.preload({
	"fiori/bp/team4/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent"],function(t){"use strict";return t.extend("fiori.bp.team4.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this);var i=this.getRouter();i.initialize()},destroy:function(){}})});
},
	"fiori/bp/team4/controller/BaseController.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("fiori.bp.team4.BaseController",{oCore:sap.ui.getCore()})});
},
	"fiori/bp/team4/controller/CreatePartner.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/m/MessageToast","sap/m/MessageBox"],function(e,t,r,s){"use strict";return e.extend("fiori.bp.team4.CreatePartner",{onInit:function(){this.oRouter=this.getOwnerComponent().getRouter();this.oLocaldata=new t;this.oLocaldata.setData({BussinessPartnerSet:{BP_ROLE:"01",EMAIL_ADDRESS:"bharathi.k@sap.com",PHONE_NUMBER:"1234554321",FAX_NUMBER:"0622734004",WEB_ADDRESS:"http://www.sap.com",COMPANY_NAME:"SAP",LEGAL_FORM:"SE",CURRENCY_CODE:"EUR",CITY:"Walldorf",POSTAL_CODE:"68789",STREET:"Opelstraße",BUILDING:"6",COUNTRY:"DE",ADDRESS_TYPE:"02",ADDRESS_VAL_START_DATE:"PT00H00M00S",ADDRESS_VAL_END_DATE:"PT00H00M00S",CREATED_BY:"",CREATED_AT:"PT00H00M00S",CHANGED_BY:"",CHANGED_AT:"PT00H00M00S",TITLE:"Bharathi BP",FIRST_NAME:"Bharathi",MIDDLE_NAME:"",LAST_NAME:"Kuarapati",NICKNAME:"Bujji",INITIALS:"K",SEX:"M",LANGUAGE:"E"}});this.getView().setModel(this.oLocaldata,"local")},onPrevious:function(){this.oRouter.navTo("home")},savePartner:function(){var e=this.oLocaldata.getProperty("/BussinessPartnerSet");var t=this.getView().getModel();t.create("/BussinessPartnerSet",e,{success:()=>{r.show("BP Created Successfully")},error:e=>{s.error(JSON.parse(e.responseText).error.innererror.errordetails[0].message)}})}})});
},
	"fiori/bp/team4/controller/Home.controller.js":function(){
sap.ui.define(["fiori/bp/team4/controller/BaseController","sap/m/MessageBox","sap/m/MessageToast"],function(e,t,o){"use strict";return e.extend("fiori.bp.team4.Home",{onInit:function(){this.oRouter=this.getOwnerComponent().getRouter()},createPartner:function(){this.oRouter.navTo("createPartner")}})});
},
	"fiori/bp/team4/fragments/CreatePartner.fragment.xml":'<core:FragmentDefinition\n\txmlns="sap.m"\n\txmlns:l="sap.ui.layout"\n\txmlns:f="sap.ui.layout.form"\n\txmlns:core="sap.ui.core"><VBox class="sapUiSmallMargin"><f:Form id="FormChange480_12120"\n\t\t\teditable="true"><f:title><core:Title text="Basic" /></f:title><f:layout><f:ResponsiveGridLayout\n\t\t\t\t\tlabelSpanXL="4"\n\t\t\t\t\tlabelSpanL="4"\n\t\t\t\t\tlabelSpanM="12"\n\t\t\t\t\tlabelSpanS="12"\n\t\t\t\t\tadjustLabelSpan="false"\n\t\t\t\t\temptySpanXL="0"\n\t\t\t\t\temptySpanL="0"\n\t\t\t\t\temptySpanM="0"\n\t\t\t\t\temptySpanS="0"\n\t\t\t\t\tcolumnsXL="2"\n\t\t\t\t\tcolumnsL="2"\n\t\t\t\t\tcolumnsM="1"\n\t\t\t\t\tsingleContainerFullSize="false" /></f:layout><f:formContainers><f:FormContainer title="Office"><f:formElements><f:FormElement label="ROLE"><f:fields><Input value="{local>/BussinessPartnerSet/BP_ROLE}" id="role"/></f:fields></f:FormElement><f:FormElement label="Name"><f:fields><Input value="{local>/BussinessPartnerSet/FIRST_NAME}" placeholder="First Name" /><Input value="{local>/BussinessPartnerSet/MIDDLE_NAME}" placeholder="Middle Name" /><Input value="{local>/BussinessPartnerSet/LAST_NAME}" placeholder="Last Name"><layoutData><l:GridData span="XL2 L2 M2 S4" /></layoutData></Input></f:fields></f:FormElement><f:FormElement label="Sex"><f:fields><Input value="{local>/BussinessPartnerSet/SEX}" /></f:fields></f:FormElement><f:FormElement label="Language"><f:fields><Input value="{local>/BussinessPartnerSet/LANGUAGE}" /></f:fields></f:FormElement></f:formElements></f:FormContainer><f:FormContainer title="Address"><f:formElements><f:FormElement label="Country"><f:fields><Input value="{local>/BussinessPartnerSet/COUNTRY}" /></f:fields></f:FormElement><f:FormElement label="City"><f:fields><Input value="{local>/BussinessPartnerSet/CITY}" /></f:fields></f:FormElement><f:FormElement label="Postal Code"><f:fields><Input value="{local>/BussinessPartnerSet/POSTAL_CODE}" /></f:fields></f:FormElement><f:FormElement label="Building"><f:fields><Input value="{local>/BussinessPartnerSet/BUILDING}" /></f:fields></f:FormElement></f:formElements></f:FormContainer></f:formContainers></f:Form><f:Form id="FormChange480_12120-2"\n\t\t\teditable="true"><f:title><core:Title text="More" /></f:title><f:layout><f:ResponsiveGridLayout\n\t\t\t\t\tlabelSpanXL="4"\n\t\t\t\t\tlabelSpanL="4"\n\t\t\t\t\tlabelSpanM="12"\n\t\t\t\t\tlabelSpanS="12"\n\t\t\t\t\tadjustLabelSpan="false"\n\t\t\t\t\temptySpanXL="0"\n\t\t\t\t\temptySpanL="0"\n\t\t\t\t\temptySpanM="0"\n\t\t\t\t\temptySpanS="0"\n\t\t\t\t\tcolumnsXL="2"\n\t\t\t\t\tcolumnsL="2"\n\t\t\t\t\tcolumnsM="1"\n\t\t\t\t\tsingleContainerFullSize="false" /></f:layout><f:formContainers><f:FormContainer title="Contact data"><f:formElements><f:FormElement label="Email"><f:fields><Input value="{local>/BussinessPartnerSet/EMAIL_ADDRESS}" /></f:fields></f:FormElement><f:FormElement label="Tel."><f:fields><Input value="{local>/BussinessPartnerSet/PHONE_NUMBER}" /></f:fields></f:FormElement><f:FormElement label="FAX"><f:fields><Input value="{local>/BussinessPartnerSet/FAX_NUMBER}" /></f:fields></f:FormElement></f:formElements></f:FormContainer></f:formContainers></f:Form></VBox></core:FragmentDefinition>',
	"fiori/bp/team4/i18n/i18n.properties":'appTitle=Business Partner App \nappDescription=Business Partner App',
	"fiori/bp/team4/manifest.json":'{"_version":"1.1.0","sap.app":{"id":"fiori.bp.team4","type":"application","applicationVersion":{"version":"1.0.0"},"i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","dataSources":{"bharathiService":{"uri":"/sap/opu/odata/sap/ZLEN_FIORI4_ODATA_SRV_01","type":"OData","settings":{"odataVersion":"2.0"}}}},"sap.ui":{"deviceTypes":{"phone":true,"desktop":true,"tablet":true},"fullWidth":true,"supportedThemes":["sap_bluecrystal","sap_fiori_3","sap_fiori_3_dark"],"technology":"UI5"},"sap.ui5":{"contentDensities":{"compact":true,"cozy":true},"dependencies":{"minUI5Version":"1.90","libs":{"sap.m":{},"sap.ui.layout":{},"sap.ui.comp":{}}},"rootView":{"viewName":"fiori.bp.team4.view.Home","id":"idRootView","type":"XML"},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewPath":"fiori.bp.team4.view","async":true,"clearTarget":true,"viewType":"XML","controlId":"AppCon","controlAggregation":"pages"},"routes":[{"name":"home","pattern":"","target":["Home"]},{"name":"createPartner","pattern":"createPartner","target":["CreatePartner"]}],"targets":{"Home":{"viewName":"Home","viewId":"idHome","controlAggregation":"pages"},"CreatePartner":{"viewName":"CreatePartner","viewId":"idCreatePartner","controlAggregation":"pages"}}},"models":{"":{"type":"sap.ui.model.odata.v2.ODataModel","dataSource":"bharathiService"}},"resources":{"css":[{"uri":"css/style.css"}]}}}',
	"fiori/bp/team4/view/CreatePartner.view.xml":'<mvc:View\n\theight="100%"\n\tcontrollerName="fiori.bp.team4.controller.CreatePartner"\n\txmlns:mvc="sap.ui.core.mvc"\n    xmlns:core="sap.ui.core"\n\txmlns="sap.m"><Page\n\t\tid="page"\n\t\tshowHeader="true" ><customHeader><Bar><contentRight><Button icon="sap-icon://nav-back" press="onPrevious"></Button><ToolbarSpacer></ToolbarSpacer><Button id="save" text="Save" press="savePartner" /></contentRight></Bar></customHeader><core:Fragment fragmentName="fiori.bp.team4.fragments.CreatePartner" type="XML" /></Page></mvc:View>',
	"fiori/bp/team4/view/Home.view.xml":'<mvc:View\ncontrollerName="fiori.bp.team4.controller.Home"\nheight="100%"\nxmlns="sap.m"\nxmlns:mvc="sap.ui.core.mvc"\nxmlns:l="sap.ui.layout"\nxmlns:core="sap.ui.core"\nxmlns:f="sap.f"\nxmlns:card="sap.f.cards"\ndisplayBlock="true"\nxmlns:t="sap.ui.table"><App id="AppCon"><Page id="idHome" title="Dashboard" titleAlignment="Center"><VBox><Panel><GenericTile class="tileMargin tileLayout padding1em" header="Create Partner"\n\t\tpress="createPartner" url="https://www.sap.com/"><TileContent><ImageContent src="https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/sample/GenericTileAsLaunchTile/images/SAPLogoLargeTile_28px_height.png" /></TileContent></GenericTile></Panel></VBox></Page></App></mvc:View>    '
});
//# sourceMappingURL=Component-preload.js.map