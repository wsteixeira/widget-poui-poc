abstract class AppSettings {
  static APP_WINDOW: any = window;
  static APP_FLUIG_ROOT = AppSettings.APP_WINDOW['_app_baseUrl'];
  static APP_FLUIG_PAGE_CODE = AppSettings.APP_WINDOW['_app_pageCode'];

  /**
   * base url + application prefix
   */

  static APP_BASE =
    AppSettings.APP_FLUIG_ROOT && AppSettings.APP_FLUIG_PAGE_CODE
      ? `${AppSettings.APP_FLUIG_ROOT}/${AppSettings.APP_FLUIG_PAGE_CODE}`
      : '';

  static APP_ROOT = AppSettings.APP_BASE
    ? '/widget_poui_poc/resources/js/'
    : '';
}

export { AppSettings as APP_CONFIG };
