/*
	Módulo del landing page
*/

let landingPage = (function (){
	
	st = {
		btnResponsive : "#btnResponsive",
		menuResponsive: "#menuResponsive"
	};

	dom = {};

	let catchDom = function(){
		dom.menuResponsive = $(st.menuResponsive);
		dom.btnResponsive  = $(st.btnResponsive);
	};

	let suscribeEvents = function(){
		dom.btnResponsive.on("click", events.showMenu);
	};

	let events = {
		showMenu: function(e){
			
			let state = dom.menuResponsive.hasClass("is-visible");

			if(state){
				dom.menuResponsive.removeClass("is-visible");
			}else{
				dom.menuResponsive.addClass("is-visible");
			}
		}
	};

	let fnMain = {
		executeScrollify(){
			$(function() {
				$.scrollify({
					section : ".section",
				});
			});
		}
	};

	let fn = {};

	let initialize = function(){
		catchDom();
		fnMain.executeScrollify();
		suscribeEvents();
	};

	return {
		init: initialize
	}

})();

landingPage.init();