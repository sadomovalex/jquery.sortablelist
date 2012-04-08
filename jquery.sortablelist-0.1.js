/*
jQuery Sortable List 0.1
Copyright (c) 2012 Alexey Sadomov
*/
(function ($) {

    $.fn.sortablelist = function (options) {
        var self = $(this);
        var opts = $.extend({}, $.fn.sortablelist.defaults, options);

        var width = self.width() || opts.width;
        width += opts.arrowsColumnWidth + 10;

        var height = self.height() || opts.height;
        
        self.wrap('<div id="sortablelist"/>');
        var parent = self.parent('#sortablelist');
        parent.width(width).height(height);

        self.attr('style', 'float: left');
        self.after(
            '<div id="arrows" style="float: left">' +
            '   <a href="#" style="text-decoration: none" id="up">' + opts.up + '</a><br />' +
            '   <a href="#" style="text-decoration: none" id="down">' + opts.down + '</a>' +
            '</div>');
        parent.find('#up').click($.fn.sortablelist.moveUp);
        parent.find('#down').click($.fn.sortablelist.moveDown);

        parent.find('#arrows').width(opts.arrowsColumnWidth).height(height);
    };

    $.fn.sortablelist.moveUp = function () {
        var sel = $(this).parents('#sortablelist').find('select :selected');
        if (sel.length != 1) {
            return;
        }
        sel.each(function(){
            $(this).insertBefore($(this).prev());
        });
    };

    $.fn.sortablelist.moveDown = function () {
        var sel = $(this).parents('#sortablelist').find('select :selected');
        if (sel.length != 1) {
            return;
        }
        sel.each(function(){
            $(this).insertAfter($(this).next());
        });
    };

    $.fn.sortablelist.defaults = {
        arrowsColumnWidth: 20,
        up : '&uArr;',
        down : '&dArr;',
        width: 200,
        height : 100,
    };

})(jQuery);