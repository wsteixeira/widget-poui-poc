abstract class AppSettings {
  static APP_WINDOW: any = window;

  static APP_ROOT = AppSettings.APP_WINDOW['_app_baseUrl'];
  static APP_PAGE_CODE = AppSettings.APP_WINDOW['_app_pageCode'];

  /**
   * base url + application prefix
   */

  static APP_BASE =
    AppSettings.APP_ROOT && AppSettings.APP_PAGE_CODE
      ? AppSettings.APP_ROOT + '/' + AppSettings.APP_PAGE_CODE
      : '';
}

export { AppSettings as APP_CONFIG };
