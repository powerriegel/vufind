/**
 *
 * @type {{sidebar: null, button: null, body: null, init: init, initOffCanvas: initOffCanvas, toggleOffCanvas: toggleOffCanvas, enableTransition: enableTransition}}
 */
var OffCanvas = {
  sidebar: null,
  button: null,
  body: null,

  /**
   * Initialize Off-Canvas handling
   */
  init: function () {
    OffCanvas.initOffCanvas();
  },

  /**
   *
   */
  initOffCanvas: function () {
    OffCanvas.sidebar = $(".sidebar");
    OffCanvas.button = $("button#sidebar-offcanvas-trigger");

    if (OffCanvas.sidebar.length > 0) {
      OffCanvas.body = $("body");
      OffCanvas.footer = $("footer");
      OffCanvas.main = $(".main");
      OffCanvas.header = $("header");

      OffCanvas.button.click(OffCanvas.toggleOffCanvas);
    } else {
      OffCanvas.button.hide();
    }
  },

  /**
   * Toggle Off Canvas
   */
  toggleOffCanvas: function () {
    OffCanvas.enableTransition();

    if (OffCanvas.body.hasClass("offcanvas-active")) {
      OffCanvas.body.removeClass("offcanvas-active");
      OffCanvas.button.removeClass("offcanvas-active");
      OffCanvas.sidebar.removeClass("offcanvas-active");
      OffCanvas.sidebar.css('height', '');
      OffCanvas.sidebar.css('overflow-y', '');
      OffCanvas.body.css('height', '');
      OffCanvas.body.css('overflow-y', '');
    } else {
      OffCanvas.body.addClass("offcanvas-active");
      OffCanvas.button.addClass("offcanvas-active");
      OffCanvas.sidebar.addClass("offcanvas-active");
      OffCanvas.sidebar.css('height', window.innerHeight);
      OffCanvas.sidebar.css('overflow-y', 'scroll');
      OffCanvas.body.css('height', window.innerHeight);
      OffCanvas.body.css('overflow-y', 'hidden');
    }
  },

  /**
   * Workaround to prevent transition on orientation change
   */
  enableTransition: function() {
    OffCanvas.sidebar.addClass('transition');
    setTimeout(function() {
      $('.sidebar').removeClass('transition');
    }, 400);
  }
};

$(OffCanvas.init);
