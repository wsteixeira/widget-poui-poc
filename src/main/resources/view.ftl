<#assign coreContext='widget_poui_poc'>

<link rel="stylesheet" href="/${coreContext}/resources/js/styles.css">

<div id="widget_poui_poc_${instanceId}" class="fluig-style-guide">
    <app-root></app-root>
</div>

<script>

	/**
	 * The script below sets some enviroment variables to be used inside
	 * Angular application. (see: app.config.ts)
	 */
	(function setEnvironmentParams() {

		var protectedContextPath = '${protectedContextPath!""}';
		var contextPath = '${contextPath!""}';

		// base url for frontend application
		var baseUrl = protectedContextPath + '/${tenantCode!""}';

		// replace '/p' for public pages
		if (window.location.href.indexOf(protectedContextPath) === -1) {
			baseUrl = baseUrl.replace(protectedContextPath, contextPath);
		}

		// base url for frontend application
		window['_app_baseUrl'] = baseUrl;

		// get page code
		window['_app_pageCode'] = '${(pageCode!"")}';

	})();

</script>

<script src="/${coreContext}/resources/js/runtime.js" type="module"></script>
<script src="/${coreContext}/resources/js/polyfills.js" type="module"></script>
<script src="/${coreContext}/resources/js/main.js" type="module"></script>