import Navigo from "navigo";
var $ = require( "jquery" );

import "./styles.css";

const router = new Navigo("/");

router.on("user/:id/:action", function (routeConfig) {
	window.router = routeConfig;
	document.getElementById("app").innerHTML = `<pre>${JSON.stringify(
		routeConfig,
		null,
		2
		)}</pre>`;
});

router.on('about/contacts', function (match) {
	import("./pages/about.vue").then(function (page) {
  // Render page
  page.render();
});
	$('#app').html('about/contacts.vue');
});