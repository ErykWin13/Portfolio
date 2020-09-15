// SCROLL FUNCTIONS 

$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    const $image = $('.photo');
    const $txt = $('.text p');

    const imageFromTop = $image.offset().top;
    const txtFromTop = $txt.offset().top;

    const imageHeight = $image.height();

    if (scrollValue > imageFromTop + imageHeight / 2 - windowHeight) {
        $image.addClass('active');
    }
    if (scrollValue > txtFromTop + imageHeight / 2 - windowHeight) {
        $txt.addClass('active');
    }

    const $html = $('.html');
    const $css = $('.css');
    const $js = $('.js');
    const $react = $('.react');
    const $git = $('.git');

    const htmlFromTop = $html.offset().top;
    const cssFromTop = $css.offset().top;
    const jsFromTop = $js.offset().top;
    const reactFromTop = $react.offset().top;
    const gitFromTop = $git.offset().top;

    const htmlHeight = $html.height();
    const cssHeight = $css.height();
    const jsHeight = $js.height();
    const reactHeight = $react.height();
    const gitHeight = $git.height();

    if (scrollValue > htmlFromTop + htmlHeight / 3 - windowHeight) {
        $html.addClass('active');
    }
    if (scrollValue > cssFromTop + cssHeight / 3 - windowHeight) {
        $css.addClass('active');
    }
    if (scrollValue > jsFromTop + jsHeight / 3 - windowHeight) {
        $js.addClass('active');
    }
    if (scrollValue > reactFromTop + reactHeight / 3 - windowHeight) {
        $react.addClass('active');
    }
    if (scrollValue > gitFromTop + gitHeight / 3 - windowHeight) {
        $git.addClass('active');
    }


    const $quot1 = $('.first-quot p');
    const $quot2 = $('.second-quot p');
    const $quot3 = $('.third-quot p');


    const quot1FromTop = $quot1.offset().top;
    const quot2FromTop = $quot2.offset().top;
    const quot3FromTop = $quot3.offset().top;


    const quot1Height = $quot1.height();
    const quot2Height = $quot2.height();
    const quot3Height = $quot3.height();


    if (scrollValue > quot1FromTop + quot1Height / 2 - windowHeight) {
        $quot1.addClass('active');
    }
    if (scrollValue > quot2FromTop + quot2Height / 2 - windowHeight) {
        $quot2.addClass('active');
    }
    if (scrollValue > quot3FromTop + quot3Height / 2 - windowHeight) {
        $quot3.addClass('active');
    }
})