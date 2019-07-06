

jQuery(document).ready(function($) {

    // var mobile_breakpoint = 768;   
    var mobile_breakpoint = 1024;   

   
    setTimeout(
        function() {  $('#preloader').fadeOut(400); }, 
        600
    );


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
