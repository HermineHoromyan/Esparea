$(document).ready(function () {



    $('.dropdown-click__open').on('click', function () {
        let parent = $(this).parent()
        let child = $(parent).find('.dropdown-modal')
        $(child).fadeToggle()
        $(parent).toggleClass('dropdown-modal__open')
    })

    $('.select-item').on('click', function () {
        let this_parent = $(this).parent()
        let parent_this = $(this_parent).parent()
        let parent = $(parent_this).parent()
        let child_select_input = $(parent).find('.select-zone__input')
        let select_text = $(this).text()
        $(child_select_input).val(select_text);
    })

    // function for window click
    $(window).on('click', function (e) {
        if (!$(e.target).closest('.window-click').length) {
            $('.dropdown-modal').hide();
            $('.dropdown').removeClass('dropdown-modal__open');
        }
    });



    // function for left sidebar
    $('.left-sidebar__close').on('click', function () {
        $('.h-wrapper').toggleClass('mini-sidebar');
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 70) {
            $('.h-sidebar-menu').addClass('h-sidebar-menu__scroll');
        } else {
            $('.h-sidebar-menu').removeClass('h-sidebar-menu__scroll');
        }
    });


    // function for change active in dask
    $('.links ul li').on('click', function () {
        let this_parent = $(this).parent()
        let this_inks = $(this_parent).parent()
        let this_links_first = $(this_parent).children()
        let parent = $(this_inks).parent()
        let blocks_children = $(parent).find('.blocks').children()
        let data_link = $(this).data('link')
        $(this_links_first).removeClass('active')
        $(this).addClass('active')

        $(blocks_children).each(function () {
            $(this).hide()
            if ($(this).data('box') === data_link) {
                $(this).fadeIn()
            }
        })
    })


    // function for play video
    $('.video-play__bg').click(function () {
        var this_prt = $(this).parent()
        var parent_video = $(this_prt)
        var icon_video = $(parent_video).find(".video-play__bg")
        var video = $(parent_video).find(".h-video")
        $(video).trigger('play')
        $(video).attr("controls", "controls")
        $(icon_video).fadeOut()
    });




    //** ======================== */

    $(function () {
        $('.datep_arrival').datepicker($.datepicker.regional["ru"]);
        $(".datep_arrival").datepicker().datepicker("setDate", new Date());
    });

    $(function (factory) {
        if (typeof define === "function" && define.amd) {

            define(["../widgets/datepicker"], factory);
        } else {

            factory(jQuery.datepicker);
        }
    }(function (datepicker) {


        datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "",
            nextText: "",
            currentText: "Сегодня",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
            ],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
            ],
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        datepicker.setDefaults(datepicker.regional.ru);

        return datepicker.regional.ru;

    }));
});