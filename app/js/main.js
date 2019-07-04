

jQuery(document).ready(function($) {

    // var mobile_breakpoint = 768;   
    var mobile_breakpoint = 1024;   


    // jQuery('.reviews.owl-carousel').owlCarousel({

    //     // center: true,
    //     // loop:true,
    //     //true:0,
    //     nav:true,
    //     // dots:true,
    //     pagination: true,
    //     //Авто-прокрутка
    //     autoplay : false,
    //     stopOnHover : true,
    //     //items : 4
    //     mouseDrag : true,
    //     navSpeed : 1500,
    //     dotsSpeed : 1500,
    //     autoplaySpeed : 1500,
        
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         480:{
    //             items:2
    //         },
    //         768:{
    //             items:3
    //         },
    //         960:{
    //             items:3
    //         }
    //     }        
        
    // });

    jQuery(function($){
       $("input[type=phone]").mask("+7 (999) 999-9999");
    });


    slidersInit();

    triggerShowHide();

    modals();
    

    // smoothScrollMenu();

    if ( isMobileResolution(mobile_breakpoint) ) {

        // mobileMenu(); 

        searchMobile();   

        slidersTBInit();

        // accordeonMobile();

        dropdownList();

        
    } else {

        // addAnimate();

        // menuSideScroll();

        // megaMenu();

        // menuResponsive();

        // mwTabs();


    }

});




function isMobileResolution(mobile_breakpoint) {

    var container_width = jQuery(".container").innerWidth();
    var mobile_width = mobile_breakpoint;

    // console.log('isMobileResolution(): Hi, container_width: ' + container_width);
    return ( container_width < mobile_width );
}
