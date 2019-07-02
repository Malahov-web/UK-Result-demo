/*
 * 5. Trigger Show-Hide
 * ----------------------------------------------------------------- 
 */ 


    function triggerShowHide() {

        $('.js-trigger').attr('onclick', 'return false;');        

        var animationTemp;
        var animationTempDefault = 400;

        $('.js-trigger').on('click', function () {

            animationTemp = parseInt($(this).attr('data-animation-temp'));
            animationTemp = animationTemp || animationTempDefault;

// alert();
            target = $(this).attr('data-target'); 

            // $('#'+target+'').toggle(animationTemp);
            $('#'+target+'').toggleClass('active');
            $(this).toggleClass('active');


            // toggle button text    
            textOpen = jQuery(this).attr('data-text-open');
            textDefault = jQuery(this).attr('data-text-default');

            if ( textOpen && textDefault ) {
                if ( $(this).is('.active') == false ) {
                    $(this).text(textOpen);
                } else {
                    $(this).text(textDefault);
                }
            }
                     
        });
        

    }
