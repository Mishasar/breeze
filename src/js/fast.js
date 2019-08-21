import $ from 'jquery';
import 'slick-carousel';
import datepickerFactory from 'jquery-datepicker';
import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-ru';
import 'jquery-ui-slider/jquery-ui';

// Just pass your jquery instance and you're done
datepickerFactory($);
datepickerJAFactory($);

$(document).ready(() => {
    $('.js-detail-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        prevArrow: '<a class="detail-slider__arrow detail-slider__arrow_prev">',
        nextArrow: '<a class="detail-slider__arrow detail-slider__arrow_next">',
        asNavFor: '.js-preview-slider',
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
    $('.js-preview-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: false,
        asNavFor: '.js-detail-slider',
        dots: false,
        focusOnSelect: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });

    $('.js-slider-vertical').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        vertical: true,
        focusOnSelect: true,
        infinite: true,
        prevArrow: '<a class="vertical-slider__arrow vertical-slider__arrow_prev">',
        nextArrow: '<a class="vertical-slider__arrow vertical-slider__arrow_next">',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    vertical: false,

                }
            },
        ]
    });

    const $hamburger = $('.js-hamburger');

    $hamburger.on('click', () => {
        $hamburger.toggleClass('header__hamburger_closed');
        $('.js-fullscreen-menu').toggleClass('fullscreen-menu_open');
    });

    $('#js-datapicker-inline').datepicker({
        altField: '#js-datepicker',
        prevText: '<',
        nextText: '>',
    });

    $('.js-datepicker-wrap').hover(
        (e) => {
            const $el = $(e.target);
            $el.find('.js-datepicker').datepicker('show');
        },
        (e) => {
            const $el = $(e.target);
            $el.find('.js-datepicker').datepicker('hide');
        });

    $('.js-input-add').on('click', (e) => {
        const $el = $(e.target);
        const $input = $el.siblings('.js-input');
        $input.val((parseInt($input.val())) + 1);
        $input.trigger('change');
    });

    $('.js-input-remove').on('click', (e) => {
        const $el = $(e.target);
        const $input = $el.siblings('.js-input');
        let result = parseInt($input.val()) - 1;
        $input.val(result > 0 ? result : 0);
        $input.trigger('change');
    });

    $('.js-childs .js-input').on('change', (e) => {
        const $el = $(e.target);
        const value = $el.val();
        const type = $el.data('change');

        if (type == 'parents') {
            const changedBlock = $('.js-childs .js-changed[data-link="parents"]');

            switch (parseInt(value)) {
            case 0:
                changedBlock.text('Нет взрослых');
                break;
            case 1:
                changedBlock.text('1 взрослый');
                break;
            default:
                changedBlock.text(value + ' взрослых');
            }
        } else {
            const changedBlock = $('.js-childs .js-changed[data-link="child"]');

            console.log(changedBlock);

            switch (parseInt(value)) {
            case 0:
                changedBlock.text('Нет детей');
                break;
            case 1:
                changedBlock.text('1 ребёнок');
                break;
            case 2:
                changedBlock.text('2 ребёнка');
                break;
            case 3:
                changedBlock.text('3 ребёнка');
                break;
            case 4:
                changedBlock.text('4 ребёнка');
                break;
            default:
                changedBlock.text(value + ' детей');
            }
        }

    });


    $(".js-slider-range-cost").slider({
        range: true,
        values: [1, 10000],
        min: 1,
        max: 10000,
        slide: function (event, ui) {
            $('.js-cost-min').val(ui.values[0]);
            $('.js-cost-max').val(ui.values[1]);
        }
    });


});