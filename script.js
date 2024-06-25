$(document).ready(function(){
    var sectionPage = $('#content section');
    sectionPage.hide();
    $('.intro').show();

    $('.btn_close').on('click', function(e){
        e.preventDefault();
        alert('응답해주세요^^');
    });

    $('.btn_no').on('click', function(e){
        e.preventDefault();
        alert('다시 생각해주세요^^');
    });

    $('.btn_yes').on('click', function(e){
        e.preventDefault();
        sectionPage.hide();
        $('.complete').show();
    });

});