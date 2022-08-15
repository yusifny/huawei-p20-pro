$(document).ready(function(){
    $('#time').text("15:10");
    $('#date').text("Thu, Aug 11");
    $('#hm-btn').click(function(){
        $('#lock-sc').toggle();
        $('#dark-mode-btn').toggle();
        $('#disp').toggleClass('disp-lock');
        new Audio('./cs-lock-sound.mp3').play();
    });

    $('.key').click(function(){
        let val = $('#query').val();
        let key = $(this).text();
        if(key == '='){
            $('#result').text(eval(val));
        }if(key == 'c'){
            $('#query').val('');
            $('#result').text('');
        }else{
            $('#query').val(val + key);
        }
    })
    $('.dark-mode-btn').click(function(){
        // $('body').toggleClass('dark-mode');
        $('.disp').toggleClass('disp-dark');
        $('#query').toggleClass('inp-dark');
        $('.one').toggleClass('one-dark');
        $('.two').toggleClass('two-dark');
        $('.key').toggleClass('key-dark');
        $('.minus').css('background-color', '#191919 important');
        $('.plus').toggleClass('key-dark');
    });
});