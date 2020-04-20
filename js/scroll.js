$('[goto=contact]').click(function () {
    location.href = 'index.html?contact';
    return false;
})

function checkUrl() {
    let url = location.href.split('/');
    let curPage = url[url.length - 1].split('?');

    if (curPage[1] != undefined && curPage[1] == 'contact') {
        $('header nav a').css('color', '#f5f5f5');
        $('footer nav a').css('color', '#f5f5f5');
        $('.contact-selected').css('color', '#eb2d2d').css('font-weight', 'bold');
        $('html,body').animate({ 'scrollTop': $('#contact').offset().top }, 'slow');
    }

}
checkUrl();

$('.to-top').on('click', function () {
    $('html, body').animate({ scrollTop: $('#top-of-page').offset().top }, 'slow');
    $('.top-selected').css('color', '#eb2d2d').css('font-weight', 'bold');
    $('.contact-selected').css('color', '#f5f5f5').css('font-weight', 'normal');
    return false;
});

$('.to-contact').on('click', function () {
    $('html, body').animate({ scrollTop: $('#contact').offset().top }, 'slow');
    $('.contact-selected').css('color', '#eb2d2d').css('font-weight', 'bold');
    return false;
});