/**
 * Created by Greg on 2017/7/12.
 */
(function ($, undefined) {

    $.fn.editer = function () {
        $(this).mouseup(function () {
            if(window.getSelection) {
                var testTEXT=getSelection().getRangeAt(0);
                var span = document.createElement('span');
                span.innerHTML = testTEXT.toString();
                testTEXT.surroundContents(span);
                console.log(111);
            }
        });
    };

})(jQuery);