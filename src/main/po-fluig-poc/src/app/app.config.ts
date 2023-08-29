abstract class AppSettings {
  static APP_ROOT = '/widget_poui_poc/resources/js/';
  static APP_WINDOW: any = window;
  static APP_FLUIG_ROOT = AppSettings.APP_WINDOW['_app_baseUrl'];
  static APP_FLUIG_PAGE_CODE = AppSettings.APP_WINDOW['_app_pageCode'];

  /**
   * base url + application prefix
   */

  static APP_BASE =
    AppSettings.APP_FLUIG_ROOT && AppSettings.APP_FLUIG_PAGE_CODE
      ? `${AppSettings.APP_FLUIG_ROOT}/${AppSettings.APP_FLUIG_PAGE_CODE}`
      : AppSettings.APP_ROOT;
}

export { AppSettings as APP_CONFIG };
