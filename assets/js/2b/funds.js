let i = 2
    $('#moreAssets').click(function(){
        if(i == 2 ){
            $('#card-step2').fadeIn(1000);
            $('#moreAssets').fadeIn(0);
            $('#lessAssets').fadeOut(0);
        }else if(i == 3){
            $('#card-step3').fadeIn(1000);
            $('#moreAssets').fadeOut(0);
            $('#lessAssets').fadeIn(500);
        }
        $('#lessAssets').click(function(){
            $('#card-step2').fadeOut(500);
            $('#card-step3').fadeOut(500);
            $('#lessAssets').fadeOut(0);
            $('#moreAssets').fadeIn(0);
            i = 2;
        });
        i++;
    });
    

