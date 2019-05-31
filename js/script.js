$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        autoplay: true
    })


    $(function() {
        var box = $('nav'); // float-fixed block
        console.log(box);
        var top = box.offset().top - parseFloat(box.css('marginTop').replace(/auto/, 0));
        $(window).scroll(function() {
            var windowpos = $(window).scrollTop();
            if (windowpos < top) {
                console.log('top');
                box.removeClass('sticky');

                $('#about').css('padding-top', '0px');
            } else {
                box.addClass('sticky');
                $('#about').css('padding-top', '106px');

            }
        });
    });

    $('.nav-container__item-logo').click(function() {
        // window.open('../', '_blank');
        console.log($(this).hasClass('main__logo'))
        if ($(this).hasClass('main__logo')) {
            console.log('da')
        } else {
            window.open('../', '_blank');

        }
    })

    $('.buy').click(function() {
        let elementClick = $('#get_order')
        var destination = $(elementClick).offset().top - 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        let name = $(this).parent().parent().parent().find('h4').text().trim();
        console.log(name)
        $('.selected-item').text(name)
    })



    $('.services__options button').click(function() {
        $('.services__options button').removeClass('active');
        $('.services__option_block').hide();
        $(this).addClass('active');
        let option = $(this).attr('data-option');
        let background = $(this).attr('data-background');
        $('.' + option).css('display', 'flex');
        $('.services__description').css('background', "url('./images/" + background + "'");
    })



    $(window).on('scroll', function() {
        var topMenu = $("nav ul");
        topMenuHeight = topMenu.outerHeight();
        menuItems = topMenu.find("a");
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            // console.log(item)

            if (item.length) { return item; }
        });
        var fromTop = $(this).scrollTop() + topMenuHeight + 200;

        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)

                return this;
        });
        cur = cur[cur.length - 1];

        var id = cur && cur.length ? cur[0].id : "";
        menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
    })


    $("nav a.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });


    $(document).ready(function() {

        var select = $('#select');
        var select_name = $('#select').attr('id');
        var option = [];
        var select_placeholder;
        $('body').on('click', '.selected-item', function() {
            $('.select-items').toggle();
            $(this).toggleClass('active-selector')


        })

        $('#select option').each(function() {
            if ($(this).hasClass('select_placeholder')) {
                select_placeholder = $(this).text();
                console.log(select_placeholder)
            } else {
                option.push($(this).text());
                console.log(option);
            }


        })
        select.hide();
        $('.select-block').append('<div class="select"></div>');
        $('.select').append('<div class="selected-item">' + select_placeholder + "</div>").append('<div class="select-items"></div>');
        for (var i = 0; i < option.length; i++) {
            $('.select-items').append('<div class="item">' + option[i] + '</div>');
        }
        $('body').on('click', '.item', function() {
            $('.selected-item').text($(this).text());
            $(this).parent().hide();
            $('.selected-item').toggleClass('active-selector')

        })




    })
    $('[name="mobile"]').mask('+7(999) 999-99-99')
})