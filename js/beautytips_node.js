(function($) {
  Backdrop.behaviors.beautytips_node = {
    attach: function(context, settings) {
      // Fix for backdrop attach behaviors in case the plugin is not attached.
      if (typeof(jQuery.bt) == 'undefined' && jQuery.bt == null) {
        return;
      }
      var beautytips = Backdrop.settings.beautytips;
      var styles = Backdrop.settings.beautytipStyles;
      var beautytipsnode = Backdrop.settings.beautyTipsNode;
      var defaultStyle = beautytipsnode.defaultStyle;
      var defaultStyleSettings = styles[defaultStyle];

      $('.beautytips-node:not(.beautytips-processed)').addClass('beautytips-processed').each(function() {
        defaultStyleSettings.trigger = 'none';
        defaultStyleSettings.ajaxPath = '/beautytips' + $(this).attr('href');
        $(this).bt(defaultStyleSettings);
        $(this).hover(
          function() {
            $(this).btOn();
            return false;
          },
          function() {
            $(this).btOff();
            return false;
          }
        )
      });
    }
  };
})(jQuery);
