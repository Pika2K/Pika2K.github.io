$(document).ready(function () {
    var $sections = $(".js-section");
    var $pager = $("#js-pager");
    var $container = $(".container");

    var options = {
        section: ".js-section",
        sectionName: false,
        easing: "easeOutExpo",
        scrollSpeed: 300,
        scrollbars: false,
        overflowscroll: false,
        interstitialSection: ".header",
        before: function (index) {
            pagerCurrent(index);
        },
        afterRender: function (index) {
            createPager();
            pagerLink();
        },
        after: function (index) {

        },
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
        $sections.removeClass("is-visible");
        $sections.removeClass("is-invisible");
        $sections.addClass("is-invisible"); 
        $sections.eq(index).removeClass("is-invisible");
        $sections.eq(index).addClass("is-visible");


        var $li = $pager.find("li");
        $li.removeClass("is-current");
        $li.eq(index).addClass("is-current");
    }

    function createPager() {
        $sections.each(function (i, e) {
            var sectionId = $(e).attr("id");
            var addClass = i === 0 ? "is-current" : "";
            var html = "";
            html += '<li class="' + addClass + '">';
            html += '<a href="#' + sectionId + '"></a>';
            html += "</li>";
            $pager.append(html);
        });
        pagerLink();
    }

    function pagerLink() {
        $pager.find("a").on("click", function () {
            $.scrollify.move($(this).attr("href"));
        });
    }

});