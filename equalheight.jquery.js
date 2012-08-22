(function($) {
    jQuery.fn.equalHeight = function() {
        
        var maxHeight = 0;
            
        this.each(function() {
            if($(this).outerHeight() > maxHeight) {
                maxHeight = $(this).outerHeight();
            }
        });
        
        this.each(function() {
            $(this).height(maxHeight);
        });

        return this;
    }
})(jQuery);

/*
 * EXAMPLE:
 * $('#megamenu > div').equalHeight();
 * ie pass the elements you want to be the same height, not the parent element.
 */

