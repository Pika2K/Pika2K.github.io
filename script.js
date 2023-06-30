
(function ($) {
    'use strict';
    var $section = $('.js-section');
    var $pager = $('#js-pager');

    var options = {
        section: '.js-section',
        sectionName: false,
        easing: "easeOutExpo",
        scrollSpeed: 50,
        scrollbars: false,
        overflowscroll: true,
        interstitialSection: ".header",
        before: function (index) {
            pagerCurrent(index);
        },
        afterRender: function () {
            setTimeout(createPager(), 1500);
            pagerLink();
        },
        after: function (index) {
            pagerCurrent(index);
        }
    };

    $(document).ready(function () {
        $.scrollify(options);

        $(".downarrow").click(function () {
            $.scrollify.next();
        });

        $(".uparrow").click(function () {
            $.scrollify.move();
        });
    });

    function pagerCurrent(index = 0) {
        var $li = $pager.find('li');
        $li.removeClass('is-current');
        $li.eq(index).addClass('is-current');
    }

    function createPager() {
        $section.each(function (i, e) {
            var sectionId = $(e).attr('id');
            var addClass = i === 0 ? 'is-current' : '';
            var html = '';
            html += '<li class="' + addClass + '">';
            html += '<a href="#' + sectionId + '"></a>';
            html += '</li>';
            $pager.append(html);
        });
        pagerLink();
    }

    function pagerLink() {
        $pager.find('a').on('click', function () {
            $.scrollify.move($(this).attr("href"));
        });
    }
})(jQuery);
