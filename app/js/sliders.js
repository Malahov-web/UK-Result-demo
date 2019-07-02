/*
 * . Sliders
 * ----------------------------------------------------------------- 
 */ 

    function slidersInit() {

        jQuery('.reviews.owl-carousel').owlCarousel({

            // center: true,
            loop:true,
            //true:0,
            nav:true,
            // dots:true,
            pagination: true,
            //Авто-прокрутка
            autoplay : false,
            stopOnHover : true,
            //items : 4
            mouseDrag : true,
            navSpeed : 1500,
            dotsSpeed : 1500,
            autoplaySpeed : 1500,
            
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                960:{
                    items:3
                }
            }        
            
        });

        jQuery('.sertificates__slider.owl-carousel').owlCarousel({

            // center: true,
            loop:true,
            //true:0,
            nav:true,
            dots:false,
            pagination: true,
            //Авто-прокрутка
            autoplay : false,
            stopOnHover : true,
            //items : 4
            mouseDrag : true,
            navSpeed : 1500,
            dotsSpeed : 1500,
            autoplaySpeed : 1500,
            
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:1
                },
                960:{
                    items:1
                }
            }        
            
        });

    }