$(function() {

  // initialize ScalableLightbox
  $.ScalableLightbox({
    // show what's happening in
    // the debugger console
    debug:        true,

    // define the path for all
    // resources (images):
    baseImgPath: 'https://www.scalable-lightbox.com/assets/img/lightbox/',

    // define data structure via API
    api:          'https://www.scalable-lightbox.com/assets/api/data.json',

    // disable index module
    index: {
      enabled:    false
    },

    // lightbox module
    lightbox: {
      // disable overlay
      overlay:                        true,
      padding: {
        vertical:                     220,
        horizontal:                   106,

        verticalMobile:               180,
        horizontalMobile:             50
      },
      img: {
        captionLeft:                  "none",
        captionCenter:                "caption",
        captionRight:                 "number",
        captionNumberFmt:             "%n%/%total%",

        captionVerticalMargin:        7
      },
      // the lightbox cannot be closed, otherwise
      // users would see a white page
      controls: {
        close:                        false
      }
    },
    callbacks: {
      // once a plugin module has been loaded,
      // display the current project in the lightbox
      loaded: function() {

        var regex = /#lightbox\/(\d*)\/(\d*)/,
            match = regex.exec(window.location.hash);

        // hash detect (if true, the plugin
        // will open the contents for you)
        if (!match) {
          $.ScalableLightbox("open", { module: "lightbox", deck: window.projectID });
        }
      }
    },
    // hard transition, also have to change
    // CSS accordingly
    transitions: {
      fadeLightboxItem:               0
    }
  });

  // prev link behavior
  $("#prev-img").click(function(e) {
    e.preventDefault();

    $.ScalableLightbox("prev");
  });

  // next link behavior
  $("#next-img").click(function(e) {
    e.preventDefault();

    $.ScalableLightbox("next");
  });

});