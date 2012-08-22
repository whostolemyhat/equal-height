(function($) {
    jQuery.fn.equalHeight = function() {
        return this.each(function() {
            var $this = $(this);

            var maxHeight = 0;
            $this.each(function() {
                if($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });
            $this.each(function() {
                $(this).height(maxHeight);
            });

        });
    }
})(jQuery);

/*
 * EXAMPLE:
 * $('#megamenu > div').equalHeight();
 * ie pass the elements you want to be the same height, not the parent element.
 */

