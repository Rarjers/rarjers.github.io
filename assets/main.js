$(document).ready(function(){
    // Turning off the video when the video ends
    let firstVideoProduct = document.getElementById('first_video_track');

    firstVideoProduct.addEventListener('ended', function(){
        $('.block_video_but_skip').fadeOut(1000, function(){
            $('#main_contend_visib').fadeIn(1000);
        })
    });

    // Turn off video at the touch of a button
    $('.icon_skip_video').on('click', function(){
        $('.block_video_but_skip').fadeOut(1000, function(){
            $('#first_video_track').remove();
            $('#main_contend_visib').fadeIn(1000);
        })
    })

    
    const funcChecksPhone = () => {
        let incorrectNamberPhone = $('#inputNamberPhone').val();
        
        
        console.log(incorrectNamberPhone.length);
        if (incorrectNamberPhone.length < 7 || incorrectNamberPhone.length > 12) {
            $('#inputNamberPhone').addClass("errorNamber");
            console.log('incorrect namber');
        } else {
            console.log('Apryw');
        }
        
    }

    $('#buttonSendForm').on('click', function(e){
        e.preventDefault();
        funcChecksPhone();
    })
    
});